import Link from 'next/link';
import { Logo } from './ui/logo';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github
} from 'lucide-react';

const footerLinks = [
  {
    title: 'Solutions',
    links: [
      { name: 'Process Automation', href: '/solutions/automation' },
      { name: 'Business Intelligence', href: '/solutions/intelligence' },
      { name: 'Workflow Optimization', href: '/solutions/workflow' },
      { name: 'Document Processing', href: '/solutions/documents' },
      { name: 'Customer Insights', href: '/solutions/customer-insights' },
    ]
  },
  {
    title: 'Industries',
    links: [
      { name: 'Healthcare', href: '/industries/healthcare' },
      { name: 'Finance', href: '/industries/finance' },
      { name: 'Manufacturing', href: '/industries/manufacturing' },
      { name: 'Retail', href: '/industries/retail' },
      { name: 'Logistics', href: '/industries/logistics' },
    ]
  },
  {
    title: 'Resources',
    links: [
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'White Papers', href: '/resources/whitepapers' },
      { name: 'Blog', href: '/blog' },
      { name: 'Success Stories', href: '/success-stories' },
      { name: 'Support Center', href: '/support' },
    ]
  },
  {
    title: 'Company',
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
    ]
  }
];

const socialLinks = [
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'GitHub', icon: Github, href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <Logo size="md" color="white" />
            <p className="mt-4 text-zinc-400 max-w-md">
              KuhnAI delivers cutting-edge AI solutions that simplify business operations,
              streamline workflows, and drive measurable results for companies of all sizes.
            </p>

            <div className="mt-6 flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer links */}
          {footerLinks.map((category) => (
            <div key={category.title}>
              <h3 className="font-medium text-lg mb-4">{category.title}</h3>
              <ul className="space-y-3">
                {category.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-zinc-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 mt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-zinc-500 text-sm">
            &copy; {new Date().getFullYear()} KuhnAI. All rights reserved.
          </p>

          <div className="mt-4 md:mt-0 flex items-center space-x-4">
            <a href="/privacy" className="text-zinc-500 hover:text-zinc-300 text-sm">Privacy</a>
            <a href="/terms" className="text-zinc-500 hover:text-zinc-300 text-sm">Terms</a>
            <a href="/cookies" className="text-zinc-500 hover:text-zinc-300 text-sm">Cookies</a>
            <select
              className="bg-zinc-800 text-zinc-300 px-3 py-2 rounded-md text-sm"
              defaultValue="en"
            >
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
              <option value="de">Deutsch</option>
              <option value="ja">日本語</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
}
