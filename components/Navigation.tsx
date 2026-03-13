'use client'

import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { content } from '@/lib/content'

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const t = content

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
      gsap.fromTo(
        '.menu-link',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.08,
          duration: 0.6,
          ease: 'power3.out',
          delay: 0.3,
        }
      )
    } else {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const scrollTo = (id: string) => {
    setMenuOpen(false)
    setTimeout(() => {
      const el = document.getElementById(id)
      if (el) {
        const target = el.getBoundingClientRect().top + window.scrollY
        const obj = { y: window.scrollY }
        gsap.to(obj, {
          y: target,
          duration: 0.8,
          ease: 'power2.inOut',
          onUpdate: () => window.scrollTo(0, obj.y),
        })
      }
    }, 100)
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          menuOpen ? 'bg-transparent' : scrolled ? 'bg-cream/90 backdrop-blur-md' : 'bg-transparent'
        }`}
      >
        <div className="container-main flex items-center justify-between h-16 md:h-20 relative z-50">
          <a
            href="#"
            className="font-display text-2xl md:text-3xl tracking-tight z-50 relative"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          >
            <span className="font-light">yesod</span>
            <span className="text-accent">{"'"}</span>
            <span className="font-light">s</span>
          </a>

          <div className="flex items-center gap-3 md:gap-6 z-50 relative">
            <button
              onClick={() => scrollTo('contact')}
              className="hidden md:flex pill pill-accent text-sm px-7 py-3.5"
            >
              {t.nav.contact}
              <span className="text-xs">{'\u2192'}</span>
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex flex-col gap-[7px] w-10 h-10 items-center justify-center cursor-pointer"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-8 h-[2px] bg-ink transition-all duration-300 origin-center ${
                  menuOpen ? 'rotate-45 translate-y-[4.5px]' : ''
                }`}
              />
              <span
                className={`block w-8 h-[2px] bg-ink transition-all duration-300 origin-center ${
                  menuOpen ? '-rotate-45 -translate-y-[4.5px]' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      <div
        ref={menuRef}
        className={`fixed inset-0 z-40 bg-cream flex flex-col justify-center transition-all duration-500 ${menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
      >
        <div className="container-main">
          <div className="flex flex-col gap-3 md:gap-5">
            <a
              href="/about"
              className="menu-link text-left font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight hover:text-accent transition-colors duration-300 cursor-pointer leading-[1.1] uppercase"
            >
              {t.nav.about}
            </a>
            <button
              className="menu-link text-left font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight hover:text-accent transition-colors duration-300 cursor-pointer leading-[1.1] uppercase"
              onClick={() => scrollTo('contact')}
            >
              {t.nav.contact}
            </button>
          </div>

          <div className="mt-16 flex gap-8">
            <a
              href="#"
              className="text-label text-muted hover:text-ink transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
