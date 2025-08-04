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
  TrendingDown
} from 'lucide-react'

export default function PancardApiPage() {
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
          message: `PAN Card API Demo Request - Selected Option: ${formData.option}`
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

  const businessBenefits = [
    "Easy and faster customer onboarding",
    "Follow the regulatory requirements",
    "Accurate data retrieval", 
    "Prevent potential fraud",
    "Boost trust and credibility"
  ]

  const nsdlBenefits = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Fast and convenient",
      description: "The OTP based verification process allows you to quickly obtain real-time PAN card details. The process saves time and eliminates the need for manual verification processes."
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Accurate and reliable",
      description: "Our API fetches data from the NSDL database to ensure the accuracy and authenticity of the information provided."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Compliant and secure",
      description: "We follow industry-standard security protocols and confirm that user details remain confidential and protected."
    },
    {
      icon: <Gauge className="h-6 w-6" />,
      title: "99.99% uptime",
      description: "The effective onboarding tool is developed with robust API documentation to ensure vast endpoint availability and the highest uptime."
    }
  ]

  const beneficiaries = [
    {
      icon: <Landmark className="h-6 w-6" />,
      title: "Financial Institutions",
      description: "Banks, insurance companies, and other financial institutions that need PAN verification to complete the KYC processes have faith in Scriza."
    },
    {
      icon: <Building2 className="h-6 w-6" />,
      title: "Government Agencies",
      description: "Various departments use our API and validate PAN details for various administrative purposes."
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "Businesses and Employers",
      description: "Want to confirm the authenticity of your potential clients, partners, or employees? Enhance trust and due diligence with our API solutions."
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Fintech Startups",
      description: "We offer affordable and secure PAN verification services to start-ups as well."
    }
  ]

  const apiAdvantages = [
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Easy to Integrate",
      description: "Our robust API can be integrated into your existing platforms or applications. The straightforward process requires the least technical expertise and business can quickly start to use our services."
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Affordable",
      description: "Traditional verification means extensive manual work and higher resource allocation. On the other hand, the API technology eliminates the need for manual efforts and saves costs of onboarding operations."
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "High volume requests",
      description: "The scalable API solution can meet the growing needs of businesses. You can integrate our verification solution without compromising on performance despite the increasing demand of your business."
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Secure and confidential verification",
      description: "We leave no stone unturned to confirm that sensitive information remains confidential and protected during the verification process."
    },
    {
      icon: <UserCheck className="h-6 w-6" />,
      title: "Enhanced User Experience",
      description: "The faster and more accurate verification process works best to improve user experience. Want to build trust with customers and partners? Look no further and connect with us."
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Caters to various industries",
      description: "From finance and healthcare to government departments, the offered API technology is a versatile solution for various verification needs."
    }
  ]

  const steps = [
    "Get API keys",
    "Begin API integration", 
    "Enter PAN card number",
    "Fetch data from the NSDL database",
    "Complete verification in real time"
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header currentPage="pancard-api" />

      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div className="w-full">
          <img 
            src="/Group 1000001996.png" 
            alt="PAN Card Verification API" 
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
                <div className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
                  <a href="/" className="hover:text-[#38857a] transition-colors">Home</a>
                  <span>/</span>
                  <span className="text-[#38857a] font-semibold">PAN card verification API</span>
                </div>
                
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  API for PAN verification and validation
                </h2>
                <p className="text-xl text-[#38857a] font-semibold mb-6">
                  Elevate Your Business with a Real-Time PAN verification and validation process
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Are you struggling with PAN-related business fraud? In this digitally inclined world verification of customers, partners, and employees is essential and equally challenging.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  But not anymore!
                </p>

                <div className="bg-gradient-to-r from-[#38857a]/10 to-[#FF914C]/10 rounded-xl p-6 mb-8">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Building trust and credibility is easier with Scriza's cutting-edge PAN Verification API - a game-changer for seamless and reliable verification.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-[#38857a]" />
                      <span className="text-gray-700">Say goodbye to manual verification processes and welcome swift and error-free verifications.</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-[#38857a]" />
                      <span className="text-gray-700">Make your operations smoother and more secure than ever before.</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-[#38857a]" />
                      <span className="text-gray-700">Boost your business with Scriza's easy to integrate verification API.</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  Don't miss out on the chance to revolutionize your verification process - try Scriza's PAN Verification technology today!
                </p>
              </div>

              {/* What is the use */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  What is the use of PAN Card Verification API?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  PAN (Permanent Account Number) is a unique alphanumeric code issued by the Indian government to every taxpayer. Organizations can confirm the legitimacy of their customers through PAN card verification. Confirming that the user is a valid PAN holder verifies their authenticity.
                </p>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Our verification API seamlessly integrates into your existing applications or systems for smooth and efficient authentication. By integrating this API businesses can
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {businessBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-[#38857a]" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why use NSDL API */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Why use NSDL API for PAN verification?
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {nsdlBenefits.map((benefit, index) => (
                    <div key={index} className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white">
                          {benefit.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">{benefit.title}</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Who can benefit */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Who can benefit from our PAN verification API?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-8">
                  The game-changing verification technology is helping a long list of satisfied clients. This includes the following entities:
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

              {/* Benefits over traditional methods */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  What are the benefits of our PAN Validation API over traditional verification methods?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Scriza becomes the most preferred choice for verification and validation processes because of the following benefits of our API technology.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {apiAdvantages.map((advantage, index) => (
                    <div key={index} className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white">
                          {advantage.icon}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">{advantage.title}</h3>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{advantage.description}</p>
                    </div>
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed">
                  Our offered API is fast, accurate, and secure. It gives you a competitive edge and elevates overall operational efficiency. So don't wait anymore and unlock the full potential of verification methods
                </p>
              </div>

              {/* How to get started */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  How to get started with NSDL PAN verification API?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Whether you need occasional verifications or high-volume requests, we have a robust API designed to accommodate your unique requirements.
                </p>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Getting started with our verification API is easy. Simply reach out to our team, and get insights into the API integration process. You can start the verification and validation process with a little investment and scale up as your business grows. Following are the easy steps to get started with our verification technology:
                </p>
                
                <div className="grid md:grid-cols-5 gap-4 mb-8">
                  {steps.map((step, index) => (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center mx-auto mb-3 text-white font-bold">
                        {index + 1}
                      </div>
                      <p className="text-sm text-gray-700 font-medium">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-[#38857a] to-[#FF914C] rounded-2xl p-8 text-white">
                <h2 className="text-3xl font-bold mb-4">Connect now</h2>
                <p className="text-lg text-white/90 mb-6">
                  Still struggling with a manual and expensive verification process? Upgrade today and experience speed, accuracy, and security with our advanced PAN Validation API.
                </p>
                <p className="text-white/90 mb-6">
                  Get started now!
                </p>
                <Button 
                  size="lg" 
                  className="bg-white text-[#38857a] hover:bg-white/90"
                  onClick={() => document.getElementById('demo-section')?.scrollIntoView({behavior: 'smooth'})}
                >
                  Get Started Now
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
