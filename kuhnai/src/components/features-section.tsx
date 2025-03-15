import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BrainCircuit, BarChart3, Workflow, Shield, Users, Clock } from 'lucide-react';

const features = [
  {
    icon: BrainCircuit,
    title: 'AI-Powered Analytics',
    description: 'Transform your business data into actionable insights with our advanced analytics solutions.'
  },
  {
    icon: Workflow,
    title: 'Process Automation',
    description: 'Streamline repetitive tasks and workflows with intelligent automation that scales with your business.'
  },
  {
    icon: BarChart3,
    title: 'Performance Tracking',
    description: 'Monitor key metrics and visualize business performance with real-time dashboards and reports.'
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Enhance team productivity with AI-assisted collaboration tools and knowledge sharing capabilities.'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Keep your business data secure with enterprise-grade security and compliance features.'
  },
  {
    icon: Clock,
    title: 'Efficiency Gains',
    description: 'Reduce operational costs and save valuable time with optimized business processes and workflows.'
  }
];

export default function FeaturesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section className="py-24 bg-zinc-50">
      <div className="container mx-auto px-4" ref={containerRef}>
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-900">
            Business Solutions for Every Need
          </h2>
          <p className="text-xl text-zinc-600 max-w-3xl mx-auto">
            KuhnAI provides intelligent tools that simplify operations, enhance productivity, and drive growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  index: number;
}

function FeatureCard({ icon: Icon, title, description, index }: FeatureCardProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '-50px 0px',
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-zinc-100 overflow-hidden group relative"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2A6B74] to-teal-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>

      <div className="mb-4 bg-[#e8f4f5] p-3 rounded-lg inline-block">
        <Icon size={32} className="text-[#2A6B74]" />
      </div>

      <h3 className="text-xl font-semibold mb-2 text-zinc-800">{title}</h3>
      <p className="text-zinc-600">{description}</p>

      <div className="mt-4 h-1.5 w-12 bg-zinc-200 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: '100%' } : { width: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="h-full bg-[#2A6B74] rounded-full"
        />
      </div>
    </motion.div>
  );
}
