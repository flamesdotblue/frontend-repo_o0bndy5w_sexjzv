import { motion } from 'framer-motion';
import { Brain, Sparkles, ShieldCheck } from 'lucide-react';

export default function Hero3D() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-32 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-indigo-600/30 blur-3xl" />
        <div className="absolute -bottom-32 left-10 h-[300px] w-[300px] rounded-full bg-sky-500/20 blur-3xl" />
        <div className="absolute -bottom-20 right-10 h-[400px] w-[400px] rounded-full bg-violet-600/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:py-24 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] tracking-widest text-indigo-200">
              <Sparkles size={14} /> Next-Gen Legal Learning
            </div>
            <h1 className="mt-4 font-semibold text-4xl leading-tight text-white sm:text-5xl md:text-6xl">
              LexMate AI
              <span className="block bg-gradient-to-r from-indigo-300 via-sky-200 to-violet-300 bg-clip-text text-transparent">The Global Legal Learning Companion</span>
            </h1>
            <p className="mt-4 max-w-xl text-slate-300">Understand, revise, and apply legal concepts with citation-backed, jurisdiction-aware explanations. Built for zero tolerance for inaccuracy and a delightful learning experience.</p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#learn" className="rounded-xl bg-indigo-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-indigo-500/30 hover:bg-indigo-600">Start Learning</a>
              <a href="#cases" className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-slate-200 hover:bg-white/10">Explore Cases</a>
              <div className="inline-flex items-center gap-2 rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-3 py-2 text-emerald-200">
                <ShieldCheck size={16} /> Dual Verification Layer
              </div>
            </div>

            <dl className="mt-10 grid grid-cols-3 gap-6 text-center">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-2xl font-semibold text-white">150+</div>
                <div className="text-xs text-slate-400">Jurisdictions</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-2xl font-semibold text-white">0%</div>
                <div className="text-xs text-slate-400">Hallucination Policy</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-2xl font-semibold text-white">24/7</div>
                <div className="text-xs text-slate-400">AI Tutor</div>
              </div>
            </dl>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1 }} className="relative">
            <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-6 shadow-2xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-indigo-500/20 text-indigo-300">
                    <Brain />
                  </div>
                  <div>
                    <p className="text-white font-medium">AI Tutor Panel</p>
                    <p className="text-xs text-slate-400">Reasoning · Verification · Research</p>
                  </div>
                </div>
                <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2 py-1 text-[10px] text-emerald-200">Verified</span>
              </div>

              <div className="mt-6 space-y-3">
                <ChatBubble role="Student" text="Explain consideration in contract law with examples from India and the UK." />
                <ChatBubble role="LexMate" text="Consideration is the price for which a promise is bought. In India (Sec. 2(d), ICA 1872), an act, abstinence, or promise by the promisee or any other person is valid consideration. In the UK, consideration must move from the promisee (Dunlop v Selfridge) and be sufficient though not necessarily adequate (Thomas v Thomas)." accent="indigo"/>
                <Verifier />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ChatBubble({ role, text, accent = "slate" }) {
  const isAI = role === 'LexMate';
  return (
    <div className={`rounded-2xl border ${isAI ? 'border-indigo-400/20 bg-indigo-400/10' : 'border-white/10 bg-white/5'} p-4` }>
      <div className="flex items-center gap-2 text-xs text-slate-400">
        <span className={`h-2 w-2 rounded-full ${isAI ? 'bg-indigo-400' : 'bg-slate-400'}`} />
        {role}
      </div>
      <p className="mt-2 text-sm leading-relaxed text-slate-200">{text}</p>
    </div>
  );
}

function Verifier() {
  return (
    <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-4">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-emerald-200">Dual Verification</p>
        <span className="text-[10px] text-emerald-300">Cross-checked</span>
      </div>
      <ul className="mt-3 grid gap-2 text-xs text-emerald-100">
        <li>• Indian Contract Act, 1872, s 2(d) — Indian Kanoon</li>
        <li>• Dunlop Pneumatic Tyre Co Ltd v Selfridge & Co Ltd [1915] AC 847 — BAILII</li>
        <li>• Thomas v Thomas (1842) 2 QB 851 — BAILII</li>
      </ul>
    </div>
  );
}
