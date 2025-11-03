import { Wallet, Globe } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/5 bg-white/10 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-400 via-purple-400 to-fuchsia-400 shadow-md" />
          <div className="flex flex-col">
            <span className="text-white font-semibold tracking-wide">BNBRUSH</span>
            <span className="text-xs text-violet-200/80">Triple-Income DeFi</span>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#features" className="text-violet-100/80 hover:text-white transition">Features</a>
          <a href="#tiers" className="text-violet-100/80 hover:text-white transition">Tiers</a>
          <a href="#stats" className="text-violet-100/80 hover:text-white transition">Live Stats</a>
          <a href="#referrals" className="text-violet-100/80 hover:text-white transition">Referrals</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm text-white/90 hover:text-white transition">
            <Globe className="h-4 w-4" />
            EN
          </button>
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 text-white font-medium shadow hover:opacity-95 transition">
            <Wallet className="h-4 w-4" />
            Connect Wallet
          </button>
        </div>
      </div>
    </header>
  );
}
