import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import parse from 'html-react-parser';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import SwiperCore from "swiper";
// Import Swiper styles
import 'swiper/css';
import { useSelector } from 'react-redux'
import HeaderSlider from './includes/HeaderSlider';

function Home() {
    SwiperCore.use([Autoplay])

    // The useSelector is used to fetch initial state of app Redux
    const lang = useSelector((state) => state.app.lang)


    const [homeData, setHomeData] = useState([]);

    useEffect(() => {
        document.title = "e-Shiksha";

        async function fetchHomeData() {
            const request = await fetch(`${process.env.REACT_APP_BASE_URL}/api/home/index`);
            const json = await request.json();
            setHomeData(json);
        }
        fetchHomeData();
    }, []);
    return (
        <>
            <section className="main-slider main-slider-two">
                <HeaderSlider />
            </section>
            {/* End Slider */}
            <div style={{ clear: 'both' }} />
            {/*Start Welcome One*/}
            <section className="welcome-one fontresize">
                <div className="container">
                    <div className="row">
                        {/*Start Welcome One Left*/}
                        <div className="col-xl-6">
                            <div className="welcome-one__left">
                                <div className="section-title">
                                    <span className="section-title__tagline">Know More About Us</span>
                                    <h2 className="section-title__title">
                                        {(lang === 'en') ? homeData.data?.DataList?.page_title_en : homeData.data?.DataList?.page_title_hi}</h2>
                                </div>
                                <span className="welcome-one__left-text" style={{ textAlign: 'justify' }}>
                                    {(lang === 'en') ? parse(String(homeData.data?.DataList?.page_description_en)) : parse(String(homeData.data?.DataList?.page_description_hi))}
                                </span>
                                <div className="welcome-one__left-btn">
                                    <Link to="/lms/about-us" title="Read More" className="thm-btn">Read
                                        More</Link>
                                </div>
                            </div>
                        </div>
                        {/*End Welcome One Left*/}
                        {/*Start Welcome One Right*/}
                        <div className="col-xl-6">
                            <div className="welcome-one__right clearfix">
                                <div className="shape1 rotate-me"><Image src="http://164.100.196.138/lms/assets/img/shapes/thm-shape1.png" alt="" /></div>
                                <div className="welcome-one__right-img1 wow slideInRight" data-wow-delay="100ms" data-wow-duration="2500ms">
                                    <div className="welcome-one__right-img1-inner">
                                        <Image src="http://164.100.196.138/lms/assets/img/img_banner.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="welcome-one__right-img2 wow zoomIn" data-wow-delay="100ms" data-wow-duration="3500ms">
                                    <Image src="http://164.100.196.138/lms/assets/img/img_banner1.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-12 bg_purple p-40">
                            <ul className="welcome-one__left-features-box list-unstyled">
                                {/*Start Welcome One Left Features Box Single*/}
                                <li className="welcome-one__left-features-box-single">
                                    <div className="welcome-one__left-features-box-single-icon">
                                        <span className="icon-employee" />
                                    </div>
                                    <div className="welcome-one__left-features-box-single-title">
                                        <h4>255<br />Courses enrolled in<br /> e-Shiksha</h4>
                                    </div>
                                </li>
                                {/*End Welcome One Left Features Box Single*/}
                                {/*Start Welcome One Left Features Box Single*/}
                                <li className="welcome-one__left-features-box-single">
                                    <div className="welcome-one__left-features-box-single-icon">
                                        <span className="icon-seo" />
                                    </div>
                                    <div className="welcome-one__left-features-box-single-title">
                                        <h4>209942 <br />Users registered on <br /> e-Shiksha</h4>
                                    </div>
                                </li>
                                {/*End Welcome One Left Features Box Single*/}
                            </ul>
                        </div>
                        {/*End Welcome One Right*/}
                    </div>
                </div>
            </section>
            <div style={{ clear: 'both' }} />
            <section className="service-v2-area">
                <div className="container">
                    <div className="sec-title style-two text-center">
                        <h1>OUR SERVICES</h1>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="service-left">
                                {/*Start single item*/}
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="single-service-v2-item hvr-float-shadow text-center">
                                            <div className="icon-holder">
                                                <span className="icon-employee-1" />
                                            </div>
                                            <div className="text-holder">
                                                <h3>FLEXIBLE LEARNING</h3>
                                                <p>
                                                </p><p>
                                                    e-Shiksha LMS is a single scalable web-based platform for diverse
                                                    learning needs allowing learners to access anytime and from anywhere,
                                                    independent of browser or device.</p>
                                                <p />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*End single item*/}
                                {/*Start single item*/}
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="single-service-v2-item hvr-float-shadow text-center">
                                            <div className="icon-holder">
                                                <span className="icon-employee-2" />
                                            </div>
                                            <div className="text-holder">
                                                <h3>BLENDED TRAININGS</h3>
                                                <p>
                                                </p><p>
                                                    e-Shiksha LMS facilitates ‘Blended training’ for its
                                                    learners providing hybid learning with technology based virtual
                                                    classrooms and traditional classroom trainings.</p>
                                                <p />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*End single item*/}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="service-v2-img-box">
                                <Image src="http://164.100.196.138/lms/assets/img/main_img.png" alt="Awesome Image" />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="service-right">
                                {/*Start single item*/}
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="single-service-v2-item hvr-float-shadow text-center">
                                            <div className="icon-holder">
                                                <span className="icon-software-1" />
                                            </div>
                                            <div className="text-holder">
                                                <h3>E-LEARNING AS A SERVICE</h3>
                                                <p>
                                                </p><p>
                                                    e-Shiksha offers e-Learning as a Service (eLaS) to Government
                                                    departments with latest e-Content modules and state-of-art studio
                                                    facility available free of cost.</p>
                                                <p />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*End single item*/}
                                {/*Start single item*/}
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="single-service-v2-item hvr-float-shadow text-center">
                                            <div className="icon-holder">
                                                <span className="icon-software-1" />
                                            </div>
                                            <div className="text-holder">
                                                <h3>EMERGING TECHNOLOGIES</h3>
                                                <p>
                                                </p><p>
                                                    Up to date e-Content on prevailing topics on emerging technologies for
                                                    future ready workforce.</p>
                                                <p />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*End single item*/}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div style={{ clear: 'both' }} />
            <section className="counter-one jarallax" data-jarallax data-speed="0.2" data-imgposition="50% 0%" style={{ backgroundImage: 'url(http://164.100.196.138/lms/assets/img/bg_mid.png)' }}>
                <div className="container">
                    <div className="sec-title style-two text-center pb-20">
                        <h1 className="white">ONBOARDED DEPARTMENTS</h1>
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="categories-two__inner">
                                <div className="shape1 wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms"><Image src="http://164.100.196.138/lms/assets/img/thm-shape41.png" alt="" /></div>
                                <ul className="categories-two__wrapper list-unstyled">
                                    <li className="categories-two__single text-center wow fadeInUp animated animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                        <div className="categories-two__single-icon">
                                            <Link to="/underconstruction"><span className="icon_img"><Image src="http://164.100.196.138/lms/uploads/departments/tcu.png" /></span></Link>
                                            <div className="overly-bg" style={{ backgroundImage: 'url(http://164.100.196.138/lms/assets/img/resources/categories-v2-overlay-img.png)' }}>
                                            </div>
                                        </div>
                                        <div className="categories-two__single-text">
                                            <h5><Link to="/underconstruction">MAP_IT - TCU</Link></h5>
                                        </div>
                                    </li>
                                    <li className="categories-two__single text-center wow fadeInUp animated animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                        <div className="categories-two__single-icon">
                                            <Link to="/underconstruction"><span className="icon_img"><Image src="http://164.100.196.138/lms/uploads/departments/iti.jpg" /></span></Link>
                                            <div className="overly-bg" style={{ backgroundImage: 'url(http://164.100.196.138/lms/assets/img/resources/categories-v2-overlay-img.png)' }}>
                                            </div>
                                        </div>
                                        <div className="categories-two__single-text">
                                            <h5><Link to="/underconstruction">Skill
                                                Development</Link></h5>
                                        </div>
                                    </li>
                                    <li className="categories-two__single text-center wow fadeInUp animated animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                        <div className="categories-two__single-icon">
                                            <Link to="/underconstruction"><span className="icon_img"><Image src="http://164.100.196.138/lms/uploads/departments/phq.png" /></span></Link>
                                            <div className="overly-bg" style={{ backgroundImage: 'url(http://164.100.196.138/lms/assets/img/resources/categories-v2-overlay-img.png)' }}>
                                            </div>
                                        </div>
                                        <div className="categories-two__single-text">
                                            <h5><Link to="/underconstruction">Police Head
                                                Quarters</Link></h5>
                                        </div>
                                    </li>
                                    <li className="categories-two__single text-center wow fadeInUp animated animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                        <div className="categories-two__single-icon">
                                            <Link to="/underconstruction"><span className="icon_img"><Image src="http://164.100.196.138/lms/uploads/departments/mprrda.png" /></span></Link>
                                            <div className="overly-bg" style={{ backgroundImage: 'url(http://164.100.196.138/lms/assets/img/resources/categories-v2-overlay-img.png)' }}>
                                            </div>
                                        </div>
                                        <div className="categories-two__single-text">
                                            <h5><Link to="/underconstruction">MPRRDA</Link>
                                            </h5>
                                        </div>
                                    </li>
                                    <li className="categories-two__single text-center wow fadeInUp animated animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                        <div className="categories-two__single-icon">
                                            <Link to="/underconstruction"><span className="icon_img"><Image src="http://164.100.196.138/lms/uploads/departments/mpdhe.png" /></span></Link>
                                            <div className="overly-bg" style={{ backgroundImage: 'url(http://164.100.196.138/lms/assets/img/resources/categories-v2-overlay-img.png)' }}>
                                            </div>
                                        </div>
                                        <div className="categories-two__single-text">
                                            <h5><Link to="/underconstruction">Higher
                                                Education</Link></h5>
                                        </div>
                                    </li>
                                    <li className="categories-two__single text-center wow fadeInUp animated animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                        <div className="categories-two__single-icon">
                                            <Link to="/underconstruction"><span className="icon_img"><Image src="http://164.100.196.138/lms/uploads/departments/dmi.png" /></span></Link>
                                            <div className="overly-bg" style={{ backgroundImage: 'url(http://164.100.196.138/lms/assets/img/resources/categories-v2-overlay-img.png)' }}>
                                            </div>
                                        </div>
                                        <div className="categories-two__single-text">
                                            <h5><Link to="/underconstruction">DMI</Link></h5>
                                        </div>
                                    </li>
                                    <li className="categories-two__single text-center wow fadeInUp animated animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                        <div className="categories-two__single-icon">
                                            <Link to="/underconstruction"><span className="icon_img"><Image src="http://164.100.196.138/lms/uploads/departments/epco.jpg" /></span></Link>
                                            <div className="overly-bg" style={{ backgroundImage: 'url(http://164.100.196.138/lms/assets/img/resources/categories-v2-overlay-img.png)' }}>
                                            </div>
                                        </div>
                                        <div className="categories-two__single-text">
                                            <h5><Link to="/underconstruction">EPCO</Link></h5>
                                        </div>
                                    </li>
                                    <li className="categories-two__single text-center wow fadeInUp animated animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                        <div className="categories-two__single-icon">
                                            <Link to="/underconstruction"><span className="icon_img"><Image src="http://164.100.196.138/lms/uploads/departments/mptenders.png" /></span></Link>
                                            <div className="overly-bg" style={{ backgroundImage: 'url(http://164.100.196.138/lms/assets/img/resources/categories-v2-overlay-img.png)' }}>
                                            </div>
                                        </div>
                                        <div className="categories-two__single-text">
                                            <h5><Link to="/underconstruction">MP-Tenders</Link></h5>
                                        </div>
                                    </li>
                                    <li className="categories-two__single text-center wow fadeInUp animated animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                        <div className="categories-two__single-icon">
                                            <Link to="/underconstruction"><span className="icon_img"><Image src="http://164.100.196.138/lms/uploads/departments/mptaas.png" /></span></Link>
                                            <div className="overly-bg" style={{ backgroundImage: 'url(http://164.100.196.138/lms/assets/img/resources/categories-v2-overlay-img.png)' }}>
                                            </div>
                                        </div>
                                        <div className="categories-two__single-text">
                                            <h5><Link to="/underconstruction">MP-TAAS</Link>
                                            </h5>
                                        </div>
                                    </li>
                                    <li className="categories-two__single text-center wow fadeInUp animated animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                        <div className="categories-two__single-icon">
                                            <Link to="/underconstruction"><span className="icon_img"><Image src="http://164.100.196.138/lms/uploads/departments/mpsrlm.png" /></span></Link>
                                            <div className="overly-bg" style={{ backgroundImage: 'url(http://164.100.196.138/lms/assets/img/resources/categories-v2-overlay-img.png)' }}>
                                            </div>
                                        </div>
                                        <div className="categories-two__single-text">
                                            <h5><Link to="/underconstruction">M.P. State
                                                Rural Livelihood Mission</Link></h5>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <Link to="/underconstruction" className="thm-btn text-center col-xl-2 col-lg-2 col-md-2 offset-md-5">View all</Link>
                    </div>
                </div>
            </section>
            <div style={{ clear: 'both' }} />
            <section className="testimonials-two">
                <div className="testimonials-two__pattern"><Image src="http://164.100.196.138/lms/assets/img/pattern/testimonials-two-left-pattern.png" alt="" />
                </div>
                <div className="container">
                    <div className="row">
                        {/*Start Testimonials Two Left*/}
                        <div className="col-xl-12">
                            <div className="testimonials-two__left">
                                <div className="section-title">
                                    <span className="section-title__tagline">View All Our Courses</span>
                                    <h2 className="section-title__title">Our Courses</h2>
                                </div>
                            </div>
                        </div>
                        {/*End Testimonials Two Left*/}
                        {/*Start Testimonials Two Right*/}
                        <div className="testimonials-two__right d-flex flex-wrap gap-1">
                            <Swiper
                                spaceBetween={50}
                                slidesPerView={4}
                                autoplay={{
                                    delay: 4000,
                                    disableOnInteraction: false,
                                }}
                            >
                                {
                                    homeData?.data?.our_cources ? homeData.data.our_cources.map(course =>
                                        <SwiperSlide key={course.id}>
                                            <div className="card" style={{ width: '18rem' }}>
                                                <Image src="http://164.100.196.138/lms/assets/img/img1.jpg" className="card-img-top" alt="" style={{ height: '150px' }} />
                                                <div className="card-body">
                                                    <div className="courses-one__single-content">
                                                        <h6 className="courses-one__single-content-name">
                                                            <p><span>Course Duration :</span> <span>20 Hrs</span></p>
                                                        </h6>
                                                        <h4 className="courses-one__single-content-title"><a href="http://164.100.196.138/lms/course/view/ZXMrdUIvZjNGTkhmUWpKUC90V3RuQT09/UWFXZ0h0dkFvaWcyNUZRd2MwQmg1dz09" title={course.title}>{course.title}</a></h4>
                                                        <ul className="courses-one__single-content-courses-info list-unstyled">
                                                            <li><Link to="/pagenotfound">View
                                                                All Courses</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ) : ''}
                            </Swiper>
                        </div>

                        {/*End Testimonials Two Right*/}
                    </div>
                </div >
            </section >
            <div style={{ clear: 'both' }} />
        </>
    );
}

export default Home;
