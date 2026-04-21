import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const LOGO = 'https://customer-assets.emergentagent.com/job_titan-setup/artifacts/t1a7gq9v_WhatsApp%20Image%202026-04-22%20at%2012.15.24%20AM.jpeg';

const PrivacyPage = () => {
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
        <h1 className="text-3xl md:text-4xl font-bold text-[#D4AF37] mb-2">Privacy Policy</h1>
        <p className="text-xs text-[#A0A0A0] mb-10">Last updated: April 2026</p>

        <section className="space-y-6 text-[#A0A0A0] text-sm md:text-base leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold text-[#E0E0E0] mb-2">1. Information We Collect</h2>
            <p>We collect information you provide directly (such as name, email, country, city, WhatsApp number, and wallet addresses) and technical data (such as device, browser type, IP address, and usage activity) when you use the Service.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#E0E0E0] mb-2">2. How We Use Your Information</h2>
            <p>We use your information to operate the Service, process deposits and withdrawals, send transactional and security notifications, prevent fraud and abuse, comply with legal obligations, and improve the platform.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#E0E0E0] mb-2">3. Sharing of Information</h2>
            <p>We do not sell your personal data. We may share information with service providers (email delivery, analytics, infrastructure) bound by confidentiality obligations, and with authorities when required by law or to prevent illegal activity.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#E0E0E0] mb-2">4. Data Retention</h2>
            <p>We retain account and transaction records for as long as needed to provide the Service and to comply with legal, accounting, and audit requirements.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#E0E0E0] mb-2">5. Security</h2>
            <p>We use industry-standard technical and organizational measures to protect your data. However, no online service can be 100% secure; you use the Service at your own risk.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#E0E0E0] mb-2">6. Your Rights</h2>
            <p>Depending on your jurisdiction, you may have rights to access, correct, delete, or port your personal data, and to object or restrict certain processing. Contact us to exercise these rights.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#E0E0E0] mb-2">7. Cookies</h2>
            <p>We use cookies and similar technologies to keep you signed in, remember your preferences, and analyze traffic. You can control cookies through your browser settings.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#E0E0E0] mb-2">8. Contact</h2>
            <p>Questions about this policy? Email privacy@titanventures.online.</p>
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

export default PrivacyPage;
