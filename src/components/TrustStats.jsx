import { BarChart3, Shield, Globe, Zap } from 'lucide-react';

export default function TrustStats() {
  return (
    <section id="stats" className="py-16 sm:py-20 bg-gradient-to-b from-[#1E2235] to-[#141827]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block text-sm font-medium tracking-wider text-violet-300/80">TRUST & TRANSPARENCY</span>
            <h3 className="mt-2 text-3xl font-extrabold text-white">Real-time insights and secure integrations</h3>
            <p className="mt-3 text-violet-100/80">
              Built on BNB Smart Chain with secure wallet connections. Transparent fee structure and automated hourly distributions.
            </p>
            <dl className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <dt className="flex items-center gap-2 text-sm text-violet-100/80"><BarChart3 className="h-4 w-4" /> Live Price</dt>
                <dd className="mt-1 text-xl font-semibold text-white">Bonding curve</dd>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <dt className="flex items-center gap-2 text-sm text-violet-100/80"><Shield className="h-4 w-4" /> Fees</dt>
                <dd className="mt-1 text-xl font-semibold text-white">1% buy · 3% sell</dd>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <dt className="flex items-center gap-2 text-sm text-violet-100/80"><Globe className="h-4 w-4" /> Chain</dt>
                <dd className="mt-1 text-xl font-semibold text-white">BNB Smart Chain</dd>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <dt className="flex items-center gap-2 text-sm text-violet-100/80"><Zap className="h-4 w-4" /> Distributions</dt>
                <dd className="mt-1 text-xl font-semibold text-emerald-300">Hourly · 24/7</dd>
              </div>
            </dl>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h4 className="text-white font-semibold">Staking Tiers</h4>
            <div className="mt-4 grid sm:grid-cols-2 gap-4 text-sm">
              {[
                { name: 'Starter', range: '$100–$1k', daily: '1.0%', days: 299, total: '400%' },
                { name: 'Growth', range: '$1k–$5k', daily: '1.1%', days: 239, total: '262%' },
                { name: 'Premium', range: '$5k–$10k', daily: '1.2%', days: 179, total: '214%' },
                { name: 'Elite', range: '$10k–$100k', daily: '1.25%', days: 120, total: '150%' },
              ].map((t) => (
                <div key={t.name} className="rounded-xl border border-white/10 bg-[#0f1322]/60 p-4">
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
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-xl border border-white/10 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-fuchsia-500/20 p-4 text-white/90">
              Fixed-term pools with guaranteed hourly accruals. Sell RUSH anytime at market price.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
