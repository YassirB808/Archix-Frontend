// src/components/app/AppFooter.tsx
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

interface AppFooterProps {
  className?: string;
}

export const AppFooter = ({ className = '' }: AppFooterProps) => {
  const currentYear = new Date().getFullYear();

  const quickLinks = ["Features", "Pricing", "Case Studies", "Blog"];
  const legalLinks = ["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR"];
  const socialLinks = [
    { icon: <FaLinkedin className="h-5 w-5" />, url: "https://www.linkedin.com/company/archix", label: "LinkedIn" },
    { icon: <FaTwitter className="h-5 w-5" />, url: "https://twitter.com/archix", label: "Twitter" },
    { icon: <FaGithub className="h-5 w-5" />, url: "https://github.com/archix", label: "GitHub" },
  ];

  return (
    <footer className={`bg-gray-900 text-gray-300 ${className}`}>
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Top Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-12">
          
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src="/logos/archixCopy.png" alt="Archix Logo" className="h-10 w-auto" />
              <span className="text-xl font-bold text-white">Archix Docs</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              The most secure platform for document management and collaboration.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-red-500 transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map(link => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-red-500 transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Contact Us</h3>
            <div className="flex items-center gap-2 text-gray-400 hover:text-red-500 transition-colors">
              <HiMail className="h-5 w-5" />
              <a href="mailto:hello@archix.com" className="text-sm hover:underline">
                hello@archix.com
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          
          {/* Copyright */}
          <p className="text-gray-500 text-sm">&copy; {currentYear} Archix Docs. All rights reserved.</p>

          {/* Social Icons */}
          <div className="flex space-x-4">
            {socialLinks.map(social => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-9 w-9 rounded-full bg-gray-800 hover:bg-red-600 transition-colors transform hover:scale-110"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};
