import express from "express";
import { login, logout, singup } from "../contolllers/auth.controller";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie";
const router = express.Router();

router.get("/singup",singup);

router.get("/login",login);

router.get("/logout",logout);

export default router;
