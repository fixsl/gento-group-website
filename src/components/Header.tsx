"use client"

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import Link from 'next/link'

import logo from "@/src/images/logo.jpeg"
import Image from 'next/image'

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/work' },
    { name: 'Quarry', href: '/quarry' },
    { name: 'Services', href: '/#services' },
    { name: 'About', href: '/about' },
]


const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const pathName = usePathname()



    return (
        <header className="sticky inset-x-0 top-0 z-50 border-b border-stone-200/80 bg-white/95 backdrop-blur">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
                    <nav aria-label="Global" className="flex w-full items-center justify-between">
                        <span className="sr-only">Gento Group</span>
                        <Link href="/" className="-m-1.5 flex shrink-0 items-center gap-2 p-1.5 sm:gap-3">
                            <Image
                                src={logo}
                                alt=""
                                height={48}
                                className="h-11 w-auto object-contain sm:h-12"
                            />
                            <span className="font-serif text-base font-semibold tracking-tight text-green-950 sm:text-lg">Gento Group</span>
                        </Link>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            className="-m-2.5 rounded-md p-2.5 text-green-950 lg:hidden"
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                        </button>
                        <div className="hidden items-center gap-x-6 lg:flex xl:gap-x-8">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={clsx("text-sm font-medium transition-colors hover:text-amber-700",
                                        (item.href === '/work' && pathName.startsWith('/work')) ||
                                        (item.href === '/about' && pathName === '/about') ||
                                        (item.href === '/quarry' && pathName.startsWith('/quarry')) ||
                                        (item.href === '/' && pathName === '/') ? 'text-green-900' : 'text-stone-600')}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                        <Link href="/contact" className="hidden rounded-sm bg-green-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-900 lg:inline-flex">
                            Contact us <span className="ml-2" aria-hidden="true">→</span>
                        </Link>
                        <a href="/contact" className="hidden text-sm font-semibold text-green-950 hover:text-amber-700 sm:inline-flex lg:hidden">Contact</a>
                    </nav>
            </div>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-50" />
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link href="/" onClick={() => setMobileMenuOpen(false)} className="-m-1.5 flex items-center gap-3 p-1.5">
                            <span className="sr-only">Gento Group</span>
                            <Image
                                src={logo}
                                alt=""
                                height={40}
                                className="h-10 w-auto object-contain"
                            />
                            <span className="font-serif text-lg font-semibold tracking-tight text-green-950">Gento Group</span>
                        </Link>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                        </button>
                    </div>
                    <div className="mt-8 flow-root">
                        <div className="-my-6 divide-y divide-stone-200">
                            <div className="space-y-1 py-6">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className={clsx("-mx-3 block rounded-md px-3 py-3 text-base font-medium leading-7 transition-colors hover:bg-stone-50",
                                            (item.href === '/work' && pathName.startsWith('/work')) ||
                                            (item.href === '/about' && pathName === '/about') ||
                                            (item.href === '/quarry' && pathName.startsWith('/quarry')) ||
                                            (item.href === '/' && pathName === '/') ? 'text-green-900' : 'text-stone-700'
                                        )}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                                <Link
                                    href="/contact"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="mt-3 block rounded-md bg-green-950 px-3 py-3 text-base font-semibold text-white"
                                >
                                    Contact us
                                </Link>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    )
}

export default Header
