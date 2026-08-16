import { routes } from '@/config/routes'
import type { FaqItem } from '@/types/faq'
import type { ServiceCapability, ServiceKey } from '@/types/service'

export type { FaqItem, ServiceCapability, ServiceKey }

export type ServiceFaq = FaqItem

export type ServicePageContent = {
  key: ServiceKey
  path: string
  eyebrow: string
  headline: string
  intro: string
  pitchTitle: string
  pitchBody: string
  capabilitiesTitle: string
  capabilities: ServiceCapability[]
  trustPoints: string[]
  faqsTitle: string
  faqs: FaqItem[]
  ctaHeadline: string
}

export const servicePages: Record<ServiceKey, ServicePageContent> = {
  branding: {
    key: 'branding',
    path: routes.branding,
    eyebrow: 'Branding',
    headline: 'A branding agency you can trust.',
    intro:
      'We create brands you are proud of and want to shout about — from strategy and identity through to guidelines and rollout.',
    pitchTitle: 'Creating a brand is not just logo design.',
    pitchBody:
      "It's everything your audience comes into contact with: your website, marketing material, print, merch and more. Each time someone meets your brand, the visual and the message should feel consistent. We listen to who you are so we can communicate that clearly to your audience.",
    capabilitiesTitle: 'What we can help you with',
    capabilities: [
      {
        name: 'Brand Strategy',
        description: 'In-depth industry and competitor research to see where you currently sit.',
      },
      {
        name: 'Brand Design',
        description: 'Logo design, typography, colour, placement and iconography.',
      },
      {
        name: 'Brand Guidelines',
        description: 'Guidance on how to use your brand so it stays consistent everywhere.',
      },
      {
        name: 'Brand Tone of Voice',
        description: 'Make sure the impression you give through visual and written content is the right one.',
      },
      {
        name: 'Brand Implementation',
        description: 'Creative assets such as business cards, print, t-shirts and anything with your brand on it.',
      },
      {
        name: 'Brand Repositioning',
        description: 'Has your business grown but the brand been left behind? Make sure you target the right audience.',
      },
    ],
    trustPoints: [
      'Every brand project handled in-house',
      'Flexible payment plans available',
      'Regular updates during the project',
      'A team of experts to help your brand grow',
    ],
    faqsTitle: 'Frequently asked branding questions',
    faqs: [
      {
        question: 'Why use Northern Digital for my branding project?',
        answer:
          "We create a brand that you're proud of and want to shout about. Branding isn't just about a logo — it's about creating a story with the right visual impact, speaking with one voice across all platforms, and designing for every application.",
      },
      {
        question: 'What separates Northern Digital from other design agencies?',
        answer:
          'We dig deep to understand who you are, what you offer and who your audience is. We define problems and create effective solutions with the correct tone of voice and visual impact across online and offline advertising.',
      },
      {
        question: 'How much does branding cost?',
        answer:
          "We don't have set project prices. Every brand design has different requirements. Once we've received the brief, we can give you an indication of the cost and timescale.",
      },
      {
        question: 'What branding services do you offer?',
        answer:
          'We offer research and strategy, brand design, brand guidelines, implementation and more — supporting the whole process through to launch and beyond.',
      },
      {
        question: 'We have a limited budget — will you still work with us?',
        answer:
          'We want to work with clients who share the same vision. The easiest way to find out if a project is possible is to tell us your budget — we can advise on the best way to spend it.',
      },
    ],
    ctaHeadline: 'Do you like what you see?',
  },

  webDesign: {
    key: 'webDesign',
    path: routes.webDesign,
    eyebrow: 'Web Design',
    headline: 'A web design studio that delivers.',
    intro:
      'Honest advice, industry experience and a strong portfolio. UI/UX, wireframes, research and development — we understand all areas of web design.',
    pitchTitle: 'Beautiful, easy-to-use websites that are functional.',
    pitchBody:
      "We don't just build pretty websites. We understand design through development and testing, to SEO and hosting. We tailor our service to the client and the project — startups through to established brands, in the UK or worldwide.",
    capabilitiesTitle: 'Our website capabilities',
    capabilities: [
      {
        name: 'Web Design',
        description: 'Bespoke web design perfect for your brand and target audience.',
      },
      {
        name: 'eCommerce',
        description: 'Sell products online 24/7 through a well-designed, easy-to-use store.',
      },
      {
        name: 'UX Design',
        description: 'Meaningful, relevant experiences through thoughtful user experience design.',
      },
      {
        name: 'Responsive Design',
        description: 'Designed for all the latest devices, including phones and tablets.',
      },
      {
        name: 'Wireframes',
        description: "Visualising a website's proposed structure, functions and content.",
      },
      {
        name: 'Strategy',
        description: 'Looking at the now and the future to plan for growth.',
      },
    ],
    trustPoints: [
      'Every project handled in-house — we don’t outsource',
      'Craft CMS Verified Partner approach',
      'Long-term relationships, not one-off builds',
      'Compatible with any screen size',
    ],
    faqsTitle: 'The answers to your questions',
    faqs: [
      {
        question: 'How long does it take to build a website?',
        answer:
          'Timelines depend on the spec. As a guide: Shopify projects usually take around four weeks; Craft CMS projects a minimum of five weeks; Craft Commerce projects a minimum of eight weeks.',
      },
      {
        question: 'What size companies do you produce web designs for?',
        answer:
          'We work with ambitious startups and large organisations. We tailor our services to suit your needs.',
      },
      {
        question: 'Do you redesign existing websites?',
        answer:
          "Yes. We'll look at your current site, outline what needs improving, and give you the option to redesign or start from scratch.",
      },
      {
        question: 'Do you work internationally?',
        answer:
          'Yes — we work with companies all over the world using Slack, Zoom and other tools to communicate seamlessly from start to finish.',
      },
      {
        question: 'Do you offer ongoing help once the site launches?',
        answer:
          'We offer ongoing support to help with website needs. Sites are built so you can add, edit and update content yourself.',
      },
    ],
    ctaHeadline: 'Ready to start your website?',
  },

  seo: {
    key: 'seo',
    path: routes.seo,
    eyebrow: 'Search Engine Optimisation',
    headline: 'Looking for an SEO partner?',
    intro:
      'SEO matters if your website is a tool to generate business. We build campaigns that suit your goals — whether you want to outrank competitors or win more local customers.',
    pitchTitle: 'An SEO team that understands SEO from all angles.',
    pitchBody:
      'Technical SEO, link building, content and digital PR — your campaign gets a bespoke strategy based on research. Because we also design and develop websites, technical improvements and SEO work hand in hand.',
    capabilitiesTitle: 'What we can help you with',
    capabilities: [
      {
        name: 'Link Building',
        description: 'Increasing the number and quality of inbound links to improve rankings.',
      },
      {
        name: 'Digital PR',
        description: 'Working with journalists, bloggers and influencers for high-quality mentions and backlinks.',
      },
      {
        name: 'On-Site Content',
        description: 'Relevant, targeted content so users stay and search engines can rank you.',
      },
      {
        name: 'Blogging',
        description: 'Fresh, useful posts that target a wider range of keywords over time.',
      },
      {
        name: 'Page Performance',
        description: 'Code, images and server setup improvements that support search visibility.',
      },
      {
        name: 'Meta Data',
        description: 'Titles, descriptions and keywords based on proper keyword research.',
      },
      {
        name: 'Keyword Research',
        description: 'Finding terms that work for your business based on volume and difficulty.',
      },
      {
        name: 'Thought Leadership',
        description: 'Positioning you as an expert to earn links, trust and brand recognition.',
      },
    ],
    trustPoints: [
      'Bespoke strategy based on research',
      'Technical SEO plus content and PR',
      'Collaboration between SEO and development',
      'Startups through to global organisations',
    ],
    faqsTitle: 'The answers to your questions',
    faqs: [
      {
        question: 'What is SEO?',
        answer:
          'SEO stands for Search Engine Optimisation — increasing the quantity and quality of traffic to your website through organic search results.',
      },
      {
        question: 'Why is SEO important?',
        answer:
          'If your website generates business, SEO cannot be ignored. We help businesses compete in competitive spaces and smaller firms seeking local customers.',
      },
      {
        question: 'How much does SEO cost?',
        answer:
          "We don't have set SEO prices. Every brief has different requirements. Once we've received the brief, we can indicate cost and timescale.",
      },
      {
        question: 'Can you help me rank high in Google?',
        answer:
          'Yes. Whether that is technical SEO, link building, content or digital PR, your campaign will have a research-led strategy.',
      },
      {
        question: 'How long does it take to see results from SEO?',
        answer:
          'Technical changes can be picked up relatively quickly, but we advise a consistent strategy over a longer period for lasting results.',
      },
    ],
    ctaHeadline: 'Ready to improve your rankings?',
  },

  craftCms: {
    key: 'craftCms',
    path: routes.craftCms,
    eyebrow: 'Craft CMS',
    headline: 'The Craft CMS developers you’ve been looking for.',
    intro:
      "We don't like putting restrictions on what you can do with your own website. Craft CMS puts you in control so you can update content quickly and focus on the rest of your business.",
    pitchTitle: 'Design and build without boundaries.',
    pitchBody:
      'As Craft CMS specialists, we build SEO-friendly, aesthetically pleasing sites you are proud to shout about. Every Craft CMS and Craft Commerce project is handled in-house — no outsourcing.',
    capabilitiesTitle: 'Our Craft CMS capabilities',
    capabilities: [
      {
        name: 'Craft CMS Websites',
        description: 'Design, development, responsive build and testing — full process, any scale.',
      },
      {
        name: 'WordPress Migrations',
        description: 'Migrate your existing website from WordPress to Craft CMS.',
      },
      {
        name: 'Craft CMS Hosting',
        description: 'Server setup, deployments and hosting maintenance done properly.',
      },
      {
        name: 'Craft CMS Multisite',
        description: 'Publish content across multiple websites through shared templates.',
      },
      {
        name: 'Craft Maintenance',
        description: 'Keep your Craft CMS website up to date and error-free.',
      },
      {
        name: 'Multilingual Websites',
        description: 'Perfect for sites that need different languages.',
      },
    ],
    trustPoints: [
      'SEO-friendly Craft CMS websites',
      'Clear communication throughout the project',
      'Support after launch',
      'Flexible payment plans available',
    ],
    faqsTitle: 'Craft CMS frequently asked questions',
    faqs: [
      {
        question: 'How easy is it for me to change content myself?',
        answer:
          'Very easy. We build every site so you can add, edit and remove content quickly. Adding content should not be stressful — and you can create new pages yourself.',
      },
      {
        question: "I'm familiar with WordPress, but not Craft CMS",
        answer:
          "We provide training on how to manage content. If you've used WordPress before, you'll find Craft CMS flexible and often easier.",
      },
      {
        question: "What's so special about Craft CMS?",
        answer:
          'Our developers can build your website with no limits on design, development, PHP, content, JavaScript or commerce.',
      },
      {
        question: 'What is a CMS?',
        answer:
          'CMS stands for Content Management System. It lets people with little online experience still create and change website content through simple editors and fields.',
      },
      {
        question: 'Who uses Craft CMS?',
        answer:
          'Global brands such as Netflix, Ikea, Sonos and Wrangler use Craft CMS — as well as organisations that need flexible, secure content platforms.',
      },
    ],
    ctaHeadline: 'Ready to build on Craft CMS?',
  },

  shopify: {
    key: 'shopify',
    path: routes.shopify,
    eyebrow: 'Shopify',
    headline: 'A Shopify agency you can trust.',
    intro:
      'Shopify is a fast, approachable ecommerce option. Our team can build a custom store with the features you need — often within around four weeks.',
    pitchTitle: 'The features you want, none of the hassle.',
    pitchBody:
      'Shopify makes it easy to build and manage your online store from one dashboard — orders, shipping, payments and marketing tools included. We give independent businesses a store that looks right and sells well.',
    capabilitiesTitle: 'What we can help you with',
    capabilities: [
      {
        name: 'Web Design',
        description: 'Visually strong, on-brand storefronts built for conversion.',
      },
      {
        name: 'eCommerce',
        description: 'Online stores tailored to how you sell and fulfil.',
      },
      {
        name: 'UX Design',
        description: 'Clear journeys that help customers browse, trust and buy.',
      },
      {
        name: 'Responsive Design',
        description: 'Mobile-ready shopping experiences across devices.',
      },
      {
        name: 'Wireframes',
        description: 'Structure and flow agreed before build so the store feels intentional.',
      },
      {
        name: 'Strategy',
        description: 'Choosing the right Shopify setup for growth, apps and operations.',
      },
    ],
    trustPoints: [
      'Custom Shopify stores in around four weeks',
      'Built-in mobile commerce shopping cart',
      'Manage inventory and orders on the go',
      'Integrations with third-party apps when you need them',
    ],
    faqsTitle: 'The answers to your questions',
    faqs: [
      {
        question: 'What is Shopify?',
        answer:
          'Shopify is a commerce platform that lets anyone set up an online store and sell products — with hosting, payments and tools included.',
      },
      {
        question: 'Is Northern Digital the right Shopify agency for me?',
        answer:
          'If you want a custom store with built-in features and the option to integrate third-party apps, we can help from design through launch.',
      },
      {
        question: 'Why choose Shopify?',
        answer:
          'It is a practical ecommerce option with a short path to launch. We can often deliver a fully functional custom Shopify store within four weeks.',
      },
      {
        question: 'What are the USPs of Shopify?',
        answer:
          'One platform to sell anywhere, a single dashboard for orders and payments, marketing tools, mobile commerce and strong security including SSL.',
      },
      {
        question: 'Can you show me Shopify websites you’ve built?',
        answer:
          'Yes — take a look at our work section for ecommerce and Shopify projects, or get in touch and we will share relevant examples.',
      },
    ],
    ctaHeadline: 'Start your Shopify store with us',
  },
}

export const serviceKeys = Object.keys(servicePages) as ServiceKey[]
