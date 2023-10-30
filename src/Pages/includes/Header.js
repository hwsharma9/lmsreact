import React, { useContext } from 'react'
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { updateLang, updateTheme } from '../../features/app/AppSlice';
import CustomFrontMenu from './CustomFrontMenu';
export default function Header(props) {
    const location = useLocation();

    const dispatch = useDispatch();

    return (
        <>
            <header className="main-header main-header--two clearfix">
                <div className="main-header--two__top clearfix">
                    <div className="container">
                        <div className="main-header--two__top-inner clearfix">
                            <div className="col-md-6 offset-md-2">
                                <div className="main-header--two__top-left">
                                    <ul className="main-header--two__top-contact-info list-unstyled">
                                        <li className="main-header--two__top-contact-info-single">
                                            <div className="text">
                                                <Link to={location.pathname} className="sm js-font-decrease white" title="Decrease font size"><span>A-</span></Link>
                                            </div>
                                            <div className="text">
                                                <Link to={location.pathname} className="md js-font-normal white" title="Reset font size"><span>A</span></Link>
                                            </div>
                                            <div className="text">
                                                <Link to={location.pathname} className="lg js-font-increase white" title="Increase font size"><span>A+</span></Link>
                                            </div>
                                            <div className="text">
                                                <p id="styleOptions">
                                                    <Link to={location.pathname} title="High Contrast" className="palette theme-black" onClick={() => dispatch(updateTheme('theme2'))}>A</Link>
                                                    <Link to={location.pathname} title="Normal Contrast" className="palette theme-regular" onClick={() => dispatch(updateTheme('theme1'))} style={{ color: '#3b4bc0' }}>A</Link>
                                                </p>
                                            </div>
                                            <div className="text">
                                                <p>
                                                    <Link to={location.pathname} title="High Contrast" className="palette theme-black" onClick={() => dispatch(updateLang('hi'))}>H</Link>
                                                    <Link to={location.pathname} title="Normal Contrast" className="palette theme-regular" onClick={() => dispatch(updateLang('en'))} style={{ color: '#3b4bc0' }}>E</Link>
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="main-header--two__top-right clearfix">
                                <div className="main-header--two__top-right-login-register">
                                    <ul className="list-unstyled">
                                        <li><Link to="/underconstruction" className="nav-link">Screen
                                            Reader</Link></li>
                                        <li><Link to="/underconstruction" className="nav-link">Skip to Nav
                                            Content</Link></li>
                                        <li><Link to="/underconstruction" className="nav-link">Skip to
                                            Main Content</Link></li>
                                        <li className="higlight"><Link to="/underconstruction">Login</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="main-header-two__bottom">
                    <div className="container">
                        <div className="main-header-two__bottom-inner clearfix">
                            {/* Start menu */}
                            <section id="mu-menu">
                                <nav className="main-menu main-menu--1">
                                    <div className="main-menu__inner">
                                        <div className="left">
                                            <div className="logo-box1" id="ct">
                                                <Link to={location.pathname}>
                                                    <img src="http://164.100.196.138/lms/assets/img/logo.png" alt="" />
                                                    <h1 className="name">e-Shiksha</h1>
                                                    <span className="subhead">Govt. of Madhya Pradesh</span>
                                                </Link>
                                            </div>
                                        </div>
                                        <Link to={location.pathname} className="mobile-nav__toggler"><i className="fa fa-bars" /></Link>
                                        <div className="middle menushift_right">
                                            <CustomFrontMenu {...props} />
                                            {/* <ul className="main-menu__list">
                                                <li id="menu_184" className="nav-item">
                                                    <Link to="about" className="fa fa-icon" title="About Us">About Us</Link>
                                                </li>
                                                <li id="menu_176" className="nav-item">
                                                    <Link to="/underconstruction" title="Downloads">Downloads</Link>
                                                </li>
                                                <li id="menu_177" className="nav-item">
                                                    <Link to="/underconstruction" title="Videos">Videos</Link>
                                                </li>
                                                <li id="menu_1" className="nav-item">
                                                    <Link to="/contactus" className="it-backbone" title="Contact Us" >Contact Us</Link>
                                                </li>
                                            </ul> */}
                                        </div>
                                        <div className="right">
                                            <div className="main-menu__right">
                                                <div className="main-menu__right-cart-search">
                                                    <div className="main-menu__right-search-box">
                                                        <Link to="/underconstruction" className="thm-btn search-toggler">Search</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </nav>
                            </section>
                            {/* End menu */}
                        </div>
                    </div>
                </div>
            </header >

            <div className="stricky-header stricky-header--two stricked-menu main-menu">
                <div className="sticky-header__content">
                </div>
            </div>
        </>
    )
}
