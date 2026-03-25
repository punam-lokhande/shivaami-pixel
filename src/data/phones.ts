import pixel9a from "@/assets/pixel-9a.jpg";
import pixel10 from "@/assets/pixel-10.jpg";
import pixel10ProFold from "@/assets/pixel-10-pro-fold.jpg";
import pixel10ProXl from "@/assets/pixel-10-pro-xl.jpg";
import pixel10a from "@/assets/pixel-10a.jpg";

export interface Phone {
  id: string;
  name: string;
  slug: string;
  price: number;
  shortDesc: string;
  description: string;
  image: string;
  color: string;
  category: "flagship" | "mid-range" | "foldable";
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

export const phones: Phone[] = [
  {
    id: "pixel-9a",
    name: "Google Pixel 9a",
    slug: "pixel-9a",
    price: 499,
    shortDesc: "Smart, secure, and built to last — the essential Pixel experience.",
    description: "The Google Pixel 9a delivers the core Pixel experience at an accessible price. With Google's advanced AI camera system, all-day battery life, and the Tensor G4 chip, it's the smartest phone in its class.",
    image: pixel9a,
    color: "Mint Green",
    category: "mid-range",
    specs: {
      display: '6.3" OLED, 120Hz',
      camera: "64MP main + 13MP ultrawide",
      battery: "5,000 mAh",
      processor: "Google Tensor G4",
      ram: "8 GB",
      storage: "128 GB / 256 GB",
      os: "Android 15",
      ai: "Gemini Nano on-device",
    },
    features: ["AI Camera", "Magic Eraser", "Call Screening", "7 years of updates"],
    rating: 4.5,
    reviews: 1842,
  },
  {
    id: "pixel-10",
    name: "Google Pixel 10",
    slug: "pixel-10",
    price: 799,
    shortDesc: "The purest Google phone — refined design, flagship AI power.",
    description: "Google Pixel 10 brings the most refined Pixel experience yet. Powered by the new Tensor G5, it features an incredible AI-powered camera, stunning LTPO display, and seamless integration with Google's ecosystem.",
    image: pixel10,
    color: "Obsidian",
    category: "flagship",
    specs: {
      display: '6.4" LTPO OLED, 120Hz',
      camera: "50MP main + 48MP ultrawide + 48MP telephoto",
      battery: "5,100 mAh",
      processor: "Google Tensor G5",
      ram: "12 GB",
      storage: "128 GB / 256 GB / 512 GB",
      os: "Android 16",
      ai: "Gemini Pro on-device",
    },
    features: ["AI Camera Pro", "Video Boost", "Circle to Search", "Live Translate"],
    rating: 4.7,
    reviews: 2156,
  },
  {
    id: "pixel-10-pro-fold",
    name: "Google Pixel 10 Pro Fold",
    slug: "pixel-10-pro-fold",
    price: 1799,
    shortDesc: "Unfold possibilities — the thinnest foldable with Pixel intelligence.",
    description: "The Google Pixel 10 Pro Fold redefines the foldable phone category. Ultra-thin when folded, expansive when opened, and powered by Google's most advanced AI capabilities for unmatched productivity and creativity.",
    image: pixel10ProFold,
    color: "Silver Titanium",
    category: "foldable",
    specs: {
      display: '8.0" inner + 6.3" outer LTPO OLED, 120Hz',
      camera: "50MP main + 48MP ultrawide + 48MP telephoto",
      battery: "5,200 mAh",
      processor: "Google Tensor G5 Pro",
      ram: "16 GB",
      storage: "256 GB / 512 GB / 1 TB",
      os: "Android 16",
      ai: "Gemini Ultra on-device",
    },
    features: ["Dual Screen Multitasking", "Tabletop Mode", "AI Camera Pro", "Gemini Ultra"],
    rating: 4.8,
    reviews: 987,
  },
  {
    id: "pixel-10-pro-xl",
    name: "Google Pixel 10 Pro XL",
    slug: "pixel-10-pro-xl",
    price: 1099,
    shortDesc: "Maximum screen, maximum power — the ultimate Pixel flagship.",
    description: "Google Pixel 10 Pro XL is the ultimate Pixel smartphone. Featuring a massive 6.9-inch display, the most advanced camera system on any Pixel, and the powerhouse Tensor G5 Pro processor for uncompromising performance.",
    image: pixel10ProXl,
    color: "Porcelain",
    category: "flagship",
    specs: {
      display: '6.9" LTPO OLED, 120Hz, 2800 nits',
      camera: "50MP main + 48MP ultrawide + 48MP 5x telephoto",
      battery: "5,500 mAh",
      processor: "Google Tensor G5 Pro",
      ram: "16 GB",
      storage: "256 GB / 512 GB / 1 TB",
      os: "Android 16",
      ai: "Gemini Ultra on-device",
    },
    features: ["AI Camera Ultra", "8K Video", "Super Res Zoom 30x", "Gemini Ultra"],
    rating: 4.9,
    reviews: 3241,
  },
  {
    id: "pixel-10a",
    name: "Google Pixel 10a",
    slug: "pixel-10a",
    price: 549,
    shortDesc: "Everything you love about Pixel, now even more affordable.",
    description: "The Google Pixel 10a combines the best of Pixel's AI features with a price that's easy to love. Get Google's latest camera innovations, long-lasting battery, and the smoothest Android experience.",
    image: pixel10a,
    color: "Bay Blue",
    category: "mid-range",
    specs: {
      display: '6.5" OLED, 120Hz',
      camera: "64MP main + 13MP ultrawide",
      battery: "5,200 mAh",
      processor: "Google Tensor G5",
      ram: "8 GB",
      storage: "128 GB / 256 GB",
      os: "Android 16",
      ai: "Gemini Nano on-device",
    },
    features: ["AI Camera", "Magic Eraser", "Circle to Search", "7 years of updates"],
    rating: 4.6,
    reviews: 1523,
  },
];

export const getPhoneBySlug = (slug: string) => phones.find((p) => p.slug === slug);
