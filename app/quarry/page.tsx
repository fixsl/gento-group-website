import { Metadata } from "next";

import quarryImage from "@/public/images/quarry.jpg"
import quarryCrush from "@/public/images/quarry-img.jpg"
import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";

export const metadata: Metadata = {
    title: 'Quarry',
    description:
        'Interested in exploring our projects or contemplating Gento Group of Companies.SL.Ltd for your upcoming venture?'
}

function ImageLayout() {
    return (
        <div className="pt-6 xl:px-5">
            <div className="flex flex-col md:flex-row gap-6 xl:gap-11 w-full mx-auto ">

                {/* Left Image */}
                <div className="relative w-full h-80 md:h-[400px] xl:h-[600px] overflow-hidden rounded">
                    <div className="absolute inset-0 clip-left">
                        <Image
                            src={quarryImage}
                            alt="Manufacturing"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                </div>

                {/* Right Image + Text */}
                <div className="flex flex-col w-full md:mt-1 md:pt-14 xl:mt-2 xl:pt-20">
                    <div className="relative w-full h-80 md:h-[400px] xl:h-[600px] overflow-hidden rounded">
                        <div className="absolute inset-0 clip-right">
                            <Image
                                src={quarryCrush}
                                alt="Mobile Home"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const QuarryText = () => {
    return (
        <FadeIn>
            <div className="pt-6 xl:px-5">
                <div className="">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Gento Quarry
                    </h2>
                    <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
                        <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                            <p className="text-xl leading-8 text-gray-600">
                                Located at a strategic site, the Gento Group Quarry is a key supplier of high-quality construction aggregates in Sierra Leone.
                                The quarry produces a wide range of aggregate sizes suitable for various applications including road construction,
                                building works, and other infrastructure projects. Its primary output includes crushed stone of different grades,
                                tailored to meet the demands of modern construction standards.
                                The quarry primarily serves the needs of Gento Group projects as well as third-party construction initiatives across Sierra Leone.
                            </p>

                        </div>

                    </div>
                </div>
            </div>
        </FadeIn>
    )
}


export default function Quarry() {
    return (
        <div id='contact' className="relative isolate bg-white px-6 pt-24 pb-12 sm:py-36 lg:px-8">
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
                <ImageLayout />
            </FadeIn>
            <QuarryText />
        </div>
    );
}
