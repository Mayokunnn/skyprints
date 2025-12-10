import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4 text-center sm:text-left">
            <div className="flex items-center space-x-2 justify-center sm:justify-start">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                <img src="./logo.png" alt="Logo" />
              </div>
              <div>
                <h3 className="font-bold">Skyprint Global</h3>
                <p className="text-xs opacity-80">Printing Solutions</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed max-w-xs mx-auto sm:mx-0">
              Your trusted partner for corporate branding, technical printing,
              and promotional solutions in Lagos, Nigeria.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 text-center sm:text-left">
            <h4 className="font-bold text-base sm:text-lg">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/services"
                className="text-sm opacity-80 hover:opacity-100 transition-opacity"
              >
                Our Services
              </Link>
              <Link
                href="/shop"
                className="text-sm opacity-80 hover:opacity-100 transition-opacity"
              >
                Shop Products
              </Link>
              <Link
                href="/about"
                className="text-sm opacity-80 hover:opacity-100 transition-opacity"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="text-sm opacity-80 hover:opacity-100 transition-opacity"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4 text-center sm:text-left">
            <h4 className="font-bold text-base sm:text-lg">Services</h4>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/services"
                className="text-sm opacity-80 hover:opacity-100 transition-opacity"
              >
                Corporate Branding
              </Link>
              <Link
                href="/services"
                className="text-sm opacity-80 hover:opacity-100 transition-opacity"
              >
                Technical Printing
              </Link>
              <Link
                href="/services"
                className="text-sm opacity-80 hover:opacity-100 transition-opacity"
              >
                Merchandise
              </Link>
              <Link
                href="/services"
                className="text-sm opacity-80 hover:opacity-100 transition-opacity"
              >
                Event Branding
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 text-center sm:text-left">
            <h4 className="font-bold text-base sm:text-lg">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 justify-center sm:justify-start">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-sm opacity-80">Lagos, Nigeria</span>
              </div>
              <div className="flex items-center space-x-3 justify-center sm:justify-start">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-sm opacity-80">+234 806 761 4781</span>
              </div>
              <div className="flex items-center space-x-3 justify-center sm:justify-start">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-sm opacity-80">
                  info@skyprintglobal.com
                </span>
              </div>
              <div className="flex items-center space-x-3 justify-center sm:justify-start">
                <Clock className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-sm opacity-80">Mon-Fri: 8AM-6PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 text-center sm:text-left">
            <p className="text-sm opacity-80">
              © 2025 The Skyprint Global Services Limited. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
