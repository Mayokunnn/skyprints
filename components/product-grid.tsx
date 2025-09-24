import { ProductCard } from "@/components/product-card"

const products = [
  {
    id: 1,
    name: "Corporate Business Cards",
    category: "Corporate Branding",
    price: 15000,
    image: "/professional-business-cards-design.jpg",
    description: "Premium business cards with various finishes and paper options",
    features: ["Multiple paper types", "Embossing available", "Quick turnaround"],
  },
  {
    id: 2,
    name: "Technical Manual Printing",
    category: "Technical Printing",
    price: 45000,
    image: "/technical-manual-printing-documentation.jpg",
    description: "High-quality technical documentation and manual printing",
    features: ["Spiral binding", "Color printing", "Waterproof options"],
  },
  {
    id: 3,
    name: "Branded Corporate Shirts",
    category: "Corporate Merchandise",
    price: 8500,
    image: "/corporate-branded-polo-shirts.jpg",
    description: "Professional polo shirts with company branding",
    features: ["Various sizes", "Embroidery/Print", "Bulk discounts"],
  },
  {
    id: 4,
    name: "Exhibition Banner Stands",
    category: "Event Branding",
    price: 35000,
    image: "/exhibition-banner-stands-display.jpg",
    description: "Portable banner stands for exhibitions and events",
    features: ["Easy setup", "Carrying case", "Custom graphics"],
  },
  {
    id: 5,
    name: "Product Packaging Boxes",
    category: "Packaging Solutions",
    price: 25000,
    image: "/custom-product-packaging-boxes.jpg",
    description: "Custom packaging boxes with your branding",
    features: ["Various sizes", "Custom printing", "Eco-friendly options"],
  },
  {
    id: 6,
    name: "Corporate Letterheads",
    category: "Corporate Branding",
    price: 12000,
    image: "/corporate-letterhead-design-printing.jpg",
    description: "Professional letterheads with company branding",
    features: ["Premium paper", "Watermark options", "Bulk pricing"],
  },
  {
    id: 7,
    name: "Safety Signage Printing",
    category: "Technical Printing",
    price: 18000,
    image: "/industrial-safety-signage-printing.jpg",
    description: "Industrial safety signs and warning labels",
    features: ["Weather resistant", "Reflective options", "Compliance standards"],
  },
  {
    id: 8,
    name: "Promotional Mugs",
    category: "Corporate Merchandise",
    price: 3500,
    image: "/branded-promotional-coffee-mugs.jpg",
    description: "Custom branded ceramic mugs for promotions",
    features: ["Dishwasher safe", "Full color printing", "Gift packaging"],
  },
]

export function ProductGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
