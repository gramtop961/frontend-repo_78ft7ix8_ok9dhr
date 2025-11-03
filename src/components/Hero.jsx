import Spline from '@splinetool/react-spline';
import { Rocket, Link as LinkIcon } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative" aria-label="BNBRUSH hero">
      <div className="relative h-[78vh] md:h-[88vh] overflow-hidden">
        <Spline
          scene="https://prod.spline.design/44zrIZf-iQZhbQNQ/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.25),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-[#1E2235]/40 to-[#1E2235]" />
      </div>

      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 w-full grid md:grid-cols-12 gap-8">
          <motion.div
            className="md:col-span-7"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div className="inline-flex items-center gap-2 rounded-full px-3 py-1 bg-white/10 border border-white/15 text-xs text-violet-200 shadow-sm backdrop-blur-sm"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ delay: 0.1 }}
            >
              <Rocket className="h-3.5 w-3.5 text-indigo-300" />
              The Ultimate Triple-Income DeFi Ecosystem on BNB Chain
            </motion.div>
            <motion.h1
              className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-white"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ delay: 0.2 }}
            >
              Earn Hourly from Staking, Token Growth, and Referrals
            </motion.h1>
            <motion.p
              className="mt-4 max-w-2xl text-lg text-violet-100/90"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ delay: 0.3 }}
            >
              BNBRUSH combines intelligent staking pools, a smart bonding curve token, and a 10-level referral network to create sustainable, 24/7 automated income.
            </motion.p>
            <motion.div
              className="mt-6 flex flex-wrap items-center gap-3"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ delay: 0.4 }}
            >
              <a href="#get-started" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 text-white font-semibold shadow-lg hover:opacity-95 transition">
                Start Earning Today
              </a>
              <a href="#how-it-works" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-white/20 text-white/90 hover:bg-white/5 transition">
                <LinkIcon className="h-4 w-4" />
                Connect Wallet → Buy RUSH → Start Staking
              </a>
            </motion.div>
            <motion.dl
              className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
            >
              {[
                { label: 'RUSH Price', value: '$0.142' },
                { label: 'Total Staked', value: '$12.4M' },
                { label: 'Users', value: '84,219' },
                { label: 'Paid Out', value: '$6.8M', accent: true },
              ].map((m) => (
                <motion.div
                  key={m.label}
                  className="rounded-xl bg-white/5 border border-white/10 p-4 text-center"
                  initial={{ opacity: 0, y: 8 }}
                  variants={{ visible: { opacity: 1, y: 0 } }}
                >
                  <dt className="text-xs text-violet-200/80">{m.label}</dt>
                  <dd className={`mt-1 text-xl font-semibold ${m.accent ? 'text-emerald-300' : 'text-white'}`}>{m.value}</dd>
                </motion.div>
              ))}
            </motion.dl>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
