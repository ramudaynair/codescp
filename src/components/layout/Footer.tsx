'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-slate-900">CODESCAPE</h3>
            <p className="text-sm text-slate-700 mb-4">
              Where Creativity Meets Technology
            </p>
            <p className="text-sm text-slate-500">
              Muvattupuzha, Ernakulam, Kerala
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-slate-900">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-slate-700 hover:text-indigo-600 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-slate-700 hover:text-indigo-600 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-700 hover:text-indigo-600 transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-slate-900">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="text-slate-700 hover:text-indigo-600 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-slate-700 hover:text-indigo-600 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-700 hover:text-indigo-600 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-slate-900">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-slate-700">+91 8921258262</li>
              <li className="text-slate-700">contact@thecodescape.in</li>
              <li>
                <a 
                  href="https://instagram.com/thecodescape" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-slate-700 hover:text-indigo-600 transition-colors"
                >
                  @thecodescape
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-600">
            <p>&copy; {new Date().getFullYear()} CODESCAPE. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-indigo-600 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-indigo-600 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}