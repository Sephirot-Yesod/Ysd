'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { content } from '@/lib/content'

interface HeroProps {
  isLoaded: boolean
}

export default function Hero({ isLoaded }: HeroProps) {
  const hasAnimated = useRef(false)
  const marqueeRef = useRef<HTMLDivElement>(null)
  const marqueeSetRef = useRef<HTMLDivElement>(null)
  const t = content

  useEffect(() => {
    if (!isLoaded || hasAnimated.current) return
    hasAnimated.current = true

    const tl = gsap.timeline({ delay: 0.1 })

    tl.fromTo(
      '.hero-char',
      { y: '110%' },
      { y: '0%', duration: 1, stagger: 0.025, ease: 'power3.out' }
    )

    tl.fromTo(
      '.hero-subtitle',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
      '-=0.5'
    )

    tl.fromTo(
      '.hero-trusted',
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' },
      '-=0.4'
    )

    tl.fromTo(
      '.scroll-indicator',
      { opacity: 0 },
      { opacity: 1, duration: 0.6 },
      '-=0.3'
    )

    return () => {
      tl.kill()
    }
  }, [isLoaded])

  useEffect(() => {
    const track = marqueeRef.current
    const firstSet = marqueeSetRef.current
    if (!track || !firstSet) return

    const setWidth = firstSet.offsetWidth
    const marquee = gsap.to(track, {
      x: -setWidth,
      duration: 25,
      ease: 'none',
      repeat: -1,
    })

    return () => { marquee.kill() }
  }, [])

  const splitChars = (text: string, className?: string) =>
    text.split('').map((char, i) => (
      <span key={i} className="char-wrap">
        <span className={`hero-char char-inner ${className ?? ''}`}>
          {char === ' ' ? '\u00A0' : char}
        </span>
      </span>
    ))

  const line2StartsWithAmp = t.hero.line2.startsWith('&')
  const line2Text = line2StartsWithAmp
    ? t.hero.line2.replace(/^&\s*/, '')
    : t.hero.line2

  return (
    <section data-hero className="page-section pt-24 pb-16 md:pt-28 md:pb-24">
      <div className="container-main flex-1 flex flex-col justify-start pt-[2vh] md:pt-[4vh]">
        <div className="mb-10 md:mb-14 lg:mb-16">
          <h1 className="text-[clamp(2.5rem,8vw,9rem)] leading-[0.95] tracking-[-0.02em]">
            <div className="hero-line-1 overflow-hidden pb-0">
              <div className="flex flex-wrap font-body font-medium tracking-[-0.04em]">
                {splitChars(t.hero.line1)}
              </div>
            </div>
            <div className="hero-line-2 overflow-hidden pb-0 -mt-1 md:-mt-2">
              <div className="flex flex-wrap pl-[0.6em] md:pl-[1.2em] font-display font-normal tracking-[-0.03em]">
                {line2StartsWithAmp && (
                  <>
                    <span className="char-wrap">
                      <span className="hero-char char-inner italic text-accent">
                        &amp;
                      </span>
                    </span>
                    <span className="char-wrap">
                      <span className="hero-char char-inner">{'\u00A0'}</span>
                    </span>
                  </>
                )}
                {splitChars(line2Text)}
              </div>
            </div>
          </h1>
        </div>

        <div className="hero-desc">
          <p className="hero-subtitle max-w-3xl text-ink text-sm md:text-base leading-[2.2] font-body opacity-0 uppercase tracking-[0.15em]">
            {t.hero.subtitle.split('\n').map((line, i) => (
              <span key={i}>
                {line}
                {i < t.hero.subtitle.split('\n').length - 1 && <br />}
              </span>
            ))}
          </p>

          <div className="hero-trusted mt-10 md:mt-14 ml-auto md:max-w-[60%] opacity-0">
            <span className="text-label text-muted block mb-4">
              {t.trustedBy.sectionLabel}
            </span>
            <div className="overflow-hidden">
              <div ref={marqueeRef} className="flex whitespace-nowrap">
                <div ref={marqueeSetRef} className="flex shrink-0">
                  {t.trustedBy.clients.map((client, i) => (
                    <span
                      key={i}
                      className="font-display text-base md:text-lg font-bold text-ink/20 shrink-0"
                    >
                      {client}
                      <span className="text-ink/10 mx-4">{'·'}</span>
                    </span>
                  ))}
                </div>
                <div className="flex shrink-0">
                  {t.trustedBy.clients.map((client, i) => (
                    <span
                      key={`dup-${i}`}
                      className="font-display text-base md:text-lg font-bold text-ink/20 shrink-0"
                    >
                      {client}
                      <span className="text-ink/10 mx-4">{'·'}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-0">
        <span className="text-label text-muted text-[10px]">
          {t.hero.scroll}
        </span>
        <div className="w-[1px] h-12 bg-divider relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-accent animate-scroll-line" />
        </div>
      </div>
    </section>
  )
}
