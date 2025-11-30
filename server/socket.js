const Message = require("./models/Message");
const User = require("./models/User");

module.exports = (io) => {
  const onlineUsers = new Map();

  io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    // user comes online
    socket.on("join-user", async (userId) => {
      socket.userId = userId;
      onlineUsers.set(userId, socket.id);

      await User.findByIdAndUpdate(userId, { online: true });
      io.emit("user-online-status", { userId, online: true });
    });

    // join a room
    socket.on("join-room", (roomId) => {
      socket.join(roomId);
    });

    // send message
    socket.on("send-message", async (msg) => {
      try {
        const saved = await Message.create({
          roomId: msg.roomId,
          sender: socket.userId,
          text: msg.text || "",
          mediaUrl: msg.mediaUrl || null,
          mediaType: msg.mediaType || null,
        });

        // broadcast saved message to everyone in room
        io.to(msg.roomId).emit("receive-message", saved);
      } catch (err) {
        console.error("Socket send-message error:", err);
      }
    });

    // disconnect
    socket.on("disconnect", async () => {
      const userId = socket.userId;
      if (userId) {
        onlineUsers.delete(userId);
        await User.findByIdAndUpdate(userId, { online: false });
        io.emit("user-online-status", { userId, online: false });
      }
      console.log("User disconnected:", socket.id);
    });
  });
};
