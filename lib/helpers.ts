export type ProductItem = {
  name: string;
  price: number | null;
  unit: string | null;
};

export type ProductCategory = {
  category: string;
  options: string[];
  items: ProductItem[];
};

const normalize = (value: string) => value.trim().toLowerCase();

export const products: ProductCategory[] = [
  {
    category: "Business Cards",
    options: ["One Side", "Two Side"],
    items: [
      {
        name: "One Side Business Card",
        price: 20000,
        unit: "100pcs per pack",
      },
      {
        name: "Two Side Business Card",
        price: 30000,
        unit: "100pcs per pack",
      },
    ],
  },
  {
    category: "Jotters and Diaries",
    options: ["Hard Cover Jotter", "Corporate Diary"],
    items: [
      {
        name: "Customized Hard Cover Jotter",
        price: 220000,
        unit: "100pcs",
      },
      {
        name: "Customized Corporate Diary",
        price: 20000,
        unit: "Per one",
      },
    ],
  },
  {
    category: "Paper Bags",
    options: ["A4 Size", "A3 Size", "A2 Size"],
    items: [
      {
        name: "A4 Size Paper Bag",
        price: 85000,
        unit: "100pcs",
      },
      {
        name: "A3 Size Paper Bag",
        price: 100000,
        unit: "100pcs",
      },
      {
        name: "A2 Size Paper Bag",
        price: 150000,
        unit: "100pcs",
      },
    ],
  },
  {
    category: "Mugs and Pens",
    options: ["Mug", "Pen"],
    items: [
      {
        name: "Customized Mug",
        price: 7000,
        unit: "Per one",
      },
      {
        name: "Customized Pen",
        price: 1000,
        unit: "Per one",
      },
    ],
  },
  {
    category: "Water Bottles",
    options: ["Water Bottle"],
    items: [
      {
        name: "Customized Water Bottle",
        price: 12000,
        unit: "Per one",
      },
    ],
  },
  {
    category: "Invitation Cards",
    options: ["Customized Invitation Card"],
    items: [
      {
        name: "Customized Invitation Card",
        price: 155000,
        unit: "100pcs",
      },
    ],
  },
  {
    category: "Brochures and Flyers",
    options: ["A4 Perfect Binding Brochure", "A5 Double Side Flyers"],
    items: [
      {
        name: "A4 Perfect Binding Brochure",
        price: null,
        unit: "Depends on pages",
      },
      {
        name: "A5 Double Side Flyers",
        price: 85000,
        unit: "100pcs",
      },
    ],
  },
  {
    category: "Calendars and Gift Boxes",
    options: ["A5 Table Calendar", "Gift Box"],
    items: [
      {
        name: "A5 Table Calendar",
        price: 280000,
        unit: "100pcs",
      },
      {
        name: "Customized Gift Box",
        price: 12000,
        unit: "Per one",
      },
    ],
  },
  {
    category: "Banners",
    options: ["Roll-up Banner", "Flag Banner"],
    items: [
      {
        name: "Roll-Up Banner",
        price: 70000,
        unit: "Per one",
      },
      {
        name: "Flag Banner",
        price: 50000,
        unit: "Per one",
      },
    ],
  },
  {
    category: "Apparel",
    options: ["Customized T-Shirt", "Customized Cap"],
    items: [
      {
        name: "Customized T-Shirt",
        price: 24000,
        unit: "Per one",
      },
      {
        name: "Customized Cap",
        price: 20000,
        unit: "Per one",
      },
    ],
  },
  {
    category: "Office Prints",
    options: ["Price Tag", "Company Invoice"],
    items: [
      {
        name: "Price Tag",
        price: 80000,
        unit: "100pcs",
      },
      {
        name: "Company Invoice",
        price: 120000,
        unit: "100 copies",
      },
    ],
  },
];

export const formatPrice = (price: number | null) =>
  price === null ? null : `₦${price.toLocaleString()}`;

export const productSlug = (name: string) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

// Map known product/item slugs to images stored in /public/products
const productImageMap: Record<string, string> = {
  "one-side-business-card": "/products/one-sided-business-card.webp",
  "two-side-business-card": "/products/two-sided-business-card.webp",
  "customized-hard-cover-jotter": "/products/hard-cover-jotter.jpg",
  "customized-corporate-diary": "/products/corporate-diary.jpg",
  "a4-size-paper-bag": "/products/sales-thank-you-paper-bag.jpg",
  "a2-size-paper-bag": "/products/corporate-customized-landscape-paper-bag.jpg",
  "a3-size-paper-bag": "/products/wedding-customized-paper-bag.jpg",
  "customized-mug": "/products/customized-mug.jpg",
  "customized-pen": "/products/customized-pen.jpg",
  "customized-water-bottle": "/products/customized-water-bottle.jpg",
  "customized-invitation-card": "/products/customized-invitation-card.jpg",
  "a4-perfect-binding-brochure": "/products/a4-perfect-binding-brochure.jpg",
  "a5-double-side-flyers": "/products/a5-double-side-flyers.jpg",
  "a5-table-calendar": "/products/a5-table-calendar.jpg",
  "customized-gift-box": "/products/customized-gift-box.jpg",
  "customized-t-shirt": "/products/customized-t-shirt.png",
  "customized-cap": "/products/customized-cap.jpg",
  "roll-up-banner": "/products/roll-up-banner.jpg",
  "flag-banner": "/products/flag-banner.jpg",
  "price-tag": "/products/price-tag.jpg",
  "company-invoice": "/products/company-invoice.jpg",
};

const FALLBACK_IMAGE = "/placeholder.svg";

export const findCategoryBySlug = (slug: string) =>
  products.find((category) => productSlug(category.category) === slug);

export const getCategoryStartingPrice = (category: ProductCategory) => {
  const prices = category.items
    .map((item) => item.price)
    .filter((price): price is number => price !== null);

  if (prices.length === 0) return null;

  return Math.min(...prices);
};

export const findItemForOption = (
  category: ProductCategory,
  option: string
): ProductItem | undefined => {
  const normalizedOption = normalize(option);

  const directMatch = category.items.find((item) =>
    normalize(item.name).includes(normalizedOption)
  );
  if (directMatch) return directMatch;

  const optionIndex = category.options.findIndex(
    (opt) => normalize(opt) === normalizedOption
  );
  if (optionIndex !== -1 && category.items[optionIndex]) {
    return category.items[optionIndex];
  }

  return category.items[0];
};

export const getProductImage = (item?: ProductItem) => {
  if (!item) return FALLBACK_IMAGE;
  const key = productSlug(item.name);
  return productImageMap[key] ?? FALLBACK_IMAGE;
};

export const getCategoryImages = (category: ProductCategory) =>
  category.options.map((option) => {
    const matchedItem = findItemForOption(category, option);
    return {
      option,
      src: getProductImage(matchedItem),
    };
  });
