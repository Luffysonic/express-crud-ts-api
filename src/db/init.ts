import Post from "../models/post.interface"

const dbInit = () => {
    Post.sync()
}

export default dbInit;