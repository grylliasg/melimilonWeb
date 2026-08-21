/**
 * Central data module. No backend/API — all content is static and typed.
 * Used by: AppContext (learningTips), Navbar/Footer (pageLinks, socialLinks),
 * Services (services), Tours (tours).
 */
import type {
  LearningTip,
  PageLinkItem,
  SocialLinkItem,
  ServiceItem,
  TourItem,
} from "./types";

/** Learning tips for the educational banner (Context API demo) */
export const learningTips: LearningTip[] = [
  {
    id: 1,
    title: "Components",
    description:
      "Reusable UI pieces. This page is built from small components.",
  },
  {
    id: 2,
    title: "Context API",
    description:
      "Share state without prop drilling. Theme and tips use context.",
  },
  {
    id: 3,
    title: "Hooks",
    description:
      "useState, useEffect, custom hooks. Navbar uses useState for the menu.",
  },
  {
    id: 4,
    title: "TypeScript",
    description:
      "Types for props and state. Check the .tsx files for interfaces.",
  },
];

/** Navigation and footer link entries (anchor href + label) */
export const pageLinks: PageLinkItem[] = [
  { id: 1, href: "#home", text: "αρχικη" },
  { id: 2, href: "#about", text: "σχετικα" },
  { id: 3, href: "#services", text: "γλυκα του κουταλιου" },
  { id: 4, href: "#tours", text: "λικερ" },
];

/** Social media links with Font Awesome icon classes */
export const socialLinks: SocialLinkItem[] = [
  { id: 1, href: "https://www.instagram.com/melimilon_sweets?igsi=aDR3ZWpzamF2Z3U0", icon: "fab fa-instagram" }
  ,
  {
    id: 2,
    href: "tel:+306984213971", // Αντικατάστησε με τον αριθμό σου (με το +30 μπροστά)
    icon: "fas fa-phone" // Ή "fas fa-mobile-alt" για εικονίδιο κινητού
  }
];

/** Services section content */
export const services: ServiceItem[] = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "Γλυκό καρπούζι",
    text: "Get the best rates on group tours and early-bird discounts. We pass the savings on to you.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: "From mountain trails to coastal paths, explore stunning landscapes with expert local guides.",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: "Travel in comfort with handpicked stays and hassle-free logistics from start to finish.",
  },
];

/** Featured tours - images live in public/images/ so use root paths */
export const tours: TourItem[] = [
  {
    id: 1,
    image: "/images/karpouzi.jpeg",
    date: "",
    title: "Γλυκό Καρπούζι",
    info: "Αν υπάρχει ένα γλυκό που κλέβει πάντα την παράσταση και αποτελεί την απόλυτη αγαπημένη γεύση (το αδιαμφισβήτητο No 1!), αυτό είναι σίγουρα το γλυκό καρπούζι!",
    location: "Άρτα, Ήπειρος",
    duration: 5,
    cost: 10,
    slogan: "Στην κορυφή το θρυλικό γλυκό καρπούζι!",
  },
  {
    id: 2,
    image: "/images/tour-2.jpeg",
    date: "october 1th, 2020",
    title: "best of java",
    info: "Rice terraces, volcanoes, and vibrant culture. Experience the heart of Indonesia with temples, coffee farms, and jungle treks.",
    location: "indonesia",
    duration: 11,
    cost: 1400,
    slogan: "Island of Wonders",
  },
  {
    id: 3,
    image: "/images/tour-3.jpeg",
    date: "september 15th, 2020",
    title: "explore hong kong",
    info: "Skyline views, street food, and hidden trails. Mix urban buzz with mountain hikes and harbour nights.",
    location: "hong kong",
    duration: 8,
    cost: 5000,
    slogan: "East Meets West",
  },
  {
    id: 4,
    image: "/images/tour-4.jpeg",
    date: "december 5th, 2019",
    title: "kenya highlights",
    info: "Safari drives, Maasai culture, and the Great Rift Valley. Witness the great migration and iconic African wildlife.",
    location: "kenya",
    duration: 20,
    cost: 3300,
    slogan: "Safari Dreams",
  },
  {
    id: 5,
    image: "/images/tour-5.jpeg",
    date: "march 12th, 2021",
    title: "safari adventure",
    info: "Get up close to elephants, lions, and rhinos in the wild. Game drives at dawn and dusk with expert trackers.",
    location: "tanzania",
    duration: 9,
    cost: 2800,
    slogan: "Wild & Free",
  },
  {
    id: 6,
    image: "/images/tour-6.jpeg",
    date: "june 8th, 2021",
    title: "coastal explorer",
    info: "Beaches, reefs, and coastal villages. Snorkelling, sailing, and sunset dinners by the sea.",
    location: "thailand",
    duration: 14,
    cost: 1950,
    slogan: "Sun, Sea & Sand",
  },
];
