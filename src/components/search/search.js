import "./search.scss"
import lupa from "../../assets/img/lupa.png"
import { useContext, useRef } from "react"
import { PostsContex } from "../../contexts/posts-contex"

const Search = () => {
    const { posts, setFiltredPosts } = useContext(PostsContex)
    const inputRef = useRef()

    const handleSearchSubmit = (evt) => {
        evt.preventDefault()
        const inputValue = inputRef.current.value;
            const filteredPost = posts.filter(post => post.title.includes(inputValue))
            setFiltredPosts(filteredPost);
    }

    return (
        <form onSubmit={handleSearchSubmit} method="get" className="search-form">
            <input ref={inputRef} className="search-form__input" placeholder="Search" type="search" />
                <button className="search-form__button">
                    <img className="search-icon__img" src={lupa} alt="look" />
                </button>
        </form>
    )
}
export default Search ;