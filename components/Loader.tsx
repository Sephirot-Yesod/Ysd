'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

interface LoaderProps {
  onComplete: () => void
}

export default function Loader({ onComplete }: LoaderProps) {
  const hasRun = useRef(false)
  const onCompleteRef = useRef(onComplete)
  onCompleteRef.current = onComplete

  useEffect(() => {
    if (hasRun.current) return
    hasRun.current = true

    const tl = gsap.timeline({ delay: 0.3 })

    // 1. Characters rise up
    tl.fromTo(
      '.loader-char',
      { y: '120%' },
      { y: '0%', duration: 0.8, stagger: 0.07, ease: 'power3.out' }
    )

    // 2. Line extends from center
    tl.fromTo(
      '.loader-line',
      { scaleX: 0 },
      { scaleX: 1, duration: 0.6, ease: 'power3.inOut' },
      '-=0.3'
    )

    // 3. Studio name fades in
    tl.fromTo(
      '.loader-studio',
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' },
      '-=0.2'
    )

    // 4. Pause
    tl.to({}, { duration: 0.5 })

    // 5. Trigger hero early
    tl.call(() => onCompleteRef.current())

    // 6. YESOD moves up, 紫剑工作室 moves down, line fades
    tl.to('.loader-top-text', {
      yPercent: -120,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.inOut',
    })

    tl.to(
      '.loader-bottom-text',
      {
        yPercent: 120,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.inOut',
      },
      '<'
    )

    tl.to(
      '.loader-line',
      {
        opacity: 0,
        scaleX: 0,
        duration: 0.5,
        ease: 'power2.in',
      },
      '<'
    )

    // 7. Fade out the loader background
    tl.to(
      '#loader',
      {
        opacity: 0,
        duration: 0.4,
        ease: 'power2.in',
      },
      '-=0.3'
    )

    // 8. Clean up
    tl.call(() => {
      const loader = document.getElementById('loader')
      if (loader) loader.style.display = 'none'
    })

    return () => {
      tl.kill()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div id="loader" className="fixed inset-0 z-50 bg-cream flex flex-col items-center justify-center">
      {/* YESOD. text */}
      <div className="loader-top-text flex overflow-hidden">
        {"YESOD'S".split('').map((char, i) => (
          <span
            key={i}
            className={`loader-char inline-block font-display text-[15vw] md:text-[10vw] font-bold leading-none tracking-[-0.04em] ${
              char === "'" ? 'text-accent' : ''
            }`}
          >
            {char}
          </span>
        ))}
      </div>

      {/* Thin divider line */}
      <div className="loader-line w-[60vw] md:w-[40vw] h-[1px] bg-ink/20 mt-4 md:mt-6 origin-center scale-x-0" />

      {/* 紫剑工作室 */}
      <p className="loader-bottom-text loader-studio text-sm md:text-base font-medium uppercase text-muted mt-3 md:mt-4 tracking-[0.3em] opacity-0">
        紫剑工作室
      </p>
    </div>
  )
}
