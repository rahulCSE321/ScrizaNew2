'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ChatWidget from '@/components/ChatWidget'
import DemoBookingForm from '@/components/DemoBookingForm'
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
  Wifi,
  BarChart3,
  Lock,
  RefreshCw,
  Settings,
  X,
  DollarSign,
  FileText,
  Headphones,
  Scale
} from 'lucide-react'

export default function MicroAtmMachineProvidersPage() {
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
          message: `Micro ATM Machine API Demo Request - Selected Option: ${formData.option}`
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

  const sayGoodbyeTo = [
    "Lengthy processes",
    "Limited functionality", 
    "Outdated technology"
  ]

  const sayHelloTo = [
    "Smooth transactions",
    "Enhanced security",
    "Hyper-connected world"
  ]

  const services = [
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "MoPos Software Provider",
      description: "It is a Mobile Point of Sale software that is developed for making payments through smartphones or tablets. The high-tech software eliminates the need for traditional POS hardware. You can now accept payments via your smartphone with our offered MoPos Software. To facilitate card based transactions, we offer the facility of integration of external card readers."
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "Swipe Machine Software Provider",
      description: "We are the industry leaders in electronic payment processing software development. Our offered software technology can be used for payments via credit cards, debit cards, and mobile wallets. We prioritize security measures and help protect sensitive payment data."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "AEPS Micro ATM Software",
      description: "We also specialize in developing Aadhar enabled mATM software. This software enables users to access all types of banking services in remote areas with the Aadhar enabled mATM handheld device. The user-friendly software can be used for secure cash withdrawals, balance inquiries, fund transfers, and more through biometric authentication."
    }
  ]

  const pricingFeatures = [
    "Flexible pricing options",
    "Transparent pricing structure",
    "Cost-effective solution", 
    "Scalability at a reasonable cost",
    "No hidden fees"
  ]

  const apiFeatures = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Quick and reliable transactions",
      description: "Our offered software enables a powerful transaction processing system and eliminates the hassles of lagging or delays."
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Seamless Integration",
      description: "Our API seamlessly integrates with your existing system for a smooth implementation. The operational efficiency can be enhanced with hassle-free API integration."
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Enhanced Security",
      description: "We prioritize security for all our offerings. Hence, we include strong encryption protocols and authentication measures that protect sensitive financial data."
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "Multiple Payment Options",
      description: "Our offered software supports a wide range of payment options, including card payments, UPI, Aadhaar-enabled transactions, and more."
    },
    {
      icon: <Wifi className="h-6 w-6" />,
      title: "Real-time Connectivity",
      description: "Enjoy real-time connectivity with our Micro ATM API. It can be used for instant transaction processing and no more delays or disruptions."
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Comprehensive Reporting",
      description: "The offering API can also be used to gain valuable insights. With its comprehensive reporting features, you can get better at decision-making and monitoring the performance of your business"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Scalability",
      description: "With the growing transaction volumes the offered API solution can easily evolve. Start with a little investment and seamlessly grow as your business needs."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "User-Friendly",
      description: "Our APIs are well-documented making it easy for you to integrate and customize the Micro ATM functionality as per the application."
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: "24/7 Support",
      description: "You can also count on our dedicated support team. We provide prompt assistance and guidance throughout the integration and post-deployment stage."
    },
    {
      icon: <Scale className="h-6 w-6" />,
      title: "Regulatory compliance",
      description: "We adhere to relevant regulatory standards and ensure compliance with financial regulations. Connect now if you like a reliable solution for maintaining data integrity and privacy."
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header currentPage="micro-atm" />

      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div className="w-full">
          <img 
            src="/Group 1000001995.png" 
            alt="Micro ATM Machine API Providers" 
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
                  Next-gen Payout Service Provider in India
                </h2>
                <p className="text-xl text-[#38857a] font-semibold mb-6">
                  With over 1000+ APIs deployed, Scriza becomes the trusted provider of API solutions for Micro ATM machines.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  We are 5-star rated problem solvers for the dynamic world of financial transactions. Get API keys right now and
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {/* Say Goodbye To */}
                  <div className="bg-red-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <X className="h-5 w-5 mr-2 text-red-500" />
                      Say goodbye to:
                    </h3>
                    <div className="space-y-3">
                      {sayGoodbyeTo.map((item, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <X className="h-4 w-4 text-red-500" />
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Say Hello To */}
                  <div className="bg-green-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                      And, say hello to:
                    </h3>
                    <div className="space-y-3">
                      {sayHelloTo.map((item, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  Offer a user-friendly banking experience to your clients! Embrace the power of our tailor-made APIs for the Micro ATM network.
                </p>
              </div>

              {/* What We Offer */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  What do we offer as a Micro ATM service provider?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-8">
                  With over a decade of industry expertise, we have successfully served a diverse clientele. We have successfully developed Micro ATM software solutions tailored to the unique needs of clients from retail, banking, hospitality and various other industries. To ensure reliable financial transactions for thousands of satisfied clients, we have gained specialization in the following fields:
                </p>
                
                <div className="space-y-8">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-start space-x-4 p-6 bg-gradient-to-r from-[#38857a]/5 to-[#FF914C]/5 rounded-lg">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white flex-shrink-0">
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{service.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed mt-8">
                  Make us your technology partner and get cutting-edge solutions for simplifying financial transactions. Drive your business forward with our offered software solutions that are available with plenty of customization features.
                </p>
              </div>

              {/* Pricing */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  What is the Micro ATM machine software price?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Our offered software solutions have gained popularity due to their ease of use, flexible functionality and affordable price range.
                </p>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Although the Aadhaar Micro ATM price may change depending on features like licensing options, and customization requirements. For up-to-date and accurate pricing information for Micro ATM machine software, you can consult our sales team right now.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-4">
                    {pricingFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-[#38857a]" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-gradient-to-r from-[#38857a]/10 to-[#FF914C]/10 rounded-xl p-6">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <DollarSign className="h-5 w-5 mr-2 text-[#38857a]" />
                      Value for Money
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      We offer a robust set of features with reliable support and regular updates. In simple words, our offered software solutions fulfil the assurance of value for money performance.
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  Connect now to enjoy the benefits of long-term cost-efficiency.
                </p>
              </div>

              {/* API Features */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Features offered by India's best Micro ATM API provider
                </h2>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Scriza has established itself as a trusted mATM software provider. Due to our commitment to quality, we boast positive ratings. We deliver reliable and high-performance solutions with a host of features and benefits.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {apiFeatures.map((feature, index) => (
                    <div key={index} className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white">
                          {feature.icon}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-[#38857a] to-[#FF914C] rounded-2xl p-8 text-white">
                <h2 className="text-3xl font-bold mb-4">Build your business easily: Contact Us</h2>
                <p className="text-lg text-white/90 mb-6">
                  Stay worry-free about compliance, data privacy or transaction processing. Scriza is your one-stop solution for payment acquiring, lending, withdrawal, deposit, remittance and more.
                </p>
                <p className="text-white/90 mb-6">
                  Get in touch to meet the needs of modern-age customers.
                </p>
                <Button 
                  size="lg" 
                  className="bg-white text-[#38857a] hover:bg-white/90"
                  onClick={() => document.getElementById('demo-section')?.scrollIntoView({behavior: 'smooth'})}
                >
                  Contact Us Today
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

      <Footer />
      <ChatWidget />
    </div>
  )
}
