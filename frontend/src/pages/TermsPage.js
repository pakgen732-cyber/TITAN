import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const LOGO = 'https://customer-assets.emergentagent.com/job_titan-setup/artifacts/t1a7gq9v_WhatsApp%20Image%202026-04-22%20at%2012.15.24%20AM.jpeg';

const TermsPage = () => {
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
        <h1 className="text-3xl md:text-4xl font-bold text-[#D4AF37] mb-2">Terms of Service</h1>
        <p className="text-xs text-[#A0A0A0] mb-10">Last updated: April 2026</p>

        <section className="space-y-6 text-[#A0A0A0] text-sm md:text-base leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold text-[#E0E0E0] mb-2">1. Acceptance of Terms</h2>
            <p>By accessing or using the TITAN VENTURES platform ("Service"), you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you must not use the Service.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#E0E0E0] mb-2">2. Eligibility</h2>
            <p>You must be at least 18 years old and legally permitted to use cryptocurrency-related services in your jurisdiction. You are solely responsible for ensuring compliance with all applicable local laws and regulations.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#E0E0E0] mb-2">3. No Financial Advice</h2>
            <p>Nothing on this platform constitutes financial, investment, legal, or tax advice. All information is provided for general informational purposes only. You should consult a qualified professional before making any financial decision.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#E0E0E0] mb-2">4. No Guarantee of Returns</h2>
            <p>TITAN VENTURES does not guarantee any specific return, yield, profit, or outcome. Any figures, rates, or example earnings shown in dashboards or marketing material are indicative only, may change at any time, and are subject to market conditions, platform policies, and applicable terms of each package.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#E0E0E0] mb-2">5. Risk Acknowledgement</h2>
            <p>Cryptocurrency and digital-asset activity is highly volatile and speculative. You acknowledge that you may lose some or all of your funds. You accept full responsibility for any decisions you make on the platform. Please read our <Link to="/risk-disclosure" className="text-[#D4AF37] underline">Risk Disclosure</Link> for details.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#E0E0E0] mb-2">6. Account Security</h2>
            <p>You are responsible for maintaining the confidentiality of your login credentials, wallet addresses, and any two-factor authentication device. TITAN VENTURES is not liable for losses resulting from unauthorized account access caused by your negligence.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#E0E0E0] mb-2">7. Prohibited Activities</h2>
            <p>You agree not to: (a) use the Service for money laundering, terrorism financing, or any illegal activity; (b) provide false or misleading information; (c) attempt to exploit, disrupt, or reverse-engineer the Service; (d) use the referral program in any fraudulent or abusive manner.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#E0E0E0] mb-2">8. Referral Program</h2>
            <p>Participation in the referral program is voluntary. Rewards are discretionary and may be modified, suspended, or terminated at any time. Rewards paid on fraudulent referrals will be reversed.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#E0E0E0] mb-2">9. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, TITAN VENTURES and its operators shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, arising out of or related to your use of the Service.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#E0E0E0] mb-2">10. Changes to These Terms</h2>
            <p>We may update these terms from time to time. Continued use of the Service after changes are posted constitutes acceptance of the revised terms.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#E0E0E0] mb-2">11. Contact</h2>
            <p>For any questions about these terms, please contact us at support@titanventures.online.</p>
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

export default TermsPage;
