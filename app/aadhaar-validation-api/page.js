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
  TrendingDown,
  Upload,
  FileImage
} from 'lucide-react'

export default function AadhaarValidationAPIPage() {
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
          message: `Aadhaar Validation API Demo Request - Selected Option: ${formData.option}`
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

  const reasons = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Instant authentication via API",
      description: "Quickly onboard your verified customers with a fast and efficient API solution. Our easy to integrate API supports multiple channels"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Fraud protection",
      description: "Scriza API solution lets you enhance the security of transactions. Quickly verify the Aadhaar credibility of customers and prevent fraudulent activities."
    },
    {
      icon: <UserCheck className="h-6 w-6" />,
      title: "User friendly Aadhaar card validation API",
      description: "Presenting an easy plug and play API integration solution. Integrate into your existing system and make digital Aadhaar verification a breeze."
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Live database integration",
      description: "The API works on real time integrated database. Hence, we provide the assurance of 100% error-free Aadhaar verification in a few seconds."
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: "Robust Aadhaar Card verification API",
      description: "A stable API that offers robust Aadhaar verification and validation solutions. Suitable for enterprises to conduct onboarding with zero downtime."
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Affordable price range",
      description: "Verify the credible customers digitally with our affordable API technology. Surely a feasible option for enterprises looking for a trusted and reasonably priced solution"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header currentPage="aadhaar-validation-api" />

      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div className="w-full">
          <img 
            src="/aadhaar-validation-api-hero.png" 
            alt="Aadhaar Validation API Solutions" 
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
                  Aadhaar Validation API
                </h1>
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                  Aadhaar Card Verification API
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Scriza API provides multi-channel support to verify customers in seconds and reduce fraud in business transactions
                </p>
              </div>

              {/* What is UIDAI */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  What is UIDAI Aadhaar Verification API?
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Aadhaar verification through API integration makes you a leader in the digital ecosystem. Enterprises can enrich their platform with new and advanced verification technologies. The verification solution fetches information from the UIDAI database for customer onboarding. The easy plug and play API lets you extract real time information to validate the following information on the Aadhaar Card
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-[#38857a]" />
                    <span className="text-gray-700">User name</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-[#38857a]" />
                    <span className="text-gray-700">DOB</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-[#38857a]" />
                    <span className="text-gray-700">Gender</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-[#38857a]" />
                    <span className="text-gray-700">Address</span>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[#38857a]/10 to-[#FF914C]/10 rounded-xl p-6 mb-6">
                  <p className="text-gray-700 leading-relaxed">
                    With Aadhaar verification API you can quickly verify the credibility of your customers and save your enterprise from fraudsters. So, connect with our team and get the Aadhaar verification API keys right now.
                  </p>
                </div>
              </div>

              {/* Looking for Affordable */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Looking for an Affordable and Secure API for Aadhaar Verification?
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Try the 5-star rated API solution by Scriza. Below are the reasons we have become a preferred choice for onboarding API technologies
                </p>
                
                <div className="space-y-6">
                  {reasons.map((reason, index) => (
                    <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white flex-shrink-0">
                          {reason.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-3">{reason.title}</h3>
                          <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* How does it work */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  How does the UIDAI Aadhaar Verification API work?
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Online verification of Aadhaar has been made easier by Scriza API solutions.
                </p>

                <div className="space-y-6">
                  <div className="border border-gray-200 rounded-xl p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white flex-shrink-0">
                        <Eye className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">Extract OCR Data with Aadhaar Card Number verification API</h4>
                        <p className="text-gray-700 leading-relaxed">The Artificial Intelligence (AI) API initiates real time database checking to verify the authenticity of the 12-digit Aadhaar number</p>
                      </div>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-xl p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white flex-shrink-0">
                        <Database className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">Fetch Information in seconds with Aadhar verification API</h4>
                        <p className="text-gray-700 leading-relaxed">Get verified information from the Aadhaar database using the reliable Scriza API solution in seconds</p>
                      </div>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-xl p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white flex-shrink-0">
                        <Settings className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">Three ways of Aadhaar card verification</h4>
                        <p className="text-gray-700 leading-relaxed">Options to verify Aadhaar via uploading XML or ZIP file of Aadhaar, verifying without OTP and verifying with OPT</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* How to integrate */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  How we can integrate Aadhaar API?
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  With our offered robust API technology, data retrieval can be done with total accuracy. Your compliance team can complete the verification of Aadhaar information in real time with zero chances of errors. Here is how you can integrate the Aadhaar verification API.
                </p>

                <div className="space-y-6">
                  <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white flex-shrink-0">
                        <Send className="h-8 w-8" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Place a request to access the ready-to-use API tool</h3>
                      </div>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white flex-shrink-0">
                        <Key className="h-8 w-8" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Enter the provided API keys into a mobile or web application</h3>
                      </div>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white flex-shrink-0">
                        <Database className="h-8 w-8" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Connect with UIDAI data source and fetch information in real time</h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl">
                  <p className="text-blue-800 font-semibold">
                    We are here to deliver 100% customer satisfaction levels. So book a free demo to learn more about hassle-free integration of the API for Aadhar verification.
                  </p>
                </div>
              </div>

              {/* How to use */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  How to use Aadhaar Number Verification API?
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  We go the extra mile to ensure improved user experience. Therefore, Scriza brings forth three different ways to verify and validate the Aadhaar card.
                </p>

                <div className="space-y-6">
                  <div className="border border-gray-200 rounded-xl p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white flex-shrink-0">
                        <span className="text-lg font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">Integrate Aadhaar card number verification API:</h4>
                        <p className="text-gray-700 leading-relaxed">Request API keys from Scriza and enter them into a mobile or web application for real-time integration.</p>
                      </div>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-xl p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white flex-shrink-0">
                        <span className="text-lg font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">Upload Aadhaar:</h4>
                        <p className="text-gray-700 leading-relaxed">The offered API fetches information about the Aadhaar card from the official UIDAI website to complete the verification.</p>
                      </div>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-xl p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white flex-shrink-0">
                        <span className="text-lg font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">Verify without OTP</h4>
                        <p className="text-gray-700 leading-relaxed">API key can be used to verify an Aadhaar card without OTP.</p>
                        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                          <pre className="text-sm text-gray-700 whitespace-pre-wrap font-mono">
{`status_id": 1,
"state": "Delhi",
"ageBand": "30-40",
"gender": "MALE",
"mobile_number": "xxxxxxx056",
"aadhaar_number": "883170661913",
"report_id": 402,
"message": "Aadhaar Card Exists"`}
                          </pre>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-xl p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white flex-shrink-0">
                        <span className="text-lg font-bold">4</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">Verify with OTP:</h4>
                        <p className="text-gray-700 leading-relaxed">One-time passwords can be used to verify the credibility of your customers. Use OTP to fetch details like the image and the address.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Get API Keys Section */}
              <div className="bg-gradient-to-r from-[#38857a] to-[#FF914C] rounded-2xl p-8 text-white">
                <h2 className="text-3xl font-bold mb-4">Get Aadhaar Verification API Keys</h2>
                <p className="text-lg text-white/90 mb-6">
                  You have customers to onboard! Let's get started with a robust API for Aadhaar verification.
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

      <Footer />
      <ChatWidget />
    </div>
  )
}
