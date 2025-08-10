"use client"
import Link from "next/link"
import {
  Github,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
  PenTool,
  Smartphone,
  Monitor,
  Code,
  LayoutPanelLeft,
  Film,
  Clipboard,
} from "lucide-react"

export const navlinks = {
  logo: {
    dark: "/devkins_full_logo.svg",
    light: "/devkins_full_logo black.svg",
    default: "/devkins_full_logo.svg",
    alt: "Devkins Logo",
    width: 100,
    height: 80,
  },
  navItems: [
    {
      name: "Services",
      href: "/services", // Changed to a more appropriate services page link
      hasDropdown: true,
      dropdownItems: {
        columns: [
          {
            title: "Design",
            items: [
              {
                name: "Graphic Design",
                description: "Brand visuals",
                href: "/services/graphic-design",
                icon: PenTool,
              },
              {
                name: "App Design",
                description: "Mobile UI/UX",
                href: "/services/mobile-app-design",
                icon: Smartphone,
              },
              {
                name: "Web Design",
                description: "UI/UX for web",
                href: "/services/ui-ux-web",
                icon: Monitor,
              },
              {
                name: "3D Modeling",
                description: "3D product visuals",
                href: "/services/3d-modeling",
                icon: Monitor,
              },
            ],
          },
          {
            title: "Development",
            items: [
              {
                name: "Web Development",
                description: "Build websites",
                href: "/services/website-development",
                icon: Code,
              },
              {
                name: "App Development",
                description: "Mobile apps",
                href: "/services/mobile-development",
                icon: Smartphone,
              },
              {
                name: "Shopify Website",
                description: "Ecommerce Websites",
                href: "/services/shopify-web",
                icon: LayoutPanelLeft,
              },
            ],
          },
          {
            title: "Business Solutions",
            items: [
              {
                name: "Video Editing",
                description: "Video content",
                href: "/services/video-editing",
                icon: Film,
              },
              {
                name: "QuickBooks",
                description: "Accounting",
                href: "/services/quickbooks",
                icon: Clipboard,
              },
            ],
          },
        ],
      },
    },
    // { name: "Academy", href: "/academy", hasDropdown: false },
    // { name: "Marketplace", href: "/marketplace", hasDropdown: false },
    { name: "Tools", href: "/tools", hasDropdown: false },
    { name: "About Us", href: "/about", hasDropdown: false },
    { name: "Contact", href: "/contact", hasDropdown: false },
  ],
  // userMenuItems: [
  //   { name: "Profile", href: "/profile" },
  //   { name: "Settings", href: "/settings" },
  //   { name: "Logout", href: "/logout" },
  // ],
}

export default function Footer() {
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
              {navlinks.navItems.map((navItem) => {
                if (navItem.name === "Services" && navItem.hasDropdown && navItem.dropdownItems) {
                  return (
                    <li key={navItem.name}>
                      <h4 className="text-md font-semibold text-white mb-2">Services</h4>
                      <ul className="space-y-2 pl-4">
                        {navItem.dropdownItems.columns.map((column) =>
                          column.items.map((item) => (
                            <li key={item.name}>
                              <Link
                                href={item.href}
                                className="text-gray-400 hover:text-white hover:underline transition-colors duration-300"
                              >
                                {item.name}
                              </Link>
                            </li>
                          )),
                        )}
                      </ul>
                    </li>
                  )
                } else {
                  return (
                    <li key={navItem.name}>
                      <Link
                        href={navItem.href}
                        className="text-gray-400 hover:text-white hover:underline transition-colors duration-300"
                      >
                        {navItem.name}
                      </Link>
                    </li>
                  )
                }
              })}
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-gray-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">devkins.dev@gmail.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-gray-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">+923074241757</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gray-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">123 Tech Lane, Digital City</span>
              </li>
            </ul>
            <Link
              href="#"
              className="mt-6 inline-flex items-center px-6 py-3 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-200 transition-colors duration-300 shadow-md"
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
