import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import PageNotFound from './PageNotFound';
import { useSelector } from 'react-redux';

export default function Lms() {
    const { page_url } = useParams();
    const [page, setPage] = useState({});

    // The useSelector is used to fetch initial state of app Redux
    const lang = useSelector((state) => state.app.lang)

    useEffect(() => {
        const params = page_url;
        async function fetchPageData() {
            const request = await fetch(`${process.env.REACT_APP_BASE_URL}/api/common/get-page-data?page_url=${params}`);
            const json = await request.json();
            setPage(json);
            document.title = (lang === 'en' ? json?.page_data?.page_title_en : json?.page_data?.page_title_hi);
        }
        fetchPageData();
    }, [page_url])

    return (
        <>
            {
                (page.page_data === false) ?
                    <PageNotFound /> :
                    <div>
                        <section className="page-header clearfix" style={{ backgroundImage: 'url(http://164.100.196.138/lms/assets/img/img2.jpg)' }}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="page-header__wrapper clearfix">
                                            <div className="page-header__title">
                                                <h2>{lang === 'en' ? page?.page_data?.page_title_en : page?.page_data?.page_title_hi}</h2>
                                            </div>
                                            <div className="page-header__menu">
                                                <ul className="page-header__menu-list list-unstyled clearfix">
                                                    <li><Link to="/">Home</Link></li>
                                                    <li className="active">{lang === 'en' ? page?.page_data?.page_title_en : page?.page_data?.page_title_hi}</li>
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
                                                                <h4>{lang === 'en' ? page?.page_data?.page_title_en : page?.page_data?.page_title_hi}</h4>
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
                                                                                                                <div dangerouslySetInnerHTML={{ __html: (lang === 'en' ? page?.page_data?.page_description_en : page?.page_data?.page_description_hi) }}></div>
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
                        </div>
                    </div>
            }
        </>
    )
}