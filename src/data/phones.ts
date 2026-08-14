import pixel11Frost from "@/assets/pixel-11-frost.png";
import pixel11Pistachio from "@/assets/pixel-11-pistachio.png";
import pixel11Hibiscus from "@/assets/pixel-11-hibiscus.png";
import pixel11Obsidian from "@/assets/pixel-11-obsidian.png";

import pixel11ProCanyon from "@/assets/pixel-11-pro-canyon.png";
import pixel11ProOlive from "@/assets/pixel-11-pro-olive.png";
import pixel11ProFog from "@/assets/pixel-11-pro-fog.png";
import pixel11ProObsidian from "@/assets/pixel-11-pro-obsidian.png";
import pixel11ProFoldOlive from "@/assets/pixel-11-pro-fold-olive.png";


import pixel10 from "@/assets/pixel-10.png";
import pixel10Pro from "@/assets/pixel-10-pro.jpg"; // kept import for potential future use
import pixel10Frost from "@/assets/pixel-10-frost.png";
import pixel10Indigo from "@/assets/pixel-10-indigo.webp";
import pixel10Lemongrass from "@/assets/pixel-10-lemongrass.png";
import pixel10Obsidian from "@/assets/pixel-10-obsidian.png";
import pixel10ProFoldMoonstone from "@/assets/pixel-10-pro-fold-moonstone.png";
import pixel10ProFold from "@/assets/pixel-10-pro-fold.png";
import pixel10ProXl from "@/assets/pixel-10-pro-xl.png";
import pixel10ProXlJade from "@/assets/pixel-10-pro-xl-jade.png";
import pixel10ProXlMoonstone from "@/assets/pixel-10-pro-xl-moonstone.png";
import pixel10ProXlObsidian from "@/assets/pixel-10-pro-xl-obsidian.png";
import pixel10ProXlPorcelain from "@/assets/pixel-10-pro-xl-porcelain.png";
import pixel10a from "@/assets/pixel-10a.png";
import pixel10aBerry from "@/assets/pixel-10a-berry.webp";
import pixel10aFog from "@/assets/pixel-10a-fog.webp";
import pixel10aLavender from "@/assets/pixel-10a-lavender.webp";
import pixel10aObsidian from "@/assets/pixel-10a-obsidian.webp";

export interface ColorOption {
  name: string;
  hex: string;
  image?: string;
}

export interface StorageOption {
  size: string;
  price: number;
}

export interface Phone {
  id: string;
  name: string;
  slug: string;
  price: number;
  originalPrice?: number;
  gstRate: number;
  shortDesc: string;
  description: string;
  image: string;
  color: string;
  colors: ColorOption[];
  storageOptions?: StorageOption[];
  category: "flagship" | "mid-range" | "foldable";
  tag?: string;
  specs: {
    display: string;
    camera: string;
    battery: string;
    processor: string;
    ram: string;
    storage: string;
    os: string;
    ai: string;
  };
  features: string[];
  rating: number;
  reviews: number;
  externalUrl?: string;
}

export const formatPrice = (price: number) =>
  "₹" + price.toLocaleString("en-IN");

export const formatGst = (price: number, rate: number) =>
  formatPrice(Math.round(price * rate / 100));

export const formatPriceWithGst = (price: number, rate: number) =>
  formatPrice(Math.round(price * (1 + rate / 100)));

