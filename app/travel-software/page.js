'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ChatWidget from '@/components/ChatWidget'
import DemoBookingForm from '@/components/DemoBookingForm'
import Certification from '@/components/Certification'
import { 
  ArrowRight,
  CheckCircle,
  Clock,
  Shield,
  Zap,
  Smartphone,
  Globe,
  Users,
  CreditCard,
  TrendingUp,   
  Star,
  Building,
  Send,
  FileText,
  UserCheck,
  Database,
  Target,
  Briefcase,
  BarChart3,
  MessageCircle,
  Calendar,
  UserPlus,
  PhoneCall,
  Mail,
  Search,
  Filter,
  Bell,
  PieChart,
  LineChart,
  Activity,
  Handshake,
  DollarSign,
  Clock3,
  AlertCircle,
  Eye,
  Settings,
  Lightbulb,
  Heart,
  TrendingDown,
  Calculator,
  Gauge,
  Lock,
  Layers,
  ClipboardList,
  MonitorCheck,
  BadgeCheck,
  Scale,
  FileCheck,
  UserCog,
  Banknote,
  ChevronRight,
  Award,
  Building2,
  Headphones,
  Wrench,
  Wallet,
  ShieldCheck,
  Code,
  Server,
  RefreshCw,
  BarChart,
  Link,
  Landmark,
  PiggyBank,
  Receipt,
  Car,
  Home,
  Plane,
  MapPin,
  Languages,
  Ticket,
  Route
} from 'lucide-react'

