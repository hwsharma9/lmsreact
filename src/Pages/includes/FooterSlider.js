import { Link } from "react-router-dom";
import BootstrapSpinner from "../../Components/BootstrapSpinner";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import SwiperCore from "swiper";
// Import Swiper styles
import 'swiper/css';

export default function FooterSlider(props) {
    SwiperCore.use([Autoplay])
    return (
        <>
            {/* Start Footer Slider */}
            <section className="registration-two">
                {/* partners */}
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="registration-two__wrapper">
                                <div className="container">
                                    <Swiper
                                        spaceBetween={50}
                                        slidesPerView={6}
                                        autoplay={{
                                            delay: 1000,
                                            disableOnInteraction: false,
                                        }}
                                    >
                                        {props?.menus ? props.menus.map(menu =>
                                            <SwiperSlide key={menu.title}>
                                                <div className="swiper-slide">
                                                    <Link to={menu.url} target="_blank" title={menu.title}>
                                                        <img src={`http://164.100.196.138/lms/uploads/impweb/mpgov.png`} className="img-fluid" alt={menu.title} />
                                                    </Link>
                                                </div>
                                            </SwiperSlide>
                                        )
                                            : <BootstrapSpinner />}
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* partners end*/}
            </section>
            {/* End Footer Slider */}
        </>
    )
}
