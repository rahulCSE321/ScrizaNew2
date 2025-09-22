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
  Send,
  Fingerprint,
  Wallet,
  BanknoteIcon,
  Search,
  ArrowRightLeft,
  FileText,
  Receipt,
  Phone,
  Car,
  ShoppingCart,
  Store,
  PiggyBank,
  Truck
} from 'lucide-react'



export default function AepsApiPage() {
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
          message: `AePS API Demo Request - Selected Option: ${formData.option}`
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

  const aepsServices = [
    {
      icon: <BanknoteIcon className="h-6 w-6" />,
      title: "Cash Deposits",
      description: "Use our API to deposit cash into the bank accounts through Aadhaar authentication."
    },
    {
      icon: <Wallet className="h-6 w-6" />,
      title: "Cash Withdrawals", 
      description: "Use our AePS to withdraw cash from their bank accounts through Aadhaar-based biometric authentication."
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: "Balance Inquiry",
      description: "Users can check their bank account balance using the AePS API. It provides real-time information about the available funds in the account."
    },
    {
      icon: <Fingerprint className="h-6 w-6" />,
      title: "Aadhaar linking",
      description: "The API can also be used for linking Aadhaar credentials with a bank account."
    },
    {
      icon: <ArrowRightLeft className="h-6 w-6" />,
      title: "Fund transfers",
      description: "The API can be used to easily transfer funds from one bank account to another bank account."
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Mini Statement",
      description: "With the mini statement feature users can also view recent transactions and account activity."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Aadhaar Authentication",
      description: "The API supports features to verify the Aadhaar credentials of users."
    },
    {
      icon: <Receipt className="h-6 w-6" />,
      title: "Bill Payments",
      description: "With our AePS API integrations users can pay utility bills, such as electricity, water, and gas bills directly from their bank accounts."
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Mobile recharge",
      description: "It is a convenient option to recharge their mobile phones with our AePS API."
    },
    {
      icon: <Car className="h-6 w-6" />,
      title: "Insurance Premium payments",
      description: "The AePS API implementation can also be used to pay insurance premiums directly from their bank accounts linked to Aadhaar."
    }
  ]

  const beneficiaries = [
    {
      icon: <PiggyBank className="h-6 w-6" />,
      title: "Microfinance Institutions",
      description: "Agencies that provide financial services can serve individuals in remote areas. They can offer services like loan disbursement, repayment collection, and other financial transactions using Aadhaar authentication"
    },
    {
      icon: <Store className="h-6 w-6" />,
      title: "Retail merchants",
      description: "Retailers and merchants can accept payments directly from customers' bank accounts using Aadhaar authentication."
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Digital wallets and payment service providers",
      description: "Users can link their Aadhaar information and perform transactions seamlessly from their choice of digital platforms."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Insurance and pension disbursement agencies",
      description: "Insurance companies and pension providers can work on claim settlements and pension amounts directly to beneficiaries' bank accounts."
    },
    {
      icon: <ShoppingCart className="h-6 w-6" />,
      title: "E-commerce and online marketplaces",
      description: "Payments for e-commerce entities can be done with Aadhaar credentials. The API is a secure payment option to expand the customer base in remote areas."
    }
  ]

  const requirements = [
    "Have a bank account with a bank participating in AEPS",
    "The Aadhaar of the user should be linked to their bank account", 
    "The transaction is completed through the user's biometric authentication only"
  ]

  const whyChooseUs = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure Transactions",
      description: "With the robust API solution, we provide an added layer of security for financial transactions."
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Convenience",
      description: "With the reliable API, users can perform transactions anytime, anywhere, using their Aadhaar information."
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "Cost-Effective",
      description: "We offer the most competitive price range and provide you with a scalable digital platform for financial transactions."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "API Integration",
      description: "The comprehensive documentation provided with the AEPS API allows easy integration into any existing applications or platforms. Hence you can enhance the overall user experience."
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Scalability",
      description: "We design a next-gen API that handles a large volume of transactions. It is suitable for all sizes of businesses, moreover, our clients get the option to start with a little investment and scale up as the business grows."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Round the clock support",
      description: "Our dedicated team leaves no stone unturned to meet and exceed your expectations. You can count on us for our fastest turnaround times and 24/7 after-sales support."
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header currentPage="aeps-api" />

      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div className="w-full">
          <img 
            src="/Group 1000001994.png" 
            alt="AePS API - Aadhaar Enabled Payment System" 
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
                  Best AePS API Service Provider
                </h1>
                <p className="text-xl text-[#38857a] font-semibold mb-6">
                  India's most trusted low investment Aadhar-enabled payment technology
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Are you struggling to thrive your business in rural areas where traditional banking services are limited?
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  What if we tell you that now quick, secure and hassle-free transactions are possible even in remote areas? Presenting the innovative AePS solution, which provides convenient deposits and withdrawals.
                </p>

                <div className="bg-gradient-to-r from-[#38857a]/10 to-[#FF914C]/10 rounded-xl p-6 mb-8">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    All you need is their Aadhaar credentials and our AePS API technology to transform the way you transfer money.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    With features like user-friendly platform and biometric authentication, Scriza becomes the most-trusted API service provider. Connect with us to learn more about the revolutionized way of transactions in remote areas.
                  </p>
                </div>
              </div>

              {/* What is AePS API */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  What is the AePS API?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  AePs stands for Aadhar Enabled Payment System. AePS API is a unique user-friendly system that allows merchants to offer Aadhaar card based payment services.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  You can integrate the API technology into your services or online platforms and complete secure transactions through the Aadhaar credentials of users.
                </p>
              </div>

              {/* Uses of AePS API */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  What is the use of the Aadhaar-enabled payment system API?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Businesses and individuals can enjoy greater convenience in fund transfers through AePS. Invest in our API to facilitate the following banking services in remote areas:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {aepsServices.map((service, index) => (
                    <div key={index} className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white">
                          {service.icon}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                    </div>
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed">
                  Our AePS API is a versatile solution that allows various banking and financial operations. So enjoy the benefits and connect with us today to get a quote.
                </p>
              </div>

              {/* Who can benefit */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Who can benefit from an AePS API provider company?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-8">
                  We contribute to the growth of various sectors. The following entities have shown faith in our API solutions for transactions.
                </p>
                
                <div className="space-y-6">
                  {beneficiaries.map((beneficiary, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-gradient-to-r from-[#38857a]/5 to-[#FF914C]/5 rounded-lg">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white flex-shrink-0">
                        {beneficiary.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{beneficiary.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{beneficiary.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Requirements */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  What are the requirements to become an AePS API service provider?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Whether you are a merchant, running a micro-finance institution or need Aadhar enabled payment system for insurance transactions, you can leverage the API technology. You can avail AePS in remote areas with the following mandatory requirements:
                </p>
                
                <div className="space-y-4">
                  {requirements.map((requirement, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-[#38857a] flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="h-4 w-4 text-white" />
                      </div>
                      <p className="text-gray-700">{requirement}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  What makes us the best AePS API provider?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-8">
                  We empower entities looking for secure and reliable transaction facilities in remote areas. Below are the reasons that Scriza became the top-rated API provider for AePS.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {whyChooseUs.map((feature, index) => (
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

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-[#38857a] to-[#FF914C] rounded-2xl p-8 text-white">
                <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
                <p className="text-xl text-white/90 mb-4">
                  Want to transform the financial landscape? Take action now and invest in AePS API.
                </p>
                <p className="text-lg text-white/80 mb-6">
                  Connect with us and get started today!
                </p>
                <Button 
                  size="lg" 
                  className="bg-white text-[#38857a] hover:bg-white/90"
                  onClick={() => document.getElementById('demo-section')?.scrollIntoView({behavior: 'smooth'})}
                >
                  Get Started Today
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
            question: "What is AePS API Service?",
            answer: "AePS (Aadhaar Enabled Payment System) API Service allows businesses, retailers, and fintech providers to offer Aadhaar-based banking services such as cash withdrawal, balance inquiry, mini statement, and fund transfer through biometric authentication."
          },
          {
            question: "What services can be provided through AePS API?",
            answer: "Using AePS API, you can provide: Cash Withdrawal Balance Inquiry Mini Statement Aadhaar-to-Aadhaar Fund Transfer Aadhaar Pay (merchant payments)"
          },
          { 
            question: "Who can use AePS API Service?",
            answer: "AePS API can be used by: Fintech companies Micro ATM & CSP operators Banking service providers Retailers & distributors Entrepreneurs running digital financial services"
          },
          {
            question: "How secure is AePS API Service?",
            answer: "AePS is highly secure as it uses Aadhaar number with biometric (fingerprint/iris) authentication, approved by NPCI (National Payments Corporation of India), ensuring safe and verified transactions."
          },
        ]}
      />
      <Certification />
      <Footer />
      <ChatWidget />
    </div>
  )
}
