'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/* ── Clip-path variants ── */

const enterClips = [
  'inset(12% 5% 12% 5%)',
  'inset(5% 12% 5% 12%)',
  'inset(18% 3% 5% 3%)',
  'inset(5% 3% 18% 3%)',
]

const exitClips = [
  'inset(8% 4% 8% 4%)',
  'inset(4% 8% 4% 8%)',
  'inset(12% 3% 12% 3%)',
  'inset(3% 6% 3% 6%)',
]

/* ── Element-level animation profiles (no opacity) ── */

type TL = gsap.core.Timeline
type Els = Element[]

interface Profile {
  enter(tl: TL, els: Els, pos: number): void
  exit(tl: TL, els: Els, pos: number): void
}

const profiles: Profile[] = [
  {
    // "Book Fold" — pages fold toward / away from the viewer
    enter(tl, els, pos) {
      tl.fromTo(
        els,
        { rotateX: 80, y: 30, transformOrigin: 'bottom center' },
        {
          rotateX: 0,
          y: 0,
          transformOrigin: 'bottom center',
          stagger: 0.012,
          duration: 0.09,
          ease: 'none',
        },
        pos
      )
    },
    exit(tl, els, pos) {
      tl.to(els, {
        rotateX: -80,
        y: -25,
        transformOrigin: 'top center',
        stagger: { each: 0.012, from: 'end' },
        duration: 0.16,
        ease: 'none',
      }, pos)
    },
  },
  {
    // "Spread" — even elements fly left, odd fly right
    enter(tl, els, pos) {
      tl.fromTo(
        els,
        {
          x: (i: number) => (i % 2 === 0 ? -50 : 50),
          rotateZ: (i: number) => (i % 2 === 0 ? -3 : 3),
        },
        {
          x: 0,
          rotateZ: 0,
          stagger: 0.012,
          duration: 0.09,
          ease: 'none',
        },
        pos
      )
    },
    exit(tl, els, pos) {
      tl.to(els, {
        x: (i: number) => (i % 2 === 0 ? -70 : 70),
        rotateZ: (i: number) => (i % 2 === 0 ? -6 : 6),
        stagger: { each: 0.012, from: 'end' },
        duration: 0.14,
        ease: 'none',
      }, pos)
    },
  },
  {
    // "Slide Lines" — elements sweep in/out with skew
    enter(tl, els, pos) {
      tl.fromTo(
        els,
        { x: 90, skewX: -10 },
        {
          x: 0,
          skewX: 0,
          stagger: 0.012,
          duration: 0.09,
          ease: 'none',
        },
        pos
      )
    },
    exit(tl, els, pos) {
      tl.to(els, {
        x: -90,
        skewX: 10,
        stagger: { each: 0.012, from: 'end' },
        duration: 0.16,
        ease: 'none',
      }, pos)
    },
  },
  {
    // "Rise & Tilt" — elements tilt forward/backward with depth
    enter(tl, els, pos) {
      tl.fromTo(
        els,
        {
          y: 45,
          scale: 0.9,
          rotateX: 30,
          transformOrigin: 'bottom center',
        },
        {
          y: 0,
          scale: 1,
          rotateX: 0,
          transformOrigin: 'bottom center',
          stagger: 0.012,
          duration: 0.09,
          ease: 'none',
        },
        pos
      )
    },
    exit(tl, els, pos) {
      tl.to(els, {
        y: -40,
        scale: 0.88,
        rotateX: -40,
        transformOrigin: 'top center',
        stagger: { each: 0.012, from: 'end' },
        duration: 0.16,
        ease: 'none',
      }, pos)
    },
  },
]

/* ── Component ── */

