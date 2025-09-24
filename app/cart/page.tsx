"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { useCart } from "@/contexts/cart-context";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Minus, Plus, Trash2, MessageCircle, Package } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
  const {
    items,
    total,
    itemCount,
    updateQuantity,
    removeItem,
    clearCart,
    getWhatsAppMessage,
  } = useCart();

  const handleWhatsAppOrder = () => {
    const phoneNumber = "2348067614781"; // Skyprint Global WhatsApp number
    const message = getWhatsAppMessage();

    if (!message) return;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleWhatsAppBulkQuote = () => {
    const phoneNumber = "2348067614781";
    let message =
      "Hello! I'm interested in bulk pricing for the following items:\n\n";

    items.forEach((item, index) => {
      message += `${index + 1}. 📦 *${item.name}*\n`;
      message += `   💰 Price: ₦${item.price.toLocaleString()}\n`;
      message += `   📊 Quantity: ${item.quantity} pieces\n`;

      if (item.options.size) message += `   📏 Size: ${item.options.size}\n`;
      if (item.options.material)
        message += `   🏗️ Material: ${item.options.material}\n`;
      if (item.options.finish)
        message += `   ✨ Finish: ${item.options.finish}\n`;
      if (item.options.color) message += `   🎨 Color: ${item.options.color}\n`;

      message += `   💵 Subtotal: ₦${(
        item.price * item.quantity
      ).toLocaleString()}\n\n`;
    });

    message += `🛒 *Total Order Value: ₦${total.toLocaleString()}*\n\n`;
    message +=
      "I'm looking for bulk pricing and volume discounts. Please provide your best wholesale rates and delivery timeline. Thank you!";

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  if (items.length === 0) {
    return (
      <main className="min-h-screen">
        <Header />

        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-md mx-auto">
              <Package className="h-16 w-16 mx-auto text-muted-foreground mb-6" />
              <h1 className="text-2xl md:text-3xl font-bold mb-4">
                Your Cart is Empty
              </h1>
              <p className="text-muted-foreground mb-8">
                Browse our products and add items to your cart to get started.
              </p>
              <Link href="/shop">
                <Button size="lg">Continue Shopping</Button>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <Header />

      {/* Page Header */}
      <section className="bg-muted/30 py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Shopping Cart
            </h1>
            <p className="text-muted-foreground">
              Review your items and place your order via WhatsApp
            </p>
          </div>
        </div>
      </section>

      {/* Cart Content */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">
                  Cart Items ({itemCount})
                </h2>
                <Button variant="outline" size="sm" onClick={clearCart}>
                  <Trash2 className="h-4 w-4 mr-2" />
                  Clear Cart
                </Button>
              </div>

              {items.map((item) => (
                <Card key={item.id}>
                  <CardContent className="p-4 md:p-6">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="relative w-full sm:w-24 h-48 sm:h-24 rounded-lg overflow-hidden bg-muted">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="flex-1 space-y-3">
                        <div>
                          <h3 className="font-semibold text-lg">{item.name}</h3>
                          <p className="text-2xl font-bold text-primary">
                            ₦{item.price.toLocaleString()}
                          </p>
                        </div>

                        {/* Options */}
                        {Object.entries(item.options).some(
                          ([_, value]) => value
                        ) && (
                          <div className="flex flex-wrap gap-2">
                            {Object.entries(item.options)
                              .filter(([_, value]) => value)
                              .map(([key, value]) => (
                                <Badge key={key} variant="secondary">
                                  {key}: {value}
                                </Badge>
                              ))}
                          </div>
                        )}

                        {/* Quantity Controls */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() =>
                                updateQuantity(item.id, item.quantity - 1)
                              }
                              disabled={item.quantity <= 1}
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                            <Input
                              type="number"
                              value={item.quantity}
                              onChange={(e) =>
                                updateQuantity(
                                  item.id,
                                  Number.parseInt(e.target.value) || 1
                                )
                              }
                              className="w-20 text-center"
                              min="1"
                            />
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>

                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeItem(item.id)}
                            className="text-destructive hover:text-destructive"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>

                        <div className="text-right">
                          <p className="text-lg font-semibold">
                            Subtotal: ₦
                            {(item.price * item.quantity).toLocaleString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-6">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Items ({itemCount})</span>
                      <span>₦{total.toLocaleString()}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-semibold text-lg">
                      <span>Total</span>
                      <span>₦{total.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="space-y-3 pt-4">
                    <Button
                      onClick={handleWhatsAppOrder}
                      className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white"
                      size="lg"
                    >
                      <MessageCircle className="h-5 w-5 mr-2" />
                      Order via WhatsApp
                    </Button>

                    <Button
                      onClick={handleWhatsAppBulkQuote}
                      variant="outline"
                      className="w-full border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white bg-transparent"
                      size="lg"
                    >
                      <Package className="h-5 w-5 mr-2" />
                      Request Bulk Quote via WhatsApp
                    </Button>
                  </div>

                  <div className="text-xs text-muted-foreground pt-4 border-t">
                    <p>
                      By placing an order, you'll be redirected to WhatsApp to
                      complete your purchase with our team.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
