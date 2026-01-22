import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | The Skyprint Global Services Limited",
  description:
    "Get in touch with The Skyprint Global Services Limited. Contact us via phone, email, or visit our Lagos office. We're ready to discuss your printing and branding needs.",
  keywords: [
    "contact skyprint",
    "printing quotes",
    "Lagos office",
    "customer service",
  ],
  openGraph: {
    title: "Contact Us | The Skyprint Global Services Limited",
    description:
      "Get in touch with The Skyprint Global Services Limited for your printing and branding needs.",
    type: "website",
    url: "https://www.globalskyprint.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
