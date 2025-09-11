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
  FileText,
  UserCheck,
  Database,
  Key,
  Settings,
  Eye,
  DollarSign,
  Gauge,
  Lock,
  Target,
  Briefcase,
  Landmark,
  Building2,
  RefreshCcw,
  Wallet,
  ShoppingCart,
  Factory,
  UserPlus,
  Gift,
  RotateCcw,
  Link,
  Layers,
  MessageSquare,
  Users2,
  Banknote,
  PiggyBank,
  ReceiptText,
  Download,
  Upload
} from 'lucide-react'

export default function PayoutApiServicePage() {
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
          message: `Payout API Service Demo Request - Selected Option: ${formData.option}`
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

  const keyPromises = [
    "Secure transactions",
    "Speedy transactions", 
    "Scheduling of transactions"
  ]

  const industries = [
    {
      icon: <ShoppingCart className="h-6 w-6" />,
      title: "FMCG industry",
      description: "The robust and highly secure payout API is a great tool to enable retailer incentives in the FMCG sector."
    },
    {
      icon: <Landmark className="h-6 w-6" />,
      title: "BFSI companies",
      description: "Banking and finance sector entities can leverage advanced payment technology for account validation and bill payments."
    },
    {
      icon: <Building2 className="h-6 w-6" />,
      title: "E-commerce entities",
      description: "In this era of online shopping, payments to delivery partners and COD facilities can be integrated easily. Try the fast and secure payout API solution."
    },
    {
      icon: <Factory className="h-6 w-6" />,
      title: "Manufacturers",
      description: "Manage supply chain efficiency requirements by using a secure and instant payment solution. A large number of manufacturing entities rely on our technology for payment of labour charges and other supply chain costs."
    },
    {
      icon: <Gift className="h-6 w-6" />,
      title: "Referral payouts",
      description: "In this era of digital marketing, where brands are collaborating with influencers, referral payouts can be made easy with our integrated API technology."
    }
  ]

  const features = [
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "Multiple payment modes",
      description: "Payment processing has become seamless with our one-in-all payout API that has multiple payment modes. Choose a single payment gateway to process payments through cash, debit card, credit card, digital wallets, UPI, RTGS, IMPS or NEFT."
    },
    {
      icon: <Landmark className="h-6 w-6" />,
      title: "Connectivity with leading banks",
      description: "The payout aggregator is a game-changer for various merchants and vendors. Use a reliable payment solution that offers seamless connectivity with multiple banks. Process payments in a second through leading banks of India."
    },
    {
      icon: <RotateCcw className="h-6 w-6" />,
      title: "Auto retry",
      description: "Robust API documents include features like smart routing which offers the highest success rates. We have optimized the user experience with the auto-retry coding that allows the payout solution to efficiently retry and succeed in previously failed transactions."
    },
    {
      icon: <Link className="h-6 w-6" />,
      title: "Easy API Integration",
      description: "No hassle for additional back-end developments. Simply integrate our recharge software with your existing systems, websites, or mobile applications and enhance the user experience. Our offered robust APIs are known for their ease of use."
    },
    {
      icon: <Layers className="h-6 w-6" />,
      title: "Inclusive APIs",
      description: "Apart from quick payment processing, Scriza focuses on delivering the highest user experience. We have provided easy to integrate APIs to add beneficiaries, process payments and deliver transaction status."
    }
  ]

  const fintechBenefits = [
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Easy to integrate",
      description: "Integration becomes faster and easier for Scriza API because we present a comprehensive integration kit. Further, we provide round the clock integration support for improved user experience."
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Real time updates",
      description: "Be it the transaction status or updates about the account settlements, use our API to stay informed. The API fetches details from the master database in real time."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Encrypted payout solution",
      description: "We have implemented a robust development infrastructure to secure transactions. Further, we have incorporated a token-based API access system to fulfil the demands for secure and reliable payout API."
    }
  ]

  const applications = [
    "Seamless and automated payouts",
    "Distribute winnings or incentives",
    "Send refunds to customers", 
    "Peer to peer payments",
    "Payroll distribution",
    "Employee reimbursements"
  ]

  const steps = [
    {
      title: "Integration",
      description: "Login into your account, get API keys and begin real-time integration. You can easily integrate the payout API into your existing system or application.",
      icon: <Key className="h-6 w-6" />
    },
    {
      title: "Add beneficiary",
      description: "Enter basic details like the name of the beneficiary and bank account number along with the IFSC code.",
      icon: <UserPlus className="h-6 w-6" />
    },
    {
      title: "Enter payment details",
      description: "Enter the amount you want to process and submit for secure and faster transactions.",
      icon: <DollarSign className="h-6 w-6" />
    },
    {
      title: "Payout initiated",
      description: "When you submit the form, the payout gets initiated for a secure and seamless transaction across multiple payment modes or various banks.",
      icon: <Send className="h-6 w-6" />
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header currentPage="payout-api" />

      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div className="w-full">
          <img 
            src="/Group 1000001997.png" 
            alt="Payout API Service" 
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
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Scriza presents an effortless solution to make payments simple. Discover the perfect payout API technology and add a competitive edge to your business.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  We bring forth a trusted payment solution that fulfils the promises of
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {keyPromises.map((promise, index) => (
                    <div key={index} className="flex items-center space-x-3 bg-gradient-to-r from-[#38857a]/10 to-[#FF914C]/10 rounded-lg p-4">
                      <CheckCircle className="h-5 w-5 text-[#38857a]" />
                      <span className="text-gray-700 font-medium">{promise}</span>
                    </div>
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">
                  The easy payment solutions are great for all sizes of businesses and organisations. If you want a reliable channel for retailer incentives, look no further and order the holistic payment solution by Scriza
                </p>
                <p className="text-gray-700 leading-relaxed">
                  A reliable and easy to use payment solution is just a click away. Don't waste time anymore and connect with our sales team to learn more about the robust Payout API.
                </p>
              </div>

              {/* Best Payout API Provider */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Scriza- The Best Payout API Provider Company in India
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  A scalable payment solution that is designed to meet your unique business needs. Featuring robust API documentation and audited development infrastructure, Scriza becomes the most trusted provider of payment technology. Our offered payout API solutions are highly recognized by the following entities:
                </p>
                
                <div className="space-y-6 mb-8">
                  {industries.map((industry, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-gradient-to-r from-[#38857a]/5 to-[#FF914C]/5 rounded-lg">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white flex-shrink-0">
                        {industry.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{industry.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{industry.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed">
                  All sizes of businesses are leveraging the benefits of our offered payment API solutions. Scriza is known for developing scalable solutions; begin with a little investment and grow as your business thrives. Get in touch with the sales team right now.
                </p>
              </div>

              {/* Features */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Features of the Best Payout Settlement API Solution In India
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Payments, incentive generation and invoice settlements have become simplified with the easy to use payout solution.
                </p>
                
                <div className="space-y-8">
                  {features.map((feature, index) => (
                    <div key={index} className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white">
                          {feature.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed ml-12">{feature.description}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-[#38857a]/10 to-[#FF914C]/10 rounded-xl">
                  <p className="text-gray-700 leading-relaxed">
                    Make your transactions secure and fast with the next-gen payment processing technology. Book a free demo to learn more about the user-friendly and reliable features of our payout API.
                  </p>
                </div>
              </div>

              {/* Reliable Fintech Software */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Reliable Fintech Software API Provider in India
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  We have been helping thousands of Fintech companies with our highly secure and robust API solution. Integrate the API and process payments quickly with the assurance of 99.99% uptime.
                </p>
                
                <div className="grid md:grid-cols-3 gap-8">
                  {fintechBenefits.map((benefit, index) => (
                    <div key={index} className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white">
                          {benefit.icon}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">{benefit.title}</h3>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applications */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Applications of the best payout API provider
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  A reliable, easy to use and faster payout API can make a world of difference for ecommerce retailers, freelancing platforms, marketplace owners, marketing networks, non-profit organizations and financial services. All sizes of brands and entities can maintain transparency and accountability in fund distribution. Following are the applications where Scriza payout API can be a game-changer.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {applications.map((application, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-[#38857a]" />
                      <span className="text-gray-700">{application}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* How to use */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  How to use India and International Payout API?
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Simplify transactions with the secure and easy to use payment API which integrates quickly. Follow the steps listed below to make payment processing simplified.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {steps.map((step, index) => (
                    <div key={index} className="space-y-4">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white font-bold text-lg">
                          {index + 1}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                          <p className="text-gray-600 leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact CTA */}
              <div className="bg-gradient-to-r from-[#38857a] to-[#FF914C] rounded-2xl p-8 text-white">
                <h2 className="text-3xl font-bold mb-4">Contact Now</h2>
                <p className="text-lg text-white/90 mb-6">
                  Our offered payout solutions are easy and convenient. We put the needs of our customers as a priority and develop a comprehensive technology solution. Make payments to cards, wallets or banks within seconds.
                </p>
                <p className="text-white/90 mb-6">
                  Make Scriza your technology partner and add a competitive edge to your business. Contact us today and book a free demo to transform your business.
                </p>
                <Button 
                  size="lg" 
                  className="bg-white text-[#38857a] hover:bg-white/90"
                  onClick={() => document.getElementById('demo-section')?.scrollIntoView({behavior: 'smooth'})}
                >
                  Book Free Demo
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
            question: "What is a Payout Service?",
            answer: "A Payout Service is a financial service that enables businesses to send bulk payments directly to their vendors, employees, partners, or customers. It helps automate and simplify large-scale transactions such as salary payments, vendor disbursements, commission payments, refunds, and more."
          },
          {
            question: "Who can use Payout Services?",
            answer: "Our payout services are ideal for:E-commerce businessesFintech companiesDigital wallet providersInsurance firmsLoan disbursal companiesPayroll management service providersAny organization that needs to make bulk payments frequently"
          },
          {
            question: "What types of payout methods are supported?",
            answer: "We support multiple payout channels for maximum flexibility:Bank transfers (NEFT, RTGS, IMPS)UPI payoutsWallet transfersPrepaid card payoutsAadhaar-based payouts (AEPS)Mobile recharge & bill payments"
          },
          {
            question: "How does the payout process work?",
            answer: "Upload the payout file with details (beneficiary name, account number, amount, etc.).The system validates the file for errors.Once approved, payouts are processed via the selected payment method.Real-time status updates are provided (Success, Pending, Failed).Detailed payout reports are generated for reconciliation."
          },
          {
            question: "Is bulk payout secure?",
            answer: "Yes, security is our top priority. Our platform uses industry-standard encryption and secure APIs to process transactions. All payouts are governed by regulatory compliance such as KYC, AML, and RBI guidelines in India."
          }
        ]}
      />

      <Certification />
      <Footer />
      <ChatWidget />
    </div>
  )
}
