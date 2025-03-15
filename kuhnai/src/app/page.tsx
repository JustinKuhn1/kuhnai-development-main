// filepath: c:\Users\ryank\Downloads\kuhnai-development-main\kuhnai\src\app\page.tsx
'use client';

import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedNavbar from '@/components/animated-navbar';
import HeroSection from '@/components/hero-section';
import FeaturesSection from '@/components/features-section';
import TestimonialsSection from '@/components/testimonials-section';
import CTASection from '@/components/cta-section';
import Footer from '@/components/footer';
import AuthModal from '@/components/AuthModal';

// Add custom animation keyframes
const floatAnimation = `
  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(20px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`;

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  // Set mounted state to true once component mounts
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Initialize GSAP ScrollTrigger only on client side
  useEffect(() => {
    if (!isMounted) return;

    // Register the ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
  }, [isMounted]);

  // Add animation keyframes to document
  useEffect(() => {
    if (!isMounted) return;

    const style = document.createElement('style');
    style.textContent = floatAnimation;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, [isMounted]);

  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* Navbar */}
      <AnimatedNavbar onLoginClick={() => setIsAuthModalOpen(true)} />

      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Call to Action Section */}
      <CTASection />

      {/* Footer */}
      <Footer />

      {/* Auth Modal */}
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </main>
  );
}