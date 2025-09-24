"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  features: string[];
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/shop/product/${product.id}`} className="block h-full">
      <Card className="group hover:shadow-lg py-0 transition-all duration-300 border-border h-full flex flex-col cursor-pointer">
        <CardHeader className="p-0 h-full">
          <div className="relative overflow-hidden rounded-t-lg">
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <Badge className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-slate-900 text-primary-foreground text-xs">
              {product.category}
            </Badge>
          </div>
        </CardHeader>

        <CardContent className="p-3 sm:p-4 space-y-3 flex-1">
          <div>
            <h3 className="font-semibold text-base sm:text-lg text-foreground group-hover:text-slate-900 transition-colors line-clamp-2">
              {product.name}
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1 line-clamp-2">
              {product.description}
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-xl sm:text-2xl font-bold text-primary">
              ₦{product.price.toLocaleString()}
            </div>
            <div className="flex flex-wrap gap-1">
              {product.features.slice(0, 2).map((feature, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {feature}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
