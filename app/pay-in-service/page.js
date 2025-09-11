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
  ShieldCheck
} from 'lucide-react'

export default function PayInServicePage() {
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
          message: `Pay In Service Demo Request - Selected Option: ${formData.option}`
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

  const getStartedFeatures = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Quick Setup",
      description: "Everything you need can be found in the API documentation we provide. It will guide you during the integration process step-by-step."
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "30% revenue increase",
      description: "Make a switch to our payment API and experience business growth instantly."
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "Expand your payment options",
      description: "With our robust and easy to integrate API, clients can accommodate payment requests from everyone. Be it Venmo, CashApp, PayPal or any international pay out."
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Instant Testing",
      description: "Use our sandbox environment to test your integration before going live. It means the API is secure for your real transactions."
    }
  ]

  const currencyFeatures = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: "No international payment barriers",
      description: "No matter where your customers are, our Payout API lets you send and receive payments across the globe."
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Automated currency conversions",
      description: "Paying and getting paid in local currency makes everything simpler and cheaper."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Easy to Use",
      description: "You don't need to be a tech expert to use our API. We design user-friendly APIs with clear instructions. Moreover support is available every time you need it."
    }
  ]

  const b2bIndustries = [
    {
      icon: <ShoppingCart className="h-6 w-6" />,
      title: "E-commerce Platforms",
      description: "Our clients from online marketplaces streamlined their transactions between vendors and customers."
    },
    {
      icon: <Truck className="h-6 w-6" />,
      title: "Logistics and Supply Chain",
      description: "We have also served companies in transportation and logistics. They manage payments between suppliers, distributors, and clients more efficiently through our API."
    },
    {
      icon: <Building2 className="h-6 w-6" />,
      title: "Financial Services",
      description: "Banks and fintech companies have also shown faith in Scriza API. Our pay in API solutions enhanced their service offerings by integrating solutions for corporate clients."
    },
    {
      icon: <Stethoscope className="h-6 w-6" />,
      title: "Healthcare",
      description: "Hospitals and medical service providers recommended Scriza API to manage payments. We provide developer friendly solutions to make services, supplies, and insurance claims smooth."
    },
    {
      icon: <Home className="h-6 w-6" />,
      title: "Real Estate",
      description: "We have extensive experience in developing B2B APi that have helped property management firms and real estate agencies in payment handling."
    },
    {
      icon: <Plane className="h-6 w-6" />,
      title: "Travel and Hospitality",
      description: "Hotels, travel agencies, and tour operators often rate our API integration as 5-stars. We helped them simplify payments to vendors and service providers."
    }
  ]

  const otpSteps = [
    {
      icon: <Key className="h-6 w-6" />,
      title: "Get API Keys from the best Pay in API provider",
      description: "First, sign up on our platform and obtain your unique API key. This key is essential for authenticating your requests and accessing our services."
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Integrate the API",
      description: "Use our comprehensive documentation and SDKs to integrate the API into your system. We support multiple programming languages, ensuring a smooth setup process."
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Generate a One-Time Payment Code",
      description: "Create a one-time payment code by sending a request to our API endpoint with the transaction details."
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Send the Payment Code to Your Customer",
      description: "Once the payment code is generated, send it to your customer via email or SMS. They can use this code to complete the payment securely."
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Customer Completes the Payment",
      description: "Your customer uses the one-time payment code on your payment page or app to finalize the transaction. The code is valid for a single use only, ensuring security."
    },
    {
      icon: <Bell className="h-6 w-6" />,
      title: "Receive Payment Confirmation",
      description: "After the payment is processed, you'll receive an instant notification with the transaction details. You can also query the transaction status through our API."
    }
  ]

  const requiredParameters = [
    "amount: The amount to be charged",
    "currency: The currency of the transaction",
    "description: A brief description of the transaction",
    "customer_email: The email address of the customer"
  ]

  const securityFeatures = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Rock solid security",
      description: "We are known for developing secure APIs. We use the same 256-bit encryption security levels that are used by banks and financial institutions."
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: "24/7 fraud detection",
      description: "Online payments are not vulnerable to frauds anymore. Our hundreds of clients are thankful to our top notch security standards in API development. We provide the option for real time threat detection so you can rest easy about data protection."
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "PCI DSS compliance",
      description: "We are the most trusted API developers as we take security standards very seriously. Pay in API by Scriza complies with international security standards."
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header currentPage="pay-in-service" />

      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div className="w-full">
          <img 
            src="/payinservice.png" 
            alt="Pay In Service Provider" 
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
                  Pay-in Pay-out were so never easier
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  Schedule a free demo with the best Pay In service provider
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  The payment infrastructure have changed! Is your business ready for it?
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Scriza becomes the most trusted Pay in Service Provider for all sizes of businesses. With our developed API you can accept payments and send pay outs with absolutely safety and compliance.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Do you feel Pay in APIs are the hard stuff? Let us take care of the tough tasks. Schedule a free demo right now to be among our list of 100+ satisfied clients.
                </p>
              </div>

              {/* Get Started */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Get started in minutes with the best Pay in API provider
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  We are the leaders of effortless API integration in the US
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {getStartedFeatures.map((feature, index) => (
                    <div key={index} className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white">
                          {feature.icon}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed">
                  The Scriza advantage makes integrating our payin and payout API as smooth and straightforward as possible. So choose us and save your time and effort for a seamless payment experience.
                </p>
              </div>

              {/* Local Currency Support */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Payin payment API with local currency support
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  Accept $ payments from worldwide in 150+ currencies
                </p>
                
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  {currencyFeatures.map((feature, index) => (
                    <div key={index} className="space-y-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white">
                        {feature.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed">
                  Our Pay in API would open multiple revenue streams for your business. Connect now to schedule a free demo for the 5-star rated payment API by Scriza.
                </p>
              </div>

              {/* B2B Payments API */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  An easy solution for complex B2B Payments API
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Over the last decade we have helped 100+ clients with their payment processing capabilities. You could also benefit from using a payments API developed especially for the B2B industry.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {b2bIndustries.map((industry, index) => (
                    <div key={index} className="space-y-4">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white flex-shrink-0">
                          {industry.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">{industry.title}</h3>
                          <p className="text-gray-600 text-sm leading-relaxed">{industry.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* One Time Payment Code API */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  How to Use Our One Time Payment Code API?
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Getting started with our OTP API is very easy. A few simple integration steps and you are all set to make secure one-time payments.
                </p>
                
                <div className="space-y-8 mb-8">
                  {otpSteps.map((step, index) => (
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

                <div className="bg-gradient-to-r from-[#38857a]/10 to-[#FF914C]/10 rounded-xl p-6 mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Required Parameters:</h4>
                  <div className="space-y-2">
                    {requiredParameters.map((param, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-[#38857a]" />
                        <span className="text-gray-700 text-sm">{param}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  Experience the ease and security of one-time payments with our powerful API. Sign up now and integrate it into your system with minimal effort!
                </p>
              </div>

              {/* Security Features */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Secure B2B Payments API with 256-bit encryption
                </h2>
                
                <div className="grid md:grid-cols-3 gap-8">
                  {securityFeatures.map((feature, index) => (
                    <div key={index} className="space-y-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white">
                        {feature.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Final CTA */}
              <div className="bg-gradient-to-r from-[#38857a] to-[#FF914C] rounded-2xl p-8 text-white">
                <h2 className="text-3xl font-bold mb-4">See our Payment Request API in Action- Schedule a free demo today!</h2>
                <p className="text-lg text-white/90 mb-6">
                  Discover how a Pay in Service Provider can minimize human errors of manual payment processing. Schedule a free demo now to encounter the powerful API technology features first hand.
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
            question: "What is a Pay-in Service?",
            answer: "A Pay-in Service enables businesses to collect payments from their customers through multiple payment methods, including bank transfers, UPI, cards, wallets, and other digital payment options. It helps businesses accept payments seamlessly and securely from anywhere, anytime."
          },
          {
            question: "Who can use Pay-in Services?",
            answer: "Our Pay-in services are ideal for:E-commerce platformsSubscription-based businessesUtility and bill payment providersEducational institutionsTravel and ticket booking platformsDigital marketplacesAny business that needs to collect customer payments online or offline"
          },
          {
            question: "What payment methods are supported for Pay-in?",
            answer: "We support multiple payment modes to ensure maximum convenience:UPI (Unified Payments Interface)Debit & Credit Cards (Visa, MasterCard, Rupay, etc.)Net Banking (IMPS, NEFT)Wallet Payments (Paytm, PhonePe, Mobikwik, etc.)QR Code-based PaymentsPrepaid Card Reload"
          },
          {
            question: "How does the Pay-in process work?",
            answer: "The customer initiates a payment through the merchant’s website, app, or point-of-sale system.The pay-in service securely processes the payment through the selected mode (UPI, Card, etc.).Once authorized, the payment is settled into the merchant’s account.The merchant receives real-time payment status and detailed reports."
          },
          {
            question: "Is the Pay-in process secure?",
            answer: "Absolutely. All payment transactions are encrypted end-to-end and comply with PCI-DSS standards. We follow RBI guidelines, two-factor authentication, and OTP-based verification for secure customer payments."
          }
        ]}
      />

      


      <Certification />
      <Footer />
      <ChatWidget />
    </div>
  )
}
