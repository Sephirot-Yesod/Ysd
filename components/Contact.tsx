'use client'

import gsap from 'gsap'
import { content } from '@/lib/content'

export default function Contact() {
  const t = content

  const scrollTo = (id: string) => {
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
    <section
      id="contact"
      className="page-section !min-h-screen relative overflow-hidden flex flex-col"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[50%] bg-gradient-to-r from-transparent via-accent/[0.06] to-transparent rotate-[-6deg] blur-3xl" />
      </div>

      <div className="page-inner container-main relative z-10 flex flex-col flex-1 pt-24 md:pt-32 pb-8 md:pb-12">
        <div className="flex-1 grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 md:gap-12 items-end md:items-center">
          {/* Left column — contact info */}
          <div className="hidden md:flex flex-col gap-3">
            <span className="text-label text-muted mb-2">Contact me</span>
            <span className="font-display text-base md:text-lg text-ink">WeChat: sephirot_yesod</span>
            <button onClick={() => navigator.clipboard.writeText('+14373629313')} className="font-display text-base md:text-lg text-ink hover:text-accent transition-colors text-left cursor-pointer">+1 437 362 9313</button>
            <button onClick={() => navigator.clipboard.writeText('+8613402194356')} className="font-display text-base md:text-lg text-ink hover:text-accent transition-colors text-left cursor-pointer">+86 134 0219 4356</button>
            <button onClick={() => navigator.clipboard.writeText('max.yesod@gmail.com')} className="font-display text-base md:text-lg text-ink hover:text-accent transition-colors text-left cursor-pointer">max.yesod@gmail.com</button>
          </div>

          {/* Center — headline + CTA */}
          <div className="text-center">
            <h2 className="t-stagger font-display text-[clamp(3rem,10vw,12rem)] font-bold leading-[0.95] tracking-[-0.03em]">
              <span className="block">{t.contact.line1}</span>
              <span className="block">{t.contact.line2}</span>
            </h2>

            <div className="t-stagger mt-12 md:mt-16">
              <a
                href="#about"
                className="pill pill-accent text-sm md:text-base px-8 md:px-10 py-4"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                more about me
                <span className="text-xs">&rarr;</span>
              </a>
            </div>
          </div>

          {/* Right column — socials */}
          <div className="hidden md:flex flex-col gap-3 items-end">
            <span className="text-label text-muted mb-2">Follow</span>
            <a href="#" target="_blank" rel="noopener noreferrer" className="font-display text-lg md:text-xl font-bold text-ink hover:text-accent transition-colors uppercase tracking-wide">
              {t.footer.linkedin}
            </a>
            <a href="https://github.com/Sephirot-Yesod" target="_blank" rel="noopener noreferrer" className="font-display text-lg md:text-xl font-bold text-ink hover:text-accent transition-colors uppercase tracking-wide">
              {t.footer.github}
            </a>
          </div>
        </div>

        {/* Bottom bar — sticks to bottom */}
        <div className="mt-auto pt-12 md:pt-16 flex flex-col md:flex-row md:justify-between gap-4 text-[0.65rem] uppercase tracking-[0.15em] text-muted/50">
          <span>{t.footer.rights}</span>
          <span>{t.footer.studio}</span>
        </div>
      </div>
    </section>
  )
}
