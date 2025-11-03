import Navbar from './components/Navbar';
import Hero from './components/Hero';
import IncomeStreams from './components/IncomeStreams';
import PriceChart from './components/PriceChart';
import TrustStats from './components/TrustStats';

function App() {
  return (
    <div className="min-h-screen bg-[#1E2235] text-white font-inter">
      <Navbar />
      <main>
        <Hero />
        <PriceChart />
        <IncomeStreams />
        <TrustStats />
        <footer className="border-t border-white/10 bg-[#141827]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-violet-200/80">© {new Date().getFullYear()} BNBRUSH — The Ultimate Triple-Income DeFi Ecosystem</p>
            <div className="text-sm text-violet-200/80">
              Built for BNB Smart Chain • Secure wallet integration • Transparent fees
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
