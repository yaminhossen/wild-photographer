import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner1.png'
import banner2 from '../../../images/banner/banner2.jpg'
import banner3 from '../../../images/banner/banner3.jpg'


const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img height="600"
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h1 className='mb-4'>Wild Photographer</h1>
                    <h3>The Mountain</h3>
                    <p>This is the best Mountain photo of my journey</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img height="600"
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h1 className='mb-4'>Wild Photographer</h1>
                    <h3>
                        The chameleon

                    </h3>
                    <p>Even if you don't see, he sees you.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img height="600"
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h1 className='mb-4'>Wild Photographer</h1>
                    <h3>The king of jungle</h3>
                    <p>
                        Whats up man. I am the king of jungle. I am the Lion.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;