export const phones: Phone[] = [
  {
    id: "pixel-11",
    name: "Google Pixel 11",
    slug: "pixel-11",
    price: 82999,
    gstRate: 18,
    shortDesc: "Refined to the edge. Powered by Tensor G6 and Gemini.",
    description:
      "Google Pixel 11 brings refined hardware built to last, upgraded cameras and more proactive Gemini support — powered by the new Google Tensor G6 chip. A slimmer camera bar, brighter Actua display, satin metal frame and the fastest Pixel charging yet.",
    image: pixel11Frost,
    color: "Frost",
    colors: [
      { name: "Frost", hex: "#C3C6E0", image: pixel11Frost },
      { name: "Pistachio", hex: "#B7B47E", image: pixel11Pistachio },
      { name: "Hibiscus", hex: "#D6006E", image: pixel11Hibiscus },
      { name: "Obsidian", hex: "#353837", image: pixel11Obsidian },
    ],
    storageOptions: [
      { size: "256GB", price: 82999 },
      { size: "512GB", price: 97999 },
    ],
    category: "flagship",
    tag: "New Launch",
    specs: {
      display: '6.3" Actua OLED, 120Hz, 3,000 nits',
      camera: "48MP wide + 13MP ultrawide + 10.8MP 5x telephoto",
      battery: "4,985 mAh, 30W wired + 25W Qi2.2 wireless",
      processor: "Google Tensor G6",
      ram: "12 GB",
      storage: "256 GB",
      os: "Android 17",
      ai: "Gemini Nano with Gemini Intelligence",
    },
    features: [
      "Tensor G6 with Gemini Intelligence",
      "40% slimmer camera bar",
      "Titan M3 security chip",
      "Pixelsnap + Qi 2.2 25W wireless charging",
      "HiLight camera flash notifications",
      "7 years of updates",
    ],
    rating: 4.9,
    reviews: 412,
  },
  {
    id: "pixel-11-pro",
    name: "Google Pixel 11 Pro",
    slug: "pixel-11-pro",
    price: 109999,
    gstRate: 18,
    shortDesc: "Pro power in 6.3\". Tensor G6, 120x Pro Zoom and Gemini Intelligence.",
    description:
      "Google Pixel 11 Pro packs pro-grade cameras, a Super Actua display and the Tensor G6 chip into a compact 6.3\" body. With Gemini Intelligence, HiLight notifications, polished metal frame and 7 years of updates, it is built for business from day one.",
    image: pixel11ProCanyon,
    color: "Canyon",
    colors: [
      { name: "Canyon", hex: "#E8A08C", image: pixel11ProCanyon },
      { name: "Olive", hex: "#8B8F63", image: pixel11ProOlive },
      { name: "Fog", hex: "#CBDCD3", image: pixel11ProFog },
      { name: "Obsidian", hex: "#3A3A3C", image: pixel11ProObsidian },
    ],
    storageOptions: [
      { size: "256GB", price: 109999 },
      { size: "512GB", price: 119999 },
    ],
    category: "flagship",
    tag: "New Launch",
    specs: {
      display: '6.3" Super Actua OLED, 120Hz, 3,000 nits',
      camera: "50MP wide + 48MP ultrawide + 48MP telephoto, 120x Pro Zoom",
      battery: "4,870 mAh, 30W wired + 25W Qi2.2 wireless",
      processor: "Google Tensor G6",
      ram: "12 GB",
      storage: "256 GB",
      os: "Android 17",
      ai: "Gemini Intelligence with Gemini Nano",
    },
    features: [
      "Tensor G6 with up to 50% more compute",
      "Pro Zoom up to 120x",
      "HiLight camera bar notifications",
      "Titan M3 security chip",
      "Pixelsnap + Qi 2.2 wireless charging",
      "7 years of updates",
    ],
    rating: 4.9,
    reviews: 186,
  },
  {
    id: "pixel-11-pro-xl",
    name: "Google Pixel 11 Pro XL",
    slug: "pixel-11-pro-xl",
    price: 124999,
    gstRate: 18,
    shortDesc: "Maximum 6.8\" screen, maximum battery, the ultimate Pro experience.",
    description:
      "Google Pixel 11 Pro XL brings the same pro-grade triple camera, 120x Pro Zoom and Tensor G6 performance to a larger 6.8\" Super Actua display with a bigger battery — the most immersive Pixel for work and multitasking.",
    image: pixel11ProObsidian,
    color: "Obsidian",
    colors: [
      { name: "Obsidian", hex: "#3A3A3C", image: pixel11ProObsidian },
      { name: "Canyon", hex: "#E8A08C", image: pixel11ProCanyon },
      { name: "Olive", hex: "#8B8F63", image: pixel11ProOlive },
      { name: "Fog", hex: "#CBDCD3", image: pixel11ProFog },
    ],
    storageOptions: [
      { size: "256GB", price: 124999 },
      { size: "512GB", price: 134999 },
    ],
    category: "flagship",
    tag: "New Launch",
    specs: {
      display: '6.8" Super Actua OLED, 120Hz, 3,000 nits',
      camera: "50MP wide + 48MP ultrawide + 48MP telephoto, 120x Pro Zoom",
      battery: "5,200 mAh, 45W wired + 25W Qi2.2 wireless",
      processor: "Google Tensor G6",
      ram: "16 GB",
      storage: "256 GB",
      os: "Android 17",
      ai: "Gemini Intelligence with Gemini Nano",
    },
    features: [
      "Largest Super Actua display",
      "Pro Zoom up to 120x",
      "8K video recording",
      "HiLight camera bar notifications",
      "Titan M3 security chip",
      "7 years of updates",
    ],
    rating: 4.9,
    reviews: 214,
  },
  {
    id: "pixel-11-pro-fold",
    name: "Google Pixel 11 Pro Fold",
    slug: "pixel-11-pro-fold",
    price: 179999,
    gstRate: 18,
    shortDesc: "Unfold extraordinary. The most powerful Pixel for multitasking.",
    description:
      "Google Pixel 11 Pro Fold opens to a large Super Actua Flex inner display with matte platinum metal edges and Tensor G6 inside. Split-screen multitasking, tabletop mode and the Pixel Camera folded in — built to handle years of folding.",
    image: pixel11ProFoldOlive,
    color: "Olive",
    colors: [
      { name: "Olive", hex: "#8B8F63", image: pixel11ProFoldOlive },
    ],
    storageOptions: [
      { size: "512GB", price: 179999 },
    ],
    category: "foldable",
    tag: "New Launch",
    specs: {
      display: '8" inner Super Actua Flex + 6.4" outer Actua, 120Hz',
      camera: "48MP wide + 10.5MP ultrawide + 10.8MP telephoto",
      battery: "5,015 mAh, fast + wireless charging",
      processor: "Google Tensor G6",
      ram: "16 GB",
      storage: "256 GB",
      os: "Android 17",
      ai: "Gemini Intelligence with Gemini Nano",
    },
    features: [
      "Large Super Actua Flex inner display",
      "Split Screen multitasking",
      "Tabletop mode camera",
      "IP68 dust and water resistance",
      "Titan M3 security chip",
      "7 years of updates",
    ],
    rating: 4.8,
    reviews: 132,
  },
  {
    id: "pixel-10a",
    name: "Google Pixel 10a",
    slug: "pixel-10a",
    externalUrl: "https://www.shivaami.com/shop/product/google-pixel-10a-256gb-ai-smartphone-for-business/",
    price: 52999,
    gstRate: 18,
    shortDesc: "The real deal. Built for real life — powered by Google AI.",
    description:
      "Pixel 10a delivers the core Pixel experience at an accessible price. With Google's advanced AI camera, 30+ hours of battery life, durable design, and Gemini built in — it's everything you need, for less.",
    image: pixel10aLavender,
    color: "Lavender",
    colors: [
      { name: "Lavender", hex: "#7B8CDE", image: pixel10aLavender },
      { name: "Fog", hex: "#D4E4D0", image: pixel10aFog },
      { name: "Obsidian", hex: "#3C4043", image: pixel10aObsidian },
    ],
    category: "mid-range",
    specs: {
      display: '6.3" OLED, 120Hz',
      camera: "50MP main + 13MP ultrawide",
      battery: "30+ hours, 5,100 mAh",
      processor: "Google Tensor G4",
      ram: "8 GB",
      storage: "256 GB",
      os: "Android 16",
      ai: "Gemini Nano on-device",
    },
    features: [
      "Camera Coach with Gemini",
      "Add Me group photos",
      "Magic Eraser",
      "30+ hr battery",
      "IP68 water resistance",
      "7 years of updates",
    ],
    rating: 4.7,
    reviews: 2340,
  },
  {
    id: "pixel-10",
    name: "Google Pixel 10",
    slug: "pixel-10",
    externalUrl: "https://www.shivaami.com/shop/product/google-pixel-10-256gb-phone/",
    price: 64999,
    gstRate: 18,
    shortDesc: "Do spectacular things, every day. All-new telephoto lens.",
    description:
      "Google Pixel 10 brings the most refined Pixel experience yet. With a new 5x telephoto lens, Tensor G5 chip, Gemini AI assistant, and twice the durability of Pixel 8 — it's all the essentials and more of the extras.",
    image: pixel10Frost,
    color: "Frost",
    colors: [
      { name: "Frost", hex: "#D6DFEF", image: pixel10Frost },
      { name: "Indigo", hex: "#3366FF", image: pixel10Indigo },
      { name: "Lemongrass", hex: "#C8E66B", image: pixel10Lemongrass },
      { name: "Obsidian", hex: "#4A4A4A", image: pixel10Obsidian },
    ],
    category: "flagship",
    specs: {
      display: '6.3" Actua OLED, 120Hz',
      camera: "48MP wide + 13MP ultrawide + 10.8MP 5x telephoto",
      battery: "24+ hours, fast charging",
      processor: "Google Tensor G5",
      ram: "12 GB",
      storage: "256 GB",
      os: "Android 16",
      ai: "Gemini built-in",
    },
    features: [
      "5x Telephoto lens (NEW)",
      "Camera Coach",
      "Circle to Search",
      "Pixelsnap Wireless Charging",
      "2x more durable than Pixel 8",
      "7 years of updates",
    ],
    rating: 4.8,
    reviews: 2156,
  },
  {
    id: "pixel-10-pro-fold",
    name: "Google Pixel 10 Pro Fold",
    slug: "pixel-10-pro-fold",
    externalUrl: "https://www.shivaami.com/shop/product/google-pixel-10-pro-fold-256gb-foldable-ai-phone/",
    price: 162999,
    gstRate: 18,
    shortDesc: "Unfold extraordinary. Our best phone for multitasking.",
    description:
      "The Pixel 10 Pro Fold features an 8\" Super Actua Flex display — our largest yet. Ultra-thin when folded, it handles 10+ years of folding. With advanced AI, Split Screen multitasking, and the Pixel Camera folded in.",
    image: pixel10ProFoldMoonstone,
    color: "Moonstone",
    colors: [
      { name: "Moonstone", hex: "#8E9AAB", image: pixel10ProFoldMoonstone },
    ],
    category: "foldable",
    specs: {
      display: '8" inner Super Actua Flex + 6.4" outer Actua, 120Hz',
      camera: "48MP wide + 10.5MP ultrawide + 10.8MP telephoto",
      battery: "24+ hours, fast + wireless charging",
      processor: "Google Tensor G5",
      ram: "16 GB",
      storage: "256 GB",
      os: "Android 16",
      ai: "Gemini Advanced + Google AI Pro",
    },
    features: [
      '8" Super Actua Flex display',
      "Split Screen multitasking",
      "Instant View photos",
      "10+ years fold durability",
      "Video Boost",
      "7 years of updates",
    ],
    rating: 4.8,
    reviews: 987,
  },
  {
    id: "pixel-10-pro-xl",
    name: "Google Pixel 10 Pro XL",
    slug: "pixel-10-pro-xl",
    externalUrl: "https://www.shivaami.com/shop/product/google-pixel-10-pro-xl-256gb/",
    price: 114999,
    gstRate: 18,
    shortDesc: "Maximum screen, maximum power — the ultimate Pro experience.",
    description:
      "Pixel 10 Pro XL is the ultimate Pixel smartphone with a massive 6.8\" Super Actua display. Featuring the same pro-grade triple camera, 100x Pro Zoom, 8K video, and Tensor G5 — in a larger, more immersive form.",
    image: pixel10ProXlMoonstone,
    color: "Moonstone",
    colors: [
      { name: "Moonstone", hex: "#8E9AAB", image: pixel10ProXlMoonstone },
      { name: "Obsidian", hex: "#2D2D2D", image: pixel10ProXlObsidian },
    ],
    category: "flagship",
    specs: {
      display: '6.8" Super Actua OLED, 120Hz',
      camera: "50MP wide + 48MP ultrawide + 48MP 5x telephoto",
      battery: "24+ hours, fast + wireless charging",
      processor: "Google Tensor G5",
      ram: "16 GB",
      storage: "256 GB",
      os: "Android 16",
      ai: "Gemini Advanced + Google AI Pro",
    },
    features: [
      "Pro Zoom up to 100x",
      "8K Video recording",
      "Night Sight Video",
      "Video Boost",
      "Magic Cue AI",
      "7 years of updates",
    ],
    rating: 4.9,
    reviews: 3241,
  },
];

export const getPhoneBySlug = (slug: string) =>
  phones.find((p) => p.slug === slug);
