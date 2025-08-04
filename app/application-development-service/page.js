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
  BookOpen,
  Gamepad2
} from 'lucide-react'

export default function ApplicationDevelopmentPage() {
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
          message: `Application Development Demo Request - Selected Option: ${formData.option}`
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

  const appFeatures = [
    "Native Development",
    "Cross-Platform", 
    "High Performance",
    "Secure Solutions",
    "User-Friendly UI",
    "Scalable Architecture",
    "24/7 Support",
    "Quality Assurance"
  ]

  const keyBenefits = [
    "Over 500 mobile apps created across various platforms",
    "High-performance applications for iOS and Android",
    "Native, cross-platform, and web-based application solutions",
    "Cutting-edge technology with innovative designs"
  ]

  const appTypes = [
    "Hotel booking apps",
    "Online shopping apps",
    "Service apps",
    "CRM apps",
    "Gaming apps",
    "Full stack development"
  ]

  const companyAdvantages = [
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Timely Delivery",
      description: "Thrive in the digital landscape with the assurance of timely delivery and project completion within deadlines.",
      type: "Delivery"
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Top-notch Code Standards",
      description: "Our commitment to excellence reflects in our coding standards and development best practices.",
      type: "Quality"
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Easy Customization",
      description: "We understand your dreams and create tailor-made software solutions that meet your specific requirements.",
      type: "Customization"
    },
    {
      icon: <Headphones className="h-8 w-8" />,
      title: "Round the Clock Support",
      description: "We assure attention to detail and offer 24/7 support for app development and maintenance.",
      type: "Support"
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "Core Language Skills",
      description: "We provide India's finest app development solutions with advanced technology solutions and frameworks.",
      type: "Technology"
    }
  ]

  const industries = [
    {
      icon: <Stethoscope className="h-8 w-8" />,
      title: "Healthcare",
      description: "Emergency assistance, appointment booking, telemedicine app, clinical software solutions and more",
      features: ["Emergency Assistance", "Appointment Booking", "Telemedicine", "Clinical Software"]
    },
    {
      icon: <Banknote className="h-8 w-8" />,
      title: "Fintech",
      description: "Mobile banking, peer-to-peer payment, finance management, credit score monitoring, digital wallet and more.",
      features: ["Mobile Banking", "P2P Payments", "Finance Management", "Digital Wallet"]
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "Real Estate",
      description: "Interactive apps for property search, mortgage calculator, property management, rental listing, networking and more.",
      features: ["Property Search", "Mortgage Calculator", "Property Management", "Rental Listing"]
    },
    {
      icon: <ShoppingCart className="h-8 w-8" />,
      title: "Ecommerce",
      description: "High-speed apps for online marketplace, mobile storefront, inventory management, order tracking, virtual try-on and more.",
      features: ["Online Marketplace", "Mobile Storefront", "Inventory Management", "Order Tracking"]
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      title: "Hospitality",
      description: "Hotel booking, travel guide, rewards and loyalty app, event management app, hospitality services and more.",
      features: ["Hotel Booking", "Travel Guide", "Loyalty Programs", "Event Management"]
    }
  ]

  const appServices = [
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Custom Mobile App Development",
      description: "We create unique and innovative solutions specific to your business needs with cutting-edge technology.",
      features: ["Unique Solutions", "Business-Specific", "Innovative Design", "Custom Features"]
    },
    {
      icon: <Monitor className="h-8 w-8" />,
      title: "Native App Development",
      description: "We develop iOS and Android applications with device-specific features for optimal performance.",
      features: ["iOS Development", "Android Development", "Device-Specific", "Optimal Performance"]
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Cross Platform App Development",
      description: "Development frameworks like React Native, Flutter, or Xamarin to reach a wider audience.",
      features: ["React Native", "Flutter", "Xamarin", "Wider Reach"]
    },
    {
      icon: <Store className="h-8 w-8" />,
      title: "E-commerce App Development",
      description: "We develop scalable solutions with secure payment and seamless shopping experience.",
      features: ["Scalable Solutions", "Secure Payments", "Shopping Experience", "E-commerce Features"]
    },
    {
      icon: <RefreshCw className="h-8 w-8" />,
      title: "App Maintenance Support",
      description: "We provide regular updates for bug fixes, performance optimization and technical support.",
      features: ["Regular Updates", "Bug Fixes", "Performance Optimization", "Technical Support"]
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "App Testing and Quality Assurance",
      description: "Automated and manual testing methodologies are used by us to meet the highest standards.",
      features: ["Automated Testing", "Manual Testing", "Quality Standards", "Bug Detection"]
    }
  ]

  const technologies = [
    {
      icon: <Layers className="h-6 w-6" />,
      title: "Cross Platform Development",
      description: "We develop robust software that allows cross platform development frameworks including Android, iOS, and web browsers."
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "Security and Encryption",
      description: "We ensure to incorporate features for data security, encryption protocols, and authentication processes."
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Application Programming Interface (API)",
      description: "Payment gateways, social media integration or more can be leveraged through the offered API functionality in our developed software."
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Programming Language Support",
      description: "Depending on the project requirements and preferences, we provide options for language support including JAVA, Swift, Kotlin, C#, Python, and HTML/CSS."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Performance Optimization",
      description: "For optimum application performance and smooth user experience, we incorporate the features of code profiling and performance monitoring."
    },
    {
      icon: <Store className="h-6 w-6" />,
      title: "App Store Marketing",
      description: "We assist in app listing and app store deployment for increased visibility and user acquisition."
    }
  ]

  const programmingLanguages = [
    { name: "JAVA", icon: <Code className="h-6 w-6" /> },
    { name: "Swift", icon: <Smartphone className="h-6 w-6" /> },
    { name: "Kotlin", icon: <Monitor className="h-6 w-6" /> },
    { name: "C#", icon: <Cpu className="h-6 w-6" /> },
    { name: "Python", icon: <Settings className="h-6 w-6" /> },
    { name: "HTML/CSS", icon: <Globe className="h-6 w-6" /> }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header currentPage="application-development" />

      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div className="w-full">
          <img 
            src="/application-development-hero.png" 
            alt="Application Development Services" 
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
                  India's Best Web and Mobile App Development Service Providers
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  Driving growth with cutting-edge e-commerce and mobile app solutions
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  At Scriza, innovation meets technology and exceptional mobile experiences are created. We have a vast team of skilled app developers that have created over 500 mobile apps including:
                </p>

                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  {appTypes.map((type, index) => (
                    <div key={index} className="bg-gradient-to-r from-[#38857a]/10 to-[#FF914C]/10 rounded-lg p-3 text-center">
                      <span className="text-sm font-medium text-gray-800">{type}</span>
                    </div>
                  ))}
                </div>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Get in touch with us if you need high-performance mobile applications across various platforms, including iOS and Android.
                </p>

                <div className="bg-gradient-to-r from-[#38857a]/10 to-[#FF914C]/10 rounded-xl p-6 mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Why Choose Our App Development Services</h4>
                  <div className="space-y-3">
                    {keyBenefits.map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-[#38857a]" />
                        <span className="text-gray-700 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed">
                  Be it a native app, a cross-platform solution, or a web-based application, we are here to meet your requirements. Get a quote right now for a remarkable mobile reality.
                </p>

                <div className="grid md:grid-cols-4 gap-4 mt-8">
                  {appFeatures.map((feature, index) => (
                    <div key={index} className="bg-gradient-to-r from-[#38857a]/10 to-[#FF914C]/10 rounded-lg p-3 text-center">
                      <span className="text-sm font-medium text-gray-800">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Company Rankings */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Ranked as the #1 Application Development Software Solutions
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  We take immense pride in creating tailored digital experiences. Our app development solutions go above and beyond coding and design to empower all sizes of businesses.
                </p>
                
                <div className="space-y-6">
                  {companyAdvantages.map((advantage, index) => (
                    <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white flex-shrink-0">
                          {advantage.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-gray-900 mb-3">{advantage.title}</h3>
                          <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-[#38857a]/10 to-[#FF914C]/10 rounded-xl">
                  <p className="text-gray-700 leading-relaxed">
                    Transform your ideas into successful mobile applications with Scriza. Get in touch with industry leaders and leverage cutting-edge technology, innovative designs, and tailored solutions.
                  </p>
                </div>
              </div>

              {/* Industries */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  One mobile app development company for multiple industries
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  So far, we have developed over 500 apps and created customized mobile solutions for various industries. We drive success and transformation through the following innovative solutions.
                </p>
                
                <div className="space-y-8">
                  {industries.map((industry, index) => (
                    <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white flex-shrink-0">
                              {industry.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900">{industry.title}</h3>
                          </div>
                          <p className="text-gray-600 leading-relaxed">{industry.description}</p>
                          <div className="grid grid-cols-2 gap-2">
                            {industry.features.map((item, idx) => (
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
                              {industry.icon}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* App Services */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  What are the different types of mobile application services offered by us?
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Our mobile application services encompass an extensive array of options, including the following:
                </p>
                
                <div className="space-y-8">
                  {appServices.map((service, index) => (
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
                    Our highly experienced team is always in the pursuit of excellence. Get a quote to obtain India's finest app development solutions.
                  </p>
                </div>
              </div>

              {/* Technologies */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  What are the technologies used for Android app development services?
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  We are backed with the required tools and skills to develop mobile apps that are technically robust and visually stunning. Since its establishment, Scriza is renowned for offering result-oriented solutions. Here is the USP of our offered application development services.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {technologies.map((tech, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 border border-gray-200 rounded-lg">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white flex-shrink-0">
                        {tech.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{tech.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{tech.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Programming Languages We Support</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    {programmingLanguages.map((lang, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white">
                          {lang.icon}
                        </div>
                        <span className="font-medium text-gray-900">{lang.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Section */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  How to contact a mobile app development company near me?
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Our mobile app development services can transform your business! Contact us today to discuss your ideas, goals, and requirements. Let's create a high-performing mobile app and take your business to new heights.
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-6 border border-gray-200 rounded-xl">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#38857a] to-[#FF914C] text-white flex items-center justify-center mx-auto mb-4">
                      <MessageSquare className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Discuss Ideas</h3>
                    <p className="text-gray-600 text-sm">Share your vision and requirements with our expert team.</p>
                  </div>
                  
                  <div className="text-center p-6 border border-gray-200 rounded-xl">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#38857a] to-[#FF914C] text-white flex items-center justify-center mx-auto mb-4">
                      <Target className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Define Goals</h3>
                    <p className="text-gray-600 text-sm">Work together to establish clear objectives and success metrics.</p>
                  </div>
                  
                  <div className="text-center p-6 border border-gray-200 rounded-xl">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#38857a] to-[#FF914C] text-white flex items-center justify-center mx-auto mb-4">
                      <Smartphone className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Build App</h3>
                    <p className="text-gray-600 text-sm">Transform your ideas into a high-performing mobile application.</p>
                  </div>
                </div>
              </div>

              {/* Final CTA */}
              <div className="bg-gradient-to-r from-[#38857a] to-[#FF914C] rounded-2xl p-8 text-white">
                <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business with Mobile Apps?</h2>
                <p className="text-lg text-white/90 mb-6">
                  Contact us today to discuss your ideas, goals, and requirements. Let's create a high-performing mobile app and take your business to new heights.
                </p>
                <p className="text-white/90 mb-6">
                  Get in touch now.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-white text-[#38857a] hover:bg-white/90"
                    onClick={() => document.getElementById('demo-section')?.scrollIntoView({behavior: 'smooth'})}
                  >
                    Enquire Now
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-white text-white hover:bg-white/10"
                  >
                    Get Quote
                    <MessageCircle className="ml-2 h-5 w-5" />
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
