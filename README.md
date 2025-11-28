📌 Student Management System (MERN Stack)

A full-stack CRUD application built using the MERN stack (MongoDB, Express.js, React.js, Node.js).
This system allows users to add, view, update, delete, and search student records.

🚀 Features

Add new student

View student list

Update existing student details

Delete a student record

Search students by name, roll, class, or percentage

Responsive UI built with Bootstrap

REST API integration using Axios

🧰 Tech Stack
Frontend	Backend	Database	Styling
React.js	Node.js	MongoDB	Bootstrap
Axios	Express.js	Mongoose	CSS
📂 Project Structure
mern-student-management
│
├── backend
│   ├── models
│   ├── routes
│   ├── server.js
│   └── package.json
│
└── frontend
    ├── src
    ├── public
    └── package.json

🛠 Installation & Setup
1. Clone the repository
git clone https://github.com/sahilgite1023/mern-student-management.git
cd mern-student-management

2. Setup Backend
cd backend
npm install


Create .env file and add:

MONGO_URL=your_mongodb_connection_string


Start backend:

npm start

3. Setup Frontend
cd ../frontend
npm install
npm start

🖥 Running the Application

Backend runs on → http://localhost:5000/

Frontend runs on → http://localhost:3000/

🔧 API Endpoints
Method	Endpoint	Description
POST	/students/add	Add new student
GET	/students	Get all students
PUT	/students/update/:id	Update student
DELETE	/students/delete/:id	Delete student
🏆 Future Enhancements

Sorting by name & percentage

Toast notifications

Authentication (Login / Register)

Pagination

Export data to Excel / PDF

Deployment to cloud (Render + Vercel)

👨‍💻 Author

Sahil Gite
🔗 GitHub: github.com/sahilgite1023

⭐ Support

If you like this project, give it a ⭐ on GitHub!
