import React, { useState } from 'react';
import { motion } from 'framer-motion';
import hillCutRoadImage from '@/public/images/hillcut-road.jpg';
import kinghamman from '@/public/images/king-hamman-road.jpg';
import stMarys from '@/public/images/stmarys-round-about.jpg';
import seaPort from '@/public/images/sea-port.jpeg';
import roadJunction from '@/public/images/road-unction.jpeg';
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from '@heroicons/react/24/outline';
import { ImageProps } from '@/app/projects/page';
import Image from 'next/image';

type Service = {
    title: string,
    descriptionList: string[]
    image: ImageProps,
}

const services: Service[] = [
    {
        title: 'Sea Port Construction',
        image: { src: seaPort, alt: 'sea port image' },
        descriptionList: [
            'Features of the relief and coastline',
            'Depth and bottom slope values from the coast to the sea',
        ]
    },
    {
        title: 'Roads and Earthworks',
        image: { src: stMarys, alt: 'service image' },
        descriptionList: [
            'Site Clearing',
            'Bulk Earthworks',
            'Storm water Drainage',
        ]
    },
    {
        title: 'Road Rehabilitation',
        image: { src: roadJunction, alt: 'service image' },
        descriptionList: [
            'In situ Recycling of Layers',
            'Road marking and Road Studs',
            'Storm water Drainage'
        ]
    },
    {
        title: 'Crushing of Aggregate',
        image: { src: kinghamman, alt: 'service image' },
        descriptionList: ['Features of the relief and coastline']
    },
    {
        title: 'Concrete Work',
        image: { src: kinghamman, alt: 'service image' },
        descriptionList: ['Features of the relief and coastline']
    },
]

const Carousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0); // Track the current index of visible items

    // Handle Next button click
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 2) % services.length);
    };

    // Handle Prev button click
    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 2 + services.length) % services.length);
    };

    return (
        <div className="relative w-full mt-16 mx-auto overflow-hidden">
            {/* Container for the sliding items */}
            <motion.div
                className="flex mx-5"
                animate={{ x: -currentIndex * 50 + '%' }} // Slide horizontally based on index
                transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
                {services.map((service) => (
                    <div key={service.title} className="w-[50%] flex-shrink-0 px-5">
                        <div className="relative h-64">

                            <div className="relative w-[320px] h-64">
                                <Image
                                    src={service.image.src}
                                    alt={service.image.alt}
                                    className="w-full h-full rounded-md"
                                />
                            </div>
                            {/* Overlayed card */}
                            <div className="absolute flex flex-col justify-between h-60 top-2 -translate-x-[2rem] left-1/2 z-10 bg-white px-6 pt-4 pb-9 shadow-lg text-gray-800 rounded-md w-[320px]">
                                <div>
                                    <h2 className="text-xl font-bold mb-5">{service.title}</h2>
                                    <ul className="list-disc pl-5 space-y-2">
                                        {service.descriptionList.map((description) => (
                                            <li key={description}>
                                                {description}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className=''>
                                    <a
                                        href="#"
                                        className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        See More
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
                    className="absolute left-5 p-2 bg-gray-50 text-gray-900 rounded-lg top-1/2 transform -translate-y-1/2 z-30"
                >
                    <span className="sr-only">Prev Slide</span>
                    <ArrowLeftCircleIcon aria-hidden="true" className="h-8 w-8" />
                </button>
            )}
            {currentIndex < services.length - 2 && (
                <button
                    onClick={handleNext}
                    className="absolute right-5 p-2 text-gray-900 bg-gray-50 rounded-lg top-1/2 transform -translate-y-1/2 z-30"
                >
                    <span className="sr-only">Next Slide</span>
                    <ArrowRightCircleIcon aria-hidden="true" className="h-8 w-8" />
                </button>
            )}
        </div>
    );
};

export default Carousel;
