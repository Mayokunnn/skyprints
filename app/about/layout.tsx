import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | The Skyprint Global Services Limited",
  description:
    "Learn about The Skyprint Global Services Limited, a leading corporate printing and branding solutions provider in Lagos, Nigeria. We deliver quality, integrity, and excellence in every project.",
  keywords: [
    "about skyprint",
    "company values",
    "printing company",
    "branding company",
    "Lagos Nigeria",
    "corporate printing",
    "branding solutions",
    "printing services",
    "skyprint global services",
    "skyprint",
    "skyprint nigeria",
    "skyprint lagos",
    "skyprint global",
    "skyprint services",
    "printing solutions",
  ],
  openGraph: {
    title: "About Us | The Skyprint Global Services Limited",
    description:
      "Learn about The Skyprint Global Services Limited and our commitment to quality and excellence.",
    type: "website",
    url: "https://www.globalskyprint.com/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
