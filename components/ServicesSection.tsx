import Image from "next/image"

import { Container } from "./Container"
import { FadeIn } from "./FadeIn"
import hillCutRoadImage from '@/public/images/hillcut-road.jpg'

const services = [
    {
        id: 1,
        title: 'Boost your conversion rate',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        imageUrl:
            'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
        author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    // More services...
]

const ServicesSection = () => {
    return (
        <Container className="bg-green-600 py-24 sm:py-32">
            <FadeIn className="mx-auto max-w-7xl px-6 lg:px-0">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Our Services</h2>
                    {/* <p className="mt-2 text-lg leading-8 text-white">
                        Learn how to grow your business with our expert advice.
                    </p> */}
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="relative w-full max-w-4xl mx-auto mt-10  h-64">
                        <div className="relative w-[320px] h-60">
                            <Image
                                src={hillCutRoadImage}
                                alt="Rectangular background image"
                                className="w-full h-full rounded-md"
                            />
                        </div>

                        {/* Card overlapping the image */}
                        <div className="absolute flex flex-col justify-between h-56 top-2 -translate-x-[2rem] left-1/2 z-10 bg-white px-8 pt-5 pb-8 shadow-lg text-gray-800 rounded-md w-[320px]">
                            <div>
                                <h2 className="text-xl font-bold mb-4">Overlapping Card</h2>
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
                    <div className="relative w-full max-w-4xl mx-auto mt-10  h-64">
                        <div className="relative w-[320px] h-60">
                            <Image
                                src={hillCutRoadImage}
                                alt="Rectangular background image"
                                className="w-full h-full rounded-md"
                            />
                        </div>

                        {/* Card overlapping the image */}
                        <div className="absolute flex flex-col justify-between h-56 top-2 -translate-x-[2rem] left-1/2 z-10 bg-white px-8 pt-5 pb-8 shadow-lg text-gray-800 rounded-md w-[320px]">
                            <div>
                                <h2 className="text-xl font-bold mb-4">Overlapping Card</h2>
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
            </FadeIn>
        </Container>
    )
}

export default ServicesSection