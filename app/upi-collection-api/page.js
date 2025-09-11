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
  PiggyBank
} from 'lucide-react'

export default function UPICollectionPage() {
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
          message: `UPI Collection API Demo Request - Selected Option: ${formData.option}`
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

  const upiPerks = [
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "No need for card details",
      description: "Accept payments directly from customers' bank accounts without the risk of manual errors."
    },
    {
      icon: <Timer className="h-6 w-6" />,
      title: "Settlements within seconds",
      description: "API gives you quick access to funds. You can enjoy real-time settlement for cash flow management."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure Transactions",
      description: "Ensure peace of mind with robust security measures like two-factor authentication and encryption."
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "50% lower Transaction Costs",
      description: "Save on transaction fees compared to traditional payment methods. You can reduce operational expenses."
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Invest as you grow",
      description: "Easily integrate UPI payment capabilities into your existing platform or app. You get the flexibility as your business grows."
    }
  ]

  const apiFeatures = [
    {
      icon: <Building className="h-6 w-6" />,
      title: "Multi-Bank Support",
      description: "Access multiple UPI-enabled banks through a single integration. With our API you can offer flexibility to your customers."
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "User-Friendly Dashboard",
      description: "Access intuitive dashboard analytics for real-time insights into transactions. Handle settlements and customer behavior with one click operation."
    },
    {
      icon: <Languages className="h-6 w-6" />,
      title: "Multi-Language and Multi-Currency Support",
      description: "Reach an international customer base with support for multiple languages and currencies. Choose our API to enhance accessibility and convenience."
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Easy Authentication",
      description: "Enhance security with seamless OTP verification for every transaction. Our API is robust to provide instant OTP delivery to the registered mobile numbers."
    },
    {
      icon: <Bell className="h-6 w-6" />,
      title: "Real-Time Transaction Updates",
      description: "Provide instant updates on transaction status and confirmations. Manage directness in each transaction."
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Tokenization for Security",
      description: "Utilize tokenization to securely handle customer payment information. Our API offers PCI DSS compliance and peace of mind."
    }
  ]

  const useCases = [
    {
      icon: <ShoppingCart className="h-6 w-6" />,
      title: "Merchant Payments",
      description: "Facilitates secure payments to merchants by verifying the correctness of their UPI IDs, reducing the risk of payment errors."
    },
    {
      icon: <Repeat className="h-6 w-6" />,
      title: "Subscription Services",
      description: "Verifies UPI IDs for recurring payments, ensuring that subscriptions are renewed accurately and securely."
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Bill Payments",
      description: "Verify the UPI ID of telecom providers before making payments. You can ensure that payments are directed to the correct recipient."
    },
    {
      icon: <HandHeart className="h-6 w-6" />,
      title: "Donations",
      description: "Validate the UPI IDs of charitable organizations so that donations are securely transferred to legitimate entities."
    },
    {
      icon: <Building2 className="h-6 w-6" />,
      title: "E-commerce Transactions",
      description: "Verifies UPI IDs during checkout, ensuring that payments are directed to the correct seller or platform, enhancing transaction security."
    },
    {
      icon: <PiggyBank className="h-6 w-6" />,
      title: "Loan Disbursements",
      description: "Ensures that loan amounts are disbursed securely to verified UPI IDs of borrowers, minimizing transaction risks."
    }
  ]

  const developmentSteps = [
    {
      step: "1",
      title: "Initial Consultation",
      description: "We start with a detailed discussion to grasp your API integration requirements."
    },
    {
      step: "2", 
      title: "Planning and Design",
      description: "Our expert team designs a customized solution tailored to your specifications. The planning and design phase usually takes 1 week."
    },
    {
      step: "3",
      title: "Development",
      description: "The development phase begins, where our developers work diligently to implement the UPI payment gateway API. This typically takes 2 weeks as per the project scope."
    },
    {
      step: "4",
      title: "Testing and Quality Assurance", 
      description: "We deploy the API only when we conduct rigorous testing. We test for 2 weeks that everything functions flawlessly and meets your expectations."
    },
    {
      step: "5",
      title: "Deployment and Support",
      description: "When the testing is complete and you're satisfied with the results, we deploy the API. We do not stop here as we have a dedicated team to offer ongoing support."
    }
  ]

  const whyChooseFeatures = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Expertise and Efficiency",
      description: "With our specialized knowledge and streamlined processes, we deliver your API on time and within budget."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Customer-Centric Approach", 
      description: "We prioritize clear communication and collaboration throughout the development cycle."
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Proven Track Record",
      description: "Countless businesses trust us for our expertise in UPI payment solutions."
    }
  ]

  const statsData = [
    "Over $7 billion processed annually through our API",
    "Handling 1.5 million API calls daily", 
    "Processing over 12,000 transactions per hour",
    "Robust infrastructure for 99.99% uptime"
  ]

  const achievements = [
    "Accept payments through Google Pay, Amazon Pay, WhatsApp Pay and more",
    "Helped over 10,000 businesses with successful integration of UPI payments", 
    "Processed over 1 million transactions with the promise of quick reliable payments",
    "Achieved 99.9% uptime with our seamless service round the clock",
    "Increased transaction efficiency by 30% with hassle free payment processes"
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header currentPage="upi-collection" />

      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div className="w-full">
          <img 
            src="/upiCollection.png" 
            alt="UPI Collection API" 
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
                  The all in one UPI Collection API
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  Manage transactions for payments, bills, subscriptions and more
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Carrying cash everywhere is a thing of past. Likewise, many individuals already hate the idea of entering long card numbers to make the payments. UPI has simplified digital payments so cut the hassle and enjoy smooth sailing of your business.
                </p>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Speed up your transactions with the best UPI collection API by Scriza.
                </p>

                <div className="space-y-3 mb-8">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-[#38857a] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{achievement}</span>
                    </div>
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed">
                  Ready to accelerate your payment collections? Experience the efficiency of Scriza's top-notch API today! Our affordable plans cater to all including startups or established enterprises. Schedule a demo now to see the collection API in action.
                </p>
              </div>

              {/* UPI Perks */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Perks of investing in UPI payment API
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  Integrate the plug in API to simplify payment collections with Scriza.
                </p>
                
                <div className="space-y-8">
                  {upiPerks.map((perk, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white flex-shrink-0">
                        {perk.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{perk.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{perk.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* What Makes Us Best */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  What makes us the best UPI API provider?
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  We offer seamless integration so that businesses can effortlessly manage and scale their payment operations. Our robust infrastructure and dedicated support ensure that you can trust us to optimize your payment processes and drive your business forward.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {statsData.map((stat, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#38857a] to-[#FF914C]"></div>
                      <span className="text-gray-700 font-medium">{stat}</span>
                    </div>
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed">
                  Our track record of successful API speaks for itself. Head to the testimonials section to learn how our API solutions empowered businesses to focus on growth and customer satisfaction.
                </p>
              </div>

              {/* API Features */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Features of the #1 API for UPI payment
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {apiFeatures.map((feature, index) => (
                    <div key={index} className="space-y-4">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white flex-shrink-0">
                          {feature.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                          <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Use Cases */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Use cases for our UPI ID verification API
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  We have extensive experience in developing ID verification API that finds application in various scenarios across digital payment platforms.
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
                  Our verification API is gaining popularity as it enhances transaction security. Get a free demo on how it reduces errors and improves user confidence in digital payments.
                </p>
              </div>

              {/* Development Timeline */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  How Long Do We Take to Develop Your UPI Payment Gateway API?
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  The large team of tech experts at Scriza take pride in delivering rapid and reliable UPI API solutions. Our typical development timeline ensures you can start processing payments efficiently:
                </p>
                
                <div className="space-y-8 mb-8">
                  {developmentSteps.map((step, index) => (
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
              </div>

              {/* Why Choose Us */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Why Choose Us?
                </h2>
                
                <div className="grid md:grid-cols-3 gap-8">
                  {whyChooseFeatures.map((feature, index) => (
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
                <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
                <p className="text-lg text-white/90 mb-6">
                  Contact us today to discuss your project requirements and kickstart your journey towards seamless UPI payment integration.
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
            question: "What is UPI Collection API?",
            answer: "The UPI Collection API allows businesses to seamlessly integrate Unified Payments Interface (UPI) payment collection into their applications, websites, or software systems. It enables automated, real-time collection of payments from customers directly into the business bank account using UPI IDs or QR codes."
          },
          {
            question: "Who should use the UPI Collection API?",
            answer: "Our UPI Collection API is ideal for:E-commerce businessesDigital walletsSubscription servicesUtility bill payment platformsLending companiesPayment aggregatorsAny business that needs automated UPI payment collection"
          },
          {
            question: "What is UPI Collection API?",
            answer: "The UPI Collection API allows businesses to seamlessly integrate Unified Payments Interface (UPI) payment collection into their applications, websites, or software systems. It enables automated, real-time collection of payments from customers directly into the business bank account using UPI IDs or QR codes."
          },
          {
            question: "Who should use the UPI Collection API?",
            answer: "Our UPI Collection API is ideal for:E-commerce businessesDigital walletsSubscription servicesUtility bill payment platformsLending companiesPayment aggregatorsAny business that needs automated UPI payment collection"
          },
          {
            question: "How does the UPI Collection API work?",
            answer: "The business integrates the API into their system.When a customer initiates payment, the API generates a UPI payment request.The customer approves the payment via their UPI app (Google Pay, PhonePe, Paytm, etc.).The API receives a real-time callback or webhook confirming payment success or failure.Payment status and details are logged automatically for reconciliation."
          },
          {
            question: "What are the advantages of using the UPI Collection API?",
            answer: "Instant and real-time payment confirmationZero manual intervention requiredSecure and reliableEasy integration with minimal codingSupports bulk and individual payment requestsAutomatic reconciliation reportsScalable for high transaction volumes"
          },
          {
            question: "Is the UPI Collection API secure?",
            answer: "Yes. Our API follows industry-standard security protocols:HTTPS encryption for all data exchangesOTP-based customer authentication by NPCICompliance with RBI guidelinesPCI-DSS compliant infrastructureStrong authentication and fraud prevention measures"
          }
        ]}
      />

      <Certification />
      <Footer />
      <ChatWidget />
    </div>
  )
}