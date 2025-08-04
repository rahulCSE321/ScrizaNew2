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

export default function VehicleRCVerificationAPIPage() {
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
          message: `Vehicle RC Verification API Demo Request - Selected Option: ${formData.option}`
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

  const apiTasks = [
    "Fetch vehicle details with an RC number",
    "Find details about the vehicle owner",
    "Verify the class of the vehicle",
    "Verify the vehicle registration details"
  ]

  const useCases = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Insurance companies",
      description: "Use the plug and play API solution before issuing an insurance policy and save yourself from fraudulent claims"
    },
    {
      icon: <UserCheck className="h-6 w-6" />,
      title: "Law enforcement agencies",
      description: "Validating vehicle ownership is equally essential for departments engaged in traffic stops and accident investigations."
    },
    {
      icon: <Car className="h-6 w-6" />,
      title: "Rental car services",
      description: "Rental agencies can also try our instant verification solution to validate the ownership of vehicles and minimize the risk of fraud."
    },
    {
      icon: <Building className="h-6 w-6" />,
      title: "vehicle dealers",
      description: "Agencies that deal in used cars can also leverage the API technology to validate the ownership and registration status of a vehicle before purchasing."
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Online merchants",
      description: "E-commerce platforms that engage in automotive services can also provide a layer of trust to their customers by using the powerful vehicle verification API"
    }
  ]

  const features = [
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Faster onboarding",
      description: "The offered API solution is optimized to fulfill the promise of hassle-free onboarding. Users can fetch information within seconds and complete the verification process instantly."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Fraud prevention",
      description: "Scriza API is a robust theft check solution. The system efficiently fetches information from the Vahan database. It provides the benefit of reliable verification of ownership and vehicle class"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Instant verification",
      description: "Verifying customer credibility need not be a time-consuming task. Simply share the vehicle number and our API initiates instant RC verification by retrieval from the reliable government database"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Real time processing",
      description: "Scriza API solutions are known for their 99.99% uptime. Our dedicated team members go the extra mile to ensure that the RC verification process can be completed safely in real time."
    },
    {
      icon: <UserCheck className="h-6 w-6" />,
      title: "User friendly",
      description: "Our offered API technology is not just a legit but an effortless medium to complete the onboarding process. Featuring a simple plug and play operation, it is simply the best."
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Affordable",
      description: "Vehicle RC verification API saves you time, effort as well as resources. Let your compliance team focus on other tasks, while our technology solutions perform cost-efficiently."
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header currentPage="vehicle-rc-verification-api" />

      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div className="w-full">
          <img 
            src="/vehicle-rc-verification-api-hero.png" 
            alt="Vehicle RC Verification API Solutions" 
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
                  Advanced API for Vehicle RC Verification
                </h1>
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                  Advanced API for Vehicle RC Verification
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  AI based technology to quickly fetch information from the Vahan database and complete vehicle RC verification
                </p>
              </div>

              {/* Reliable API */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Reliable API for vehicle information in India
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Enterprises can minimize fraud and onboard vehicles with total peace of mind. Scriza API presents the ultimate solution to make the onboarding process smooth and safe. With our AI based API users can perform multiple tasks:
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {apiTasks.map((task, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-[#38857a]" />
                      <span className="text-gray-700 font-medium">{task}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-blue-800 font-semibold">
                    Featuring the AI based advanced API documentation, our offered verification solution is rated as the best in the industry. Book a free demo right now to learn how the easy to use API can be a gamechanger for the onboarding process.
                  </p>
                </div>
              </div>

              {/* Uses of API */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  uses of API for vehicle RC verification
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  We bring forth an easy to use real time verification solution to identify the legitimacy of the proof of evidence. So far, we have helped over 2000 enterprises in their onboarding processes. With this real time KYC solution, the following entities can make a world of difference to their verification processes
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

                <div className="mt-8 p-6 bg-gradient-to-r from-[#38857a]/10 to-[#FF914C]/10 rounded-xl">
                  <p className="text-gray-700 leading-relaxed">
                    Applications of the RC verification API extend to diverse industrial sectors. Organizations, industries as well as individuals are attaining a competitive edge with our offered verification solution. What are you waiting for? Get API keys right now and authenticate vehicle ownership within seconds.
                  </p>
                </div>
              </div>

              {/* The Best API */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  The best Vehicle RC verification API from Scriza
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Scriza brings forth a range of features that results in a 5-star rating for our verification API. We go the extra mile to offer the assurance of comprehensive documentation. Not only this, round-the-clock integration support with 99.99% uptime made us the preferred choice for vehicle registration verification.
                </p>
                
                <div className="space-y-6">
                  {features.map((feature, index) => (
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

              {/* How to use */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  How to use API to get vehicle details in India?
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  The trouble-free integration can be used to verify details regarding vehicle insurance and vehicle identity. All you need is to input the vehicle number and you can prevent fraudulent activities with the following data points
                </p>

                <div className="space-y-6">
                  <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white flex-shrink-0">
                        <Settings className="h-8 w-8" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Integrate Scriza API:</h3>
                        <p className="text-gray-600 leading-relaxed">Get the API key and initiate the easy plug and play operation. Our robust API documentation ensures easy integration. The API technology can be used easily with your existing system or application.</p>
                      </div>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white flex-shrink-0">
                        <Key className="h-8 w-8" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Input vehicle number:</h3>
                        <p className="text-gray-600 leading-relaxed">The only input required for the API is the vehicle number. Simply enter the vehicle number and let our verification API do the rest.</p>
                      </div>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white flex-shrink-0">
                        <Database className="h-8 w-8" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Fetch details:</h3>
                        <p className="text-gray-600 leading-relaxed">Get the registration number, owner's name and address, & vehicle class details within seconds.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl">
                  <p className="text-blue-800 font-semibold">
                    We provide round-the-clock customer support and ensure endpoint availability 24/7. Don't waste your time on manual verifications anymore. Easily integrate our verification API into your application or existing system and fetch the vehicle registration records instantly.
                  </p>
                </div>
              </div>

              {/* Contact Us Section */}
              <div className="bg-gradient-to-r from-[#38857a] to-[#FF914C] rounded-2xl p-8 text-white">
                <h2 className="text-3xl font-bold mb-4">Contact us</h2>
                <p className="text-lg text-white/90 mb-6">
                  Increase your onboarding volume with the guaranteed accurate and reliable Vehicle RC verification API. Book a free demo to fetch useful details easily.
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

      <Footer />
      <ChatWidget />
    </div>
  )
}
