import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'About Us',
    description:
        'Gento Group of Companies is a locally registered entity in Sierra Leone.'
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

const AboutUs = () => {
    return (
        <div className="relative isolate bg-white px-6 py-24 sm:pb-36 sm:pt-44 lg:px-8">
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
            <div className="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Our mission
                    </h2>
                    <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
                        <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                            <p className="text-xl leading-8 text-gray-600">
                                We intend to grow our business and be recognised as a leading Sierra Leonean civil contractor by demonstrating
                                the highest degree of quality, value, cost effective services and integrity to our
                                clients and stakeholders. Moreover, our primary goal is to operate in an ethical and environmentally friendly manner, while being responsible to the communities in which we work
                            </p>

                        </div>

                    </div>
                </div>
            </div>
            {/* Image section */}
            <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
                <img
                    alt=""
                    src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
                    className="aspect-[5/2] w-full object-cover xl:rounded-3xl"
                />
            </div>

            {/* Values section */}
            <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our values</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Consequently, our company is built on the following values:
                    </p>
                </div>
                <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {values.map((value) => (
                        <div key={value.name}>
                            <dt className="font-semibold text-gray-900">{value.name}</dt>
                            <dd className="mt-1 text-gray-600">{value.description}</dd>
                        </div>
                    ))}
                </dl>
            </div>

        </div>
    );
}

export default AboutUs