"use client";

import { useEffect, useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useCart } from "@/contexts/cart-context";
import {
  formatPrice,
  products,
  findCategoryBySlug,
  findItemForOption,
  getCategoryImages,
  getProductImage,
} from "@/lib/helpers";
import Image from "next/image";

interface ProductDetailsProps {
  productId: string;
}

export function ProductDetails({ productId }: ProductDetailsProps) {
  const { addItem } = useCart();

  const category =
    useMemo(() => findCategoryBySlug(productId) ?? products[0], [productId]) ??
    products[0];

  const [selectedOption, setSelectedOption] = useState(
    category.options[0] ?? ""
  );
  const [notes, setNotes] = useState("");
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const carouselItems = useMemo(() => getCategoryImages(category), [category]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setSelectedOption(category.options[0] ?? "");
    setStatusMessage(null);
    setCurrentIndex(0);
  }, [category]);

  const selectedItem = useMemo(
    () => findItemForOption(category, selectedOption),
    [category, selectedOption]
  );

  useEffect(() => {
    const optionIndex = category.options.findIndex(
      (opt) => opt === selectedOption
    );
    if (optionIndex >= 0) setCurrentIndex(optionIndex);
  }, [category, selectedOption]);

  const priceLabel = formatPrice(selectedItem?.price ?? null);
  const unitLabel = selectedItem?.unit ?? "Custom specifications available";
  const shouldShowWhatsApp = selectedItem?.price === null;
  const activeImage =
    carouselItems[currentIndex]?.src ?? getProductImage(selectedItem);

  const handleAddToCart = () => {
    if (!selectedItem || selectedItem.price === null) return;

    setIsAdding(true);
    addItem({
      id: `${productId}-${selectedOption}`,
      name: category.category,
      price: selectedItem.price,
      image: getProductImage(selectedItem),
      quantity: 1,
      options: {
        option: selectedOption,
        unit: selectedItem.unit ?? undefined,
      },
    });
    setStatusMessage("Added to cart");
    setTimeout(() => setStatusMessage(null), 2200);
    setIsAdding(false);
  };

  const goToIndex = (nextIndex: number) => {
    const total = carouselItems.length;
    if (total === 0) return;
    const normalized = (nextIndex + total) % total;
    setCurrentIndex(normalized);
    const nextOption = carouselItems[normalized]?.option;
    if (nextOption) setSelectedOption(nextOption);
  };

  const handleWhatsApp = () => {
    const phoneNumber = "2348067614781";
    const message = `Hello! I'd like pricing for ${
      category.category
    } - option: ${selectedOption}${
      selectedItem?.unit ? ` (${selectedItem.unit})` : ""
    }. Please share the cost and next steps.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="py-10 sm:py-14">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <Card className="border-border">
            <CardHeader className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="secondary">{category.category}</Badge>
                {selectedItem?.price === null && (
                  <Badge className="bg-slate-900 text-primary-foreground">
                    Contact us for pricing
                  </Badge>
                )}
              </div>
              <CardTitle className="text-3xl font-bold text-foreground">
                {category.category}
              </CardTitle>
              <p className="text-sm text-muted-foreground">{unitLabel}</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <div className="relative aspect-video overflow-hidden rounded-md border border-border bg-muted">
                  <Image
                    src={activeImage}
                    alt={selectedItem?.name ?? category.category}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                {carouselItems.length > 1 && (
                  <div className="flex items-center justify-between gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="transition-transform duration-150 hover:-translate-y-0.5"
                      onClick={() => goToIndex(currentIndex - 1)}
                    >
                      Previous
                    </Button>
                    <div className="flex flex-wrap justify-center gap-2">
                      {carouselItems.map((item, idx) => (
                        <button
                          key={item.option}
                          type="button"
                          onClick={() => goToIndex(idx)}
                          className={`h-2.5 w-2.5 rounded-full transition-all ${
                            idx === currentIndex
                              ? "bg-slate-900"
                              : "bg-muted-foreground/40 hover:bg-muted-foreground/70"
                          }`}
                          aria-label={`Show ${item.option}`}
                        />
                      ))}
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="transition-transform duration-150 hover:-translate-y-0.5"
                      onClick={() => goToIndex(currentIndex + 1)}
                    >
                      Next
                    </Button>
                  </div>
                )}
              </div>

              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-bold text-slate-900">
                  {priceLabel ?? "Contact for price"}
                </span>
                {selectedItem?.unit && priceLabel && (
                  <span className="text-sm text-muted-foreground">
                    {selectedItem.unit}
                  </span>
                )}
              </div>

              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">
                  Available options
                </p>
                <Select
                  value={selectedOption}
                  onValueChange={setSelectedOption}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    {category.options.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">
                  Special notes
                </p>
                <Textarea
                  placeholder="Add any specifications, quantities, or questions..."
                  value={notes}
                  onChange={(event) => setNotes(event.target.value)}
                  className="min-h-[120px]"
                />
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                {shouldShowWhatsApp ? (
                  <Button
                    onClick={handleWhatsApp}
                    className="w-full sm:w-auto bg-[#25D366] text-white transition-transform duration-150 hover:-translate-y-0.5 hover:bg-[#20BA5A]"
                  >
                    Contact on WhatsApp
                  </Button>
                ) : (
                  <Button
                    onClick={handleAddToCart}
                    disabled={isAdding}
                    className="w-full sm:w-auto transition-transform duration-150 hover:-translate-y-0.5"
                  >
                    {isAdding ? "Adding..." : "Add to cart"}
                  </Button>
                )}
              </div>

              {statusMessage && (
                <div
                  className="text-sm font-medium text-emerald-700"
                  aria-live="polite"
                >
                  {statusMessage}
                </div>
              )}

              <div className="rounded-md border border-dashed border-border bg-muted/40 px-3 py-3 text-sm text-muted-foreground">
                {selectedItem?.unit ?? "Custom specifications available"}
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What you get</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <div className="rounded-md border border-border bg-slate-50 px-3 py-2 text-foreground">
                  Category: {category.category}
                </div>
                <div className="rounded-md border border-border px-3 py-2">
                  <p className="font-medium text-foreground">Options</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5">
                    {category.options.map((option) => (
                      <li key={option}>{option}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-md border border-border px-3 py-2">
                  <p className="font-medium text-foreground">Pricing</p>
                  <p className="mt-1">
                    {priceLabel
                      ? `${priceLabel}${
                          selectedItem?.unit ? ` (${selectedItem.unit})` : ""
                        }`
                      : "Contact us for pricing details and customization."}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
