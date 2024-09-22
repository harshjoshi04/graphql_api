import { Router } from "express";
import { CreateBook } from "../controller/book.controller.js";

const router = Router();

router.post("/create", CreateBook);

export default router;
