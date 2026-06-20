import Link from 'next/link'
import { ArrowRight, BarChart3, CheckCircle2, FileText, Megaphone, RadioTower, Search, Send, ShieldCheck } from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import type { HomeTimeSection } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { editableDesignContract as dc } from '@/editable/layouts/design-contract'
import { getEditableExcerpt, postHref } from '@/editable/cards/PostCards'

type HomeSectionProps = {
  primaryTask: TaskKey
  primaryRoute: string
  posts: SitePost[]
  timeSections: HomeTimeSection[]
}

function taskLabel(task: TaskKey) {
  return SITE_CONFIG.tasks.find((item) => item.key === task)?.label || task
}

function TextPostCard({ post, href, index }: { post: SitePost; href: string; index: number }) {
  return (
    <Link href={href} className="media-card stagger-card group block rounded-lg p-6">
      <div className="flex items-center justify-between gap-4">
        <span className="rounded-full bg-[#eef8e8] px-3 py-1 text-[10px] font-black uppercase tracking-[.16em] text-[var(--slot4-green)]">Update {String(index + 1).padStart(2, '0')}</span>
        <ArrowRight className="h-4 w-4 text-[var(--slot4-coral)] transition group-hover:translate-x-1" />
      </div>
      <h3 className="mt-5 line-clamp-3 text-2xl font-black leading-tight tracking-[-.04em] group-hover:text-[var(--slot4-accent)]">{post.title}</h3>
      <p className="mt-4 line-clamp-4 text-sm leading-7 text-[var(--slot4-muted-text)]">{getEditableExcerpt(post, 180)}</p>
    </Link>
  )
}

