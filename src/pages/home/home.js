import Container from "../../components/container/container";
import Posts from "../../components/posts/posts";
import Fasebook from "../../assets/img/facebook.png"
import Cat from "../../assets/img/cat.png"
import Twitter from "../../assets/img/twitter.png"
import In from "../../assets/img/in.png" 
import "./home.scss"
import Footer from "../../components/footer/footer";
import Pagination from "../../components/pagination/pagination";
import Header from "../../components/header/header";

const Home = () => {

    return (
        <div className="home-page">
            <Container className="home__container">
                <Header />
                <main className="home-main">
                    <div className="home-main__left">
                        <h1 className="home-main__left-title">What  I  do !</h1>
                        <div>
                            <p className="home-main__left-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquet, orci in bibendum luctus, turpis ante pretium velit, eu rutrum augue erat ac eros. Cras ultricies mattis convallis.</p>
                            <div className="home-main__left-next">
                                <p className="home-main__left-explore">EXPLORE ME </p> <span className="right"> {">"} </span>
                            </div>
                        </div>
                        <div className="home-main__brands">
                            <img src={Fasebook} alt="Fasebook" />
                            <img src={Cat} alt="Cat" />
                            <img src={Twitter} alt="Twitter" />
                            <img src={In} alt="In" />
                        </div>
                    </div>
                    <section>
                        <h2 className="home-main-title">Recent Posts</h2>
                        <Posts />
                    </section>
                </main>
                    <Pagination />

            </Container>
            <Footer />
        </div>
    )
}
export default Home;