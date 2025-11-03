import { useMemo } from 'react';
import { TrendingUp, HelpCircle } from 'lucide-react';
import { motion } from 'framer-motion';

// Simple bonding-curve-like generator: monotonically increasing with small waves
function useBondingCurvePoints(width = 800, height = 260, points = 40) {
  return useMemo(() => {
    const xs = Array.from({ length: points }, (_, i) => i / (points - 1));
    const base = xs.map((x) => {
      // Exponential-ish curve with subtle sinusoidal variation
      const growth = Math.pow(1.08, x * 10) - 1; // smooth growth
      const wave = 0.06 * Math.sin(x * Math.PI * 3);
      return Math.max(0, growth + wave);
    });
    // Normalize to 0..1
    const min = Math.min(...base);
    const max = Math.max(...base);
    const norm = base.map((v) => (v - min) / (max - min + 1e-9));
    // Convert to SVG coords
    const pts = norm.map((yNorm, i) => {
      const x = xs[i] * (width - 40) + 20; // padding
      const y = height - (yNorm * (height - 40) + 20);
      return [x, y];
    });
    // Build path string
    const d = pts.map(([x, y], i) => (i === 0 ? `M ${x},${y}` : `L ${x},${y}`)).join(' ');
    return { d, pts };
  }, [width, height, points]);
}

export default function PriceChart() {
  const w = 860;
  const h = 300;
  const { d, pts } = useBondingCurvePoints(w, h, 48);

  const latest = pts[pts.length - 1];

  return (
    <section id="price" className="py-16 sm:py-20 bg-[#141827]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-10 items-center">
          <div className="lg:col-span-3 rounded-2xl border border-white/10 bg-[#0f1322]/70 p-6 backdrop-blur">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-white">
                <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-fuchsia-400 via-purple-400 to-indigo-400 flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold leading-tight">RUSH Price — Live</h3>
                  <p className="text-xs text-violet-200/80">Bonding curve driven growth</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-emerald-300 text-sm">Increasing trend</div>
                <div className="text-violet-200/80 text-xs">Auto-updated on buys/sells</div>
              </div>
            </div>

            <div className="mt-4 relative">
              <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} className="w-full">
                <defs>
                  <linearGradient id="rushLine" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#818CF8" />
                    <stop offset="50%" stopColor="#A78BFA" />
                    <stop offset="100%" stopColor="#F472B6" />
                  </linearGradient>
                  <linearGradient id="rushFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#A78BFA66" />
                    <stop offset="100%" stopColor="#A78BFA00" />
                  </linearGradient>
                  <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Area fill */}
                <motion.path
                  d={`${d} L ${w - 20},${h - 20} L 20,${h - 20} Z`}
                  fill="url(#rushFill)"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 1.6, ease: 'easeInOut' }}
                />

                {/* Main line */}
                <motion.path
                  d={d}
                  stroke="url(#rushLine)"
                  strokeWidth={3}
                  fill="none"
                  filter="url(#glow)"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 1.6, ease: 'easeInOut' }}
                />

                {/* Moving pulse at the end */}
                {latest && (
                  <motion.circle
                    cx={latest[0]}
                    cy={latest[1]}
                    r={6}
                    fill="#ffffff"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ delay: 1.2, type: 'spring', stiffness: 200 }}
                  />
                )}
              </svg>

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0f1322] via-transparent to-transparent" />
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-violet-200/80">
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-6 rounded bg-gradient-to-r from-indigo-400 via-purple-400 to-fuchsia-400" /> Price trend
              </span>
              <span>1% fee on buys</span>
              <span>3% fee on sells</span>
              <span>Auto price discovery via bonding curve</span>
            </div>
          </div>

          <motion.div
            className="lg:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-start gap-3">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-indigo-400 via-purple-400 to-fuchsia-400 flex items-center justify-center shrink-0">
                <HelpCircle className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="text-white font-semibold">How the bonding curve works</h4>
                <p className="mt-2 text-sm text-violet-100/85">
                  The RUSH token price increases with each net buy and softens with net sells. The curve is governed by a transparent formula, so price discovery is automatic
                  and continuous — no order books required. This creates a naturally growing price over time as adoption increases.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-violet-100/90">
                  <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-400" /> Buys move price up along the curve; sells move it down slightly.</li>
                  <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-purple-400" /> 1% buy fee and 3% sell fee support sustainability and rewards.</li>
                  <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-fuchsia-400" /> Stake your RUSH to earn hourly distributions on top of growth.</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 text-center">
              {[{ label: 'Current Price', value: '$0.142' }, { label: '24h Change', value: '+6.2%' }].map((m) => (
                <motion.div
                  key={m.label}
                  className="rounded-xl border border-white/10 bg-[#0b0f1a]/70 p-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="text-xs text-violet-200/80">{m.label}</div>
                  <div className="mt-1 text-lg font-semibold text-white">{m.value}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
