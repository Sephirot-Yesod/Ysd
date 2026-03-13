'use client'

import { useState } from 'react'
import Loader from '@/components/Loader'
import PageTransitions from '@/components/PageTransitions'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Manifesto from '@/components/Manifesto'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <>
      <Loader onComplete={() => setIsLoaded(true)} />
      <PageTransitions />
      <Navigation />
      <main className="snap-container">
        <Hero isLoaded={isLoaded} />
        <div className="content-reveal">
          <Manifesto />
          <Projects />
        </div>
        <Contact />
      </main>
    </>
  )
}
