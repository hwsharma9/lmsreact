import React, { lazy } from 'react'
import useFetch from '../../Hooks/useFetch';
import BootstrapSpinner from '../BootstrapSpinner';
import { Outlet } from 'react-router-dom';

const Header = lazy(() => import('../../Pages/includes/Header'));
const FooterSlider = lazy(() => import('../../Pages/includes/FooterSlider'));
const FooterMenu = lazy(() => import('../../Pages/includes/FooterMenu'));

export default function Layout(props) {
    const { isLoading, serverError, apiData } = useFetch(
        "GET",
        "http://127.0.0.1:80/wqc_for_live/api/common/index",
        {}
    );
    return (
        <>
            <div className="page-wrapper">
                {isLoading && <BootstrapSpinner />}
                {apiData?.top_menus &&
                    <Header menus={apiData.top_menus} />
                }
                <Outlet />
                {
                    apiData?.footer_slider &&
                    <FooterSlider menus={apiData.footer_slider} />
                }
                {
                    apiData?.bottom_menus &&
                    <FooterMenu menus={apiData.bottom_menus} />
                }
                {serverError && <p>{serverError}</p>}
            </div>
            <div className="loader" style={{ display: 'none' }} />
            <div className="mobile-nav__wrapper">
                <div className="mobile-nav__overlay mobile-nav__toggler" />
                {/* /.mobile-nav__overlay */}
                <div className="mobile-nav__content">
                    <span className="mobile-nav__close mobile-nav__toggler"><i className="fa fa-times" /></span>
                    <div className="logo-box">
                        <a href="index.html" aria-label="logo image"><img src="./assets/images/resources/mobilemenu_logo.png" width={155} alt="" /></a>
                    </div>
                    <div className="mobile-nav__container" />
                    <ul className="mobile-nav__contact list-unstyled">
                        <li>
                            <i className="icon-phone-call" />
                            <a href="mailto:map_it@mp.nic.in">map_it@mp.nic.in</a>
                        </li>
                        <li>
                            <i className="icon-letter" />
                            <a href="/">755-2518300, 0755-2518702</a>
                        </li>
                    </ul>
                    <div className="mobile-nav__top">
                        <div className="mobile-nav__social">
                            <li><a href="/">Screen Reader </a></li>
                            <li><a href="/">Skip to Nav Content</a></li>
                            <li><a href="/"> Skip to Main Content</a></li>
                            <li className="higlight"><a href="/">Login</a></li>
                        </div>
                    </div>
                </div>
                {/* /.mobile-nav__content */}
            </div>
            {/* /.mobile-nav__wrapper */}
            <div className="search-popup">
                <div className="search-popup__overlay search-toggler" />
                {/* /.search-popup__overlay */}
                <div className="search-popup__content">
                    <form action="http://164.100.196.138/lms/course/search" name="frmSearchBox" className="form-inline my-2 my-lg-0 position-relative" autoComplete="off" method="post" acceptCharset="utf-8">
                        <input type="hidden" name="valid_token" defaultValue="c07ee1005d741f23a7ae48582b7ac2ac" />
                        <label htmlFor="search" className="sr-only">search here</label>{/* /.sr-only */}
                        <input name="search_course" id="search" type="text" className="form-control mr-sm-2" aria-label="Search" placeholder="Search Course" />
                        <button type="submit" aria-label="search submit" className="thm-btn2"><i className="fa fa-search" aria-hidden="true" /></button>
                    </form>
                </div>
                {/* /.search-popup__content */}
            </div>
            {/* /.search-popup */}
            <a href="/" data-target="html" className="scroll-to-target scroll-to-top"><i className="fa fa-angle-up"></i></a>
        </>
    )
}
