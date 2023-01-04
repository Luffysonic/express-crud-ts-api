import Post, { BasePost, CompletePost } from "../models/post.interface";
import * as postService from "../services/post.service"

export const create = async (data: Post): Promise<CompletePost> => {
    return postService.create(data)
}

export const getAll = async (): Promise<Post[]> => {
    return postService.getAll();
}

export const getById = async (id: number): Promise<Post> => {
    try {
        return postService.getById(id);
    } catch (error) {
        throw error;
    }
}

export const update = async (id: number, data: BasePost): Promise<Post> => {
    try {
        return postService.update(id, data);
    } catch (error) {
        throw error;
    }
}

export const deleteById = async (id: number): Promise<boolean> => {
    try {
        return postService.deleteById(id);
    } catch (error) {
        throw error;
    }
}