import { BarChart3, Shield, Globe, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TrustStats() {
  return (
    <section id="stats" className="py-16 sm:py-20 bg-gradient-to-b from-[#1E2235] to-[#141827]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-sm font-medium tracking-wider text-violet-300/80">TRUST & TRANSPARENCY</span>
            <h3 className="mt-2 text-3xl font-extrabold text-white">Real-time insights and secure integrations</h3>
            <p className="mt-3 text-violet-100/80">
              Built on BNB Smart Chain with secure wallet connections. Transparent fee structure and automated hourly distributions.
            </p>
            <motion.dl
              className="mt-6 grid grid-cols-2 gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
            >
              {[
                { icon: BarChart3, label: 'Live Price', value: 'Bonding curve' },
                { icon: Shield, label: 'Fees', value: '1% buy · 3% sell' },
                { icon: Globe, label: 'Chain', value: 'BNB Smart Chain' },
                { icon: Zap, label: 'Distributions', value: 'Hourly · 24/7', accent: true },
              ].map((i) => (
                <motion.div
                  key={i.label}
                  className="rounded-xl border border-white/10 bg-white/5 p-4"
                  initial={{ opacity: 0, y: 10 }}
                  variants={{ visible: { opacity: 1, y: 0 } }}
                >
                  <dt className="flex items-center gap-2 text-sm text-violet-100/80">
                    <i.icon className="h-4 w-4" /> {i.label}
                  </dt>
                  <dd className={`mt-1 text-xl font-semibold ${i.accent ? 'text-emerald-300' : 'text-white'}`}>{i.value}</dd>
                </motion.div>
              ))}
            </motion.dl>
          </motion.div>
          <motion.div
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-white font-semibold">Staking Tiers</h4>
            <div className="mt-4 grid sm:grid-cols-2 gap-4 text-sm">
              {[
                { name: 'Starter', range: '$100–$1k', daily: '1.0%', days: 299, total: '400%' },
                { name: 'Growth', range: '$1k–$5k', daily: '1.1%', days: 239, total: '262%' },
                { name: 'Premium', range: '$5k–$10k', daily: '1.2%', days: 179, total: '214%' },
                { name: 'Elite', range: '$10k–$100k', daily: '1.25%', days: 120, total: '150%' },
              ].map((t) => (
                <motion.div
                  key={t.name}
                  className="rounded-xl border border-white/10 bg-[#0f1322]/60 p-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-white font-medium">{t.name}</div>
                      <div className="text-violet-200/80">{t.range}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-emerald-300 font-semibold">{t.daily} daily</div>
                      <div className="text-violet-200/80">{t.days} days • {t.total}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-4 rounded-xl border border-white/10 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-fuchsia-500/20 p-4 text-white/90">
              Fixed-term pools with guaranteed hourly accruals. Sell RUSH anytime at market price.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
