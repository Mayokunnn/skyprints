import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceDetail } from "@/components/service-detail"

interface ServicePageProps {
  params: {
    slug: string
  }
}

export default function ServicePage({ params }: ServicePageProps) {
  return (
    <main className="min-h-screen">
      <Header />
      <ServiceDetail slug={params.slug} />
      <Footer />
    </main>
  )
}
