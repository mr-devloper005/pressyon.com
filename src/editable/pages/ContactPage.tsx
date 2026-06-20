'use client'

import { FileText, Mail, Megaphone, Phone, RadioTower } from 'lucide-react'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableContactLeadForm } from '@/editable/components/EditableContactLeadForm'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

const desks = [
  { icon: FileText, title: 'Press release support', body: 'Submit release details, correction notes, source context, or publishing questions.' },
  { icon: RadioTower, title: 'Distribution partnerships', body: 'Discuss syndication, campaign amplification, media pickup, and category strategy.' },
  { icon: Megaphone, title: 'Announcement planning', body: 'Share launch timing, target audience, priority links, and supporting assets.' },
]

export default function ContactPage() {
  return (
    <EditableSiteShell>
      <main className="media-shell page-fade text-[var(--slot4-page-text)]">
        <section className="bg-white">
          <div className="media-container py-14 text-center lg:py-18">
            <p className="section-kicker">{pagesContent.contact.eyebrow}</p>
            <h1 className="mx-auto mt-4 max-w-4xl text-5xl font-black leading-[.98] tracking-[-.055em] sm:text-6xl">{pagesContent.contact.title}</h1>
            <div className="section-rule" />
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[var(--slot4-muted-text)]">{pagesContent.contact.description}</p>
          </div>
        </section>

        <section className="media-container grid gap-8 py-14 lg:grid-cols-[.78fr_1.22fr] lg:py-18">
          <aside className="grid gap-5">
            {desks.map((desk, index) => (
              <div key={desk.title} className="media-card stagger-card rounded-lg p-6">
                <div className="flex items-center justify-between">
                  <desk.icon className="h-7 w-7 text-[var(--slot4-accent)]" />
                  <span className="text-xs font-black text-[var(--slot4-coral)]">0{index + 1}</span>
                </div>
                <h2 className="mt-5 text-2xl font-black tracking-[-.04em]">{desk.title}</h2>
                <p className="mt-3 text-sm leading-7 text-[var(--slot4-muted-text)]">{desk.body}</p>
              </div>
            ))}
            <div className="rounded-lg bg-[#242326] p-6 text-white">
              <p className="section-kicker">Direct lines</p>
              <div className="mt-5 grid gap-3 text-sm text-white/75">
                <a href="tel:1234567890" className="inline-flex items-center gap-2 hover:text-[var(--slot4-accent)]"><Phone className="h-4 w-4" /> 123-456-7890</a>
                <a href="mailto:info@yoursite.com" className="inline-flex items-center gap-2 hover:text-[var(--slot4-accent)]"><Mail className="h-4 w-4" /> info@yoursite.com</a>
              </div>
            </div>
          </aside>

          <div className="reveal-up rounded-lg bg-white p-6 shadow-[0_24px_80px_rgba(20,34,53,.1)] sm:p-9">
            <p className="section-kicker">Send a message</p>
            <h2 className="mt-3 text-4xl font-black tracking-[-.045em]">{pagesContent.contact.formTitle}</h2>
            <EditableContactLeadForm />
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
