
'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ChatWidget from '@/components/ChatWidget'
import DemoBookingForm from '@/components/DemoBookingForm'
import Certification from '@/components/Certification'
import { 
  Users, 
  Star,
  CheckCircle,
  Smartphone,
  Zap,
  CreditCard,
  BarChart3,
  Lock,
  Headphones,
  Palette,
  Send
} from 'lucide-react'

export default function RechargeSoftwarePage() {
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
          message: `Recharge Software Demo Request - Selected Option: ${formData.option}`
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
      icon: <Users className="h-6 w-6" />,
      title: "Supports various telecom operators",
      description: "Serve a wider customer base and offer recharge services for any service provider. Our software supports multiple service providers and major telecom operators in India."
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Secure Transactions",
      description: "Scriza has an unswerving dedication to robust security measures. Therefore, with each software solution, we deliver the promise of safety and confidentiality. Rest assured, all of the customer data and transaction details will remain secure."
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Comprehensive Reporting",
      description: "Want to stay ahead of the competition? Try our recharge software solution that also provides valuable insights into your recharge business. Features like comprehensive reporting and analytics are great for monitoring sales, tracking recharge trends, and making informed business decisions."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Easy API Integration",
      description: "No hassle for additional back-end developments. Simply integrate our recharge software with your existing systems, websites, or mobile applications and enhance the user experience. Our offered robust APIs are known for their ease of use."
    }
  ]

  const whyChooseFeatures = [
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "User-Friendly Interface",
      description: "Scriza's advantage lies in its user-friendly and intuitive interface. Our software is thoughtfully designed to deliver a smooth recharging platform for non-tech savvy personnel. No need to understand all the technical jargon, simply connect with us and make the recharging processes quick and effortless."
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "Payment gateway of your choice",
      description: "We are ranked as the top service provider for recharge software because we offer custom development solutions. We will include a payment gateway of your choice to ensure a seamless recharging experience."
    }
  ]

  const bestFeatures = [
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "Flexible Payment Options",
      description: "Our software development solutions can be integrated with your choice of payment gateways. This will be an added benefit because your customers get to choose from a wide range of payment options, including credit cards, debit cards, net banking, and mobile wallets."
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "White Label Solutions",
      description: "We offer customizable white label software development solutions for all sizes of organisations. We can brand the recharge software with your own logo, design, and branding elements. Connect with us to explore the options for giving your business a unique identity."
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: "24/7 Technical Support",
      description: "Recharge from anywhere and at any time with total confidence because our dedicated support team is always available to assist you. We are working round the clock to resolve your queries or technical issues."
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "White Label Solutions",
      description: "Get customized recharge software as per your specifications. Enjoy multiple API integrations, secure payment processing and a single recharge platform at Scriza. Connect with us to explore the features and benefits."
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header currentPage="recharge" />

      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
        <div className="absolute inset-0 bg-gradient-to-r from-[#38857a]/5 to-[#FF914C]/5"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-20 h-20 bg-[#38857a]/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-[#FF914C]/10 rounded-full blur-xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <a href="/" className="hover:text-[#38857a] transition-colors">Home</a>
                  <span>/</span>
                  <span className="text-[#38857a] font-semibold">Recharge Software</span>
                </div>
                
                <div className="space-y-4">
                  <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                    Recharge 
                    <span className="block" style={{color: '#38857a'}}>Software</span>
                  </h1>
                  
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                      Scriza simplifies recharging solutions with a robust and efficient platform. In this era of mobile connectivity, take your business to new heights with our hassle-free and seamless recharging solutions.
                    </p>
                    
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold" style={{color: '#38857a'}}>
                        India's best recharge software provider is empowering
                      </h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="flex items-center space-x-3 bg-gradient-to-r from-[#38857a]/10 to-[#38857a]/5 rounded-lg p-3">
                          <div className="w-8 h-8 rounded-full bg-[#38857a] flex items-center justify-center">
                            <Smartphone className="h-4 w-4 text-white" />
                          </div>
                          <span className="font-medium text-gray-800">Telecom Operators</span>
                        </div>
                        
                        <div className="flex items-center space-x-3 bg-gradient-to-r from-[#FF914C]/10 to-[#FF914C]/5 rounded-lg p-3">
                          <div className="w-8 h-8 rounded-full bg-[#FF914C] flex items-center justify-center">
                            <Users className="h-4 w-4 text-white" />
                          </div>
                          <span className="font-medium text-gray-800">Service Providers</span>
                        </div>
                        
                        <div className="flex items-center space-x-3 bg-gradient-to-r from-purple-500/10 to-purple-500/5 rounded-lg p-3">
                          <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center">
                            <Star className="h-4 w-4 text-white" />
                          </div>
                          <span className="font-medium text-gray-800">Entrepreneurs</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mt-4">
                      What are you waiting for? Deliver exceptional recharging experience to your customers by connecting with us. We offer top-notch recharging technology which works smoothly and efficiently. Connect with our team to discuss more about your business goals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Side Illustration */}
            <div className="lg:col-span-1">
              <div className="relative">
                <div className="bg-gradient-to-br from-[#38857a] to-[#FF914C] rounded-3xl p-8 text-white relative overflow-hidden">
                  <div className="absolute top-4 right-4 w-16 h-16 bg-white/20 rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-8 h-8 bg-white/20 rounded-full"></div>
                  
                  <div className="relative z-10 space-y-6">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <Smartphone className="h-10 w-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">Recharge Platform</h3>
                      <p className="text-white/90">Seamless & Efficient</p>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-white" />
                        <span>Mobile Recharge</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-white" />
                        <span>DTH Recharge</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-white" />
                        <span>Data Card Recharge</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-white" />
                        <span>Multi-Service Platform</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content with Demo Form */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Benefits Section */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Benefits of choosing the best Mobile Recharge Software Development Company
                </h2>
                <p className="text-lg text-[#38857a] font-semibold mb-6">
                  Grow your business with the best in the industry.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-[#38857a] flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-gray-700">Eliminate the recharge and payment complexities</span>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-[#38857a] flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-gray-700">Eliminate the hassles of traditional manual recharge methods</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-[#38857a] flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gray-700">Automate and streamline the mobile recharge process</span>
                  </div>
                </div>
                
                <p className="text-gray-700 leading-relaxed">
                  Being the most trusted recharge software provider in the industry, we are dedicated to delivering best-in-class products. Simplify the user experience by leveraging our wide range of recharge options, including prepaid mobile recharge, DTH recharge, data card recharge, and more, all from a single platform.
                </p>
              </div>

              {/* Features Section */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  What are the features provided by the best recharge software development company?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-8">
                  We provide B2B and B2C recharge solutions. Do recharges for any service providers from anywhere at any time. All you need is one account to manage the recharging requests. Below are the features that offer a competitive edge to your recharging business.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {features.map((feature, index) => (
                    <div key={index} className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white">
                          {feature.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Choose Section */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Why choose our recharge software development solutions?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Reduce the chance of fraud or manual errors during recharging. Connect with us and empower your business decisions.
                </p>
                
                <div className="space-y-8">
                  {whyChooseFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#FF914C] to-[#38857a] flex items-center justify-center text-white flex-shrink-0">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-6 bg-gradient-to-r from-[#38857a]/10 to-[#FF914C]/10 rounded-xl">
                  <p className="text-gray-700 leading-relaxed">
                    Scriza assures you of smooth operations and uninterrupted service delivery at the best price. What else do you need? Attain a competitive edge by making us your technology partners.
                  </p>
                </div>
              </div>

              {/* Best Features Section */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  What makes us India's best multi recharge software development company?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Quick, easy and reliable solution for all your mobile and DTH recharge applications. With our low development costs and custom solutions, we have become a preferred name for recharge software development in India.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {bestFeatures.map((feature, index) => (
                    <div key={index} className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white">
                          {feature.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-[#38857a] to-[#FF914C] rounded-2xl p-8 text-white">
                <h2 className="text-3xl font-bold mb-4">Contact Us - Transform your recharge business</h2>
                <p className="text-xl text-white/90 mb-6">
                  So don't waste time anymore, unlock new growth opportunities in the dynamic world of mobile recharge services.
                </p>
                <Button 
                  size="lg" 
                  className="bg-white text-[#38857a] hover:bg-white/90"
                  onClick={() => document.getElementById('demo-section').scrollIntoView({behavior: 'smooth'})}
                >
                  Book For Demo
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Demo Form Sidebar */}
            <DemoBookingForm onSubmit={handleDemoSubmit} />
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      {/* <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center space-x-12">
            <div className="text-center">
              <div className="bg-white p-6 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-12 w-12 text-[#38857a]" />
              </div>
              <div className="text-white">
                <div className="text-lg font-semibold mb-2">Certification Number</div>
                <div className="text-[#FF914C] font-bold text-xl">QMS220756</div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white p-6 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                <Award className="h-12 w-12 text-[#FF914C]" />
              </div>
              <div className="text-white">
                <div className="text-lg font-semibold mb-2">Certification Number</div>
                <div className="text-[#38857a] font-bold text-xl">ISMS220754</div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <Certification />
      <Footer />
      <ChatWidget />
    </div>
  )
}
