import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  formatPrice,
  productSlug,
  type ProductCategory,
  getCategoryStartingPrice,
  getProductImage,
  findItemForOption,
} from "@/lib/helpers";
import Image from "next/image";

interface ProductCardProps {
  category: ProductCategory;
}

export function ProductCard({ category }: ProductCardProps) {
  const optionList = category?.options ?? [];
  const startingPrice = getCategoryStartingPrice(category);
  const displayPrice = formatPrice(startingPrice) ?? "Contact for price";
  const slug = productSlug(category?.category ?? "");
  const featuredItem = findItemForOption(category, category.options[0] ?? "");
  const featuredImage = getProductImage(featuredItem);

  return (
    <Card className="group flex h-full flex-col overflow-hidden py-0 border border-border transition-shadow hover:shadow-lg">
      <CardHeader className="p-0">
        <div className="relative h-56 w-full overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 sm:h-64">
          <Image
            src={featuredImage}
            alt={category?.category ?? "Product"}
            fill
            className="object-cover transition-transform duration-200 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            priority={false}
          />
          <div className="absolute inset-0 bg-black/15" />
          <div className="absolute inset-0 flex items-center justify-center text-sm text-primary-foreground">
            <span className="rounded-full bg-black/60 px-3 py-1 text-xs font-medium shadow">
              {category?.category ?? "Product"}
            </span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col gap-3 px-4 py-3 sm:px-5 sm:py-4">
        <h3 className="text-lg font-semibold text-foreground group-hover:text-slate-900">
          {category?.category ?? ""}
        </h3>

        <div className="flex items-baseline gap-2">
          <div className="text-2xl font-bold text-slate-900">
            <span className="text-xs font-medium ">Starting from </span>
            {displayPrice}
          </div>
          {startingPrice === null && (
            <Badge className="text-xs bg-amber-100 text-amber-800">
              Contact to quote
            </Badge>
          )}
        </div>

        {optionList.length > 0 && (
          <div className="space-y-1">
            <p className="text-xs font-medium text-muted-foreground">
              Options available
            </p>
            <div className="flex flex-wrap gap-2">
              {optionList.map((option) => (
                <Badge
                  key={option}
                  className="text-[11px] font-medium bg-indigo-100 text-indigo-800 border border-indigo-200"
                >
                  {option}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </CardContent>

      <CardFooter className="flex flex-col border-t [.border-t]:pt-3 border-border bg-slate-50/70 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <Button
          asChild
          size="sm"
          className="w-full sm:w-auto transition-transform duration-150 hover:-translate-y-0.5"
        >
          <Link href={`/shop/product/${slug}`}>View details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
