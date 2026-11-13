import { FadeIn } from "./FadeIn"

const ProjectsSection = () => {
    return (
        <section className="w-full bg-white px-6 py-20 sm:py-28 lg:px-8">
            <FadeIn className="mx-auto max-w-7xl">
                <div className="grid gap-8 border-y border-stone-300 py-10 sm:py-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-16">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-800">Our work</p>
                        <h2 className="mt-4 max-w-xl font-serif text-4xl font-medium leading-tight tracking-tight text-green-950 sm:text-5xl">
                            Infrastructure that moves us forward
                        </h2>
                    </div>
                    <div className="max-w-2xl">
                        <p className="text-base leading-7 text-stone-600 sm:text-lg sm:leading-8">
                            From roads and bridges to marine infrastructure, our projects connect communities and create room for growth.
                        </p>
                        <a
                            href="/work"
                            className="mt-7 inline-flex items-center border-b border-green-950 pb-2 text-sm font-semibold text-green-950 transition hover:border-amber-700 hover:text-amber-800"
                        >
                            Explore our projects <span className="ml-3" aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>
            </FadeIn>
        </section>
    )
}

export default ProjectsSection
