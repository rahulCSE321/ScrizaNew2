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
  UserPlus
} from 'lucide-react'

export default function BusBookingAPIPage() {
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
          message: `Bus Booking API Demo Request - Selected Option: ${formData.option}`
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

  const busApiFeatures = [
    "Simple Integration",
    "Real-time Updates", 
    "Secure Transactions",
    "Fast Booking Process",
    "Customizable Features",
    "24/7 Support",
    "Seat Selection",
    "Payment Gateway"
  ]

  const keyBenefits = [
    "30% faster booking process compared to traditional systems",
    "99.99% uninterrupted service with reliable uptime",
    "25% reduction in operational costs through automation",
    "Multiply your bus booking capabilities with next-gen technology"
  ]

  const performanceStats = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "40% reduction in booking errors",
      description: "Eliminate manual errors with automated booking processes and real-time validation systems.",
      stat: "40%",
      label: "Error Reduction"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Booking completed under 2 minutes",  
      description: "Streamlined user experience reduces friction and increases customer satisfaction up to 95%.",
      stat: "<2min",
      label: "Booking Time"
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: "Handle 5000 requests per minute",
      description: "Scalable infrastructure ensures your business grows without system limitations or performance issues.",
      stat: "5K",
      label: "Requests/Min"
    },
    {
      icon: <ShieldCheck className="h-8 w-8" />,
      title: "256-bit protocol security",
      description: "All transactions are encrypted and secure, protecting both business and user sensitive information.",
      stat: "256-bit",
      label: "Encryption"
    }
  ]

  const howToUseSteps = [
    {
      icon: <UserPlus className="h-8 w-8" />,
      title: "Sign Up & Get API Key",
      description: "Register on our platform to receive your unique API key, essential for authentication and access to our services."
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Integrate the API", 
      description: "Use our sample codes and SDKs to integrate the API into your system. Follow best practices for seamless integration."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Go Live",
      description: "Once testing is successful, switch to the production environment and start processing live bookings immediately."
    }
  ]

  const uniqueFeatures = [
    {
      icon: <Search className="h-8 w-8" />,
      title: "Advanced Search",
      description: "Effortlessly search for buses by routes, timings and availability with real-time data updates for accurate information.",
      features: ["Route Search", "Real-time Data", "Schedule Updates", "Availability Check"]
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Instant Booking",
      description: "Secure seats instantly with our streamlined booking process. Reduces wait times and enhances user satisfaction significantly.",
      features: ["Quick Booking", "Seat Security", "Reduced Wait Time", "Enhanced Satisfaction"]
    },
    {
      icon: <Monitor className="h-8 w-8" />,
      title: "Seat Selection",
      description: "Allow users to choose their preferred seats with an interactive seat map feature for better travel experience.",
      features: ["Interactive Map", "Seat Preferences", "Visual Selection", "Better Experience"]
    },
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: "Payment Integration", 
      description: "Users can book tickets with payments through credit/debit cards, net banking and digital wallets seamlessly.",
      features: ["Multiple Payment Options", "Secure Transactions", "Digital Wallets", "Net Banking"]
    },
    {
      icon: <BadgeCheck className="h-8 w-8" />,
      title: "Booking Verification",
      description: "Verify bookings instantly through automated confirmation emails and SMS notifications for peace of mind.",
      features: ["Instant Verification", "Email Confirmation", "SMS Notifications", "Automated Process"]
    },
    {
      icon: <Ticket className="h-8 w-8" />,
      title: "Ticket Management",
      description: "Easily manage tickets cancellations, rescheduling, and refunds with comprehensive management tools.",
      features: ["Cancellation Support", "Rescheduling Options", "Refund Processing", "Management Tools"]
    }
  ]

  const businessBenefits = [
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "40% less booking errors",
      description: "Automated processes eliminate human mistakes"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Convenience of instant bookings",
      description: "Users can book tickets immediately without delays"
    },
    {
      icon: <Heart className="h-6 w-6" />, 
      title: "Higher customer retention",
      description: "Improved experience leads to loyal customers"
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "Multiple payment options",
      description: "Support for various payment methods increases conversions"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "100% data protection", 
      description: "Enterprise-grade security for all transactions"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Competitive advantage",
      description: "Stay ahead with modern booking technology"
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Affordable technology",
      description: "Cost-effective solution that fits your budget"
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: "24/7 support from experts",
      description: "Round-the-clock assistance from our technical team"
    }
  ]

  const scrizaDifference = [
    {
      icon: <Star className="h-8 w-8" />,
      title: "Top features in affordable package",
      description: "Enjoy cost-effective API speed and functionality that fit your budget. Scriza is rated as the best API provider because we render premium features at affordable rates."
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Invest as You Go", 
      description: "Scale your investment gradually as your business grows. We commit to the user experience of small scale businesses. So we provide the option to only pay for what you need."
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Unique Solutions",
      description: "Benefit from tailored solutions that address your specific business needs and enhance your booking process with customized features."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "High Availability",
      description: "Our API is designed with redundancy and failover mechanisms to ensure it's always up and running, minimizing downtime to near zero."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Scalability & Fast Response",
      description: "Built to handle high volumes of traffic seamlessly. Whether you have 100 or 10,000 users, the performance remains consistently fast."
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Comprehensive Documentation",
      description: "Comes with detailed, user-friendly documentation of each API endpoint with dedicated sections for common questions and quick solutions."
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header currentPage="bus-booking-api" />

      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div className="w-full">
          <img 
            src="/BusBooking.png" 
            alt="Bus Booking API Solutions" 
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
                <h1 className="text-3xl font-bold text-gray-900 mb-6">
                  Fast and Error Free Bus Booking API
                </h1>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  Simplifying bus ticket reservation for 1000+ clients
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Scriza brings forth a reliable, fast and secure booking platform. Check out our feature rich Bus Booking API that drives efficiency in your business. With our innovative API technology, our clients experienced game changing differences.
                </p>

                <div className="grid md:grid-cols-4 gap-4 mb-8">
                  {busApiFeatures.map((feature, index) => (
                    <div key={index} className="bg-gradient-to-r from-[#38857a]/10 to-[#FF914C]/10 rounded-lg p-3 text-center">
                      <span className="text-sm font-medium text-gray-800">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-[#38857a]/10 to-[#FF914C]/10 rounded-xl p-6 mb-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">Key Benefits</h2>
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
                  Multiply your bus booking capabilities with the next gen technology. Connect with our team to schedule a free demo of the 5-star rated Bus Booking API.
                </p>
              </div>

              {/* Booking Capabilities */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Booking is at your fingertips with our powerful bus ticket API
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  We have crafted a feature rich solution as simple as it is powerful.
                </p>

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

                <div className="mt-8 p-6 bg-gradient-to-r from-[#38857a]/10 to-[#FF914C]/10 rounded-xl">
                  <p className="text-gray-700 leading-relaxed">
                    Simplify your operations and let your customers book bus tickets instantly. Try our API today to experience the ease of ticketing process.
                  </p>
                </div>
              </div>

              {/* How to Use */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  How to use the online bus booking API?
                </h2>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {howToUseSteps.map((step, index) => (
                    <div key={index} className="text-center p-6 border border-gray-200 rounded-xl">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#38857a] to-[#FF914C] text-white flex items-center justify-center mx-auto mb-4">
                        {step.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Step {index + 1}: {step.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-[#38857a]/10 to-[#FF914C]/10 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Imagine your users browsing your app to plan their journey. With our API integrated, they can:</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-[#38857a]" />
                        <span className="text-gray-700 text-sm">Search for bus routes and schedules easily</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-[#38857a]" />
                        <span className="text-gray-700 text-sm">View seat availability in real-time</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-[#38857a]" />
                        <span className="text-gray-700 text-sm">Select seats and book tickets instantly</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-[#38857a]" />
                        <span className="text-gray-700 text-sm">Receive e-tickets directly on their devices</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Unique Features */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Unique features you get in our bus booking API
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Choose Scriza if you want to experience the future of bus booking
                </p>
                
                <div className="space-y-8">
                  {uniqueFeatures.map((feature, index) => (
                    <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white flex-shrink-0">
                              {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                          </div>
                          <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                          <div className="grid grid-cols-2 gap-2">
                            {feature.features.map((item, idx) => (
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
                              {feature.icon}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Business Benefits */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Why businesses should invest in bus ticket booking API?
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Your business runs smoother when you invest in a ticket booking technology. API integration means smooth booking processes with less manual work and errors. Additionally, the automation of booking and payment processes can lead to a considerable increase in operational efficiency. Our ticket booking API can handle 5000 requests per minute. So your business can grow without being slowed down by system limits.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {businessBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 border border-gray-200 rounded-lg">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white flex-shrink-0">
                        {benefit.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-[#38857a]/10 to-[#FF914C]/10 rounded-xl p-6">
                  <p className="text-gray-700 leading-relaxed">
                    Investing in a bus ticket booking API gives businesses a leg up by making the booking process quick and easy for customers. In the end, it is a smart move to increase your market presence.
                  </p>
                </div>
              </div>

              {/* Scriza Difference */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Experience the Scriza difference in our bus ticket API
                </h2>
                
                <div className="space-y-6">
                  {scrizaDifference.map((difference, index) => (
                    <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white flex-shrink-0">
                          {difference.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-gray-900 mb-3">{difference.title}</h3>
                          <p className="text-gray-600 leading-relaxed">{difference.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Final CTA */}
              <div className="bg-gradient-to-r from-[#38857a] to-[#FF914C] rounded-2xl p-8 text-white">
                <h2 className="text-3xl font-bold mb-4">Is your bus booking service ready for the future technology?</h2>
                <p className="text-lg text-white/90 mb-6">
                  Schedule a free demo of our cutting-edge Bus Booking API today and discover how you can enhance efficiency and customer satisfaction.
                </p>
                <p className="text-white/90 mb-6">
                  Make your business more efficient with our ticket booking API solution. Contact us for API keys and free demo of booking process.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-white text-[#38857a] hover:bg-white/90"
                    onClick={() => document.getElementById('demo-section')?.scrollIntoView({behavior: 'smooth'})}
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
      question: "What is a Bus Booking API?",
      answer: "The Bus Booking API enables businesses to integrate online bus ticket booking functionality into their applications, websites, or software platforms. It provides real-time access to bus schedules, seat availability, fare details, ticket booking, cancellations, and ticket confirmation in a seamless, automated manner."
    },
    {
      question: "Who should use the Bus Booking API?",
      answer: "Our Bus Booking API is ideal for: Travel aggregators, Online ticket booking platforms, Travel agencies, Tour operators, Mobile apps providing travel services, Any business aiming to offer online bus ticket booking services."
    },
    {
      question: "What services are provided by the Bus Booking API?",
      answer: "Search available bus routes between origin and destination, View seat layouts and fare details, Real-time seat availability check, Instant bus ticket booking, Ticket cancellation and refund processing, Generate and retrieve e-tickets, PNR status check, Schedule and route information."
    },
    {
      question: "How does the Bus Booking API work?",
      answer: "The customer enters origin, destination, and date of travel on your platform. The API fetches real-time bus schedules, fares, and seat availability from multiple bus operators. The customer selects the desired bus and seats. The API processes the booking, confirms seat availability, and generates an e-ticket. The ticket confirmation is sent instantly with a PNR number and ticket details. Booking, cancellation, and refund workflows are handled via the API."
    },
    {
      question: "Is the Bus Booking API secure?",
      answer: "Yes, security is ensured by: HTTPS encryption for all API calls, Token-based API authentication, Compliance with PCI-DSS for payment processing, Secure storage of sensitive customer data, Regular security audits and data protection mechanisms."
    },
    {
      question: "How fast is the booking and ticket confirmation?",
      answer: "Bus ticket bookings and confirmations are processed in real time (usually within a few seconds). Instant PNR generation and e-ticket delivery are available via API response and email (if configured)."
    },
    {
      question: "Can customers cancel their booked tickets using the API?",
      answer: "Yes, the Bus Booking API supports: Full and partial ticket cancellations as per the bus operator’s cancellation policy, Automated refund process where applicable, Real-time cancellation confirmation via API response and webhook."
    },
  ]}
/>


      <Certification />
      <Footer />
      <ChatWidget />
    </div>
  )
}