"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"

const categories = [
  { id: "corporate-branding", name: "Corporate Branding", count: 45 },
  { id: "technical-printing", name: "Technical Printing", count: 32 },
  { id: "merchandise", name: "Corporate Merchandise", count: 67 },
  { id: "event-branding", name: "Event Branding", count: 28 },
  { id: "packaging", name: "Packaging Solutions", count: 41 },
]

const orderTypes = [
  { id: "individual", name: "Individual Orders" },
  { id: "bulk", name: "Bulk Orders" },
  { id: "custom", name: "Custom Solutions" },
]

export function CategorySidebar() {
  const [priceRange, setPriceRange] = useState([0, 100000])

  return (
    <div className="space-y-6">
      {/* Categories */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Categories</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center space-x-2">
              <Checkbox id={category.id} />
              <label
                htmlFor={category.id}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer flex-1 text-foreground"
              >
                {category.name}
              </label>
              <span className="text-xs text-muted-foreground">({category.count})</span>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Price Range */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Price Range (₦)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Slider value={priceRange} onValueChange={setPriceRange} max={100000} step={1000} className="w-full" />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>₦{priceRange[0].toLocaleString()}</span>
            <span>₦{priceRange[1].toLocaleString()}</span>
          </div>
        </CardContent>
      </Card>

      {/* Order Type */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Order Type</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {orderTypes.map((type) => (
            <div key={type.id} className="flex items-center space-x-2">
              <Checkbox id={type.id} />
              <label
                htmlFor={type.id}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer text-foreground"
              >
                {type.name}
              </label>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
