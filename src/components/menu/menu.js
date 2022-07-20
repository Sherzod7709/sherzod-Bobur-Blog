import TypeBadge from "../type-badge/type-badge"
import MenuImg from "../../assets/img/menu.png"
import "./menu.scss"
import { useContext, useState } from "react"
import { PostsContex } from "../../contexts/posts-contex"
import xImg from "../../assets/img/x.png"

const typeList = [
    {
        id:1,
        name:"All",
    },
    {
        id:2,
        name:"Design Theory"
    },
    {
        id:3,
        name:"UX"
    },
    {
        id:4,
        name:"UI"
    },
    {
        id:5,
        name:"Typography"
    }
]
    
    const Menu = () => {
        const { posts, setFiltredPosts } = useContext(PostsContex)
        const [ navbarOpen, setNavbarOpen] = useState(false)
        const menuFilterChange = (evt) => {
            const typesName = (evt.target.dataset.value);
            const filteredTypes = posts?.filter(tip => tip.types === typesName)
            setFiltredPosts( typesName === "All"? posts  : filteredTypes );
        }
        const handleToggle = () => {
            setNavbarOpen(!navbarOpen)
        }
    return (
        <div className="menu-list">
            <div className="menu-burger" onClick={handleToggle}>
                {navbarOpen? <img className="menuX-burger" src={xImg} alt="buger" /> : <img className="menu-burger" src={MenuImg} alt="close" />}
            </div>
        <form onChange={menuFilterChange} className={navbarOpen? "burger-form" : "menu-form" }>
            {typeList.map(type => (
                <label className="menu-label" key={type.id} >
                    <input data-value={type.name} className="menu-label__radio visually-hidden" type="radio" name="type" />
                    <TypeBadge className="menu-label__style">{type.name}</TypeBadge>
                </label>
            ))}
        </form>
        </div>
    )
}
export default Menu ;