// Template-enhanced component
// Generated: 2025-08-19T16:48:59.771Z
// Section: footer
// Category: footer
// Template ID: footer-c001

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Github,
  Mail,
  MapPin, 
  Phone,
  ArrowRight,
  Heart
} from "lucide-react"

export default function Footer() {
  const footerSections = [
    {
      title: "Our Services",
      links: [
        { name: "Business Consulting", href: "#business-consulting" },
        { name: "Management Consulting", href: "#management-consulting" },
        { name: "Strategy Consulting", href: "#strategy-consulting" },
        { name: "Corporate Consulting", href: "#corporate-consulting" },
        { name: "Industry Expertise", href: "#industry-expertise" },
        { name: "Thought Leadership", href: "#thought-leadership" }
      ]
    },
    {
      title: "About Acme",
      links: [
        { name: "Our Story", href: "#our-story" },
        { name: "Leadership Team", href: "#leadership-team" },
        { name: "Careers", href: "#careers" },
        { name: "Partnerships", href: "#partnerships" },
        { name: "Awards & Recognition", href: "#awards" },
        { name: "Contact Us", href: "#contact" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Industry Insights", href: "#industry-insights" },
        { name: "Case Studies", href: "#case-studies" },
        { name: "Webinars & Events", href: "#webinars" },
        { name: "White Papers", href: "#white-papers" },
        { name: "FAQs", href: "#faqs" },
        { name: "Client Testimonials", href: "#testimonials" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#privacy-policy" },
        { name: "Terms of Service", href: "#terms-of-service" },
        { name: "Cookie Policy", href: "#cookie-policy" },
        { name: "Compliance", href: "#compliance" },
        { name: "Security", href: "#security" },
        { name: "Accessibility", href: "#accessibility" }
      ]
    }
  ]

  const socialLinks = [
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/acmeconsulting" },
    { name: "Facebook", icon: Facebook, href: "https://facebook.com/acmeconsulting" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com/acmeconsulting" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/acme-consulting" },
    { name: "GitHub", icon: Github, href: "https://github.com/acmeconsulting" }
  ]

  return (
    <footer className="bg-background border-t border-border/50">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="size-10 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">A</span>
                </div>
                <span className="font-bold text-xl">Acme Consulting</span>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Transforming Businesses, Driving Success. Acme Consulting is a leading corporate consulting firm
                that empowers organizations to achieve their strategic goals and unlock their full potential.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">info@acmeconsulting.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">123 Business Ave, Suite 100, Anytown USA</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm">Stay Updated</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 text-sm border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
                <Button size="sm" className="px-3">
                  <ArrowRight className="size-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Get the latest insights and industry updates. Unsubscribe anytime.
              </p>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-semibold text-sm">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/50 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© 2024 Acme Consulting. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline flex items-center gap-1">
                Made with <Heart className="size-3 text-red-500 fill-current" /> by our team
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground mr-2">Connect with us:</span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="size-8 rounded-md bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors duration-200 group"
                  >
                    <Icon className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4 pt-4 border-t border-border/30">
            <Link href="/sitemap" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Sitemap
            </Link>
            <Link href="/accessibility" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Accessibility
            </Link>
            <Link href="/cookies" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Cookie Settings
            </Link>
            <Link href="/support" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}