'use client'

import { buttonVariants } from '@/components/ui/button'
import { ArrowUpRightIcon } from 'lucide-react'
import { motion } from 'motion/react'
import { GITHUB_USERNAME } from '@/lib/constants'
import { cn } from '@/lib/utils'
import Link from 'next/link'

const animation = {
  hide: {
    x: -30,
    opacity: 0
  },
  show: {
    x: 0,
    opacity: 1
  }
}

type HeaderProps = Project

const Header = (props: HeaderProps) => {
  const { name, description, website, github } = props

  const repo = github?.split('/').pop()

  return (
    <div className='space-y-8 pt-10'>
      <motion.div
        className='flex items-center gap-3'
        initial={animation.hide}
        animate={animation.show}
      >
        <div className='flex flex-col gap-3'>
          <h1 className='text-3xl font-bold'>{name}</h1>
          <h2 className='text-muted-foreground'>{description}</h2>
        </div>
      </motion.div>
      <motion.div
        className='flex flex-col items-start gap-2 sm:flex-row sm:gap-4'
        initial={animation.hide}
        animate={animation.show}
        transition={{ delay: 0.1 }}
      >
        {website && (
          <Link href={website || "#"} className={cn(buttonVariants(), 'group')} target="_blank">
            {"Visit Website"}
            <ArrowUpRightIcon className='ml-2 size-5 transition-transform group-hover:-rotate-12' />
          </Link>
        )}
        {github && (
          <Link href={github || "#"} className={cn(buttonVariants(), 'group')} target="_blank">
            {GITHUB_USERNAME}/{repo}
            <ArrowUpRightIcon className='ml-2 size-5 transition-transform group-hover:-rotate-12' />
          </Link>
        )}
      </motion.div>
    </div>
  )
}
export default Header