# My Portfolio

A modern, responsive portfolio website showcasing my skills, projects, and experience as a Full Stack Developer specializing in MERN stack, Java, and Python.

![Portfolio Preview](https://via.placeholder.com/800x400/0a0e1a/ffffff?text=Portfolio+Preview)

## 🚀 Features

- **Responsive Design**: Optimized for all devices (desktop, tablet, mobile)
- **Modern UI/UX**: Built with React, Tailwind CSS, and smooth animations
- **Interactive Components**: Dynamic hero section with animated canvas
- **Contact Form**: Functional contact form with backend integration
- **Downloadable Assets**: Resume and internship certificate downloads
- **Project Showcase**: Highlighting key projects and technologies
- **Skills Visualization**: Interactive skills and tech stack display

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern React with hooks and concurrent features
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **ESLint** - Code linting and formatting

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling

### Development Tools
- **Git** - Version control
- **VS Code** - Code editor
- **npm** - Package management

## 📁 Project Structure

```
My-Portfolio/
├── client/                 # React frontend application
│   ├── public/
│   │   ├── assets/         # Static assets (resume, certificate, images)
│   │   └── favicon.svg
│   ├── src/
│   │   ├── components/     # Reusable React components
│   │   │   ├── About.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── hero.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Skills.jsx
│   │   │   └── TechStack.jsx
│   │   ├── pages/          # Page components
│   │   │   └── SkillsPage.jsx
│   │   ├── assets/         # Component-specific assets
│   │   ├── App.jsx         # Main app component
│   │   ├── main.jsx        # App entry point
│   │   └── index.css       # Global styles
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
├── server/                 # Node.js backend
│   ├── models/             # MongoDB models
│   │   └── Contact.js
│   ├── routes/             # API routes
│   │   └── contactRoutes.js
│   ├── assets/             # Server assets
│   ├── server.js           # Main server file
│   └── package.json
├── .gitignore              # Git ignore rules
└── README.md               # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- MongoDB (local or cloud instance)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Prashant11555/My-Portfolio.git
   cd My-Portfolio
   ```

2. **Install client dependencies**
   ```bash
   cd client
   npm install
   ```

3. **Install server dependencies**
   ```bash
   cd ../server
   npm install
   ```

4. **Set up environment variables**

   Create a `.env` file in the server directory:
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   NODE_ENV=development
   ```

5. **Start the development servers**

   **Terminal 1 - Backend:**
   ```bash
   cd server
   npm start
   ```

   **Terminal 2 - Frontend:**
   ```bash
   cd client
   npm run dev
   ```

6. **Open your browser**

   Navigate to `http://localhost:5173` (Vite default port)

## 📱 Usage

### Development
- **Frontend**: `npm run dev` in client directory
- **Backend**: `npm start` in server directory
- **Build**: `npm run build` in client directory for production build

### Key Features
- Navigate through different sections using the navbar
- View project details and technologies used
- Download resume and internship certificate
- Contact form sends messages to backend (requires MongoDB setup)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Prashant Tripathi**
- Email: [prashanttripathi264@gmail.com]
- LinkedIn: [https://www.linkedin.com/in/prashant-kumar-tripathi-79926527a]
- Portfolio: [https://prashant11555.github.io/My-Portfolio]

---

⭐ **Star this repo** if you found it helpful!
