'use client'

import { content } from '@/lib/content'

export default function Footer() {
  const t = content

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="page-section !min-h-0 h-auto py-12 md:py-16 border-t border-divider !justify-end">
      <div className="container-main">
        <div className="flex flex-col md:flex-row md:justify-between gap-8 mb-12 md:mb-16">
          <ul className="flex flex-wrap gap-6 md:gap-8">
            {(['work', 'about', 'services', 'contact'] as const).map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollTo(item)}
                  className="text-label text-muted hover:text-ink transition-colors cursor-pointer"
                >
                  {t.footer[item]}
                </button>
              </li>
            ))}
          </ul>

          <ul className="flex flex-wrap gap-6 md:gap-8">
            <li>
              <a
                href="#"
                className="text-label text-muted hover:text-ink transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.footer.linkedin}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-label text-muted hover:text-ink transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.footer.github}
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between gap-4 text-[0.65rem] uppercase tracking-[0.15em] text-muted/50">
          <span>{t.footer.rights}</span>
          <span>{t.footer.studio}</span>
        </div>
      </div>
    </footer>
  )
}
