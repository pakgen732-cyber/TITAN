import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, AlertTriangle } from 'lucide-react';

const LOGO = 'https://customer-assets.emergentagent.com/job_titan-setup/artifacts/t1a7gq9v_WhatsApp%20Image%202026-04-22%20at%2012.15.24%20AM.jpeg';

const RiskDisclosurePage = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#E0E0E0]">
      <nav className="sticky top-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-2xl border-b border-[#D4AF37]/10">
        <div className="max-w-5xl mx-auto px-4 md:px-8 h-16 md:h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={LOGO} alt="TITAN VENTURES" className="h-8 md:h-10" />
          </Link>
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-[#A0A0A0] hover:text-[#D4AF37]">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="flex items-center gap-3 mb-4">
          <AlertTriangle className="w-8 h-8 text-amber-400" />
          <h1 className="text-3xl md:text-4xl font-bold text-[#D4AF37]">Risk Disclosure</h1>
        </div>
        <p className="text-xs text-[#A0A0A0] mb-10">Last updated: April 2026 — Please read carefully before using the platform.</p>

        <div className="mb-8 p-5 rounded-xl border border-amber-500/30 bg-amber-500/10">
          <p className="text-amber-300 text-sm md:text-base font-semibold">
            The profits of the project can fluctuate as per market conditions. Crypto investments are high-risk. You are solely responsible for your financial decisions and may lose all funds committed.
          </p>
        </div>

        <section className="space-y-6 text-[#A0A0A0] text-sm md:text-base leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold text-[#E0E0E0] mb-2">1. General Risk Warning</h2>
            <p>Cryptocurrency and digital-asset activity involves a high level of risk and is not suitable for every investor. Prices are extremely volatile and can rise or fall sharply within short periods. You should only commit funds you can afford to lose entirely.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#E0E0E0] mb-2">2. No Guaranteed Returns</h2>
            <p>Any rate, yield, percentage, or earnings figure shown on this platform — whether in marketing materials, dashboards, or package descriptions — is indicative only. Past performance is not a reliable indicator of future results. Rates may change at any time without notice and are subject to market conditions.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#E0E0E0] mb-2">3. Market Risk</h2>
            <p>Digital asset markets are largely unregulated and can be affected by liquidity events, regulatory changes, exchange outages, forks, hacks, or exploits. These events can lead to partial or total loss of funds.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#E0E0E0] mb-2">4. Operational & Technology Risk</h2>
            <p>The platform depends on internet connectivity, third-party services, blockchains, and cloud infrastructure. Outages, errors, bugs, or cyberattacks may interrupt services, delay withdrawals, or cause loss of data or funds.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#E0E0E0] mb-2">5. Regulatory Risk</h2>
            <p>Laws governing digital assets differ across jurisdictions and continue to evolve. Actions taken by regulators may restrict or prohibit certain activities, impact the value of holdings, or require additional compliance steps from users.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#E0E0E0] mb-2">6. Referral & Community Features</h2>
            <p>Referral rewards are voluntary marketing incentives and are NOT a form of income or employment. Do not recruit others based on promises of returns. Rewards may be modified, reduced, or discontinued at any time.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#E0E0E0] mb-2">7. User Responsibility</h2>
            <p>You are solely responsible for your own financial decisions, tax obligations, and legal compliance. Nothing on this platform constitutes financial, investment, legal, or tax advice. Consult a qualified professional before committing funds.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#E0E0E0] mb-2">8. Not FDIC / Government-Insured</h2>
            <p>Deposits made on this platform are NOT insured by any government agency, deposit insurance scheme, or guarantee fund. There is no government safety net for crypto holdings.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#E0E0E0] mb-2">9. Acknowledgement</h2>
            <p>By using TITAN VENTURES you acknowledge that you have read and understood this Risk Disclosure, and that you accept the risks outlined above.</p>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 py-8 mt-10">
        <div className="max-w-5xl mx-auto px-4 md:px-8 text-center text-xs text-[#A0A0A0]">
          © 2026 TITAN VENTURES. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default RiskDisclosurePage;
