import pixel9a from "@/assets/pixel-9a.png";
import pixel9aIris from "@/assets/pixel-9a-iris.png";
import pixel9aObsidian from "@/assets/pixel-9a-obsidian.png";
import pixel9aPorcelain from "@/assets/pixel-9a-porcelain.png";
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
}

export const formatPrice = (price: number) =>
  "₹" + price.toLocaleString("en-IN");

export const formatGst = (price: number, rate: number) =>
  formatPrice(Math.round(price * rate / 100));

export const formatPriceWithGst = (price: number, rate: number) =>
  formatPrice(Math.round(price * (1 + rate / 100)));

export const phones: Phone[] = [
  {
    id: "pixel-10a",
    name: "Google Pixel 10a",
    slug: "pixel-10a",
    price: 40627,
    gstRate: 18,
    shortDesc: "The real deal. Built for real life — powered by Google AI.",
    description:
      "Pixel 10a delivers the core Pixel experience at an accessible price. With Google's advanced AI camera, 30+ hours of battery life, durable design, and Gemini built in — it's everything you need, for less.",
    image: pixel10aLavender,
    color: "Lavender",
    colors: [
      { name: "Lavender", hex: "#7B8CDE", image: pixel10aLavender },
      { name: "Berry", hex: "#FF6B6B", image: pixel10aBerry },
      { name: "Fog", hex: "#D4E4D0", image: pixel10aFog },
      { name: "Obsidian", hex: "#3C4043", image: pixel10aObsidian },
    ],
    category: "mid-range",
    tag: "New Launch",
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
    price: 58779,
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
    price: 140898,
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
    price: 99406,
    gstRate: 18,
    shortDesc: "Maximum screen, maximum power — the ultimate Pro experience.",
    description:
      "Pixel 10 Pro XL is the ultimate Pixel smartphone with a massive 6.8\" Super Actua display. Featuring the same pro-grade triple camera, 100x Pro Zoom, 8K video, and Tensor G5 — in a larger, more immersive form.",
    image: pixel10ProXlMoonstone,
    color: "Moonstone",
    colors: [
      { name: "Moonstone", hex: "#8E9AAB", image: pixel10ProXlMoonstone },
      { name: "Jade", hex: "#A8C5A0", image: pixel10ProXlJade },
      { name: "Obsidian", hex: "#2D2D2D", image: pixel10ProXlObsidian },
      { name: "Porcelain", hex: "#F1EDE6", image: pixel10ProXlPorcelain },
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
  {
    id: "pixel-9a",
    name: "Google Pixel 9a",
    slug: "pixel-9a",
    price: 31982,
    gstRate: 18,
    shortDesc: "Magic made simple. Stunning photos, all-day battery.",
    description:
      "Google Pixel 9a delivers stunning photos and videos effortlessly. With 30+ hours of battery, up to 256 GB storage, lasting durability, water resistance, and Gemini across your apps — it's magic, made simple.",
    image: pixel9a,
    color: "Iris",
    colors: [
      { name: "Iris", hex: "#8B80C8" },
      { name: "Porcelain", hex: "#F1EDE6" },
      { name: "Obsidian", hex: "#1D1D1D" },
      { name: "Peony", hex: "#E8A0BF" },
    ],
    category: "mid-range",
    specs: {
      display: '6.3" Actua OLED, 120Hz',
      camera: "48MP main + 13MP ultrawide",
      battery: "30+ hours, 5,100 mAh",
      processor: "Google Tensor G4",
      ram: "8 GB",
      storage: "256 GB",
      os: "Android 15",
      ai: "Gemini Nano on-device",
    },
    features: [
      "Macro Focus",
      "Add Me",
      "Magic Editor",
      "Best Take",
      "Night Sight",
      "7 years of updates",
    ],
    rating: 4.5,
    reviews: 1842,
  },
];

export const getPhoneBySlug = (slug: string) =>
  phones.find((p) => p.slug === slug);
