import { useState } from 'react';
import { BookOpen, CheckCircle2, Globe, Layers } from 'lucide-react';

const levels = [
  { key: 'beginner', label: 'Beginner' },
  { key: 'intermediate', label: 'Intermediate' },
  { key: 'expert', label: 'Expert' },
];

const topics = [
  { key: 'consideration', label: 'Consideration (Contract Law)' },
  { key: 'mensrea', label: 'Mens Rea (Criminal Law)' },
  { key: 'judicialreview', label: 'Judicial Review (Administrative Law)' },
];

const jurisdictions = [
  'India',
  'United Kingdom',
  'United States',
  'Pakistan',
  'Canada',
  'European Union',
  'Australia',
];

export default function LearningCompanion() {
  const [level, setLevel] = useState('beginner');
  const [topic, setTopic] = useState('consideration');
  const [jurisdiction, setJurisdiction] = useState('India');

  return (
    <section id="learn" className="relative">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-indigo-500/20 text-indigo-300">
              <BookOpen />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white sm:text-2xl">Learning Companion Mode</h2>
              <p className="text-sm text-slate-400">Three depth levels with plain language, examples, and global context.</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative">
              <Globe className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
              <select value={jurisdiction} onChange={(e) => setJurisdiction(e.target.value)} className="appearance-none rounded-xl border border-white/10 bg-white/5 py-2 pl-9 pr-8 text-sm text-slate-200 focus:outline-none">
                {jurisdictions.map((j) => (
                  <option key={j} value={j}>{j}</option>
                ))}
              </select>
            </div>
            <div className="relative">
              <Layers className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
              <select value={topic} onChange={(e) => setTopic(e.target.value)} className="appearance-none rounded-xl border border-white/10 bg-white/5 py-2 pl-9 pr-8 text-sm text-slate-200 focus:outline-none">
                {topics.map((t) => (
                  <option key={t.key} value={t.key}>{t.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-2 lg:col-span-2">
            <div className="flex gap-2 rounded-xl bg-slate-900/40 p-1">
              {levels.map((l) => (
                <button key={l.key} onClick={() => setLevel(l.key)} className={`flex-1 rounded-lg px-4 py-2 text-sm ${level === l.key ? 'bg-indigo-500 text-white' : 'text-slate-300 hover:bg-white/5'}`}>
                  {l.label}
                </button>
              ))}
            </div>

            <div className="mt-4 rounded-xl border border-white/10 bg-slate-900/40 p-5">
              <Lesson topic={topic} level={level} jurisdiction={jurisdiction} />
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-4">
              <p className="text-sm font-medium text-emerald-200">Dual Verification Layer</p>
              <ul className="mt-2 space-y-1 text-xs text-emerald-100">
                <li>• Cross-checks with authoritative databases</li>
                <li>• Citation-backed responses</li>
                <li>• User flagging for quality control</li>
              </ul>
              <button className="mt-3 w-full rounded-lg border border-emerald-300/30 px-3 py-2 text-xs text-emerald-100 hover:bg-emerald-400/10">How verification works</button>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm font-medium text-slate-100">Quick Revision (5 min)</p>
              <ul className="mt-2 space-y-2 text-xs text-slate-300">
                <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-indigo-300" /> Flash summary per level</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-indigo-300" /> Key ratios and illustrations</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-indigo-300" /> Jurisdictional nuances</li>
              </ul>
              <button className="mt-3 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-200 hover:bg-white/10">Generate summary</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Lesson({ topic, level, jurisdiction }) {
  const titleMap = {
    consideration: 'Consideration in Contract Law',
    mensrea: 'Mens Rea in Criminal Law',
    judicialreview: 'Judicial Review in Administrative Law',
  };

  const content = getLessonContent(topic, level, jurisdiction);

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3 className="text-lg font-semibold text-white">{titleMap[topic]}</h3>
        <span className="text-xs text-slate-400">Jurisdiction: {jurisdiction}</span>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-slate-300">{content.explainer}</p>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {content.examples.map((ex, i) => (
          <div key={i} className="rounded-lg border border-white/10 bg-white/5 p-3">
            <p className="text-xs font-medium text-indigo-200">Example {i + 1}</p>
            <p className="mt-1 text-sm text-slate-200">{ex}</p>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <p className="text-xs font-medium text-slate-300">Illustrative authorities</p>
        <ul className="mt-2 grid gap-2 text-xs text-slate-400 sm:grid-cols-2">
          {content.citations.map((c, i) => (
            <li key={i} className="rounded-lg border border-white/10 bg-slate-900/40 p-2">• {c}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function getLessonContent(topic, level, jurisdiction) {
  if (topic === 'consideration') {
    if (level === 'beginner') {
      return {
        explainer: 'Consideration is the value exchanged for a promise. It can be an act, forbearance, or promise. Different systems have nuances, but the core idea is mutual exchange.',
        examples: [
          'A promises to deliver notes; B pays a modest fee. The fee is consideration.',
          'Forgoing a legal right at someone’s request can be valid consideration in many jurisdictions.',
        ],
        citations: [
          'India: Indian Contract Act, 1872, s 2(d)',
          'UK: Thomas v Thomas (1842) 2 QB 851',
          'UK: Dunlop v Selfridge [1915] AC 847',
        ],
      };
    }
    if (level === 'intermediate') {
      return {
        explainer: 'In India, consideration may move from the promisee or any other person, enabling “stranger to consideration” to sue; in English law, consideration must move from the promisee. Sufficiency, not adequacy, is tested, and past consideration rules vary by jurisdiction.',
        examples: [
          'Promise supported by third-party consideration may be enforceable in India (s 2(d) ICA).',
          'Practical benefit can amount to consideration in UK for contract variations (Williams v Roffey).',
        ],
        citations: [
          'India: Chinnaya v Ramaya (1882) ILR 4 Mad 137',
          'UK: Williams v Roffey Bros [1991] 1 QB 1',
          'US: Restatement (Second) of Contracts §71',
        ],
      };
    }
    return {
      explainer: 'Expert nuances include past consideration (generally invalid in UK/US, with exceptions like requests with implied promise—Lampleigh v Brathwait), promissory estoppel as a shield, and statutory reforms (e.g., consideration’s role in seal/form requirements). Jurisdictional statutes and case law govern exceptions and public policy constraints.',
      examples: [
        'Part payment of debt: Foakes v Beer restricts satisfaction without fresh consideration; some jurisdictions modify by statute.',
        'Promissory estoppel may suspend rights despite lack of consideration (Central London Property v High Trees).',
      ],
      citations: [
        'UK: Foakes v Beer (1884) 9 App Cas 605',
        'UK: Central London Property Trust v High Trees [1947] KB 130',
        'US: UCC §2-209 (modification without consideration for goods)',
      ],
    };
  }

  if (topic === 'mensrea') {
    if (level === 'beginner') {
      return {
        explainer: 'Mens rea means the guilty mind—intention, knowledge, recklessness, or negligence as required by the offense.',
        examples: [
          'Intending to permanently deprive in theft statutes.',
          'Reckless disregard for a known risk can satisfy mens rea in many crimes.',
        ],
        citations: ['UK: R v Cunningham [1957] 2 QB 396', 'US: Model Penal Code §2.02'],
      };
    }
    if (level === 'intermediate') {
      return {
        explainer: 'Jurisdictions categorize fault elements differently; the MPC provides a hierarchy, while common law cases define subjective vs objective recklessness.',
        examples: ['Knowing versus willful blindness', 'Negligence standard in statutory offenses'],
        citations: ['Canada: R v Sansregret [1985] 1 SCR 570', 'India: IPC general exceptions context'],
      };
    }
    return {
      explainer: 'Advanced debates include strict liability offenses, corporate mens rea, and attribution models. Comparative analysis highlights divergence between common law and civil law approaches.',
      examples: ['Strict liability in regulatory offenses', 'Corporate identification doctrine vs aggregation'],
      citations: ['UK: Tesco Supermarkets v Nattrass [1972] AC 153', 'EU: Corporate liability directives (contextual)'],
    };
  }

  // judicial review
  if (level === 'beginner') {
    return {
      explainer: 'Judicial review allows courts to supervise the legality of administrative action, often focusing on legality, procedural fairness, and reasonableness.',
      examples: ['Right to be heard before adverse decision', 'Decision-maker must act within powers'],
      citations: ['UK: Council of Civil Service Unions v Minister [1985] AC 374', 'India: Article 226, Constitution'],
    };
  }
  if (level === 'intermediate') {
    return {
      explainer: 'Standards such as Wednesbury unreasonableness and proportionality apply depending on the jurisdiction; constitutional structure defines the intensity of review.',
      examples: ['Proportionality in EU/ECHR contexts', 'Legitimate expectation in procedural fairness'],
      citations: ['UK: Associated Provincial Picture Houses v Wednesbury [1948] 1 KB 223', 'EU: Proportionality principle'],
    };
  }
  return {
    explainer: 'Expert level covers deference doctrines, ouster clauses, and comparative constitutional review, including basic structure in India and Chevron deference in the US.',
    examples: ['India: Basic structure doctrine', 'US: Chevron two-step (subject to evolving standards)'],
    citations: ['India: Kesavananda Bharati v State of Kerala (1973) 4 SCC 225', 'US: Chevron U.S.A., Inc. v NRDC, 467 U.S. 837 (1984)'],
  };
}
