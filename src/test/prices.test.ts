import { describe, it, expect } from "vitest";
import { phones, formatPrice } from "@/data/phones";

// Prices shown on the site are the final amounts, already including 18% GST.
const expected: Record<string, number> = {
  "pixel-10a": 48999,
  "pixel-11": 74999,
  "pixel-11-pro": 100999,
  "pixel-11-pro-xl": 115999,
  "pixel-11-pro-fold": 163999,
};

const expectedStorage: Record<string, Record<string, number>> = {
  "pixel-11": { "256GB": 74999, "512GB": 87999 },
  "pixel-11-pro": { "256GB": 100999, "512GB": 115999 },
  "pixel-11-pro-xl": { "256GB": 115999, "512GB": 128999 },
  "pixel-11-pro-fold": { "512GB": 163999 },
};

describe("GST-inclusive prices", () => {
  it("shows the agreed price for each model", () => {
    for (const [slug, price] of Object.entries(expected)) {
      const phone = phones.find((p) => p.slug === slug);
      expect(phone, slug).toBeDefined();
      expect(phone!.price, slug).toBe(price);
    }
  });

  it("shows the agreed price for each storage variant", () => {
    for (const [slug, variants] of Object.entries(expectedStorage)) {
      const phone = phones.find((p) => p.slug === slug);
      expect(phone, slug).toBeDefined();
      for (const [size, price] of Object.entries(variants)) {
        const option = phone!.storageOptions?.find((o) => o.size === size);
        expect(option, `${slug} ${size}`).toBeDefined();
        expect(option!.price, `${slug} ${size}`).toBe(price);
      }
    }
  });

  it("formats prices as GST-inclusive rupee amounts", () => {
    expect(formatPrice(48999)).toBe("₹48,999");
    expect(formatPrice(163999)).toBe("₹1,63,999");
  });
});
