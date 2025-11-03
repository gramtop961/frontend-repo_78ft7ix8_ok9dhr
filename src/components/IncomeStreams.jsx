import { Users, LineChart, Shield, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const cards = [
  {
    title: 'Staking Pools',
    desc: '4 fixed-term tiers with HOURLY accruals and automated 24/7 operation.',
    icon: Clock,
    accent: 'from-indigo-400 to-purple-400',
    points: [
      'Tier 1: 1% daily · 299 days · 400% total',
      'Tier 2: 1.1% daily · 239 days · 262% total',
      'Tier 3: 1.2% daily · 179 days · 214% total',
      'Tier 4: 1.25% daily · 120 days · 150% total',
    ],
  },
  {
    title: 'RUSH Token',
    desc: 'Smart bonding curve ensures price grows with every buy. Buy/sell anytime.',
    icon: LineChart,
    accent: 'from-fuchsia-400 to-rose-400',
    points: [
      '1% fee on buys · 3% fee on sells',
      'Mathematical price discovery',
      'Potential 10x–100x upside',
    ],
  },
  {
    title: 'Referral Network',
    desc: '10-level deep system with instant bonuses on staking transactions.',
    icon: Users,
    accent: 'from-emerald-400 to-teal-400',
    points: [
      'Total 10%: 3% L1 · 2% L2 · 1% L3 + 7 more',
      'Requires at least one active pool',
      'Lifetime passive income',
    ],
  },
  {
    title: 'Trust & Security',
    desc: 'Transparent tracking, secure wallet integration, and clear fees.',
    icon: Shield,
    accent: 'from-amber-300 to-orange-400',
    points: [
      'Real-time transaction tracking',
      'BNB Smart Chain integration',
      'Professional trading team',
    ],
  },
];

export default function IncomeStreams() {
  return (
    <section id="features" className="relative py-16 sm:py-20 bg-[#1E2235]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-block text-sm font-medium tracking-wider text-violet-300/80">TRIPLE INCOME</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white">Three Powerful Income Streams</h2>
          <p className="mt-3 text-violet-100/80 max-w-2xl mx-auto">
            Earn from staking pools, RUSH token appreciation, and a 10-level referral network — all working together.
          </p>
        </div>

        <motion.div
          className="mt-10 grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
        >
          {cards.map((c) => (
            <motion.div
              key={c.title}
              className="rounded-2xl bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition group"
              initial={{ opacity: 0, y: 16 }}
              variants={{ visible: { opacity: 1, y: 0 } }}
              whileHover={{ y: -4 }}
            >
              <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${c.accent} flex items-center justify-center shadow`}> 
                <c.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{c.title}</h3>
              <p className="mt-2 text-sm text-violet-100/80">{c.desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-violet-100/90">
                {c.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
