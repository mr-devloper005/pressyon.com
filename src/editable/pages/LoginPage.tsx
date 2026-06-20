import type { Metadata } from 'next'
import Link from 'next/link'
import { Lock, RadioTower, ShieldCheck } from 'lucide-react'
import { buildPageMetadata } from '@/lib/seo'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { EditableLocalLoginForm } from '@/editable/components/EditableLocalAuthForms'
import { pagesContent } from '@/editable/content/pages.content'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({ path: '/login', title: 'Login', description: pagesContent.auth.login.metadataDescription })
}

export default function LoginPage() {
  return (
    <EditableSiteShell>
      <main className="media-shell page-fade text-[var(--slot4-page-text)]">
        <section className="media-container grid min-h-[calc(100vh-11rem)] gap-8 py-12 lg:grid-cols-[1.02fr_.98fr] lg:items-center">
          <div className="hero-reveal rounded-lg bg-[linear-gradient(135deg,#e8f8df,#ffffff_52%,#dff8ff)] p-8 shadow-[0_24px_80px_rgba(20,34,53,.1)] sm:p-10">
            <p className="section-kicker">{pagesContent.auth.login.badge}</p>
            <h1 className="mt-5 max-w-xl text-5xl font-black leading-[.98] tracking-[-.055em] sm:text-6xl">{pagesContent.auth.login.title}</h1>
            <p className="mt-6 max-w-lg text-base leading-8 text-[var(--slot4-muted-text)]">{pagesContent.auth.login.description}</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg bg-white p-5">
                <RadioTower className="h-7 w-7 text-[var(--slot4-accent)]" />
                <p className="mt-4 text-sm font-black">Access distribution drafts</p>
              </div>
              <div className="rounded-lg bg-white p-5">
                <ShieldCheck className="h-7 w-7 text-[var(--slot4-green)]" />
                <p className="mt-4 text-sm font-black">Manage release workflow</p>
              </div>
            </div>
          </div>
          <div className="reveal-up rounded-lg bg-white p-7 shadow-[0_24px_80px_rgba(20,34,53,.1)] sm:p-10">
            <div className="grid h-14 w-14 place-items-center rounded-full bg-[#eef8e8] text-[var(--slot4-green)]"><Lock className="h-7 w-7" /></div>
            <p className="section-kicker mt-7">Member access</p>
            <h2 className="mt-3 text-4xl font-black tracking-[-.045em]">{pagesContent.auth.login.formTitle}</h2>
            <EditableLocalLoginForm />
            <p className="mt-6 border-t border-slate-900/10 pt-5 text-sm text-[var(--slot4-muted-text)]">New here? <Link href="/signup" className="font-black text-[var(--slot4-coral)] underline-offset-4 hover:underline">{pagesContent.auth.login.createCta}</Link></p>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
