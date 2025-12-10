import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/helpers";

export function ProductGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-6">
      {products.map((category) => (
        <ProductCard key={category.category} category={category} />
      ))}
    </div>
  );
}
