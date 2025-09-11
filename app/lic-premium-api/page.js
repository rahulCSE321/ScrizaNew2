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
  RefreshCw
} from 'lucide-react'

export default function LICPremiumAPIPage() {
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
          message: `LIC Premium Payment API Demo Request - Selected Option: ${formData.option}`
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

  const insurancePolicies = [
    "LIC Policies",
    "TATA Policies", 
    "AIG Policies",
    "Term Insurance",
    "Life Insurance",
    "Health Insurance",
    "Auto Insurance",
    "All Major Policies"
  ]

  const customerBenefits = [
    "Convenient, reliable and flexible payment processing",
    "Say goodbye to manual payment verification processes", 
    "Quick and easy insurance premium API for timely payments"
  ]

  const apiFeatures = [
    {
      icon: <Building className="h-6 w-6" />,
      title: "Covers all major insurance policies",
      description: "We go the extra mile to enhance efficiency. Use the same payment gateway for multiple insurance policies, such as TATA, AIG or LIC with comprehensive coverage."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Instant premium payment",
      description: "With our automated payment processing system, users can eliminate the requirements for manual payment verification and enable policyholders to make instant payments."
    },
    {
      icon: <Bell className="h-6 w-6" />,
      title: "Automated renewal reminders",
      description: "We ensure a seamless payment processing experience with inbuilt API features like automated reminders for policy renewals and transaction status updates."
    },
    {
      icon: <Receipt className="h-6 w-6" />,
      title: "Payment confirmations",
      description: "Enhance the overall user experience with real time payment insights. Tracking payment status and reconciliation of payments becomes easy with our API technology."
    }
  ]

  const securityFeatures = [
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Encrypted transactions",
      description: "Sensitive financial data are encrypted to offer total peace of mind with industry-standard encryption protocols for maximum security."
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "Compliant industry protocols",
      description: "We abide by robust data privacy protocols to guarantee a secure platform that meets all regulatory requirements and industry standards."
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: "Reliable payment infrastructure",
      description: "Comprehensive API with no more delays or insecure interruptions during transactions, ensuring smooth and reliable payment processing."
    }
  ]

  const paymentOptions = [
    "Credit Card",
    "Debit Card", 
    "Bank Transfers",
    "Digital Wallets",
    "UPI",
    "Net Banking",
    "Mobile Banking",
    "Multiple Options"
  ]

  const providerFeatures = [
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Customizable payment experience",
      description: "Our dedicated API developers provide analytics insights. We bring forth the most customizable payment processing platform to make your insurance business a brand."
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: "Round the clock support",
      description: "Have tech experts by your side and drive business growth. Scriza offers end-to-end consultation and after-sales support for highest customer satisfaction."
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Affordable price range",
      description: "Our goal is to enlarge our footprint based on positive user experience. An efficient payment processing solution is available at competitive pricing."
    }
  ]

  const integrationSteps = [
    {
      step: "1",
      title: "Get API keys",
      description: "Payments can be processed within seconds. All you need is to get the API keys and use them with the existing website or portal."
    },
    {
      step: "2", 
      title: "Real time integration",
      description: "Once you get the credentials, integration becomes an easy plug and play operation. Comprehensive API documentation allows easy integration into existing systems."
    },
    {
      step: "3",
      title: "Enter details",
      description: "We provide a user-friendly interface to enter all the details regarding the policy premium and payment information."
    },
    {
      step: "4",
      title: "Process payment",
      description: "Double-check all the details and submit the form to complete the transaction. It will only take a few seconds to complete the transaction."
    }
  ]

  const useCases = [
    {
      icon: <Building2 className="h-6 w-6" />,
      title: "Insurance companies",
      description: "Streamline premium collection processes with automated payment solutions for enhanced operational efficiency."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Insurance agents", 
      description: "Empower insurance agents with seamless payment collection tools to improve customer service and business growth."
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Fintech platforms",
      description: "Integrate insurance premium payment capabilities into your fintech solutions for comprehensive financial services."
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Insurance portals",
      description: "Enhance insurance management portals with automated premium payment processing and renewal systems."
    },
    {
      icon: <Store className="h-6 w-6" />,
      title: "Payment aggregators",
      description: "Add insurance premium payment services to your payment platform for diversified service offerings."
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Software developers",
      description: "Build insurance-focused applications with integrated premium payment functionality using our robust API."
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header currentPage="lic-premium-api" />

      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div className="w-full">
          <img 
            src="/lic-premium.png" 
            alt="LIC Premium Payment API" 
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
                  Say goodbye to the manual payment process and try the quick and easy insurance premium API
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Don't you think insurance premium payments should be processed in a timely and hassle-free manner? If you are still using old-school manual payment processing methods for LIC premiums, get in touch with us.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Simplify and automate the insurance payment process with our robust and secure API technology. Scriza has a proven track record of empowering insurance companies and their agents by providing this seamless payment solution.
                </p>

                <div className="grid md:grid-cols-4 gap-4 mb-8">
                  {insurancePolicies.map((policy, index) => (
                    <div key={index} className="bg-gradient-to-r from-[#38857a]/10 to-[#FF914C]/10 rounded-lg p-3 text-center">
                      <span className="text-sm font-medium text-gray-800">{policy}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-[#38857a]/10 to-[#FF914C]/10 rounded-xl p-6 mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Presenting an efficient payment platform that is:</h4>
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
                  Book a demo to learn more about the process of streamlining insurance premium payments with our cutting-edge API technology.
                </p>
              </div>

              {/* API Features */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Drive business growth with the best Insurance API provider in India
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  The offered API solutions seamlessly integrate with your existing insurance management systems and enable a smooth transition. Leverage the benefits of automated payment processes and attain a competitive edge for your business.
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
                  With our cutting-edge API technology, real-time transaction processing gets simplified. Just a few clicks and you can instantly complete premium payments for your esteemed policyholders.
                </p>
              </div>

              {/* Security Features */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Are you looking for a reliable LIC Payment API?
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Automated payment processing indeed improves the speed of transactions. However, most users have concerns about the reliability of the payment. Try Scriza API and rest assured because we confirm the security of the sensitive payment details of your customers.
                </p>
                
                <div className="space-y-8 mb-8">
                  {securityFeatures.map((feature, index) => (
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
                  Say goodbye to traditional payment methods and enjoy the convenience of instant, secure and automated payment solutions for insurance premiums.
                </p>
              </div>

              {/* Payment Options */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  LIC Premium API with multiple payment options
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Book a demo right now because we provide multiple payment options to enhance their overall experience and satisfaction levels. Choose any of the payment modes and complete the transactions with absolute convenience.
                </p>
                
                <div className="grid md:grid-cols-4 gap-4 mb-8">
                  {paymentOptions.map((option, index) => (
                    <div key={index} className="bg-gradient-to-r from-[#38857a]/10 to-[#FF914C]/10 rounded-lg p-3 text-center">
                      <span className="text-sm font-medium text-gray-800">{option}</span>
                    </div>
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">
                  We cater to diverse customer preferences therefore we bring forth a robust API documentation that includes a variety of payment options.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Depending on your customer preferences, you can choose the most convenient and preferred payment method for seamless premium collection.
                </p>
              </div>

              {/* Provider Features */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Searching for the best LIC Verification API Service Provider?
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  We take pride in helping thousands of insurance agents in streamlining their insurance operations. We can transform your insurance policy business and help you attain a competitive edge. Below are the reasons that Scriza is rated as the #1 API service provider for insurance premium payments.
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
                  Get API keys to access the scalable payment processing solution that transforms insurance premium collection processes.
                </p>
              </div>

              {/* Integration Steps */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  How to use Insurance Premium Payments API?
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  API integration is a convenient and user-friendly payment solution. It enhances satisfaction and customer loyalty. It is very easy and quick to streamline your insurance operations. In this digital era, you can take a leap forward by following the below mentioned steps:
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
                  We offer secure and easy to use API solutions for third-party integration. Leverage end-to-end connectivity and utilize a reliable payment gateway for insurance policy payments.
                </p>
              </div>

              {/* Use Cases */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Who can benefit from Insurance Premium Payment API?
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Our Insurance Premium Payment API serves various stakeholders in the insurance ecosystem, providing comprehensive solutions for automated premium collection and management.
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
                  Transform your insurance operations with automated premium payment solutions that enhance customer experience and operational efficiency.
                </p>
              </div>

              {/* Final CTA */}
              <div className="bg-gradient-to-r from-[#38857a] to-[#FF914C] rounded-2xl p-8 text-white">
                <h2 className="text-3xl font-bold mb-4">Connect with the best Online Insurance Premium Payment API Provider</h2>
                <p className="text-lg text-white/90 mb-6">
                  Scriza API solutions have revolutionized the way insurance companies handle premium payments. Try our secure and efficient payment processing platform that comes with multiple payment options, seamless integration, and a customizable payment experience.
                </p>
                <p className="text-white/90 mb-6">
                  We empower insurance businesses to streamline their operations and provide superior customer service through automated, reliable payment processing solutions.
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
            question: "What is LIC API?",
            answer: "The LIC API enables businesses, insurance aggregators, fintech platforms, and agents to integrate Life Insurance Corporation (LIC) services into their digital applications or software systems. It provides seamless access to LIC policy issuance, premium payment, policy status inquiry, and other LIC-related services in a secure and automated manner."
          },
          {
            question: "Who should use the LIC API?",
            answer: "Our LIC API is designed for:Insurance aggregatorsFintech companiesDigital wallet and payment platformsAgents and brokersE-commerce platforms offering insurance servicesAny business that wants to offer LIC-related services to customers"
          },
          {
            question: "What services are provided by the LIC API?",
            answer: "The LIC API provides seamless access to LIC policy issuance, premium payment, policy status inquiry, and other LIC-related services in a secure and automated manner."
          },
          {
            question: "How does the LIC API work?",
            answer: "The customer selects LIC services (e.g., policy purchase, premium payment).The API sends a request to LIC’s system to fetch available plans or policy details.For policy purchase or premium payment, the customer enters necessary data (personal details, policy number, amount, etc.).The API securely processes the transaction in real time.A confirmation response with a policy number, payment status, or document URL is returned instantly."
          },
          {
            question: "Is the LIC API secure?",
            answer: "Yes, our API follows strict security protocols:End-to-end HTTPS encryptionToken-based authentication for secure API callsCompliance with IRDAI (Insurance Regulatory and Development Authority of India) regulationsSecure storage of sensitive customer and policy dataRegular security audits"
          },
          {
            question: "How fast is the policy issuance or premium payment process?",
            answer: "LIC policy issuance and premium payments are processed in real time or within minutes.Policy document generation may take some time (from a few minutes to a few hours) depending on LIC’s internal processing.Payment confirmation and status updates are available instantly via API response or webhook."
          },
          {
            question: "What happens if a payment or policy issuance fails?",
            answer: "In case of failure due to invalid input, insufficient funds, or system errors, the API returns a specific error code with a message.No amount is debited in case of failed transactions.Businesses can handle retries or prompt customers accordingly."
          }
        ]}
      />



      <Certification />
      <Footer />
      <ChatWidget />
    </div>
  )
}