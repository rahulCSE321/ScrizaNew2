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
  Receipt
} from 'lucide-react'







export default function BBPSAPIPage() {
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
          message: `BBPS API Demo Request - Selected Option: ${formData.option}`
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

  const bbpsServices = [
    "Electricity Bill Payment",
    "Gas Bill Payment", 
    "Water Bill Payment",
    "Telecom Bill Payment",
    "DTH Recharge",
    "Mobile Postpaid",
    "Broadband Bills",
    "Insurance Premium"
  ]

  const customerBenefits = [
    "RBI approved BBPS platform for secure transactions",
    "Real-time bill fetching and payment processing", 
    "Multi-category bill payment support",
    "Instant payment confirmations and receipts",
    "24/7 API availability with minimal downtime",
    "Comprehensive transaction reporting",
    "Easy integration with existing systems",
    "Competitive commission structures"
  ]

  const features = [
    {
      icon: <Receipt className="h-8 w-8 text-blue-600" />,
      title: "Multi-Category Bills",
      description: "Support for electricity, gas, water, telecom, and other utility bills"
    },
    {
      icon: <Shield className="h-8 w-8 text-green-600" />,
      title: "RBI Approved",
      description: "Certified BBPS platform ensuring regulatory compliance and security"
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-600" />,
      title: "Real-time Processing",
      description: "Instant bill fetching and payment processing with immediate confirmations"
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-purple-600" />,
      title: "Detailed Reporting",
      description: "Comprehensive transaction reports and analytics dashboard"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div className="relative w-full">
          <img 
            src="/BBPSAPIProvider.png" 
            alt="AePS API - Aadhaar Enabled Payment System" 
            className="w-full h-auto max-h-[500px] object-contain object-center bg-gray-100" 
            
          />
          <div className="absolute inset-0 flex items-center justify-start pl-8">
            <h1 className="text-5xl font-bold text-black">
              BBPS API Provider
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Introduction */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="mb-6">
                  <nav className="text-sm text-gray-500 mb-4">
                    Home / BBPS API
                  </nav>
                  <h1 className="text-3xl font-bold text-gray-900 mb-4">
                    Bharat Bill Payment System (BBPS)
                  </h1>
                  <p className="text-lg text-gray-700 mb-6">
                    Electricity, gas, water and telephone bill payments become easy with BBPS API
                  </p>
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  BBPS or Bharat bill payment system is an online platform developed for payment collection. NPCI developed this platform to collect bills for over 22 categories.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  Integrate the BBPS API developed by Scriza into your existing system or application and present the ultimate convenience for utility bill payments. Become a payments service provider with ease. Try our robust, highly secure and high performing API technology for bill payments.
                </p>
              </div>

              {/* BBPS API Provider */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Bharat bill pay API provider
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Scriza brings forth an easy integration technology to deploy the one-stop solution for utility bill payments. Make BBPS accessible and interoperable with our highly secure payment API.
                </p>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Providing convenience to make payments on the go, we offer you the best API solution for faster and more reliable transactions. Make online and offline payments for various categories of utility bills:
                </p>
                
                <ul className="grid md:grid-cols-2 gap-3 mb-6">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Landline bill</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Gas bill</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Electricity bill</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Water bill</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Broadband bill</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Postpaid bills</span>
                  </li>
                </ul>
                
                <p className="text-gray-700 leading-relaxed">
                  We take pride in our robust API development infrastructure which enabled us to bring forth a revolutionary payment solution. We empower every small scale business owner who aims to set benchmarks for payment services. Get API keys or book a free demo to learn more about the easy plug and play API solution.
                </p>
              </div>

              {/* Features and Benefits */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Bharat bill pay integration API: Features and benefits
                </h2>
                <p className="text-gray-700 leading-relaxed mb-8">
                  The centralized payment gateway service BBPS is widely popular for its unmatched functionality and versatility. Integrate BBPS with our API technology to manifold the business benefits.
                </p>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-500 pl-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Seamless and secure bill payments:</h3>
                    <p className="text-gray-700">Scriza API technology enables you to seamlessly integrate the BBPS system and securely accept payments from your customers.</p>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Wide range of billers:</h3>
                    <p className="text-gray-700">Convenience is guaranteed with BBPS API integration because you can accept payments for over 22 categories of billers across the country.</p>
                  </div>
                  
                  <div className="border-l-4 border-yellow-500 pl-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-time updates:</h3>
                    <p className="text-gray-700">Receive notifications for successful payments and keep track of failed transactions. Real-time status updates are best for efficient payment tracking.</p>
                  </div>
                  
                  <div className="border-l-4 border-purple-500 pl-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Data privacy:</h3>
                    <p className="text-gray-700">Compliance with data privacy norms offer total peace of mind. All the sensitive payment information and customer data are secured using encryption protocols.</p>
                  </div>
                  
                  <div className="border-l-4 border-red-500 pl-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Handle high volumes:</h3>
                    <p className="text-gray-700">BBPS API integration is widely demanded due to its feature of scalability. When your customer base grows and you need a system to handle higher volumes of transactions.</p>
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  What makes us the Best BBPS API Provider Company in India?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Scriza API solutions are best-in-class because of the standardized and efficient documentation. Moreover, our dedication to customer satisfaction makes us the #1 company for BBPS API integration.
                </p>
                
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">99.99% uptime:</h3>
                    <p className="text-gray-700">We assure you of continuous availability in your business. Scriza guarantees a high level of uptime because we employ strict redundancy measures and robust monitoring systems. We ensure to meet the demands of various businesses and bring forth uninterrupted bills payment service.</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 customer support:</h3>
                    <p className="text-gray-700">Apart from our infrastructure ability and security measures, we have become India's #1 BBPS API provider because of prompt response guarantees. Scriza has a proven track record of resolution of critical matters by assuring 24/7 availability of technical support.</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Affordable:</h3>
                    <p className="text-gray-700">Our pricing plans are tailored to meet your specific needs. Businesses of varying sizes and requirements have faith in our competitively priced API solutions. Consider the benefits, features, reliability and support provided by us and you will understand that Scriza API is totally worth it.</p>
                  </div>
                </div>
              </div>

              {/* India's #1 Provider */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  India's #1 Bharat Bill Payment System API Provider
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Make us your technology partner and let your business grow exponentially. Scriza technology solutions are rated the best in the industry for the offered benefits of scalability, reliability, affordable and customer support.
                </p>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Choosing us can be immensely beneficial for your payment services business.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <Clock className="h-6 w-6 text-blue-500 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900">Bill payments anytime, anywhere:</h3>
                        <p className="text-gray-600">With our robust biller network you can improve customer satisfaction levels.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <Shield className="h-6 w-6 text-green-500 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900">Accessible bill payment system:</h3>
                        <p className="text-gray-600">We adhere to industry standards to ensure that a secure and accessible bill payment system can be integrated.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <CreditCard className="h-6 w-6 text-purple-500 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900">Multiple payment modes:</h3>
                        <p className="text-gray-600">With our clear and comprehensive documentation, development becomes smoother and integration for multiple payment modes becomes easier.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <DollarSign className="h-6 w-6 text-yellow-500 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900">Highest commission:</h3>
                        <p className="text-gray-600">An array of payment modes enables you to accept payments from a large number of customers and increase your commission earnings.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-700 leading-relaxed mt-6">
                  We bring forth tailored solutions to meet your business requirements for branding or white labelling. Book a demo to learn more about cost optimization.
                </p>
              </div>

              {/* Steps to Use */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Steps to use the integrated bill payment system- BBPS
                </h2>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Comprehensive API documentation made us the preferred choice for robust payment processing integrations. Accepting bill payments becomes easier with our offered API solution. Follow the below steps to seamlessly integrate the robust payment solution.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold">1</div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Registration:</h3>
                      <p className="text-gray-700">Talk to our sales team, register an account and complete the verification process.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-semibold">2</div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">API Integration:</h3>
                      <p className="text-gray-700">Get the API keys and follow the integration guidelines.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center font-semibold">3</div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Access biller:</h3>
                      <p className="text-gray-700">Fetch biller details from the list of API supported billers to initiate bill payment.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-semibold">4</div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Input bill details:</h3>
                      <p className="text-gray-700">Enter the account information to display the bill details of your customers.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-semibold">5</div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Payment processing:</h3>
                      <p className="text-gray-700">Choose a supported payment method and complete the transaction securely.</p>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-700 leading-relaxed mt-6">
                  API integration and payment transactions are very easy and secure at BBPS. For detailed instructions on integrating and using the specific API, book a free demo.
                </p>
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-[#38857a] to-[#FF914C] rounded-2xl p-8 text-white">
                <h2 className="text-3xl font-bold mb-4">How to get Bharat Bill Payment System API Integration?</h2>
                <p className="text-xl text-white/90 mb-4">
                  Scriza brings forth comprehensive and robust documentation for the unified bill payment system. If you need an easily accessible payment service for your business, connect with our sales team right now.
                </p>
                <p className="text-lg text-white/80 mb-6">
                  We are renowned for providing affordable APIs with high-uptime performance. Get in touch to learn more about API solutions that can transform your business.
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
            question: "What is BBPS API?",
            answer: "The BBPS API enables businesses to integrate Bharat Bill Payment System services into their applications, websites, or platforms. It allows customers to pay utility bills (electricity, water, gas, telecom, etc.) securely and instantly through a single standardized API interface, supported by multiple billers and banks."
          },
          {
            question: "Who should use the BBPS API?",
            answer: "Our BBPS API is designed for:Digital payment platformsFintech companiesE-commerce websitesWallet providersBanking appsUtility aggregatorsAny business aiming to offer bill payment services directly to customers"
          },

          {
            question: "What services are supported by BBPS API?",
            answer: "Electricity Bill PaymentWater Bill PaymentGas Bill PaymentLandline & Postpaid Mobile Bill PaymentBroadband & Cable TV Bill PaymentMunicipal Taxes (Property Tax)DTH RechargeOther government and private billers supported by BBPS"
          },
          {
            question: "How does the BBPS API work?",
            answer: "The customer selects the biller and enters consumer details (e.g., account number).The API sends the request to our system.The system processes the request and interacts with operator networks.Instant status (Success, Failure, Pending) is returned to the business in real time.Detailed reports are available for tracking and reconciliation."
          },
          {
            question: "Is the BBPS API secure?",
            answer: "Yes. Security features include:End-to-end encryption (HTTPS)Token-based authentication for API accessCompliance with PCI-DSS and RBI guidelinesRegular audit and fraud detection mechanismsSecure handling of consumer and payment data"
          },
          {
            question: "How fast is the bill payment settlement?",
            answer: "Most payments are processed in real-time.Confirmation is sent instantly via API response or webhook callback.Settlement to the biller happens as per BBPS-defined cycles (typically T+1 working day)."
          },


          {
            question: "What happens if the bill payment fails?",
            answer: "The API returns a specific error code with a detailed reason (e.g., invalid consumer number, network error, insufficient balance).No amount is debited in case of failed payments.You can prompt the customer to retry or correct input details.Failed transactions can be tracked and reconciled via reports."
          },

          {
            question: "Do customers need to provide KYC for using BBPS payments?",
            answer: "No separate KYC is needed from end customers as BBPS itself complies with government and RBI regulations.However, businesses integrating the BBPS API must complete KYC with us, submitting:Company Registration CertificatePAN CardBank Account DetailsAuthorized Signatory Documents"
          },
      ]}
      />

      <Certification />
      <Footer />
      <ChatWidget />
    </div>
  )
}
