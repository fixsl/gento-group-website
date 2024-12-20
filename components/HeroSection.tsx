import Image from 'next/image'

import hillCutRoadImage from '@/public/images/hillcut-road.jpg'
import { FadeIn } from './FadeIn'

const HeroSection = () => {
    return (
        <div className="relative">
            <div className="mx-auto max-w-7xl">
                <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
                    <svg
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                        className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
                    >
                        <polygon points="0,0 90,0 50,100 0,100" />
                    </svg>

                    <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-48 lg:pr-0">
                        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                            <h1 className="text-4xl font-bold tracking-normal text-gray-900 sm:text-5xl">
                                Your premier partner in building and major civil construction
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Committed to excellence, we diligently pave the way for enhanced connectivity and strive to deliver unparalleled, seamless travel experiences                            </p>
                            <div className="mt-10 flex items-center gap-x-6">
                                <a
                                    href="/contact"
                                    className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Get started
                                </a>
                                <a href="/about" className="text-sm font-semibold leading-6 text-gray-900">
                                    Learn more <span aria-hidden="true">→</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FadeIn className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <Image
                    alt="hillcutt-road-roundabout"
                    src={hillCutRoadImage}
                    className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
                />
            </FadeIn>
        </div>
    )
}

export default HeroSection