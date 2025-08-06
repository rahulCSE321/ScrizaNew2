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

export default function VoterIDVerificationAPIPage() {
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
          message: `Voter ID Verification API Demo Request - Selected Option: ${formData.option}`
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

  const apiFeatures = [
    "Anti-spoof technology",
    "99.99% uptime",
    "Instant and accurate results"
  ]

  const useCases = [
    {
      icon: <UserCheck className="h-6 w-6" />,
      title: "KYC completion",
      description: "The process of completing the KYC has been mandated by the Government. Hence, ensure compliance with our API technology that verifies the details given in the e-EPIC database."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Identity fraud detection",
      description: "ID fraud is on the rise, hence digital verifications are essential for SMBs and enterprises. Stay on top by preventing Id frauds with our robust and reliable API solutions."
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Compliance verification",
      description: "The rigorous onboarding processes can be made simple by completing multiple verifications in one step. Confirm the full name, age, address and essential details easily."
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header currentPage="voter-id-verification-api" />

      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div className="w-full">
          <img 
            src="/voter-id-verification-api-hero.png" 
            alt="Voter ID Verification API Solutions" 
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
                  Voter ID Verification API
                </h1>
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                  Voter ID Verification API
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Robust identity verification API technology by Scriza
                </p>

                <div className="bg-gradient-to-r from-[#38857a]/10 to-[#FF914C]/10 rounded-xl p-6 mb-8">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Conversion rates can be increased, user experience can be improved, frauds can be minimized and profits can be multiplied, with the simple plug and play verification solution by Scriza.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Automated the process of verifying the customer details and KYC completion with our instant and accurate Voter ID verification API. Scriza goes the extra mile to cater to the unique needs of SMBs and enterprises. Presenting cutting-edge verification technology to meet the highest compliance standards
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  {apiFeatures.map((feature, index) => (
                    <div key={index} className="bg-gradient-to-r from-[#38857a]/10 to-[#FF914C]/10 rounded-lg p-3 text-center">
                      <span className="text-sm font-medium text-gray-800">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Scriza */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Why Scriza voter id Verification API
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Complete the paramount process of voter id verification with the industry's #1 API solution provided by Scriza.
                </p>
              </div>

              {/* Use of Voter ID */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Use of Voter ID verification API
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Voter ID is the basic identity proof that is needed at every step by your compliance team. Eliminate the hassle of offline verification because Scriza brings forth advanced API technology. With more than 99% accuracy rate and less than 30 seconds, our offered API technology lets us complete the following tasks with ease:
                </p>
                
                <div className="space-y-6">
                  {useCases.map((useCase, index) => (
                    <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white flex-shrink-0">
                          {useCase.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-3">{useCase.title}</h3>
                          <p className="text-gray-600 leading-relaxed">{useCase.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* How does it work */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  How does Voter Id Verification API work?
                </h2>

                <div className="space-y-6">
                  <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white flex-shrink-0">
                        <span className="text-lg font-bold">1</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Real time API integration</h3>
                        <p className="text-gray-600 leading-relaxed">-Plug and play operation</p>
                      </div>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white flex-shrink-0">
                        <span className="text-lg font-bold">2</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Instant EPIC database check</h3>
                        <p className="text-gray-600 leading-relaxed">-Within 30 seconds</p>
                      </div>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white flex-shrink-0">
                        <span className="text-lg font-bold">3</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Verification done</h3>
                        <p className="text-gray-600 leading-relaxed">- With 99.99% uptime</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-[#38857a]/10 to-[#FF914C]/10 rounded-xl">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Reliable</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Mitigate the risk of onboarding fraud customers with the highly secure and accurate API solution.
                  </p>
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-[#38857a] to-[#FF914C] rounded-2xl p-8 text-white">
                <h2 className="text-3xl font-bold mb-4">Get Started with Voter ID Verification API</h2>
                <p className="text-lg text-white/90 mb-6">
                  Transform your verification process with our robust and reliable API solution. Book a demo today!
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
                    <Vote className="ml-2 h-5 w-5" />
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
