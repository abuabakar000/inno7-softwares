import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, MessageSquare, Share2, HelpCircle, Bell, Lock, Globe, Database, UserCheck } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Inex Labs",
  description: "Detailed Privacy Policy and SMS Compliance information for Inex Labs. Learn how we protect your data and maintain the highest standards of digital privacy.",
};

const Section = ({ icon: Icon, title, children }: { icon: any, title: string, children: React.ReactNode }) => (
  <div className="relative group p-8 md:p-16 rounded-[3rem] bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-700">
    <div className="flex flex-col md:flex-row md:items-center gap-6 mb-10">
      <div className="w-16 h-16 rounded-2xl bg-white/[0.03] flex items-center justify-center text-white/40 group-hover:text-white group-hover:scale-110 transition-all duration-500 border border-white/5 shrink-0">
        <Icon strokeWidth={1} size={32} />
      </div>
      <h2 className="text-3xl md:text-4xl font-extralight uppercase tracking-tight text-white/90">
        {title}
      </h2>
    </div>
    <div className="space-y-8 text-zinc-400 text-lg md:text-xl leading-relaxed font-light max-w-4xl">
      {children}
    </div>
  </div>
);

export default function PrivacyPolicy() {
  return (
    <div className="relative min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      <Navbar />

      <main className="relative pt-40 pb-32 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-24 md:mb-40">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-8">
            <Shield size={14} className="text-white/60" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">Data Protection Framework</span>
          </div>
          <h1 className="text-[10vw] md:text-[7vw] font-thin leading-[0.8] tracking-[-0.04em] uppercase mb-12">
            PRIVACY <br />
            <span className="text-zinc-800">ENFORCEMENT</span>
          </h1>
          <p className="text-xl md:text-3xl text-zinc-500 font-extralight max-w-4xl leading-tight">
            At Inex Labs, your digital sovereignty is our primary directive. We have engineered this policy to be transparent, uncompromising, and fully compliant with global communication standards.
          </p>
        </div>

        {/* Content Grid */}
        <div className="flex flex-col gap-12 md:gap-20">
          
          <Section icon={MessageSquare} title="01. SMS Information Collection">
            <p>
              Inex Labs collects essential personal identifiers, including but not limited to full names, professional email addresses, and mobile phone numbers. This data is utilized exclusively to maintain the high-performance communication standards our clients expect from a boutique digital agency.
            </p>
            <p>
              Our collection process is intentionally restricted: phone numbers are obtained only through direct verbal confirmation or explicit, multi-stage opt-in forms on our official platforms. The sole purpose of this collection is to facilitate real-time project updates, deliver urgent design previews, and maintain a seamless feedback loop for your specific digital initiatives. We do not use "gray-market" lists or automated scrapers; every data point is provided by you, for your benefit.
            </p>
          </Section>

          <Section icon={Share2} title="02. Strict Third-Party Prohibition">
            <p>
              We operate under a rigorous "Closed-Loop" data philosophy. Inex Labs does not sell, rent, lease, or trade your personal information to any third-party entities, marketing aggregators, or external data brokers. Your professional details are treated as classified assets within our ecosystem.
            </p>
            <div className="bg-white/[0.03] p-10 md:p-14 rounded-3xl border border-white/10 text-white font-light text-2xl md:text-3xl leading-snug italic">
              "Mobile information and SMS opt-in consent data will not be shared with any third parties or affiliates for marketing purposes."
            </div>
            <p>
              This commitment is absolute and non-negotiable. While we may use internal sub-processors to facilitate the delivery of our services (such as encrypted hosting or communication gateways), these partners are bound by strict NDAs and are prohibited from using your data for any purpose other than providing the specific utility required by Inex Labs.
            </p>
          </Section>

          <Section icon={HelpCircle} title="03. Communication Governance">
            <p>
              We believe that every user should have absolute jurisdiction over their communication flow. Our systems are designed to respect your preferences instantly and without friction. Whether you are receiving project milestones or system alerts, you remain in total control of the engagement.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5">
                <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-sm">Opt-Out Protocol</h4>
                <p className="text-base text-zinc-500">
                  You can terminate SMS communications at any time. Simply reply <span className="text-white font-mono bg-white/10 px-2 py-0.5 rounded">STOP</span> to any message. Our system will immediately process your request and cease all automated outbound transmissions to that number.
                </p>
              </div>
              <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5">
                <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-sm">Technical Support</h4>
                <p className="text-base text-zinc-500">
                  If you encounter issues or require clarification on our messaging frequency, reply <span className="text-white font-mono bg-white/10 px-2 py-0.5 rounded">HELP</span>. A member of our support team will be notified to assist you with your specific inquiry or configuration.
                </p>
              </div>
            </div>
          </Section>

          <Section icon={Bell} title="04. Frequency & Carrier Logistics">
            <p>
              Communication frequency is dynamically calculated based on your active engagement with Inex Labs. We do not engage in "burst" marketing or unsolicited broadcasting. Instead, message delivery is triggered by specific project milestones, such as design approvals, deployment alerts, or critical security updates.
            </p>
            <p>
              Please be advised that standard message and data rates may apply according to your specific mobile carrier and service plan. Inex Labs is not responsible for any additional fees incurred through your provider. Message frequency varies and is entirely dependent on the complexity and velocity of your project interaction with our agency.
            </p>
          </Section>

          <Section icon={Lock} title="05. Data Fortification">
            <p>
              Security is not an afterthought; it is integrated into our core architecture. Inex Labs utilizes advanced AES-256 encryption for data at rest and TLS 1.3 for data in transit. Our infrastructure is hosted on geographically distributed, Tier 4 data centers with 24/7 physical and digital monitoring.
            </p>
            <p>
              We maintain a "Least Privilege" access model, meaning only essential personnel with high-level clearance can interact with client databases. Regular security audits, penetration testing, and vulnerability assessments are conducted to ensure our defenses remain ahead of emerging threats.
            </p>
          </Section>

          <Section icon={Globe} title="06. Cookies & Analytics">
            <p>
              To optimize your experience on the Inex Labs platform, we utilize a minimal set of tracking technologies. These include essential session cookies for security and authentication, as well as anonymized analytical tools to help us understand how our users interact with our digital surfaces.
            </p>
            <p>
              We do not use invasive tracking pixels or cross-site behavioral monitoring. Our analytics are privacy-first, ensuring that your browsing patterns are never tied to your personal identity. You can adjust your browser settings to refuse cookies, though some features of our platform may require them for proper functionality.
            </p>
          </Section>

          <Section icon={UserCheck} title="07. Your Legal Rights">
            <p>
              Depending on your jurisdiction (including GDPR in Europe and CCPA/CPRA in California), you may have specific rights regarding your personal data. These typically include the right to access, the right to rectification, the right to erasure ("Right to be Forgotten"), and the right to data portability.
            </p>
            <p>
              Inex Labs is committed to honoring these rights globally. If you wish to exercise any of these rights, or if you have questions about how your data is being handled, please contact our Data Protection Officer at <a href="mailto:office@inexlabs.com" className="text-white underline underline-offset-4">office@inexlabs.com</a>.
            </p>
          </Section>

          <Section icon={Database} title="08. Retention Policy">
            <p>
              We do not store data indefinitely. Inex Labs retains personal information only for as long as is strictly necessary to fulfill the purposes for which it was collected, including the satisfaction of any legal, accounting, or reporting requirements.
            </p>
            <p>
              Once a project concludes and the mandatory retention period expires, your data is securely purged from our active systems and backups using industry-standard sanitization methods.
            </p>
          </Section>

        </div>

        {/* Footer Note */}
        <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="max-w-2xl">
            <p className="text-zinc-500 text-sm uppercase tracking-widest leading-loose">
              Inex Labs reserves the right to update this policy as digital landscapes evolve. Users will be notified of significant changes via the email or phone number provided. This document was last audited and updated on May 17, 2026.
            </p>
          </div>
          <div className="text-zinc-800 text-[8vw] font-black uppercase leading-none select-none">
            INEX
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
