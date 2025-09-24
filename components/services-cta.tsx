import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Phone, Mail, MessageSquare } from "lucide-react";

export function ServicesCTA() {
  return (
    <section className="py-20 bg-slate-900 text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">
            Ready to Get Started?
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto text-pretty">
            Contact our team today for a free consultation and custom quote
            tailored to your specific printing needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-primary-foreground/10 border-primary-foreground/20">
            <CardContent className="p-6 text-center">
              <Phone className="w-8 h-8 text-accent mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Call Us</h3>
              <p className="text-sm opacity-80 mb-3">
                Speak directly with our printing experts
              </p>
              <Button
                variant="outline"
                size="sm"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-slate-900 bg-transparent"
              >
                +234 806 761 4781
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-primary-foreground/10 border-primary-foreground/20">
            <CardContent className="p-6 text-center">
              <Mail className="w-8 h-8 text-accent mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Email Us</h3>
              <p className="text-sm opacity-80 mb-3">
                Send us your requirements for a detailed quote
              </p>
              <Button
                variant="outline"
                size="sm"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-slate-900 bg-transparent"
              >
                info@skyprintglobal.com
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-primary-foreground/10 border-primary-foreground/20">
            <CardContent className="p-6 text-center">
              <MessageSquare className="w-8 h-8 text-accent mx-auto mb-4" />
              <h3 className="font-semibold mb-2">WhatsApp</h3>
              <p className="text-sm opacity-80 mb-3">
                Quick response for urgent inquiries
              </p>
              <Button
                variant="outline"
                size="sm"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-slate-900 bg-transparent"
              >
                Chat Now
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            <Link href="/contact">Request Custom Quote</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
