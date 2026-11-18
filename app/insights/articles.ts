export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "subheading"; text: string }
  | { type: "list"; ordered?: boolean; items: string[] }
  | { type: "definitionList"; ordered?: boolean; items: { term: string; description: string }[] }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "faq"; items: { question: string; answer: string }[] }
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
  relatedSlugs: string[];
  content: ContentBlock[];
};

export function getArticleFaqs(article: Article): { question: string; answer: string }[] {
  const block = article.content.find((b): b is Extract<ContentBlock, { type: "faq" }> => b.type === "faq");
  return block?.items ?? [];
}

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
    publishedAt: "2026-11-04",
    author: { name: "Car ShiftOS", href: "/about" },
    relatedSlugs: ["car-dealership-management-software", "spreadsheets-vs-dealership-software"],
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
        type: "faq",
        items: [
          {
            question: "What is the most important part of managing a car yard?",
            answer:
              "Keeping an accurate, up-to-date record of every vehicle, so the status and details of your stock are always clear without searching through notebooks or asking different employees.",
          },
          {
            question: "How do I stop losing customer enquiries?",
            answer:
              "Record every enquiry with the customer's details, the vehicle they're interested in, and the next action needed, then assign responsibility for following up so enquiries don't fall through the cracks.",
          },
          {
            question: "When should a car yard start using management software?",
            answer:
              "Once spreadsheets and notebooks make it hard to maintain information across employees and activities as the dealership grows, dedicated dealership management software becomes worth considering.",
          },
        ],
      },
      {
        type: "cta",
        lead: "Want to organise your dealership operations?",
        linkText: "See everything Car ShiftOS does",
        href: "/services",
      },
    ],
  },
  {
    slug: "car-dealership-management-software",
    title: "What Is Car Dealership Management Software?",
    seoTitle: "What Is Car Dealership Management Software?",
    metaDescription:
      "Discover what car dealership management software does, how it helps manage vehicle inventory and sales, and what Kenyan car dealers should look for.",
    excerpt:
      "A plain-language look at what dealership management software actually does, the problems it solves, and what to check for before choosing a platform.",
    category: "Buying Guide",
    readTime: "7 min read",
    publishedAt: "2026-11-11",
    author: { name: "Car ShiftOS", href: "/about" },
    relatedSlugs: ["manage-a-car-yard-in-kenya", "spreadsheets-vs-dealership-software"],
    image: {
      src: "/assets/premium-experience.png",
      alt: "Car dealership employee assisting a customer",
    },
    content: [
      {
        type: "paragraph",
        text: "Running a car dealership involves several activities that need to work together. A dealer must keep track of vehicles, manage customer enquiries, coordinate sales and, in some businesses, oversee workshop operations and vehicle preparation.",
      },
      {
        type: "paragraph",
        text: "When these activities are managed using separate notebooks, spreadsheets and messaging conversations, important information can become difficult to find.",
      },
      {
        type: "paragraph",
        text: "Car dealership management software is designed to help organise these activities through a digital system.",
      },
      { type: "heading", text: "What is car dealership management software?" },
      {
        type: "paragraph",
        text: "Car dealership management software is a digital platform that helps a vehicle dealership manage important parts of its daily operations.",
      },
      {
        type: "paragraph",
        text: "Depending on the software, it may support vehicle inventory management, customer and sales management, workshop operations, reporting and other dealership processes.",
      },
      {
        type: "paragraph",
        text: "Rather than keeping information in several disconnected places, dealership employees can use a structured system to record information and follow the progress of business activities.",
      },
      {
        type: "paragraph",
        text: "The exact features vary between providers, so dealerships should assess software based on the functions they actually need.",
      },
      { type: "heading", text: "1. Vehicle inventory management" },
      {
        type: "paragraph",
        text: "Inventory management is one of the most important parts of running a car dealership.",
      },
      {
        type: "paragraph",
        text: "A dealership needs to know which vehicles it owns or has available, what information is recorded against each vehicle and whether a vehicle is available, reserved or sold.",
      },
      {
        type: "paragraph",
        text: "Inventory management software helps dealers maintain organised vehicle records and keep stock information up to date.",
      },
      { type: "paragraph", text: "Useful inventory information may include:" },
      {
        type: "list",
        items: [
          "Vehicle make and model",
          "Year and mileage",
          "Registration or stock reference",
          "Purchase and selling prices",
          "Vehicle status",
          "Condition and preparation notes",
        ],
      },
      {
        type: "paragraph",
        text: "Having organised inventory information makes it easier for the team to answer questions about available vehicles and manage stock more consistently.",
      },
      { type: "heading", text: "2. Customer and sales management" },
      {
        type: "paragraph",
        text: "A dealership may receive enquiries from walk-in customers, telephone calls, WhatsApp, social media and its website.",
      },
      {
        type: "paragraph",
        text: "Without a consistent process, it is easy to lose track of who enquired, which vehicle they wanted and whether someone followed up.",
      },
      {
        type: "paragraph",
        text: "Sales management features can help a dealership organise customer enquiries and monitor the progress of potential deals.",
      },
      {
        type: "paragraph",
        text: "A structured sales process helps employees understand which enquiries need attention and what the next step should be.",
      },
      { type: "heading", text: "3. Workshop and vehicle preparation management" },
      {
        type: "paragraph",
        text: "Some dealerships operate their own workshops or coordinate repairs and preparation before a vehicle is offered for sale.",
      },
      {
        type: "paragraph",
        text: "Workshop management functionality can help organise relevant vehicle work, monitor progress and keep operational information together.",
      },
      {
        type: "paragraph",
        text: "This can be particularly useful when managers need to understand which vehicles are ready for sale and which still require attention.",
      },
      {
        type: "paragraph",
        text: "The available functions differ between software platforms, so confirm whether the system supports the specific workshop processes your business follows.",
      },
      { type: "heading", text: "4. Reporting and operational visibility" },
      {
        type: "paragraph",
        text: "Dealership managers need more than a list of vehicles. They need to understand how the business is performing.",
      },
      {
        type: "paragraph",
        text: "Depending on the software, reporting may help managers review stock levels, sales activity, workshop operations and other business information.",
      },
      {
        type: "paragraph",
        text: "Good reporting makes it easier to identify issues that need attention and make decisions using recorded information rather than relying only on memory.",
      },
      { type: "heading", text: "Why should Kenyan car dealers consider dealership management software?" },
      {
        type: "paragraph",
        text: "As a dealership grows, the amount of information it handles also grows.",
      },
      {
        type: "paragraph",
        text: "A business with several vehicles, multiple employees and a steady flow of customer enquiries may find it increasingly difficult to manage everything through manual records.",
      },
      { type: "paragraph", text: "Software can help address common operational challenges:" },
      {
        type: "definitionList",
        items: [
          { term: "Scattered information", description: "A structured platform can make relevant dealership information easier to access." },
          { term: "Missed follow-ups", description: "A managed sales process helps employees keep track of customer enquiries." },
          { term: "Unclear stock status", description: "Updated vehicle records help the team distinguish available, reserved and sold vehicles." },
          { term: "Limited visibility", description: "Organised operational information can help managers understand what is happening across the business." },
          { term: "Growing workloads", description: "A consistent system can reduce dependence on individual employees remembering every detail." },
        ],
      },
      { type: "heading", text: "What should you look for when choosing dealership management software?" },
      { type: "paragraph", text: "Before selecting a platform, consider the following:" },
      {
        type: "definitionList",
        ordered: true,
        items: [
          { term: "Inventory management", description: "Can it record the vehicle information your dealership needs?" },
          { term: "Sales management", description: "Can your team organise enquiries and monitor sales opportunities?" },
          { term: "Workshop operations", description: "If you operate a workshop, does the software support your actual workflow?" },
          { term: "Ease of use", description: "Can your employees learn and use it during normal working hours?" },
          { term: "Business suitability", description: "Does it fit the size and operating model of your dealership?" },
          { term: "Support and onboarding", description: "Can you get help when introducing the system to your team?" },
          { term: "Cost and value", description: "Are the available features worth the subscription or implementation cost?" },
        ],
      },
      {
        type: "paragraph",
        text: "Ask for a demonstration before making a decision. Use real examples from your business to test whether the software fits your daily operations.",
      },
      { type: "heading", text: "How Car ShiftOS helps dealerships" },
      {
        type: "paragraph",
        text: "Car ShiftOS is a dealership management platform built to help automotive businesses organise vehicle inventory, manage their sales pipeline and coordinate workshop operations.",
      },
      {
        type: "paragraph",
        text: "It is intended to give dealerships a more structured way to manage important business activities rather than depending entirely on disconnected manual records.",
      },
      {
        type: "paragraph",
        text: "If you are evaluating dealership management software, consider the operational challenges you want to solve first, then assess whether the available Car ShiftOS features match those needs.",
      },
      { type: "heading", text: "Bring your dealership operations together" },
      {
        type: "paragraph",
        text: "Car dealership management software is not simply a digital vehicle list. It is a way to organise the processes that support the dealership, from managing stock to following up sales opportunities and coordinating workshop activities.",
      },
      {
        type: "paragraph",
        text: "The right platform should make everyday work clearer, more consistent and easier to manage.",
      },
      {
        type: "faq",
        items: [
          {
            question: "What is car dealership management software?",
            answer:
              "A digital platform that helps a vehicle dealership manage important parts of its daily operations, such as vehicle inventory, customer and sales management, workshop operations and reporting.",
          },
          {
            question: "What should I look for when choosing dealership management software?",
            answer:
              "Confirm it covers inventory management, sales management and, if relevant, workshop operations, is easy for your team to use, fits your business size, and offers support during onboarding.",
          },
          {
            question: "Does dealership management software replace spreadsheets completely?",
            answer:
              "For a small dealership with limited stock, spreadsheets may still be enough. Dedicated software becomes more valuable as the amount of information and number of employees grows.",
          },
        ],
      },
      {
        type: "cta",
        lead: "Want to see how Car ShiftOS brings these processes together?",
        linkText: "See everything Car ShiftOS does",
        href: "/services",
      },
    ],
  },
  {
    slug: "spreadsheets-vs-dealership-software",
    title: "Spreadsheets vs Dealership Management Software: Which Is Better for Your Car Yard?",
    seoTitle: "Spreadsheets vs Dealership Management Software",
    metaDescription:
      "Compare spreadsheets and dealership management software for managing car inventory, customer enquiries and daily dealership operations.",
    excerpt:
      "Spreadsheets work until they don't. Here's a practical, side-by-side look at where spreadsheets hold up and where dedicated dealership software takes over.",
    category: "Comparisons",
    readTime: "8 min read",
    publishedAt: "2026-11-18",
    author: { name: "Car ShiftOS", href: "/about" },
    relatedSlugs: ["car-dealership-management-software", "manage-a-car-yard-in-kenya"],
    image: {
      src: "/assets/compare-dashboard.png",
      alt: "Business records and data being reviewed on a laptop",
    },
    content: [
      {
        type: "paragraph",
        text: "Many car dealerships start by managing their operations with spreadsheets. They are familiar, flexible and relatively easy to set up.",
      },
      {
        type: "paragraph",
        text: "A spreadsheet can help a dealer record vehicle details, purchase prices, selling prices and customer information. For a small business with a limited amount of stock, this may be enough to get started.",
      },
      {
        type: "paragraph",
        text: "However, as the dealership grows, managing inventory, customer enquiries, sales activity and workshop operations across separate files can become increasingly difficult.",
      },
      {
        type: "paragraph",
        text: "At that point, it is worth comparing spreadsheets with dedicated car dealership management software.",
      },
      { type: "heading", text: "1. Managing vehicle inventory" },
      { type: "subheading", text: "With spreadsheets" },
      {
        type: "paragraph",
        text: "A spreadsheet can store vehicle details such as make, model, year, mileage, purchase price and selling price.",
      },
      {
        type: "paragraph",
        text: "The challenge is keeping the information accurate. Employees may have different copies of the same file, and updates can be missed or overwritten if the process is not carefully managed.",
      },
      { type: "subheading", text: "With dealership management software" },
      {
        type: "paragraph",
        text: "A dealership platform provides a structured place to manage vehicle records. Depending on the system, it may also support stock statuses and connections to other dealership activities.",
      },
      {
        type: "paragraph",
        text: "This can make it easier for employees to work from consistent inventory information.",
      },
      { type: "heading", text: "2. Tracking customer enquiries" },
      { type: "subheading", text: "With spreadsheets" },
      {
        type: "paragraph",
        text: "A dealer can create a customer list and add notes about enquiries. However, employees still need a reliable process for updating those notes and remembering when to follow up.",
      },
      {
        type: "paragraph",
        text: "As the number of enquiries increases, it may become harder to see which customers need attention.",
      },
      { type: "subheading", text: "With dealership management software" },
      {
        type: "paragraph",
        text: "Sales management functionality can help organise enquiries and monitor their progress through the dealership's sales process.",
      },
      {
        type: "paragraph",
        text: "The value is not simply storing customer names. It is helping the team understand what has happened and what action should happen next.",
      },
      { type: "heading", text: "3. Managing information across employees" },
      { type: "subheading", text: "With spreadsheets" },
      {
        type: "paragraph",
        text: "Spreadsheets can be shared, but the dealership needs to manage file versions, editing permissions and update procedures.",
      },
      { type: "paragraph", text: "If employees maintain separate records, information may become inconsistent." },
      { type: "subheading", text: "With dealership management software" },
      {
        type: "paragraph",
        text: "A central system can give authorised employees access to the information relevant to their work, depending on the platform's user and permission features.",
      },
      { type: "paragraph", text: "This can reduce dependence on separate files and informal communication." },
      { type: "heading", text: "4. Connecting dealership activities" },
      { type: "subheading", text: "With spreadsheets" },
      {
        type: "paragraph",
        text: "A dealership might use one spreadsheet for vehicles, another for customers and another for expenses. Workshop records may be kept separately.",
      },
      {
        type: "paragraph",
        text: "The information exists, but employees may need to move between files to understand what is happening with a particular vehicle.",
      },
      { type: "subheading", text: "With dealership management software" },
      { type: "paragraph", text: "A platform designed for dealerships can bring important operational areas together." },
      {
        type: "paragraph",
        text: "For example, Car ShiftOS is designed around vehicle inventory, sales pipeline management and workshop operations. This gives dealerships a way to manage these connected activities within a dealership-focused platform.",
      },
      { type: "paragraph", text: "Always check the exact features of any software before choosing it." },
      { type: "heading", text: "5. Reporting and decision-making" },
      { type: "subheading", text: "With spreadsheets" },
      {
        type: "paragraph",
        text: "Spreadsheets can produce useful summaries and calculations, but someone must maintain the formulas, data and reporting structure.",
      },
      { type: "paragraph", text: "Incorrect entries or broken formulas can affect the results." },
      { type: "subheading", text: "With dealership management software" },
      {
        type: "paragraph",
        text: "Depending on the available reporting features, a dealership platform may make it easier to review operational information without building every report manually.",
      },
      { type: "paragraph", text: "The best option is the one that gives managers reliable information they can actually use." },
      { type: "heading", text: "6. Cost and ease of getting started" },
      {
        type: "paragraph",
        text: "Spreadsheets are often inexpensive and familiar. They can be a sensible starting point for a small dealership.",
      },
      {
        type: "paragraph",
        text: "Dedicated software may involve subscription or implementation costs, as well as time spent training employees. Those costs should be weighed against the operational value the system provides.",
      },
      {
        type: "paragraph",
        text: "Consider the time your team spends updating records, searching for information, correcting mistakes and coordinating work. These activities also have a cost, even when no software subscription is involved.",
      },
      { type: "heading", text: "Spreadsheets vs dealership management software: a quick comparison" },
      {
        type: "table",
        headers: ["Business need", "Spreadsheets", "Dealership software"],
        rows: [
          ["Recording vehicle details", "Suitable", "Designed for structured stock records"],
          ["Updating stock status", "Manual process", "Depends on system functionality"],
          ["Managing customer enquiries", "Can be done manually", "May include sales pipeline tools"],
          ["Coordinating workshop work", "Usually separate records", "May include workshop functionality"],
          ["Multiple employees", "Requires file and version discipline", "Depends on user access and permissions"],
          ["Reporting", "Requires maintained formulas and reports", "Depends on built-in reporting features"],
          ["Getting started", "Usually straightforward", "Requires selection, setup and training"],
        ],
      },
      { type: "heading", text: "When should a car dealership move beyond spreadsheets?" },
      {
        type: "paragraph",
        text: "There is no fixed number of vehicles at which every dealership should change systems.",
      },
      {
        type: "paragraph",
        text: "Instead, look for operational signs that your current process is becoming difficult to manage:",
      },
      {
        type: "list",
        items: [
          "Employees frequently ask for the latest stock list.",
          "Vehicle records are duplicated or incomplete.",
          "Customer enquiries are not consistently followed up.",
          "Managers struggle to establish the current status of a vehicle.",
          "Workshop and preparation records are difficult to connect to stock.",
          "Preparing management reports takes too much manual work.",
          "Business information depends heavily on one employee.",
        ],
      },
      {
        type: "paragraph",
        text: "If several of these problems are happening regularly, it may be time to evaluate dedicated software.",
      },
      { type: "heading", text: "How Car ShiftOS fits into the decision" },
      {
        type: "paragraph",
        text: "Car ShiftOS is built to help automotive businesses organise vehicle inventory, sales pipeline activity and workshop operations.",
      },
      {
        type: "paragraph",
        text: "For a dealership that has outgrown disconnected records, a dealership-focused system can provide a more structured way to manage these important areas.",
      },
      {
        type: "paragraph",
        text: "Before choosing any platform, list your current operational problems, request a demonstration and test the software against real dealership scenarios.",
      },
      { type: "heading", text: "Make the right choice for your dealership" },
      {
        type: "paragraph",
        text: "Spreadsheets are useful tools and can remain appropriate for simple tasks. But they are not always the best way to coordinate a growing dealership.",
      },
      {
        type: "paragraph",
        text: "If your team is spending too much time maintaining files, searching for information and following up manually, dedicated dealership management software may be worth considering.",
      },
      {
        type: "paragraph",
        text: "The right system should fit your business, support your actual processes and make everyday dealership operations easier to manage.",
      },
      {
        type: "faq",
        items: [
          {
            question: "Are spreadsheets good enough for a small car dealership?",
            answer:
              "Yes, spreadsheets can be a sensible starting point for a small dealership with limited stock. The challenges tend to appear as the business and its information grow.",
          },
          {
            question: "What are the signs a dealership should move beyond spreadsheets?",
            answer:
              "Frequent requests for the latest stock list, duplicated or incomplete vehicle records, enquiries not being followed up consistently, and reports taking too much manual work to prepare.",
          },
          {
            question: "What's the main advantage of dealership management software over spreadsheets?",
            answer:
              "It brings connected activities, like inventory, sales and workshop operations, together in one structured system instead of scattered across separate files that need manual version control.",
          },
        ],
      },
      {
        type: "cta",
        lead: "Ready to explore a more organised approach?",
        linkText: "See everything Car ShiftOS does",
        href: "/services",
      },
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getArticlesByDateDesc(): Article[] {
  return [...articles].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}
