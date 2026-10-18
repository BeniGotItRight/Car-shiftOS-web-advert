export const faqs = [
  {
    question: "What is Car ShiftOS?",
    answer:
      "Car ShiftOS is a dealer management system built for independent car yards in Kenya. It brings inventory, customer leads, workshop jobs, payment records, and your online showroom into one connected system, so your team isn't tracking everything across WhatsApp chats and spreadsheets.",
    relatedLink: { label: "See everything the platform covers", href: "/services" },
  },
  {
    question: "How is this different from what I'm already doing on WhatsApp and Excel?",
    answer:
      "WhatsApp and Excel work until your yard grows past a handful of cars. Car ShiftOS replaces that patchwork with one connected system, so you're not hoping you remember what happened, you have the full history in front of you.",
    comparison: {
      leftLabel: "WhatsApp & Excel",
      rightLabel: "Car ShiftOS",
      rows: [
        {
          left: "An enquiry gets buried the moment the next message comes in, no record of who followed up or when.",
          right: "Every enquiry is logged and assigned, so nothing falls through the cracks.",
        },
        {
          left: "A spreadsheet can list a car, but not its real cost, financing options, or full lifecycle.",
          right: "Every vehicle has its own profile, from the day it arrives to the day it's sold.",
        },
        {
          left: "No link between a car and its workshop history.",
          right: "Workshop jobs and invoices are tracked as real revenue, not scattered notes.",
        },
        {
          left: "No payment trail tied to the vehicle.",
          right: "Every payment is recorded against the right car, automatically.",
        },
        {
          left: "Buyers can't browse your stock on their own.",
          right: "A live, always-updated showroom buyers can browse themselves.",
        },
      ],
    },
  },
  {
    question: "Who is Car ShiftOS for?",
    answer:
      "Car ShiftOS is built for independent Kenyan car dealerships and car yards, from single-lot operations to multi-branch dealer groups.",
  },
  {
    question: "Does Car ShiftOS hold or process payment for car sales?",
    answer:
      "No. Car ShiftOS records and organises payments against the right vehicle and sale so you have a clear paper trail, but it does not hold or process the funds from a vehicle sale. Money moves directly between the buyer and the dealer.",
  },
  {
    question: "What does the Workshop & Service module do?",
    answer:
      "It turns your workshop into a tracked revenue stream: job cards, parts, technician assignments, and service invoices are all logged in one place, so at the end of the month you know exactly what the workshop made.",
    relatedLink: { label: "Read more about the Workshop & Service module", href: "/services" },
  },
  {
    question: "Is there a public marketplace where buyers can find my cars?",
    answer:
      "Yes. cars.carshiftos.co.ke is a marketplace where buyers across Kenya can search inventory from ShiftOS-powered dealerships. It's opening soon, join the waitlist on that site to be notified when it launches.",
    relatedLink: { label: "Visit the marketplace", href: "https://cars.carshiftos.co.ke" },
  },
  {
    question: "How much does Car ShiftOS cost?",
    answer:
      "Pricing depends on the size of your dealership and which modules you need. Book a free demo and we'll walk you through pricing on your own inventory.",
    relatedLink: { label: "Book a free demo", href: "/contact" },
  },
  {
    question: "Is my dealership's data kept separate from other dealerships?",
    answer:
      "Yes. Each dealership's inventory, leads, and records are kept separate and accessible only to your own team.",
    relatedLink: { label: "Read our privacy policy", href: "/privacy" },
  },
  {
    question: "How long does setup take?",
    answer:
      "Getting the system itself set up takes about 10 minutes, that's separate from the time it takes to load in your existing inventory. You'll also get basic training after onboarding so your team is comfortable using it from day one.",
  },
  {
    question: "How do I get started?",
    answer:
      "Book a free 30-minute demo and we'll walk through the system on your own inventory. It also runs well on both a computer and a phone, so your team isn't tied to a desktop.",
  },
] as const;
