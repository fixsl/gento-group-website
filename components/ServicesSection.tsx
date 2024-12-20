"use client"

import { FadeIn } from "./FadeIn"
import Carousel from "./Carousel"


const ServicesSection = () => {
    return (
        <div id="services" className="bg-green-600 py-24 sm:py-32">
            <FadeIn className="mx-auto max-w-7xl px-6 lg:px-0">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Our Services</h2>
                </div>
                <Carousel />
            </FadeIn>
        </div>
    )
}

export default ServicesSection