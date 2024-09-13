import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import hillCutRoadImage from '@/public/images/hillcut-road.jpg';
import kinghamman from '@/public/images/king-hamman-road.jpg';

const images = [
    { id: 1, url: hillCutRoadImage, alt: 'Image 1' },
    { id: 2, url: kinghamman, alt: 'Image 2' },
    { id: 3, url: hillCutRoadImage, alt: 'Image 3' },
    { id: 4, url: kinghamman, alt: 'Image 4' },
];

const Carousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0); // Track the current index of visible items

    // Handle Next button click
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 2) % images.length);
    };

    // Handle Prev button click
    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 2 + images.length) % images.length);
    };

    return (
        <div className="relative w-full mt-16 mx-auto overflow-hidden">
            {/* Container for the sliding items */}
            <motion.div
                className="flex mx-5"
                animate={{ x: -currentIndex * 50 + '%' }} // Slide horizontally based on index
                transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
                {images.map((image) => (
                    <div key={image.id} className="w-[50%] flex-shrink-0 px-5">
                        <div className="relative h-64">

                            <div className="relative w-[320px] h-60">
                                <Image
                                    src={image.url}
                                    alt={image.alt}
                                    className="w-full h-full rounded-md"
                                />
                            </div>
                            {/* Overlayed card */}
                            <div className="absolute flex flex-col justify-between h-56 top-2 -translate-x-[2rem] left-1/2 z-10 bg-white px-8 pt-5 pb-8 shadow-lg text-gray-800 rounded-md w-[320px]">
                                <div>
                                    <h2 className="text-xl font-bold mb-4">{image.alt}</h2>
                                    <p>This is an example of a card overlapping an image on the x-axis.</p>
                                </div>
                                <div className=''>
                                    <a
                                        href="#"
                                        className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Services
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </motion.div>

            {/* Conditionally render Prev/Next Buttons */}
            {currentIndex > 0 && (
                <button
                    onClick={handlePrev}
                    className="absolute left-0 p-2 text-white bg-gray-600 rounded-full top-1/2 transform -translate-y-1/2 z-30"
                >
                    Prev
                </button>
            )}
            {currentIndex < images.length - 2 && (
                <button
                    onClick={handleNext}
                    className="absolute right-0 p-2 text-white bg-gray-600 rounded-full top-1/2 transform -translate-y-1/2 z-30"
                >
                    Next
                </button>
            )}
        </div>
    );
};

export default Carousel;
