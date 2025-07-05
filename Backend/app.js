import express from "express";
import { config } from "dotenv";
import cors from "cors";
import { sendEmail } from "./utils/sendEmail.js";

// Load environment variables only in development
if (process.env.NODE_ENV !== "production") {
  config(); // Loads from .env
}

const app = express();
const router = express.Router();

// CORS Configuration
app.use(
  cors({
    origin: [process.env.FRONTEND_URL], // Set this in Vercel dashboard
    methods: ["POST"],
    credentials: true,
  })
);

// Body Parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Default test route
app.get("/", (req, res) => {
  res.send("✅ Backend server is running!");
});

// Mail sending route
router.post("/send/mail", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Please provide all details",
    });
  }

  try {
    await sendEmail({
      email: "musharafaejaz9044@gmail.com", // Your inbox
      subject: "Portfolio CONTACT",
      message,
      userEmail: email,
    });

    res.status(200).json({
      success: true,
      message: "Message Sent Successfully.",
    });
  } catch (error) {
    console.error("Error while sending email:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
});

// Prefix all routes with /api
app.use("/api", router);

// Export for Vercel (serverless)
export default app;
