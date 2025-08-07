export const resources = [
  {
    title: "Academy",
    description: "Watch lessons and courses on Devkins to boost your skills.",
    linkText: "Explore the Academy",
    imageSrc:
      "https://images.unsplash.com/photo-1732364755645-eff77a300378?q=80&w=1311&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    href: "academy",
  },
  {
    title: "Blog",
    description:
      "Explore insightful articles and tutorials to stay updated on Devkins.",
    linkText: "Read the Blog",
    imageSrc:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    href: "blog",
  },
  {
    title: "Services",
    description:
      "Explore professional services and share your creative work with others on Devkins.",
    linkText: "Discover Services",
    imageSrc:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    href: "services",
  },
];

export type SubMenuItem = {
  title: string;
  href: string;
  description?: string;
  submenu?: SubMenuItem[];
};

export type MenuItem = {
  title: string;
  href: string;
  description?: string;
  submenu?: SubMenuItem[];
};

export const faqs = [
  {
    question: "Can Devkins design a custom app & web for my business?",
    answer:
      "Yes, we provide both App Design and App Development services. Our team ensures that the design and functionality align perfectly with your business goals.",
  },
  {
    question: "Do you offer website development for eCommerce businesses?",
    answer:
      "Absolutely! We build eCommerce websites, including Shopify websites, tailored to your specific needs.",
  },
  {
    question:
      "Can Devkins improve the UX (user experience) of my current website?",
    answer:
      "Yes, our UI/UX design team specializes in enhancing websites for a better user experience and interface.",
  },
  {
    question: "Do you create video content?",
    answer:
      "Yes, we provide video editing services and can help create engaging video content for your brand.",
  },
  {
    question: "What can I find in the Devkins marketplace?",
    answer:
      "Our marketplace offers a variety of products tailored to your needs, such as templates, tools, and other creative resources.",
  },
  {
    question: "Does Devkins provide consultations?",
    answer:
      'Yes, we offer consultations to discuss your project requirements and how we can assist you.',
  },
  {
    question: "Does Devkins provide packages or custom pricing?",
    answer:
      'Yes, we offer both pre-defined packages and custom solutions based on your project requirements. Contact us to get a personalized quote.',
  },
  {
    question: "How can I get in touch with Devkins?",
    answer:
      'You can reach us through the contact form on our website or via email. Visit our "Contact Us" page for more details.',
  },
];

