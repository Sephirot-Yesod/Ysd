'use client'

import { useRef, useState } from 'react'
import { content, type ProjectItem } from '@/lib/content'

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  const [hovered, setHovered] = useState<number | null>(null)
  const projects = content.projects.items
  const services = content.services.items

  const renderFront = (project: ProjectItem, titleClass: string, isHovered: boolean) => (
    <a
      href={project.url || '#'}
      target={project.url ? '_blank' : undefined}
      rel={project.url ? 'noopener noreferrer' : undefined}
      className={`card-face card-front rounded-2xl overflow-hidden bg-gradient-to-br ${project.gradient}`}
    >
      {project.image ? (
        <img src={project.image} alt={project.name} className="absolute inset-0 w-full h-full object-cover" />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-sm md:text-base font-bold text-white tracking-[0.2em] uppercase">{project.name}</span>
        </div>
      )}
      <div className={`hover-overlay ${isHovered ? 'is-active' : ''}`}>
        <div className="hover-blur" />
        <div className="hover-content">
          <h3 className={`font-display ${titleClass} font-bold text-white tracking-tight leading-tight`}>{project.name}</h3>
          <p className="text-white/60 text-xs md:text-sm mt-2 leading-relaxed line-clamp-3">{project.description}</p>
          {project.url && (
            <span className="inline-block mt-2 text-white/40 text-xs">{'↗ view project'}</span>
          )}
        </div>
      </div>
    </a>
  )

  const renderBack = (idx: number, titleClass: string, descClass: string) => {
    const service = services[idx]
    if (!service) return <div className="card-face card-back rounded-2xl overflow-hidden bg-cream border border-divider" />
    return (
      <div className="card-face card-back rounded-2xl overflow-hidden bg-cream border border-divider">
        <div className="absolute inset-0 p-5 md:p-6 flex flex-col justify-end">
          <h3 className={`font-display ${titleClass} font-bold text-ink tracking-tight leading-tight`}>{service.title}</h3>
          <p className={`text-muted ${descClass} mt-2 leading-relaxed`}>{service.description}</p>
        </div>
      </div>
    )
  }

  const puzzleCard = (
    project: ProjectItem,
    idx: number,
    serviceIdx: number,
    titleClass: string,
    gridStyle: React.CSSProperties,
    backTitleClass: string,
    backDescClass: string,
  ) => (
    <div
      className="puzzle-piece"
      style={gridStyle}
      onMouseEnter={() => setHovered(idx)}
      onMouseLeave={() => setHovered(null)}
    >
      <div className="card-inner">
        {renderFront(project, titleClass, hovered === idx)}
        {renderBack(serviceIdx, backTitleClass, backDescClass)}
      </div>
    </div>
  )

  return (
    <section ref={sectionRef} id="work" className="projects-layer">
      <div className="container-main w-full h-full flex flex-col pt-[5.5rem] pb-[2rem]">
        <div
          className="flex-1 grid gap-2"
          style={{
            gridTemplateColumns: 'repeat(12, 1fr)',
            gridTemplateRows: 'repeat(6, 1fr)',
          }}
        >
          {/* Selected Projects / Services label */}
          <div className="puzzle-piece" style={{ gridColumn: '1 / 4', gridRow: '1 / 2' }}>
            <div className="card-inner">
              <div className="card-face card-front rounded-2xl overflow-hidden border border-divider bg-cream flex flex-col justify-center items-center text-center">
                <span className="font-display text-sm md:text-base font-bold text-ink tracking-[0.2em] uppercase">Selected</span>
                <span className="font-display text-sm md:text-base font-bold text-ink tracking-[0.2em] uppercase">Projects</span>
              </div>
              <div className="card-face card-back rounded-2xl overflow-hidden bg-accent flex flex-col justify-center items-center text-center">
                <span className="font-display text-sm md:text-base font-bold text-white tracking-[0.2em] uppercase">Services</span>
              </div>
            </div>
          </div>
          {/* Vidoc — 3×3 tall */}
          {puzzleCard(projects[1], 1, 1, 'text-xl md:text-2xl lg:text-3xl', { gridColumn: '1 / 4', gridRow: '2 / 5' },
            'text-xl md:text-2xl', 'text-xs md:text-sm')}

          {/* Alora — 2×2 */}
          {puzzleCard(projects[4], 4, 4, 'text-base md:text-lg', { gridColumn: '4 / 6', gridRow: '1 / 3' },
            'text-sm md:text-base', 'text-[0.65rem] md:text-xs')}

          {/* Plart — 2×2 small */}
          {puzzleCard(projects[5], 5, 5, 'text-base md:text-lg', { gridColumn: '4 / 6', gridRow: '3 / 5' },
            'text-sm md:text-base', 'text-[0.65rem] md:text-xs')}
          {/* Plantiemoji — 7×4 huge */}
          {puzzleCard(projects[0], 0, 0, 'text-4xl md:text-5xl lg:text-6xl', { gridColumn: '6 / 13', gridRow: '1 / 5' },
            'text-2xl md:text-3xl lg:text-4xl', 'text-sm md:text-base')}
          {/* EZPlant — 4×2 wide */}
          {puzzleCard(projects[2], 2, 2, 'text-xl md:text-2xl lg:text-3xl', { gridColumn: '1 / 5', gridRow: '5 / 7' },
            'text-lg md:text-xl', 'text-xs md:text-sm')}
          {/* PlantScape — 4×2 wide */}
          {puzzleCard(projects[3], 3, 3, 'text-lg md:text-xl lg:text-2xl', { gridColumn: '5 / 9', gridRow: '5 / 7' },
            'text-lg md:text-xl', 'text-xs md:text-sm')}
          {/* Helmet — 2×2 small */}
          {puzzleCard(projects[6], 6, 6, 'text-base md:text-lg', { gridColumn: '9 / 11', gridRow: '5 / 7' },
            'text-sm md:text-base', 'text-[0.65rem] md:text-xs')}
          {/* Microlensing — 2×2 small */}
          {puzzleCard(projects[7], 7, 7, 'text-base md:text-lg', { gridColumn: '11 / 13', gridRow: '5 / 7' },
            'text-sm md:text-base', 'text-[0.65rem] md:text-xs')}
        </div>
      </div>
    </section>
  )
}
