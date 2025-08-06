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
  ShieldAlert,
  MessageCircle,
  Bot,
  Sparkles,
  BarChart2,
  MousePointer,
  Link,
  Award,
  Square
} from 'lucide-react'

export default function WhatsAppAPIPage() {
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
          message: `WhatsApp API Demo Request - Selected Option: ${formData.option}`
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

  const whatsappFeatures = [
    "Automated Responses",
    "Personalized Notifications", 
    "Real-time Communication",
    "Global Outreach",
    "Message Templates",
    "Business Verification",
    "Customer Support",
    "Marketing Campaigns"
  ]

  const keyBenefits = [
    "Automate more than 80% of your customer questions",
    "Serve a global audience across 180 countries",
    "Connect directly and increase engagement rates by 50%",
    "Streamline communication with over 10 message templates"
  ]

  const performanceStats = [
    {
      icon: <Bot className="h-8 w-8" />,
      title: "Reduce customer support costs by 30%",
      description: "Let API enabled automated responses handle a large volume of inquiries on its own.",
      stat: "30%",
      label: "Cost Reduction"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Increase more than 25% in sales",
      description: "Enjoy increased conversions better sales with API features of personalized messaging.",
      stat: "25%",
      label: "Sales Increase"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Handle over 10000 messages per second",
      description: "With our scalable solutions, no need to compromise quality with growing customer demands.",
      stat: "10K+",
      label: "Messages/Second"
    },
    {
      icon: <BarChart2 className="h-8 w-8" />,
      title: "Get higher returns on investment",
      description: "Get insights about message delivery rates and open rates to refine your marketing campaigns.",
      stat: "ROI",
      label: "Maximized"
    }
  ]

  const pricingCategories = [
    {
      icon: <Settings className="h-8 w-8" />,
      title: "One-Time Setup and Onboarding Fee",
      description: "This fee is a one-time charge for setting up your WhatsApp Business Account along with the onboarding process.",
      type: "Setup"
    },
    {
      icon: <RefreshCw className="h-8 w-8" />,
      title: "Monthly Maintenance Fee",
      description: "Ensure seamless operation with ongoing maintenance for your WhatsApp Business API integration.",
      type: "Maintenance"
    },
    {
      icon: <Send className="h-8 w-8" />,
      title: "Business-Initiated Conversations",
      description: "This may include notifications, alerts and reminders related to post-purchase activities. So enjoy effective customer engagement with affordable messaging.",
      categories: ["Marketing", "Utility", "Authentication"]
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: "User-Initiated Conversations",
      description: "These messages cover customer support queries and inquiries initiated by individuals or entities with your business. There are flexible pricing plans for these based on per instance and per exchanged post.",
      type: "Support"
    }
  ]

  const apiFeatures = [
    {
      icon: <MousePointer className="h-8 w-8" />,
      title: "Interactive Buttons and Quick Replies",
      description: "We focus on customer experiences so you can create templates to navigate menus. When customers can make selections they interact with your business seamlessly.",
      features: ["Template Creation", "Menu Navigation", "Customer Selection", "Seamless Interaction"]
    },
    {
      icon: <Tv className="h-8 w-8" />,
      title: "Broadcast Capabilities",
      description: "Reach a large audience at once with broadcast messaging. It is ideal for announcements, promotions and updates without sending individual messages.",
      features: ["Mass Messaging", "Announcements", "Promotions", "Bulk Updates"]
    },
    {
      icon: <Link className="h-8 w-8" />,
      title: "Integration Flexibility",
      description: "Seamlessly integrate with CRM systems, customer databases and other business tools. Reduce workflow errors with better data management capabilities.",
      features: ["CRM Integration", "Database Connection", "Business Tools", "Data Management"]
    },
    {
      icon: <ShieldCheck className="h-8 w-8" />,
      title: "Security and Compliance",
      description: "Match the criteria of GDPR and other regulations with our API. Rest assured because we use end-to-end encryption for secure customer communications.",
      features: ["GDPR Compliance", "End-to-End Encryption", "Data Protection", "Secure Communications"]
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "24/7 Availability",
      description: "Provide round-the-clock customer support and engagement with automated responses and messaging. Make your business is accessible whenever customers need assistance.",
      features: ["Round-the-Clock Support", "Automated Responses", "Always Accessible", "Customer Assistance"]
    }
  ]

  const apiRequirements = [
    {
      icon: <BadgeCheck className="h-6 w-6" />,
      title: "Business Verification",
      description: "Ensure your business is verified by WhatsApp to use the API for commercial purposes."
    },
    {
      icon: <Key className="h-6 w-6" />,
      title: "API Access",
      description: "Obtain access to the WhatsApp Business API through an authorized provider."
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Message Templates",
      description: "Create and use approved message templates for outbound communications."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Security Protocols",
      description: "Implement end-to-end encryption to protect user details"
    },
    {
      icon: <Square className="h-6 w-6" />,
      title: "Compliance",
      description: "Adhere to WhatsApp policies for data protection regulations."
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Integration Capability",
      description: "Make sure the API and your current CRM system are compatible"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header currentPage="whatsapp-api" />

      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div className="w-full">
          <img 
            src="/whatsapp-api-hero.png" 
            alt="WhatsApp API Solutions" 
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
                  Get future ready WhatsApp API
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  Industry's most trusted, fast and robust API for direct communication
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Scriza brings for the most sought after WhatsApp API with amazing features like automated responses and personalized notifications. Enjoy real time communication along with efficient customer service only with our API solution. Schedule a free demo of enjoy a global outreach with our future ready API technology.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Jump onboard with Scriza and be ready where your customers are already present.
                </p>

                <div className="grid md:grid-cols-4 gap-4 mb-8">
                  {whatsappFeatures.map((feature, index) => (
                    <div key={index} className="bg-gradient-to-r from-[#38857a]/10 to-[#FF914C]/10 rounded-lg p-3 text-center">
                      <span className="text-sm font-medium text-gray-800">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-[#38857a]/10 to-[#FF914C]/10 rounded-xl p-6 mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Benefits</h4>
                  <div className="space-y-3">
                    {keyBenefits.map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-[#38857a]" />
                        <span className="text-gray-700 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* WhatsApp Business API Benefits */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Join the conversation with WhatsApp Business API
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Level up your customer communication game with a reliable API solution. Plug into our messaging API to provide quick support to your customers. More than 70% customers rely on WhatsApp chat support so leverage our automated messaging feature to serve them right.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  The WhatsApp Business API offers businesses a great medium to streamline customer communication and enjoy cost efficiencies. Our API can boost profitability as you reduce operational costs associated with traditional customer support methods. At the same time you can maximize revenue through enhanced engagement and targeted marketing efforts.
                </p>

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

                <div className="mt-8 p-6 bg-gradient-to-r from-[#38857a]/10 to-[#FF914C]/10 rounded-xl">
                  <p className="text-gray-700 leading-relaxed">
                    Profitability is all about how well you connect with your audience. Make your business run smoother with our API technology designed just for you. Schedule a free demo today.
                  </p>
                </div>
              </div>

              {/* Pricing Section */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  WhatsApp API pricing with no hidden costs
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Explore our pricing options and start connecting with your customers on WhatsApp today!
                </p>
                
                <div className="space-y-6">
                  {pricingCategories.map((category, index) => (
                    <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white flex-shrink-0">
                          {category.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-gray-900 mb-3">{category.title}</h3>
                          <p className="text-gray-600 leading-relaxed mb-4">{category.description}</p>
                          {category.categories && (
                            <div className="flex flex-wrap gap-2">
                              {category.categories.map((cat, idx) => (
                                <span key={idx} className="px-3 py-1 bg-[#38857a]/10 text-[#38857a] rounded-full text-sm font-medium">
                                  {cat}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Note:</strong> All charges are exclusive of taxation. For the most up-to-date and applicable pricing details, please contact our sales department.
                  </p>
                </div>
              </div>

              {/* API Features */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Best WhatsApp API features your brand needs
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  We have 10+ years of expertise in providing API technology. With our solutions businesses to deliver exceptional customer service, and improve operational efficiency. Take a look at the snippet of API features that build stronger brands.
                </p>
                
                <div className="space-y-8">
                  {apiFeatures.map((feature, index) => (
                    <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white flex-shrink-0">
                              {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                          </div>
                          <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                          <div className="grid grid-cols-2 gap-2">
                            {feature.features.map((item, idx) => (
                              <div key={idx} className="flex items-center space-x-2">
                                <CheckCircle className="h-3 w-3 text-[#38857a]" />
                                <span className="text-xs text-gray-600">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="flex items-center justify-center">
                          <div className="w-48 h-48 bg-gradient-to-br from-[#38857a]/10 to-[#FF914C]/10 rounded-2xl flex items-center justify-center">
                            <div className="text-6xl text-[#38857a]/20">
                              {feature.icon}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* API Requirements */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Minimum API Requirements: With the Right WhatsApp API Solution Provider
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  API technology can effectively enhance business operations due to its capabilities for smooth customer communication. With Scriza you need to meet only the key requirements and you are good to go.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {apiRequirements.map((requirement, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 border border-gray-200 rounded-lg">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white flex-shrink-0">
                        {requirement.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{requirement.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{requirement.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Setup Process */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Setting up your WhatsApp API made easy
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Over 100 clients trust us to enhance customer engagement through WhatsApp messaging
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Scriza API solutions are designed to fit your preferences. We can help you set up your business account through which you customize your profile. Our experts can also offer assistance with API integration. The plugin solution is very easy to integrate with your existing system. Later you need training for your team so that everyone onboard can effectively use the API.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  You can even monitor performance of the API based on the analytics. With these steps, you'll be ready to provide top-notch customer service and engagement through WhatsApp. Schedule a demo to enhance your business's reach and efficiency in no time.
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-6 border border-gray-200 rounded-xl">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#38857a] to-[#FF914C] text-white flex items-center justify-center mx-auto mb-4">
                      <Settings className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Setup & Profile</h3>
                    <p className="text-gray-600 text-sm">Business account setup and profile customization with expert assistance.</p>
                  </div>
                  
                  <div className="text-center p-6 border border-gray-200 rounded-xl">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#38857a] to-[#FF914C] text-white flex items-center justify-center mx-auto mb-4">
                      <Code className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">API Integration</h3>
                    <p className="text-gray-600 text-sm">Easy plugin integration with your existing systems and comprehensive training.</p>
                  </div>
                  
                  <div className="text-center p-6 border border-gray-200 rounded-xl">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#38857a] to-[#FF914C] text-white flex items-center justify-center mx-auto mb-4">
                      <BarChart2 className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Monitor & Analytics</h3>
                    <p className="text-gray-600 text-sm">Performance monitoring and analytics to optimize your WhatsApp engagement.</p>
                  </div>
                </div>
              </div>

              {/* Final CTA */}
              <div className="bg-gradient-to-r from-[#38857a] to-[#FF914C] rounded-2xl p-8 text-white">
                <h2 className="text-3xl font-bold mb-4">Find Your Trusted WhatsApp Business API Solution Provider Today!</h2>
                <p className="text-lg text-white/90 mb-6">
                  It is time to change your engagement strategies for those millions of potential customers on WhatsApp.
                </p>
                <p className="text-white/90 mb-6">
                  Choose Scriza you reliable WhatsApp Business API solution provider to boost profitability. With our future ready API solution you can transform your customer interactions. Contact us now to get started!
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
                    Contact Now
                    <MessageCircle className="ml-2 h-5 w-5" />
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

      <Certification />
      <Footer />    
      <ChatWidget />
    </div>
  )
}