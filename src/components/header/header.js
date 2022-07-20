import Logo from "../logo/logo"
import Menu from "../menu/menu"
import Search from "../search/search"
import "./header.scss"

const Header = () => {
    return (
        <div className="header-list">
            <Logo />
            <Menu />
            <Search />
        </div>
    )
}
export default Header ;