import express from 'express';
import {verifyToken} from "../utils/verifyUser.js";
import {createComment} from "../controllers/comment.controller.js";
import {getComments} from "../controllers/comment.controller.js";
import {likeComment} from "../controllers/comment.controller.js";

const router = express.Router();

router.post("/create",verifyToken,createComment);
router.get("/getComments/:postId",getComments);
router.put("/likeComment/:commentId",verifyToken,likeComment);

export default router;