export const CORE_TECHNOLOGIES = [
  {
    title: "Frontend",
    technologies: [
      { name: "Next.js", description: "A React framework for building server-side rendered and static web applications.", logo: "/logos/Nextjs.png" },
      { name: "React.js", description: "A JavaScript library for building user interfaces.", logo: "/logos/react.png" },
      { name: "CSS", description: "A style sheet language for describing the presentation of a document written in HTML.", logo: "/logos/css.png" },
      { name: "JavaScript", description: "A programming language that enables dynamic interactivity on websites.", logo: "/logos/javascript.png" },
      { name: "TypeScript", description: "A strongly typed programming language that builds on JavaScript.", logo: "/logos/typescript.png" },
      { name: "Tailwind CSS", description: "A utility-first CSS framework for rapid UI development.", logo: "/logos/Tailwindcss.png" },
      // { name: "HTML", description: "The standard markup language for creating web pages.", logo: "/logos/html-logo.png" },
    ],
  },
  {
    title: "Backend",
    technologies: [
      { name: "Node.js", description: "A JavaScript runtime built on Chrome's V8 JavaScript engine.", logo: "/logos/nodejs.png" },
      { name: "Express.js", description: "A minimal and flexible Node.js web application framework.", logo: "/logos/express.png" },
      { name: "Shopify Backend", description: "Custom backend solutions for Shopify stores.", logo: "/logos/shopify.png" },
      { name: "Python", description: "A versatile programming language known for its readability and efficiency.", logo: "/logos/python.png" },
    ],
  },
  {
    title: "Mobile Development",
    technologies: [
      { name: "React Native", description: "A framework for building native apps using React.", logo: "/logos/react.png" },
    ],
  },
  {
    title: "Database",
    technologies: [
      { name: "MongoDB", description: "A NoSQL database program that uses JSON-like documents.", logo: "/logos/mongodb.png" },
      { name: "PostgreSQL", description: "An advanced, enterprise-class open-source relational database.", logo: "/logos/postgresql.png" },
      { name: "MySQL", description: "An open-source relational database management system.", logo: "/logos/mysql.png" },
      { name: "CockroachDB", description: "A distributed SQL database for building cloud-native applications.", logo: "/logos/cockroachdb.png" },
      { name: "Firebase", description: "A platform developed by Google for creating mobile and web applications.", logo: "/logos/firebase.png" },
      { name: "Supabase", description: "An open-source alternative to Firebase for building apps.", logo: "/logos/supabase.png" },
    ],
  },
  {
    title: "CMS",
    technologies: [
      { name: "Sanity", description: "A flexible content management system for structured content.", logo: "/logos/sanity.png" },
      { name: "Strapi", description: "An open-source headless CMS built on Node.js.", logo: "/logos/strapi.png" },
    ],
  },
  {
    title: "Design",
    technologies: [
      { name: "Photoshop", description: "A graphics editor for image creation and manipulation.", logo: "/logos/photoshop.png" },
      { name: "Adobe XD", description: "A vector-based user experience design tool.", logo: "/logos/adobe-xd.png" },
      { name: "Figma", description: "A collaborative interface design tool.", logo: "/logos/Figma.png" },
      { name: "Illustrator", description: "A vector graphics editor for creating illustrations and designs.", logo: "/logos/illustrator.png" },
    ],
  },
  {
    title: "Tools",
    technologies: [
      { name: "GitHub", description: "A platform for version control and collaboration.", logo: "/logos/github.png" },
      { name: "Excel", description: "A spreadsheet application for data organization and analysis.", logo: "/logos/excel.png" },
      { name: "QuickBooks", description: "An accounting software package for small and medium-sized businesses.", logo: "/logos/quickbooks.png" },
      { name: "Camtasia", description: "A video editing software for creating tutorials and presentations.", logo: "/logos/camtasia.png" },
    ],
  },
];


export interface Service {
  id: string;
  label: string;
}

export const services: Service[] = [
  { id: "website-design", label: "Website design" },
  { id: "ux-design", label: "UX design" },
  { id: "user-research", label: "User research" },
  { id: "content-creation", label: "Content creation" },
  { id: "strategy-consulting", label: "Strategy & consulting" },
  { id: "other", label: "Other" },
];

export const countries = [
  { code: "US", name: "United States" },
  { code: "UK", name: "United Kingdom" },
  { code: "CA", name: "Canada" },
  { code: "AU", name: "Australia" },
  { code: "IN", name: "India" },
  { code: "DE", name: "Germany" },
  { code: "FR", name: "France" },
  { code: "JP", name: "Japan" },
  { code: "CN", name: "China" },
  { code: "RU", name: "Russia" },
  { code: "BR", name: "Brazil" },
  { code: "ZA", name: "South Africa" },
  { code: "NG", name: "Nigeria" },
  { code: "MX", name: "Mexico" },
  { code: "ES", name: "Spain" },
  { code: "IT", name: "Italy" },
  { code: "KR", name: "South Korea" },
  { code: "AR", name: "Argentina" },
  { code: "TR", name: "Turkey" },
  { code: "SA", name: "Saudi Arabia" },
  { code: "AE", name: "United Arab Emirates" },
  { code: "SG", name: "Singapore" },
  { code: "NZ", name: "New Zealand" },
  { code: "PH", name: "Philippines" },
  { code: "ID", name: "Indonesia" },
  { code: "MY", name: "Malaysia" },
  { code: "TH", name: "Thailand" },
  { code: "VN", name: "Vietnam" },
  { code: "EG", name: "Egypt" },
  { code: "PK", name: "Pakistan" },
  { code: "BD", name: "Bangladesh" },
  { code: "PL", name: "Poland" },
  { code: "NO", name: "Norway" },
  { code: "FI", name: "Finland" },
  { code: "DK", name: "Denmark" },
  { code: "BE", name: "Belgium" },
  { code: "AT", name: "Austria" },
  { code: "GR", name: "Greece" },
  { code: "PT", name: "Portugal" },
  { code: "IL", name: "Israel" },
  { code: "HK", name: "Hong Kong" },
  { code: "IE", name: "Ireland" },
  { code: "SE", name: "Sweden" },
  { code: "CH", name: "Switzerland" },
  { code: "NL", name: "Netherlands" },
];

