'use client'

import { Button } from '@/components/ui/button'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ChatWidget from '@/components/ChatWidget'
import DemoBookingForm from '@/components/DemoBookingForm'
import Certification from '@/components/Certification'
import FAQ from '@/components/FAQ'  

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
  Search,
  MapPin,
  Ticket,
  UserPlus,
  BedDouble,
  Filter,
  Image,
  Cloud,
  Webhook,
  Network
} from 'lucide-react'

export default function APIIntegrationServicesPage() {
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
          message: `API Integration Services Demo Request - Selected Option: ${formData.option}`
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

  const apiIntegrationFeatures = [
    "Easy Integration",
    "Secure Authentication",
    "Real-time Data Sync",
    "Scalable Solutions",
    "Multi-Platform Support",
    "Cost Effective",
    "24/7 Support",
    "Custom Development"
  ]

  const keyBenefits = [
    "Navigate complex integration processes with decade-long expertise",
    "Experience total peace of mind with comprehensive authentication methods",
    "Get value for money API integration with competitive pricing",
    "Make application connecting easier with our expert consultation"
  ]

  const performanceStats = [
    {
      icon: <Network className="h-8 w-8" />,
      title: "Seamless integration across platforms",
      description: "Connect systems developed on different platforms with smooth data exchange capabilities.",
      stat: "100%",
      label: "Cross-Platform"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Advanced security measures",
      description: "Multiple authentication methods including OAuth, JWT, and API keys for maximum security.",
      stat: "99.9%",
      label: "Security"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Real-time data updates",
      description: "Automated workflow reduces manual errors and improves productivity significantly.",
      stat: "Real-time",
      label: "Data Sync"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Enhanced business performance",
      description: "Revolutionize your workflow with comprehensive API integration solutions.",
      stat: "10x",
      label: "Performance"
    }
  ]

  const authenticationMethods = [
    "Basic Auth, Auth 1, Auth 2",
    "API keys",
    "Basic HTTP",
    "JSON Web Token",
    "SAML Token and more"
  ]

  const apiUseCases = [
    {
      icon: <Database className="h-8 w-8" />,
      title: "Smooth Data Exchange",
      description: "Enable seamless data flow for inventory levels, sales data, and business operations across all connected systems.",
      features: ["Inventory Management", "Sales Data", "Business Operations", "System Connectivity"]
    },
    {
      icon: <RefreshCw className="h-8 w-8" />,
      title: "Workflow Automation",
      description: "Reduce manual errors and increase efficiency through automated processes and intelligent data handling.",
      features: ["Error Reduction", "Process Automation", "Efficiency Boost", "Smart Data Handling"]
    },
    {
      icon: <Link className="h-8 w-8" />,
      title: "System Connectivity",
      description: "Connect systems developed on different platforms and integrate with third-party services seamlessly.",
      features: ["Cross-Platform", "Third-party Integration", "System Bridging", "Universal Connectivity"]
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Real-time Updates",
      description: "Get instant data synchronization and improved productivity with real-time information flow across systems.",
      features: ["Instant Sync", "Live Updates", "Productivity Boost", "Real-time Flow"]
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Enhanced User Experience",
      description: "Provide customers with easy purchasing methods and seamless interaction through optimized API integration.",
      features: ["Easy Purchasing", "Seamless Interaction", "User-Friendly", "Optimized Experience"]
    }
  ]

  const customApiServices = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Custom API Development",
      description: "Expert developers design and develop custom APIs suitable to your specific business needs, including Shopify, PayPal, Facebook and Twitter API solutions."
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "API Architecture Design",
      description: "Robust and scalable API architecture ensuring security, performance, and flexibility for your business requirements."
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "API Integration Consulting",
      description: "Assess integration requirements, identify suitable APIs, and provide expert advice on seamless integration strategies."
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "API Documentation and Testing",
      description: "Comprehensive API documentation including endpoints, request/response formats, authentication methods, and usage examples."
    },
    {
      icon: <ShieldCheck className="h-8 w-8" />,
      title: "Security Implementation",
      description: "Advanced security measures against unauthorized access with OAuth, JWT, API keys, and data confidentiality protocols."
    },
    {
      icon: <Layers className="h-8 w-8" />,
      title: "API Versioning and Management",
      description: "Strategic implementation and management of compatibility issues for smoother version transitions and updates."
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Performance Optimization",
      description: "Advanced techniques like caching, query optimization, and payload compression to improve API responsiveness."
    },
    {
      icon: <Monitor className="h-8 w-8" />,
      title: "Monitoring and Analytics",
      description: "Analyze key metrics, identify bottlenecks and usage patterns to help you make data-driven decisions."
    }
  ]

  const gatewayIntegrations = [
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Cloud Based API",
      description: "Integrate cloud services into existing applications without extensive infrastructure development requirements."
    },
    {
      icon: <Receipt className="h-8 w-8" />,
      title: "Accounting Software API",
      description: "Automate financial data accessing, invoicing, and reporting processes with seamless order data transfer."
    },
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: "Payment Gateway API",
      description: "Secure and reliable process to accept online payments via credit cards, digital wallets and various sources."
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: "Social Media API",
      description: "Easy functionality to sign in with social media accounts and share content with secure access to social features."
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Shipping and Logistics API",
      description: "Automate shipping processes, generate labels, track shipments, and provide accurate delivery information."
    },
    {
      icon: <Bell className="h-8 w-8" />,
      title: "Messaging and Notification API",
      description: "Push notification API for improved user experience with real-time communication and automated alerts."
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: "Authentication API",
      description: "Secure user authentication with third-party providers ensuring only authorized users access applications."
    }
  ]

  const competitiveAdvantages = [
    {
      icon: <Layers className="h-6 w-6" />,
      title: "Comprehensive solutions",
      description: "Complete end-to-end API integration services covering all your business needs"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Customized Approach",
      description: "Tailored solutions designed specifically for your unique business requirements"
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "Robust security",
      description: "Advanced security measures and authentication protocols for data protection"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Timely delivery",
      description: "Efficient project management ensuring on-time delivery of all integration projects"
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Competitive pricing",
      description: "Cost-effective solutions providing maximum value for your investment"
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: "Ongoing support",
      description: "24/7 technical support and maintenance services for seamless operations"
    }
  ]

  const industriesServed = [
    {
      icon: <ShoppingCart className="h-6 w-6" />,
      title: "E-Commerce Business",
      description: "Streamlined product data and automation of order processing"
    },
    {
      icon: <Banknote className="h-6 w-6" />,
      title: "Financial Services",
      description: "APIs for banks and fintech companies for payment processing and account management"
    },
    {
      icon: <Stethoscope className="h-6 w-6" />,
      title: "Healthcare Organizations",
      description: "Secure patient data management and healthcare system integration"
    },
    {
      icon: <Plane className="h-6 w-6" />,
      title: "Travel and Hospitality",
      description: "Booking systems and customer management solutions"
    },
    {
      icon: <Truck className="h-6 w-6" />,
      title: "Logistics and Supply Chain",
      description: "Inventory management and shipping automation systems"
    },
    {
      icon: <Megaphone className="h-6 w-6" />,
      title: "Marketing and Advertising",
      description: "Campaign management and analytics integration platforms"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header currentPage="api-integration-services" />

      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div className="w-full">
          <img
            src="/apiintegration.png"
            alt="API Integration Services"
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
                  API Integration Services
                </h2>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Recharge Software</h3>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Whether you're a business owner, a developer, or an IT professional, API integration can revolutionize the way you work. Scriza is well-equipped to navigate you through the challenges of complex integration processes and security concerns. We have decade long expertise in meeting your unique needs. Get in touch for custom API development and integration.
                </p>

                <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-lg p-4 mb-8">
                  <p className="text-lg font-semibold text-red-800 mb-2">We assure total peace of mind with the following functionalities:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {authenticationMethods.map((method, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-red-600" />
                        <span className="text-red-700 text-sm">{method}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Connect now to get comprehensive consultation services for value for money API integration. Scriza is simply the best not because of top-rated services but because of our competitive price range.
                </p>

                <div className="bg-gradient-to-r from-[#38857a] to-[#FF914C] rounded-lg p-4 text-white mb-8">
                  <p className="text-lg font-semibold mb-2">Talk to an API expert today and make application connecting easier</p>
                </div>

                <div className="grid md:grid-cols-4 gap-4 mb-8">
                  {apiIntegrationFeatures.map((feature, index) => (
                    <div key={index} className="bg-gradient-to-r from-[#38857a]/10 to-[#FF914C]/10 rounded-lg p-3 text-center">
                      <span className="text-sm font-medium text-gray-800">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-[#38857a]/10 to-[#FF914C]/10 rounded-xl p-6 mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Benefits</h4>
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

              {/* Use Cases Section */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  What is the use of API integration software?
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  API integration can make a world of difference to the way you perform your business. Investing in software systems and applications featuring API integration can be useful for the following operations.
                </p>

                <div className="space-y-8 mb-8">
                  {apiUseCases.map((useCase, index) => (
                    <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white flex-shrink-0">
                              {useCase.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900">{useCase.title}</h3>
                          </div>
                          <p className="text-gray-600 leading-relaxed">{useCase.description}</p>
                          <div className="grid grid-cols-2 gap-2">
                            {useCase.features.map((item, idx) => (
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
                              {useCase.icon}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Custom API Development */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  What is offered in custom API development services?
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  With our bespoke development services, we provide tailored solutions for high performing API. Custom development services offer the benefits of seamless integration, enhanced functionality, and optimized performance.
                </p>

                <div className="space-y-6">
                  {customApiServices.map((service, index) => (
                    <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white flex-shrink-0">
                          {service.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                          <p className="text-gray-600 leading-relaxed">{service.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gateway Integration */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  What is included in API gateway integration?
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Optimize the API infrastructure with the following integration functionalities offered by us.
                </p>

                <div className="space-y-6">
                  {gatewayIntegrations.map((integration, index) => (
                    <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white flex-shrink-0">
                          {integration.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-gray-900 mb-3">{integration.title}</h3>
                          <p className="text-gray-600 leading-relaxed">{integration.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Performance Stats */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  What makes us one of the best API integration companies?
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  We stand out in the API development sector because of our comprehensive solutions and proven track record.
                </p>

                <div className="space-y-8 mb-8">
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

                <div className="grid md:grid-cols-2 gap-6">
                  {competitiveAdvantages.map((advantage, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 border border-gray-200 rounded-lg">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white flex-shrink-0">
                        {advantage.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{advantage.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{advantage.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Industries Section */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Low cost API integration in Android- Industries served
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Our API integration services cater to a wide range of industries. With opensource integration tools, the following industries are getting the benefits of our low cost Android API integration services.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  {industriesServed.map((industry, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 border border-gray-200 rounded-lg">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white flex-shrink-0">
                        {industry.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{industry.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{industry.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Final CTA */}
              <div className="bg-gradient-to-r from-[#38857a] to-[#FF914C] rounded-2xl p-8 text-white">
                <h2 className="text-3xl font-bold mb-4">API integration made simpler- Connect now</h2>
                <p className="text-lg text-white/90 mb-4">
                  Take your business to new heights with our API services. With our expertise and advanced API technology, you would unlock limitless possibilities for growth. So let's get started.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-white text-[#38857a] hover:bg-white/90"
                    onClick={() => document.getElementById('demo-section')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Schedule Free Demo
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/10"
                  >
                    Get API Keys
                    <Key className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Demo Form Sidebar */}
            <DemoBookingForm
              onSubmit={handleDemoSubmit}
              title="Book For Demo"
              showApiServices={true}
            />
          </div>
        </div>
      </section>
      <FAQ
        title="Frequently Asked Questions"
        faqs={[
          {
            question: "What is API Integration?",
            answer: "API Integration is the process of connecting different software applications or platforms using Application Programming Interfaces (APIs) to enable seamless data exchange, automation, and interoperability between systems. It allows businesses to enhance functionality without building everything from scratch."
          },
          {
            question: "Who should use API Integration services?",
            answer: "API Integration services are ideal for: Businesses using multiple software systems that need to work together, E-commerce platforms integrating payment gateways, shipping, or inventory systems, Fintech companies connecting banking, payments, and wallet systems, Travel agencies integrating flight, hotel, and bus APIs, SaaS platforms requiring third-party service integrations, and Enterprises looking to automate workflows and reduce manual tasks."
          },
          {
            question: "What types of APIs can you integrate?",
            answer: "We provide integration for various types of APIs, including: Payment APIs (UPI, credit/debit cards, wallets), Banking & Fintech APIs, Travel APIs (Flights, Hotels, Buses, Cabs), Recharge & Utility APIs, SMS, Email, and Notification APIs, Social Media APIs (Facebook, Instagram, LinkedIn, Twitter), CRM, ERP, and Inventory Management APIs, and Custom third-party APIs for specialized solutions."
          },
          {
            question: "How does API Integration work?",
            answer: "We analyze your business requirements and the APIs to be integrated. Then, we design a workflow to connect your systems seamlessly. API endpoints are implemented for real-time data exchange, tested thoroughly for accuracy, speed, and reliability, and finally deployed live for smooth operation."
          },
          {
            question: "Is API Integration secure?",
            answer: "Yes, we ensure secure integration with: HTTPS and SSL/TLS encryption, API key/token-based authentication, Role-based access and permissions, Secure data storage and transmission, and Compliance with industry standards and regulations."
          },
          {
            question: "Can API Integration automate business processes?",
            answer: "Yes, API integration can automate tasks such as: Payment processing and settlements, Inventory and order updates, Booking and ticketing confirmations, Notifications and alerts (SMS, Email, Push), and Data synchronization between multiple platforms."
          },
          {
            question: "How long does API Integration take?",
            answer: "Timelines vary depending on complexity: Simple API Integration (e.g., payment or notification API): 1–2 weeks, Medium complexity (e.g., travel booking, fintech, or multi-API workflow): 2–4 weeks, and Enterprise-level integration with multiple APIs and custom workflows: 1–3 months."
          },
          {
            question: "Do you provide custom API development?",
            answer: "Yes, we can develop custom APIs for your business to: Expose your system data to third-party applications, Enable internal system communication, Support mobile and web applications, and Provide secure endpoints for partners or clients."
          }
        ]}
      />



      <Certification />
      <Footer />
      <ChatWidget />
    </div>
  )
}
