import { Link } from "react-router-dom";
import Oclock from "../../assets/img/oclock.png"
import "./post.scss"

const Post = ( {post} ) => {
    return (
        <article className="home-post">
            <header className="home-post__header">
            <p className="home-post__data">{post.data}</p>
            <p className="home-post__type">{post.types}</p>
            </header>
            <h3 className="home-post__title">  <Link className="home-post__tittle-link" to={`/post/${post.id}`}>{post.title}</Link>  </h3>
            <div className="home-main__oclock">
                <img src={Oclock} alt="" />
                <span className="hame-main__time">{post.times} minutes read</span>
            </div>
        </article>
    )
}
export default Post ;