export interface Testimonial {
  id: number;
  name: string;
  role?: string;
  country: string; // New property for country
  content: string;
  rating: number;
  repeated?: boolean; // Indicates if a testimonial is repeated
}


export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "elitebookkeeper",
    role: "Client",
    country: "United States",
    content:
      "Devkins' work was outstanding; the team is professional and truly exceeded my expectations. Freakin' Awesome! 👍",
    rating: 5,
    repeated: false,
  },
  {
    id: 2,
    name: "dgwage",
    role: "Client",
    country: "United States",
    content:
      "Devkins did a wonderful job. The professionalism and attention to detail were outstanding, and the proactive communication made the process smooth. They went above and beyond, delivering way ahead of time - I would certainly reorder again! 😊",
    rating: 5,
    repeated: false,
  },
  {
    id: 3,
    name: "kaseb_daco",
    role: "Client",
    country: "Saudi Arabia",
    content: "Thanks a lot for your good work.",
    rating: 5,
    repeated: false,
  },
  {
    id: 4,
    name: "igurumarketing",
    role: "Client",
    country: "United States",
    content: "Fantastic work and did a wonderful job with requested edits.",
    rating: 5,
    repeated: false,
  },
  {
    id: 6,
    name: "tomwigger",
    role: "Client",
    country: "Thailand",
    content: "Everything ok.",
    rating: 4,
    repeated: false,
  },
  {
    id: 7,
    name: "marlonlima827",
    role: "Client",
    country: "Brazil",
    content: "Devkins has great technical capabilities.",
    rating: 5,
    repeated: false,
  },
  {
    id: 8,
    name: "noahben2013",
    role: "Client",
    country: "Canada",
    content:
      "Very great job. I made a couple of errors in instructions and added something I forgot and Devkins was happy to accommodate me. Highly recommend!",
    rating: 5,
    repeated: false,
  },
  {
    id: 9,
    name: "victorkersting",
    role: "Client",
    country: "United States",
    content: "Good, very good.",
    rating: 5,
    repeated: false,
  },
  {
    id: 10,
    name: "kimvillegas985",
    role: "Client",
    country: "United States",
    content: "Fast delivery.",
    rating: 5,
    repeated: false,
  },
  {
    id: 11,
    name: "gaby7700",
    role: "Client",
    country: "United States",
    content:
      "Devkins did excellent work! They're very professional and know what they're doing. Highly recommended!",
    rating: 5,
    repeated: false,
  },
  {
    id: 12,
    name: "yveslupitu",
    role: "Client",
    country: "Germany",
    content:
      "Devkins did again fantastic work. 5 Stars. I can only highly recommend them.",
    rating: 5,
    repeated: true,
  },
  {
    id: 13,
    name: "jennyswanson42",
    role: "Client",
    country: "United States",
    content: "Looks great! Exactly as needed. Repeated customer. Many thanks!",
    rating: 5,
    repeated: true,
  },
  {
    id: 14,
    name: "yveslupitu",
    role: "Client",
    country: "Germany",
    content:
      "Devkins is very professional and very skilled. They know their work perfectly. I can only recommend them. I will continue to work with them.",
    rating: 5,
    repeated: true,
  },
  {
    id: 15,
    name: "prodigiouslife",
    role: "Client",
    country: "Mexico",
    content: "Thank you!",
    rating: 5,
    repeated: false,
  },
  {
    id: 16,
    name: "jack_nnn",
    role: "Client",
    country: "Singapore",
    content:
      "Work done was as requested and delivered even quicker than promised. Subsequent revisions were quickly completed too. Thanks!",
    rating: 5,
    repeated: false,
  },
  {
    id: 17,
    name: "minhcuongnguyen",
    role: "Client",
    country: "Belgium",
    content:
      "In a recent collaboration with Devkins, I was thoroughly impressed by their exceptional expertise, commitment to timely delivery, and professional communication. They completed the project well within the agreed-upon timeline. I highly recommend their services for any related projects due to their outstanding work quality, punctuality, and dedication to client satisfaction.",
    rating: 5,
    repeated: false,
  },
  {
    id: 18,
    name: "tomwigger",
    role: "Client",
    country: "Thailand",
    content:
      "Very good work! Exactly, quick revision and understanding of the problem. Perfectly solved. Thanks very much for this great work!",
    rating: 5,
    repeated: true,
  },
  {
    id: 19,
    name: "tomwigger",
    role: "Client",
    country: "Thailand",
    content: "Perfect and quick work. Very happy. Always again. Thanks.",
    rating: 5,
    repeated: true,
  },
  {
    id: 20,
    name: "benjamincamp129",
    role: "Client",
    country: "Australia",
    content:
      "Very helpful and quick to respond, a no-nonsense approach, and was very clear to interact with. Quickly completed a task that another freelancer claimed we couldn’t do. Highly recommend to other users.",
    rating: 4.7,
    repeated: false,
  },
  {
    id: 21,
    name: "tomwigger",
    role: "Client",
    country: "Thailand",
    content:
      "This was the first order, but not the last. Quick and good work. Always again!",
    rating: 5,
    repeated: true,
  },
  {
    id: 22,
    name: "jennyswanson42",
    role: "Client",
    country: "United States",
    content:
      "Thank you for your dedication, time, and attention. Happy with your work! 🙌",
    rating: 5,
    repeated: true,
  },
  {
    id: 23,
    name: "shivneel03",
    role: "Client",
    country: "Fiji",
    content:
      "Incredibly good service. Devkins is very patient. Made multiple edits instantly as per my requirements and got the job done as per my expectation. Highly recommended.",
    rating: 5,
    repeated: false,
  },
  {
    id: 24,
    name: "hjk1966",
    role: "Client",
    country: "United Kingdom",
    content:
      "Brilliant. Very responsive and delivered a great result. Was responsive with revisions - very polite and helpful.",
    rating: 5,
    repeated: false,
  },
  {
    id: 25,
    name: "mfbron13",
    role: "Client",
    country: "United States",
    content:
      "Great working with Devkins, quality product delivered for my project!",
    rating: 5,
    repeated: false,
  },
  {
    id: 26,
    name: "michaeltheod152",
    role: "Client",
    country: "Australia",
    content:
      "Devkins did an outstanding job on my project, demonstrating exceptional professionalism and an eye for detail that truly exceeded my expectations. Working with them was a breeze, thanks to their politeness, deep understanding, and high level of cooperation. 👍 Definitely recommend for any data processing needs!",
    rating: 5,
    repeated: false,
  },
  {
    id: 27,
    name: "michaeltheod152",
    role: "Client",
    country: "Australia",
    content:
      "Devkins truly went above and beyond in delivering exceptional work with meticulous attention to detail and unmatched professionalism. It was a pleasure collaborating with someone so fluent in communication and highly cooperative—an expert with a profound understanding of the task. Highly recommended! 👍",
    rating: 5,
    repeated: true,
  },
  {
    id: 28,
    name: "mbrell",
    role: "Client",
    country: "N/A",
    content:
      "Understood the assignment asked. Completed within the time frame. Good prices... thank you.",
    rating: 5,
    repeated: false,
  },
  {
    id: 29,
    name: "mp1213",
    role: "Client",
    country: "United Kingdom",
    content:
      "Everything from start to finish was spot on. Delivered exactly as they said they would, never disappoints. I highly recommend, A++ service. I certainly will be back.",
    rating: 5,
    repeated: false,
  },
  {
    id: 30,
    name: "crystalball339",
    role: "Client",
    country: "Canada",
    content:
      "I really appreciate that we were able to work out the details with ease of communication. The video demonstrations of the revisions made for an easy understanding of the function of the workbook. Thank you for your time and patience.",
    rating: 5,
    repeated: false,
  },
  {
    id: 31,
    name: "psillc",
    role: "Client",
    country: "United States",
    content: "I was super happy with the work that was completed. Thanks much.",
    rating: 4.7,
    repeated: false,
  },
  {
    id: 32,
    name: "john_nabereznyj",
    role: "Client",
    country: "Canada",
    content:
      "Devkins was so easy to work with, delivered exactly what I needed and very quickly. Will reach out to them again with my next project!",
    rating: 5,
    repeated: false,
  },
];