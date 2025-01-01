import express from "express";
import { login, logout, singup } from "../contolllers/auth.controller";

const router = express.Router();

router.get("/singup",singup);

router.get("/login",login);

router.get("/logout",logout)

export default router;
