import Link from 'next/link'

import { Container } from '@/src/components/Container'
import { FadeIn } from '@/src/components/FadeIn'
// import { Logo } from '@/components/Logo'
const navigation = {
    main: [
        { name: 'Projects', href: '/projects' },
        { name: 'Services', href: '/#services' },
        { name: 'About', href: '/about' },
        { name: 'Contact Us', href: '/contact' },
    ],
    social: [
        {
            name: 'Facebook',
            href: 'https://www.facebook.com/profile.php?id=61573756522720',
            icon: (props: any) => (
                <svg viewBox="0 0 16 16" fill="currentColor" {...props}>
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16 8.05C16 3.603 12.418 0 8 0S0 3.604 0 8.05c0 4.016 2.926 7.346 6.75 7.95v-5.624H4.718V8.05H6.75V6.276c0-2.017 1.194-3.131 3.022-3.131.875 0 1.79.157 1.79.157v1.98h-1.008c-.994 0-1.304.62-1.304 1.257v1.51h2.219l-.355 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.95z"
                    />
                </svg>
            ),
        },
        {
            name: 'X',
            href: ' https://x.com/GentoGroupWins',
            icon: (props: any) => (
                <svg viewBox="0 0 16 16" fill="currentColor" {...props}>
                    <path d="M12.6 0h2.454l-5.36 6.778L16 16h-4.937l-3.867-5.594L2.771 16H.316l5.733-7.25L0 0h5.063l3.495 5.114L12.6 0zm-.86 14.376h1.36L4.323 1.539H2.865l8.875 12.837z" />
                </svg>
            ),
        },
        {
            name: 'LinkedIn',
            href: 'https://www.linkedin.com/in/gento-group-2a83bb35b/',
            icon: (props: any) => (
                <svg viewBox="0 0 16 16" fill="currentColor" {...props}>
                    <path d="M14.82 0H1.18A1.169 1.169 0 000 1.154v13.694A1.168 1.168 0 001.18 16h13.64A1.17 1.17 0 0016 14.845V1.15A1.171 1.171 0 0014.82 0zM4.744 13.64H2.369V5.996h2.375v7.644zm-1.18-8.684a1.377 1.377 0 11.52-.106 1.377 1.377 0 01-.527.103l.007.003zm10.075 8.683h-2.375V9.921c0-.885-.015-2.025-1.234-2.025-1.218 0-1.425.966-1.425 1.968v3.775H6.233V5.997H8.51v1.05h.032c.317-.601 1.09-1.235 2.246-1.235 2.405-.005 2.851 1.578 2.851 3.63v4.197z" />
                </svg>
            ),
        }

    ],
}


export function Footer() {
    return (
        <FadeIn className='border-t border-gray-900/10'>
            <footer className="bg-white">
                <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
                    <nav aria-label="Footer" className="-mb-6 flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm/6">
                        {navigation.main.map((item) => (
                            <a key={item.name} href={item.href} className="text-gray-600 hover:text-gray-900">
                                {item.name}
                            </a>
                        ))}
                    </nav>
                    <div className="mt-16 flex justify-center gap-x-10">
                        {navigation.social.map((item) => (
                            <a key={item.name} href={item.href} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
                                <span className="sr-only">{item.name}</span>
                                <item.icon aria-hidden="true" className="size-5" />
                            </a>
                        ))}
                    </div>
                    <p className="mt-10 text-center text-sm/6 text-gray-600">&copy; 2025 Gento Group, Inc. All rights reserved.</p>
                </div>
            </footer>
        </FadeIn>
    )
}
