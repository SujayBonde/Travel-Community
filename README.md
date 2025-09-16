
## 🧭 TravelConnect

Welcome to **TravelConnect** — a vibrant platform where travelers share their bus journey stories, ask questions, and connect with fellow explorers. Built with ❤️ by **Sujay**, this full-stack web app combines a sleek React frontend with a robust Express + MongoDB backend.

### 🚀 Features

- 📝 Submit and browse travel stories with image support  
- 💬 Start and reply to forum threads  
- 🔐 Firebase authentication for secure login/signup  
- 🖼️ Image upload via URL or Cloudinary  
- 🎨 Stylish UI with Tailwind CSS  
- 📄 Responsive layout for mobile and desktop  
- 🔍 Filter stories by user contributions on profile page  

---

### 🛠️ Tech Stack

**Frontend**  
- React.js  
- React Router  
- Tailwind CSS  
- Axios  

**Backend**  
- Node.js  
- Express.js  
- MongoDB + Mongoose  
- Firebase Auth  
- Cloudinary (optional for image uploads)  

---

### 📦 Installation

#### 1. Clone the repository

```bash
git clone https://github.com/your-username/travelconnect.git
cd travelconnect
````

#### 2. Install dependencies

```bash
# Client
cd client
npm install

# Server
cd ../server
npm install
```

#### 3. Set up environment variables

Create a `.env` file in the `server/` folder:

```env
MONGO_URI=your_mongodb_connection_string
FIREBASE_API_KEY=your_firebase_api_key
```

---

### 🧪 Running Locally

```bash
# Start backend
cd server
npm start

# Start frontend
cd ../client
npm start
```

Frontend runs on `http://localhost:3000`
Backend runs on `http://localhost:5000`

---

### 📁 Folder Structure

```
travelconnect/
├── client/         # React frontend
│   ├── src/
│   └── public/
├── server/         # Express backend
│   ├── routes/
│   ├── models/
│   └── config/
```

---

### 👤 Author

Made with passion by **Sujay Bonde**
Connect with me on [GitHub](https://github.com/SujayBonde) and [LinkedIn](https://www.linkedin.com/in/sujay-bonde-7a3b95314/)

---

### 📜 License

This project is licensed under the MIT License.


