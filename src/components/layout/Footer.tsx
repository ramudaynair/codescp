'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="border-t border-[#E5E7EB] bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#0F172A]">CODESCAPE</h3>
            <p className="text-sm text-[#374151] mb-4">
              Where Creativity Meets Technology
            </p>
            <p className="text-sm text-[#6B7280]">
              Muvattupuzha, Ernakulam, Kerala
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-[#0F172A]">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-[#374151] hover:text-[#2A9AD6] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-[#374151] hover:text-[#2A9AD6] transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-[#374151] hover:text-[#2A9AD6] transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-[#0F172A]">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="text-[#374151] hover:text-[#2A9AD6] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-[#374151] hover:text-[#2A9AD6] transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#374151] hover:text-[#2A9AD6] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-[#0F172A]">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-[#374151]">+91 8921258262</li>
              <li className="text-[#374151]">contact@thecodescape.in</li>
              <li>
                <a 
                  href="https://instagram.com/thecodescape" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#374151] hover:text-[#2A9AD6] transition-colors"
                >
                  @thecodescape
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#E5E7EB]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#6B7280]">
            <p>&copy; {new Date().getFullYear()} CODESCAPE. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-[#2A9AD6] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-[#2A9AD6] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}