export default function PageTransitions() {
  useEffect(() => {
    const triggers: ScrollTrigger[] = []

    // ── Hero exit: pinned split-reveal ──
    const hero = document.querySelector('.page-section[data-hero]')
    if (hero) {
      const heroLine1 = hero.querySelector('.hero-line-1')
      const heroLine2 = hero.querySelector('.hero-line-2')
      const heroSubtitle = hero.querySelector('.hero-subtitle')
      const heroTrusted = hero.querySelector('.hero-trusted')
      const heroIndicator = hero.querySelector('.scroll-indicator')

      if (heroLine1 && heroLine2) {
        const heroTl = gsap.timeline({
          scrollTrigger: {
            trigger: hero,
            start: 'top top',
            end: '+=80%',
            pin: true,
            pinSpacing: false,
            scrub: 0.5,
          },
        })

        // 0–0.10: brief hold, then split begins quickly

        if (heroIndicator) {
          heroTl.to(heroIndicator, {
            y: -30,
            scale: 0,
            duration: 0.10,
            ease: 'none',
          }, 0.05)
        }

        // 0.10–0.85: content splits apart
        heroTl.to(heroLine1, {
          xPercent: 105,
          duration: 0.70,
          ease: 'none',
        }, 0.10)

        if (heroSubtitle) {
          heroTl.to(heroSubtitle, {
            xPercent: 105,
            duration: 0.65,
            ease: 'none',
          }, 0.15)
        }

        if (heroTrusted) {
          heroTl.to(heroTrusted, {
            xPercent: -105,
            duration: 0.65,
            ease: 'none',
          }, 0.15)
        }

        heroTl.to(heroLine2, {
          xPercent: -105,
          duration: 0.70,
          ease: 'none',
        }, 0.10)

        // 0.40–1.0: hero background clips to reveal page behind
        heroTl.to(hero, {
          clipPath: 'inset(0% 50% 0% 50%)',
          duration: 0.60,
          ease: 'none',
        }, 0.40)

        if (heroTl.scrollTrigger) triggers.push(heroTl.scrollTrigger)
      }
    }

    // ── Content reveal: Manifesto fade → Stickers pop-in → Flip to services (pinned) ──
    const reveal = document.querySelector('.content-reveal')
    if (reveal) {
      const manifestoLayer = reveal.querySelector('.manifesto-layer')
      const projectsLayer = reveal.querySelector('.projects-layer')
      const puzzlePieces = reveal.querySelectorAll('.puzzle-piece')
      const cardInners = reveal.querySelectorAll('.card-inner')

      if (manifestoLayer && projectsLayer && puzzlePieces.length) {
        const manifestoEls = manifestoLayer.querySelectorAll('.t-stagger')
        const manifestoLine = manifestoLayer.querySelector('.t-line')

        const revealTl = gsap.timeline({
          scrollTrigger: {
            trigger: reveal,
            start: 'top top',
            end: '+=300%',
            pin: true,
            scrub: 0.6,
          },
        })

        // 0–0.25: HOLD — Manifesto text visible

        // 0.25–0.30: Manifesto fades out while cards pop in
        revealTl.to(manifestoEls, {
          opacity: 0,
          y: -40,
          stagger: { each: 0.006, from: 'start' },
          duration: 0.05,
          ease: 'none',
        }, 0.25)

        if (manifestoLine) {
          revealTl.to(manifestoLine, {
            scaleX: 0,
            opacity: 0,
            duration: 0.03,
            ease: 'none',
          }, 0.26)
        }

        // Disable manifesto pointer events once faded
        revealTl.set(manifestoLayer, { pointerEvents: 'none' }, 0.30)

        // 0.27–0.34: Cards appear (overlaps with manifesto fade)
        revealTl.fromTo(
          puzzlePieces,
          {
            scale: 0.85,
            opacity: 0,
            y: 40,
          },
          {
            scale: 1,
            opacity: 1,
            y: 0,
            stagger: 0.012,
            duration: 0.07,
            ease: 'none',
          },
          0.27
        )

        // 0.34–0.55: HOLD — projects side fully visible

        // 0.55–0.65: Cards flip to reveal services (staggered from center)
        if (cardInners.length) {
          revealTl.to(cardInners, {
            rotateY: 180,
            stagger: { each: 0.02, from: 'center' },
            duration: 0.10,
            ease: 'none',
          }, 0.55)
        }

        // 0.65–1.0: HOLD — services side fully visible
        // Dummy tween to extend timeline totalDuration to 1.0
        revealTl.to({}, { duration: 0.35 }, 0.65)

        if (revealTl.scrollTrigger) triggers.push(revealTl.scrollTrigger)
      }
    }

    // ── Regular sections: unified scrubbed lifecycle ──
    const sections = document.querySelectorAll(
      '.page-section:not([data-hero]):not([data-no-transition])'
    )

    sections.forEach((section, index) => {
      const inner = section.querySelector('.page-inner')
      if (!inner) return

      const eClip = enterClips[index % enterClips.length]
      const xClip = exitClips[index % exitClips.length]
      const staggerEls = Array.from(inner.querySelectorAll('.t-stagger'))
      const line = section.querySelector('.t-line')
      const profile = profiles[index % profiles.length]

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.5,
        },
      })

      /* ─── ENTRANCE ─── */

      // Snap opacity on (clipPath hides content until it opens)
      tl.set(inner, { opacity: 1 }, 0)

      // Container clip opens (0 → 0.12)
      tl.fromTo(
        inner,
        {
          clipPath: eClip,
          y: 50,
          scale: 0.97,
          filter: 'blur(4px)',
        },
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          y: 0,
          scale: 1,
          filter: 'blur(0px)',
          duration: 0.12,
          ease: 'none',
        },
        0
      )

      // Elements enter via profile (0.04 → ~0.16)
      if (staggerEls.length) {
        profile.enter(tl, staggerEls, 0.04)
      }

      // Line scales in (0.06 → 0.14)
      if (line) {
        tl.fromTo(
          line,
          { scaleX: 0 },
          { scaleX: 1, duration: 0.08, ease: 'none' },
          0.06
        )
      }

      /* ─── HOLD 0.16–0.68 — content stays fully visible ─── */

      /* ─── EXIT ─── */

      if (staggerEls.length) {
        profile.exit(tl, staggerEls, 0.68)
      }
      if (line) {
        tl.to(line, { scaleX: 0, duration: 0.06, ease: 'none' }, 0.70)
      }
      tl.fromTo(
        inner,
        {
          y: 0,
          scale: 1,
          filter: 'blur(0px)',
          clipPath: 'inset(0% 0% 0% 0%)',
        },
        {
          clipPath: xClip,
          y: -90,
          scale: 0.94,
          filter: 'blur(6px)',
          duration: 0.28,
          ease: 'none',
          immediateRender: false,
        },
        0.72
      )

      if (tl.scrollTrigger) triggers.push(tl.scrollTrigger)
    })

    return () => triggers.forEach((t) => t.kill())
  }, [])

  return null
}
