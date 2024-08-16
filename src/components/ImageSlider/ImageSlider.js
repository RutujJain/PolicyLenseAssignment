import React, { useState, useEffect } from 'react';
import image1 from '../../Images/Stree2img.webp';
import image2 from '../../Images/LeoImg.jpg';
import image3 from '../../Images/BholaImg.jpeg';

const images = [image1, image2, image3];

const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="homepage-container1">
            <img src={images[currentIndex]} alt="Slider" />
        </div>
    );
};

export default ImageSlider;
