import { useState } from 'react';
import { Menu, X, Search, Facebook, Twitter, Instagram, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEventsOpen, setIsEventsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Events', href: '#events' }, // Events handled separately below
    { name: 'Resources', href: '#resources' },
    { name: 'Locations', href: '#locations' },
    { name: 'Register', href: '#register' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <>
      {/* Top announcement bar */}
      <div className="bg-spiritual-green text-white text-sm py-2">
        <div className="container mx-auto px-4 flex items-center justify-center gap-4 text-center">
          <span>✨ Latest Workshops</span>
          <span>🌟 Global Annual Programs</span>
          <span>👥 Online Zoom Sessions Patient God</span>
        </div>
      </div>

      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=50&h=50&fit=crop"
                alt="Spiritual Tablets Logo"
                className="h-12 w-12 rounded-full mr-3"
              />
              <div>
                <h1 className="text-xl font-bold text-spiritual-green">Spiritual Tablets</h1>
                <p className="text-xs text-gray-600">Integrity Transparency Accountability</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 relative">
              {navItems.map((item) =>
                item.name === 'Events' ? (
                  <div key="Events" className="relative">
                    <button
                      onClick={() => setIsEventsOpen(!isEventsOpen)}
                      className="flex items-center space-x-1 text-gray-700 hover:text-spiritual-green transition-colors font-medium"
                    >
                      <span>Events</span>
                      <ChevronDown className={`h-4 w-4 transition-transform ${isEventsOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isEventsOpen && (
                      <div className="absolute top-full mt-2 bg-white border rounded-md shadow-md z-50 w-56">
                        <a
                          href="#meditation"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-spiritual-green/10 hover:text-spiritual-green transition-colors"
                          onClick={() => setIsEventsOpen(false)}
                        >
                          Meditation
                        </a>
                        <a
                          href="#workshops"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-spiritual-green/10 hover:text-spiritual-green transition-colors"
                          onClick={() => setIsEventsOpen(false)}
                        >
                          Workshops
                        </a>
                        <a
                          href="#anandho"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-spiritual-green/10 hover:text-spiritual-green transition-colors"
                          onClick={() => setIsEventsOpen(false)}
                        >
                          Anandho Brahma
                        </a>
                        <a
                          href="#global-programs"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-spiritual-green/10 hover:text-spiritual-green transition-colors"
                          onClick={() => setIsEventsOpen(false)}
                        >
                          Global Annual Programs
                        </a>
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-spiritual-green transition-colors duration-300 font-medium"
                  >
                    {item.name}
                  </a>
                )
              )}
            </nav>

            {/* Right side buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button className="bg-spiritual-green hover:bg-spiritual-green/90 text-white">
                Donate
              </Button>
              <div className="flex items-center space-x-2">
                <Twitter className="h-5 w-5 text-gray-600 hover:text-spiritual-green cursor-pointer" />
                <Facebook className="h-5 w-5 text-gray-600 hover:text-spiritual-green cursor-pointer" />
                <Instagram className="h-5 w-5 text-gray-600 hover:text-spiritual-green cursor-pointer" />
                <Search className="h-5 w-5 text-gray-600 hover:text-spiritual-green cursor-pointer" />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="lg:hidden mt-4 pb-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4 pt-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-spiritual-green transition-colors duration-300 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <Button className="bg-spiritual-green hover:bg-spiritual-green/90 text-white w-full mt-4">
                  Donate
                </Button>
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
