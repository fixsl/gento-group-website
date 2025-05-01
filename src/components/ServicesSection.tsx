import { CheckIcon } from '@heroicons/react/20/solid'

const features = [
    {
        name: 'Project Planning & Management',
        description: 'Rerum repellat labore necessitatibus reprehenderit molestiae praesentium.',
    },
    {
        name: 'Geotechnical Engineering',
        description: 'Offering environmental impact assessments, site and laboratory material testing, and support for residential and commercial subdivisions.'
    },
    {
        name: 'Municipal and Urban Infrastructure',
        description: 'Design and implementation of services for municipal and township development projects, including water, sewage, roads, and utility systems.'
    },
    {
        name: ' Real Estate Development',
        description: 'Development of private residential estates including the manufacturing and supply of construction materials such as blocks and concrete rings.'
    },
    {
        name: ' GPS Surveying and Urban Planning',
        description: 'Advanced surveying services using GPS technology, along with strategic urban and town planning for sustainable development.'
    },
    {
        name: ' Construction Services',
        description: 'We deliver core construction services including roads, concrete structures, and infrastructure projects. We also handle airport and seaport construction, offering specialized solutions tailored to environmental and site conditions.',
    },
]
const ServicesSection = () => {
    return (
        <div id='services' className="bg-green-800 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                    <div className="col-span-2">
                        <h2 className="text-base/7 font-semibold text-white">Services We Offer</h2>
                        <p className="mt-2 text-2xl font-semibold tracking-tight text-pretty text-gray-200 sm:text-3xl">
                            Integrated Construction and Engineering Solutions
                        </p>
                        <p className="mt-6 text-base/7 text-gray-200 font-medium ">
                            Gento Group of Companies (SL) Ltd offers end-to-end services in infrastructure development,
                            from planning and design to construction and project management across sectors like transport, real estate,
                            and urban development.
                        </p>
                    </div>
                    <dl className="col-span-3 grid grid-cols-1 font-medium gap-x-8 gap-y-10 text-base/7 text-gray-200 sm:grid-cols-2 lg:gap-y-16">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative pl-9">
                                <dt className="font-semibold text-white">
                                    <CheckIcon aria-hidden="true" className="absolute top-1 left-0 size-5 text-white" />
                                    {feature.name}
                                </dt>
                                <dd className="mt-2">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}


export default ServicesSection