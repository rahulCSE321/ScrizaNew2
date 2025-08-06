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
  Database
} from 'lucide-react'

export default function RechargeAPIPage() {
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
          message: `Recharge API Demo Request - Selected Option: ${formData.option}`
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

  const rechargeServices = [
    "Mobile Recharge",
    "DTH Recharge", 
    "Data Card Recharge",
    "Utility Bills",
    "Airtel",
    "Jio",
    "BSNL",
    "Vodafone"
  ]

  const customerBenefits = [
    "Zero failure rates with highest endpoint availability",
    "Fastest response time for payments on the go", 
    "All-in-one recharge functionality for top-notch user experience"
  ]

  const apiFeatures = [
    {
      icon: <Layers className="h-6 w-6" />,
      title: "Multi-recharge system",
      description: "No need to integrate separate APIs, try our all-in-one system to make things manageable. Single integration for mobile, DTH, data card and utility bill payments."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Highly secured",
      description: "Our comprehensive API documentation is built on an audited infrastructure which ensures all transactions are secure transactions every time with encrypted communications."
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Supports all carriers",
      description: "Whether you want to recharge for Airtel, Jio, BSNL, MTNL, Vodafone or any other network, our API software is compatible with all major service providers."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "User-friendly operation",
      description: "We have designed an easy plug and play operation that is the best to offer a top-notch user experience with simple integration process."
    }
  ]

  const providerFeatures = [
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Cheapest price",
      description: "Our ultimate goal is to serve all sizes of businesses. Therefore, we keep the price range competitive and affordable for startups to enterprises."
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: "Round the clock customer support",
      description: "With the highest uptime and endpoint availability we assure hassle-free operations. Our tech experts are available 24/7 for any assistance you need."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Faster integration",
      description: "We bring forth high-performing and robust APIs that can be integrated into an existing system quickly and easily with comprehensive documentation."
    }
  ]

  const additionalFeatures = [
    "Zero failure rates with highest endpoint availability",
    "Fund management and balance checking capabilities", 
    "User friendly plug and play operation",
    "Encrypted communications and validated inputs"
  ]

  const useCases = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Mobile network operators",
      description: "Enable comprehensive recharge services for your mobile network with our robust API integration."
    },
    {
      icon: <Wifi className="h-6 w-6" />,
      title: "Virtual network operators", 
      description: "Provide seamless recharge functionality to your customers with our multi-carrier support system."
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "Payment service providers",
      description: "Enhance your payment gateway with comprehensive recharge and bill payment capabilities."
    },
    {
      icon: <Store className="h-6 w-6" />,
      title: "E-commerce platforms",
      description: "Add recharge services to your e-commerce platform and increase customer engagement and revenue."
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile app developers",
      description: "Integrate recharge functionality directly into your mobile applications with our easy-to-use API."
    },
    {
      icon: <Plane className="h-6 w-6" />,
      title: "Travel booking websites",
      description: "Offer additional services like mobile recharge to enhance your travel booking platform."
    }
  ]

  const integrationSteps = [
    {
      step: "1",
      title: "Enter the basic details",
      description: "Enter the basic details like mobile number, network operator and recharge amount through our simple API interface."
    },
    {
      step: "2", 
      title: "Confirm the details and submit",
      description: "Confirm the details and submit the form to proceed with the recharge transaction through our secure payment gateway."
    },
    {
      step: "3",
      title: "Get confirmation alert",
      description: "Get an SMS or email alert for confirmation of the recharge with real-time transaction status updates."
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header currentPage="recharge-api" />

      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div className="w-full">
          <img 
            src="/recharge.png" 
            alt="Recharge And Bill Payment API" 
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
                  Most affordable API services and solutions for mobile recharge, DTH recharge and utility bills
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Scriza API solutions are rated as the best technology platforms for multi-recharge functionality. Featuring the fastest response time, our offered API technology is the ultimate choice to make payments on the go.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  The very easy to integrate mobile recharge API covers all major service providers. Deliver promising results with our game-changing API technology that is available for:
                </p>

                <div className="grid md:grid-cols-4 gap-4 mb-8">
                  {rechargeServices.map((service, index) => (
                    <div key={index} className="bg-gradient-to-r from-[#38857a]/10 to-[#FF914C]/10 rounded-lg p-3 text-center">
                      <span className="text-sm font-medium text-gray-800">{service}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-[#38857a]/10 to-[#FF914C]/10 rounded-xl p-6 mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">India's best recharge API provider</h4>
                  <div className="space-y-3">
                    {customerBenefits.map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-[#38857a]" />
                        <span className="text-gray-700 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Retailers can leverage our easy and quick multi-recharge API platform to stay ahead of the competition. The enterprise solutions feature all-in-one recharge functionality for top-notch user experience and highly secured transactions.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Our offered API technology is secure, fast and easy to use. We assure the fastest up-time and improved user experience. The communications are encrypted, the inputs are strictly validated and we assure zero failure rates.
                </p>
              </div>

              {/* API Features */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Features of our mobile and DTH recharge API
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  Load cash from anywhere and place recharge orders on the go! Our offered API platform is convenient and comes with strong backend support.
                </p>
                
                <div className="space-y-8 mb-8">
                  {apiFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white flex-shrink-0">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed">
                  Attain a competitive edge and get a quote right now for the best recharge API with comprehensive functionality and reliable performance.
                </p>
              </div>

              {/* Integration Process */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  How to use mobile recharge API for Android?
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Our recharge API can be integrated easily and it is very convenient to use. The secure and highly authorized API can be used for recharging a mobile, DTH, Data card or utility bills. Follow the three step process to use the recharge API:
                </p>
                
                <div className="space-y-8 mb-8">
                  {integrationSteps.map((step, index) => (
                    <div key={index} className="space-y-4">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white font-bold text-lg">
                          {step.step}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                          <p className="text-gray-600 leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed">
                  Get keys to the best multi recharge API and make us your technology partner for enhanced recharge services.
                </p>
              </div>

              {/* Provider Features */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  What makes us the top recharge API provider in India?
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  The multi-recharge functionality of our API technology is recommended widely because of the following reasons:
                </p>
                
                <div className="space-y-8 mb-8">
                  {providerFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white flex-shrink-0">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-[#38857a]/10 to-[#FF914C]/10 rounded-xl p-6 mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Additional Features</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {additionalFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <ShieldCheck className="h-4 w-4 text-[#38857a]" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  Scriza brings forth the best-in-class API technology for a multi-recharge platform. Make us your API partner and attain a competitive edge in this competitive marketplace.
                </p>
              </div>

              {/* Use Cases */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Best Online Mobile Recharge API Provider in India
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Attain a competitive edge by making Scriza your technology partner. We have a robust development infrastructure, moreover, our team is skilled in providing comprehensive API documents. A large number of entities have shown faith in our industry expertise:
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {useCases.map((useCase, index) => (
                    <div key={index} className="space-y-4">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white flex-shrink-0">
                          {useCase.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">{useCase.title}</h3>
                          <p className="text-gray-600 text-sm leading-relaxed">{useCase.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed">
                  Enable the mobile recharge functionality, with our easy to use API solution. Get in touch with our team right now and book a free demo.
                </p>
              </div>

              {/* Final CTA */}
              <div className="bg-gradient-to-r from-[#38857a] to-[#FF914C] rounded-2xl p-8 text-white">
                <h2 className="text-3xl font-bold mb-4">Get mobile recharge API software at the best price</h2>
                <p className="text-lg text-white/90 mb-6">
                  The mobile ecosystem has become intensely competitive. To survive in this dynamic marketplace, you need to make informed decisions. Get in touch with us and learn more about the affordable price range of our API solutions.
                </p>
                <p className="text-white/90 mb-6">
                  With our robust and secure payment technology, you can make a world of difference to your recharge business. Enable comprehensive recharge services and stay ahead of the competition.
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