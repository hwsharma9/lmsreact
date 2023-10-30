import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
    useEffect(() => {
        document.title = "Contact Us Page";
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
                                    <h2>Contact Us</h2>
                                </div>
                                <div className="page-header__menu">
                                    <ul className="page-header__menu-list list-unstyled clearfix">
                                        <li><Link to="/">Home</Link></li>
                                        <li className="active">Contact Us</li>
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
                                    <a href="/" className="btn btn-primary btn-sm pull-right"><span className="fa fa-print">Print</span></a>
                                </div><br />
                                <div className="pagedetail" id="print">
                                    <div className="mu-course-content-area">
                                        <div className="row">
                                            <div className="col-md-12">
                                                {/* start course content container */}
                                                <div className="mu-course-container mu-course-details">
                                                    <h4>Contact Us</h4>
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
                                                                                            <div className="col-sm-12">
                                                                                                <div className="row col1">
                                                                                                    <div className="col-md-6">
                                                                                                        <div className="mapouter">
                                                                                                            <div className="gmap_canvas">
                                                                                                                <iframe title='gmap canvas' frameBorder={0} height={431} id="gmap_canvas" marginHeight={0} marginWidth={0} scrolling="no" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7331.989726023002!2d77.429822!3d23.243274!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x992a886e4153cadb!2sState%20IT%20Center%20(%20Data%20Center)!5e0!3m2!1sen!2sin!4v1616138642992!5m2!1sen!2sin" width={520} /></div>
                                                                                                            <style type="text/css" dangerouslySetInnerHTML={{ __html: "\n.mapouter{position:relative;text-align:right;height:431px;width:520px;}.gmap_canvas {overflow:hidden;background:none!important;height:431px;width:520px;}\t\t\t\t" }} />
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div className="col-md-6">
                                                                                                        <strong>Our office</strong>
                                                                                                        <address>
                                                                                                            <strong> Madhya Pradesh Agency for Promotion of Information Technology (MAP_IT)</strong><br />
                                                                                                            47-A, Arera Hills, BHopal.<br />
                                                                                                            Bhopal(M.P.)-462011<br />
                                                                                                            Ph :755-2518300, 0755-2518702<br />
                                                                                                            Fax : +91-755-2579824</address>
                                                                                                        <address>
                                                                                                            <strong>Email</strong><br />
                                                                                                            <a href="mailto:#">map_it[at]mp[dot]nic[dot]in</a></address>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>                                                                          </div>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
