'use client'

import { AnimatePresence, motion } from "framer-motion"
import Link from 'next/link'
import { useState } from 'react'

const MobileNavigation = ({ username }) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const variants = {
        initial: {
            scaleY: 0,
        },
        animate: {
            scaleY: 1,
            transition: {
                duration: 0.5,
                ease: [0.85, 0, 0.15, 1],
            }
        },
        exit: {
            scaleY: 0,
            transition: {
                duration: 0.5,
                delay: 0.5,
                ease: [0.85, 0, 0.15, 1],
            }
        }
    }
    const divVariant = {
        initial: {
            transition: {
                staggerChildren: 0.8,
                staggerDirection: -1
            }
        }, open: {
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0,
                staggerDirection: 1
            }
        }
    }
    const linkVariant = {
        initial: {
            y: "30vh",
            transition: {
                duration: 0.5,
                ease: [0.37, 0, 0.63, 1],
            }
        }, open: {
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0, 0.55, 0.45, 1],
            }
        }
    }

    return (
        <div className='md:hidden flex' >
            <button className="hamBurger w-[40px] h-[40px] relative" onClick={() => setIsMenuOpen(!isMenuOpen)}> <div className="inner" /> </button>
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div className='fixed left-0 top-0 bg-black-2 w-full h-[100dvh] z-10 flex items-center justify-center p-10 origin-top ' variants={variants} initial="initial" animate="animate" exit="exit" >
                        <nav className='flex h-full flex-col w-full items-center' >
                            <div className='w-full flex justify-between text-gray-200' >
                                <button onClick={() => setIsMenuOpen(!isMenuOpen)} >
                                    Close
                                </button>
                            </div>
                            <motion.div className="text-white text-2xl space-y-4 flex flex-col justify-center h-full gap-6" variants={divVariant} initial="initial" animate="open" exit="initial" >
                                {username ?
                                    (<>
                                        <motion.div initial="initial" animate="open" className='overflow-hidden' >
                                            <Link href="/register" onClick={() => setIsMenuOpen(!isMenuOpen)} className='!text-4xl' > Registration </Link>
                                        </motion.div>
                                    </>)
                                    : (<>
                                        <motion.div initial="initial" animate="open" className='overflow-hidden' >
                                            <Link href="/login" onClick={() => setIsMenuOpen(!isMenuOpen)} className='!text-4xl' > Login </Link>
                                        </motion.div>
                                    </>)
                                }
                                <motion.div initial="initial" animate="open" className='overflow-hidden' >
                                    <Link href="/view" onClick={() => setIsMenuOpen(!isMenuOpen)} className='!text-4xl' > View Participants </Link>
                                </motion.div>
                            </motion.div>

                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default MobileNavigation
