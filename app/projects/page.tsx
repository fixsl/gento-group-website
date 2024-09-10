import { Metadata } from "next";
import Image from "next/image";

import { FadeIn } from "@/components/FadeIn";
import quarryImage from "@/public/images/quarry.jpg"

export const metadata: Metadata = {
    title: 'Projects',
    description:
        'Gento Group of Companies.SL.Ltd aims to be the preferred contractor of choice, ensuring that the customers’ needs are always met with the utmost satisfaction'
}



function Header() {
    return (
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
            < Image
                alt="quarry_image"
                src={quarryImage}
                className="absolute inset-0 -z-10 h-full w-full object-cover"
            />
            {/* White overlay with opacity */}
            <div className="absolute inset-0 z-0 bg-white opacity-70" />

            <div
                aria-hidden="true"
                className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
            >
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                />
            </div>
            <div
                aria-hidden="true"
                className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
            >
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                />
            </div>
            {/* Ensure this div has a higher z-index */}
            <div className="relative z-10 mx-auto max-w-2xl text-center">
                <h2 className="text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl">
                    Our Projects
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-700">
                    We aim to be the your contractor of
                    choice, ensuring that the customers’ needs are met with the utmost
                    satisfaction. We have been recognised as the contractor that “Delivers”.
                    Our projects include:
                </p>
            </div>
        </div>
    )
}


const values = [
    {
        name: 'Safety',
        description:
            'We recognise the prime importance of ensuring a safe, accident free and healthy workplace for all our employees, contractors, and visitors',
    },
    {
        name: 'Innovative Solutions',
        description:
            'In applying resourcefulness, novelty and flexibility, we ensure to meet our clients requirements and expectations.',
    },
    {
        name: 'Empowering People',
        description:
            'By creating a workplace of shared responsibility, our employees are recognised for their professionalism, initiative teamwork, promptness and we aim to create a gender balance workplace.',
    },
    {
        name: 'Sustainability',
        description:
            'By undertaking all our civil projects in a manner that guarantee the protection of the natural environment and historic heritage we demonstrate our commitment to being a moral and environmentally cognisant civil engineering contractor',
    },


    {
        name: 'Quality',
        description:
            'Our core values are inherent on providing the technical expertise to deliver excellence in road, Bridge and pavement engineering, and their related civil works. We believe that our commitment to providing good quality work from the beginning to end of a project is the key to our success. All our material undergoes necessary laboratory tests to assure quality according to contract specifications',
    },

]

const Projects = () => {
    return (
        <div className="relative isolate bg-white px-6 py-24 sm:pb-36 sm:pt-20 lg:px-8">
            <svg
                aria-hidden="true"
                className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
            >
                <defs>
                    <pattern
                        x="50%"
                        y={-64}
                        id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                        width={200}
                        height={200}
                        patternUnits="userSpaceOnUse"
                    >
                        <path d="M100 200V.5M.5 .5H200" fill="none" />
                    </pattern>
                </defs>
                <svg x="50%" y={-64} className="overflow-visible fill-gray-50">
                    <path
                        d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M299.5 800h201v201h-201Z"
                        strokeWidth={0}
                    />
                </svg>
                <rect fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" width="100%" height="100%" strokeWidth={0} />
            </svg>
            <FadeIn>
                <Header />
            </FadeIn>

        </div>
    );
}

export default Projects