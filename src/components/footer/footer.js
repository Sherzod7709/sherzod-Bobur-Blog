import Logo2 from "../../assets/img/logo2.png"
import "./footer.scss"

const Footer = () => {
    return (
        <footer className="home-footer">
            <div className="home-footer__left">
                <img className="home-footer__left-img" src={Logo2} alt="" />
            </div>
            <div className="home-footer__right">
                <section className="home-footer__section">
                    <h4 className="home-footer__section-title">FIGHT WITH ME ON:</h4>
                    <ul className="home-footer__section-items">
                        <li className="home-footer__section-item">Twitter</li>
                        <li className="home-footer__section-item">Instagram</li>
                        <li className="home-footer__section-item">Telegram</li>
                        <li className="home-footer__section-item">You Tube</li>
                        <li className="home-footer__section-item">Figma</li>
                    </ul>
                </section>
                <section className="home-footer__section">
                    <h4 className="home-footer__section-title">WHAT I HAVE DONE:</h4>
                    <ul className="home-footer__section-items">
                        <li className="home-footer__section-item">Xalq Kutubxonasi</li>
                        <li className="home-footer__section-item">Websitee</li>
                        <li className="home-footer__section-item">Website</li>
                        <li className="home-footer__section-item">Play Market</li>
                        <li className="home-footer__section-item">App Store</li>
                    </ul>
                </section>
                <section className="home-footer__section">
                    <p className="home-footer__section-title">Contact</p>
                    <ul className="home-footer__section-items">
                        <li className="home-footer__section-item">Blog</li>
                        <li className="home-footer__section-item">Dribble</li>
                        <li className="home-footer__section-item">Behance</li>
                    </ul>
                </section>
            </div>
        </footer>
    )
}
export default Footer ;
