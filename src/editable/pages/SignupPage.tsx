import type { Metadata } from 'next'
import Link from 'next/link'
import { FileText, Send, UserPlus } from 'lucide-react'
import { buildPageMetadata } from '@/lib/seo'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { EditableLocalSignupForm } from '@/editable/components/EditableLocalAuthForms'
import { pagesContent } from '@/editable/content/pages.content'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({ path: '/signup', title: 'Sign up', description: pagesContent.auth.signup.metadataDescription })
}

export default function SignupPage() {
  return (
    <EditableSiteShell>
      <main className="media-shell page-fade text-[var(--slot4-page-text)]">
        <section className="media-container grid min-h-[calc(100vh-11rem)] gap-8 py-12 lg:grid-cols-[.98fr_1.02fr] lg:items-center">
          <div className="reveal-up rounded-lg bg-white p-7 shadow-[0_24px_80px_rgba(20,34,53,.1)] sm:p-10">
            <div className="grid h-14 w-14 place-items-center rounded-full bg-[#dff8ff] text-[var(--slot4-accent)]"><UserPlus className="h-7 w-7" /></div>
            <p className="section-kicker mt-7">Create account</p>
            <h1 className="mt-3 text-4xl font-black tracking-[-.045em]">{pagesContent.auth.signup.formTitle}</h1>
            <EditableLocalSignupForm />
            <p className="mt-6 border-t border-slate-900/10 pt-5 text-sm text-[var(--slot4-muted-text)]">Already have an account? <Link href="/login" className="font-black text-[var(--slot4-coral)] underline-offset-4 hover:underline">{pagesContent.auth.signup.loginCta}</Link></p>
          </div>
          <div className="hero-reveal overflow-hidden rounded-lg bg-[#242326] text-white shadow-[0_24px_80px_rgba(20,34,53,.16)]">
            <div className="p-8 sm:p-10">
              <p className="section-kicker">{pagesContent.auth.signup.badge}</p>
              <h2 className="mt-5 max-w-xl text-5xl font-black leading-[.98] tracking-[-.055em] sm:text-6xl">{pagesContent.auth.signup.title}</h2>
              <p className="mt-6 max-w-lg text-base leading-8 text-white/70">{pagesContent.auth.signup.description}</p>
            </div>
            <div className="grid grid-cols-2">
              <div className="bg-[var(--slot4-green)] p-6 text-center">
                <FileText className="mx-auto h-8 w-8" />
                <p className="mt-4 text-sm font-black uppercase tracking-[.12em]">Draft releases</p>
              </div>
              <div className="bg-[var(--slot4-accent)] p-6 text-center">
                <Send className="mx-auto h-8 w-8" />
                <p className="mt-4 text-sm font-black uppercase tracking-[.12em]">Submit updates</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
