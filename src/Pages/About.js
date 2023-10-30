import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function About() {
    useEffect(() => {
        document.title = "About Us Page";
    }, []);
    return (
        <>
            <div className="stricky-header stricky-header--two stricked-menu main-menu">
                <div className="sticky-header__content">
                </div>{/* /.sticky-header__content */}
            </div>{/* /.stricky-header */}
            {/*Page Header Start*/}
            <section className="page-header clearfix" style={{ backgroundImage: 'url(http://164.100.196.138/lms/assets/img/img2.jpg)' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="page-header__wrapper clearfix">
                                <div className="page-header__title">
                                    <h2>About</h2>
                                </div>
                                <div className="page-header__menu">
                                    <ul className="page-header__menu-list list-unstyled clearfix">
                                        <li><Link to="/">Home</Link></li>
                                        <li className="active">about</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*Page Header End*/}
            <div className="fontresize" id="mu-course-content" style={{ minHeight: '450px' }}>
                <div className="inner-content py-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="innertitle">
                                    <a href="/" className="btn btn-primary btn-sm pull-right"><span className="fa fa-print" /> Print</a>
                                </div><br />
                                <div className="pagedetail" id="print">
                                    <div className="mu-course-content-area">
                                        <div className="row">
                                            <div className="col-md-12">
                                                {/* start course content container */}
                                                <div className="mu-course-container mu-course-details">
                                                    <h4>About Us</h4>
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <div className="mu-latest-course-single">
                                                                <div className="mu-latest-course-single-content">
                                                                    <div className="row">
                                                                        <div className="col-md-12">
                                                                            <div id="mu-gallery">
                                                                                <div className="mu-gallery-area">
                                                                                    <div className="mu-gallery-content" id="print">
                                                                                        <div className="pagedetail">
                                                                                            <p className="welcome-one__left-text" style={{ textAlign: 'justify' }}>
                                                                                                eShiksha is an education management portal which simplifies the management and provides enormous facilities to an Institute. Our portal assists educators to manage, analyze and report extensive data, while making your institutes management “A cashless and paperless management”. It covers all the aspects of educational business, including administrative, academic and accounting activities. With eShiksa, institutes can easily connect with students and parents which helps in student’s growth because it creates a single window for viewing various reports on the academic front and paying all kinds of institute fees online.</p>                                                                          </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* end course content container */}
                            <span className="last-update">Last Updated On:12 Jan, 2022</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
