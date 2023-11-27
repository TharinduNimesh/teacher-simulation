import express from "express";
import { check, validationResult } from "express-validator";
import { PrismaClient } from "@prisma/client";

// Middlewares
import auth from "./middleware/auth";

const router = express.Router();
const prisma = new PrismaClient();

router.get("/", [auth], async (req, res) => {
  const chats = await prisma.chat.findMany({
    where: {
      user_id: req.user.id,
    },
    orderBy: {
      id: "desc",
    },
  });

  res.json({
    chats,
  });
});

// message validation rules
const messageValidations = [
  check("message")
    .trim()
    .notEmpty()
    .withMessage("Message is required")
    .isLength({ min: 1 })
    .withMessage("Message must be at least 1 character long"),
  check("chat").trim().notEmpty().withMessage("Chat is required"),
];

router.post("/message", [auth, messageValidations], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json(errors.array());
  }

  const prompt = {
    prompt: {
      messages: [
        {
          content: req.body.message,
        },
      ],
    },
    temperature: 0.1,
    candidate_count: 1,
  };

  let output = await fetch(
    `https://generativelanguage.googleapis.com/v1beta2/models/chat-bison-001:generateMessage?key=${process.env.PALM_API_KEY}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(prompt),
    }
  );

  output = await output.json();

  let chat = req.body.chat;
  if (chat == 0) {
    chat = await prisma.chat.create({
      data: {
        title: req.body.message,
        user_id: req.user.id,
      },
    });
    chat = chat.id;
  }

  const message = await prisma.message.createMany({
    data: [
      {
        message: req.body.message,
        is_bot: 0,
        chat_id: parseInt(chat),
      },
      {
        message: output.candidates[0].content,
        is_bot: 1,
        chat_id: parseInt(chat),
      },
    ],
  });

  res.json({
    response: output.candidates[0].content,
    chat: chat,
  });
});

router.get("/:id", async (req, res) => {
  let chat = parseInt(req.params.id);

  const messages = await prisma.message.findMany({
    where: {
      chat_id: chat,
    },
    orderBy: {
      id: "asc",
    },
  });

  res.json({
    messages,
  });
});

export default router;
