import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();

const app = express();

// ✅ CORS (allow frontend)
app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST"],
  credentials: true
}));

// ✅ Middleware
app.use(express.json());

// ✅ Test route (IMPORTANT for checking)
app.get("/", (req, res) => {
  res.send("API is running...");
});

// ✅ Routes
app.use("/api/contact", contactRoutes);

// ✅ MongoDB config
mongoose.set("strictQuery", false);

const PORT = process.env.PORT || 5000;
let db_mode = "mongodb"; // Track which mode we're using

// ✅ Start server
const startServer = async () => {
  if (!process.env.MONGO_URI) {
    console.warn("⚠️  MONGO_URI not found. Running in TEST MODE with in-memory storage.");
    db_mode = "test";
    app.locals.db_mode = db_mode;
    startTestServer();
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB Connected");
    db_mode = "mongodb";
    app.locals.db_mode = db_mode;

    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    );
  } catch (err) {
    console.error(err);
    console.warn("⚠️  MongoDB connection failed. Running in TEST MODE with in-memory storage.");
    db_mode = "test";
    app.locals.db_mode = db_mode;
    startTestServer();
  }
};

const startTestServer = () => {
  app.locals.db_mode = db_mode;
  app.listen(PORT, () =>
    console.log(`✅ Server running on http://localhost:${PORT} (TEST MODE - in-memory storage)`)
  );
};

// Export db_mode for routes
app.locals.db_mode = db_mode;

startServer();