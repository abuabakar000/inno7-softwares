import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Scale, MessageSquare, Smartphone, HelpCircle, Lock, UserCheck, AlertCircle, FileText, CreditCard } from "lucide-react";

export const metadata = {
  title: "Terms & Conditions | Inex Labs",
  description: "Terms and Conditions of Service and SMS Compliance framework for Inex Labs. Read about your communication options, user agreement, and data usage.",
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

export default function TermsAndConditions() {
  return (
    <div className="relative min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      <Navbar />

      <main className="relative pt-40 pb-32 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-24 md:mb-40">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-8">
            <FileText size={14} className="text-white/60" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">Service & Compliance Agreement</span>
          </div>
          <h1 className="text-[10vw] md:text-[7vw] font-thin leading-[0.8] tracking-[-0.04em] uppercase mb-12">
            TERMS <br />
            <span className="text-zinc-800">OF SERVICE</span>
          </h1>
          <p className="text-xl md:text-3xl text-zinc-500 font-extralight max-w-4xl leading-tight">
            Please read these Terms and Conditions carefully before using our digital agency communication services or requesting a consultation.
          </p>
        </div>

        {/* Content Grid */}
        <div className="flex flex-col gap-12 md:gap-20">
          
          <Section icon={Scale} title="01. Agreement to Terms">
            <p>
              By accessing, browsing, or utilizing the web design services, consultations, and interactive communication systems provided by Inex Labs, you unconditionally agree to comply with and be bound by these Terms & Conditions.
            </p>
            <p>
              These Terms constitute a legally binding agreement between you and Inex Labs. If you do not agree with any part of these terms, you are prohibited from using our services, contacting us via our automated forms, or opting into our communication networks.
            </p>
          </Section>

          <Section icon={MessageSquare} title="02. Communication Consent">
            <p>
              By using Inex Labs communication services, you agree to receive conversational and customer support messages related to web design consultations, project updates, and follow-up communication.
            </p>
            <div className="bg-white/[0.03] p-10 md:p-14 rounded-3xl border border-white/10 text-white font-light text-2xl md:text-3xl leading-snug italic">
              "By providing your phone number, you consent to receive SMS communications from Inex Labs related to your inquiry or ongoing services."
            </div>
            <p>
              We obtain consent actively and transparently. We will never share, sell, or rent your mobile phone numbers or opt-in consent parameters with outside parties or marketing lists.
            </p>
          </Section>

          <Section icon={Smartphone} title="03. Message Rates & Logistics">
            <p>
              Message frequency may vary depending on the active stage of your web development or design project, the number of support requests initiated, or follow-up timelines.
            </p>
            <p>
              Message and data rates may apply depending on your mobile carrier and current service plan. Inex Labs does not charge any additional fees for sending messages, but you are solely responsible for any messaging fees or data usage rates billed by your wireless provider.
            </p>
          </Section>

          <Section icon={HelpCircle} title="04. Opt-Out & Support">
            <p>
              We believe in giving you absolute power over your digital footprint and inbox. You can manage your subscription preferences or cancel communications effortlessly.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5">
                <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-sm">Instant Opt-Out</h4>
                <p className="text-base text-zinc-500">
                  You can opt out of SMS communications at any time. Simply reply <span className="text-white font-mono bg-white/10 px-2 py-0.5 rounded">STOP</span>. Our system will immediately process the request and remove you from the active outreach queue.
                </p>
              </div>
              <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5">
                <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-sm">Technical Assistance</h4>
                <p className="text-base text-zinc-500">
                  For assistance, reply <span className="text-white font-mono bg-white/10 px-2 py-0.5 rounded">HELP</span> or reach out directly to our administration desk at <a href="mailto:office@inexlabs.com" className="text-white underline">office@inexlabs.com</a>.
                </p>
              </div>
            </div>
          </Section>

          <Section icon={Lock} title="05. Strict Privacy & Zero Sharing">
            <p>
              Inex Labs does not sell or share your personal information with third parties for marketing purposes.
            </p>
            <p>
              Your personal data, phone numbers, and message content are securely protected under our dual-layer encryption architecture. Inex Labs guarantees that no third-party marketing companies, aggregators, or external companies will ever receive access to your data for advertising or non-essential purposes.
            </p>
          </Section>

          <Section icon={UserCheck} title="06. User Responsibilities">
            <p>
              You agree to provide true, accurate, and current information when submitting details on our website forms. You may not impersonate any person or entity, or use a false phone number or email address that you are not authorized to use.
            </p>
            <p>
              Inex Labs reserves the right to terminate communication channels, cancel consultations, or refuse project onboarding for any user who provides fraudulent details or abuses our communication networks.
            </p>
          </Section>

          <Section icon={AlertCircle} title="07. Limitation of Liability">
            <p>
              Inex Labs provides digital agency consultations, web development, and design services on an "as-is" and "as-available" basis. We do not warrant that our communication services will be uninterrupted or completely error-free.
            </p>
            <p>
              To the fullest extent permitted by applicable law, Inex Labs shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use our communication systems, delay in delivery, or carrier-related network failures.
            </p>
          </Section>

          <Section icon={CreditCard} title="08. Purchase & Refund Policy">
            <p>
              Inex Labs provides premium digital solutions, custom web design, and software development services. To ensure a seamless, secure, and compliant purchasing experience, all transactions conducted on or through our platform are handled by Lemon Squeezy, who acts as our Merchant of Record (MoR).
            </p>
            <p>
              By making a purchase, you agree to pay the fees specified for the selected digital product, service subscription, or consulting package. Payments, billing details, and related compliance (including global sales taxes and VAT calculations) are managed by Lemon Squeezy, subject to their legal terms and conditions.
            </p>
            <p>
              Refund eligibility varies based on the product or service type:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-400">
              <li>
                <strong>Digital Goods & Assets:</strong> For downloadable templates, design packs, or ready-made assets, we offer a 14-day refund window from the date of purchase, provided the product has not been fully utilized or permanently integrated into a commercial project.
              </li>
              <li>
                <strong>SaaS & Subscriptions:</strong> Subscription fees are billed in advance. You can cancel your subscription at any time, which will prevent future billing. Refunds for active subscription cycles are reviewed on a case-by-case basis.
              </li>
              <li>
                <strong>Custom Professional Services:</strong> Custom software engineering, boutique design, and consulting retainers are billed based on project milestones and deliverables. Once a milestone is approved or work is delivered, those specific service hours are non-refundable.
              </li>
            </ul>
            <p>
              To request a refund, cancellation, or for any billing inquiry, please reach out directly to our administration desk at <a href="mailto:office@inexlabs.com" className="text-white underline underline-offset-4">office@inexlabs.com</a> with your order details and transaction receipt.
            </p>
          </Section>

        </div>

        {/* Footer Note */}
        <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="max-w-2xl">
            <p className="text-zinc-500 text-sm uppercase tracking-widest leading-loose">
              Contact:<br />
              <a href="mailto:office@inexlabs.com" className="text-white underline underline-offset-4">office@inexlabs.com</a><br />
              <a href="https://inexlabs.com" target="_blank" rel="noopener noreferrer" className="text-white underline underline-offset-4">https://inexlabs.com</a><br /><br />
              This document was last updated and verified on July 13, 2026. Inex Labs reserves the right to modify these terms at any time.
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
