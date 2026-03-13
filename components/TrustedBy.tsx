import { content } from '@/lib/content'

export default function TrustedBy() {
  const t = content

  return (
    <section className="page-section py-16 md:py-20 lg:py-24">
      <div className="page-inner container-main">
        <div className="t-stagger mb-12 md:mb-16">
          <span className="text-label text-muted">
            {t.trustedBy.sectionLabel}
          </span>
        </div>

        <div className="flex flex-wrap gap-x-10 gap-y-6 md:gap-x-14 lg:gap-x-20">
          {t.trustedBy.clients.map((client, i) => (
            <span
              key={i}
              className="t-stagger font-display text-xl md:text-2xl lg:text-3xl font-bold text-ink/20 hover:text-ink transition-colors duration-500 cursor-default"
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