export default function TravelSoftwarePage() {
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
          message: `Travel Software Demo Request - Selected Option: ${formData.option}`
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

  const businessChallenges = [
    "Managing bookings",
    "Coordinating itineraries", 
    "Delivering exceptional customer service"
  ]

  const softwareBenefits = [
    "Simplify your workflow",
    "Increase Bookings",
    "Minimize the errors",
    "Reduce the cost",
    "Offer a competitive edge",
    "Improve customer satisfaction"
  ]

  const managementBenefits = [
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Error-free booking management",
      description: "You will use a centralized platform to check availability in real time and manage booking without manual errors."
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Save Time and Resources",
      description: "Managing flights, accommodation or transfers become easy and fast with our software solution."
    },
    {
      icon: <Route className="h-6 w-6" />,
      title: "Simplified itinerary management",
      description: "Impress your customers by using travel software. You get the option of customization in the itinerary based on your personal preferences."
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "Easy transaction handling",
      description: "Generating invoices and managing transactions become easier with a reliable software system."
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Automation of repetitive tasks",
      description: "Technology enables you to eliminate manual data entry, integration and other repetitive tasks. These can be done automatically by the software while you can focus on other important things."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Data security",
      description: "The software features security measures to protect customer information and business data."
    }
  ]

  const targetUsers = [
    {
      icon: <Building className="h-6 w-6" />,
      title: "Travel agencies",
      description: "All sizes of travel agencies including small independent agencies to large corporate agencies."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Tour operators",
      description: "Organizing and managing tours and activities."
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Online travel agencies (OTAs)",
      description: "Agencies that provide online bookings and reservations."
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Destination management companies",
      description: "For coordination of travel services at specific locations."
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "Travel management companies",
      description: "Working on corporate travel arrangements."
    },
    {
      icon: <UserCheck className="h-6 w-6" />,
      title: "Independent travel consultants",
      description: "Those who offer personalized travel planning services."
    }
  ]

  const softwareFeatures = [
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile friendly",
      description: "Accessible and user-friendly interface to provide operating convenience for mobile devices."
    },
    {
      icon: <Layers className="h-6 w-6" />,
      title: "Multiple Modules",
      description: "A comprehensive set of modules for hotel contracting, ticketing, quotation, and finance processes."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Travel CRM",
      description: "Customer Relationship Management system for personalized service and effective management."
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Centralized Travel Booking",
      description: "Manage online and offline booking and confirm reservations in one place."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Instant Confirmation",
      description: "Enjoy quick and seamless transactions with instant and real-time confirmation of bookings."
    },
    {
      icon: <Languages className="h-6 w-6" />,
      title: "Multi - Language",
      description: "Cater to a diverse set of customers with multiple language support."
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Multi-Currency",
      description: "Welcome international customers and handle transactions in multiple currencies."
    },
    {
      icon: <Link className="h-6 w-6" />,
      title: "API integration",
      description: "Third-party API integration becomes easier for hassle-free travel data exchange."
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Auto Generate Confirmation email",
      description: "Save time in communicating with clients with the automated email generation features."
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "Secure Transactions",
      description: "Robust encryption protocols and compliance standards to protect financial transaction data."
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: "Ongoing Support",
      description: "Continuous assistance and support from our team for any issue or query."
    }
  ]

  const softwareWorkflow = [
    "Create and manage bookings",
    "Coordinate itineraries",
    "Communicate with customers",
    "Generate invoices",
    "Integrates with multiple travel suppliers",
    "Send confirmation emails",
    "Handling financial transactions",
    "Use reporting and analytics"
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header currentPage="travel-software" />

      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div className="w-full">
          <img 
            src="/travel.png" 
            alt="Travel Software" 
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
                  Travel Software
                </h2>
                
                <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-lg p-4 mb-8">
                  <p className="text-lg font-semibold text-red-800 mb-2">Are you still struggling with the challenges of:</p>
                  <div className="space-y-2">
                    {businessChallenges.map((challenge, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <AlertCircle className="h-4 w-4 text-red-600" />
                        <span className="text-red-700">{challenge}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  As a travel agency owner or manager, you must be looking for innovative solutions to drive growth. Look no further because the best travel booking management solution is here!
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Scriza brings forth the ultimate software development technology that will:
                </p>

                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  {softwareBenefits.map((benefit, index) => (
                    <div key={index} className="bg-gradient-to-r from-[#38857a]/10 to-[#FF914C]/10 rounded-lg p-3 text-center">
                      <span className="text-sm font-medium text-gray-800">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-[#38857a]/10 to-[#FF914C]/10 rounded-xl p-6 mb-6">
                  <p className="text-gray-700 leading-relaxed">
                    Leveraging the robust software development platform, we assure you a secure, reliable and high performing technology. With features like CRM and analytics and the provision of customization become the 5/5 star rated agency for developed travel booking related software.
                  </p>
                </div>

                <p className="text-gray-700 leading-relaxed font-semibold">
                  Drive business growth by choosing us. Connect now and discuss your requirements for customized software.
                </p>
              </div>

              {/* Benefits of Travel Management System */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  What are the benefits of using a travel agency management system?
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Using a tech-based management system offers numerous benefits for travel businesses. In simple words, you can transform the way your travel agency operates by attaining the following benefits:
                </p>
                
                <div className="space-y-8">
                  {managementBenefits.map((benefit, index) => (
                    <div key={index} className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white">
                          {benefit.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">{benefit.title}</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed ml-12">{benefit.description}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-[#38857a]/10 to-[#FF914C]/10 rounded-xl">
                  <p className="text-gray-700 leading-relaxed">
                    You can definitely enhance customer experiences and drive growth in the competitive travel industry. All you need is to try our software solution and streamline your travel agency operations.
                  </p>
                </div>
              </div>

              {/* Who Can Use */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Who can use our travel agency system software?
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  We are developing high performing software solutions for the travel industry for over a decade now. Owing to our decade long industry experience, we are able to cater to a wide range of users within the travel industry, such as:
                </p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {targetUsers.map((user, index) => (
                    <div key={index} className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white">
                          {user.icon}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">{user.title}</h3>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{user.description}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-[#38857a]/10 to-[#FF914C]/10 rounded-xl">
                  <p className="text-gray-700 leading-relaxed">
                    Our travel agency technology solutions are suitable for any business or professional involved in the planning, management, and distribution of travel-related services. Connect now to learn more about how we can help you streamline your business operations.
                  </p>
                </div>
              </div>

              {/* Best Software Features */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  What are the best travel agency software features?
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  The key feature of software can make a significant difference. The reason our developed software solutions are high in demand is that we go the extra mile and deliver bespoke solutions.
                </p>
                
                <div className="space-y-8">
                  {softwareFeatures.map((feature, index) => (
                    <div key={index} className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white">
                          {feature.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed ml-12">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* How Software Works */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  How does travel agency management software work?
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  The user-friendly interface can work in the following ways:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {softwareWorkflow.map((workflow, index) => (
                    <div key={index} className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-[#38857a]" />
                      <span className="text-gray-700">{workflow}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-[#38857a]/10 to-[#FF914C]/10 rounded-xl">
                  <p className="text-gray-700 leading-relaxed">
                    Stay connected and enjoy the flexibility of handling travel related tasks from anywhere. Our software is indeed the right choice for exceptional service delivery. Connect now to get a quote.
                  </p>
                </div>
              </div>

              {/* Get Started CTA */}
              <div className="bg-gradient-to-r from-[#38857a] to-[#FF914C] rounded-2xl p-8 text-white">
                <h2 className="text-3xl font-bold mb-4">Which is the best online travel agency software? Get in touch to find out!</h2>
                <p className="text-lg text-white/90 mb-4">
                  Don't miss out on the ultimate travel agency software experience. Take your business to new heights with our innovative solution.
                </p>
                <p className="text-white/90 mb-6">
                  Contact us now to explore the possibilities and embark on a journey towards increased efficiency, enhanced customer satisfaction, and business growth. Get started today!
                </p>
                <Button 
                  size="lg" 
                  className="bg-white text-[#38857a] hover:bg-white/90"
                  onClick={() => document.getElementById('demo-section')?.scrollIntoView({behavior: 'smooth'})}
                >
                  Schedule Free Demo
                  <Send className="ml-2 h-5 w-5" />
                </Button>
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