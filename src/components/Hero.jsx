import Spline from '@splinetool/react-spline';
import { Rocket, Link as LinkIcon } from 'lucide-react';

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
          <div className="md:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 bg-white/10 border border-white/15 text-xs text-violet-200 shadow-sm backdrop-blur-sm">
              <Rocket className="h-3.5 w-3.5 text-indigo-300" />
              The Ultimate Triple-Income DeFi Ecosystem on BNB Chain
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-white">
              Earn Hourly from Staking, Token Growth, and Referrals
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-violet-100/90">
              BNBRUSH combines intelligent staking pools, a smart bonding curve token, and a 10-level referral network to create sustainable, 24/7 automated income.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#get-started" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 text-white font-semibold shadow-lg hover:opacity-95 transition">
                Start Earning Today
              </a>
              <a href="#how-it-works" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-white/20 text-white/90 hover:bg-white/5 transition">
                <LinkIcon className="h-4 w-4" />
                Connect Wallet → Buy RUSH → Start Staking
              </a>
            </div>
            <dl className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="rounded-xl bg-white/5 border border-white/10 p-4 text-center">
                <dt className="text-xs text-violet-200/80">RUSH Price</dt>
                <dd className="mt-1 text-xl font-semibold text-white">$0.142</dd>
              </div>
              <div className="rounded-xl bg-white/5 border border-white/10 p-4 text-center">
                <dt className="text-xs text-violet-200/80">Total Staked</dt>
                <dd className="mt-1 text-xl font-semibold text-white">$12.4M</dd>
              </div>
              <div className="rounded-xl bg-white/5 border border-white/10 p-4 text-center">
                <dt className="text-xs text-violet-200/80">Users</dt>
                <dd className="mt-1 text-xl font-semibold text-white">84,219</dd>
              </div>
              <div className="rounded-xl bg-white/5 border border-white/10 p-4 text-center">
                <dt className="text-xs text-violet-200/80">Paid Out</dt>
                <dd className="mt-1 text-xl font-semibold text-emerald-300">$6.8M</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
