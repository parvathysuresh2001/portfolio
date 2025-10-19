'use client'

import { motion } from 'motion/react'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Navbar from './navbar'
import ThemeSwitcher from './theme-switcher'
import Image from 'next/image'
import MobileNav from './mobile-nav'
import { cn } from '@/lib/utils'
import { layoutUI } from '@/lib/constants'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    document.addEventListener('scroll', changeBackground)

    return () => document.removeEventListener('scroll', changeBackground)
  }, [])

  return (
    <motion.header
      layoutId="header"
      className={cn(
        'bg-background/30 shadow-xs fixed inset-x-0 top-4 z-40 mx-auto flex h-[60px] max-w-5xl items-center justify-between rounded-2xl px-8 saturate-100 backdrop-blur-[10px] transition-colors',
        isScrolled && 'bg-background/80'
      )}
      initial={{
        y: -100
      }}
      animate={{
        y: 0
      }}
      transition={{
        duration: 0.3
      }}
    >
      <Link
        href='/'
        className='flex items-center justify-center gap-1'
        aria-label={"Home"}
      >
        <Image alt='light-mode-img' src={layoutUI.lightImagePath} width={28} height={28} aria-hidden='true' className='w-6 h-auto dark:hidden' />
        <Image alt='dark-mode-img' src={layoutUI.darkImagePath} width={28} height={28} aria-hidden='true' className='w-6 h-auto hidden dark:block' />
      </Link>
      <div className='flex items-center gap-2'>
        <Navbar />
        <ThemeSwitcher />
        <MobileNav />
      </div>
    </motion.header>
  )
}

export default Header