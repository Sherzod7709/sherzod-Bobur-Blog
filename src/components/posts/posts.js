import { useContext } from "react"
import { PostsContex } from "../../contexts/posts-contex"
import Post from "../post/post"

const Posts = () => {
    const { paginatedPosts } = useContext(PostsContex)
    return (
        <div>
            {paginatedPosts?.map(post=> <Post post={post} key={post.id} />)}
        </div>
    )
}
export default Posts