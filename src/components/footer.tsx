"use client"

import Link from "next/link"
import { Github, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-950 mt-5 text-gray-400 py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="#" className="text-2xl font-bold text-white hover:text-gray-200 transition-colors">
              Devkins
            </Link>
            <p className="text-sm leading-relaxed">
              Creating extraordinary digital experiences that inspire and connect.
            </p>
            {/* Social Media Icons */}
            <div className="flex space-x-4 pt-2">
              {[
                { icon: <Github className="h-5 w-5" />, href: "#", label: "GitHub" },
                { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" },
                { icon: <Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" },
                { icon: <Instagram className="h-5 w-5" />, href: "#", label: "Instagram" },
              ].map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  aria-label={item.label}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Portfolio", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white hover:underline transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-gray-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">hello@devkins.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-gray-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gray-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">123 Tech Lane, Digital City</span>
              </li>
            </ul>
            <Link
              href="#"
              className="mt-6 inline-flex items-center px-6 py-3 bg-white text-gray-900 rounded-full font-medium 
                         hover:bg-gray-200 transition-colors duration-300 shadow-md"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Devkins. All rights reserved.
        </div>
      </div>
    </footer>
  )
}