import { Link } from "react-router-dom";
import BootstrapSpinner from "../../Components/BootstrapSpinner";

export default function FooterMenu(props) {
    return (
        <>
            {/* Start footer */}
            <footer className="footer-one">
                <div className="footer-one__bg" style={{ backgroundImage: 'url(assets/images/footer-v1-bg.jpg)' }}>
                </div>{/* /.footer-one__bg */}
                <div className="footer-one__top">
                    <div className="container">
                        <div className="row">
                            {/*Start Footer Widget Column*/}
                            {/*   <div class="col-xl-1 col-lg-1 col-md-1  offset-md-2 wow animated fadeInUp" data-wow-delay="0.1s">
                    <div class="footer-widget__column footer-widget__about">
                        <div class="footer-widget__about-logo">
                            <a href="index.html"><img src="http://164.100.196.138/lms/assets/img/logo.png" height="50px" alt=""></a>
                        </div>
                    </div>
                </div> */}
                            {/*End Footer Widget Column*/}
                            {/*Start Footer Widget Column*/}
                            <div className="col-xl-8 col-lg-6  offset-md-3 col-md-6 wow animated fadeInUp" data-wow-delay="0.3s">
                                <div className="footer-widget__column footer-widget__courses">
                                    <ul className="footer-widget__courses-list list-unstyled">
                                        {props?.menus ? props.menus.map(menu => <li key={menu.id}><Link title={menu.menu_name} to={'lms/' + menu.controller_name}>{menu.title_en}</Link></li>) : <BootstrapSpinner />}
                                        {/* <li><Link title="Feedback" to="/underconstruction">Feedback</Link></li>
                                        <li><Link title="Hyperlink Policy" to="/underconstruction">Hyperlink Policy</Link></li>
                                        <li><Link title="Terms of Use" to="/underconstruction">Terms of
                                            Use</Link></li>
                                        <li><Link title="Privacy Policy" to="/underconstruction">Privacy Policy</Link></li>
                                        <li><Link title="Disclaimer" to="/underconstruction">Disclaimer</Link></li>
                                        <li><Link title="Site Map" to="/underconstruction">Site Map</Link></li> */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Start Footer One Bottom*/}
                <div className="footer-one__bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-md-6">
                                <div className="footer-one__bottom-inner">
                                    <div className="footer-one__bottom-text text-left">
                                        <p>Last Updated On : 25-Sep-2023<br />
                                            Content Provided &amp; Maintained by MAP_IT</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-md-6">
                                <div className="footer-one__bottom-inner">
                                    <div className="footer-one__bottom-text text-right" style={{ textAlign: 'right' }}>
                                        <p>Designed &amp; developed by <Link to="/underconstruction">Center of Excellence (CoE), MAP_IT</Link>.<br />
                                            Copyright © 2021. All Rights Reserved.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*End Footer One Bottom*/}
            </footer>
            {/* End footer */}
        </>
    )
}
