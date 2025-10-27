import HeaderNav from './components/HeaderNav';
import Hero3D from './components/Hero3D';
import LearningCompanion from './components/LearningCompanion';
import CaseExplorer from './components/CaseExplorer';
import { Star, Trophy, Clock, Notebook } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(1250px_600px_at_50%_-10%,rgba(99,102,241,0.25),rgba(2,6,23,1))] text-slate-200">
      <HeaderNav />
      <main>
        <Hero3D />
        <LearningCompanion />
        <CaseExplorer />

        <section id="pricing" className="relative">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-semibold text-white">Choose your plan</h2>
              <p className="mt-2 text-sm text-slate-400">Start free, upgrade anytime for advanced tutoring, research, and exports.</p>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">Free</h3>
                  <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px]">Starter</span>
                </div>
                <p className="mt-1 text-sm text-slate-400">Perfect to explore LexMate AI</p>
                <div className="mt-4 text-3xl font-semibold text-white">$0</div>
                <ul className="mt-4 space-y-2 text-sm">
                  <li className="flex items-start gap-2"><Star className="mt-0.5 h-4 w-4 text-indigo-300"/> Limited daily queries</li>
                  <li className="flex items-start gap-2"><Star className="mt-0.5 h-4 w-4 text-indigo-300"/> Basic study tools</li>
                  <li className="flex items-start gap-2"><Star className="mt-0.5 h-4 w-4 text-indigo-300"/> Case summaries preview</li>
                </ul>
                <button className="mt-6 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white hover:bg-white/10">Get started</button>
              </div>

              <div className="relative rounded-2xl border border-indigo-400/30 bg-gradient-to-br from-indigo-600/20 to-violet-600/10 p-6">
                <div className="absolute -top-3 right-6 rounded-full bg-indigo-500 px-2 py-1 text-[10px] font-medium text-white shadow-lg shadow-indigo-500/30">Popular</div>
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">Pro</h3>
                  <span className="rounded-full border border-indigo-400/30 bg-indigo-400/10 px-2 py-1 text-[10px] text-indigo-200">For serious learners</span>
                </div>
                <p className="mt-1 text-sm text-slate-300">Unlimited access, advanced AI tutor, real-time research, export tools.</p>
                <div className="mt-4 text-3xl font-semibold text-white">$14<span className="text-base text-slate-300">/mo</span></div>
                <ul className="mt-4 space-y-2 text-sm">
                  <li className="flex items-start gap-2"><Trophy className="mt-0.5 h-4 w-4 text-indigo-200"/> Unlimited queries & comparisons</li>
                  <li className="flex items-start gap-2"><Trophy className="mt-0.5 h-4 w-4 text-indigo-200"/> Real-time research with citations</li>
                  <li className="flex items-start gap-2"><Trophy className="mt-0.5 h-4 w-4 text-indigo-200"/> Case export (PDF / notes)</li>
                </ul>
                <button className="mt-6 w-full rounded-xl bg-indigo-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-indigo-500/30 hover:bg-indigo-600">Upgrade</button>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="relative">
          <div className="mx-auto max-w-7xl px-4 pb-24 pt-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-indigo-300"/>
                  <h3 className="text-white font-semibold">Progress & Streaks</h3>
                </div>
                <p className="mt-2 text-sm text-slate-400">Track your learning time, earn badges, and maintain study streaks with gentle reminders.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-center gap-3">
                  <Notebook className="h-5 w-5 text-indigo-300"/>
                  <h3 className="text-white font-semibold">Notes & Flashcards</h3>
                </div>
                <p className="mt-2 text-sm text-slate-400">Save key points, auto-generate flashcards, and review five‑minute summaries per topic.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-center gap-3">
                  <Star className="h-5 w-5 text-indigo-300"/>
                  <h3 className="text-white font-semibold">Mock Judge & Viva</h3>
                </div>
                <p className="mt-2 text-sm text-slate-400">Practice oral arguments, receive analytical feedback, and strengthen legal reasoning.</p>
              </div>
            </div>

            <p className="mt-10 text-center text-xs text-slate-500">LexMate AI emphasizes accuracy and responsible legal learning. Always confirm local legal requirements for practice and procedure.</p>
          </div>
        </section>
      </main>
    </div>
  );
}
