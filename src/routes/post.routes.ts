import { Router, Request, Response } from "express"
import Post from "../models/post.interface";
import * as postController from "../controllers/post.controller"

const postsRouter = Router();

postsRouter.post('/', async (req: Request, res: Response) => {
    const postToSave: Post = req.body
    const result = await postController.create(postToSave)
    return res.status(201).send(result);
})

postsRouter.get('/', async (req: Request, res: Response) => {
    const results = await postController.getAll();
    return res.status(200).send(results);
})

postsRouter.get('/:id', async (req: Request, res: Response) => {
    console.log(req.params)
    const id = Number(req.params.id);
    try {
        const result = await postController.getById(id);
        return res.status(200).send(result);
    } catch (error) {
        return res.status(404).send(error);
    }    
})

postsRouter.put('/:id', async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const postToUpdate: Post = req.body

    try {
        const result = await postController.update(id, postToUpdate);
        return res.status(200).send(result);
    } catch (error) {
        return res.status(404).send(error);
    }  
    
})

postsRouter.delete('/:id', async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    try {
        const result = postController.deleteById(id);
        return res.status(204).send({success: result});
    } catch (error) {
        return res.status(404).send(error);
    } 
})

export default postsRouter;

