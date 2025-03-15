import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

// Sample testimonials data
const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    position: 'CFO',
    company: 'Axion Healthcare',
    image: 'https://randomuser.me/api/portraits/women/32.jpg',
    quote: "KuhnAI's financial analytics tools completely transformed how we manage our operations budget. We've reduced processing times by 65% and improved accuracy significantly.",
    rating: 5
  },
  {
    id: 2,
    name: 'Michael Chen',
    position: 'Operations Director',
    company: 'NexTech Solutions',
    image: 'https://randomuser.me/api/portraits/men/42.jpg',
    quote: "Implementing KuhnAI's process automation platform has been a game-changer for our supply chain operations. We've streamlined workflows and reduced operational costs by 28%.",
    rating: 5
  },
  {
    id: 3,
    name: 'Amelia Rodriguez',
    position: 'HR Manager',
    company: 'Global Innovations',
    image: 'https://randomuser.me/api/portraits/women/45.jpg',
    quote: "The HR analytics suite from KuhnAI has transformed our talent management approach. It's like having a strategic advisor that helps us make better people decisions daily.",
    rating: 4
  },
  {
    id: 4,
    name: 'David Patel',
    position: 'CTO',
    company: 'VentureCraft',
    image: 'https://randomuser.me/api/portraits/men/22.jpg',
    quote: "We've integrated KuhnAI's solutions across our entire tech infrastructure. The seamless implementation and tangible ROI have made this our best strategic investment to date.",
    rating: 5
  }
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  // Set mounted state on client-side
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Handle auto-rotation
  useEffect(() => {
    if (!autoplay || !inView || !isMounted) return;

    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [autoplay, inView, isMounted]);

  const handlePrev = () => {
    setAutoplay(false);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setAutoplay(false);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const handleDotClick = (index: number) => {
    setAutoplay(false);
    setCurrent(index);
  };

  return (
    <section ref={ref} className="py-24 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <svg className="absolute -top-20 -left-20 text-[#2A6B74]/5" width="300" height="300" viewBox="0 0 200 200">
          <path fill="currentColor" d="M37.5,-61.2C47.2,-53.9,53.3,-41.5,59.3,-29.3C65.2,-17.1,71,-5.1,71.7,7.5C72.3,20.2,67.8,33.4,59.2,43.2C50.7,53,38.1,59.3,25.1,63.8C12.1,68.3,-1.4,71,-13.6,68C-25.9,65,-36.9,56.3,-47.8,46.1C-58.8,35.9,-69.8,24.2,-75.4,9.7C-81.1,-4.8,-81.4,-22.3,-74.3,-36.4C-67.2,-50.6,-52.7,-61.5,-38.4,-66.7C-24,-71.9,-10,-71.3,2,-74.7C14,-78,28,-68.5,37.5,-61.2Z" transform="translate(100 100)" />
        </svg>
        <svg className="absolute -bottom-40 -right-20 text-[#2A6B74]/5" width="400" height="400" viewBox="0 0 200 200">
          <path fill="currentColor" d="M41.3,-69.3C53.5,-62.9,63.5,-51.6,70.3,-38.6C77.1,-25.6,80.8,-10.9,78.1,2.4C75.5,15.8,66.5,26.7,57.4,37C48.3,47.3,39.1,56.9,27.7,62.5C16.3,68.1,2.8,69.5,-10.8,68.5C-24.3,67.5,-37.8,64,-48.9,56.2C-60,48.4,-68.6,36.4,-73,22.4C-77.3,8.4,-77.4,-7.5,-74.2,-22.7C-70.9,-37.9,-64.4,-52.4,-53.2,-59.2C-41.9,-66,-20.9,-65.3,-3.4,-60.3C14.2,-55.3,29.1,-45.9,41.3,-39.3Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-900">
            Trusted by Business Leaders
          </h2>
          <p className="text-xl text-zinc-600 max-w-3xl mx-auto">
            Join hundreds of companies that are transforming their operations with KuhnAI solutions
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Carousel navigation */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 z-10">
              <button
                onClick={handlePrev}
                className="bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} className="text-zinc-700" />
              </button>
            </div>

            <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12 z-10">
              <button
                onClick={handleNext}
                className="bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} className="text-zinc-700" />
              </button>
            </div>

            {/* Testimonials Carousel */}
            <div className="overflow-hidden relative px-4 py-8 min-h-[350px]">
              {isMounted && (
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="bg-white rounded-xl shadow-lg p-6 md:p-8"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center">
                        <img
                          src={testimonials[current].image}
                          alt={testimonials[current].name}
                          className="w-16 h-16 rounded-full object-cover border-2 border-[#2A6B74]"
                          crossOrigin="anonymous"
                        />
                        <div className="ml-4">
                          <h3 className="font-semibold text-lg">{testimonials[current].name}</h3>
                          <p className="text-zinc-600 text-sm">
                            {testimonials[current].position}, {testimonials[current].company}
                          </p>
                        </div>
                      </div>
                      <div className="hidden md:flex items-center">
                        {[...Array(testimonials[current].rating)].map((_, i) => (
                          <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                    </div>

                    <div className="relative">
                      <Quote size={40} className="absolute -top-2 -left-2 text-[#2A6B74]/10" />
                      <p className="text-lg md:text-xl text-zinc-700 leading-relaxed pl-6">
                        {testimonials[current].quote}
                      </p>
                    </div>

                    <div className="flex md:hidden items-center mt-4 justify-center">
                      {[...Array(testimonials[current].rating)].map((_, i) => (
                        <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              )}
            </div>

            {/* Carousel indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    index === current ? 'bg-[#2A6B74]' : 'bg-zinc-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
