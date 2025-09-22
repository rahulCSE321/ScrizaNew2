'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ChatWidget from '@/components/ChatWidget'
import DemoBookingForm from '@/components/DemoBookingForm'
import Certification from '@/components/Certification'
import FAQ from '@/components/FAQ'
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
  Send
} from 'lucide-react'


export default function MoneyTransferSoftwarePage() {
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
          message: `Money Transfer Software Demo Request - Selected Option: ${formData.option}`
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

  const keyFeatures = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Faster",
      description: "No more delays, no more lagging. Robust software infrastructure to handle large transaction volumes quickly"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "More secure",
      description: "With proper encryption protocols and stronger authentication, attain total peace of mind on all transactions"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Future proof",
      description: "Blockchain technology, AI-powered risk management, multi-currency support and more future-ready features"
    }
  ]

  const softwareFeatures = [
    "Instant Transfers: Enables quick and real-time fund transfers across different locations.",
    "Multiple Currency Support: Complete transactions in various currencies including global transfers.",
    "Mobile Accessibility: Provisions of a mobile app or responsive web portal for convenient money transfers on the go.",
    "Multi-Language Support: Multiple language options suitable for various user preferences and needs.",
    "All bank money transfer: Integrate with leading banking networks for hassle-free money transfer"
  ]

  const industries = [
    "Banking And Financial Institutions",
    "E-Commerce",
    "Travel And Hospitality",
    "Travel And Hospitality",
    "Cryptocurrency Exchange And More"
  ]

  const expertiseAreas = [
    "Online money transfer platforms",
    "Remittance mobile apps",
    "Mobile wallets",
    "Peer-to-peer payment apps",
    "Money transfer APIs",
    "Cross-border payment gateways"
  ]

  const developmentFeatures = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "User-Friendly Interface",
      description: "Presenting an easy-to-navigate platform for hassle-free and quick money transfers."
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Transaction Tracking",
      description: "Users can also monitor the status of their transfers and receive real-time updates."
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "Cost-Effective",
      description: "Minimized transaction fees and competitive exchange rates for efficient transfers."
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Compliance with Regulatory Standards",
      description: "We ensure adherence to legal and regulatory requirements for secure and transparent transactions."
    }
  ]

  const customizationFeatures = [
    "Branding Customization: Personalize the money transfer portal with your choice of logo, color scheme, and branding elements.",
    "White Labelling: You can also remove the software provider's branding and replace it with your branding for white label software development.",
    "Custom Transaction Limits: Options to set custom transaction limits based on their specific needs and compliance requirements",
    "Currency preferences: You can set language and currency preferences to better serve your clientele from different regions or market",
    "Custom Notifications and Alerts: Features like confirmation emails, status updates, and security alerts can be customized to provide a personalized user experience."
  ]
  
  

  return (
    <div className="min-h-screen bg-background">
      <Header currentPage="money-transfer" />

      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div className="w-full">
          <img
            src="/moneyTransfer.png"
            alt="Money Transfer Software"
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
                <h1 className="text-3xl font-bold text-gray-900 mb-6">
                  Money Transfer Software
                </h1>
                <p className="text-xl text-[#38857a] font-semibold mb-6">
                  Transferring money just got easier with the all bank money transfer software
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Scriza brings forth effortless money transfers at your command. Manage all your transactions at your fingertips with the seamless money transfer technology.
                </p>

                {/* Key Features Grid */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {keyFeatures.map((feature, index) => (
                    <div key={index} className="text-center space-y-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center mx-auto text-white">
                        {feature.icon}
                      </div>
                      <div>
                        <h2 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h2>
                        <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Gone are the days of lengthy paperwork and complicated processes. Experience the simplicity of instant transfers with Scriza. Start enjoying hassle-free money transfers today.
                  </p>
                  <p>
                    We are the industry leading software developers of the future-proof technology. Connect with us and send and receive money quickly and securely.
                  </p>
                </div>
              </div>

              {/* Software Features */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  What are the features of online money transfer software?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-8">
                  We bring forth time-saving, accessible and convenient money transfer solutions. Forget longer processing times and higher fees, book a demo for our feature-rich remittance technology.
                </p>

                <div className="space-y-4">
                  {softwareFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-[#38857a] flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="h-4 w-4 text-white" />
                      </div>
                      <p className="text-gray-700">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Expertise Section */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Our expertise in money transfer business software
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  We have decades of expertise in understanding the needs of target users from various industries like
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {industries.map((industry, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-gradient-to-r from-[#38857a]/10 to-[#FF914C]/5 rounded-lg">
                      <Building className="h-5 w-5 text-[#38857a]" />
                      <span className="font-medium text-gray-800">{industry}</span>
                    </div>
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">
                  For thousands of clients from all these industries rely on us for tailored remittance solutions. We have become the top-rated developers for domestic money transfer technology. Following are the specialization of our team of experts:
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  {expertiseAreas.map((area, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-[#FF914C] flex items-center justify-center flex-shrink-0 mt-1">
                        <Star className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-gray-700">{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Development Features */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  India's best Money transfer software development
                </h2>
                <p className="text-xl text-[#38857a] font-semibold mb-8">
                  Unlock a world of seamless financial transactions
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {developmentFeatures.map((feature, index) => (
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

                <p className="text-gray-700 leading-relaxed">
                  Let your business grow in this digital age with secure and scalable technology. Contact us for customized software development that seamlessly integrates multiple payment gateways and unlocks new possibilities in digital finance.
                </p>
              </div>

              {/* Cost Section */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  How much is the cost of money transfer application software?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Why settle for expensive alternatives, when you can get top-quality money remittance technology at a fraction of the cost? The unbeatable value for your investment is only available at Scriza. Connect now to discuss more about our affordable and feature rich solution.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-900">Cost Benefits</h3>
                    <div className="space-y-3">
                      {["Flexible development packages", "Transparent pricing structure", "No hidden costs", "Value added services", "Start with a little investment"].map((benefit, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-[#38857a]" />
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-[#38857a]/10 to-[#FF914C]/10 rounded-xl p-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Scalable Investment</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Project needs may change over time. Therefore, we keep the pricing structure affordable, transparent and totally scalable. Start with a little investment and adjust the scope and scale of your project as needed.
                    </p>
                  </div>
                </div>
              </div>

              {/* Customization Section */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Customized money transfer portal development
                </h2>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Searching for a tailored solution that meets your specific business needs? Connect with us and enhance your user experience with efficient and seamlessly integrated software technology. Attain a competitive edge with our bespoke money transfer solutions.
                </p>

                <div className="space-y-4 mb-8">
                  {customizationFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-8 h-8 rounded-full bg-[#FF914C] flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white font-bold text-sm">{index + 1}</span>
                      </div>
                      <p className="text-gray-700">{feature}</p>
                    </div>
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed">
                  We have become the most-trusted software developers because we offer the flexibility to match the platform with preferences. Whether you need customization for branding or looking for white label requirements, Scriza software is your ultimate answer.
                </p>
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-[#38857a] to-[#FF914C] rounded-2xl p-8 text-white">
                <h2 className="text-3xl font-bold mb-4">Get the most affordable domestic money transfer software</h2>
                <p className="text-xl text-white/90 mb-2">Your hassle-free domestic transfers are just a click away!</p>
                <p className="text-lg text-white/80 mb-6">
                  Get the most affordable money transfer solution from Scriza and experience secure, efficient, and cost-effective transactions.
                </p>
                <p className="text-white/90 mb-6">
                  Don't miss out on the budget friendly opportunity, schedule a free demo right now.
                </p>
                <Button
                  size="lg"
                  className="bg-white text-[#38857a] hover:bg-white/90"
                  onClick={() => document.getElementById('demo-section')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Book For Demo
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

      <FAQ
        title="Frequently Asked Questions"
        faqs={[
          {
            question: "What is Money Transfer Software?",
            answer: "Money Transfer Software is a digital platform that enables individuals and businesses to send and receive funds electronically, often across different countries and currencies."
          },
          {
            question: "Why do businesses need remittance software?",
            answer: "Businesses use remittance software to streamline and automate the process of sending payments, reduce errors, ensure compliance with financial regulations, and improve overall efficiency in managing funds."
          },
          {
            question: "How do money and remittance transfers work?",
            answer: "These transfers involve sending funds from one party to another, either domestically or internationally, typically through secure financial networks that process and settle transactions quickly."
          },
          {
            question: "Which currencies and countries are supported?",
            answer: "Most money transfer software supports multiple currencies and allows transfers to a wide range of countries, enabling global money movement."
          },
          {
            question: "How long does it take for money to arrive?",
            answer: "Transfer times vary depending on the method used, destination country, and banking processes, but many services offer instant or same-day transfers, while others may take a few business days."
          }
        ]}
      />
      <Certification />
      <Footer />
      <ChatWidget />

    </div>
  )
}
