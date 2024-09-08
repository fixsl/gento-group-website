import React, { useState } from 'react';
import { Tab, TabGroup, TabPanel, TabPanels } from '@headlessui/react';
import Image from 'next/image';
import classNames from 'classnames';

import hillCutRoadImage from '@/public/images/hillcut-road.jpg'
import kinghamman from '@/public/images/king-hamman-road.jpg'
import { FadeHorrizontal, FadeIn } from './FadeIn';



const images = [
    { id: 1, url: hillCutRoadImage, alt: 'Image 1' },
    { id: 2, url: kinghamman, alt: 'Image 2' },
    { id: 3, url: hillCutRoadImage, alt: 'Image 3' },
];

const Carousel: React.FC = () => {
    const [selectedIndexes, setSelectedIndexes] = useState([0, 1]);

    // Handle Next button click
    const handleNext = () => {
        setSelectedIndexes((prevIndexes) => {
            const nextIndex1 = (prevIndexes[0] + 2) % images.length;
            const nextIndex2 = (prevIndexes[1] + 2) % images.length;
            return [nextIndex1, nextIndex2];
        });
    };

    // Handle Prev button click
    const handlePrev = () => {
        setSelectedIndexes((prevIndexes) => {
            const prevIndex1 = (prevIndexes[0] - 2 + images.length) % images.length;
            const prevIndex2 = (prevIndexes[1] - 2 + images.length) % images.length;
            return [prevIndex1, prevIndex2];
        });
    };

    return (
        <TabGroup >
            <div className="relative w-full max-w-6xl mx-auto">
                {/* Carousel Images */}
                <TabPanels>
                    <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        {selectedIndexes.map((index) => {
                            return (
                                <FadeHorrizontal key={images[index].id}>
                                    <Tab className="focus:outline-none">
                                        <div className="relative w-full max-w-4xl mx-auto mt-10  h-64">
                                            <div className="relative w-[320px] h-60">
                                                <Image
                                                    src={images[index].url}
                                                    alt="Rectangular background image"
                                                    className="w-full h-full rounded-md"
                                                />
                                            </div>

                                            {/* Card overlapping the image */}
                                            <div className="absolute flex flex-col justify-between h-56 top-2 -translate-x-[2rem] left-1/2 z-10 bg-white px-8 pt-5 pb-8 shadow-lg text-gray-800 rounded-md w-[320px]">
                                                <div>
                                                    <h2 className="text-xl font-bold mb-4">{images[index].alt}</h2>
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
                                    </Tab>
                                </FadeHorrizontal>
                            )
                        })}


                    </div>

                </TabPanels>
                {/* Next/Previous Buttons */}
                <button
                    onClick={handlePrev}
                    className="absolute left-0 p-2 text-white bg-gray-600 rounded-full top-1/2 transform -translate-y-1/2 z-30"
                >
                    Prev
                </button>
                <button
                    onClick={handleNext}
                    className="absolute right-0 p-2 text-white bg-gray-600 rounded-full top-1/2 transform -translate-y-1/2 z-30"
                >
                    Next
                </button>
            </div>
        </TabGroup>
    );
};

export default Carousel