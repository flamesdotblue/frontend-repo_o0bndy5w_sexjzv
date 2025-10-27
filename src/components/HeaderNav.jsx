import { useState } from 'react';
import { Scale, Globe, User, Menu, X } from 'lucide-react';

export default function HeaderNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50"> 
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-indigo-500 text-white shadow-lg shadow-indigo-500/30">
              <Scale size={20} />
            </div>
            <div className="leading-tight">
              <p className="text-lg font-semibold text-white">LexMate AI</p>
              <p className="text-[11px] uppercase tracking-widest text-indigo-300">Legal Learning Companion</p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a className="hover:text-white transition" href="#learn">Learning</a>
            <a className="hover:text-white transition" href="#cases">Case Explorer</a>
            <a className="hover:text-white transition" href="#pricing">Pricing</a>
            <a className="hover:text-white transition" href="#about">About</a>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <button className="inline-flex items-center gap-2 rounded-xl border border-indigo-400/30 px-3 py-1.5 text-sm text-indigo-200 hover:bg-indigo-400/10">
              <Globe size={16} /> Global
            </button>
            <button className="inline-flex items-center gap-2 rounded-xl bg-indigo-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-indigo-500/30 hover:bg-indigo-600">
              <User size={16} /> Sign In
            </button>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden rounded-lg p-2 text-slate-200 hover:bg-white/5">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-white/10 py-4">
            <div className="flex flex-col gap-3 text-slate-200">
              <a href="#learn" className="rounded-lg px-2 py-2 hover:bg-white/5">Learning</a>
              <a href="#cases" className="rounded-lg px-2 py-2 hover:bg-white/5">Case Explorer</a>
              <a href="#pricing" className="rounded-lg px-2 py-2 hover:bg-white/5">Pricing</a>
              <a href="#about" className="rounded-lg px-2 py-2 hover:bg-white/5">About</a>
              <div className="flex gap-2 pt-2">
                <button className="flex-1 rounded-xl border border-indigo-400/30 px-3 py-2 text-sm text-indigo-200">Global</button>
                <button className="flex-1 rounded-xl bg-indigo-500 px-3 py-2 text-sm font-medium text-white">Sign In</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
