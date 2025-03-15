import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { Logo } from './ui/logo';
import { Button } from './ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';

const navItems = [
  { name: 'Solutions', href: '#solutions', subItems: [
    { name: 'Process Automation', href: '/solutions/automation' },
    { name: 'Business Intelligence', href: '/solutions/intelligence' },
    { name: 'Workflow Optimization', href: '/solutions/workflow' },
  ]},
  { name: 'Industries', href: '#industries', subItems: [
    { name: 'Healthcare', href: '/industries/healthcare' },
    { name: 'Finance', href: '/industries/finance' },
    { name: 'Manufacturing', href: '/industries/manufacturing' },
    { name: 'Retail', href: '/industries/retail' },
  ]},
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'About', href: '/about' },
];

export default function AnimatedNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();

  // Set mounted state on client-side
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Handle scroll events to change navbar appearance
  useEffect(() => {
    if (!isMounted) return;

    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMounted]);

  const handleDropdownToggle = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const navbarVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  const dropdownVariants = {
    closed: {
      opacity: 0,
      y: -5,
      height: 0,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      y: 0,
      height: 'auto',
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  return (
    <>
      <motion.header
        initial="hidden"
        animate="visible"
        variants={navbarVariants}
        className={`fixed top-0 left-0 right-0 z-50 px-4 py-3 transition-all duration-300 ${
          isScrolled || mobileMenuOpen ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo with subtle background when not scrolled */}
          <div className={`${isScrolled || mobileMenuOpen ? '' : 'rounded-lg px-2 py-1 bg-white/10 backdrop-blur-sm'}`}>
            <Logo size="md" color={(isScrolled || mobileMenuOpen) ? 'default' : 'white'} />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.subItems ? (
                  <div>
                    <button
                      onClick={() => handleDropdownToggle(item.name)}
                      className={`flex items-center space-x-1 px-2 py-1 rounded-md text-sm font-medium transition-colors ${
                        isScrolled ? 'text-zinc-800 hover:text-[#2A6B74]' : 'text-white hover:text-zinc-200'
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown size={14} />
                    </button>

                    <AnimatePresence>
                      {openDropdown === item.name && (
                        <motion.div
                          initial="closed"
                          animate="open"
                          exit="closed"
                          variants={dropdownVariants}
                          className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg overflow-hidden"
                        >
                          <div className="py-2">
                            {item.subItems.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="block px-4 py-2 text-sm text-zinc-700 hover:bg-zinc-100"
                                onClick={() => setOpenDropdown(null)}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`px-2 py-1 rounded-md text-sm font-medium transition-colors ${
                      isScrolled ? 'text-zinc-800 hover:text-[#2A6B74]' : 'text-white hover:text-zinc-200'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            <div className="ml-4 flex items-center space-x-3">
              <Button
                variant={isScrolled ? "outline" : "secondary"}
                size="sm"
                className={isScrolled ? "" : "bg-white/20 text-white hover:bg-white/30 border-white/30"}
              >
                Log in
              </Button>
              <Button
                size="sm"
                className={`${
                  isScrolled ? "bg-[#2A6B74] hover:bg-[#215760]" : "bg-white text-[#2A6B74] hover:bg-white/90"
                }`}
              >
                Request Demo
              </Button>
            </div>
          </nav>

          {/* Mobile menu button with background when not scrolled */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden ${isScrolled || mobileMenuOpen ? '' : 'rounded-full p-2 bg-white/10 backdrop-blur-sm'}`}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X size={24} className={(isScrolled || mobileMenuOpen) ? "text-zinc-800" : "text-white"} />
            ) : (
              <Menu size={24} className={(isScrolled || mobileMenuOpen) ? "text-zinc-800" : "text-white"} />
            )}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && isMounted && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            className="fixed inset-0 z-40 bg-white pt-20 pb-6 px-4 md:hidden"
          >
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <div key={item.name} className="border-b border-zinc-100 pb-4">
                  {item.subItems ? (
                    <>
                      <button
                        onClick={() => handleDropdownToggle(item.name)}
                        className="flex items-center justify-between w-full text-left text-zinc-800 font-medium"
                      >
                        <span>{item.name}</span>
                        <ChevronDown size={16} className={openDropdown === item.name ? "rotate-180 transition-transform" : "transition-transform"} />
                      </button>

                      <AnimatePresence>
                        {openDropdown === item.name && (
                          <motion.div
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={dropdownVariants}
                            className="mt-2 ml-4 space-y-2"
                          >
                            {item.subItems.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="block py-2 text-zinc-600"
                                onClick={() => {
                                  setOpenDropdown(null);
                                  setMobileMenuOpen(false);
                                }}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block text-zinc-800 font-medium"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}

              <div className="pt-4 flex flex-col space-y-3">
                <Button variant="outline" className="w-full">
                  Log in
                </Button>
                <Button className="w-full bg-[#2A6B74] hover:bg-[#215760]">
                  Request Demo
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
