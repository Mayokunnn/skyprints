"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  MessageSquare,
  Star,
  Truck,
  Shield,
  Clock,
  ShoppingCart,
  Check,
} from "lucide-react";
import { useCart } from "@/contexts/cart-context";

interface ProductDetailsProps {
  productId: string;
}

export function ProductDetails({ productId }: ProductDetailsProps) {
  const [quantity, setQuantity] = useState(100);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedMaterial, setSelectedMaterial] = useState("");
  const [specialRequirements, setSpecialRequirements] = useState("");
  const [isAdding, setIsAdding] = useState(false);

  const { addItem, hasItem } = useCart();
  const isInCart = hasItem(productId);

  // Mock product data - in real app, fetch based on productId
  const product = {
    id: productId,
    name: "Corporate Business Cards",
    category: "Corporate Branding",
    price: 15000,
    images: [
      "/professional-business-cards-design-front.jpg",
      "/professional-business-cards-design-back.jpg",
      "/business-cards-printing-process.jpg",
    ],
    description:
      "Premium business cards designed to make a lasting impression. Our corporate business cards are printed on high-quality paper with various finishing options to suit your brand identity.",
    features: [
      "Premium 350gsm paper stock",
      "Multiple finishing options (matte, gloss, satin)",
      "Embossing and foil stamping available",
      "Quick 24-48 hour turnaround",
      "Free design consultation",
      "Bulk order discounts available",
    ],
    specifications: {
      "Standard Size": "90mm x 54mm",
      "Paper Weight": "350gsm",
      Printing: "Full color CMYK",
      Finishing: "Multiple options available",
      "Minimum Order": "100 pieces",
    },
  };

  const handleAddToCart = () => {
    if (!selectedSize || !selectedMaterial) {
      alert("Please select size and material before adding to cart");
      return;
    }

    setIsAdding(true);
    addItem({
      id: productId,
      name: product.name,
      price: product.price,
      image: product.images[0],
      quantity: quantity,
      options: {
        size: selectedSize,
        material: selectedMaterial,
        ...(specialRequirements && { notes: specialRequirements }),
      },
    });

    setTimeout(() => setIsAdding(false), 1000);
  };

  const handleWhatsAppOrder = () => {
    const phoneNumber = "2348067614781";
    const message = `Hello! I'd like to order the following product:\n\n*Product:* ${
      product.name
    }\n*Price:* ₦${product.price.toLocaleString()}\n*Quantity:* ${quantity} pieces\n *Size:* ${
      selectedSize || "Not specified"
    }\n*Material:* ${
      selectedMaterial || "Not specified"
    }\n*Special Requirements:* ${
      specialRequirements || "None"
    }\n\nPlease provide me with a detailed quote and timeline for this order. Thank you!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleWhatsAppBulkQuote = () => {
    const phoneNumber = "2348067614781";
    const message = `Hello! I'm interested in a bulk order quote for:\n\n*Product:* ${
      product.name
    }\n*Estimated Quantity:* ${
      quantity >= 1000 ? quantity : "1000+"
    } pieces\n*Size:* ${selectedSize || "To be discussed"}\n*Material:* ${
      selectedMaterial || "To be discussed"
    }\n*Special Requirements:* ${
      specialRequirements || "None"
    }\n\nI'm looking for bulk pricing and would like to discuss customization options. Please provide a detailed quote with volume discounts. Thank you!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square rounded-lg overflow-hidden border">
              <img
                src={product.images[0] || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4">
              {product.images.slice(1).map((image, index) => (
                <div
                  key={index}
                  className="aspect-square rounded-lg overflow-hidden border cursor-pointer hover:opacity-80 transition-opacity"
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} ${index + 2}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-4 sm:space-y-6">
            <div>
              <Badge className="mb-2">{product.category}</Badge>
              <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 sm:mb-4">
                {product.name}
              </h1>
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  (24 reviews)
                </span>
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 sm:mb-4">
                ₦{product.price.toLocaleString()}
              </div>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Customization Options */}
            <Card>
              <CardHeader className="pb-3 sm:pb-4">
                <CardTitle className="text-lg sm:text-xl">
                  Customization Options
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="size" className="text-sm">
                      Size *
                    </Label>
                    <Select
                      value={selectedSize}
                      onValueChange={setSelectedSize}
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="standard">
                          Standard (90x54mm)
                        </SelectItem>
                        <SelectItem value="mini">Mini (85x55mm)</SelectItem>
                        <SelectItem value="square">Square (70x70mm)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="material" className="text-sm">
                      Material *
                    </Label>
                    <Select
                      value={selectedMaterial}
                      onValueChange={setSelectedMaterial}
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select material" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="standard">Standard Paper</SelectItem>
                        <SelectItem value="premium">
                          Premium Cardstock
                        </SelectItem>
                        <SelectItem value="plastic">Plastic Cards</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <Label htmlFor="quantity" className="text-sm">
                    Quantity
                  </Label>
                  <Input
                    id="quantity"
                    type="number"
                    min="100"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="w-full mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="notes" className="text-sm">
                    Special Requirements
                  </Label>
                  <Textarea
                    id="notes"
                    placeholder="Any special requirements or design notes..."
                    className="min-h-[80px] sm:min-h-[100px] mt-1"
                    value={specialRequirements}
                    onChange={(e) => setSpecialRequirements(e.target.value)}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button
                size="lg"
                className="w-full text-sm sm:text-base"
                onClick={handleAddToCart}
                disabled={
                  isAdding || isInCart || !selectedSize || !selectedMaterial
                }
              >
                {isAdding ? (
                  <>
                    <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Adding to Cart...
                  </>
                ) : isInCart ? (
                  <>
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Added to Cart
                  </>
                ) : (
                  <>
                    <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Add to Cart
                  </>
                )}
              </Button>

              <Button
                size="lg"
                className="w-full bg-green-600 hover:bg-green-700 text-white text-sm sm:text-base"
                onClick={handleWhatsAppOrder}
              >
                <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Order via WhatsApp
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full border-green-600 text-green-600 hover:bg-green-600 hover:text-white bg-transparent text-sm sm:text-base"
                onClick={handleWhatsAppBulkQuote}
              >
                <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Request Bulk Quote via WhatsApp
              </Button>
            </div>

            {/* Service Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 sm:pt-6 border-t">
              <div className="text-center sm:text-left flex sm:flex-col items-center sm:items-start gap-3 sm:gap-2">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-accent flex-shrink-0" />
                <div>
                  <div className="text-sm font-medium">Fast Delivery</div>
                  <div className="text-xs text-muted-foreground">
                    24-48 hours
                  </div>
                </div>
              </div>
              <div className="text-center sm:text-left flex sm:flex-col items-center sm:items-start gap-3 sm:gap-2">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-accent flex-shrink-0" />
                <div>
                  <div className="text-sm font-medium">Quality Guarantee</div>
                  <div className="text-xs text-muted-foreground">
                    100% satisfaction
                  </div>
                </div>
              </div>
              <div className="text-center sm:text-left flex sm:flex-col items-center sm:items-start gap-3 sm:gap-2">
                <Truck className="w-5 h-5 sm:w-6 sm:h-6 text-accent flex-shrink-0" />
                <div>
                  <div className="text-sm font-medium">Free Delivery</div>
                  <div className="text-xs text-muted-foreground">
                    Lagos area
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-12 sm:mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">
                  Features & Benefits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">
                  Specifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <dl className="space-y-2">
                  {Object.entries(product.specifications).map(
                    ([key, value]) => (
                      <div
                        key={key}
                        className="flex flex-col sm:flex-row sm:justify-between text-sm gap-1 sm:gap-0"
                      >
                        <dt className="font-medium text-muted-foreground">
                          {key}:
                        </dt>
                        <dd className="text-foreground">{value}</dd>
                      </div>
                    )
                  )}
                </dl>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
