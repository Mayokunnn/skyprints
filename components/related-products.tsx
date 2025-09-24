import { ProductCard } from "@/components/product-card"

const relatedProducts = [
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
    id: 9,
    name: "Company Brochures",
    category: "Corporate Branding",
    price: 28000,
    image: "/corporate-brochure-design-printing.jpg",
    description: "High-quality tri-fold and bi-fold brochures",
    features: ["Glossy finish", "Custom design", "Fast turnaround"],
  },
  {
    id: 10,
    name: "Corporate Folders",
    category: "Corporate Branding",
    price: 22000,
    image: "/corporate-presentation-folders.jpg",
    description: "Professional presentation folders with pockets",
    features: ["Die-cut pockets", "Embossed logo", "Various colors"],
  },
]

export function RelatedProducts() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Related Products</h2>
          <p className="text-muted-foreground">Complete your corporate branding package</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
