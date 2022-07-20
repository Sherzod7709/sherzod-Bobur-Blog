import { useContext } from "react";
import { PostsContex } from "../../contexts/posts-contex";
import "./pagination.scss"

const Pagination = () => {
    const {filtredPosts,setActivePage} = useContext(PostsContex)

    if(!filtredPosts) {
        return null;
    }

    const handlePaginationClick = (evt) => {
        if(evt.target.matches("button")){
            setActivePage(+evt.target.dataset.id)
        };
    };

    const pagesCounts = Math.ceil(filtredPosts.length / 10)
    return (
        <ol onClick={handlePaginationClick} className="pagination-items">
            {Array(pagesCounts).fill().map((_,index) => (
                <span key={index} className="pagination-item">
                    <button data-id={index+1} >{index +1}</button>
                </span>
            ))}
        </ol>
    )
}
export default Pagination ;