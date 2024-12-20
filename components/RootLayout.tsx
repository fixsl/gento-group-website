"use client"

import {
    createContext,
    useState,
} from 'react'
import { usePathname } from 'next/navigation'
import { motion, MotionConfig, useReducedMotion } from 'framer-motion'

import { Footer } from '@/components/Footer'
import Header from './Header'


const RootLayoutContext = createContext<{
    logoHovered: boolean
    setLogoHovered: React.Dispatch<React.SetStateAction<boolean>>
} | null>(null)


function RootLayoutInner({ children }: { children: React.ReactNode }) {
    let shouldReduceMotion = useReducedMotion()


    return (
        <MotionConfig transition={shouldReduceMotion ? { duration: 0 } : undefined}>
            <Header />
            <motion.div
                layout
                className="overflow-hidden bg-white"
            >
                <motion.div
                    layout
                >
                    <main >{children}</main>
                    <Footer />
                </motion.div>
            </motion.div>
        </MotionConfig>
    )
}

export function RootLayout({ children }: { children: React.ReactNode }) {
    let pathname = usePathname()
    let [logoHovered, setLogoHovered] = useState(false)

    return (
        <RootLayoutContext.Provider value={{ logoHovered, setLogoHovered }}>
            <RootLayoutInner key={pathname}>{children}</RootLayoutInner>
        </RootLayoutContext.Provider>
    )
}
