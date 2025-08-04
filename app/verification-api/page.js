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
  ArrowRight
} from 'lucide-react'

export default function VerificationAPIPage() {
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
          message: `Verification API Demo Request - Selected Option: ${formData.option}`
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

  const verificationServices = [
    "KYC Verification",
    "Aadhaar Verification", 
    "PAN Card Validation",
    "Voter ID Verification",
    "Driving License",
    "Vehicle RC",
    "Business Verification",
    "Banking APIs"
  ]

  const customerBenefits = [
    "Unlock growth opportunities by accelerating digital KYC process",
    "Powerful and adaptable digital solutions with 99.99% uptime", 
    "Seamless onboarding experience with multiple verification options"
  ]

  const kycVerificationAPIs = [
    {
      icon: <UserCheck className="h-8 w-8" />,
      title: "Aadhaar Verification API",
      description: "Allow easy onboarding with our high performing Aadhaar Verification API. An instantaneous solution for validating useful information like contact details, address, age",
      image: "/aadhaar-verification.png",
      features: ["Contact Details Validation", "Address Verification", "Age Confirmation", "Real-time Processing"]
    },
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: "Pan Card Validation API",
      description: "Authentication of PAN card details gets simplified with the quick and reliable API offered by us Scriza. Streamline the onboarding process with access to real time PAN user information.",
      image: "/pan-verification.png",
      features: ["Real-time PAN Info", "Authentication", "Quick Processing", "Reliable Results"]
    },
    {
      icon: <Vote className="h-8 w-8" />,
      title: "Voter Id Verification API",
      description: "Confirm the authenticity of customers with the top-notch voter ID verification API. A robust solution to check key information of a user including name, date of birth and address.",
      image: "/voter-id-verification.png",
      features: ["Name Verification", "Date of Birth Check", "Address Validation", "Authenticity Confirmation"]
    },
    {
      icon: <Car className="h-8 w-8" />,
      title: "Driving License Verification",
      description: "Verify the driving license information with the highest accuracy and 99% uptime. Presenting a safe and efficient way for enterprises to instantly confirm the credibility of potential users.",
      image: "/driving-license-verification.png",
      features: ["High Accuracy", "99% Uptime", "Instant Verification", "Safe & Efficient"]
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Vehicle RC Verification API",
      description: "Step up the onboarding process with a faster vehicle verification API. The hassle-free authentication solution comes with proven security to boost your efficiency and revenue.",
      image: "/vehicle-rc-verification.png",
      features: ["Faster Processing", "Proven Security", "Efficiency Boost", "Revenue Growth"]
    }
  ]

  const businessVerificationAPIs = [
    {
      icon: <Building className="h-8 w-8" />,
      title: "Udyog Aadhaar Verification",
      description: "A seamless solution to verify and fetch details about the company. Access details in the highest record time to verify MSME information and attain a competitive edge.",
      image: "/udyog-aadhaar-verification.png",
      features: ["Company Details", "MSME Information", "Record Time Access", "Competitive Edge"]
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "DIN Verification API",
      description: "Fetch data from the Ministry of Corporate Affairs to access details of a director and the associated companies. Want to get details about a company",
      image: "/din-verification.png",
      features: ["Director Details", "Company Information", "MCA Data Access", "Associated Companies"]
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      title: "Company Verification API",
      description: "Error free verification of company details with the robust and secure business verification API. Access details of a business in real time to accelerate the onboarding process.",
      image: "/company-verification.png",
      features: ["Error-free Verification", "Real-time Access", "Secure Processing", "Accelerated Onboarding"]
    }
  ]

  const bankingAPIs = [
    {
      icon: <University className="h-8 w-8" />,
      title: "Verify Bank Account",
      description: "Maintain higher security standards and verify the ownership of bank credentials provided by your customers. An affordable solution to boost your revenue and strengthen your credibility.",
      image: "/bank-account-verification.png",
      features: ["Security Standards", "Ownership Verification", "Affordable Solution", "Revenue Boost"]
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Verify UPI Address",
      description: "Increase conversion with faster verification of UPI addresses. Scriza API assures a secure verification platform to authenticate the UPI ID and essential information of the account holder.",
      image: "/upi-verification.png",
      features: ["Faster Verification", "Secure Platform", "UPI ID Authentication", "Account Holder Info"]
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header currentPage="verification-api" />

      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div className="w-full">
          <img 
            src="/verification-api-hero.png" 
            alt="Verification API Solutions" 
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
                  Verification API
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Scriza brings forth multiple options for enterprises to assure digital success. Unlock the growth opportunities by accelerating the digital KYC process. Presenting powerful and adaptable digital solutions with a 99.99% of uptime. Our offered API solutions are second to none in terms of performance and reliability.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Get a free quote right now for hassle-free verifications with the best-in-class API solutions. Scriza provides a seamless onboarding experience with myriads of verification software like KYC verification, banking verification, and business verification.
                </p>

                <div className="grid md:grid-cols-4 gap-4 mb-8">
                  {verificationServices.map((service, index) => (
                    <div key={index} className="bg-gradient-to-r from-[#38857a]/10 to-[#FF914C]/10 rounded-lg p-3 text-center">
                      <span className="text-sm font-medium text-gray-800">{service}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-[#38857a]/10 to-[#FF914C]/10 rounded-xl p-6 mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Why Choose Scriza Verification APIs?</h4>
                  <div className="space-y-3">
                    {customerBenefits.map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-[#38857a]" />
                        <span className="text-gray-700 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* KYC Verification APIs */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  KYC Verification API
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  A strong and reliable solution to quickly onboard users
                </p>
                
                <div className="space-y-8">
                  {kycVerificationAPIs.map((api, index) => (
                    <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white flex-shrink-0">
                              {api.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900">{api.title}</h3>
                          </div>
                          <p className="text-gray-600 leading-relaxed">{api.description}</p>
                          <div className="grid grid-cols-2 gap-2">
                            {api.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center space-x-2">
                                <CheckCircle className="h-3 w-3 text-[#38857a]" />
                                <span className="text-xs text-gray-600">{feature}</span>
                              </div>
                            ))}
                          </div>
                          <Button className="bg-[#38857a] hover:bg-[#38857a]/90 text-white">
                            Read More
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                        <div className="flex items-center justify-center">
                          <img 
                            src={api.image} 
                            alt={api.title}
                            className="w-full max-w-sm h-auto rounded-lg shadow-sm"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Business Verification APIs */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Business Verification API
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  Verify and onboard customers using any device or platform
                </p>
                
                <div className="space-y-8">
                  {businessVerificationAPIs.map((api, index) => (
                    <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white flex-shrink-0">
                              {api.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900">{api.title}</h3>
                          </div>
                          <p className="text-gray-600 leading-relaxed">{api.description}</p>
                          <div className="grid grid-cols-2 gap-2">
                            {api.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center space-x-2">
                                <CheckCircle className="h-3 w-3 text-[#38857a]" />
                                <span className="text-xs text-gray-600">{feature}</span>
                              </div>
                            ))}
                          </div>
                          <Button className="bg-[#38857a] hover:bg-[#38857a]/90 text-white">
                            Read More
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                        <div className="flex items-center justify-center">
                          <img 
                            src={api.image} 
                            alt={api.title}
                            className="w-full max-w-sm h-auto rounded-lg shadow-sm"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Banking/Finance APIs */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Banking/Finance API
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  A strong and reliable solution to quickly onboard users
                </p>
                
                <div className="space-y-8">
                  {bankingAPIs.map((api, index) => (
                    <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white flex-shrink-0">
                              {api.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900">{api.title}</h3>
                          </div>
                          <p className="text-gray-600 leading-relaxed">{api.description}</p>
                          <div className="grid grid-cols-2 gap-2">
                            {api.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center space-x-2">
                                <CheckCircle className="h-3 w-3 text-[#38857a]" />
                                <span className="text-xs text-gray-600">{feature}</span>
                              </div>
                            ))}
                          </div>
                          <Button className="bg-[#38857a] hover:bg-[#38857a]/90 text-white">
                            Read More
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                        <div className="flex items-center justify-center">
                          <img 
                            src={api.image} 
                            alt={api.title}
                            className="w-full max-w-sm h-auto rounded-lg shadow-sm"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Scriza API */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Why Scriza API?
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  With more than two decades of business excellence, the seasoned professionals at Scriza can develop reliable and high performing API solutions. Attain the latest tech capabilities with us and stay ahead of the curve. Get in touch right now to inquire more about the robust verification API solutions that are available for all sizes of businesses.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Shield className="h-6 w-6 text-[#38857a]" />
                      <span className="text-lg font-semibold text-gray-900">99.99% Uptime Guarantee</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Zap className="h-6 w-6 text-[#38857a]" />
                      <span className="text-lg font-semibold text-gray-900">Lightning Fast Processing</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Lock className="h-6 w-6 text-[#38857a]" />
                      <span className="text-lg font-semibold text-gray-900">Secure & Reliable</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Headphones className="h-6 w-6 text-[#38857a]" />
                      <span className="text-lg font-semibold text-gray-900">24/7 Expert Support</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Code className="h-6 w-6 text-[#38857a]" />
                      <span className="text-lg font-semibold text-gray-900">Easy Integration</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <TrendingUp className="h-6 w-6 text-[#38857a]" />
                      <span className="text-lg font-semibold text-gray-900">Scalable Solutions</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Final CTA */}
              <div className="bg-gradient-to-r from-[#38857a] to-[#FF914C] rounded-2xl p-8 text-white">
                <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Verification Process?</h2>
                <p className="text-lg text-white/90 mb-6">
                  Join thousands of businesses who trust Scriza for their verification needs. Our comprehensive API solutions provide the reliability, security, and performance you need to accelerate your digital transformation.
                </p>
                <p className="text-white/90 mb-6">
                  Get started today with our robust verification APIs and experience the difference that two decades of excellence can make for your business.
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
                    Contact Now
                    <Phone className="ml-2 h-5 w-5" />
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