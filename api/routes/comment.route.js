import express from 'express';
import {verifyToken} from "../utils/verifyUser.js";
import {createComment, getComments, likeComment, editComment, deleteComment, getCommentsAll} from "../controllers/comment.controller.js";

const router = express.Router();

router.post("/create",verifyToken,createComment);
router.get("/getComments/:postId",getComments);
router.put("/likeComment/:commentId",verifyToken,likeComment);
router.put("/editComment/:commentId",verifyToken,editComment);
router.delete("/deleteComment/:commentId",verifyToken,deleteComment);
router.get("/getCommentsAll",verifyToken,getCommentsAll);

export default router;