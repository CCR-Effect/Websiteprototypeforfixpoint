import { Link } from 'react-router';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';
import { motion } from 'motion/react';
import logoFooter from '../assets/logoFullLight.png';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#092942] text-white">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <motion.img
                src={logoFooter}
                alt="FixPoint Accounting & Advisory"
                className="h-16 w-auto object-contain"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </Link>
            <p className="font-jost text-sm text-white/80">
              Your trusted partner in accounting and advisory services. 
              Precision, stability, and control in every decision.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-[#F6921E] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-[#F6921E] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-[#F6921E] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-inter font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 font-jost text-sm">
              <li>
                <Link to="/" className="text-white/80 hover:text-[#F6921E] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/80 hover:text-[#F6921E] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-[#F6921E] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-white/80 hover:text-[#F6921E] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-[#F6921E] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-inter font-semibold mb-4 text-white">Our Services</h4>
            <ul className="space-y-2 font-jost text-sm">
              <li className="text-white/80">Tax Advisory</li>
              <li className="text-white/80">Financial Planning</li>
              <li className="text-white/80">Business Consulting</li>
              <li className="text-white/80">Audit Services</li>
              <li className="text-white/80">Compliance</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-inter font-semibold mb-4 text-white">Contact Us</h4>
            <ul className="space-y-3 font-jost text-sm">
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#F6921E] flex-shrink-0" />
                <a href="mailto:info@fixpointaccounting.com" className="text-white/80 hover:text-[#F6921E] transition-colors">
                  info@fixpointaccounting.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-[#F6921E] flex-shrink-0" />
                <span className="text-white/80">
                  Sarasota County, Florida
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#F6921E] flex-shrink-0" />
                <a href="tel:+12039215537" className="text-white/80 hover:text-[#F6921E] transition-colors">
                  (203) 921-5537
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="font-jost text-sm text-white/60">
              © {currentYear} FixPoint Accounting & Advisory. All rights reserved.
            </p>
            <div className="flex space-x-6 font-jost text-sm">
              <Link to="/privacy" className="text-white/60 hover:text-[#F6921E] transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-white/60 hover:text-[#F6921E] transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
          
          {/* CCR Effect Credit */}
          <div className="mt-6 pt-6 border-t text-center" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}>
            <p className="font-jost text-sm text-white/60">
              Branding and Marketing by{' '}
              <a 
                href="https://ccreffect.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-[#F6921E] transition-colors font-medium"
              >
                CCR Effect
              </a>
            </p>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}