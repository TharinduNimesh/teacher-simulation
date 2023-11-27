import express from "express";
import { check, validationResult } from "express-validator";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";

const router = express.Router();

const prisma = new PrismaClient();

// Login validation rules
const loginValidations = [
  check("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Email must be a valid"),
  check("password")
    .trim()
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
];

router.post("/login", [loginValidations], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json(errors.array());
  }

  const user = await prisma.user.findFirst({
    where: {
      email: req.body.email,
    },
  });

  if (!user) {
    return res.status(403).json({ message: "Invalid Login Credentials" });
  }

  const passwordValid = await Bun.password.verify(
    req.body.password,
    user.password
  );

  if (!passwordValid) {
    return res.status(403).json({ message: "Invalid Login Credentials" });
  }

  const token = jwt.sign(
    {
      id: user.id,
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "24h",
    }
  );

  res.cookie("token", token, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24,
  });

  return res.json({ message: "Login Success", user });
});

// Register validation rules
const registerValidations = [
  check("fname")
    .trim()
    .notEmpty()
    .withMessage("First Name is required")
    .isLength({ min: 2 })
    .withMessage("First Name must be at least 2 characters long"),
  check("lname")
    .trim()
    .notEmpty()
    .withMessage("Last Name is required")
    .isLength({ min: 2 })
    .withMessage("Last Name must be at least 2 characters long"),
  check("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Email must be valid"),
  check("password")
    .trim()
    .notEmpty()
    .isStrongPassword()
    .withMessage("Password must be Strong")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
];

router.post("/register", [registerValidations], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json(errors.array());
  }

  let user = await prisma.user.findFirst({
    where: {
      email: req.body.email,
    },
  });

  if (user) {
    return res
      .status(422)
      .json({ message: "User with this email, already exists" });
  }

  const hashedPassword = await Bun.password.hash(req.body.password);

  user = await prisma.user.create({
    data: {
      first_name: req.body.fname,
      last_name: req.body.lname,
      email: req.body.email,
      password: hashedPassword,
    },
  });

  return res.json(user);
});

export default router;
