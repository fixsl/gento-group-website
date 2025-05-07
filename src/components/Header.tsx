"use client"

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

import logo from "@/src/images/logo.jpeg"
import Image from 'next/image'

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Construction', href: '/work' },
    { name: 'Quarry', href: '/quarry' },
    { name: 'Services', href: '/#services' },
]


const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const pathName = usePathname()



    return (
        <header className="absolute inset-x-0 top-0 z-50">
            <div className="mx-auto w-full flex">
                <div className="px-6 pt-6 w-full lg:max-w-2xl xl:max-w-4xl lg:pl-8 lg:pr-0 xl:pl-12 xl:pr-12">
                    <nav aria-label="Global" className="flex items-center justify-between lg:justify-start">
                        <span className="sr-only">Gento Group</span>
                        <a href="/" className="hidden sm:block -m-1.5 p-1.5">
                            <Image
                                src={logo}
                                alt="gento-group-logo"
                                height={50}
                            />
                        </a>
                        <a href="/" className="block sm:hidden -m-1.5 p-1.5">
                            <span className="sr-only">Gento Group</span>
                            <Image
                                src={logo}
                                alt="gento-group-logo"
                                height={35}
                            />
                        </a>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700 sm:hidden"
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                        </button>
                        <div className="hidden lg:ml-16 sm:flex sm:gap-x-12 lg:gap-x-14">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className={clsx("text-sm font-semibold leading-6 ",

                                        item.href === '/work' ? pathName.includes(item.href) ? 'text-blue-600' : 'text-gray-900' :
                                            item.href === pathName ? 'text-blue-600' : 'text-gray-900')}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>

                    </nav>
                </div>
                {pathName !== '/' && (
                    <div className="hidden lg:flex md:flex-1 lg:justify-end px-6 pt-6 lg:pl-0 lg:pr-8 xl:pl-12 xl:pr-12">
                        <a href="/contact#contact" className="text-sm font-semibold leading-6 text-blue-900">
                            Contact Us <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                )}
            </div>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="md:hidden">
                <div className="fixed inset-0 z-50" />
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <Image
                                src={logo}
                                alt="Manufacturing"
                                height={30}
                            />
                        </a>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-3 py-6">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className={clsx("-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ",
                                            item.href === '/work' ? pathName.includes(item.href) ? 'text-blue-600' : 'text-gray-900' :
                                                item.href === pathName ? 'text-blue-600' : 'text-gray-900'
                                        )}
                                    >
                                        {item.name}
                                    </a>
                                ))}
                                <a
                                    href='/contact'
                                    className={clsx("-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 ",
                                        '/contact' === pathName ? 'text-blue-600 hover:bg-blue-50' : 'text-gray-900 hover:bg-gray-50'
                                    )}
                                >
                                    Contact Us
                                </a>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    )
}

export default Header