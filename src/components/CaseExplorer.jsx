import { useState } from 'react';
import { Search, Library, Landmark, Link as LinkIcon } from 'lucide-react';

const jurisdictions = ['Global', 'India', 'Pakistan', 'United Kingdom', 'United States', 'Canada', 'European Union', 'Australia'];
const topics = ['Contract', 'Constitutional', 'Criminal', 'Tort', 'Administrative', 'Corporate'];

const sampleResults = [
  {
    title: 'Dunlop Pneumatic Tyre Co Ltd v Selfridge & Co Ltd [1915] AC 847',
    jurisdiction: 'United Kingdom',
    topic: 'Contract',
    facts: 'Manufacturer sought to enforce resale price agreement via retailer; lack of privity alleged.',
    issues: 'Whether consideration/privity allowed enforcement by a non-party.',
    judgment: 'House of Lords held that only a party providing consideration can sue; no privity, claim failed.',
    ratio: 'Consideration must move from the promisee; privity doctrine bars third-party enforcement.',
    source: 'https://www.bailii.org/uk/cases/UKHL/1915/1.html',
  },
  {
    title: 'Foakes v Beer (1884) 9 App Cas 605',
    jurisdiction: 'United Kingdom',
    topic: 'Contract',
    facts: 'Debtor paid part of a judgment debt; creditor promised no further action.',
    issues: 'Whether part payment can satisfy whole debt without fresh consideration.',
    judgment: 'Part payment does not discharge remaining debt absent consideration.',
    ratio: 'No consideration for promise to accept less; later nuanced by practical benefit cases.',
    source: 'https://www.bailii.org/uk/cases/UKHL/1884/1.html',
  },
  {
    title: 'Central London Property Trust Ltd v High Trees House Ltd [1947] KB 130',
    jurisdiction: 'United Kingdom',
    topic: 'Contract',
    facts: 'Landlord reduced rent during wartime; later sought full rent for the same period.',
    issues: 'Effect of promissory estoppel absent consideration.',
    judgment: 'Promise intended to be binding and relied upon can suspend rights for the period relied on.',
    ratio: 'Promissory estoppel as a shield preventing inequitable enforcement.',
    source: 'https://www.bailii.org/ew/cases/EWHC/KBD/1947/1.html',
  },
];

export default function CaseExplorer() {
  const [q, setQ] = useState('');
  const [j, setJ] = useState('Global');
  const [t, setT] = useState('Contract');

  const filtered = sampleResults.filter((r) => {
    const matchJ = j === 'Global' || r.jurisdiction === j;
    const matchT = r.topic === t;
    const matchQ = !q || r.title.toLowerCase().includes(q.toLowerCase());
    return matchJ && matchT && matchQ;
  });

  return (
    <section id="cases" className="relative">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-indigo-500/20 text-indigo-300">
            <Library />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white sm:text-2xl">Case Explorer & Research</h2>
            <p className="text-sm text-slate-400">Search by jurisdiction, topic, or case name. Get concise, verified summaries with source links.</p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-4">
          <div className="sm:col-span-2">
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search cases (e.g., consideration)" className="w-full rounded-xl border border-white/10 bg-white/5 py-2 pl-9 pr-3 text-sm text-slate-200 placeholder-slate-400 focus:outline-none" />
            </div>
          </div>
          <div>
            <div className="relative">
              <Landmark className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
              <select value={j} onChange={(e) => setJ(e.target.value)} className="w-full appearance-none rounded-xl border border-white/10 bg-white/5 py-2 pl-9 pr-8 text-sm text-slate-200 focus:outline-none">
                {jurisdictions.map((x) => <option key={x}>{x}</option>)}
              </select>
            </div>
          </div>
          <div>
            <div className="relative">
              <Landmark className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 rotate-180 text-slate-400" />
              <select value={t} onChange={(e) => setT(e.target.value)} className="w-full appearance-none rounded-xl border border-white/10 bg-white/5 py-2 pl-9 pr-8 text-sm text-slate-200 focus:outline-none">
                {topics.map((x) => <option key={x}>{x}</option>)}
              </select>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {filtered.map((r) => (
            <article key={r.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-base font-semibold text-white">{r.title}</h3>
              <div className="mt-1 text-xs text-slate-400">{r.jurisdiction} · {r.topic}</div>
              <dl className="mt-3 space-y-2 text-sm">
                <div>
                  <dt className="text-slate-300">Facts</dt>
                  <dd className="text-slate-400">{r.facts}</dd>
                </div>
                <div>
                  <dt className="text-slate-300">Issues</dt>
                  <dd className="text-slate-400">{r.issues}</dd>
                </div>
                <div>
                  <dt className="text-slate-300">Judgment</dt>
                  <dd className="text-slate-400">{r.judgment}</dd>
                </div>
                <div>
                  <dt className="text-slate-300">Ratio decidendi</dt>
                  <dd className="text-slate-400">{r.ratio}</dd>
                </div>
              </dl>
              <a href={r.source} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-2 text-sm text-indigo-300 hover:text-indigo-200">
                <LinkIcon size={16}/> Original source
              </a>
            </article>
          ))}
          {filtered.length === 0 && (
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-slate-300">No results. Try another query or topic.</div>
          )}
        </div>
      </div>
    </section>
  );
}
