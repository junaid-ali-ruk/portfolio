'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useTheme } from 'next-themes';

interface NavItem {
  name: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: { name: string; href: string; description?: string }[];
}

const navItems: NavItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Header1() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { theme } = useTheme();

  // Prevent hydration mismatch
  useEffect(() => setIsMounted(true), []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isMounted) return null;

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  const mobileMenuVariants = {
    closed: { opacity: 0, height: 0 },
    open: { opacity: 1, height: 'auto' },
  };

  return (
    <motion.header
      className={`fixed top-0 right-0 left-0 z-[100] transition-all duration-300 ${isScrolled
          ? 'backdrop-blur-xl shadow-md bg-black/20'
          : 'bg-transparent shadow-none'
        }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <Link href="#home" prefetch={false} className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-rose-500 to-rose-700">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <span className="bg-gradient-to-r from-rose-500 to-rose-700 bg-clip-text text-lg sm:text-xl font-bold text-transparent">
                Junaid Ali
              </span>
            </Link>
          </motion.div>

          {/* Desktop Nav */}
          <nav className="hidden items-center space-x-8 lg:flex">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  prefetch={false}
                  className="text-white flex items-center space-x-1 font-medium transition-colors duration-200 hover:text-rose-500"
                >
                  <span>{item.name}</span>
                  {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
                </Link>

                {item.hasDropdown && (
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-64 rounded-xl border border-border bg-background/95 shadow-xl backdrop-blur-lg"
                      >
                        {item.dropdownItems?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            prefetch={false}
                            className="block px-4 py-3 transition-colors duration-200 hover:bg-muted"
                          >
                            <div className="font-medium text-foreground">{dropdownItem.name}</div>
                            {dropdownItem.description && (
                              <div className="text-sm text-muted-foreground">{dropdownItem.description}</div>
                            )}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <motion.div whileTap={{ scale: 0.95 }}>
              <Link
                href="#contact"
                prefetch={false}
                className="inline-flex items-center space-x-2 rounded-full bg-gradient-to-r from-rose-500 to-rose-700 px-6 py-2.5 font-medium text-white transition duration-200 "
              >
                <span>Let's connect</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>

          {/* Mobile Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
            className="lg:hidden rounded-lg p-2 hover:bg-white/10 transition-colors duration-200 min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
          </motion.button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="lg:hidden overflow-hidden"
            >
              <div className="mt-4 space-y-2 rounded-xl border border-white/10 bg-black/80 py-4 shadow-xl backdrop-blur-lg">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    prefetch={false}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-3 font-medium text-white transition-colors duration-200 hover:bg-white/10 min-h-[44px] flex items-center"
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="px-4 py-2 space-y-2">
                  <Link
                    href="#contact"
                    prefetch={false}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full rounded-lg bg-gradient-to-r from-rose-500 to-rose-700 py-3 text-center font-medium text-white transition-all duration-200 hover:shadow-lg min-h-[44px] flex items-center justify-center"
                  >
                    Let's Connect
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}

