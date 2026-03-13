'use client'

import Link from 'next/link'

export default function About() {
  return (
    <main className="min-h-screen bg-cream flex flex-col items-center justify-center px-8">
      <div className="text-center max-w-2xl">
        <h1 className="font-display text-5xl md:text-7xl font-bold text-ink tracking-tight leading-[0.95]">
          Under<br />Construction
        </h1>
        <div className="w-16 h-[2px] bg-accent mx-auto mt-8 mb-8" />
        <p className="text-muted text-base md:text-lg leading-relaxed">
          This page is being crafted. Check back soon.
        </p>
        <a
          href="/"
          className="inline-block mt-10 pill pill-outline text-sm px-8 py-3.5"
          onClick={() => window.scrollTo(0, 0)}
        >
          back to home
          <span className="ml-2">{'\u2192'}</span>
        </a>
      </div>
    </main>
  )
}
