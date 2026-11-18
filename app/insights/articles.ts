export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; ordered?: boolean; items: string[] }
  | { type: "cta"; lead: string; linkText: string; href: string };

export type Article = {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishedAt: string; // ISO date
  author: { name: string; href: string };
  image: { src: string; alt: string };
  content: ContentBlock[];
};

export const articles: Article[] = [
  {
    slug: "manage-a-car-yard-in-kenya",
    title: "How to Manage a Car Yard in Kenya",
    seoTitle: "How to Manage a Car Yard in Kenya",
    metaDescription:
      "Learn how to manage a car yard in Kenya, organise vehicle stock, track sales, follow up customers and improve daily dealership operations.",
    excerpt:
      "Running a car yard involves more than displaying vehicles and waiting for customers. Here's how to keep stock, enquiries and operations under control as you grow.",
    category: "Dealership Management",
    readTime: "6 min read",
    publishedAt: "2026-11-18",
    author: { name: "Car ShiftOS", href: "/about" },
    image: {
      src: "/assets/hero-dealership-lot.jpg",
      alt: "Cars displayed in a dealership yard",
    },
    content: [
      {
        type: "paragraph",
        text: "Running a car yard in Kenya involves much more than displaying vehicles and waiting for customers. A successful dealership needs to manage stock, understand its costs, respond to enquiries, follow up potential buyers and keep daily operations organised.",
      },
      {
        type: "paragraph",
        text: "As a car yard grows, these responsibilities become harder to handle using memory, notebooks and scattered spreadsheets. Vehicles may be overlooked, customer enquiries may go unanswered, and it can become difficult to know which cars are selling profitably.",
      },
      {
        type: "paragraph",
        text: "The good news is that a few practical management habits, and the right dealership management tools, can make a significant difference.",
      },
      { type: "heading", text: "1. Keep an accurate record of every vehicle" },
      {
        type: "paragraph",
        text: "Your vehicle inventory is one of your dealership's most important business assets. You should be able to establish the status and details of every vehicle in your yard without searching through several notebooks or asking different employees.",
      },
      {
        type: "paragraph",
        text: "For each vehicle, maintain a record containing relevant details such as:",
      },
      {
        type: "list",
        items: [
          "Make and model",
          "Year of manufacture",
          "Registration or stock number, where applicable",
          "Mileage",
          "Purchase or acquisition price",
          "Asking or selling price",
          "Current location",
          "Stock status, such as available, reserved or sold",
          "Important inspection and condition notes",
        ],
      },
      {
        type: "paragraph",
        text: "Keep records updated whenever a vehicle arrives, changes status or is sold. This helps prevent confusion between available stock and vehicles that have already been committed to buyers.",
      },
      { type: "heading", text: "2. Understand the full cost of each vehicle" },
      {
        type: "paragraph",
        text: "The purchase price is not necessarily the total cost of bringing a vehicle into your yard and preparing it for sale.",
      },
      {
        type: "paragraph",
        text: "Depending on the vehicle and your business model, you may incur expenses for transport, inspection, repairs, cleaning, documentation and other preparation work.",
      },
      {
        type: "paragraph",
        text: "Record relevant expenses against the correct vehicle. This makes it easier to understand the actual cost of your stock and assess the margin on a completed sale.",
      },
      {
        type: "paragraph",
        text: "Avoid setting selling prices based only on what a similar vehicle appears to be selling for. Consider your acquisition cost, preparation expenses, market conditions and the margin your business needs.",
      },
      { type: "heading", text: "3. Manage customer enquiries and follow-ups" },
      {
        type: "paragraph",
        text: "A potential buyer may contact your dealership through a phone call, WhatsApp message, website enquiry or social media page.",
      },
      {
        type: "paragraph",
        text: "The challenge is making sure every serious enquiry receives attention.",
      },
      {
        type: "paragraph",
        text: "Record important customer details, the vehicle they are interested in, their questions and the next action required. Assign responsibility for following up so that enquiries do not get lost when employees become busy.",
      },
      {
        type: "paragraph",
        text: "A simple follow-up process might include:",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Respond to the initial enquiry.",
          "Understand the customer's preferred vehicle and budget.",
          "Share relevant vehicle information.",
          "Arrange a viewing or inspection where appropriate.",
          "Follow up after the customer has viewed the vehicle.",
          "Update the enquiry when the customer makes a decision.",
        ],
      },
      {
        type: "paragraph",
        text: "Consistent follow-up creates a more professional buying experience and helps your team manage opportunities more effectively.",
      },
      { type: "heading", text: "4. Establish a clear vehicle sales process" },
      {
        type: "paragraph",
        text: "Every dealership should have a consistent process for moving a vehicle from available stock to a completed sale.",
      },
      {
        type: "paragraph",
        text: "Make sure your team understands when a vehicle is available, when it has been reserved and when it should be marked as sold.",
      },
      {
        type: "paragraph",
        text: "Keep the relevant customer and transaction information together. This makes it easier to check the progress of a deal and reduces the possibility of different employees giving conflicting information about the same vehicle.",
      },
      { type: "heading", text: "5. Keep workshop and vehicle preparation work organised" },
      {
        type: "paragraph",
        text: "Some vehicles need attention before they are ready for sale. Others may require repairs or maintenance after being acquired.",
      },
      {
        type: "paragraph",
        text: "If your dealership operates a workshop or coordinates vehicle preparation, keep track of the work being carried out and the vehicle involved.",
      },
      {
        type: "paragraph",
        text: "Record relevant inspection findings, repair requirements, work progress and costs. This helps management understand which vehicles are ready for sale and which still require attention.",
      },
      { type: "heading", text: "6. Review your dealership's performance" },
      {
        type: "paragraph",
        text: "Managing a car yard also means understanding what is happening across the business. Review questions such as:",
      },
      {
        type: "list",
        items: [
          "How many vehicles are currently available?",
          "Which vehicles have been in stock for a long time?",
          "How many enquiries are being received?",
          "How many enquiries are progressing to sales?",
          "What expenses are being incurred during vehicle preparation?",
          "Which parts of the sales process need improvement?",
        ],
      },
      {
        type: "paragraph",
        text: "Regular reviews help you identify problems early instead of waiting until the end of the month to discover them.",
      },
      { type: "heading", text: "7. Use dealership management software as your business grows" },
      {
        type: "paragraph",
        text: "Spreadsheets and notebooks may work when you have a small number of vehicles and a simple sales process. However, as your dealership grows, information becomes harder to maintain across different people and activities.",
      },
      {
        type: "paragraph",
        text: "Dealership management software can bring important operational information into one organised system, covering vehicle inventory, sales pipeline activity and workshop operations.",
      },
      {
        type: "paragraph",
        text: "Car ShiftOS is designed to help Kenyan dealerships organise exactly these areas of their business through a central management platform, instead of relying entirely on disconnected records.",
      },
      { type: "heading", text: "Build a more organised car yard" },
      {
        type: "paragraph",
        text: "A well-managed car yard depends on accurate stock records, consistent customer follow-up, controlled expenses and a clear sales process.",
      },
      {
        type: "paragraph",
        text: "Start by improving the way your dealership records vehicles and manages enquiries. As operations become more demanding, consider using software that helps your team manage inventory, sales and workshop activities more systematically.",
      },
      {
        type: "cta",
        lead: "Want to organise your dealership operations?",
        linkText: "See everything Car ShiftOS does",
        href: "/services",
      },
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
