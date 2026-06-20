import Link from 'next/link'
import { ArrowRight, CheckCircle2, FileText, RadioTower, Search } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

const capabilities = [
  { icon: FileText, title: 'Release Structure', body: 'Clear titles, summaries, categories, and source context keep every announcement press-ready.' },
  { icon: RadioTower, title: 'Distribution Flow', body: 'Posts move into archive, search, related content, and detail pages without confusing readers.' },
  { icon: Search, title: 'Discovery System', body: 'Visitors can filter, search, and browse live updates by topic, organization, or campaign.' },
]

export default function AboutPage() {
  return (
    <EditableSiteShell>
      <main className="media-shell page-fade text-[var(--slot4-page-text)]">
        <section className="bg-white">
          <div className="media-container grid gap-10 py-14 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:py-20">
            <div className="hero-reveal">
              <p className="section-kicker">{pagesContent.about.badge}</p>
              <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[.98] tracking-[-.055em] sm:text-6xl">{pagesContent.about.title}</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--slot4-muted-text)]">{pagesContent.about.description}</p>
            </div>
            <div className="reveal-up rounded-lg bg-[linear-gradient(135deg,#e8f8df,#ffffff_55%,#dff8ff)] p-8 shadow-[0_24px_80px_rgba(20,34,53,.1)]">
              <p className="section-kicker">Operating promise</p>
              <h2 className="mt-4 text-4xl font-black tracking-[-.04em]">Make public updates easier to publish, browse, and trust.</h2>
              <div className="mt-6 grid gap-3">
                {['Live content stays connected to real posts.', 'Layouts stay readable on desktop and mobile.', 'Branding comes from the site configuration.'].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-lg bg-white p-4 text-sm font-bold">
                    <CheckCircle2 className="h-5 w-5 text-[var(--slot4-green)]" /> {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="media-container grid gap-8 py-14 lg:grid-cols-[.8fr_1.2fr] lg:py-18">
          <article className="reveal-up rounded-lg bg-white p-7 shadow-[0_18px_55px_rgba(20,34,53,.08)] sm:p-9">
            <p className="section-kicker">About {SITE_CONFIG.name}</p>
            <div className="article-content mt-6">
              {pagesContent.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </article>
          <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-1">
            {pagesContent.about.values.map((value, index) => (
              <div key={value.title} className="media-card stagger-card rounded-lg p-6">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[var(--slot4-coral)]">0{index + 1}</p>
                <h2 className="mt-4 text-2xl font-black tracking-[-.04em]">{value.title}</h2>
                <p className="mt-3 text-sm leading-7 text-[var(--slot4-muted-text)]">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white">
          <div className="media-container py-14">
            <div className="text-center reveal-up">
              <p className="section-kicker">What the platform supports</p>
              <h2 className="mt-3 text-4xl font-black tracking-[-.045em]">A practical media distribution stack</h2>
              <div className="section-rule" />
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {capabilities.map(({ icon: Icon, title, body }) => (
                <div key={title} className="media-card stagger-card rounded-lg p-7 text-center">
                  <Icon className="mx-auto h-9 w-9 text-[var(--slot4-accent)]" />
                  <h3 className="mt-5 text-xl font-black tracking-[-.03em]">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--slot4-muted-text)]">{body}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link href={SITE_CONFIG.taskViews.mediaDistribution || '/media-distribution'} className="inline-flex items-center gap-2 rounded-lg bg-[var(--slot4-coral)] px-7 py-3.5 text-xs font-black uppercase tracking-[.14em] text-white">Explore media archive <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
