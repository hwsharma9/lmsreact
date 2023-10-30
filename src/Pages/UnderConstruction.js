import React from 'react'
import { Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function UnderConstruction() {
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
                                    <h2>Site is Under Construction!!</h2>
                                </div>
                                <div className="page-header__menu">
                                    <ul className="page-header__menu-list list-unstyled clearfix">
                                        <li><Link to="/">Home</Link></li>
                                        <li className="active">Site is Under Construction!!</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
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
                                                    <h4>Site is Under Construction!!</h4>
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
                                                                                                    <div className="d-flex align-items-center justify-content-center vh-100">
                                                                                                        <div className="container-xxl container-p-y">
                                                                                                            <div className="misc-wrapper text-center">
                                                                                                                <h2 className="mb-2 mx-2">Under Maintenance!</h2>
                                                                                                                <p className="mb-4 mx-2">
                                                                                                                    Sorry for the inconvenience but we're performing some maintenance at the moment
                                                                                                                </p>
                                                                                                                <Link to="/" className="btn btn-primary">Back to home</Link>
                                                                                                                <div className="mt-4">
                                                                                                                    <Image src="https://demos.themeselection.com/sneat-bootstrap-html-laravel-admin-template/demo/assets/img/illustrations/girl-doing-yoga-light.png" alt="girl-doing-yoga-light" width="500" className="img-fluid" data-app-dark-img="illustrations/girl-doing-yoga-dark.png" data-app-light-img="illustrations/girl-doing-yoga-light.png" />
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
