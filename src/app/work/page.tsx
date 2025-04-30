import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Blockquote } from '@/src/components/Blockquote'
import { Border } from '@/src/components/Border'
import { Button } from '@/src/components/Button'
import { Container } from '@/src/components/Container'
import { FadeIn } from '@/src/components/FadeIn'
import { PageIntro } from '@/src/components/PageIntro'
import { formatDate } from '@/src/lib/formatDate'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/src/lib/mdx'

function CaseStudies({
    caseStudies,
}: {
    caseStudies: Array<MDXEntry<CaseStudy>>
}) {
    return (
        <Container className="my-40">
            <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                    Case studies
                </h2>
            </FadeIn>
            <div className="mt-10 space-y-20 sm:space-y-24 lg:space-y-32">
                {caseStudies.map((caseStudy) => (
                    <FadeIn key={caseStudy.client}>
                        <article>
                            <Border className="grid grid-cols-3 gap-x-8 gap-y-8 pt-16">
                                <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                                    <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
                                        <h3 className="mt-6 text-sm font-semibold text-neutral-950 sm:mt-0 lg:mt-8">
                                            {caseStudy.client}
                                        </h3>
                                    </div>
                                    <div className="mt-1 flex gap-x-4 sm:mt-0 lg:block">
                                        <p className="text-sm tracking-tight text-neutral-950 after:ml-4 after:font-semibold after:text-neutral-300 after:content-['/'] lg:mt-2 lg:after:hidden">
                                            {caseStudy.service}
                                        </p>
                                    </div>
                                </div>
                                <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
                                    <p className="font-display text-4xl font-medium text-neutral-950">
                                        <Link href={caseStudy.href}>{caseStudy.title}</Link>
                                    </p>
                                    <div className="mt-6 space-y-6 text-base text-neutral-600">
                                        {caseStudy.summary.map((paragraph) => (
                                            <p key={paragraph}>{paragraph}</p>
                                        ))}
                                    </div>
                                    <div className="mt-8 flex">
                                        <Button
                                            href={caseStudy.href}
                                            aria-label={`Read case study: ${caseStudy.client}`}
                                        >
                                            Read case study
                                        </Button>
                                    </div>
                                    {caseStudy.testimonial && (
                                        <Blockquote
                                            author={caseStudy.testimonial.author}
                                            className="mt-12"
                                        >
                                            {caseStudy.testimonial.content}
                                        </Blockquote>
                                    )}
                                </div>
                            </Border>
                        </article>
                    </FadeIn>
                ))}
            </div>
        </Container>
    )
}

export const metadata: Metadata = {
    title: 'Our Work',
    description:
        'We believe in efficiency and maximizing our resources to provide the best value to our clients.',
}

export default async function Work() {
    let caseStudies = await loadCaseStudies()

    return (
        <>
            <PageIntro
                eyebrow="Our Work"
                title="Proven solutions for real-world problems."
            >
                <p>
                    We aim to be the your contractor of choice, ensuring that the customers’ needs are met with the utmost satisfaction.
                    We have been recognised as the contractor that “Delivers”
                </p>
            </PageIntro>
            <CaseStudies caseStudies={caseStudies} />
        </>
    )
}
