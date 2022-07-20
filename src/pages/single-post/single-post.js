import { useContext, } from "react";
import { useParams } from "react-router-dom";
import Container from "../../components/container/container";
import { PostsContex } from "../../contexts/posts-contex";
import "./single-post.scss"
import Like from "../../assets/img/like.png"
import Share from "../../assets/img/share.png"
import Oclock from "../../assets/img/oclock.png"
import SingleImg from "../../assets/img/single.png"
import Footer from "../../components/footer/footer"
import Header from "../../components/header/header";
import Posts from "../../components/posts/posts";

const SinglePost = () => {
    const { id } = useParams()
    const { posts, setPosts } = useContext(PostsContex)
    const currentPost = posts?.find(post => post.id === +id)

    if (!currentPost) {
        return <h2>Bo'm Bo'sh</h2>
    }

    const handlelikeClick = () => {
        const plusLikeIndex = posts.findIndex(( post => post.id === currentPost.id ))
        const newLikesCount = currentPost.likes +1 ;
        const newPosts = [
            ...posts.slice(0 ,plusLikeIndex),
            {
                ...currentPost,
                likes:newLikesCount,
            },
            ...posts.slice(plusLikeIndex+1)
        ]
            setPosts(newPosts)
        
    }

    return (
        <div className="single-page">
            <Container className="single__container">
                <Header/>
                <main className="single-main">
                    <section className="single-main__left">
                        <div >
                            <img onClick={handlelikeClick} src={Like} alt="single-main__like-img" />
                            <p className="contact">{currentPost.likes}</p>
                        </div>
                        <div>
                        <img src={Share} alt="single-main__share-img" />
                        <p className="contact">{currentPost.share}</p>
                        </div>
                    </section>
                    <section className="single-main__right">
                        <p className="single-main__type">{currentPost.types}</p>
                        <h3 className="single-main__title">{currentPost.title}</h3>
                        <div className="single-main__right-data">
                            <p>{currentPost.data}</p> {"|"}
                            <img src={Oclock} alt="" />
                            <p>{currentPost.times} minutes read</p>
                        </div>
                        <div className="single-main__list">
                            <img className="single-main__list-img" src={SingleImg} alt="single-img" />
                            <p className="single-main__text">
                                {currentPost.body}
                            </p >
                            <div className="single-main__inform">
                                <p >
                                    Sed commodo ligula vitae mollis tristique. Maecenas egestas semper mauris. Duis tempus blandit ultrices. Proin elit.uz nulla, viverra id suscipit quis, tristique a dolor.
                                </p>
                                <p className="single-main__inform-data">
                                    ‘Designing For Sustainability, Tim Frick, 2014'
                                </p>
                            </div>
                            <h3 className="single-main__lesson">Lessons Learnt: Best Practice</h3>
                            <ul className="single-main__lesson-items">
                                <li className="single-main__lesson-item">
                                    Morbi congue odio vel luctus aliquam. Morbi accumsan sapien at lorem ultricies 
                                    aliquam eu eu nisl. Suspendisse.
                                </li>
                                <li className="single-main__lesson-item">
                                    Maecenas sit amet ligula auctor neque aliquam placerat et ac neque. Proin risus eros, fringilla eu suscipit dignissim, dignissim.
                                </li>
                            </ul>
                            <h2 className="single-main__list-likes">More like this</h2>
                            <Posts/>
                            
                        </div>
                    </section>
                </main>
            </Container>
            <Footer />
        </div>
    )
}
export default SinglePost;