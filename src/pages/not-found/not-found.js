import { useContext } from "react";
import {Link} from "react-router-dom";
import Container from "../../components/container/container";
import { AuthContex } from "../../contexts/auth";
import notImg from "../../assets/img/not.png";
import "./not-found.scss";
import Header from "../../components/header/header";

const NotFound = () => {
    const {token} = useContext(AuthContex)
        return (
            <Container className="notfound__container">
                <Header />
                <main className="notfound-main">
                    <img className="notfound-main__img" src={notImg} alt="Error" />
                    <p className="notfound-main__title">Page not found - 404</p>
                    <Link to={"/"+( token ? "" : "login" )}>{token ? "TAKE ME HOME! >" : "TAKE ME LOGIN! >"}</Link>
                </main>
            </Container>
        )
    }
    export default NotFound;