import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { Button } from './ui/button';

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const particlesContainerRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted || !particlesContainerRef.current) return;

    // Create particles only on the client side to avoid hydration issues
    const particles = [];
    const container = particlesContainerRef.current;

    // Clear any existing particles
    container.innerHTML = '';

    // Create 20 random particles
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div');
      particle.className = 'absolute rounded-full bg-white/10';

      const size = Math.random() * 10 + 5;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.animation = `float ${Math.random() * 10 + 10}s infinite ease-in-out`;

      container.appendChild(particle);
      particles.push(particle);
    }
  }, [isMounted]);

  useEffect(() => {
    const section = sectionRef.current;
    const text = textRef.current;
    const image = imageRef.current;

    if (!section || !text || !image) return;

    const tl = gsap.timeline();

    // Animate the gradient background subtly
    gsap.to(section, {
      backgroundPosition: '100% 100%',
      duration: 15,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

    // Animate floating elements
    gsap.to(image, {
      y: -20,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

    // Initial animations
    tl.from(text.children, {
      opacity: 0,
      y: 50,
      stagger: 0.1,
      duration: 0.8,
      ease: 'power3.out'
    });
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#1e3a5f] via-[#2A6B74] to-[#1b2838] bg-[length:200%_200%] bg-[0%_0%] flex items-center"
    >
      {/* Animated particles/shapes container - empty initially */}
      <div ref={particlesContainerRef} className="absolute inset-0 pointer-events-none"></div>

      <div className="container mx-auto px-4 py-12 md:py-24 relative z-10 flex flex-col md:flex-row items-center">
        {/* Text content */}
        <motion.div
          ref={textRef}
          className="md:w-1/2 text-white mb-12 md:mb-0"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            variants={itemVariants}
          >
            Simplify Your Business<br />
            <span className="text-white/90">With AI Solutions</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl mb-8 text-white/80 max-w-xl"
            variants={itemVariants}
          >
            KuhnAI streamlines your operations with intelligent automation, data insights, and AI-powered decision support.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            variants={itemVariants}
          >
            <Button
              asChild
              size="lg"
              className="bg-white text-[#2A6B74] hover:bg-white/90 font-medium px-8 rounded-full"
            >
              <Link href="/ai">
                Try KuhnAI
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-white text-[#2A6B74] hover:bg-white/90 font-medium px-8 rounded-full"
            >
              <Link href="/pro">
                Book a Demo
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* 3D/Animated visual */}
        <div ref={imageRef} className="md:w-1/2 flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-gradient-to-r from-teal-300/30 to-blue-500/20 flex items-center justify-center backdrop-blur-xl">
              <div className="w-[220px] h-[220px] md:w-[360px] md:h-[360px] rounded-full bg-gradient-to-r from-[#2A6B74] to-[#3a8f9b] flex items-center justify-center shadow-lg">
                <div className="w-36 h-36 md:w-60 md:h-60 rounded-full bg-white p-4 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-24 h-24 md:w-40 md:h-40">
                    <path
                      d="M12 2L2 7L12 12L22 7L12 2Z"
                      fill="#2A6B74"
                      stroke="#2A6B74"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M2 17L12 22L22 17"
                      stroke="#2A6B74"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M2 12L12 17L22 12"
                      stroke="#2A6B74"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-8 h-12 rounded-full border-2 border-white/30 flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
