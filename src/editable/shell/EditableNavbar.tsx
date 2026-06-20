'use client'

import { useState } from 'react'
import Link from 'next/link'
import { LogOut, Menu, Search, UserRound, X } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableNavbar() {
  const [open, setOpen] = useState(false)
  const { session, logout } = useEditableLocalAuthSession()

  return (
    <header className="sticky top-0 z-50 border-b border-slate-900/10 bg-white/92 text-[var(--slot4-page-text)] shadow-[0_8px_30px_rgba(20,34,53,.05)] backdrop-blur sticky-nav">
      <div className="media-container flex min-h-[82px] items-center justify-between gap-5">
        <div className="flex items-center gap-4">
          <button type="button" onClick={() => setOpen((value) => !value)} className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-900/15 lg:hidden" aria-label="Toggle navigation">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          <Link href="/" className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-[conic-gradient(from_20deg,var(--slot4-green),#bfe88c,var(--slot4-accent),#6fd8ef,var(--slot4-green))] text-sm font-black text-white shadow-[0_10px_30px_rgba(24,188,226,.24)]">
              <img src="/favicon.ico" alt="Pressyon" className="h-8 w-8" />
            </span>
            <span className="max-w-[46vw] text-xl font-black leading-[.95] tracking-[-.04em] sm:text-2xl">{SITE_CONFIG.name}</span>
          </Link>
        </div>

        <nav className="hidden items-center gap-8 text-xs font-black uppercase tracking-[.12em] lg:flex">
          {[
            { label: 'Home', href: '/' },
            { label: 'Media Distribution', href: SITE_CONFIG.taskViews.mediaDistribution || '/media-distribution' },
            { label: 'Search', href: '/search' },
            { label: 'About', href: '/about' },
            { label: 'Contact', href: '/contact' },
          ].map((item) => (
            <Link key={item.href} href={item.href} className="group relative py-2">
              {item.label}
              <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-[var(--slot4-coral)] transition group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-3">
          <form action="/search" className="hidden items-center rounded-full border border-slate-900/10 bg-slate-50 px-3 lg:flex">
            <Search className="h-4 w-4 text-slate-400" />
            <input name="q" type="search" placeholder="Search media" className="h-10 w-36 bg-transparent px-2 text-xs font-bold outline-none placeholder:text-slate-400" />
          </form>
          {session ? (
            <div className="hidden items-center gap-2 sm:flex">
              <Link href="/create" className="rounded-full bg-[var(--slot4-accent)] px-4 py-2.5 text-[10px] font-black uppercase tracking-[.14em] text-white">Create</Link>
              <span className="inline-flex max-w-36 items-center gap-2 truncate rounded-full bg-[#eef8e8] px-3 py-2 text-xs font-black"><UserRound className="h-4 w-4" /> {session.name}</span>
              <button type="button" onClick={logout} className="inline-flex items-center gap-1 rounded-full border border-slate-900/12 px-3 py-2 text-xs font-black"><LogOut className="h-4 w-4" /> Logout</button>
            </div>
          ) : (
            <div className="hidden items-center gap-2 sm:flex">
              <Link href="/login" className="rounded-full border border-slate-900/12 px-4 py-2.5 text-xs font-black uppercase tracking-[.12em]">Login</Link>
              <Link href="/signup" className="rounded-full bg-[var(--slot4-coral)] px-4 py-2.5 text-xs font-black uppercase tracking-[.12em] text-white">Sign up</Link>
            </div>
          )}
        </div>
      </div>

      {open ? (
        <div className="border-t border-slate-900/10 bg-white px-4 py-4 lg:hidden">
          <div className="grid gap-2">
            {[{ label: 'Home', href: '/' }, { label: 'Media Distribution', href: SITE_CONFIG.taskViews.mediaDistribution || '/media-distribution' }, { label: 'Search', href: '/search' }, { label: 'About', href: '/about' }, { label: 'Contact', href: '/contact' }, ...(session ? [{ label: `Signed in: ${session.name}`, href: '/create' }, { label: 'Create', href: '/create' }] : [{ label: 'Login', href: '/login' }, { label: 'Sign up', href: '/signup' }])].map((item) => (
              <Link key={`${item.label}-${item.href}`} href={item.href} onClick={() => setOpen(false)} className="rounded-2xl bg-[#f6fbf2] px-4 py-3 text-sm font-black uppercase tracking-[.1em]">{item.label}</Link>
            ))}
            {session ? <button type="button" onClick={() => { logout(); setOpen(false) }} className="rounded-2xl bg-[var(--slot4-coral)] px-4 py-3 text-left text-sm font-black uppercase tracking-[.1em] text-white">Logout</button> : null}
          </div>
        </div>
      ) : null}
    </header>
  )
}
