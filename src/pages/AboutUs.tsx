import { Lightbulb, Compass, Shield, Heart, Target, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { SEO } from '../components/SEO';
import { AnimatedSection } from '../components/AnimatedSection';
import { StaggerContainer, StaggerItem } from '../components/StaggerContainer';
import { ParallaxSection } from '../components/ParallaxSection';
import { Logo } from '../components/Logo';
import founderImage from '../assets/orlando.png';

export function AboutUs() {
  const values = [
    {
      icon: Lightbulb,
      title: 'Clarity',
      description: 'We transform complex financial data into clear, actionable insights that empower confident decision-making.',
    },
    {
      icon: Compass,
      title: 'Guidance',
      description: 'More than compliance—we\'re your strategic partner, providing consultative guidance that goes beyond the numbers.',
    },
    {
      icon: Shield,
      title: 'Peace of Mind',
      description: 'Your stability in an uncertain world. We handle the complexities so you can focus on what matters most.',
    },
    {
      icon: Heart,
      title: 'Partnership',
      description: 'We work alongside you, not for you. Your success is our success, and we\'re invested in your long-term growth.',
    },
    {
      icon: Target,
      title: 'Precision',
      description: 'Meticulous attention to detail in every engagement. We deliver accurate, reliable financial solutions you can trust.',
    },
  ];

  const team = [
    {
      name: 'Orlando Ahumada',
      role: 'Founder & Owner',
      specialty: 'Accounting, Tax & Business Advisory',
      description: 'Carlos founded FixPoint with a vision to transform how accounting services are delivered. With extensive experience in both corporate and entrepreneurial finance, he brings a unique consultative approach that goes beyond traditional accounting. Fluent in English and Spanish, Carlos is dedicated to providing personalized financial guidance that empowers business owners and individuals to achieve their goals with clarity and confidence.',
      image: founderImage,
    },
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="About FixPoint | Venice, Sarasota & Bradenton Accounting Firm"
        description="Meet FixPoint Accounting & Advisory—your trusted local partner in Southwest Florida. Serving Venice, Sarasota, Bradenton & North Port with expert accounting, tax, and business consulting services since 2010."
        keywords="accounting firm Venice FL, CPA firm Sarasota, business advisors Bradenton, local accountant Sarasota County, Venice financial consultants, Southwest Florida accounting, tax advisors Venice, bookkeeping Sarasota"
        ogImage="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&h=630&fit=crop"
      />
      
      {/* Hero Section */}
      <section className="bg-[#092942] text-white py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom right, #F6921E, transparent)',
            opacity: 0.1
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <AnimatedSection delay={0.1}>
              <span className="font-inter text-sm uppercase tracking-wider text-[#F6921E]">
                About FixPoint
              </span>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <h1 className="font-garamond text-4xl md:text-5xl font-bold mt-4 mb-6">
                Venice & Sarasota's Trusted CPA Firm | Expert Accounting & Tax Services in Southwest Florida
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <p className="font-jost text-lg leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                Serving Venice, Sarasota, Bradenton, and North Port with professional accounting, tax preparation, and business advisory services. FixPoint Accounting & Advisory is your local partner for financial clarity, stability, and strategic guidance throughout Southwest Florida.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <AnimatedSection delay={0.1}>
                <span className="font-inter text-sm uppercase tracking-wider text-[#F6921E]">
                  Our Story
                </span>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <h2 className="font-garamond text-3xl md:text-4xl font-bold text-[#092942]">
                  Building Trust Through Excellence
                </h2>
              </AnimatedSection>
              <AnimatedSection delay={0.3}>
                <p className="font-jost text-[#949599] leading-relaxed">
                  FixPoint was founded on a simple principle: businesses deserve a trusted partner 
                  who provides clarity, precision, and strategic guidance in their financial journey. 
                  What began with a vision to redefine accounting services has evolved into a comprehensive 
                  advisory practice that serves individuals and businesses across Southwest Florida.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.4}>
                <p className="font-jost text-[#949599] leading-relaxed">
                  Our name reflects our mission — to be the stable, reliable point that businesses 
                  can depend on, regardless of market conditions. We combine deep technical expertise 
                  with a genuine commitment to understanding your unique challenges and goals.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.5}>
                <p className="font-jost text-[#949599] leading-relaxed">
                  Rather than focusing on volume, we prioritize meaningful relationships and personalized 
                  service. Every engagement is approached with meticulous attention to detail and a 
                  consultative mindset that transforms traditional accounting into strategic partnership.
                </p>
              </AnimatedSection>
            </div>
            <AnimatedSection delay={0.3} direction="left">
              <div className="relative">
                <ParallaxSection offset={-30}>
                  <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-xl">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjgzNjYxNzl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Modern office interior"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </ParallaxSection>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="font-inter text-sm uppercase tracking-wider text-[#F6921E]">
              Our Values
            </span>
            <h2 className="font-garamond text-3xl md:text-4xl font-bold text-[#092942] mt-4 mb-4">
              The Principles That Define Us
            </h2>
            <p className="font-jost text-lg text-[#949599] max-w-3xl mx-auto">
              These five core values are more than words on a page—they're the foundation of every client relationship, 
              every strategic decision, and every solution we deliver.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto" staggerDelay={0.1}>
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <StaggerItem key={index}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="border-[#092942]/10 text-center hover:shadow-lg transition-shadow h-full">
                      <CardContent className="p-8">
                        <motion.div 
                          className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                          style={{ backgroundColor: 'rgba(246, 146, 30, 0.1)' }}
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        >
                          <Icon className="w-8 h-8 text-[#F6921E]" />
                        </motion.div>
                        <h3 className="font-inter text-lg font-semibold text-[#092942] mb-3">
                          {value.title}
                        </h3>
                        <p className="font-jost text-sm text-[#949599] leading-relaxed">
                          {value.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="font-inter text-sm uppercase tracking-wider text-[#F6921E]">
              Our Leadership
            </span>
            <h2 className="font-garamond text-3xl md:text-4xl font-bold text-[#092942] mt-4 mb-4">
              Meet the Founder
            </h2>
            <p className="font-jost text-lg text-[#949599] max-w-2xl mx-auto">
              Led with passion, expertise, and a commitment to your success.
            </p>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            {team.map((member, index) => (
              <AnimatedSection key={index} delay={0.2}>
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="border-[#092942]/10 overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="grid md:grid-cols-5 gap-8 p-8">
                      <div className="md:col-span-2 flex justify-center items-start">
                        <motion.div
                          className="w-64 h-64 flex-shrink-0"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.5 }}
                        >
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-contain"
                          />
                        </motion.div>
                      </div>
                      <div className="md:col-span-3 flex flex-col justify-center">
                        <h3 className="font-garamond text-3xl font-bold text-[#092942] mb-2">
                          {member.name}
                        </h3>
                        <p className="font-inter text-lg text-[#F6921E] mb-2">{member.role}</p>
                        <p className="font-jost text-sm text-[#949599] mb-4 font-semibold">
                          {member.specialty}
                        </p>
                        <p className="font-jost text-[#949599] leading-relaxed">
                          {member.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#092942] text-white relative overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom right, rgba(246, 146, 30, 0.05), rgba(246, 146, 30, 0))'
          }}
          animate={{
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <AnimatedSection delay={0.1}>
            <h2 className="font-garamond text-3xl md:text-4xl font-bold mb-6">
              Ready to Partner With Us?
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="font-jost text-lg mb-8 max-w-2xl mx-auto" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
              Let's discuss how FixPoint can support your financial goals and business growth.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-[#F6921E] hover:bg-[#d67d19] text-white font-inter"
                >
                  <Link to="/contact">
                    Get in Touch <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#092942] font-inter backdrop-blur-sm bg-white/10"
                >
                  <Link to="/services">View Our Services</Link>
                </Button>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}