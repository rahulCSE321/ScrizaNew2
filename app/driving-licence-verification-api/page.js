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
  TrendingDown,
  Upload
} from 'lucide-react'

export default function DrivingLicenceVerificationAPIPage() {
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
          message: `Driving Licence Verification API Demo Request - Selected Option: ${formData.option}`
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

  const verificationBenefits = [
    "Verify the driving license data",
    "Accurately confirm the DL status",
    "Meet the compliance requirements",
    "Reduce the risk of fraud"
  ]

  const usefulFor = [
    "Transportation services",
    "Car rental services",
    "Employment screening",
    "Insurance processing",
    "Age verification",
    "Regulatory compliance"
  ]

  const apiFeatures = [
    {
      icon: <UserCheck className="h-6 w-6" />,
      title: "User-friendly driving license verification API",
      description: "Get the API link from our representatives for real time API integration. No hassle of software, OS or cloud management. Try the easy plug and play operation and do verifications instantly"
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: "99.99% uptime",
      description: "Scriza goes the extra mile to always monitor and spot issues. Our development team ensures the continuous availability of a single API endpoint for a smooth verification process."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Instant verification",
      description: "Offline verification of official documents takes forever and can cost a lot. Improve customer experience with our fast and reliable API technology. We confirm faster access to reliable values fetched from the government database"
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Assured accuracy",
      description: "Real time API integration is great for enterprises that need crucial user details for onboarding. Maintain the audit trail and verify legitimate users with zero risk of manual errors."
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: "Easy validation",
      description: "Your compliance team can access the full name, image, address and other details of a user with an OTP. Hence, the verification process makes the way easier for validation as well."
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Affordable",
      description: "Automated technology dramatically reduces our development cost, therefore Scriza becomes the #1 API technology provider with a competitive pricing structure."
    }
  ]

  const onlineBenefits = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Prevent Fraud",
      description: "Scriza API enables enterprises to flag fraudulent activities. Quickly deploy the Driving Licence verification technology and reduce the risk of fraud"
    },
    {
      icon: <UserCheck className="h-6 w-6" />,
      title: "Complete KYC",
      description: "Streamline the KYC process with our fast, reliable and affordable API. We offer a real-time data retrieval facility with assured 99.99% uptime."
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Competitive edge",
      description: "Lower the operating cost of your compliance team. Automate the verification process and improve user experience."
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header currentPage="driving-licence-verification-api" />

      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div className="w-full">
          <img 
            src="/driving-licence-verification-api-hero.png" 
            alt="Driving Licence Verification API Solutions" 
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
                  Driving Licence Verification API
                </h1>
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                  Driving Licence Verification API
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Cutting edge API offers accurate and instant verification of your customers'legitimate identity evidence A Driving Licence not only proves a person's driving skills but according to Indian compliance standards, it also serves as a legal identity. Therefore, verification of the Driving Licence becomes crucial for various applications.
                </p>

                <div className="bg-gradient-to-r from-[#38857a]/10 to-[#FF914C]/10 rounded-xl p-6 mb-8">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Get API keys to verify a driving license and complete the KYC within seconds. We have designed a convenient and automated system to verify and validate a driving license. Organizations, service providers or third-party applications can integrate the DL verification technology into their existing system.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {verificationBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-[#38857a]" />
                      <span className="text-gray-700 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* India's #1 Provider */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  India's #1 Driving License Verification API Provider
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Scriza, recognized as the best Driving License Verification API Provider presents a robust solution to verify the legal identity of a customer. Here comes with a reliable API technology to help you determine the legitimacy of a customer with ease.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Verify the authenticity of a driving license with our high-speed API technology. Featuring a plug and play operation, the competitively priced verification solution has become extremely popular among entities from different sectors. Our user-friendly API solutions are immensely helpful for the following:
                </p>

                <div className="grid md:grid-cols-2 gap-3 mb-8">
                  {usefulFor.map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-[#38857a]" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-4 mb-6">
                  <p className="text-blue-800 font-semibold">
                    Whether you want to confirm the age of an individual or determine the eligibility of an individual to get insurance claims, we can help you with the verification process.
                  </p>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  Talk to our representatives to learn more about the fast, reliable and accurate Driving License verification API.
                </p>
              </div>

              {/* The Best API */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  The Best Driving Licence Verification API in India
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Check the authenticity of a driving license with useful validation outputs. The reliable API can be deployed with stringent encryption protocol so the integrity of data retrieved from government databases can be secured
                </p>
                
                <div className="space-y-6">
                  {apiFeatures.map((feature, index) => (
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

              {/* Benefits of Online */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Benefits of Online Driving Licence Verification
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  A driving license is one of the widely used documents for identity proof. Save yourself from being a victim of fraudulent activities. With our online verification solutions, you can easily detect fraud and save costs on the onboarding process
                </p>
                
                <div className="space-y-6">
                  {onlineBenefits.map((benefit, index) => (
                    <div key={index} className="border border-gray-200 rounded-xl p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white flex-shrink-0">
                          {benefit.icon}
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                          <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* How does it work */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  How does Scriza DL Verification API Work?
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Automate the process of identity verification and let the compliance team focus on other important tasks. It takes less than 30 seconds to verify the Driving License with Scriza API.
                </p>

                <div className="space-y-6">
                  <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white flex-shrink-0">
                        <Upload className="h-8 w-8" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Upload the Driving License</h3>
                        <p className="text-gray-600 leading-relaxed">Get the API Key, begin real time API integration, and upload the photo of the driving license to initiate the verification process.</p>
                      </div>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white flex-shrink-0">
                        <UserCheck className="h-8 w-8" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Verify without OTP</h3>
                        <p className="text-gray-600 leading-relaxed">No OTP is required to check the legitimacy of a user by verifying the basic information given on the Driving Licence.</p>
                      </div>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white flex-shrink-0">
                        <Shield className="h-8 w-8" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Verify with OTP</h3>
                        <p className="text-gray-600 leading-relaxed">OTP verification can be done to access the signature, image and other essential details of your potential customers.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Section */}
              <div className="bg-gradient-to-r from-[#38857a] to-[#FF914C] rounded-2xl p-8 text-white">
                <h2 className="text-3xl font-bold mb-4">Contact the Best DL Verification API Provider</h2>
                <p className="text-lg text-white/90 mb-4">
                  We are rated as the best API providers because of the secure communication protocols and encryption measures we implement. Look nowhere else and choose us to attain total peace of mind. Complete the KYC with our user-friendly and high-speed API technology for Driving License verification.
                </p>
                <p className="text-white/90 mb-6">
                  Our representatives are available 24/7. So, request an API key or book a demo right now
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
                    Get API Key
                    <Car className="ml-2 h-5 w-5" />
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
