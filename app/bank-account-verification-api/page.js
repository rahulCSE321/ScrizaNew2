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

export default function BankAccountVerificationAPIPage() {
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
          message: `Bank Account Verification API Demo Request - Selected Option: ${formData.option}`
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

  return (
    <div className="min-h-screen bg-background">
      <Header currentPage="bank-verification-api" />

      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div className="w-full">
          <img 
            src="/bank-verification-api-hero.png" 
            alt="Bank Account Verification API Solutions" 
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
                  Bank Account Verification API
                </h1>
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                  Verify bank account ownership and status in real time with easy to use bank verification API
                </h2>

                <div className="bg-gradient-to-r from-[#38857a]/10 to-[#FF914C]/10 rounded-xl p-6 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Easy API solution to prevent financial crimes</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Verify the bank accounts of your customers with real-time access and simplify your compliance efforts for secure business transactions. The Bank Verification API is built using an advanced encryption algorithm. It is an easy to use and reliable system to confirm the credibility of your customers
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Scriza adheres to the top security protocols to bring forth the high performing API technology. Rest assured the information is safe, while you reduce the risk of fraudulent or failed transactions
                  </p>
                </div>
              </div>

              {/* Who can use */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Who can use verification API for bank accounts?
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Integrating the API technology for the verification of bank accounts is highly beneficial to onboard legitimate customers. The easy to use verification tool has plenty of applications and can be of great use for the following entities:
                </p>

                <div className="grid md:grid-cols-1 gap-3 mb-8">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-[#38857a]" />
                    <span className="text-gray-700">Financial institutions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-[#38857a]" />
                    <span className="text-gray-700">Banking institutions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-[#38857a]" />
                    <span className="text-gray-700">Insurance companies</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-[#38857a]" />
                    <span className="text-gray-700">Businesses under SEBI regulation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-[#38857a]" />
                    <span className="text-gray-700">Individual money lenders</span>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-4">
                  Are you struggling with a poorly managed database? Want to know whether the account number given is genuine? Verify the account's validity in seconds with our verification service. The verification solution is used for business transactions and can also be used for insurance claims or transactions that involve mutual funds, securities and broking.
                </p>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-blue-800 font-semibold">
                    The faster and more reliable API technology has become a game-changer for BFSI (Banking, Finance & Insurance) companies. Get in touch to book a free demo to verify customer accounts with this powerful API.
                  </p>
                </div>
              </div>

              {/* Easy Solution Section */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Easy solution for Bank Account Number Verification API
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Presenting the cutting-edge compliance technology that features AI powered authentication to efficiently complete the verification process. Get going with a next-gen API that makes customer onboarding easier. With this easy to use solution, you can not only streamline the compliance documentation but also attain the following benefits.
                </p>

                <div className="space-y-6">
                  <div className="border border-gray-200 rounded-xl p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white flex-shrink-0">
                        <TrendingUp className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">Faster onboarding</h4>
                        <p className="text-gray-700 leading-relaxed">A high-end API solution to enable real time data access and instant verifications</p>
                      </div>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-xl p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white flex-shrink-0">
                        <UserCheck className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">Reduce KYC drop-offs</h4>
                        <p className="text-gray-700 leading-relaxed">Reliable and highly accurate system to track fraud bank account status and ownerships.</p>
                      </div>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-xl p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white flex-shrink-0">
                        <Settings className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">Automated API for bank accounts</h4>
                        <p className="text-gray-700 leading-relaxed">Automate the verification process and improve the productivity of the compliance team</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Scriza Section */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Why Scriza Bank Account Verification API
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Complete the paramount process of bank account verification with the industry's #1 API solution provided by Scriza.
                </p>
                
                <div className="space-y-6">
                  <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white flex-shrink-0">
                        <Shield className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">No third-party assistance</h3>
                        <p className="text-gray-600 leading-relaxed">The best part about Scriza powered verification API technology is that you don't need third-party assistance for risk management. Use this trustworthy technique and attain a competitive edge.</p>
                      </div>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white flex-shrink-0">
                        <Zap className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Faster integration</h3>
                        <p className="text-gray-600 leading-relaxed">Easy plug and play operation that works with top-notch precision. The best part is, our API technology is compatible and can be integrated with your existing system.</p>
                      </div>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white flex-shrink-0">
                        <Eye className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Instant validation</h3>
                        <p className="text-gray-600 leading-relaxed">Detects fraudsters in seconds with our high performing API technology which has the fastest turnaround time.</p>
                      </div>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white flex-shrink-0">
                        <Clock className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Real time verification</h3>
                        <p className="text-gray-600 leading-relaxed">Reduce the risk of manual errors by your compliance team. Save their time and effort by getting real time access with this highly optimized verification API.</p>
                      </div>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white flex-shrink-0">
                        <Database className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Multiple outputs</h3>
                        <p className="text-gray-600 leading-relaxed">No need for penny-drop service providers, simply use our smooth and scalable verification solution. You only need a few inputs (account number and IFSC code) to verify the status of ownership</p>
                      </div>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white flex-shrink-0">
                        <UserCheck className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Easy to use bank account API</h3>
                        <p className="text-gray-600 leading-relaxed">Our offered API technology is rated as the best verification API for bank accounts. We pursue nothing but excellence to assure you of top-notch user experience, which makes us the preferred choice.</p>
                      </div>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white flex-shrink-0">
                        <ShieldCheck className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Reliable risk management</h3>
                        <p className="text-gray-600 leading-relaxed">Why hurt your business with the risk of onboarding fraud customers? Use our offered highly secure and accurate API solution to mitigate the risk and streamline the verification process.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-[#38857a]/10 to-[#FF914C]/10 rounded-xl">
                  <p className="text-gray-700 leading-relaxed">
                    Scriza empowers your business; we help you fight fraud; we save your time and efforts. Simply incorporate the verification API technology and reduce the risk of data leakage. We assure you of better risk management at a competitive price. So, book a free demo right now to attain the Scriza advantage.
                  </p>
                </div>
              </div>

              {/* How to Use */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  How to use the bank account validation API?
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  The robust API solution is the best for the verification of the individuals claiming ownership of a bank account. The offered technology also works efficiently to verify insurance claims.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  The process to verify a bank account is even simpler than KYC. Involve the usage of API and the account verification can be done within a few steps:
                </p>
                
                <div className="space-y-6">
                  <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white flex-shrink-0">
                        <Settings className="h-8 w-8" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Integrate the Bank Account Verification API</h3>
                      </div>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white flex-shrink-0">
                        <Key className="h-8 w-8" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Enter the bank account number or IFSC code</h3>
                      </div>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white flex-shrink-0">
                        <Database className="h-8 w-8" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">The API fetches ownership and status data</h3>
                      </div>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white flex-shrink-0">
                        <Lock className="h-8 w-8" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">The data gets deleted once verification is done</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Talk to Team Section */}
              <div className="bg-gradient-to-r from-[#38857a] to-[#FF914C] rounded-2xl p-8 text-white">
                <h2 className="text-3xl font-bold mb-4">Talk to our team</h2>
                <p className="text-lg text-white/90 mb-6">
                  Onboard customers with confidence! Get in touch to learn more about seamless and instant verification with our virtual bank account API.
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
