import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductDetails } from "@/components/product-details"
import { RelatedProducts } from "@/components/related-products"

interface ProductPageProps {
  params: {
    id: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  return (
    <main className="min-h-screen">
      <Header />
      <ProductDetails productId={params.id} />
      <RelatedProducts />
      <Footer />
    </main>
  )
}
