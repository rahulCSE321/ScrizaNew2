'use client'

import { Button } from '@/components/ui/button'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ChatWidget from '@/components/ChatWidget'
import DemoBookingForm from '@/components/DemoBookingForm'
import { 
  CheckCircle,
  Send,
  Zap,
  Globe,
  DollarSign,
  Shield,
  Users,
  TrendingUp,
  Settings,
  Clock,
  Monitor,
  Building,
  Heart,
  ShoppingCart,
  Truck,
  Building2,
  Stethoscope,
  Home,
  Plane,
  Key,
  Code,
  FileText,
  Mail,
  Smartphone,
  CreditCard,
  Bell,
  Eye,
  Lock,
  ShieldCheck,
  Banknote,
  Timer,
  BarChart3,
  Languages,
  MessageSquare,
  Repeat,
  School,
  HandHeart,
  PiggyBank,
  BadgeCheck,
  Headphones,
  Layers,
  Store,
  Wifi,
  UserCheck,
  Server,
  Phone,
  Tv,
  Radio,
  Database,
  Receipt,
  Droplets,
  Fuel,
  Lightbulb,
  Wallet,
  University,
  RefreshCw,
  Car,
  Vote,
  ArrowRight,
  Star,
  Target,
  Calendar,
  Megaphone,
  AlertCircle,
  ShieldAlert,
  MessageCircle,
  Bot,
  Sparkles,
  BarChart2,
  MousePointer,
  Link,
  Award,
  Square,
  Cpu,
  BookOpen
} from 'lucide-react'

