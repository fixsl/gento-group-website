import { FadeIn } from "@/components/FadeIn";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Contact Us',
    description:
        'Interested in exploring our projects or contemplating Gento Group of Companies.SL.Ltd for your upcoming venture?'
}

export default function ContactUs() {
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
                <div className=" py-8 sm:py-16">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
                            <div className="grid grid-cols-1 gap-10 py-16 lg:grid-cols-3">
                                <div>
                                    <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900">Get in touch</h2>
                                    <p className="mt-4 text-base/7 text-gray-600">
                                        Reach out to our team for in-depth insights, consultations, or to discuss potential projects.
                                    </p>
                                </div>
                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                                    <div className="rounded-2xl bg-gray-50 p-10">
                                        <h3 className="text-base/7 font-semibold text-gray-900">Head Office</h3>
                                        <dl className="mt-3 space-y-1 text-sm/6 text-gray-600">
                                            <div className="mt-1">
                                                <dt className="sr-only">Phone number</dt>
                                                <dd>+232 (76) 603-093</dd>
                                            </div>
                                            <div>
                                                <dt className="sr-only">Email</dt>
                                                <dd><a className="font-semibold text-indigo-600" href="mailto:info@betonvilla-sl.com">
                                                    info@betonvilla-sl.com
                                                </a></dd>
                                            </div>
                                        </dl>
                                    </div>
                                    <div className="rounded-2xl bg-gray-50 p-10">
                                        <h3 className="text-base/7 font-semibold text-gray-900">Waterloo Branch</h3>
                                        <dl className="mt-3 space-y-1 text-sm/6 text-gray-600">

                                            <div>
                                                <dt className="sr-only">Email</dt>
                                                <dd><a className="font-semibold text-indigo-600" href="mailto:gentair2000@yahoo.com">
                                                    gentair2000@yahoo.com
                                                </a></dd>
                                            </div>
                                        </dl>
                                    </div>
                                    <div className="rounded-2xl bg-gray-50 p-10">
                                        <h3 className="text-base/7 font-semibold text-gray-900">Quarry</h3>
                                        <dl className="mt-3 space-y-1 text-sm/6 text-gray-600">

                                            <div>
                                                <dt className="sr-only">Email</dt>
                                                <dd><a className="font-semibold text-indigo-600" href="mailto:mgento@betonvilla-sl.com">
                                                    mgento@betonvilla-sl.com
                                                </a></dd>
                                            </div>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-10 pt-16 lg:grid-cols-3">
                                <div>
                                    <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900">Locations</h2>
                                    <p className="mt-4 text-base/7 text-gray-600">
                                        Prefer doing things in person? Feel free to visit any of our locations.                                        </p>
                                </div>
                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                                    <div className="rounded-2xl bg-gray-50 p-10">
                                        <h3 className="text-base/7 font-semibold text-gray-900">Head Office</h3>
                                        <address className="mt-3 space-y-1 text-sm/6 not-italic text-gray-600">
                                            <p>Villa 22, OAU Village, Hill Station</p>
                                            <p>Freetown, Sierra Leone</p>
                                        </address>
                                    </div>
                                    <div className="rounded-2xl bg-gray-50 p-10">
                                        <h3 className="text-base/7 font-semibold text-gray-900">Waterloo Branch</h3>
                                        <address className="mt-3 space-y-1 text-sm/6 not-italic text-gray-600">
                                            <p>Frey Street, Waterloo High Way</p>
                                            <p>Freetown, Sierra Leone</p>
                                        </address>
                                    </div>
                                    <div className="rounded-2xl bg-gray-50 p-10">
                                        <h3 className="text-base/7 font-semibold text-gray-900">Quarry</h3>
                                        <address className="mt-3 space-y-1 text-sm/6 not-italic text-gray-600">
                                            <p>Freetown Peninsular Rd, Tombo</p>
                                            <p>Weatern Area Rural, Sierra Leone</p>
                                        </address>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </FadeIn>
        </div>
    );
}
