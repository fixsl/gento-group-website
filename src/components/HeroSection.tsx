import Image from 'next/image'

import hillCutRoadImage from '@/src/images/hillcut-road.jpg'
import { FadeIn } from './FadeIn'

const HeroSection = () => {
    return (
        <div className="relative flex-col lg:flex-row lg:justify-between ">
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

                    <div className="relative px-6 py-16 sm:py-40 lg:px-8 lg:py-48 lg:pr-0">
                        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                            <h1 className="font-serif text-4xl font-medium leading-tight tracking-tight text-green-950 sm:text-5xl lg:text-6xl">
                                Infrastructure for a more connected Sierra Leone
                            </h1>
                            <p className="mt-6 max-w-xl text-lg leading-8 text-stone-600">
                                Gento Group delivers roads, bridges and major civil works that strengthen connections between communities and support national growth.
                            </p>
                            <div className="mt-10 flex items-center gap-x-6">
                                <a
                                    href="/contact"
                                    className="rounded-sm bg-green-950 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-green-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-900"
                                >
                                    Contact Us
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FadeIn className="bg-gray-50 mb-0 h-full md:mb-0 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
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
