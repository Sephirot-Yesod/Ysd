import { content } from '@/lib/content'

export default function Services() {
  const t = content

  return (
    <section id="services" className="page-section py-16 md:py-20 lg:py-24">
      <div className="page-inner container-main">
        <div className="t-stagger mb-16 md:mb-20">
          <span className="text-label text-muted">{t.services.sectionLabel}</span>
        </div>

        <div>
          {t.services.items.map((service, i) => (
            <div
              key={i}
              className="t-stagger service-item border-t border-divider py-8 md:py-12 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start group"
            >
              <div className="md:col-span-1">
                <span className="font-display text-3xl md:text-4xl text-accent/30 font-bold leading-none">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>

              <div className="md:col-span-4">
                <h3 className="font-display text-xl md:text-2xl font-bold tracking-tight group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>
              </div>

              <div className="md:col-span-7">
                <p className="text-muted leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
          <div className="border-t border-divider" />
        </div>
      </div>
    </section>
  )
}
