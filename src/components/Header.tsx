'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
      isScrolled 
        ? 'bg-white/20 backdrop-blur-2xl shadow-2xl border-b-2 border-white/30' 
        : 'bg-white/20 backdrop-blur-2xl shadow-2xl border-b-2 border-white/30'
    }`}>
      {/* Background Pattern */}
      <div className={`absolute inset-0 transition-opacity duration-500 ${
        isScrolled ? 'opacity-20' : 'opacity-0'
      }`}>
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%233B82F6' fill-opacity='0.6'%3E%3Ccircle cx='20' cy='20' r='2'/%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Contact Bar */}
        <div className="flex justify-end items-center h-12 border-b border-white/10">
          <div className="flex items-center space-x-6 text-sm">
            <div className="flex items-center group">
              <div className={`p-2 rounded-xl transition-all duration-500 ${
                isScrolled ? 'bg-primary/20 text-primary' : 'bg-primary/20 text-primary'
              } group-hover:bg-primary/30 group-hover:text-primary group-hover:scale-110`}>
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <span className={`ml-2 transition-colors duration-500 font-medium text-xs ${
                isScrolled ? 'text-primary' : 'text-primary'
              } group-hover:text-primary`}>
                unanimouscommunications89@gmail.com
              </span>
            </div>
            <div className="flex items-center group">
              <div className={`p-2 rounded-xl transition-all duration-500 ${
                isScrolled ? 'bg-primary/20 text-primary' : 'bg-primary/20 text-primary'
              } group-hover:bg-primary/30 group-hover:text-primary group-hover:scale-110`}>
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <span className={`ml-2 transition-colors duration-500 font-medium text-xs ${
                isScrolled ? 'text-primary' : 'text-primary'
              } group-hover:text-primary`}>
                Lahore, Punjab
              </span>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center group">
              <div className="relative w-40 h-40 transition-all duration-500 group-hover:scale-110">
                <Image
                  src="/assets/logo.png"
                  alt="unanimous communications Logo"
                  fill
                  className="object-contain drop-shadow-lg"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-2">
            {[
              { href: '/', label: 'Home' },
              { href: '/about-us', label: 'About Us' },
              { href: '/services', label: 'Services' },
              { href: '/our-team', label: 'Our Team' },
              { href: '/contact', label: 'Contact Us' },
              { href: '/careers', label: 'Career' }
            ].map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 rounded-xl font-semibold transition-all duration-500 group overflow-hidden ${
                    isActive
                      ? isScrolled 
                        ? 'text-primary bg-primary/10' 
                        : 'text-primary bg-primary/10'
                      : isScrolled 
                        ? 'text-primary hover:text-primary hover:bg-primary/10' 
                        : 'text-primary hover:text-primary hover:bg-primary/10'
                  }`}
                >
                {/* Background Line Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ${
                  isScrolled ? 'opacity-100' : 'opacity-0'
                }`}></div>
                
                {/* Border Line Effect */}
                <div className={`absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-primary/40 group-hover:to-accent/40 transition-all duration-500 ${
                  isScrolled ? 'opacity-100' : 'opacity-0'
                }`}></div>
                
                {/* Text */}
                <span className="relative z-10 text-sm">{item.label}</span>
                
                {/* Bottom Line Animation */}
                <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ${
                  isScrolled ? 'opacity-100' : 'opacity-0'
                }`}></div>
                
                {/* Floating Elements */}
                <div className={`absolute top-1 right-1 w-0.5 h-0.5 bg-primary/60 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse ${
                  isScrolled ? 'opacity-0' : 'opacity-0'
                }`}></div>
                <div className={`absolute bottom-1 left-1 w-0.5 h-0.5 bg-accent/60 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 animate-pulse ${
                  isScrolled ? 'opacity-0' : 'opacity-0'
                }`}></div>
              </Link>
            );
            })}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-xl transition-all duration-500 ${
                isScrolled 
                  ? 'text-primary hover:bg-primary/20' 
                  : 'text-primary hover:bg-primary/20'
              }`}
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className={`px-2 pt-2 pb-3 space-y-2 sm:px-3 border-t-2 transition-all duration-500 ${
              isScrolled 
                ? 'bg-white/20 backdrop-blur-2xl border-white/30' 
                : 'bg-white/20 backdrop-blur-2xl border-white/30'
            }`}>
              {[
                { href: '/', label: 'Home' },
                { href: '/about-us', label: 'About Us' },
                { href: '/services', label: 'Services' },
                { href: '/our-team', label: 'Our Team' },
                { href: '/contact', label: 'Contact Us' },
                { href: '/careers', label: 'Career' }
              ].map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative block px-4 py-3 rounded-xl font-semibold transition-all duration-500 overflow-hidden ${
                      isActive
                        ? isScrolled 
                          ? 'text-primary bg-primary/10' 
                          : 'text-primary bg-primary/10'
                        : isScrolled 
                          ? 'text-primary hover:text-primary hover:bg-primary/10' 
                          : 'text-primary hover:text-primary hover:bg-primary/10'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                                      {/* Background Line Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 transform scale-x-0 hover:scale-x-100 transition-transform duration-500 origin-left ${
                      isScrolled ? 'opacity-100' : 'opacity-0'
                    }`}></div>
                    
                    {/* Border Line Effect */}
                    <div className={`absolute inset-0 rounded-xl border-2 border-transparent hover:border-gradient-to-r hover:from-primary/40 hover:to-accent/40 transition-all duration-500 ${
                      isScrolled ? 'opacity-100' : 'opacity-0'
                    }`}></div>
                    
                    {/* Text */}
                    <span className="relative z-10 text-sm">{item.label}</span>
                    
                    {/* Bottom Line Animation */}
                    <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-accent transform scale-x-0 hover:scale-x-100 transition-transform duration-500 origin-left ${
                      isScrolled ? 'opacity-100' : 'opacity-0'
                    }`}></div>
                  </Link>
                );
                })}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 