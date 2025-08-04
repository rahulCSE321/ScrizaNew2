'use client'

import { Button } from '@/components/ui/button'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ChatWidget from '@/components/ChatWidget'
import DemoBookingForm from '@/components/DemoBookingForm'
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
  RefreshCw,
  Car,
  Vote,
  ArrowRight,
  Star,
  Target,
  Calendar,
  Megaphone,
  AlertCircle,
  ShieldAlert
} from 'lucide-react'

export default function SMSAPIPage() {
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
          message: `SMS API Demo Request - Selected Option: ${formData.option}`
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

  const apiFeatures = [
    "High Volume Messaging",
    "Two-Way Messaging", 
    "OTP & Verification",
    "Marketing Campaigns",
    "Real-time Notifications",
    "Appointment Reminders",
    "Transaction Alerts",
    "24/7 Support"
  ]

  const performanceStats = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Over 10M messages per hour",
      description: "Handle millions of transactions effortlessly with our scalable infrastructure. Our API grows with your business and supports bulk messaging. It is capable of processing over 10 million messages per hour without compromising on performance.",
      stat: "10M+",
      label: "Messages/Hour"
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "90% response rates within minutes",
      description: "Engage in meaningful conversations with your customers through our SMS API. It offers seamless two-way messaging capabilities for better customer interaction and satisfaction.",
      stat: "90%",
      label: "Response Rate"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Secure API with 99.99% uptime",
      description: "Protect your data with industry-leading security protocols. Every message is encrypted and delivered safely. We maintain the highest standards of privacy and compliance.",
      stat: "99.99%",
      label: "Uptime"
    }
  ]

  const smsUseCases = [
    {
      icon: <ShieldCheck className="h-8 w-8" />,
      title: "Verification Messages",
      description: "Instantly verify user identities with one-time passwords OTPs and secure authentication codes.",
      features: ["OTP Generation", "Secure Authentication", "Identity Verification", "Real-time Delivery"]
    },
    {
      icon: <Megaphone className="h-8 w-8" />,
      title: "Marketing Campaigns",
      description: "Increase your sales with targeted promotional messages about discounts.",
      features: ["Targeted Messaging", "Promotional Offers", "Sales Boost", "Campaign Analytics"]
    },
    {
      icon: <Bell className="h-8 w-8" />,
      title: "Notifications",
      description: "Keep your customers informed with timely notifications about order updates and service alerts.",
      features: ["Order Updates", "Service Alerts", "Real-time Info", "Customer Engagement"]
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Appointment Reminders",
      description: "Send automated confirmations to reduce no shows.",
      features: ["Automated Reminders", "Reduce No-shows", "Appointment Confirmations", "Scheduling Integration"]
    },
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: "Transactional Messages",
      description: "Provide real time transaction details for impressive customer interaction.",
      features: ["Transaction Details", "Real-time Updates", "Payment Confirmations", "Account Alerts"]
    },
    {
      icon: <Headphones className="h-8 w-8" />,
      title: "Customer Support",
      description: "Make your customer service better with real-time support and assistance through SMS. API resolves queries quickly and efficiently.",
      features: ["Real-time Support", "Quick Resolution", "Query Management", "Customer Satisfaction"]
    }
  ]

  const apiAdvantages = [
    {
      icon: <Timer className="h-6 w-6" />,
      title: "Reduced integration time by 50%",
      description: "Enjoy quick setup all because of the clear, detailed and up-to-date documentation we provide. Clients will get examples, use cases, and troubleshooting tips which makes integration easy."
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Consistent and Intuitive Design",
      description: "A well-organized and logical structure that follows consistent naming conventions and patterns. Easy to learn and use with a learning curve reduced by 40%."
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Decrease debugging time by 30%",
      description: "Clear and informative error messages and status codes that help developers quickly identify and resolve issues."
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: "24/7 Comprehensive Support",
      description: "Access to responsive customer support, community forums, and other resources to assist developers with the fastest response time."
    },
    {
      icon: <RefreshCw className="h-6 w-6" />,
      title: "Clear Versioning and Deprecation Policies",
      description: "We provide proper notifications and support for legacy versions to avoid breaking existing implementations. We ensure smooth transitions and minimize downtime by 80%."
    }
  ]

  const pricingBenefits = [
    "Attractive pricing that stays within your budget limits",
    "No hidden costs or unexpected charges",
    "Scale your messaging efforts as your business grows, with flexible pricing options",
    "Invest as you go, with the flexibility to adjust usage based on your needs",
    "Customizable plans to match specific business requirements and usage patterns"
  ]

  const whyChooseUs = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Response time of less than 1 hour",
      description: "Enjoy rapid resolution of any issues or queries."
    },
    {
      icon: <BadgeCheck className="h-6 w-6" />,
      title: "99.9% compliance with industry standards",
      description: "Our API adheres to strict data protection regulations such as GDPR and CCPA."
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: "Latest Infrastructure",
      description: "Our scalable infrastructure handles over 10 million messages per hour. We promise 99.99% uptime for reliable messaging."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Implementation becomes 50% faster",
      description: "Our user-friendly interface simplifies integration and operation. Choose us for better user experience with straightforward navigation and comprehensive documentation."
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header currentPage="sms-api" />

      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div className="w-full">
          <img 
            src="/sms-api-hero.png" 
            alt="SMS API Provider Solutions" 
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
                  Most Affordable SMS API Provider
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  Send and receive text messages with the best global coverage
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Make Scriza your SMS API provider to meet the demands of high volume messaging. We provide fast, secure and reliable messaging technology. Sends thousands or millions of messages our API reaches every destination swiftly and securely.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Enhance your communication strategy. Schedule a free demo right now to experience the power of instant, secure and high-volume messaging.
                </p>

                <div className="grid md:grid-cols-4 gap-4 mb-8">
                  {apiFeatures.map((feature, index) => (
                    <div key={index} className="bg-gradient-to-r from-[#38857a]/10 to-[#FF914C]/10 rounded-lg p-3 text-center">
                      <span className="text-sm font-medium text-gray-800">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-[#38857a]/10 to-[#FF914C]/10 rounded-xl p-6 mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">SMS API with best in class performance standards</h4>
                  <p className="text-gray-700 text-sm">
                    Our offered API solutions come with exceptional uptime and scalability. Choose Scriza API to support the dynamic requirements of your business.
                  </p>
                </div>
              </div>

              {/* Performance Stats */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="space-y-8">
                  {performanceStats.map((stat, index) => (
                    <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                      <div className="grid md:grid-cols-3 gap-6 items-center">
                        <div className="text-center">
                          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white mx-auto mb-4">
                            {stat.icon}
                          </div>
                          <div className="text-3xl font-bold text-[#38857a] mb-1">{stat.stat}</div>
                          <div className="text-sm text-gray-600">{stat.label}</div>
                        </div>
                        <div className="md:col-span-2 space-y-4">
                          <h3 className="text-xl font-semibold text-gray-900">{stat.title}</h3>
                          <p className="text-gray-600 leading-relaxed">{stat.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* SMS Use Cases */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Grow with the best SMS API service provider
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  Achieve best in class message delivery experience with the best prices in the industry
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {smsUseCases.map((useCase, index) => (
                    <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                      <div className="space-y-4">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white flex-shrink-0">
                            {useCase.icon}
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900">{useCase.title}</h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed text-sm">{useCase.description}</p>
                        <div className="grid grid-cols-2 gap-2">
                          {useCase.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <CheckCircle className="h-3 w-3 text-[#38857a]" />
                              <span className="text-xs text-gray-600">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Easy to Use API */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Easy to use text message API
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Our developer friendly API solutions are extremely easy to use. Investment in this ready to use solution is worthwhile. Schedule a free demo right now.
                </p>
                
                <div className="space-y-6">
                  {apiAdvantages.map((advantage, index) => (
                    <div key={index} className="border-l-4 border-[#38857a] pl-6 py-4">
                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 rounded-lg bg-[#38857a]/10 flex items-center justify-center text-[#38857a] flex-shrink-0">
                          {advantage.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">{advantage.title}</h3>
                          <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bulk SMS API */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Bulk SMS API built just for you
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Even if you operate a small startup or a large enterprise, our API is crafted to meet your messaging needs the right way. We understand that every business deserves access to reliable communication tools in budget. Therefore our solution is priced competitively to accommodate budgets of all sizes. We are empowering 1000+ clients from retail and healthcare to hospitality and education with our API. Connect with customers, streamline operations and boost engagement effortlessly.
                </p>

                <div className="bg-gradient-to-r from-[#38857a]/10 to-[#FF914C]/10 rounded-xl p-6 mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Pricing Benefits</h4>
                  <div className="space-y-3">
                    {pricingBenefits.map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-[#38857a]" />
                        <span className="text-gray-700 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed">
                  Send promotional offers to customers in retail, appointment reminders in healthcare, book confirmations in hospitality, or notifications in education, our Bulk SMS API is reliable. Want to experience the cost-effective communication solution? Schedule a free demo to learn more about how it enhances your outreach capabilities and drives business success.
                </p>
              </div>

              {/* Why Choose Us */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Benefits of choosing the 5-star rated bulk SMS service provider API
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Thousands of clients from diverse industries have faith in us because they enjoy dedicated customer support with rapid response times. Choose us if you also want scalability and uninterrupted service during peak times.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  {whyChooseUs.map((reason, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 border border-gray-200 rounded-lg">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white flex-shrink-0">
                        {reason.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{reason.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{reason.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Getting Started Steps */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Get started with our feature-rich API in just three simple steps
                </h2>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-6 border border-gray-200 rounded-xl">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#38857a] to-[#FF914C] text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                      1
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Sign Up</h3>
                    <p className="text-gray-600 text-sm">Create your account quickly and easily on our platform to gain immediate access to our powerful API services.</p>
                  </div>
                  
                  <div className="text-center p-6 border border-gray-200 rounded-xl">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#38857a] to-[#FF914C] text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                      2
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Integrate</h3>
                    <p className="text-gray-600 text-sm">Use our comprehensive documentation and developer-friendly guides to seamlessly integrate our API into your existing systems or applications.</p>
                  </div>
                  
                  <div className="text-center p-6 border border-gray-200 rounded-xl">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#38857a] to-[#FF914C] text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                      3
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Start Sending</h3>
                    <p className="text-gray-600 text-sm">Begin sending messages instantly! Our API is ready to meet your messaging needs for promotional campaigns, transactional alerts or customer notifications.</p>
                  </div>
                </div>
              </div>

              {/* Final CTA */}
              <div className="bg-gradient-to-r from-[#38857a] to-[#FF914C] rounded-2xl p-8 text-white">
                <h2 className="text-3xl font-bold mb-4">Connect with the best messaging API provider</h2>
                <p className="text-lg text-white/90 mb-6">
                  Take your messaging capabilities to the next level with our advanced API solutions
                </p>
                <p className="text-white/90 mb-6">
                  Sign up now and start sending high volume messages in just minutes! Empower your business with reliable, scalable, and feature-rich messaging API. Don't miss out on better customer outreach and driving business success. Get started today and see the API difference!
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-white text-[#38857a] hover:bg-white/90"
                    onClick={() => document.getElementById('demo-section')?.scrollIntoView({behavior: 'smooth'})}
                  >
                    Schedule Free Demo
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-white text-white hover:bg-white/10"
                  >
                    Start Now
                    <Zap className="ml-2 h-5 w-5" />
                  </Button>
                </div>
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