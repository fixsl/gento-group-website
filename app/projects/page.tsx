import { Metadata } from "next";
import Image, { StaticImageData } from "next/image";

import { FadeIn } from "@/components/FadeIn";
import quarryImage from "@/public/images/quarry.jpg"
import hillCutImage from "@/public/images/hillcut-road.jpg"

export const metadata: Metadata = {
    title: 'Projects',
    description:
        'Gento Group of Companies.SL.Ltd aims to be the preferred contractor of choice, ensuring that the customers’ needs are always met with the utmost satisfaction'
}

const projects: Project[] = [
    {
        image: { alt: 'gento-projects-image', src: quarryImage },
        year: '2015 - 2021',
        title: 'Design and Construction of City and Provincial Township Roads',
        description:
            `Construction of New Prince Alfred Bridge 45.0m Long
            •	Construction of New Kossoh Town Bridge 11.0m Long
            •	Construction of single and double box culvert along the carriage way
            •	Construction of single and double pipe culvert.
            •	Construction of various sizes of surface drainages and chambers
            •	Rehabilitation of 32.0Km of single carriageway at diﬀerent locations within the Waterloo Township, To mbo and Hastings Metropolis in Asphalt Concrete.
            •	Construction of ducts for Utilities Services (Water, Electricity and Telephone lines`
    },
    {
        image: { alt: 'gento-projects-image', src: quarryImage },
        year: '2019 - 2020',
        title: 'Design and Construction of Internal Roads at 34 Military Hospital',
        description:
            `Rehabilitation of 1.30m of single carriageway at 34 Military Hospital, Wilberforce    Barracks in Asphalt Concrete.
            •   Construction of single and double pipe culvert.
            •    Construction of various sizes of surface drainages and chambers
            •   Construction of ducts for Utilities Services (Water, Electricity and Telephone lines`
    },
    {
        image: { alt: 'gento-projects-image', src: quarryImage },
        year: '2014 - 2020',
        title: 'Designed and Reconstruction of King Jimmy Embankment, Drainage Works and Addendum',
        description:
            `Reconstruction of King J i m m y B r i d g e Embankment
            •	Rehabilitation of 7.8Km of single carriageway at diﬀerent locations within the Freetown Metropolis
            •	Construction of single and double box culvert along the carriage way
            •	Construction of single and double pipe culvert.
            •	Construction of various sizes of surface drainage and chambers
            •	Construction of ducts for Utilities Services (Water, Electricity and Telephone lines)`
    },
    {
        image: { alt: 'gento-projects-image', src: hillCutImage },
        year: '2013 - 2020',
        title: 'Freetown Ring Roads',
        description:
            `•	Construction of dual carriageway 6.2Km in Asphalt Concrete
            •	Construction of Hill Cot Road in two diﬀerent levels
            •	Construction of New Hill Cot Flyover Bridge 26.0m Long
            •	Reconstruction of Old Hill Cot Bridge 15.0m Long
            •	Construction of Foot Bridge 36.0m Long at Jomo Kenyatta a Road
            •	Construction of double box culvert at George Brook 36.00m wide x 10.00m Long
            •	Construction of single and double box culvert along the carriage way
            •	Construction of single and double pipe culvert.
            •	Construction of various sizes of surface drainages and chambers
            •	Construction of ducts for Utilities Services (Water, Electricity and Telephone lines)
            •	Two junctions solar traﬃc light at king Harman Road`
    },
    {
        image: { alt: 'gento-projects-image', src: hillCutImage },
        year: '2018 - 2019',
        title: 'Study and Proposal of New Commercial Harbour at Kent',
        description:
            `•	Underwater studies
            •	Bathymetry studies in diﬀerential water levels
            •	Reclamation of Sea Face
            •	Dredging of Sea Bed
            •	D e s i g n o f	t h e Commercial Harbour`
    },
    {
        image: { alt: 'gento-projects-image', src: hillCutImage },
        year: '2015 - 2016',
        title: 'Design and Construction of Internal Roads at Police Training School',
        description:
            `•  Rehabilitation of 3.0Km of single carriageway at Has tings in Asphalt Concrete.
            •  Construction of single and double pipe culvert.
            •  Construction of various sizes of surface drainages a n d c h a m b e r s Construction of      ducts for Utilities Services (Water, Electricity and Telephone lines)
            `
    },
    {
        image: { alt: 'gento-projects-image', src: hillCutImage },
        year: '2015 - 2016',
        title: 'Rehabilitation of Bathurst Estate for Gento Villa',
        description:
            `•	Access Road Construction
            •	Construction of Ground tank
            •	Rehabilitation of all buildings within the complex
            •	Construction of 6.0m high Retaining Walls and Perimeter Fence
            •	Paved Parking Area            
            `
    },
    {
        image: { alt: 'gento-projects-image', src: hillCutImage },
        year: '2014',
        title: 'Construction of Internal Roads at Kerry Town, Ebola Treatment Center',
        description:
            `•	Construction of Concrete Pavement Internal Roads 2.0Km Long
            •	Construction of 650.0m Storm Drain
            •	Construction of surface drainages and chambers within the compound
            •	Construction of paved parking areas
            •	Internal Landscaping
            •	Construction Car for Wards
            •	Construction of various types of Pipe Culverts                    
            `
    },
]

type Image = {
    src: StaticImageData,
    alt: string
}

type Project = {
    image: Image,
    year: string,
    title: string,
    description: string
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

const ProjectSection = () => {
    return (
        <FadeIn>
            <div >
                {projects.map((project, index: number) => {
                    return (
                        <div
                            key={`${project.title}-${index}`}
                            className={`flex  gap-20 py-16 px-10 ${index % 2 !== 0 ? 'flex-row-reverse bg-gray-50' : ''}`}
                        >
                            <div className="relative h-72 w-1/2">
                                <Image
                                    src={project.image.src}
                                    alt={project.image.alt}
                                    fill
                                />
                            </div>
                            <div className="pt-24 w-1/2">
                                <h3 className="text-gray-600">
                                    {project.year}
                                </h3>
                                <h4 className="text-gray-900 text-2xl py-4">
                                    {project.title}
                                </h4>
                                <p className="text-gray-700">
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </FadeIn>
    )
}

const Projects = () => {
    return (
        <div className="relative isolate bg-white px-6 pt-24 sm:pt-20 lg:px-8">
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
            <ProjectSection />

        </div>
    );
}

export default Projects