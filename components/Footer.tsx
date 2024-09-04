import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
// import { Logo } from '@/components/Logo'

const navigation = [
    {
        title: 'Services',
        links: [
            { title: 'Services', href: '/services' },
            { title: 'Community', href: '/community' },
            // { title: 'Register / Log In ', href: '/register-login' },
        ],
    },
    {
        title: 'Company',
        links: [
            { title: 'About Us', href: '/about' },
            { title: 'Contact us', href: '/contact' },
        ],
    },
]

function Navigation() {
    return (
        <nav>
            <ul role="list" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
                {navigation.map((section, sectionIndex) => (
                    <li key={sectionIndex}>
                        <div className="font-display text-sm font-semibold tracking-wider text-neutral-950">
                            {section.title}
                        </div>
                        <ul role="list" className="mt-4 text-sm text-neutral-700">
                            {section.links.map((link, linkIndex) => (
                                <li key={linkIndex} className="mt-4">
                                    <Link
                                        href={link.href}
                                        className="transition hover:text-neutral-950"
                                    >
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export function Footer() {
    return (
        <Container as="footer" className="mt-24 w-full sm:mt-32 lg:mt-40">
            <FadeIn>
                <div className="grid grid-cols-1 gap-x-8  pt-12 gap-y-16 lg:grid-cols-2 border-t border-neutral-950/10">
                    <Navigation />
                </div>
                <div className="mb-20 mt-24 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 pt-8">
                    <Link href="/" aria-label="Home">
                        <p>Logo</p>
                    </Link>
                    <p className="text-sm text-neutral-700">
                        © Gento Group. {new Date().getFullYear()}
                    </p>
                </div>
            </FadeIn>
        </Container>
    )
}
