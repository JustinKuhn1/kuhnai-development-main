import { useRef, useEffect } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from './ui/button';
import { ArrowRight, CalendarClock } from 'lucide-react';

export default function CTASection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  // GSAP Animation
  useEffect(() => {
    if (!containerRef.current || !inView) return;

    const container = containerRef.current;

    gsap.from(container.querySelector('.gsap-bg'), {
      scale: 0.9,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    });

    gsap.from(container.querySelectorAll('.gsap-text > *'), {
      y: 30,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      delay: 0.3,
      ease: 'power2.out'
    });

  }, [inView]);

  return (
    <section ref={ref} className="py-20 overflow-hidden">
      <div
        ref={containerRef}
        className="container mx-auto px-4"
      >
        <div
          className="gsap-bg relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#1e3a5f] to-[#2A6B74] p-12 md:p-16"
        >
          {/* Animated circles in background */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="absolute w-64 h-64 rounded-full bg-white/5 -top-20 -right-20" />
            <div className="absolute w-96 h-96 rounded-full bg-white/5 -bottom-40 -left-20" />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="gsap-text max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Transform Your Business Operations
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Join industry leaders who are optimizing workflows, reducing costs, and driving growth with our AI-powered business solutions.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-[#2A6B74] hover:bg-white/90 rounded-full"
                >
                  <Link href="/ai" className="flex items-center">
                    Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="bg-white text-[#2A6B74] hover:bg-white/90 rounded-full"
                >
                  <Link href="/pro" className="flex items-center">
                    <CalendarClock className="mr-2 h-4 w-4" /> Schedule Consultation
                  </Link>
                </Button>
              </div>
            </div>

            <div className="hidden md:block">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                className="bg-white/10 rounded-full p-6 backdrop-blur-sm"
              >
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-32 h-32">
                  <path
                    d="M12 2L2 7L12 12L22 7L12 2Z"
                    fill="white"
                    strokeWidth="1.5"
                    stroke="white"
                  />
                  <path
                    d="M2 17L12 22L22 17"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M2 12L12 17L22 12"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
