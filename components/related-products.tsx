import { ProductCard } from "@/components/product-card";
import { products, productSlug } from "@/lib/helpers";

interface RelatedProductsProps {
  currentSlug?: string;
}

export function RelatedProducts({ currentSlug }: RelatedProductsProps) {
  const featuredCategories = products
    .filter((category) => productSlug(category.category) !== currentSlug)
    .slice(0, 3);

  return (
    <section className="bg-muted/30 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground">
            Related Products
          </h2>
          <p className="text-muted-foreground">
            Explore more categories from our catalog
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredCategories.map((category) => (
            <ProductCard key={category.category} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
