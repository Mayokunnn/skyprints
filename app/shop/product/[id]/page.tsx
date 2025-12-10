import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ProductDetails } from "@/components/product-details";
import { RelatedProducts } from "@/components/related-products";
import {
  findCategoryBySlug,
  getProductImage,
  findItemForOption,
  productSlug,
} from "@/lib/helpers";
import { productStructuredData } from "@/lib/structured-data";

interface ProductPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const category = findCategoryBySlug(params.id);

  if (!category) {
    return {
      title: "Product Not Found",
      description: "The product you're looking for could not be found.",
    };
  }

  const defaultItem = findItemForOption(category, category.options[0] ?? "");
  const productImage = getProductImage(defaultItem);

  const title = `${category.category} - The Skyprint Global Services Limited`;
  const description = `Shop our ${
    category.category
  } printing solutions. Starting from ₦${
    defaultItem?.price?.toLocaleString() || "Contact us"
  }.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://skyprints.vercel.app/shop/product/${params.id}`,
      images: [
        {
          url: productImage,
          width: 1200,
          height: 630,
          alt: category.category,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [productImage],
    },
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const category = findCategoryBySlug(params.id);

  if (!category) {
    return (
      <main className="min-h-screen">
        <Header />
        <div className="container mx-auto py-20 text-center">
          <h1 className="text-2xl font-bold">Product Not Found</h1>
        </div>
        <Footer />
      </main>
    );
  }

  const defaultItem = findItemForOption(category, category.options[0] ?? "");
  const productImage = getProductImage(defaultItem);
  const productUrl = `https://skyprints.vercel.app/shop/product/${params.id}`;
  const structuredData = productStructuredData(
    category.category,
    `Shop our ${category.category} printing solutions.`,
    defaultItem?.price ?? null,
    productImage,
    productUrl
  );

  return (
    <main className="min-h-screen">
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <ProductDetails productId={params.id} />
      <RelatedProducts currentSlug={params.id} />
      <Footer />
    </main>
  );
}
