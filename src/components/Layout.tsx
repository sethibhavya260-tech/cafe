import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function FloatingLanterns() {
  const lanterns = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    left: `${10 + Math.random() * 80}%`,
    delay: `${i * 0.8}s`,
    duration: `${6 + Math.random() * 4}s`,
    size: 20 + Math.random() * 15,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {lanterns.map((lantern) => (
        <div
          key={lantern.id}
          className="absolute animate-lantern-float animate-lantern-glow"
          style={{
            left: lantern.left,
            top: `${20 + Math.random() * 60}%`,
            animationDelay: lantern.delay,
            animationDuration: lantern.duration,
          }}
        >
          <svg width={lantern.size} height={lantern.size * 1.4} viewBox="0 0 30 42" fill="none">
            <ellipse cx="15" cy="24" rx="10" ry="14" fill="url(#lanternGrad)" opacity="0.6" />
            <ellipse cx="15" cy="24" rx="7" ry="10" fill="url(#lanternInner)" opacity="0.8" />
            <rect x="12" y="8" width="6" height="4" rx="1" fill="#8b6914" opacity="0.7" />
            <line x1="15" y1="4" x2="15" y2="8" stroke="#8b6914" strokeWidth="1" opacity="0.5" />
            <defs>
              <radialGradient id="lanternGrad">
                <stop offset="0%" stopColor="#ffd54f" />
                <stop offset="100%" stopColor="#e6a800" />
              </radialGradient>
              <radialGradient id="lanternInner">
                <stop offset="0%" stopColor="#fff9e0" />
                <stop offset="100%" stopColor="#ffc107" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      ))}
    </div>
  );
}

function FairyLights() {
  const lights = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${(i / 20) * 100}%`,
    delay: `${Math.random() * 3}s`,
  }));

  return (
    <div className="absolute top-0 left-0 right-0 h-6 pointer-events-none">
      {lights.map((light) => (
        <div
          key={light.id}
          className="absolute top-2 w-2 h-2 rounded-full animate-twinkle"
          style={{
            left: light.left,
            animationDelay: light.delay,
            backgroundColor: light.id % 3 === 0 ? '#ffd54f' : light.id % 3 === 1 ? '#b794f4' : '#fff0b8',
            boxShadow: `0 0 6px ${light.id % 3 === 0 ? '#ffc107' : light.id % 3 === 1 ? '#9f6de8' : '#ffe48a'}`,
          }}
        />
      ))}
    </div>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/menu', label: 'Menu' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/about', label: 'Our Story' },
    { path: '/events', label: 'Events' },
    { path: '/location', label: 'Visit Us' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen parchment-bg relative">
      <FloatingLanterns />
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-parchment-50/95 backdrop-blur-md shadow-lg border-b border-gold-200' 
          : 'bg-transparent'
      }`}>
        <FairyLights />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link to="/" className="flex items-center gap-2 group">
              <span className="text-2xl">🏰</span>
              <span className="font-[family-name:var(--font-storybook)] text-lg md:text-xl text-lavender-800 group-hover:text-lavender-600 transition-colors">
                The Tower Café
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-link font-[family-name:var(--font-elegant)] text-base font-medium transition-colors ${
                    location.pathname === link.path 
                      ? 'text-lavender-700' 
                      : 'text-wood-600 hover:text-lavender-600'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/contact" className="btn-magical text-sm px-5 py-2">
                Book a Table
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-lavender-700 hover:bg-lavender-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-parchment-50/98 backdrop-blur-md border-b border-gold-200"
            >
              <div className="px-4 py-4 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block px-4 py-2 rounded-lg font-[family-name:var(--font-elegant)] text-lg transition-colors ${
                      location.pathname === link.path
                        ? 'bg-lavender-100 text-lavender-700'
                        : 'text-wood-600 hover:bg-lavender-50 hover:text-lavender-600'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link to="/contact" className="block btn-magical text-center mt-4">
                  Book a Table ✨
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className="relative z-10">
        {children}
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-gradient-to-b from-parchment-100 to-wood-100 border-t border-gold-200 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-3xl">🏰</span>
                <h3 className="font-[family-name:var(--font-storybook)] text-xl text-lavender-800">
                  The Tower Café
                </h3>
              </div>
              <p className="font-[family-name:var(--font-elegant)] text-wood-600 text-lg leading-relaxed">
                Where fairy tales meet mountain air. A whimsical retreat nestled in the clouds, 
                waiting to weave your story into its magic.
              </p>
            </div>
            <div>
              <h4 className="font-[family-name:var(--font-storybook)] text-sm text-lavender-700 mb-4">
                ✨ Quick Links
              </h4>
              <div className="space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="block font-[family-name:var(--font-elegant)] text-wood-600 hover:text-lavender-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-[family-name:var(--font-storybook)] text-sm text-lavender-700 mb-4">
                🕐 Opening Hours
              </h4>
              <div className="font-[family-name:var(--font-elegant)] text-wood-600 space-y-1 text-lg">
                <p>Monday – Friday: 9am – 9pm</p>
                <p>Saturday – Sunday: 8am – 10pm</p>
                <p className="text-lavender-600 mt-3">📞 +91 98765 43210</p>
                <p className="text-lavender-600">📧 hello@thetowercafe.com</p>
              </div>
              <div className="flex gap-4 mt-4">
                {['Instagram', 'Facebook', 'Twitter'].map((social) => (
                  <a key={social} href="#" className="text-wood-500 hover:text-lavender-600 transition-colors text-xl" aria-label={social}>
                    {social === 'Instagram' ? '📸' : social === 'Facebook' ? '👥' : '🐦'}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="fairy-divider mt-8">
            <Sparkles size={16} className="text-gold-500" />
          </div>
          <p className="text-center font-[family-name:var(--font-elegant)] text-wood-500 text-sm mt-4">
            © 2026 The Tower Café. All enchantments reserved. ✨
          </p>
        </div>
      </footer>
    </div>
  );
}