export default function SoftwareDevelopmentPage() {
  const handleDemoSubmit = async (formData) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          type: 'demo',
          phone: formData.mobile,
          message: `Software Development Demo Request - Selected Option: ${formData.option}`
        }),
      })
      
      if (response.ok) {
        alert('Thank you! We will get back to you soon.')
      } else {
        alert('Something went wrong. Please try again.')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Something went wrong. Please try again.')
    }
  }

  const developmentFeatures = [
    "Tailor-made Solutions",
    "Competitive Pricing", 
    "Experienced Team",
    "Quality Assurance",
    "Timely Delivery",
    "Post-release Support",
    "Latest Technologies",
    "Industry Expertise"
  ]

  const keyBenefits = [
    "100% tailor-made technology solutions for large and small enterprises",
    "Most affordable software development services suitable for all sizes of businesses",
    "Highly experienced team of software developers with 12+ years of experience",
    "Robust and competitive solutions that drive business growth"
  ]

  const performanceStats = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "750+ Projects Delivered",
      description: "Successfully delivered over 750 software development projects helping big and small enterprises achieve their business targets.",
      stat: "750+",
      label: "Projects Completed"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "500+ Clients Served",
      description: "Our skilled team has worked for 500+ clients from various industries with proven expertise and results.",
      stat: "500+",
      label: "Happy Clients"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "12+ Years Experience",
      description: "Over 12 years of industry experience making us the most trusted solution for bespoke software development services.",
      stat: "12+",
      label: "Years Experience"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "400+ Growth Accelerations",
      description: "We have helped over 400 clients to accelerate their growth across various sectors with custom software solutions.",
      stat: "400+",
      label: "Growth Stories"
    }
  ]

  const developmentProcess = [
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Effective Project Management",
      description: "We ensure systematic project management with clear timelines and structured approach to deliver quality solutions.",
      type: "Management"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Consistent Collaboration",
      description: "Maintain continuous collaboration with our clients throughout the development lifecycle for optimal results.",
      type: "Collaboration"
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Regular Communication",
      description: "Keep you informed with regular updates and maintain transparent communication throughout the project.",
      type: "Communication"
    },
    {
      icon: <BarChart2 className="h-8 w-8" />,
      title: "Robust Feedback & QA",
      description: "Implement robust feedback mechanisms and quality assurance processes with timely bug fixing.",
      type: "Quality"
    }
  ]

  const specializations = [
    {
      icon: <Banknote className="h-8 w-8" />,
      title: "FinTech Software",
      description: "Accounting, payment, insurance, crowdfunding, stock trading and more! Our affordable software solutions are the best to build a successful FinTech startup.",
      features: ["Payment Processing", "Insurance Systems", "Trading Platforms", "Crowdfunding Solutions"]
    },
    {
      icon: <Plane className="h-8 w-8" />,
      title: "Travel Software",
      description: "Advanced, agile and high-end travel software solutions for travel portals, booking, travel CRM and more with vested interest in your success.",
      features: ["Travel Portals", "Booking Systems", "Travel CRM", "Custom Solutions"]
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Recharge Portal Software",
      description: "Specialists in B2B and B2C recharge portal software development. Get higher returns on investment with accessible and manageable technology.",
      features: ["B2B Portals", "B2C Solutions", "ROI Optimization", "Accessible Technology"]
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "Hotel Management Software",
      description: "End-to-end solutions for hotel booking, front desk, housekeeping, billing, reporting and quality control trusted by big hospitality players.",
      features: ["Hotel Booking", "Front Desk Management", "Billing Systems", "Quality Control"]
    },
    {
      icon: <School className="h-8 w-8" />,
      title: "School Management Software",
      description: "Digitize school management operations with total efficiency. Get bespoke solutions for administration, performance monitoring and financial software.",
      features: ["Administration", "Performance Tracking", "Financial Management", "Productivity Enhancement"]
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Banking API Integration",
      description: "From account authentication to payment processing, we offer technical support at every step. Hundreds of enterprises use our APIs for open banking applications.",
      features: ["Account Authentication", "Payment Processing", "Open Banking", "Technical Support"]
    }
  ]

  const technologies = [
    { name: "Java", icon: <Code className="h-6 w-6" /> },
    { name: "Python", icon: <Cpu className="h-6 w-6" /> },
    { name: "JavaScript", icon: <Globe className="h-6 w-6" /> },
    { name: ".Net", icon: <Monitor className="h-6 w-6" /> },
    { name: "Ruby", icon: <Settings className="h-6 w-6" /> },
    { name: "PHP", icon: <Server className="h-6 w-6" /> }
  ]

  const industries = [
    { name: "Fintech", icon: <Banknote className="h-6 w-6" /> },
    { name: "E-commerce", icon: <ShoppingCart className="h-6 w-6" /> },
    { name: "Retail", icon: <Store className="h-6 w-6" /> },
    { name: "Banking", icon: <Building2 className="h-6 w-6" /> },
    { name: "Manufacturing", icon: <Settings className="h-6 w-6" /> },
    { name: "Hospitality", icon: <Building className="h-6 w-6" /> }
  ]

  const platforms = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "WordPress",
      description: "Leverage WordPress for its flexibility advantages and robust content management capabilities."
    },
    {
      icon: <ShoppingCart className="h-6 w-6" />,
      title: "Shopify & Magento",
      description: "Utilize Shopify or Magento for robust e-commerce capabilities and online store functionality."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Drupal",
      description: "Implement Drupal for scalable and secure CMS solutions for enterprise-level requirements."
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Custom Solutions",
      description: "Develop custom-built solutions that meet your unique business requirements and specifications."
    }
  ]

  const companyAdvantages = [
    "Bespoke solutions tailored to your business requirements",
    "Experienced developers skilled in various industries", 
    "High-end tools to guarantee performance",
    "Well-timed delivery within agreed timelines",
    "Affordable packages with budget-friendly pricing",
    "Constant tech support with post-release maintenance"
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header currentPage="software-development" />

      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div className="w-full">
          <img 
            src="/software-development-hero.png" 
            alt="Software Development Services" 
            className="w-full h-auto max-h-[500px] object-contain object-center bg-gray-100" 
          />
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Introduction */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Best software development company
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  100% tailor-made technology solutions for large and small enterprises
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  We are a top-rated local software development company, offering robust and tailor-made solutions at a competitive price. Drive growth in your business with our highly experienced team of software developers.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  We offer the most affordable software development services suitable for all sizes of businesses. If you need a rapidly growing business, Take Scriza along on your path to success. Share your goals and we will get back to you with a roadmap.
                </p>

                <div className="grid md:grid-cols-4 gap-4 mb-8">
                  {developmentFeatures.map((feature, index) => (
                    <div key={index} className="bg-gradient-to-r from-[#38857a]/10 to-[#FF914C]/10 rounded-lg p-3 text-center">
                      <span className="text-sm font-medium text-gray-800">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-[#38857a]/10 to-[#FF914C]/10 rounded-xl p-6 mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Why Choose Our Software Development Services</h4>
                  <div className="space-y-3">
                    {keyBenefits.map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-[#38857a]" />
                        <span className="text-gray-700 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Industry Expertise */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Software development company near me: Tailored solutions with industry expertise
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Scriza becomes the most trusted solution for bespoke software development services due to our vast IT workforce and 12+ years of industry experience.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  So far, we have helped over 400 clients to accelerate their growth in the following sectors:
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {industries.map((industry, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white">
                        {industry.icon}
                      </div>
                      <span className="text-lg font-medium text-gray-900">{industry.name}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-8">
                  {performanceStats.map((stat, index) => (
                    <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                      <div className="grid md:grid-cols-3 gap-6 items-center">
                        <div className="text-center">
                          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white mx-auto mb-4">
                            {stat.icon}
                          </div>
                          <div className="text-3xl font-bold text-[#38857a] mb-1">{stat.stat}</div>
                          <div className="text-sm text-gray-600">{stat.label}</div>
                        </div>
                        <div className="md:col-span-2 space-y-4">
                          <h3 className="text-xl font-semibold text-gray-900">{stat.title}</h3>
                          <p className="text-gray-600 leading-relaxed">{stat.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Development Process */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  How long does the Scriza team take to deliver custom software solutions?
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  For us, each project is unique and therefore has a specific timeline. The development timeline varies for each project. Duration depends on the complexity of the project, the scope of features, and the resources allocated. We can deliver smaller projects within a few weeks or take several months or more for larger and more intricate software solutions.
                </p>
                
                <div className="space-y-6">
                  {developmentProcess.map((process, index) => (
                    <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white flex-shrink-0">
                          {process.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-gray-900 mb-3">{process.title}</h3>
                          <p className="text-gray-600 leading-relaxed">{process.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-[#38857a]/10 to-[#FF914C]/10 rounded-xl">
                  <p className="text-gray-700 leading-relaxed">
                    Furthermore, we do provide services integrating software solutions with various third-party systems, databases, APIs, and platforms. These things take time and affect the development and delivery timeline. It is best to consult our sales team and gain insights about the path to success.
                  </p>
                </div>
              </div>

              {/* Specializations */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Specializations offered by the best software company
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  We specialize in exceeding your expectations, thanks to our tech-savvy family, we have become a trusted choice in various sectors.
                </p>
                
                <div className="space-y-8">
                  {specializations.map((service, index) => (
                    <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white flex-shrink-0">
                              {service.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                          </div>
                          <p className="text-gray-600 leading-relaxed">{service.description}</p>
                          <div className="grid grid-cols-2 gap-2">
                            {service.features.map((item, idx) => (
                              <div key={idx} className="flex items-center space-x-2">
                                <CheckCircle className="h-3 w-3 text-[#38857a]" />
                                <span className="text-xs text-gray-600">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="flex items-center justify-center">
                          <div className="w-48 h-48 bg-gradient-to-br from-[#38857a]/10 to-[#FF914C]/10 rounded-2xl flex items-center justify-center">
                            <div className="text-6xl text-[#38857a]/20">
                              {service.icon}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-[#38857a]/10 to-[#FF914C]/10 rounded-xl">
                  <p className="text-gray-700 leading-relaxed">
                    With our collaborative and client-centric approach, we understand the objectives, challenges, and vision of our esteemed clientele. Get in touch with us right now to leverage our technical expertise and industry knowledge.
                  </p>
                </div>
              </div>

              {/* Platforms & Technologies */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Platforms & Technologies We Work With
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  We have decade long expertise in bringing the vision to life. Our team is proficient in working with various platforms and technologies.
                </p>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Development Platforms</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {platforms.map((platform, index) => (
                      <div key={index} className="flex items-start space-x-4 p-4 border border-gray-200 rounded-lg">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white flex-shrink-0">
                          {platform.icon}
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">{platform.title}</h4>
                          <p className="text-gray-600 text-sm leading-relaxed">{platform.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Programming Languages & Technologies</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Our software development team is proficient in a wide range of technologies and programming languages. Get a quote if you need benchmarking software development support with the following programming technologies:
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    {technologies.map((tech, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white">
                          {tech.icon}
                        </div>
                        <span className="font-medium text-gray-900">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-gray-600 mt-4">
                    We stay updated with the latest industry trends and frameworks to ensure we deliver cutting-edge solutions.
                  </p>
                </div>
              </div>

              {/* Company Advantages */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  What makes us one of the top custom software development companies?
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  So far, we have successfully delivered over 750 software development projects and helped big and small enterprises achieve their business targets.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {companyAdvantages.map((advantage, index) => (
                    <div key={index} className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-[#38857a] flex-shrink-0" />
                      <span className="text-gray-700">{advantage}</span>
                    </div>
                  ))}
                </div>

                <p className="text-lg text-gray-700 leading-relaxed">
                  We are backed with the technology tool and expertise required to create groundbreaking innovative software solutions. Get in touch with us to discuss your unique business needs so that we can help you achieve your goals.
                </p>
              </div>

              {/* Mobile Responsive Solutions */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Mobile responsive software solutions with interactive features
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  With the widespread adoption of smartphones and tablets, more people manage their businesses via mobile devices. Therefore, we create native apps or leverage cross-platform development frameworks to meet your specific requirements.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="border border-gray-200 rounded-lg p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <Smartphone className="h-8 w-8 text-[#38857a]" />
                        <h3 className="text-xl font-semibold text-gray-900">Multi-Device Compatibility</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        Our software solutions are designed to be used easily on all devices. We assure you of optimal user experience on mobile phones, tablets, and desktops.
                      </p>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <Bell className="h-8 w-8 text-[#38857a]" />
                        <h3 className="text-xl font-semibold text-gray-900">Real-time Notifications</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        Real-time notifications and push notifications keep users engaged and informed with dynamic content delivery.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="border border-gray-200 rounded-lg p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <Monitor className="h-8 w-8 text-[#38857a]" />
                        <h3 className="text-xl font-semibold text-gray-900">Cross-Platform Compatibility</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        We work on multi-platform compatibility so that you can access and interact with the software on various operating systems.
                      </p>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <Layers className="h-8 w-8 text-[#38857a]" />
                        <h3 className="text-xl font-semibold text-gray-900">Responsive Design</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        With dynamic content and responsive layouts, we assure that our offered software solutions will offer consistent functionality.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Final CTA */}
              <div className="bg-gradient-to-r from-[#38857a] to-[#FF914C] rounded-2xl p-8 text-white">
                <h2 className="text-3xl font-bold mb-4">Scriza: One of the Best Companies for Software development</h2>
                <p className="text-lg text-white/90 mb-6">
                  Scriza boasts a passionate team of individuals with access to the most powerful development technology. Leverage our proficiency and get bespoke software development solutions suitable for your business requirements.
                </p>
                <p className="text-white/90 mb-6">
                  Schedule a discovery call right now!
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-white text-[#38857a] hover:bg-white/90"
                    onClick={() => document.getElementById('demo-section')?.scrollIntoView({behavior: 'smooth'})}
                  >
                    Schedule Discovery Call
                    <Calendar className="ml-2 h-5 w-5" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-white text-white hover:bg-white/10"
                  >
                    Get Quote Now
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Demo Form Sidebar */}
            <DemoBookingForm 
              onSubmit={handleDemoSubmit} 
              title="Book a Free Demo"
              showApiServices={true} 
            />
          </div>
        </div>
      </section>

      <Footer />
      <ChatWidget />
    </div>
  )
}
