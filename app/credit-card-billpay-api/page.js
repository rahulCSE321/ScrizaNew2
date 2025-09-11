'use client'

import { Button } from '@/components/ui/button'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ChatWidget from '@/components/ChatWidget'
import DemoBookingForm from '@/components/DemoBookingForm'
import Certification from '@/components/Certification'
import FAQ from '@/components/FAQ'
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
  Phone
} from 'lucide-react'

export default function CreditCardBillPaymentPage() {
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
          message: `Credit Card Bill Payment API Demo Request - Selected Option: ${formData.option}`
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

  const supportedBanks = [
    "SBI",
    "HDFC Bank", 
    "IndusInd Bank",
    "Citi Bank",
    "Visa",
    "Mastercard",
    "American Express",
    "Domestic Banks"
  ]

  const customerBenefits = [
    "Maintain the highest standards of security",
    "Say goodbye to complex payment integrations", 
    "Say hello to reliable, fast and user-friendly integrations"
  ]

  const apiFeatures = [
    {
      icon: <Timer className="h-6 w-6" />,
      title: "Same day settlement",
      description: "Grow your business exponentially with the robust and highly efficient payment system. Credit any amount of money with same-day settlement benefits."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Safe and secure payment",
      description: "Robust API documentation and compliance with encryption protocols offer peace of mind. Rest assured, all the sensitive financial data of your customers will remain secure."
    },
    {
      icon: <Building className="h-6 w-6" />,
      title: "Payments for major banks",
      description: "A long list of banks and financial institutions offers you the freedom and flexibility to accept bill payments from a diverse range of customers."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "User-friendly operation",
      description: "Ours is an easy to integrate plug and play model API that offers the ultimate benefit of functionality even to non-tech-savvy individuals."
    }
  ]

  const providerFeatures = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Easier and faster integration",
      description: "We have become a trusted choice because we provide the benefits of speed and ease. Clear and concise documentation along with the assurance of 99.99% uptime creates well-defined endpoints for faster integrations."
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: "Dedicated customer support",
      description: "We strive to fulfil the assurance of faster implementation and we do this by providing 24/7 tech-support. Our knowledgeable support team is available to address any questions, concerns, or technical issues you may encounter along the way."
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Affordable and scalable model",
      description: "We are committed to providing personalized technical assistance. Begin with a little investment and scale up as you go. Contact our sales team to learn more about API scalability."
    }
  ]

  const securityFeatures = [
    "Industry-standard security protocols",
    "Encryption", 
    "Tokenization",
    "Compliance with Payment Card Industry Data Security Standard (PCI DSS)"
  ]

  const useCases = [
    {
      icon: <Store className="h-6 w-6" />,
      title: "Online retailers",
      description: "Streamline payment processing for e-commerce platforms with secure and reliable credit card bill payment solutions."
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "Payment service providers", 
      description: "Enhance your payment gateway offerings with comprehensive credit card bill payment capabilities."
    },
    {
      icon: <Repeat className="h-6 w-6" />,
      title: "Subscription service providers",
      description: "Automate recurring credit card bill payments for subscription-based business models."
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Software applications",
      description: "Integrate seamless payment processing directly into your software solutions and applications."
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Telecom providers",
      description: "Enable customers to pay their telecom bills using credit cards through your platform."
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile app developers",
      description: "Add secure credit card payment functionality to your mobile applications with ease."
    }
  ]

  const integrationSteps = [
    {
      step: "1",
      title: "Sign up and get API Keys",
      description: "Sign up for an account at Scriza and you will receive API credentials, including an API key, secret key, or other authentication details. These credentials are used to secure transactions with the payment gateway."
    },
    {
      step: "2", 
      title: "Integrate the API",
      description: "We provide comprehensive API documentation, which means integrating the API becomes effortless. Depending on your preference you can integrate the API with direct integration, SDKs or hosted payment pages."
    },
    {
      step: "3",
      title: "Enter payment details",
      description: "Obtain payment details from your customers and send an API request. It will take merely a few seconds to process the request response and complete the transaction."
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header currentPage="credit-card-bill-payment" />

      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div className="w-full">
          <img 
            src="/creditCard.png" 
            alt="Credit Card Bill Payment API" 
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
                  Credit Card Bill Payments are made simple, seamless and secure with Scriza API
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Scriza brings forth a cutting-edge solution that empowers businesses to streamline their payment processes. Presenting a seamless payment experience for your customers. Try our trusted API platform to make payments for:
                </p>

                <div className="grid md:grid-cols-4 gap-4 mb-8">
                  {supportedBanks.map((bank, index) => (
                    <div key={index} className="bg-gradient-to-r from-[#38857a]/10 to-[#FF914C]/10 rounded-lg p-3 text-center">
                      <span className="text-sm font-medium text-gray-800">{bank}</span>
                    </div>
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Our API provides a secure and efficient way to integrate credit card bill payments into your existing systems. Integrate the API with any application, website, or e-commerce platform to facilitate fast and reliable payment transactions.
                </p>

                <div className="bg-gradient-to-r from-[#38857a]/10 to-[#FF914C]/10 rounded-xl p-6 mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">A hassle-free experience for your customers while making credit card bill payments</h4>
                  <div className="space-y-3">
                    {customerBenefits.map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-[#38857a]" />
                        <span className="text-gray-700 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  Book a free demo to learn more about simplified credit card bill payments with our innovative API solution.
                </p>
              </div>

              {/* API Benefits */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  What are the benefits of using an API for credit card payments?
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  Credit card bill payments can be made anytime, anywhere with our robust API technology.
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
                  The offered API is the ultimate tool for businesses to revolutionize their payment processes. With our API, effortlessly integrate credit card bill payment capabilities into your existing systems and offer your customers a seamless and convenient payment experience.
                </p>
              </div>

              {/* Provider Features */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Features provided by the best credit card API provider
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  We take pride in our technological innovations and due to that, we have developed an API that boasts advanced features, such as real-time transaction processing, secure data encryption, and customizable payment options.
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

                <p className="text-gray-700 leading-relaxed">
                  Simplify payment management, enhance customer satisfaction, and stay ahead of the competition with our cutting-edge Payment API for credit cards.
                </p>
              </div>

              {/* Security Features */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  What makes us the best credit card bill payment API provider?
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  We focus on the security of your payment transactions and the sensitive financial data of your customers.
                </p>
                
                <div className="bg-gradient-to-r from-[#38857a]/10 to-[#FF914C]/10 rounded-xl p-6 mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Scriza API adheres to</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {securityFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <ShieldCheck className="h-4 w-4 text-[#38857a]" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">
                  You can trust that your customer's sensitive information is handled with utmost care and protection. So choose us if security and compliance are your utmost priorities.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Our reputation as the best API provider is backed by a track record of satisfied customers. So far, we have helped thousands of businesses with reliable, scalable, and innovative payment solutions across various industries.
                </p>
              </div>

              {/* Use Cases */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  What are the uses of the credit card bill payment API?
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Businesses from diverse industry verticals can experience the difference and try our seamless payment processing technology. With our robust and easy to use API technology, we cater to a wide range of entities including the following:
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
                  Integrate the API platform to simplify payment processing without any hassles of transaction failure or data verification.
                </p>
              </div>

              {/* Integration Process */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  How does credit card payment integration work?
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Connecting your business's systems with our API is extremely simple. A few clicks and your website or application can be integrated with a payment gateway or processor.
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
                  Get in touch with our tech experts to learn more about the detailed instructions on how to format and send payment requests via API. We are here to offer assistance 24/7 so book a free demo right now.
                </p>
              </div>

              {/* Final CTA */}
              <div className="bg-gradient-to-r from-[#38857a] to-[#FF914C] rounded-2xl p-8 text-white">
                <h2 className="text-3xl font-bold mb-4">Connect with India's #1 credit card API service provider</h2>
                <p className="text-lg text-white/90 mb-6">
                  Whether you are a small business, a large enterprise, or a technology platform, Scriza bill payment API can be customized for you. We bring forth an affordable and specifically tailored API to meet your specific payment processing needs.
                </p>
                <p className="text-white/90 mb-6">
                  Get in touch with our sales team to learn more about how the payment processing API can be a game-changer for your business.
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
      <FAQ
        title="Frequently Asked Questions"
        faqs={[
          {
            question: "What is a Credit Card API?",
            answer: "A Credit Card API allows businesses to seamlessly integrate credit card payment acceptance into their website, mobile app, or software platform. It enables secure, fast, and reliable processing of credit card transactions in real time, supporting a wide range of card types and schemes."
          },
          {
            question: "Who can use the Credit Card API?",
            answer: "Our Credit Card API is designed for:E-commerce businessesSubscription-based servicesDigital marketplacesTravel and ticketing platformsUtility bill payment servicesSaaS companiesAny business that needs to accept credit card payments from customers online"
          },
          {
            question: "How does the Credit Card API work?",
            answer: "The customer enters credit card details (card number, expiry date, CVV) during checkout.The API securely transmits the payment data to the payment gateway.The issuing bank validates and authorizes the transaction.The API returns a real-time success or failure response.Funds are transferred to the merchant account as per the settlement cycle."
          },
          {
            question: "What credit card types are supported?",
            answer: "Our Credit Card API supports all major card schemes, including:VisaMasterCardAmerican Express (Amex)RuPayDiners ClubIt supports both debit and credit cards issued by banks across India and internationally."
          },
          {
            question: "Is the Credit Card API secure?",
            answer: "Absolutely. We follow strict security standards:PCI-DSS compliant infrastructureEnd-to-end SSL encryptionTokenization of sensitive card data3D Secure (2FA) Authentication supportedSecure customer redirection for authorization when requiredThese measures ensure that your customers' financial information remains safe and secure throughout the payment process."
          }
        ]}
      />
            

      <Certification />
      <Footer />
      <ChatWidget />
    </div>
  )
}