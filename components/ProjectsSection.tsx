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

const ProjectsSection = () => {
    return (
        <Container className="bg-gray-100 py-24 sm:py-32">
            <FadeIn className="mx-auto max-w-7xl px-6 lg:px-0">
                <div className="mx-auto max-w-2xl text-center  text-gray-900">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Projects</h2>
                    <p className="mt-4 text-lg leading-8 text-gray-800">
                        We are known as the contractor that “Delivers”
                    </p>
                    <p className="mt-4 text-lg leading-8 text-gray-800 ">
                        We are the prefered contractor, ensuring that the customers
                        needs are met with the utmost satisfaction.
                    </p>
                    <div className="mt-16">
                        <a
                            href="#"
                            className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            See Collection
                        </a>
                    </div>
                </div>

            </FadeIn>
        </Container>
    )
}

export default ProjectsSection