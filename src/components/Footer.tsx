
import { Star, Sparkles, Mail, Phone, MapPin, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  const footerLinks = {
    services: [
      "Tarot Readings",
      "Crystal Healing",
      "Astrology",
      "Spiritual Counseling",
      "Psychic Readings",
      "Past Life Regression"
    ],
    products: [
      "Tarot Decks",
      "Crystals & Gems",
      "Sage & Incense",
      "Rune Stones",
      "Crystal Balls",
      "Meditation Tools"
    ],
    company: [
      "About Us",
      "Our Team",
      "Testimonials",
      "Privacy Policy",
      "Terms of Service",
      "Contact Us"
    ]
  };

  return (
    <footer className="bg-cosmic-dark border-t border-cosmic-gold/20 pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Sparkles className="h-8 w-8 text-cosmic-gold animate-pulse" />
                <Star className="absolute -top-1 -right-1 h-4 w-4 text-cosmic-gold animate-glow" />
              </div>
              <h3 className="text-2xl font-mystical font-bold text-gradient">
                Spiritual Tablets
              </h3>
            </div>
            <p className="text-white/70 leading-relaxed">
              Your trusted guide on the path to spiritual enlightenment. 
              Discover authentic products and transformative services designed 
              to nurture your soul's journey.
            </p>
            <div className="space-y-3 text-white/60">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-cosmic-gold" />
                <span className="text-sm">123 Mystic Avenue, Spiritual City, SC 12345</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-cosmic-gold" />
                <span className="text-sm">+1 (555) 123-SOUL</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-cosmic-gold" />
                <span className="text-sm">info@spiritualtablets.com</span>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-mystical font-semibold text-lg text-cosmic-gold mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              {footerLinks.services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-white/70 hover:text-cosmic-gold transition-colors duration-300 text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="font-mystical font-semibold text-lg text-cosmic-gold mb-4">
              Products
            </h4>
            <ul className="space-y-2">
              {footerLinks.products.map((product, index) => (
                <li key={index}>
                  <a href="#" className="text-white/70 hover:text-cosmic-gold transition-colors duration-300 text-sm">
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h4 className="font-mystical font-semibold text-lg text-cosmic-gold mb-4">
              Stay Connected
            </h4>
            <p className="text-white/70 text-sm mb-4">
              Subscribe to receive spiritual insights, exclusive offers, and cosmic updates.
            </p>
            <div className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-cosmic-violet/50 border-cosmic-gold/30 text-white placeholder:text-white/50"
              />
              <Button className="w-full bg-gold-gradient text-cosmic-dark hover:shadow-lg hover:shadow-cosmic-gold/30 transition-all duration-300">
                Subscribe
              </Button>
            </div>
            <div className="mt-4">
              <h5 className="text-sm font-semibold text-white mb-2">Follow Us</h5>
              <div className="flex gap-3">
                {['Facebook', 'Instagram', 'Twitter', 'YouTube'].map((platform) => (
                  <a
                    key={platform}
                    href="#"
                    className="w-8 h-8 bg-cosmic-gold/20 rounded-full flex items-center justify-center hover:bg-cosmic-gold hover:text-cosmic-dark transition-all duration-300"
                  >
                    <span className="text-xs">{platform[0]}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-cosmic-gold/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-white/60 text-sm">
              © 2024 Spiritual Tablets. All rights reserved. Made with{' '}
              <Heart className="inline h-4 w-4 text-cosmic-gold fill-cosmic-gold" />{' '}
              for your spiritual journey.
            </div>
            <div className="flex gap-6 text-sm">
              {footerLinks.company.slice(-3).map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-white/60 hover:text-cosmic-gold transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