export function EditableHomeHero({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const lead = posts[0]
  const heroTitle = pagesContent.home.hero.title.join(' ') || `${SITE_CONFIG.name}: media distribution that moves clearly.`

  return (
    <section className="media-shell overflow-hidden bg-white">
      <div className="media-container grid min-h-[620px] items-center gap-10 py-14 lg:grid-cols-[1.08fr_.92fr] lg:py-20">
        <div className="hero-reveal">
          <p className="section-kicker">{pagesContent.home.hero.badge}</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[.98] tracking-[-.055em] sm:text-6xl lg:text-7xl">{heroTitle}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--slot4-muted-text)]">{pagesContent.home.hero.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={primaryRoute} className={dc.button.accent}>View media releases <ArrowRight className="h-4 w-4" /></Link>
            <Link href="/search" className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-900/15 bg-white px-7 py-3.5 text-xs font-black uppercase tracking-[0.12em] transition hover:border-[var(--slot4-accent)] hover:text-[var(--slot4-accent)]">Search archive</Link>
          </div>
        </div>

        <div className="reveal-up relative">
          <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-[var(--slot4-accent)]/20 blur-3xl" />
          <div className="absolute -bottom-8 -left-8 h-52 w-52 rounded-full bg-[var(--slot4-green)]/25 blur-3xl" />
          <div className="relative rounded-lg border border-slate-900/10 bg-white p-5 shadow-[0_26px_80px_rgba(20,34,53,.12)]">
            <div className="rounded-lg bg-[linear-gradient(135deg,#dff5c8,#e9fbff_46%,#ffffff)] p-8">
              <div className="mx-auto grid h-52 max-w-sm place-items-center rounded-lg border-2 border-[var(--slot4-green)]/70 bg-white/45 text-center">
                <div>
                  <p className="section-kicker">Press desk online</p>
                  <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-.04em] text-[var(--slot4-green)]">Media Distribution</h2>
                </div>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {[
                  ['Releases', RadioTower],
                  ['Coverage', Megaphone],
                  ['Signals', BarChart3],
                ].map(([label, Icon]) => (
                  <div key={String(label)} className="rounded-lg bg-white p-4 text-center shadow-sm">
                    <Icon className="mx-auto h-6 w-6 text-[var(--slot4-accent)]" />
                    <p className="mt-3 text-xs font-black uppercase tracking-[.12em]">{String(label)}</p>
                  </div>
                ))}
              </div>
            </div>
            {lead ? (
              <Link href={postHref(primaryTask, lead, primaryRoute)} className="group mt-5 block rounded-lg bg-[#242326] p-5 text-white">
                <p className="text-[10px] font-black uppercase tracking-[.18em] text-[var(--slot4-accent)]">Latest release</p>
                <h2 className="mt-3 line-clamp-2 text-2xl font-black leading-tight">{lead.title}</h2>
                <span className="mt-4 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[.14em] text-white/70 group-hover:text-white">Read update <ArrowRight className="h-4 w-4" /></span>
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}

export function EditableStoryRail({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const railPosts = posts.slice(0, 6)
  if (!railPosts.length) return null
  return (
    <section className="bg-white">
      <div className={`${dc.shell.section} ${dc.shell.sectionY}`}>
        <div className="text-center reveal-up">
          <p className="section-kicker">Latest distribution cards</p>
          <h2 className="mt-3 text-4xl font-black tracking-[-.045em]">Media releases, headlines, and summaries</h2>
          <div className="section-rule" />
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[var(--slot4-muted-text)]">Home cards stay text-first so visitors can scan titles and summaries without heavy image blocks.</p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {railPosts.map((post, index) => <TextPostCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />)}
        </div>
      </div>
    </section>
  )
}

export function EditableMagazineSplit({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const items = posts.slice(6, 10)
  return (
    <section className="bg-[#f6fbf2]">
      <div className="media-container grid gap-8 py-14 lg:grid-cols-[.95fr_1.05fr] lg:py-20">
        <div className="reveal-up overflow-hidden rounded-lg bg-[var(--slot4-green)] text-white shadow-[0_24px_70px_rgba(124,198,80,.24)]">
          <div className="p-8 sm:p-10">
            <p className="text-xs font-black uppercase tracking-[.22em] text-white/75">Distribution workflow</p>
            <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-.04em]">Publish with clarity from announcement to audience pickup.</h2>
            <p className="mt-5 text-base leading-8 text-white/85">Structure every media update around a strong headline, source context, category, summary, and readable detail page.</p>
          </div>
          <div className="grid grid-cols-2">
            {[
              ['Verified source', ShieldCheck],
              ['Press-ready copy', FileText],
              ['Fast routing', Send],
              ['Clear signals', CheckCircle2],
            ].map(([label, Icon], index) => (
              <div key={String(label)} className={`p-6 text-center ${index === 1 ? 'bg-[var(--slot4-yellow)]' : index === 2 ? 'bg-[var(--slot4-coral)]' : index === 3 ? 'bg-[var(--slot4-accent)]' : 'bg-[var(--slot4-green)]'}`}>
                <Icon className="mx-auto h-8 w-8" />
                <p className="mt-4 text-sm font-black uppercase tracking-[.12em]">{String(label)}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid content-start gap-4">
          {items.length ? items.map((post, index) => (
            <TextPostCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index + 6} />
          )) : (
            <div className="media-card rounded-lg p-8">
              <p className="section-kicker">Ready for posts</p>
              <h3 className="mt-3 text-3xl font-black tracking-[-.04em]">New media cards appear here as soon as the feed returns them.</h3>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export function EditableTimeCollections({ primaryTask, primaryRoute, posts, timeSections }: HomeSectionProps) {
  const collected = timeSections.flatMap((section) => section.posts)
  const source = (collected.length ? collected : posts).slice(0, 5)
  if (!source.length) return null
  return (
    <section className="bg-white">
      <div className={`${dc.shell.section} ${dc.shell.sectionY}`}>
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div className="reveal-up">
            <p className="section-kicker">Distribution archive</p>
            <h2 className="mt-3 text-4xl font-black leading-tight tracking-[-.045em]">Browse media updates by momentum, not clutter.</h2>
            <p className="mt-5 text-base leading-8 text-[var(--slot4-muted-text)]">Recent posts, category filters, and search tools keep the archive usable for readers, partners, journalists, and internal teams.</p>
            <Link href={primaryRoute} className={`${dc.button.accent} mt-7`}>Open {taskLabel(primaryTask)} <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="grid gap-4">
            {source.map((post, index) => <TextPostCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />)}
          </div>
        </div>
        <form action="/search" className="mt-14 grid gap-5 rounded-lg bg-[#242326] p-6 text-white sm:grid-cols-[1fr_auto] sm:items-center sm:p-8">
          <div>
            <h3 className="text-3xl font-black tracking-[-.04em]">Search every media update</h3>
            <p className="mt-2 text-sm text-white/65">Find distributed posts by title, company, campaign, category, or keyword.</p>
          </div>
          <label className="flex overflow-hidden rounded-full bg-white text-[var(--slot4-page-text)] sm:min-w-[420px]">
            <Search className="ml-4 mt-3.5 h-4 w-4 text-slate-400" />
            <input name="q" placeholder="Search media distribution" className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm font-bold outline-none" />
            <button className="bg-[var(--slot4-accent)] px-5 text-xs font-black uppercase tracking-[.14em] text-white">Search</button>
          </label>
        </form>
      </div>
    </section>
  )
}

export function EditableHomeCta() {
  return (
    <section className="bg-[#eef8e8]">
      <div className="media-container grid gap-6 py-14 lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:py-18">
        <div className="reveal-up">
          <p className="section-kicker">Start distributing</p>
          <h2 className="mt-3 max-w-3xl text-4xl font-black leading-tight tracking-[-.045em]">Bring announcements, coverage, and public updates into one focused media hub.</h2>
        </div>
        <div className="flex flex-wrap gap-3 lg:justify-end">
          <Link href="/create" className={dc.button.accent}>Create a post</Link>
          <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-900/15 bg-white px-7 py-3.5 text-xs font-black uppercase tracking-[0.12em] transition hover:border-[var(--slot4-accent)] hover:text-[var(--slot4-accent)]">Contact desk</Link>
        </div>
      </div>
    </section>
  )
}
