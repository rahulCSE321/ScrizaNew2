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
  Filter,
  Image,
  TrendingDown
} from 'lucide-react'

import Certification from '@/components/Certification'

export default function AirBookingAPIPage() {
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
          message: `Air Booking API Demo Request - Selected Option: ${formData.option}`
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

  const airApiFeatures = [
    "Lightning Fast Bookings",
    "Error Free Process", 
    "Reduced Costs",
    "Customer Satisfaction",
    "Real-time Updates",
    "Multi-Language Support",
    "Dynamic Pricing",
    "Global Coverage"
  ]

  const keyBenefits = [
    "Lightning fast flight bookings with cutting-edge technology",
    "Error free booking process with real-time validation",
    "Reduced operational costs through automation and efficiency",
    "100% customer satisfaction levels with seamless experience"
  ]

  const investmentBenefits = [
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Reduce your booking time by 70%",
      description: "Streamlined API processes eliminate manual searches and significantly speed up the entire booking workflow.",
      stat: "70%",
      label: "Time Reduction"
    },
    {
      icon: <ShieldCheck className="h-8 w-8" />,
      title: "50% less booking errors with real time information",  
      description: "Real-time data validation and automated processes minimize human errors and booking discrepancies.",
      stat: "50%",
      label: "Error Reduction"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Drive up to 30% more revenue with customer loyalty",
      description: "Enhanced user experience and competitive rates drive customer retention and increased booking volumes.",
      stat: "30%",
      label: "Revenue Boost"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "40% increase in CSAT score with tailored choices",
      description: "Wide range of customized options and seamless booking experience significantly improves customer satisfaction.",
      stat: "40%",
      label: "CSAT Increase"
    }
  ]

  const gamchangerFeatures = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Fast Integration",
      description: "Our API is easy to integrate with your existing systems. Clients prefer us because we reduce their setup time and get them running quickly.",
      features: ["Quick Setup", "Easy Integration", "Fast Implementation", "Reduced Time"]
    },
    {
      icon: <Monitor className="h-8 w-8" />,
      title: "Simple easy to use design",
      description: "We have decades of experience so we know how to give you a smooth intuitive booking experience to you and your customers.",
      features: ["User Friendly", "Intuitive Design", "Smooth Experience", "Customer Focused"]
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Dynamic Pricing",
      description: "Access real-time price changes so that you can offer the best deals and attract price-sensitive travellers.",
      features: ["Real-time Pricing", "Best Deals", "Competitive Rates", "Price Optimization"]
    },
    {
      icon: <Languages className="h-8 w-8" />,
      title: "Multi-Language Support", 
      description: "Offer your customers the convenience of browsing and booking flights in their preferred language. Now worldwide can use your platform.",
      features: ["Multiple Languages", "Global Reach", "Localized Experience", "Worldwide Access"]
    },
    {
      icon: <Banknote className="h-8 w-8" />,
      title: "Currency Conversion",
      description: "Automatically display prices in your customers' local currency. Our API provides correct and latest pricing information.",
      features: ["Auto Conversion", "Local Currency", "Latest Rates", "Global Pricing"]
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Localized Content",
      description: "Provide region-specific content and offers to make the booking experience unique. You get repeated customers from different parts of the world.",
      features: ["Region Specific", "Unique Experience", "Custom Offers", "Global Customers"]
    }
  ]

  const howToUseSteps = [
    {
      icon: <UserPlus className="h-8 w-8" />,
      title: "Sign Up",
      description: "Create an account on our website to get an API key. This provides you the user rights to API technology for flight booking process."
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Set Up Your Environment", 
      description: "Install software tools on your computer. The API documentation we provide will guide you through this setup process."
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Make Your First API Call",
      description: "Use the API key to make your first call. Ask the API for available flights information and get the data you need."
    },
    {
      icon: <Ticket className="h-8 w-8" />,
      title: "Handle Bookings",
      description: "When users book flights, use the API to send booking information to airlines and get booking reference numbers."
    },
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: "Manage Payments",
      description: "With payment processing features, handle payment transactions securely through the integrated API system."
    }
  ]

  const whyChooseFeatures = [
    {
      icon: <Server className="h-6 w-6" />,
      title: "Handle up to 10,000 API requests/minute",
      description: "Guaranteed high volume request handling with smooth performance during peak times"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "99% Uptime Guarantee",
      description: "Ensure your applications remain operational with minimum disruptions"
    },
    {
      icon: <Database className="h-6 w-6" />, 
      title: "Over 20 API Endpoints",
      description: "Access multiple endpoints for flight search, booking management, itinerary retrieval and more"
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Budget friendly technology",
      description: "Cost-effective pricing models with quality promise on competitive rates"
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: "24/7 Support", 
      description: "Comprehensive support team ensures minimum downtime at your end"
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "5-star rated solutions",
      description: "Trusted by 1000+ clients for reliability, scalability and performance"
    }
  ]

  const marketStats = [
    {
      number: "1.3B",
      label: "International Travellers",
      description: "across borders in 2023"
    },
    {
      number: "5%",
      label: "Market Growth Rate",
      description: "global air travel market"
    },
    {
      number: "1000+",
      label: "Travel Agents",
      description: "scaling with our API"
    },
    {
      number: "25%",
      label: "Engagement Boost",
      description: "with real-time updates"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header currentPage="air-booking-api" />

      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div className="w-full">
          <img 
            src="/air-booking-api-hero.png" 
            alt="Air Booking API Solutions" 
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
                  Stay ahead of the competition with Air Booking API
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  Try our cutting edge technology to remain an industry leader
                </p>

                <div className="grid md:grid-cols-4 gap-4 mb-8">
                  {marketStats.map((stat, index) => (
                    <div key={index} className="text-center p-4 bg-gradient-to-r from-[#38857a]/10 to-[#FF914C]/10 rounded-lg">
                      <div className="text-2xl font-bold text-[#38857a] mb-1">{stat.number}</div>
                      <div className="text-sm font-semibold text-gray-800 mb-1">{stat.label}</div>
                      <div className="text-xs text-gray-600">{stat.description}</div>
                    </div>
                  ))}
                </div>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  The growth rate of the global travel sector is indeed amazing. Stand out in this industry by offering lightning-fast flight bookings with our API. Join hands with Scriza to capture a bigger slice of this lucrative market.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  The booking process can get hassle free with our efficient Air Booking API. With our state of art flight booking API 1000+ travel agents are scaling their businesses.
                </p>

                <div className="grid md:grid-cols-4 gap-4 mb-8">
                  {airApiFeatures.map((feature, index) => (
                    <div key={index} className="bg-gradient-to-r from-[#38857a]/10 to-[#FF914C]/10 rounded-lg p-3 text-center">
                      <span className="text-sm font-medium text-gray-800">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-[#38857a]/10 to-[#FF914C]/10 rounded-xl p-6 mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Request a free demo and attain the competitive edge. With our feature rich booking API solution you can enjoy:</h4>
                  <div className="space-y-3">
                    {keyBenefits.map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-[#38857a]" />
                        <span className="text-gray-700 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-lg p-4">
                  <p className="text-lg font-semibold text-red-800">
                    The global air travel market is growing at a speed of 5%. Don't you think you need to stay ahead of the pace? Stop letting your competitors outpace you—request a demo of our cutting-edge Flight Booking API today!
                  </p>
                </div>
              </div>

              {/* Investment Benefits */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Why should you invest in API for flight booking?
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  An API is worth the investment because it streamlines the entire booking process. Your job becomes quicker and more efficient. Manual search through lot of flight options is time consuming so automate the search with API. You get real-time information on availability, prices and schedules. Users feel encouraged to choose your platform for more bookings.
                </p>

                <div className="space-y-8">
                  {investmentBenefits.map((benefit, index) => (
                    <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                      <div className="grid md:grid-cols-3 gap-6 items-center">
                        <div className="text-center">
                          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white mx-auto mb-4">
                            {benefit.icon}
                          </div>
                          <div className="text-3xl font-bold text-[#38857a] mb-1">{benefit.stat}</div>
                          <div className="text-sm text-gray-600">{benefit.label}</div>
                        </div>
                        <div className="md:col-span-2 space-y-4">
                          <h3 className="text-xl font-semibold text-gray-900">{benefit.title}</h3>
                          <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-[#38857a]/10 to-[#FF914C]/10 rounded-xl">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    A flight booking API opens up a world of opportunities for revenue generation. With direct access to a vast database of airlines and flights, you can offer a wider range of options to your customers. It means the chances of conversions are increased.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-[#38857a]" />
                      <span className="text-gray-700 text-sm">Real-time availability updates increases customer engagement by 25%</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-[#38857a]" />
                      <span className="text-gray-700 text-sm">Increased booking volume makes your brand the #1 booking platform</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Gamechanger Features */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Gamechanger features of our flight ticket API
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Our dedicated team of API experts can transform the way you handle bookings. Choose Scriza if you want the flight booking process to be fast, secure and efficient for your users. Our API is the perfect booking tool your business was lacking.
                </p>
                
                <div className="space-y-8">
                  {gamchangerFeatures.map((feature, index) => (
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

              {/* How to Use */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  How to use an API for airline booking?
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  API integration may seem technical but it is actually very easy and quick
                </p>
                
                <div className="space-y-6">
                  {howToUseSteps.map((step, index) => (
                    <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white flex-shrink-0">
                          {step.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-gray-900 mb-3">Step {index + 1}: {step.title}</h3>
                          <p className="text-gray-600 leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Choose Scriza */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Why Choose Scriza Flight Reservation API?
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Our API solutions are 5-star rated because we are zealous to meet your needs. Our affordable API is trusted by 1000+ clients because of its reliability and scalability.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {whyChooseFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 border border-gray-200 rounded-lg">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white flex-shrink-0">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Final CTA */}
              <div className="bg-gradient-to-r from-[#38857a] to-[#FF914C] rounded-2xl p-8 text-white">
                <h2 className="text-3xl font-bold mb-4">Get Started with Our Air Ticket Booking API Today!</h2>
                <p className="text-lg text-white/90 mb-4">
                  Why fall behind and settle for less when you can leverage cutting edge technology with our affordable pricing models.
                </p>
                <p className="text-white/90 mb-6">
                  The travel industry is competitive and Scriza can help you stay ahead. Contact us today to request a free API demo and transform your booking capabilities.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-white text-[#38857a] hover:bg-white/90"
                    onClick={() => document.getElementById('demo-section')?.scrollIntoView({behavior: 'smooth'})}
                  >
                    Request Free Demo
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-white text-white hover:bg-white/10"
                  >
                    Get Started Today
                    <Plane className="ml-2 h-5 w-5" />
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

      <Certification />
      <Footer />
      <ChatWidget />
    </div>
  )
}