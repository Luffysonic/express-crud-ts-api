import Post, { BasePost, CompletePost } from '../models/post.interface'

export const create = async (data: Post): Promise<CompletePost> => {
    const post = await Post.create(data)
    return post;
}

export const getAll = async (): Promise<Post[]> => {
    return await Post.findAll();
}

export const getById = async (id: number): Promise<Post> => {
    const post = await Post.findByPk(id)

    if(!post) {
        throw new Error("Not Found")
    }

    return post;
}

export const update = async (id: number, data: BasePost): Promise<Post> => {
    const post = await Post.findByPk(id)

    if(!post) {
        throw new Error("Not Found")
    }

    const updatedPost = await (post as Post).update(data)


    return updatedPost;
}

export const deleteById = async (id: number): Promise<boolean> => {

    const deletedPost = await Post.destroy({
        where: {id}
    })

    return !!deletedPost;
}
