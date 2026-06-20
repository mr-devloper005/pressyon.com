'use client'

import Link from 'next/link'
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { globalContent } from '@/editable/content/global.content'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableFooter() {
  const year = new Date().getFullYear()
  const { session, logout } = useEditableLocalAuthSession()
  const mediaRoute = SITE_CONFIG.taskViews.mediaDistribution || '/media-distribution'

  return (
    <footer className="bg-[#242326] text-white">
      <div className="media-container py-14 lg:py-18">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_.75fr_.75fr_.8fr]">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-[conic-gradient(from_20deg,var(--slot4-green),#bfe88c,var(--slot4-accent),#6fd8ef,var(--slot4-green))] text-sm font-black">
                <img src="/favicon.png" alt="Pressyon" className="h-8 w-8" />
              </span>
              <span className="text-2xl font-black tracking-[-.04em]">{SITE_CONFIG.name}</span>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-7 text-white/68">
              {globalContent.footer?.description || 'Media distribution, public updates, campaign announcements, and press-ready stories in one focused platform.'}
            </p>
            <form action="/signup" className="mt-8 flex max-w-xl overflow-hidden rounded-full border border-white/15 bg-white/8">
              <input name="email" type="email" placeholder="Email for media updates" className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm outline-none placeholder:text-white/40" />
              <button className="bg-[var(--slot4-accent)] px-5 text-xs font-black uppercase tracking-[.14em]">Join</button>
            </form>
          </div>

          <div>
            <h3 className="border-b border-white/15 pb-3 text-[10px] font-black uppercase tracking-[.22em] text-white/55">Explore</h3>
            <div className="mt-4 grid gap-3">
              <Link href={mediaRoute} className="group inline-flex items-center justify-between text-sm font-black uppercase tracking-[.08em] hover:text-[var(--slot4-accent)]">Media Distribution<ArrowRight className="h-4 w-4" /></Link>
              <Link href="/search" className="group inline-flex items-center justify-between text-sm font-black uppercase tracking-[.08em] hover:text-[var(--slot4-accent)]">Search Archive<ArrowRight className="h-4 w-4" /></Link>
              <Link href="/create" className="group inline-flex items-center justify-between text-sm font-black uppercase tracking-[.08em] hover:text-[var(--slot4-accent)]">Create Post<ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>

          <div>
            <h3 className="border-b border-white/15 pb-3 text-[10px] font-black uppercase tracking-[.22em] text-white/55">Account</h3>
            <div className="mt-4 grid gap-3">
              <Link href="/about" className="text-sm font-black uppercase tracking-[.08em] hover:text-[var(--slot4-accent)]">About</Link>
              <Link href="/contact" className="text-sm font-black uppercase tracking-[.08em] hover:text-[var(--slot4-accent)]">Contact</Link>
              {session ? (
                <>
                  <span className="text-sm font-black uppercase tracking-[.08em] text-[var(--slot4-green)]">{session.name}</span>
                  <button onClick={logout} className="text-left text-sm font-black uppercase tracking-[.08em] hover:text-[var(--slot4-accent)]">Logout</button>
                </>
              ) : (
                <>
                  <Link href="/login" className="text-sm font-black uppercase tracking-[.08em] hover:text-[var(--slot4-accent)]">Login</Link>
                  <Link href="/signup" className="text-sm font-black uppercase tracking-[.08em] hover:text-[var(--slot4-accent)]">Sign Up</Link>
                </>
              )}
            </div>
          </div>

          <div>
            <h3 className="border-b border-white/15 pb-3 text-[10px] font-black uppercase tracking-[.22em] text-white/55">Contact Info</h3>
            <div className="mt-4 grid gap-3 text-sm leading-6 text-white/70">
              <span className="inline-flex gap-2"><MapPin className="mt-1 h-4 w-4 text-[var(--slot4-accent)]" /> Media desk, distribution operations</span>
             
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-[10px] font-black uppercase tracking-[.18em] text-white/45">
        (c) {year} {SITE_CONFIG.name}. Media distribution and public information.
      </div>
    </footer>
  )
}
