"use client"

import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Grid, List, SlidersHorizontal } from "lucide-react"

export function ProductFilters() {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-4 bg-card rounded-lg border">
      <div className="flex items-center gap-4">
        <span className="text-sm text-muted-foreground">Showing 1-24 of 213 products</span>
      </div>

      <div className="flex items-center gap-4">
        {/* Sort By */}
        <Select defaultValue="featured">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="featured">Featured</SelectItem>
            <SelectItem value="price-low">Price: Low to High</SelectItem>
            <SelectItem value="price-high">Price: High to Low</SelectItem>
            <SelectItem value="newest">Newest First</SelectItem>
            <SelectItem value="popular">Most Popular</SelectItem>
          </SelectContent>
        </Select>

        {/* View Toggle */}
        <div className="flex items-center border rounded-md">
          <Button variant="ghost" size="sm" className="px-3">
            <Grid className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm" className="px-3">
            <List className="w-4 h-4" />
          </Button>
        </div>

        {/* Mobile Filters */}
        <Button variant="outline" size="sm" className="sm:hidden bg-transparent">
          <SlidersHorizontal className="w-4 h-4 mr-2" />
          Filters
        </Button>
      </div>
    </div>
  )
}
