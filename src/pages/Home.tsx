import { motion } from "motion/react";
import {
  TrendingUp,
  Shield,
  Users,
  ArrowRight,
  CheckCircle2,
  Award,
  Target,
  TrendingDown,
  Lightbulb,
  BarChart3,
  BookOpen,
  Globe,
  Calculator,
  DollarSign,
  FileText,
  PieChart,
  TrendingUpIcon,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router";
import { AnimatedSection } from "../components/AnimatedSection";
import {
  StaggerContainer,
  StaggerItem,
} from "../components/StaggerContainer";
import { AnimatedCounter } from "../components/AnimatedCounter";
import { ParallaxSection } from "../components/ParallaxSection";
import { SEO } from "../components/SEO";
import { StructuredData } from "../components/StructuredData";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { MouseParallax3D } from "../components/MouseParallax3D";
import { FloatingElement } from "../components/FloatingElement";
import { ScrollParallaxLayer } from "../components/ScrollParallaxLayer";
import irsEfileLogo from "../assets/irsFile.png";
import quickbooksLogo from "../assets/quickBooks.png";
import zohoBooksLogo from "../assets/zohoBooks.png";
import waveLogo from "../assets/wave.png";
import logoIcon from "figma:asset/1a599f7ab310c53f344132ca67d7708e7da4846f.png";

export function Home() {
  const services = [
    {
      icon: TrendingUp,
      title: "Tax Services",
      description:
        "Navigate tax complexities with confidence. We provide strategic planning and compliance support for individuals and business owners.",
      image:
        "https://images.unsplash.com/photo-1763730512449-f1a505f432a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXglMjBwbGFubmluZyUyMHNlcnZpY2VzfGVufDF8fHx8MTc2ODQ0MjEwMnww&ixlib=rb-4.1.0&q=80&w=1080",
      features: [
        "Tax Planning & Strategy",
        "IRS Representation",
        "Business Tax Filing",
        "Individual Tax Returns",
      ],
    },
    {
      icon: Shield,
      title: "Accounting",
      description:
        "Keep your financial records accurate and organized. From bookkeeping to financial statements, we handle the details so you can focus on growth.",
      image:
        "https://images.unsplash.com/photo-1649209979970-f01d950cc5ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2NvdW50aW5nJTIwYm9va2tlZXBpbmclMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY4NDQyMTAyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      features: [
        "Bookkeeping Services",
        "Financial Statements",
        "Payroll Processing",
        "QuickBooks Support",
      ],
    },
    {
      icon: Users,
      title: "Advisory",
      description:
        "Make better decisions with expert guidance. We partner with you to optimize operations, plan for the future, and achieve your financial goals.",
      image:
        "https://images.unsplash.com/photo-1765020553734-2c050ddb9494?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGFkdmlzb3J5JTIwY29uc3VsdGluZ3xlbnwxfHx8fDE3Njg0NDIxMDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      features: [
        "Business Consulting",
        "Financial Forecasting",
        "Cash Flow Management",
        "Strategic Planning",
      ],
    },
  ];

  const stats = [
    { value: "500+", label: "Clients Served" },
    { value: "15+", label: "Years Experience" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "50+", label: "Expert Advisors" },
  ];

  const benefits = [
    "Clear financial roadmaps",
    "Proactive guidance, not just compliance",
    "Personalized attention from experts",
    "Peace of mind in every transaction",
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="CPA & Accounting Firm in Venice, Sarasota & Bradenton FL | Tax Services | FixPoint"
        description="Expert CPA and accounting services in Venice, Sarasota, Bradenton & North Port, FL. Tax preparation, bookkeeping, payroll, QuickBooks consulting and business advisory. Serving Southwest Florida for 20+ years. Free consultation available."
        keywords="accountant Venice FL, CPA Sarasota, tax services Bradenton, accounting firm Sarasota County, bookkeeping Venice Florida, business advisor Southwest Florida, tax planning Sarasota, financial consulting Venice, QuickBooks Bradenton, CFO advisory North Port"
        ogImage="https://images.unsplash.com/photo-1455382054916-9c12746cfb43?w=1200&h=630&fit=crop"
      />
      <StructuredData />

      {/* Hero Section */}
      <section className="relative bg-[#092942] text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1455382054916-9c12746cfb43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhY2NvdW50aW5nJTIwb2ZmaWNlJTIwZmxvcmlkYXxlbnwxfHx8fDE3Njg0NDE4MDh8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Professional accounting services in Florida"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-[#092942]/75"></div>
        </div>

        {/* Animated gradient overlay */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0 bg-gradient-to-br from-[#F6921E] to-transparent"
            style={{ opacity: 0.25 }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <AnimatedSection delay={0.1}>
              <div className="inline-block">
                <span
                  className="font-inter text-sm uppercase tracking-wider text-[#F6921E] backdrop-blur-sm px-4 py-2 rounded-full"
                  style={{
                    backgroundColor: "rgba(246, 146, 30, 0.2)",
                  }}
                >
                  Accounting • Tax • Advisory
                </span>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <h1 className="font-garamond text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
                Expert Accounting & Tax Services in Venice, Sarasota & Southwest Florida
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <p
                className="font-jost text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
                style={{ color: "rgba(255, 255, 255, 0.9)" }}
              >
                <strong className="text-white">FixPoint Accounting & Advisory</strong> brings clarity,
                control, and peace of mind to individuals and
                business owners throughout <strong className="text-white">Southwest Florida</strong>.
                Serving <strong className="text-white">Venice, Sarasota, Bradenton, North Port, and Sarasota County</strong>—we're 
                your trusted <strong className="text-white">CPA firm and financial advisors</strong> for 
                tax planning, bookkeeping, payroll, and business consulting.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.35}>
              <p
                className="font-jost text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
                style={{ color: "rgba(255, 255, 255, 0.85)" }}
              >
                Expert <strong className="text-white">tax preparation</strong>, <strong className="text-white">QuickBooks consulting</strong>, 
                and <strong className="text-white">financial advisory services</strong> for small businesses and individuals across Florida. 
                Located in Venice, serving all of Southwest Florida.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    asChild
                    size="lg"
                    className="bg-[#F6921E] hover:bg-[#d67d19] text-black font-inter shadow-xl"
                  >
                    <Link to="/contact">
                      Get Started{" "}
                      <ArrowRight className="ml-2 w-4 h-4" />
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
                    className="border-[#F6921E] text-[#F6921E] hover:bg-[#F6921E] hover:text-white font-inter backdrop-blur-sm bg-white/10"
                  >
                    <Link to="/services">Our Services</Link>
                  </Button>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Bottom fade effect */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Tax Calculator Promo Banner */}
      <section className="bg-gradient-to-r from-[#F6921E] to-[#d67d19] py-8 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="flex items-center gap-4 text-white">
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0"
              >
                <Calculator className="w-6 h-6 text-white" />
              </motion.div>
              <div>
                <h3 className="font-garamond text-2xl font-bold mb-1">
                  Try Our Free Tax Calculator
                </h3>
                <p className="font-jost text-white/90 text-sm">
                  Estimate your 2024 federal taxes instantly • No email required
                </p>
              </div>
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-white text-[#F6921E] hover:bg-white/90 font-inter shadow-lg"
              >
                <Link to="/tax-calculator">
                  Calculate Now
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16 border-b border-[#092942]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Experience Highlight */}
          <AnimatedSection className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Award className="w-8 h-8 text-[#F6921E]" />
              <motion.div
                className="font-garamond text-5xl md:text-6xl font-bold text-[#092942]"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <AnimatedCounter value="20+" />
              </motion.div>
            </div>
            <h3 className="font-garamond text-2xl md:text-3xl font-bold text-[#092942] mb-2">
              Years of Excellence
            </h3>
            <p className="font-jost text-[#949599] max-w-2xl mx-auto">
              Serving Southwest Florida with trusted accounting,
              tax, and advisory services since 2005
            </p>
          </AnimatedSection>

          {/* Credentials & Certifications */}
          <AnimatedSection delay={0.2} className="mt-12">
            <div className="text-center mb-8">
              <h4 className="font-inter text-sm uppercase tracking-wider text-[#F6921E] mb-2">
                Authorized & Certified
              </h4>
              <p className="font-jost text-[#949599]">
                Backed by industry-leading credentials and
                partnerships
              </p>
            </div>
            <StaggerContainer
              className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 items-center"
              staggerDelay={0.1}
            >
              <StaggerItem>
                <motion.div
                  className="flex items-center justify-center h-20 md:h-24 px-6"
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                  }}
                >
                  <img
                    src={irsEfileLogo}
                    alt="IRS Authorized e-file Provider"
                    className="h-full w-auto object-contain"
                  />
                </motion.div>
              </StaggerItem>
              <StaggerItem>
                <motion.div
                  className="flex items-center justify-center h-20 md:h-24 px-6"
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                  }}
                >
                  <img
                    src={quickbooksLogo}
                    alt="Intuit QuickBooks ProAdvisor"
                    className="h-full w-auto object-contain"
                  />
                </motion.div>
              </StaggerItem>
              <StaggerItem>
                <motion.div
                  className="flex items-center justify-center h-20 md:h-24 px-6"
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                  }}
                >
                  <img
                    src={zohoBooksLogo}
                    alt="Zoho Books Partner"
                    className="h-full w-auto object-contain"
                  />
                </motion.div>
              </StaggerItem>
              <StaggerItem>
                <motion.div
                  className="flex items-center justify-center h-20 md:h-24 px-6"
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                  }}
                >
                  <img
                    src={waveLogo}
                    alt="Wave Financial Partner"
                    className="h-full w-auto object-contain"
                  />
                </motion.div>
              </StaggerItem>
            </StaggerContainer>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="font-inter text-sm uppercase tracking-wider text-[#F6921E]">
              What We Offer
            </span>
            <h2 className="font-garamond text-3xl md:text-4xl font-bold text-[#092942] mt-4 mb-4">
              Comprehensive Financial Services
            </h2>
            <p className="font-jost text-lg text-[#949599] max-w-2xl mx-auto">
              Tailored solutions designed to meet your unique
              business challenges and opportunities.
            </p>
          </AnimatedSection>

          <StaggerContainer
            className="grid md:grid-cols-3 gap-8"
            staggerDelay={0.15}
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <StaggerItem key={index}>
                  <motion.div
                    className="group relative h-[400px] rounded-lg overflow-hidden cursor-pointer"
                    whileHover={{
                      y: -8,
                      transition: { duration: 0.3 },
                    }}
                  >
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <ImageWithFallback
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      {/* Gradient overlay - darker on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#092942] via-[#092942]/60 to-[#092942]/30 group-hover:from-[#092942]/95 group-hover:via-[#092942]/90 group-hover:to-[#092942]/80 transition-all duration-500"></div>
                    </div>

                    {/* Content */}
                    <div className="relative h-full flex flex-col justify-end p-8 text-white">
                      {/* Icon - visible by default, fades slightly on hover */}
                      <motion.div
                        className="w-14 h-14 bg-[#F6921E] rounded-lg flex items-center justify-center mb-4 group-hover:opacity-80 transition-opacity duration-300"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="w-7 h-7 text-white" />
                      </motion.div>

                      {/* Title - always visible */}
                      <h3 className="font-garamond text-2xl font-bold mb-4">
                        {service.title}
                      </h3>

                      {/* Description and features - hidden by default, visible on hover */}
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 space-y-4">
                        <p
                          className="font-jost leading-relaxed"
                          style={{
                            color: "rgba(255, 255, 255, 0.9)",
                          }}
                        >
                          {service.description}
                        </p>

                        {/* Features list */}
                        <ul className="space-y-2">
                          {service.features.map(
                            (feature, idx) => (
                              <li
                                key={idx}
                                className="flex items-center space-x-2"
                              >
                                <CheckCircle2 className="w-4 h-4 text-[#F6921E] flex-shrink-0" />
                                <span
                                  className="font-jost text-sm"
                                  style={{
                                    color:
                                      "rgba(255, 255, 255, 0.8)",
                                  }}
                                >
                                  {feature}
                                </span>
                              </li>
                            ),
                          )}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          <AnimatedSection
            delay={0.3}
            className="text-center mt-12"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-[#092942] text-[#092942] hover:bg-[#092942] hover:text-white font-inter bg-white"
              >
                <Link to="/services">
                  View All Services{" "}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="right">
              <div className="relative">
                <ParallaxSection offset={30}>
                  <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1642522029691-029b5a432954?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY4Mzk5NjM5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Business consultation"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </ParallaxSection>
              </div>
            </AnimatedSection>
            <div className="space-y-6">
              <AnimatedSection delay={0.1}>
                <span className="font-inter text-sm uppercase tracking-wider text-[#F6921E]">
                  About FixPoint
                </span>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <h2 className="font-garamond text-3xl md:text-4xl font-bold text-[#092942]">
                  Your Stable Reference Point in Financial
                  Decision-Making
                </h2>
              </AnimatedSection>
              <AnimatedSection delay={0.3}>
                <p className="font-jost text-[#949599] leading-relaxed">
                  At FixPoint, we're more than accountants—we're
                  your trusted advisors. We help individuals and
                  business owners bring clarity to complex
                  financial situations, establish control over
                  their finances, and move forward with
                  confidence.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.4}>
                <StaggerContainer
                  className="space-y-3"
                  staggerDelay={0.1}
                >
                  {benefits.map((benefit, index) => (
                    <StaggerItem key={index}>
                      <motion.div
                        className="flex items-center space-x-3"
                        whileHover={{ x: 5 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                        }}
                      >
                        <CheckCircle2 className="w-5 h-5 text-[#F6921E] flex-shrink-0" />
                        <span className="font-jost text-[#092942]">
                          {benefit}
                        </span>
                      </motion.div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </AnimatedSection>
              <AnimatedSection delay={0.5}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    asChild
                    size="lg"
                    className="bg-[#F6921E] hover:bg-[#d67d19] text-white font-inter"
                  >
                    <Link to="/about">
                      Learn More About Us{" "}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </motion.div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* The FixPoint Commitment Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-garamond text-3xl md:text-5xl font-bold text-[#092942] mb-4">
              The FixPoint Commitment
            </h2>
            <p
              className="font-garamond text-xl md:text-2xl mb-3"
              style={{ color: "rgba(9, 41, 66, 0.8)" }}
            >
              What You Can Expect From Us
            </p>
            <p className="font-jost text-lg text-[#949599] max-w-2xl mx-auto">
              More than promises—these are the tangible
              commitments we make to every client.
            </p>
          </AnimatedSection>

          <StaggerContainer
            className="grid md:grid-cols-3 gap-8"
            staggerDelay={0.15}
          >
            {/* Maintain Focus and Persevere */}
            <StaggerItem>
              <motion.div
                className="bg-white rounded-lg p-8 shadow-lg h-full border-t-4 border-[#F6921E]"
                whileHover={{
                  y: -8,
                  boxShadow: "0 20px 30px rgba(9, 41, 66, 0.1)",
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-6">
                  <div className="w-14 h-14 bg-[#F6921E] rounded-lg flex items-center justify-center mb-4">
                    <Target className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-garamond text-2xl font-bold text-[#092942] mb-2">
                    Maintain Focus and Persevere
                  </h3>
                  <p className="font-inter text-sm uppercase tracking-wider text-[#F6921E] mb-4">
                    Crafting Tailored Business Plans
                  </p>
                  <p className="font-jost text-xs uppercase tracking-wider text-[#949599] mb-4">
                    Strategic Planning for Optimal Results
                  </p>
                </div>
                <p className="font-jost text-[#949599] leading-relaxed">
                  Our commitment lies in aiding others to
                  achieve their best, recognizing that by
                  contributing to their growth, we also enhance
                  ourselves. By assisting others in their
                  progress, we, too, become better.
                </p>
              </motion.div>
            </StaggerItem>

            {/* Remote Accounting Expertise */}
            <StaggerItem>
              <motion.div
                className="bg-white rounded-lg p-8 shadow-lg h-full border-t-4 border-[#F6921E]"
                whileHover={{
                  y: -8,
                  boxShadow: "0 20px 30px rgba(9, 41, 66, 0.1)",
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-6">
                  <div className="w-14 h-14 bg-[#F6921E] rounded-lg flex items-center justify-center mb-4">
                    <BookOpen className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-garamond text-2xl font-bold text-[#092942] mb-4">
                    Remote Accounting Expertise
                  </h3>
                </div>
                <p className="font-jost text-[#949599] leading-relaxed mb-4">
                  As seasoned accounting professionals, we
                  deliver customized services to meet your
                  business's unique needs. From QuickBooks
                  Online to QuickBooks Desktop and QuickBooks
                  Enterprise, we ensure your financial records
                  are organized and up-to-date.
                </p>
                <p className="font-jost text-[#092942] font-medium">
                  Need tax assistance? We also offer remote
                  services in both English and Spanish.
                </p>
              </motion.div>
            </StaggerItem>

            {/* Masters of Financial Management - ¿Hablas Español? */}
            <StaggerItem>
              <motion.div
                className="bg-white rounded-lg p-8 shadow-lg h-full border-t-4 border-[#F6921E]"
                whileHover={{
                  y: -8,
                  boxShadow: "0 20px 30px rgba(9, 41, 66, 0.1)",
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-6">
                  <div className="w-14 h-14 bg-[#F6921E] rounded-lg flex items-center justify-center mb-4">
                    <Globe className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-garamond text-2xl font-bold text-[#092942] mb-2">
                    Masters of Financial Management
                  </h3>
                  <p
                    className="font-garamond text-xl mb-4"
                    style={{ color: "rgba(9, 41, 66, 0.9)" }}
                  >
                    ¿Hablas Español?
                  </p>
                </div>
                <p className="font-jost text-[#949599] leading-relaxed mb-4">
                  ¿Necesitas ayuda con tus impuestos o
                  contabilidad personal o empresarial? ¡Cuenta
                  con nosotros!
                </p>
                <p className="font-jost text-[#092942] font-medium">
                  Con más de 20 años de experiencia, estamos
                  aquí para brindarte asistencia integral en
                  todas las áreas de tus finanzas.
                </p>
              </motion.div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Inspirational Quote Section with Animated Background */}
      <section className="relative bg-gradient-to-br from-[#092942] via-[#0a3451] to-[#092942] text-white py-32 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-30">
          {/* Floating Circles */}
          <motion.div
            className="absolute top-20 left-10 w-64 h-64 bg-[#F6921E] rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-40 right-20 w-96 h-96 bg-[#F6921E] rounded-full blur-3xl"
            animate={{
              x: [0, -80, 0],
              y: [0, 80, 0],
              scale: [1, 0.8, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
          <motion.div
            className="absolute bottom-20 left-1/3 w-80 h-80 bg-[#F6921E] rounded-full blur-3xl"
            animate={{
              x: [0, 60, 0],
              y: [0, -60, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4,
            }}
          />
        </div>

        {/* Animated Geometric Shapes */}
        <div className="absolute inset-0 opacity-10">
          <motion.div
            className="absolute top-1/4 left-1/4 w-32 h-32 border-4 border-white"
            animate={{
              rotate: [0, 360],
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute bottom-1/3 right-1/3 w-24 h-24 border-4 border-white rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              x: [0, -40, 0],
              y: [0, 40, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-1/2 right-1/4 w-40 h-40 border-4 border-white rotate-45"
            animate={{
              rotate: [45, 405],
              x: [0, -30, 0],
              y: [0, -40, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        {/* Animated Gradient Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F6921E]/5 to-transparent"
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Quote Content */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Decorative Quote Mark */}
            <motion.div
              className="text-[#F6921E] text-8xl md:text-9xl font-garamond leading-none mb-6"
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              "
            </motion.div>

            {/* Main Quote */}
            <motion.blockquote
              className="font-garamond text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Success is not final; failure is not fatal:{" "}
              <span className="text-[#F6921E]">
                It is the courage to continue that counts.
              </span>
            </motion.blockquote>

            {/* Author */}
            <motion.div
              className="flex items-center justify-center space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#F6921E]"></div>
              <p className="font-inter text-xl md:text-2xl text-white/90 tracking-wide">
                Winston Churchill
              </p>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#F6921E]"></div>
            </motion.div>

            {/* Animated Accent Line */}
            <motion.div
              className="mt-12 h-1 bg-gradient-to-r from-transparent via-[#F6921E] to-transparent mx-auto"
              style={{ width: "60%" }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scaleX: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>

        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </section>

      {/* Final CTA Section */}
      <section className="relative bg-[#092942] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <motion.div
            className="absolute top-0 left-1/4 w-96 h-96 bg-[#F6921E] rounded-full blur-3xl"
            animate={{
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#F6921E] rounded-full blur-3xl"
            animate={{
              x: [0, -50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 5,
            }}
          />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <AnimatedSection delay={0.1}>
            <h2 className="font-garamond text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Financial Future?
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p
              className="font-jost text-lg mb-8 max-w-2xl mx-auto"
              style={{ color: "rgba(255, 255, 255, 0.8)" }}
            >
              Schedule a consultation with our expert advisors
              and discover how we can help you achieve your
              financial goals.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
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
                  Schedule a Consultation{" "}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}