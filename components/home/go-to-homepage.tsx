'use client'

import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'

const GoToHomepage = () => {

  return (
    <Link href='/' className={buttonVariants()}>
      {"Go to Homepage"}
    </Link>
  )
}

export default GoToHomepage
