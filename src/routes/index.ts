import { Router } from "express";
import postsRouter from "./post.routes";

const router = Router();

router.use("/posts", postsRouter);

export default router;