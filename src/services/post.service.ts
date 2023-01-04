import Post, { BasePost, CompletePost } from "../models/post.interface";
import * as repository from "../repositories/post.repository"


export const create = async (data: Post): Promise<CompletePost> => {
    return repository.create(data)
}

export const getAll = async (): Promise<Post[]> => {
    return repository.getAll();
}

export const getById = async (id: number): Promise<Post> => {
    try {
        return repository.getById(id);
    } catch(e) {
        throw (e as Error);
    }
    
}

export const update = async (id: number, data: BasePost): Promise<Post> => {
    return repository.update(id, data);
}

export const deleteById = async (id: number): Promise<boolean> => {
    return repository.deleteById(id);
}