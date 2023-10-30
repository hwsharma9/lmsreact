import { Image } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

function HeaderSlider() {
    return (
        <Carousel>
            <Carousel.Item>
                <Image
                    className="d-block w-100"
                    src="http://164.100.196.138/lms/uploads/slider/slider_1_new.png"
                    alt="Image One"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image
                    className="d-block w-100"
                    src="http://164.100.196.138/lms/uploads/slider/slider_1_new.png"
                    alt="Image Two"
                />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image
                    className="d-block w-100"
                    src="http://164.100.196.138/lms/uploads/slider/slider_1_new.png"
                    alt="Image One"
                />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default HeaderSlider;