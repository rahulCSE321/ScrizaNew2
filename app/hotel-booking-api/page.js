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
  Image
} from 'lucide-react'

export default function HotelBookingAPIPage() {
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
          message: `Hotel Booking API Demo Request - Selected Option: ${formData.option}`
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

  const hotelApiFeatures = [
    "Easy Integration",
    "Real-time Data",
    "Customizable Search",
    "Instant Booking",
    "Multi-Currency Support",
    "Mobile Friendly",
    "Secure Payments",
    "Global Coverage"
  ]

  const keyBenefits = [
    "Handle bookings from Tokyo to New York with multi-currency support",
    "Join top-notch hotels using API technology for streamlined operations",
    "Enjoy efficiency, accessibility and user satisfaction in booking operations",
    "Access real-time availability and pricing data for informed decisions"
  ]

  const performanceStats = [
    {
      icon: <Server className="h-8 w-8" />,
      title: "Handle 100+ API requests per minute",
      description: "Robust infrastructure designed to handle high-volume booking requests with consistent performance.",
      stat: "100+",
      label: "Requests/Min"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "99% API Availability Rate",
      description: "Guaranteed uptime with robust infrastructure ensuring your booking system is always operational.",
      stat: "99%",
      label: "Uptime"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "300 milliseconds average response time",
      description: "Lightning-fast API responses ensure smooth user experience with minimal loading times.",
      stat: "300ms",
      label: "Response Time"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Multiple languages and currencies",
      description: "Support for global bookings with multiple language options and currency conversions.",
      stat: "Global",
      label: "Coverage"
    }
  ]

  const apiCapabilities = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Easy to use",
      description: "The easy plug and play integration allow clients to quickly embed the API into their existing websites without complex setup.",
      features: ["Plug & Play", "Quick Integration", "No Complex Setup", "User Friendly"]
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Real-time Data",
      description: "Access to real-time availability from hotel databases. The latest pricing data retrieval help users to make informed booking decisions.",
      features: ["Live Availability", "Current Pricing", "Database Access", "Informed Decisions"]
    },
    {
      icon: <Filter className="h-8 w-8" />,
      title: "Customizable Search",
      description: "Modern search functionality allows users to filter results by location, dates, price range, amenities and room types.",
      features: ["Location Filter", "Date Selection", "Price Range", "Amenity Filter"]
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Instant Booking and Confirmation",
      description: "Users can book rooms instantly through the API, with automated confirmation processes. Great user experience with immediate booking status.",
      features: ["Instant Booking", "Auto Confirmation", "Immediate Status", "Great UX"]
    },
    {
      icon: <Image className="h-8 w-8" />,
      title: "Comprehensive Information",
      description: "Detailed hotel descriptions, high-quality images, and user reviews help users to evaluate accommodations before booking.",
      features: ["Detailed Descriptions", "High-Quality Images", "User Reviews", "Complete Info"]
    }
  ]

  const howToUseSteps = [
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Integration Setup",
      description: "Review our detailed documentation to obtain your API credentials. Seamlessly integrate our API using user-friendly SDKs or customize with RESTful endpoints."
    },
    {
      icon: <ShieldCheck className="h-8 w-8" />,
      title: "Authentication",
      description: "Authenticate your API requests using OAuth tokens or API keys for security. This ensures only authorized access to your system for safe transactions."
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: "Search and Filtering",
      description: "Set up search features for real-time availability, prices, and room choices based on location, dates, and amenities users need."
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Booking Process",
      description: "Let users pick rooms and start booking from your platform. Manage booking confirmations and changes smoothly using API calls."
    },
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: "Payment Integration",
      description: "Connect with reliable payment gateways through our API. We maintain PCI-DSS compliance to safeguard sensitive payment details."
    }
  ]

  const pricingBenefits = [
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "30% lower pricing than competitors",
      description: "Full-fledged development infrastructure makes our hotel booking API the most affordable option"
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: "No hidden costs",
      description: "Benefit from transparent pricing so you can budget effectively and plan for growth"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Increase your ROI",
      description: "Cost-effective solutions give great returns by streamlining booking processes"
    },
    {
      icon: <PiggyBank className="h-6 w-6" />,
      title: "Save up to 20%",
      description: "Reduce development costs by leveraging comprehensive features and robust support"
    },
    {
      icon: <Layers className="h-6 w-6" />,
      title: "Flexible pricing plans",
      description: "Pricing plans tailored to your needs, ensuring cost-efficiency without compromising quality"
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "Safe payment gateways",
      description: "Integration with trusted payment systems like Amazon Pay and PayPal"
    }
  ]

  const clientTypes = [
    "Travel Agencies",
    "Online Portals",
    "Corporate Travel Management",
    "Event Platforms",
    "Hospitality Software Developers",
    "Hotels & Resorts",
    "Bed & Breakfast",
    "Hostels"
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header currentPage="hotel-booking-api" />

      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div className="w-full">
          <img
            src="/hotel-booking-api-hero.png"
            alt="Hotel Booking API Solutions"
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
                  Boost your Business with our Hotel Booking API
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  Handle bookings from Tokyo to New York with our multi-currency API
                </p>

                <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-lg p-4 mb-8">
                  <p className="text-lg font-semibold text-red-800 mb-2">Are you still struggling with the outdated booking system?</p>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Join the ranks of top-notch hotels using API technology to streamline bookings and enhance guest satisfaction. Choose Scriza as your API technology partner and make booking a breeze. Our Hotel Booking API lets you integrate seamless reservations into your app or website.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Enjoy efficiency, accessibility and user satisfaction in your hotel booking operations. Get API keys right now to report the difference!
                </p>

                <div className="grid md:grid-cols-4 gap-4 mb-8">
                  {hotelApiFeatures.map((feature, index) => (
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

              {/* #1 Provider Section */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#38857a] to-[#FF914C] text-white mb-4">
                    <Award className="h-8 w-8" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    We are voted as the #1 hotel API provider
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Hotels of every size trust us for reliable booking solutions. Choose Scriza to serve global clientele with customizable search features and robust support.
                  </p>
                </div>

                <div className="space-y-8 mb-8">
                  {apiCapabilities.map((capability, index) => (
                    <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white flex-shrink-0">
                              {capability.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900">{capability.title}</h3>
                          </div>
                          <p className="text-gray-600 leading-relaxed">{capability.description}</p>
                          <div className="grid grid-cols-2 gap-2">
                            {capability.features.map((item, idx) => (
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
                              {capability.icon}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-[#38857a]/10 to-[#FF914C]/10 rounded-xl p-6">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong>Our diverse clientele includes:</strong>
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {clientTypes.map((client, index) => (
                      <div key={index} className="text-center p-2 bg-white rounded-lg">
                        <span className="text-sm font-medium text-gray-800">{client}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    We have helped over 100 clients in seamless booking and property management. Get in touch right now if you are still looking for reliable, user-friendly hotel booking solutions.
                  </p>
                </div>
              </div>

              {/* Expertise Section */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Leverage The Decade Long Expertise Of The Best Hotel Booking API Provider
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  We have become the go to hotel booking solution. Experience booking simplicity trusted by hotels, resorts, Bed and Breakfast entities, hostels and more.
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
                    Curious to see why our API stands out? Experience first-hand how we tailor our solutions to meet your needs. Schedule a demo today and discover why our API is the best choice for hassle-free hotel bookings.
                  </p>
                </div>
              </div>

              {/* How to Use */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  How to use hotel booking system API?
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Easy to use technology that needs no prior experience. Our hotel booking system API is designed to make booking smoother and more efficient for you. The entire process turns out to be a hassle-free experience.
                </p>

                <div className="space-y-6">
                  {howToUseSteps.map((step, index) => (
                    <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white flex-shrink-0">
                          {step.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                          <p className="text-gray-600 leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-[#38857a]/10 to-[#FF914C]/10 rounded-xl">
                  <p className="text-gray-700 leading-relaxed">
                    With these steps you effectively utilize our hotel booking system API. Offer a seamless booking experience for your users while ensuring security and reliability. Get API keys today or discuss your project goals with our team.
                  </p>
                </div>
              </div>

              {/* Pricing Section */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Most affordable and the best hotel booking API
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Choose our hotel booking API to optimize your business operations. Our cost effective API solutions are rated as the best to deliver exceptional value to your customers.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  {pricingBenefits.map((benefit, index) => (
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
              </div>

              {/* Final CTA */}
              <div className="bg-gradient-to-r from-[#38857a] to-[#FF914C] rounded-2xl p-8 text-white">
                <h2 className="text-3xl font-bold mb-4">Get your API keys today!</h2>
                <p className="text-lg text-white/90 mb-4">
                  Discover our hotel booking API for lightning-fast reservations. Worried about safeguarding the sensitive user data? Trust us to complete the transactions with advanced encryption and authentication.
                </p>
                <p className="text-white/90 mb-6">
                  Not only this, with Scriza clients are empowered to optimize costs with transparent pricing and scalable solutions. Book accommodations effortlessly with our user-friendly API.
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
            question: "What is a Hotel Booking API?",
            answer: "A Hotel Booking API enables businesses to integrate real-time hotel search, availability, pricing, booking, cancellation, and reservation management services into their applications, websites, or software systems. It provides seamless access to a large inventory of hotels across multiple destinations."
          },
          {
            question: "Who should use the Hotel Booking API?",
            answer: "Our Hotel Booking API is ideal for: Travel aggregators, Online travel agencies (OTAs), Tour operators, Travel management companies, Hospitality platforms, Mobile apps providing hotel booking services, Any business aiming to offer online hotel booking functionality."
          },
          {
            question: "What services are provided by the Hotel Booking API?",
            answer: "Real-time search of available hotels by location, check-in/check-out date, and guest details, View hotel room types, availability, prices, and amenities, Instant room booking and confirmation, Booking cancellation and refund processing, Booking modification (date changes, guest details update), Retrieve and download booking confirmation and invoice, Retrieve hotel images, ratings, and reviews, Dynamic pricing and inventory updates."
          },
          {
            question: "How does the Hotel Booking API work?",
            answer: "The customer enters destination, check-in/check-out dates, and number of guests. The API searches multiple hotel partners for available inventory in real time. The customer selects a hotel and room type. The API confirms availability and shows the final price. The customer makes a payment via integrated payment gateway. Booking is confirmed instantly, and an e-confirmation (voucher) is generated. Booking details and status can be retrieved any time using the API."
          },
          {
            question: "Is the Hotel Booking API secure?",
            answer: "Yes, we ensure: HTTPS encryption for all API communications, Token-based API authentication, PCI-DSS compliance for payment processing, GDPR-compliant customer data handling, Secure storage of booking and personal details, Regular security audits and industry-standard practices."
          },
          {
            question: "How fast is the hotel booking confirmation?",
            answer: "Most hotel bookings are confirmed in real time (within a few seconds). Booking confirmation, voucher generation, and payment status are available instantly via API response and optional webhooks."
          },
          {
            question: "Can customers cancel their hotel bookings using the API?",
            answer: "Yes, the Hotel Booking API supports: Full or partial cancellation based on hotel-specific cancellation policies, Automated refund workflows where applicable, Real-time cancellation status and confirmation sent via API response."
          },
          {
            question: "Do I get access to room images, ratings, and reviews?",
            answer: "Yes, the API provides: High-resolution images of hotel rooms, Hotel star ratings, Customer reviews (where available). This helps improve customer decision-making during booking."
          },
        ]}
      />


      <Certification />
      <Footer />
      <ChatWidget />
    </div>
  )
}