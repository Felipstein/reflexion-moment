import { Router } from "express";
import { listAllPostsController } from "../modules/Posts/ListAllPosts";
import { listPostController } from "../modules/Posts/ListPost";
import { createPostController } from "../modules/Posts/CreatePost";
import { updatePostController } from "../modules/Posts/UpdatePost";
import { deletePostController } from "../modules/Posts/DeletePost";
import ensureAuth from "../middlewares/ensureAuth";

const route = Router();

route.get('/posts', ensureAuth, (req, res) => {
  return listAllPostsController.handle(req, res);
});

route.get('/posts/:id', ensureAuth, (req, res) => {
  return listPostController.handle(req, res);
});

route.post('/posts', ensureAuth, (req, res) => {
  return createPostController.handle(req, res);
});

route.put('/posts/:id', ensureAuth, (req, res) => {
  return updatePostController.handle(req, res);
});

route.delete('/posts/:id', ensureAuth, (req, res) => {
  return deletePostController.handle(req, res);
});

export { route as postRoutes };