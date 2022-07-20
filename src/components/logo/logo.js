import "./logo.scss"
import logotip from "../../assets/img/logo.png"

const Logo = () => {
    return (
        <div className="logo">
            <img className="logo-img" src={logotip} alt="logo" />
            <h1 className="logo-title">Bobur Blog</h1>
        </div>
    )
}
export default Logo