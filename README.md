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
  <img width="1919" height="969" alt="Screenshot 2025-08-06 194516" src="https://github.com/user-attachments/assets/933841a3-6e1f-41b3-b713-c896a0d6fa96" />
-  About Section
-  <img width="1916" height="965" alt="Screenshot 2025-08-06 194532" src="https://github.com/user-attachments/assets/0e2b4993-4ce5-4e8b-9bcb-16c9af2e4616" />
-  Activities Section
-  <img width="1917" height="965" alt="Screenshot 2025-08-06 194541" src="https://github.com/user-attachments/assets/7ce95806-84d9-4829-8815-f6b68dba0278" />
- 📝 Volunteer Form
  <img width="1919" height="970" alt="image" src="https://github.com/user-attachments/assets/c50b02a5-dcf7-4a6e-a632-72c5ef1f134f" />
  <img width="1919" height="968" alt="image" src="https://github.com/user-attachments/assets/2e6b7078-fb8a-410e-872f-721a690215c3" />
- 🔐 Admin Login Page
 <img width="1912" height="959" alt="image" src="https://github.com/user-attachments/assets/cf04b211-7b10-4f14-bc3c-f0051e62394c" />
- 📊 Admin Dashboard
 <img width="1915" height="971" alt="image" src="https://github.com/user-attachments/assets/2051f5a6-7209-400d-94a4-1d5b7b0ba619" />

## 🛢️ Database (MongoDB)
- Database: volunteerDB
- Collection: applicants, admins

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



