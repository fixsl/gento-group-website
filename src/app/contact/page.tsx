
import ContactForm from "@/src/components/ContactForm";
import { FadeIn } from "@/src/components/FadeIn";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Contact Us',
    description:
        'Interested in exploring our projects or contemplating Gento Group of Companies.SL.Ltd for your upcoming venture?'
}

const Offices = () => {
    return (
        <FadeIn>
            <div className="bg-white py-20 sm:pt-32">
                <div className="mx-auto w-full px-6 lg:px-0">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                            Our offices
                        </h2>
                    </div>

                    <div className="border-l border-blue-600 mt-10 px-6">
                        <h3 className=" font-semibold text-gray-900 mb-3">
                            Telephone
                        </h3>
                        <a href="tel:+232 (76) 603-093" className=" text-blue-600 hover:text-blue-500">
                            +232 (76) 603-093
                        </a>
                    </div>
                    <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        <div>
                            <h3 className="border-l border-blue-600 pl-6 font-semibold text-gray-900">
                                Head Office
                            </h3>
                            <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">


                                <a href="mailto:hello@example.com" className=" text-blue-600 hover:text-blue-500">
                                    info@betonvilla-sl.com
                                </a>
                                <p>Villa 22, OAU Village, Hill Station</p>
                                <p>Freetown, Sierra Leone</p>
                            </address>
                        </div>
                        <div>
                            <h3 className="border-l border-blue-600 pl-6 font-semibold text-gray-900">
                                Waterloo Branch
                            </h3>
                            <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">

                                <a href="mailto:hello@example.com" className=" text-blue-600 hover:text-blue-500">
                                    gentair2000@yahoo.com
                                </a>
                                <p>Frey Street, Waterloo High Way</p>
                                <p>Waterloo, Sierra Leone</p>
                            </address>
                        </div>
                        <div>
                            <h3 className="border-l border-blue-600 pl-6 font-semibold text-gray-900">
                                Quarry
                            </h3>
                            <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
                                <a href="mailto:hello@example.com" className=" text-blue-600 hover:text-blue-500">
                                    mgento@betonvilla-sl.com
                                </a>
                                <p>Freetown Peninsular Rd, Tombo</p>
                                <p>Waterloo, Sierra Leone</p>
                            </address>
                        </div>
                    </div>
                </div>
            </div>
        </FadeIn>
    )
}

export default function ContactUs() {


    return (
        <div id='contact' className="relative isolate bg-white px-6 py-24 sm:py-36 lg:px-8">
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
                <div className="mx-auto max-w-xl lg:max-w-4xl">
                    <h2 className="text-4xl font-bold tracking-tight text-gray-900">
                        Let’s talk about your project
                    </h2>
                    <div className="lg:max-w-xl">

                        <p className="mt-2 text-lg leading-8 text-gray-600">
                            We specialize in transforming visions into roads and turning aspirations into reality.
                        </p>
                    </div>
                    <div className="mt-16 flex flex-col gap-16 sm:gap-y-20 lg:flex-row">
                        <ContactForm />
                        <div className="lg:mt-6 lg:w-80 lg:flex-none">
                            <img alt="" src="https://tailwindui.com/img/logos/workcation-logo-blue-600.svg" className="h-12 w-auto" />
                            <figure className="mt-10">
                                <blockquote className="text-lg font-semibold leading-8 text-gray-900">
                                    <p>
                                        Interested in exploring our projects or contemplating Gento Group of
                                        Companies.SL.Ltd for your upcoming venture? Reach out to our team for in-depth
                                        insights, consultations, or to discuss potential projects.

                                    </p>
                                </blockquote>

                            </figure>
                        </div>
                    </div>
                    <Offices />
                </div>
            </FadeIn>
        </div>
    );
}
