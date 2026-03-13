'use client'

import gsap from 'gsap'
import { content } from '@/lib/content'

export default function Manifesto() {
  const t = content

  const fastScrollTo = (id: string) => {
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
  }

  return (
    <section id="about" className="manifesto-layer py-16 md:py-20 lg:py-24" data-no-transition>
      <div className="page-inner container-main">
        <p className="t-stagger text-label text-[0.8rem] md:text-sm leading-[2] md:leading-[2.2] max-w-5xl">
          {t.manifesto.text}
        </p>

        <div className="t-line h-[1px] bg-divider mt-10 md:mt-14 mb-10 md:mb-14" />
        <div className="t-stagger flex flex-wrap gap-4">
          <a
            href="/about"
            className="pill pill-outline"
          >
            {t.manifesto.aboutBtn}
            <span>{'\u2192'}</span>
          </a>
          <a
            href="#contact"
            className="pill pill-outline"
            onClick={(e) => {
              e.preventDefault()
              fastScrollTo('contact')
            }}
          >
            contacts
            <span>{'\u2192'}</span>
          </a>
        </div>

        <div className="t-stagger mt-5 md:mt-7 max-w-3xl ml-auto text-right">
          <p className="font-display text-muted text-xl md:text-2xl lg:text-3xl leading-relaxed md:leading-[1.8]">
            {t.manifesto.bio}
          </p>
        </div>
      </div>
    </section>
  )
}
