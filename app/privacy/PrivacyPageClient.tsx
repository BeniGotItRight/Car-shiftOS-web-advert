"use client";

import { motion } from "framer-motion";

type Section = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

const sections: Section[] = [
  {
    title: "Who This Policy Covers",
    paragraphs: [
      "This policy explains how Car ShiftOS (\"ShiftOS\", \"we\", \"us\") handles personal data across two things: this website (carshiftos.co.ke), and the ShiftOS platform used by car dealerships (\"dealers\"), their staff, and their customers.",
      "For data that a dealer enters about their own customers and vehicles (leads, buyers, sale records), the dealer is the data controller and ShiftOS acts as a data processor, handling that data only to provide the service and only under the dealer's instruction. For a dealer's own account, billing, and subscription data, ShiftOS is the data controller.",
    ],
  },
  {
    title: "Account & Business Information",
    paragraphs: [
      "When a dealership signs up, we collect the business name, physical address, phone number, and email address, along with billing and subscription details and payment references from our payment processor.",
      "For each staff account: full name, email, phone number, role, and login credentials. Passwords are stored hashed, never in plain text, and we log the last login time and account creation date for security purposes.",
    ],
  },
  {
    title: "Vehicle Inventory Data",
    paragraphs: [
      "For each vehicle a dealer lists: make, model, year, colour, engine size, transmission, mileage, chassis/VIN number, registration plate, condition, asking price, and photos. Cost price and profit margin are also stored where a dealer chooses to record them, and access to these fields is restricted to authorised staff.",
      "For imported vehicles, we may also store shipping documents, customs clearance status, port of entry, and duty information where a dealer uses ShiftOS to track an import.",
    ],
  },
  {
    title: "Customer & Buyer Data",
    paragraphs: [
      "This is the most sensitive category we handle. For leads and enquiries: name, phone number, email (if given), the vehicle enquired about, how the lead reached the dealer, and any follow-up notes staff record.",
      "For completed sales, we additionally store what's needed for a logbook transfer and payment record: ID or passport number, address, payment method, transaction references, amount and date paid. For hire-purchase or financing deals arranged through a dealer, we may store income, deposit, loan amount, financier name, and repayment period as entered by the dealer.",
    ],
  },
  {
    title: "Workshop & Service Records",
    paragraphs: [
      "For vehicles booked in for service: registration plate, make/model, reported fault, diagnosis notes, parts used, labour hours, and the resulting bill. We also record which staff member (mechanic) handled the job, and the customer's name and phone number.",
    ],
  },
  {
    title: "Communications We Send on a Dealer's Behalf",
    paragraphs: [
      "When a dealer sends an SMS or email through the platform (a lead notification, payment instruction, or receipt), we store the recipient, message content, timestamp, and delivery status.",
    ],
  },
  {
    title: "System & Audit Data",
    paragraphs: [
      "We log who logs in, when, and from what IP address, and we keep an audit trail of who created, edited, or deleted a record and when. This exists to protect dealers and their customers from unauthorised access, and to investigate misuse if it's ever reported.",
    ],
  },
  {
    title: "Public Marketplace Listings",
    paragraphs: [
      "Vehicle listings shown on the public marketplace (photos, specs, asking price, dealer name and location) are intentionally public. If you enquire about a listing, your name and phone number are shared with that dealer as a new lead in their account.",
    ],
  },
  {
    title: "This Website (carshiftos.co.ke)",
    paragraphs: [
      "This marketing website does not currently use analytics or tracking cookies. If you get in touch through our contact form, your message is sent directly to our email address and is not stored on our servers.",
    ],
  },
  {
    title: "Why We Process This Data",
    bullets: [
      "To provide the core functionality dealers sign up for: inventory, CRM, workshop, and payment tracking.",
      "To send the transactional messages a dealer's business depends on: receipts, lead alerts, payment confirmations.",
      "To meet Kenyan record-keeping obligations, such as retaining sale and payment records for tax purposes.",
      "To keep the platform secure, through audit logging and access controls.",
    ],
  },
  {
    title: "How Long We Keep It",
    paragraphs: [
      "As a general rule, dealer and customer data is kept for as long as the dealer's account is active, plus a retention period afterward so records aren't lost to accidental cancellation or a billing lapse.",
    ],
    bullets: [
      "Sale, payment, and financial records: 7 years after the transaction, in line with standard Kenyan tax record-keeping practice.",
      "Leads and enquiries with no resulting sale: 24 months after the last activity, then deleted.",
      "System and audit logs: 12 months, then deleted.",
      "Account data: retained while the account is active, deleted or anonymised within 90 days of account closure unless we're required to keep it longer by law.",
    ],
  },
  {
    title: "Who We Share Data With",
    paragraphs: [
      "We do not sell personal data. We share it only with the following categories of third parties, and only to the extent needed for them to do their job:",
    ],
    bullets: [
      "Africa's Talking: delivers SMS messages sent through the platform.",
      "Cloudflare: stores and serves vehicle photos.",
      "Pesapal (including routing to M-Pesa and card networks): processes payments.",
      "Vercel: hosts this website and the platform's infrastructure.",
    ],
  },
  {
    title: "International Data Transfers",
    paragraphs: [
      "Some of the providers above operate infrastructure outside Kenya. Where personal data is processed outside Kenya, we rely on our contracts with those providers to require an appropriate standard of protection, consistent with Section 48 of Kenya's Data Protection Act, 2019.",
    ],
  },
  {
    title: "Your Rights Under Kenya's Data Protection Act, 2019",
    paragraphs: [
      "If you're a dealer, staff member, or a customer whose data we hold, you have the right to:",
    ],
    bullets: [
      "Be informed about how your data is used.",
      "Access the personal data we hold about you.",
      "Request correction of inaccurate or incomplete data.",
      "Request deletion of your data, subject to our legal retention obligations.",
      "Object to or request restriction of certain processing.",
      "Request your data in a portable format.",
      "Lodge a complaint with the Office of the Data Protection Commissioner (ODPC) at odpc.go.ke.",
    ],
  },
  {
    title: "How We Protect Your Data",
    bullets: [
      "All traffic to this site and the platform is encrypted in transit (HTTPS/TLS).",
      "Passwords are hashed and salted. We never store them in plain text.",
      "Sensitive fields, such as cost price and customer ID numbers, are restricted to authorised staff roles.",
      "Access and changes to records are logged for audit purposes.",
    ],
  },
  {
    title: "Children's Data",
    paragraphs: [
      "ShiftOS is a business tool built for dealership owners and staff. It is not directed at, and we do not knowingly collect data from, children.",
    ],
  },
  {
    title: "Changes to This Policy",
    paragraphs: [
      "As our systems evolve, we'll update this policy to reflect what's actually in place. Material changes will be posted here with a new effective date.",
    ],
  },
  {
    title: "Contact Us",
    paragraphs: [
      "For questions about this policy, or to make a data access, correction, or deletion request, reach us at carshiftos@gmail.com or 0732 009 268.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white pt-24 md:pt-32 pb-16 px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[50vw] h-[50vw] bg-blue-600/5 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 md:mb-16"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 md:mb-8 tracking-tighter">
            Privacy <span className="text-blue-500">Policy.</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 font-light leading-relaxed">
            What we collect, why we collect it, how long we keep it, and who we share it with.
          </p>
        </motion.div>

        <div className="space-y-8">
          {sections.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: Math.min(i, 5) * 0.05 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-slate-900/40 border border-white/5 backdrop-blur-xl"
            >
              <h2 className="text-2xl font-bold mb-4 text-white">{section.title}</h2>
              {section.paragraphs?.map((p, pi) => (
                <p key={pi} className="text-lg text-slate-400 font-light leading-relaxed mb-4 last:mb-0">
                  {p}
                </p>
              ))}
              {section.bullets && (
                <ul className="space-y-2 mt-2">
                  {section.bullets.map((b, bi) => (
                    <li key={bi} className="flex gap-3 text-lg text-slate-400 font-light leading-relaxed">
                      <span className="text-blue-500 mt-1">&bull;</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 pt-8 border-t border-white/10 text-slate-400 text-sm"
        >
          Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </motion.div>
      </div>
    </div>
  );
}
