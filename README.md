# 📱 Real-Time Chat Application (MERN + WebSockets)

This is a real-time chat application developed using the **MERN stack** (MongoDB, Express.js, React.js, Node.js) and **Socket.io**.  
It supports **public group chats**, **direct 1-to-1 chats**, **online/offline status**, **media sharing**, and **persistent chat history**.

---

## 🚀 Features

### **1. Authentication**
- User Registration  
- User Login  
- JSON Web Tokens (JWT) for secure sessions  

### **2. Messaging**
- Real-time chat using Socket.io  
- Public group rooms (any user can join)  
- Direct Messages (DMs)  
- Persistent chat history stored in MongoDB  
- Automatically loads previous messages  
- Online/Offline status indicator  

### **3. Media Support**
- Upload & share images/files  
- Image preview inside chat  
- Download link for file attachments  

### **4. Search**
- Search users  
- Search public groups  
- Join any public group instantly  

### **5. UI/UX**
- WhatsApp-style layout  
- Responsive pages  
- Sidebar for DMs and Public Rooms  

---

## 🧰 Tech Stack

### **Frontend**
- React.js (Create React App)
- React Context API
- Axios
- Socket.io-client
- Custom CSS

### **Backend**
- Node.js
- Express.js
- MongoDB + Mongoose
- Socket.io
- Multer (file uploads)
- JWT Authentication
- CORS

---

## 📁 Project Folder Structure

application/
│
├── client/ # React frontend
│ ├── src/
│ │ ├── api/axios.js
│ │ ├── context/
│ │ ├── pages/
│ │ │ ├── Chat.js
│ │ │ ├── Login.js
│ │ │ └── Register.js
│ │ ├── styles.css
│ │ └── index.js
│ └── package.json
│
├── server/ # Node.js + Express backend
│ ├── config/db.js
│ ├── models/
│ │ ├── User.js
│ │ ├── Room.js
│ │ └── Message.js
│ ├── routes/
│ │ ├── auth.js
│ │ ├── rooms.js
│ │ ├── messages.js
│ │ ├── users.js
│ │ └── upload.js
│ ├── uploads/
│ ├── socket.js
│ ├── server.js
│ └── package.json


---

## ⚙️ Environment Variables

Create a `.env` file inside the **server** folder:



PORT=5000
MONGO_URI=mongodb://localhost:27017/realtime-chat
JWT_SECRET=your_secret_key
CLIENT_URL=http://localhost:3000


If using MongoDB Atlas, replace the connection URL accordingly.

---

## 🛠 Installation & Setup (Local)

### **1. Install Prerequisites**

| Software | Minimum Version |
|----------|-----------------|
| Node.js  | v18+ |
| npm      | v9+  |
| MongoDB  | v6+  |

Check versions:


node -v
npm -v


---

### **2. Backend Setup**

cd server
npm install


Start backend:
node server.js
Or with nodemon:
npx nodemon server.js


Backend runs at:
➡ http://localhost:5000

### **3. Frontend Setup**
cd client
npm install
npm start


Frontend runs at:

➡ http://localhost:3000

**How to Use the App**
✔ Step 1 — Register
Create an account using username, email and password.

✔ Step 2 — Login
Login using your credentials.

✔ Step 3 — Create Public Group
Click Create Public Room → group is visible to all users.

✔ Step 4 — Join Groups
Any user can:
Search group name
Click → Join instantly

✔ Step 5 — Direct Messages
Search a username → click → DM is created automatically.

✔ Step 6 — Real-Time Chatting
Messages appear instantly for all users in the same room.

✔ Step 7 — Media Sharing
Press + → Select file → Sent instantly.

✔ Step 8 — Persistent Chat History
Re-open a room → previous messages load automatically.

📸 Screenshots (Assignment Requirement)
Screenshots attached in the email submission.

Includes:
Login Page
Register Page
Main Chat Dashboard
Public Rooms
Group Chat
Direct Messages
Media Upload
Real-time chat (two accounts)

📌 Version Details
Node.js: v23.11.0
npm: 11.6.4
MongoDB: 7.0
React: 18.2.0
Express: 4.18.2
Socket.io: 4.7.5
(Exact versions from package.json)

📝 Notes

Works best on Chrome or Edge browser.
For real-time testing open:
One window normally
One window in incognito mode

Author
Name: Kothapally Keerthana
Roll Number: 22BD1A1289
Email: kothapallykeerthana0402@gmail.com
