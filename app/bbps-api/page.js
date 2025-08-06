'use client'

import { Button } from '@/components/ui/button'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ChatWidget from '@/components/ChatWidget'
import DemoBookingForm from '@/components/DemoBookingForm'
import Certification from '@/components/Certification'
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
  Receipt
} from 'lucide-react'



export default function BBPSAPIPage() {
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
          message: `BBPS API Demo Request - Selected Option: ${formData.option}`
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

  const bbpsServices = [
    "Electricity Bill Payment",
    "Gas Bill Payment", 
    "Water Bill Payment",
    "Telecom Bill Payment",
    "DTH Recharge",
    "Mobile Postpaid",
    "Broadband Bills",
    "Insurance Premium"
  ]

  const customerBenefits = [
    "RBI approved BBPS platform for secure transactions",
    "Real-time bill fetching and payment processing", 
    "Multi-category bill payment support",
    "Instant payment confirmations and receipts",
    "24/7 API availability with minimal downtime",
    "Comprehensive transaction reporting",
    "Easy integration with existing systems",
    "Competitive commission structures"
  ]

  const features = [
    {
      icon: <Receipt className="h-8 w-8 text-blue-600" />,
      title: "Multi-Category Bills",
      description: "Support for electricity, gas, water, telecom, and other utility bills"
    },
    {
      icon: <Shield className="h-8 w-8 text-green-600" />,
      title: "RBI Approved",
      description: "Certified BBPS platform ensuring regulatory compliance and security"
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-600" />,
      title: "Real-time Processing",
      description: "Instant bill fetching and payment processing with immediate confirmations"
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-purple-600" />,
      title: "Detailed Reporting",
      description: "Comprehensive transaction reports and analytics dashboard"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              BBPS API Provider
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Comprehensive Bill Payment Solutions for Every Business
            </p>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Integrate seamless bill payment capabilities with our RBI-approved BBPS API platform. 
              Enable your customers to pay electricity, gas, water, telecom, and other utility bills instantly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-3 text-lg">
                Start Integration
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 text-lg">
                View Documentation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              BBPS Services We Support
            </h2>
            <p className="text-xl text-gray-600">
              Complete range of bill payment categories
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {bbpsServices.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="mb-3">
                  <CheckCircle className="h-8 w-8 text-green-500 mx-auto" />
                </div>
                <h3 className="font-semibold text-gray-900">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our BBPS API
            </h2>
            <p className="text-xl text-gray-600">
              Advanced features for seamless bill payment integration
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Customer Benefits
            </h2>
            <p className="text-xl text-gray-600">
              Advantages of using our BBPS API platform
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {customerBenefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3 bg-white p-6 rounded-lg shadow-md">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Booking Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Request a Demo
            </h2>
            <p className="text-xl text-blue-100">
              See our BBPS API in action. Get started today!
            </p>
          </div>
          
          <DemoBookingForm onSubmit={handleDemoSubmit} />
        </div>
      </section>

      <Certification />
      <Footer />
      <ChatWidget />
    </div>
  )
}
