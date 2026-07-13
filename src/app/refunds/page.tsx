import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { RefreshCw, FileText, CreditCard, ShieldCheck, Mail, HelpCircle } from "lucide-react";

export const metadata = {
  title: "Refund & Return Policy | Inex Labs",
  description: "Detailed Refund, Return, and Cancellation Policy for Inex Labs products, SaaS subscriptions, and custom agency services.",
};

const Section = ({ icon: Icon, title, id, children }: { icon: any, title: string, id?: string, children: React.ReactNode }) => (
  <div id={id} className="relative group p-8 md:p-16 rounded-[3rem] bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-700">
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

export default function RefundPolicy() {
  return (
    <div className="relative min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      <Navbar />

      <main className="relative pt-40 pb-32 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-24 md:mb-40">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-8">
            <RefreshCw size={14} className="text-white/60" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">Consumer Protection Framework</span>
          </div>
          <h1 className="text-[10vw] md:text-[7vw] font-thin leading-[0.8] tracking-[-0.04em] uppercase mb-12">
            REFUND <br />
            <span className="text-zinc-800">POLICY</span>
          </h1>
          <p className="text-xl md:text-3xl text-zinc-500 font-extralight max-w-4xl leading-tight">
            Please read our Refund, Return, and Cancellation terms carefully to understand your consumer options for digital purchases and custom agency services.
          </p>
        </div>

        {/* Content Grid */}
        <div className="flex flex-col gap-12 md:gap-20">

          <Section icon={CreditCard} title="01. Merchant of Record & Billing Context">
            <p>
              Inex Labs provides digital agency consultations, premium design assets, and custom software development services. To deliver a seamless, secure, and compliant checkout flow, payments on our platform are processed by our authorized Merchant of Record (MoR) partners (which may include Lemon Squeezy, Paddle, or Polar, depending on the payment gateway selected).
            </p>
            <p>
              Our MoR partners are the legal merchants of record for all transactions and handle all compliance, tax collection, billing operations, and transaction disputes on our behalf. Any refunds issued will be processed back to the original payment method through the respective MoR platform used during checkout.
            </p>
          </Section>

          <Section icon={FileText} title="02. Digital Goods & Downloadable Assets">
            <p>
              We stand behind the quality of our downloadable assets, website templates, and pre-built design libraries. 
            </p>
            <p>
              For these digital products, we offer a <strong>14-day refund window</strong> from the date of purchase. To qualify for a refund, you must submit a request explaining your dissatisfaction, and verify that the product has not been permanently integrated, redistributed, or deployed in a live commercial environment. Once a refund is processed, your license to use the assets is immediately revoked.
            </p>
          </Section>

          <Section icon={ShieldCheck} title="03. SaaS & Subscriptions">
            <p>
              Subscription services, cloud hosting features, or software-as-a-service (SaaS) products are billed on a recurring cycle (monthly or annually). 
            </p>
            <p>
              You can cancel your subscription at any time via your billing dashboard. Cancellation stops future recurring charges, but previous payments are generally non-refundable unless requested within 7 days of the billing renewal date due to accidental renewal. Active subscription accounts will remain fully functional until the end of the current paid billing cycle.
            </p>
          </Section>

          <Section icon={HelpCircle} title="04. Custom Professional Services">
            <p>
              Boutique design services, custom software engineering, and dedicated consulting projects are governed by specific project milestones, statements of work (SOW), and service agreements.
            </p>
            <p>
              Because custom services involve dedicated creative talent and engineering hours, any milestone deliverables that have been completed, presented, and signed off/approved by the client are strictly non-refundable. If a project is cancelled mid-milestone, you may be billed proportionally for the work completed up to the date of cancellation.
            </p>
          </Section>

          <Section icon={Mail} title="05. How to Request a Refund">
            <p>
              To initiate a refund, cancellation request, or report a billing issue, please reach out directly to our support and administration desk:
            </p>
            <div className="bg-white/[0.03] p-10 md:p-14 rounded-3xl border border-white/10 text-white font-light text-2xl md:text-3xl leading-snug">
              Email support at: <a href="mailto:office@inexlabs.com" className="text-white underline underline-offset-4 font-mono">office@inexlabs.com</a>
            </div>
            <p>
              Please include your order number, transaction receipt, and the email address used during purchase to help us locate and process your request as quickly as possible. Refund requests are typically reviewed and responded to within 2 to 3 business days.
            </p>
          </Section>

        </div>

        {/* Footer Note */}
        <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="max-w-2xl">
            <p className="text-zinc-500 text-sm uppercase tracking-widest leading-loose">
              This document was last updated and verified on July 13, 2026. Inex Labs reserves the right to modify this refund policy at any time.
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
