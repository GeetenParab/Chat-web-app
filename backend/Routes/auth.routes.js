import  express  from "express";
import { login, logout, signup } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup",signup);

router.post("/login",login);

router.post("/logout",logout);

// localhost:5000//api/auth/login
export default router;

