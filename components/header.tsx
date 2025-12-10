"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/cart-context";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { itemCount } = useCart();

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center">
              <img src="/logo.png" alt="Logo" />
            </div>
            <div className="hidden sm:block">
              <h1 className=" uppercase text-lg sm:text-xl font-bold text-foreground">
                The Skyprint
              </h1>
              <p className="text-xs text-muted-foreground">
                Global Services Limited
              </p>
            </div>
            <div className="sm:hidden">
              <h1 className="text-base font-bold text-foreground">
                Skyprint Global
              </h1>
              <p className="text-xs text-muted-foreground">
                Printing Solutions
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 relative">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <div key={href} className="relative">
                  <Link
                    href={href}
                    className={`relative text-sm xl:text-base transition-colors ${
                      isActive
                        ? "text-slate-900 font-semibold"
                        : "text-foreground hover:text-primary"
                    }`}
                  >
                    {label}
                  </Link>
                  {isActive && (
                    <motion.div
                      layoutId="activeNav" // shared ID so Framer reuses animation
                      className="absolute left-0 right-0 -bottom-1 h-[2px] bg-slate-900 rounded-full"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                      }}
                    />
                  )}
                </div>
              );
            })}
          </nav>

          {/* CTA + Cart */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/cart">
              <Button
                variant={itemCount > 0 ? "default" : "outline"}
                size="sm"
                className="relative"
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                Cart
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-slate-900 px-1 text-[11px] font-semibold text-primary-foreground">
                    {itemCount}
                  </span>
                )}
              </Button>
            </Link>

            <Link href="/quote">
              <Button
                size="sm"
                className="bg-accent hover:bg-accent/90 text-accent-foreground lg:px-6"
              >
                <span className="hidden lg:inline">Request a Quote</span>
                <span className="lg:hidden">Quote</span>
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link href="/cart" className="relative">
              <Button
                variant={itemCount > 0 ? "default" : "outline"}
                size="sm"
                className="relative"
              >
                <ShoppingCart className="h-4 w-4" />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-slate-900 px-1 text-[11px] font-semibold text-primary-foreground">
                    {itemCount}
                  </span>
                )}
              </Button>
            </Link>
            <button
              className="p-2 -mr-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-3">
              {navLinks.map(({ href, label }) => {
                const isActive = pathname === href;
                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`py-2 px-2 rounded-md transition-colors ${
                      isActive
                        ? "text-slate-900 font-semibold bg-muted"
                        : "text-foreground hover:text-slate-900 hover:bg-muted"
                    }`}
                  >
                    {label}
                  </Link>
                );
              })}

              <Link href="/quote" onClick={() => setIsMenuOpen(false)}>
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground w-full mt-2">
                  Request a Quote
                </Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
