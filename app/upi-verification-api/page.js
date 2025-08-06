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

export default function UPIVerificationAPIPage() {
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
          message: `UPI Verification API Demo Request - Selected Option: ${formData.option}`
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

  const features = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Reduce frauds",
      description: "The high-end UPI confirms the user's details and lets you stop fraudsters. So onboard genuine and verified customers and authorize secure transactions to grow your business smoothly."
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Automate operation",
      description: "Real time access to information makes verification and screening of UPIs instant. Instantly integrate the UPI validation API in a web portal or a mobile site and access VPA validation data"
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Lower onboarding cost",
      description: "No-code flawless VPA verification decreases the processing time and saves onboarding costs. Reduce the risk of manual errors and empower your compliance team with our API technology."
    }
  ]

  const trustworthyFeatures = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Fastest UPI ID verification online",
      description: "The optimized API solution guarantees 99.99% uptime which confirms instant verification of VPA with reduced turnaround time. Connect now to book a demo for the fastest and most secure UPI verification API"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Real time UPI Verification API",
      description: "Data retrieval can be done within seconds with our easy to integrate API. The offered technology seamlessly integrates with your existing systemsand makes validation easy.We offer round the clock customer support to attain 100% customer satisfaction."
    },
    {
      icon: <UserCheck className="h-6 w-6" />,
      title: "Easy to use UPI validation API",
      description: "Eliminate the hassles of codes, updates and operating system scalability with our easy to use API technology. Get in touch to access API keys.Get in touch with us to book a free demo or get access to the high performing and robust API technology"
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "Efficient fraud prevention",
      description: "Verifying VPAS has never been easier for merchants and enterprises. A legit and accurate system to verify UPIs that is accepted across all industries."
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header currentPage="upi-verification-api" />

      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div className="w-full">
          <img 
            src="/upi-verification-api-hero.png" 
            alt="UPI Verification API Solutions" 
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
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  UPI Verification API
                </h1>
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                  UPI ID Verification Online (VPA)
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  verify a customer's Virtual Payment Address (VPA) for reducing the rsk of fraud in UPI payments
                </p>
              </div>

              {/* What is the use */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  What is the use of UPI Verification API?
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Unified Payment Interface or UPI has become the backbone of the payment system in India. Every UPI owner has a unique VPA that can be used across all banks and merchants to promote digital payments.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  A UPI verification API can be used to check if the given VPA is valid or not. Real time database integration helps in validating the name of the account holder and whether they are using a current or savings bank account.
                </p>

                <div className="bg-gradient-to-r from-[#38857a]/10 to-[#FF914C]/10 rounded-xl p-6 mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Virtual Payment Address (VPA) validation was never so easy</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Scriza API offers you a scalable and easy to use solution to verify whether the given VPA belongs to an active bank account or not.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    The seamless integration provides useful details of the account holder to ensure secure business transactions. The digital codes of API communication are instant and we assure you zero downtime so that you can complete business transactions efficiently and swiftly.
                  </p>
                </div>
              </div>

              {/* What outputs */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  What outputs do you get from UPI Validation API?
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Save yourself from money transfer fraud. Simply get in touch with us and integrate the highly sophisticatedUPI verification API. This high-end API technology integrates with the database of NPCI (National Payments Corporation of India) and helps you validate the UPI details of your customers.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Scriza UPI validation API can be used to get the following outputs:
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-[#38857a] mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Name of the account holder:</h4>
                      <p className="text-gray-700">The error-free validation technology provides the name of the account holder in the registered bank.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-[#38857a] mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Status:</h4>
                      <p className="text-gray-700">With this API, you can also check if the provided VPA is valid or not.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-blue-800 font-semibold">
                    Our offered API solutions are genuine, 100% secure and error-free. Contact now to book a free demo for the best UPI Validation API.
                  </p>
                </div>
              </div>

              {/* Features */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Features of our UPI Verification API
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Guaranteed reduction in drop-offs with a smooth and advanced VPA verification solution.
                </p>

                <div className="space-y-6">
                  {features.map((feature, index) => (
                    <div key={index} className="border border-gray-200 rounded-xl p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white flex-shrink-0">
                          {feature.icon}
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h4>
                          <p className="text-gray-700 leading-relaxed">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trustworthy Solution */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Trustworthy UPI Verification solution by Scriza
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  3X your productivity or sales with the instant UPI verification solution.
                </p>
                
                <div className="space-y-6">
                  {trustworthyFeatures.map((feature, index) => (
                    <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white flex-shrink-0">
                          {feature.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                          <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* How to Use */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  How to use UPI Verification API?
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  The easy to use UPI verification API lets you track and analyze VPA data instantly. Here is a straightforward step-wise approach for staying on top of VPA status updates.
                </p>
                
                <div className="space-y-6">
                  <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white flex-shrink-0">
                        <UserPlus className="h-8 w-8" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Users enter the UPI address as an input</h3>
                      </div>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white flex-shrink-0">
                        <Database className="h-8 w-8" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">The API retrieves VPA data in real time</h3>
                      </div>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white flex-shrink-0">
                        <UserCheck className="h-8 w-8" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Delivers account holder's name as output</h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-[#38857a]/10 to-[#FF914C]/10 rounded-xl">
                  <p className="text-gray-700 leading-relaxed">
                    It takes only a few seconds to validate the details of a provided VPA. So why are you compromising the efficacy of your business with unsafe transactions? Connect now to book a free demo for using the safest technology to validate the status of a UPI ID
                  </p>
                </div>
              </div>

              {/* Contact Us Section */}
              <div className="bg-gradient-to-r from-[#38857a] to-[#FF914C] rounded-2xl p-8 text-white">
                <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
                <p className="text-lg text-white/90 mb-6">
                  We look forward to assuring you of secure business transactions. So, what are you waiting for? Connect now and learn more about the robust and secure VPA Verification API
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
                    Contact Us Today
                    <MessageSquare className="ml-2 h-5 w-5" />
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
