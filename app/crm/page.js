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
  Target,
  Briefcase,
  BarChart3,
  MessageCircle,
  Calendar,
  UserPlus,
  PhoneCall,
  Mail,
  Search,
  Filter,
  Bell,
  PieChart,
  LineChart,
  Activity,
  Handshake,
  DollarSign,
  Clock3,
  AlertCircle,
  Eye,
  Settings,
  Lightbulb,
  Heart,
  TrendingDown,
  Calculator,
  Gauge,
  Layers
} from 'lucide-react'

export default function CrmPage() {
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
          message: `CRM Management Software Demo Request - Selected Option: ${formData.option}`
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

  const businessChallenges = [
    "Disorganized Customer Data",
    "Missed Sales Opportunities due to lack of follow-ups",
    "Inefficient Communication with the customers", 
    "Time-Consuming Manual Tasks",
    "Poor Lead Management",
    "Limited Marketing Effectiveness"
  ]

  const investmentBenefits = [
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Increase in sales",
      description: "Our small business CRM software gets you 30% higher sales right after the first six months of deployment."
    },
    {
      icon: <UserPlus className="h-6 w-6" />,
      title: "Hassle free Lead management",
      description: "Our CRM helps manage leads 40% more efficiently, reducing the time spent on manual data entry and follow-ups."
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Customer retention",
      description: "Companies see a 20% improvement in customer retention, thanks to our effective customer management system."
    }
  ]

  const crmFeatures = [
    {
      icon: <Bell className="h-6 w-6" />,
      title: "No more manual follow ups",
      description: "Automatically remind your team to follow up with leads and customers at the right time. You can even send personalized follow up emails based on customer interactions."
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Generate customer profiles",
      description: "Store all customer information in one place with their contact details, purchase history and interaction logs. Tailor customer profiles to include information specific to your business needs."
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Easy data monitoring",
      description: "Generate detailed reports on sales activities, conversion rates, and revenue. Analyze customer behavior to identify opportunities for upselling as well as cross selling."
    }
  ]

  const serviceBusinessTypes = [
    "Consulting services",
    "IT services",
    "Healthcare practices",
    "Legal firms", 
    "Maintenance services"
  ]

  const b2bBenefits = [
    "Decrease operational costs by up to 20% with reduced administrative overhead",
    "15% less errors in customer orders and communications with fewer service issues",
    "Save 10 hours per employee per week on manual data entry",
    "Increase profitability by 25% through better customer holding",
    "Achieve 30% faster response times to customer inquiries"
  ]

  const advancedFeatures = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Manage up to 150 leads",
      description: "Easily track leads from multiple sources. Assign the captured leads to sales reps. Get features to monitor their progress through the sales funnel."
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Customer reports",
      description: "Get a 360 degree view of your customers profiles. CRM gives you access to their contact information, purchase history and interaction logs."
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Automation",
      description: "Save time on repetitive tasks like follow up emails and appointment scheduling. Our CRM also gives you task reminders to keep your sales process moving smoothly."
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Marketing tools",
      description: "Integrate your CRM with marketing tools to run targeted campaigns. You can manage the campaigns to get more leads."
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Customer help",
      description: "Manage customer inquiries to ensure quick resolution for high customer satisfaction."
    },
    {
      icon: <Activity className="h-6 w-6" />,
      title: "Analytics",
      description: "Sales performance report generation is very easy with our CRM. You get key metrics for customer behavior to help you make the correct business decisions."
    }
  ]

  const benefits = [
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Happy customers",
      description: "Personalized interactions and timely follow-ups lead to better customer experiences and higher satisfaction rates."
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Increased Sales",
      description: "Our CRM helps you close more deals. It gives you the right tools to manage leads as well as track sales activities."
    },
    {
      icon: <AlertCircle className="h-6 w-6" />,
      title: "No more costly mistakes",
      description: "Get access to detailed reports to make growth driven business decisions."
    },
    {
      icon: <Layers className="h-6 w-6" />,
      title: "CRM grows with your business",
      description: "Get the tools you need to manage an expanding customer base and increased sales volume."
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header currentPage="crm" />

      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div className="w-full">
          <img 
            src="/CRM.png" 
            alt="CRM" 
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
                  The Best CRM for small business
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  Sales, leads or opportunities manage everything with our bespoke CRM
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Small businesses are hardly surviving in this competitive market. Their endurance majorly depends on effective customer relationship management. So get a CRM right now if your small business is struggling with
                </p>
                
                <div className="space-y-3 mb-8">
                  {businessChallenges.map((challenge, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <AlertCircle className="h-5 w-5 text-red-500" />
                      <span className="text-gray-700">{challenge}</span>
                    </div>
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed">
                  You have to have the right CRM to manage leads, customer relationships as well as driving sales. Scriza leverages its 15+ years of experience in CRM software development. Our team designs the best CRM for small business with robust features. Get a quote for our easy to use CRM that can scale with your growth.
                </p>
              </div>

              {/* Why CRM Investment */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Why CRM for Small Businesses is a worthwhile investment?
                </h2>
                
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  {investmentBenefits.map((benefit, index) => (
                    <div key={index} className="space-y-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white">
                        {benefit.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">{benefit.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                    </div>
                  ))}
                </div>

                <div className="p-6 bg-gradient-to-r from-[#38857a]/10 to-[#FF914C]/10 rounded-xl">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Schedule a free demo to see how our CRM software can modernize your business operations.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Experience the benefits of a system designed for your exact business needs. Join our list of satisfied clientele using technology to stay ahead of the competition.
                  </p>
                </div>
              </div>

              {/* All in One CRM */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  The All in One CRM software for small businesses
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Perfect management of customer relationships is often a challenge for small businesses. Do not let your limited resources be the reason behind your failure. Our CRM for small businesses is tailored to meet these unique difficulties. We give you the all in one solution for your business operations.
                </p>
                
                <div className="space-y-8 mb-8">
                  {crmFeatures.map((feature, index) => (
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

                <p className="text-gray-700 leading-relaxed">
                  These features ensure that no lead falls through the crack. Make every customer feel valued with our feature rich CRM technology.
                </p>
              </div>

              {/* CRM for Service Business */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  CRM for Service Business
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Handle the complexities of client interactions and service delivery with ease
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Our CRM for service businesses offers specialized tools to manage appointments, track service requests and ensure timely follow-ups. These CRM solutions are particularly beneficial for
                </p>
                
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {serviceBusinessTypes.map((type, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-[#38857a]" />
                      <span className="text-gray-700">{type}</span>
                    </div>
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed">
                  Make your service business more efficient with our CRM technology. You can provide better customer service and ultimately grow your client base.
                </p>
              </div>

              {/* B2B CRM Solutions */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  B2B CRM Solutions
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  We exactly understand the unique CRM needs of B2B businesses. This is why we developed CRM software that can manage longer sales cycles and multiple stakeholders. Our B2B CRM solutions are designed to help you track interactions with potential clients.
                </p>
                <p className="text-gray-700 leading-relaxed mb-8">
                  50+ B2B brands are managing their sales pipelines with our CRM and attaining the following benefits.
                </p>
                
                <div className="space-y-3 mb-8">
                  {b2bBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-[#38857a] mt-0.5" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed">
                  B2B companies can improve their lead conversion rates with our CRM. Get in touch right now if you want to build stronger relationships with your clients too.
                </p>
              </div>

              {/* Advanced CRM Management */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Advanced CRM Management Software
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Our advanced CRM management software goes beyond basic CRM functionalities to offer a comprehensive suite of tools. Our CRM management software are tailor made which means you pick the features you needs the most for an efficient business.
                </p>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Key Features of Our CRM Management Software
                </h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {advancedFeatures.map((feature, index) => (
                    <div key={index} className="space-y-4">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white flex-shrink-0">
                          {feature.icon}
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                          <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Benefits of investing in bespoke customer management system by Scriza
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="space-y-4">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white flex-shrink-0">
                          {benefit.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                          <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Get Started CTA */}
              <div className="bg-gradient-to-r from-[#38857a] to-[#FF914C] rounded-2xl p-8 text-white">
                <h2 className="text-3xl font-bold mb-4">Get Started Today</h2>
                <p className="text-lg text-white/90 mb-6">
                  Choose the right CRM to cut down on errors. With Scriza you can save on operational costs and save hours on admin tasks.
                </p>
                <p className="text-white/90 mb-6">
                  Let us help you improve your sales!!
                </p>
                <p className="text-white/90 mb-6">
                  Contact us now to request a demo and explore the benefits of our CRM software for small businesses.
                </p>
                <Button 
                  size="lg" 
                  className="bg-white text-[#38857a] hover:bg-white/90"
                  onClick={() => document.getElementById('demo-section')?.scrollIntoView({behavior: 'smooth'})}
                >
                  Request Demo
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
