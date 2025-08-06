# 🌟 Volunteer Portal

A MERN stack web application to manage **volunteer/intern registrations** with an **admin panel** to view applicants.

---

## 📁 Folder Structure

```
volunteer-portal/
│
├── client/         # React frontend
├── server/         # Node.js + Express backend
├── README.md
└── ...
```

---

## 🚀 Features

- 📝 Volunteer Registration Form
- 🔐 Admin Authentication
- 📄 View list of applicants (Admin Panel)
- 📸 File Upload (Photo)
- 🌐 MongoDB Integration
- 🎨 Glassmorphism UI

---

## 🛠️ Tech Stack

- **Frontend:** React, React-Bootstrap, Axios
- **Backend:** Node.js, Express
- **Database:** MongoDB (with Mongoose)
- **Authentication:** JWT
- **UI/UX:** Glassmorphism

---

## ⚙️ Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/volunteer-portal.git
cd volunteer-portal
```

---

### 2️⃣ Install Dependencies

#### 📦 Server Setup (Backend)

```bash
cd server
npm install
```

#### 💻 Client Setup (Frontend)

```bash
cd ../client
npm install
```

---

### 3️⃣ Configure Environment Variables

Create a `.env` file inside the `server/` folder with the following content:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

---

### 4️⃣ Run the Application

#### ▶️ Start the Backend

```bash
cd server
npm run dev
```

#### ▶️ Start the Frontend

Open a new terminal:

```bash
cd client
npm run dev
```

- Frontend: http://localhost:5173
- Backend: http://localhost:5000

---

### 🔐 Admin Login

To login as **admin**, manually insert an admin user in your MongoDB `Applicants` collection:

```json
{
  "email": "admin@gmail.com",
  "password": "$2a$10$xyz..." 
}
```

👉 Use a bcrypt hash generator like https://bcrypt-generator.com to generate the hashed password.

---

## 📸 Screenshots

Add screenshots here:

- ✅ Home Page
- 📝 Volunteer Form
- 🔐 Admin Login Page
- 📊 Admin Dashboard

---

## 🤝 Contributing

Pull requests are welcome!  
For major changes, open an issue first to discuss what you'd like to change.

---

## 📝 License

MIT

---

## ✨ Credits

Designed and Developed by **Likhitha**  
Built using the **MERN Stack** with ❤️

