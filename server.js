import express from "express";

// Import the routes
import authRoutes from "./express/auth";
import ChatRoutes from "./express/chat";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: process.env.CLIENT_URL,
  })
);

app.get("/", (req, res) => {
  res.redirect("http://localhost:3000");
});

// Use the routes
app.use("/auth", authRoutes);
app.use("/chat", ChatRoutes);

app.listen(8000, () => {
  console.log("Server is listening on port 8000");
});
