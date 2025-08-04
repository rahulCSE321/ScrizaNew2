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
  Calendar,
  Home,
  FileText,
  UserCheck,
  Bed,
  DollarSign,
  Monitor,
  Wifi,
  Bell,
  Languages
} from 'lucide-react'

export default function HotelManagementSoftwarePage() {
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
          message: `Hotel Management Software Demo Request - Selected Option: ${formData.option}`
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

  const managementTasks = [
    "Reservations",
    "Hotel Billing", 
    "Reporting and More"
  ]

  const pmsUses = [
    "Handling reservations becomes easier",
    "Reduce manual errors in check-ins and check-outs",
    "Manage guest profiles like a pro",
    "Improve guest experience with personalizations",
    "Business benefits of real time reporting and analytics"
  ]

  const softwareFeatures = [
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Booking management",
      description: "Presenting the added functionality of hassle-free booking direct from the website. Further, the software integration allows efficient management of reservations, room assignments and room availability."
    },
    {
      icon: <Bed className="h-6 w-6" />,
      title: "Housekeeping",
      description: "Track the assigned tasks and maintain cleanliness with total accountability. Streamlined housekeeping with just one click turns out to be the game changer"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Guest management",
      description: "Achieve the goals of superior service with the guest profile management functionality that hosts powerful features for personalization, communication and more."
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Accounting",
      description: "No matter how small or big your hotel is, financial tasks can be simplified with our high-end technology. Tracking expenses and generating invoices becomes error-free with our software."
    },
    {
      icon: <Monitor className="h-6 w-6" />,
      title: "Hotel CMS",
      description: "It gives you the power to take control of the website content. Manage bookings or update hotel information easily with the highly secure and easy to use CMS software."
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Channel Manager",
      description: "Manage resort availability across multiple channels with the channel integration functionality. It is the best feature to increase your online visibility and revenue."
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile App",
      description: "Access hotel data in real time and make informed decisions in a timely manner. We provide a robust, high performing and responsive mobile app for effortless functionality."
    },
    {
      icon: <Wifi className="h-6 w-6" />,
      title: "API Integration",
      description: "Integrations are available for POS systems and accounting functionality. Truly Scriza software comes with game-changing functionalities."
    }
  ]

  const keyFeatures = [
    "Combination of technology and cloud based platforms",
    "Secure and scalable solutions for all sizes of hotels/resorts", 
    "PCI DSS, audit and data protection compliance",
    "OTA commission management feature",
    "User-friendly dashboard and smart search features",
    "Automated reminders and report generation"
  ]

  const whyChooseUs = [
    "User-friendly software with interactive features",
    "No one-size fits all approach",
    "Flexible packages and an affordable price range",
    "Dedicated project manager",
    "Guaranteed timely delivery",
    "High-end and secure software technology",
    "After sales support and 24/7 availability"
  ]

  const mobileAppFeatures = [
    {
      icon: <UserCheck className="h-5 w-5" />,
      title: "Virtual concierge feature for recommendations"
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Quick mobile check-in and checkout"
    },
    {
      icon: <CreditCard className="h-5 w-5" />,
      title: "Mobile payments"
    },
    {
      icon: <Star className="h-5 w-5" />,
      title: "Loyalty programs"
    },
    {
      icon: <Bell className="h-5 w-5" />,
      title: "Real-time notifications"
    },
    {
      icon: <Languages className="h-5 w-5" />,
      title: "Multi language support"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header currentPage="hotel-management" />

      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div className="w-full">
          <img 
            src="/Group 1000001993.png" 
            alt="Hotel Management Software" 
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
                  Hotel Management Software
                </h2>
                <p className="text-xl text-[#38857a] font-semibold mb-6">
                  Do you want to keep your resort running smoothly?
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Juggling multiple tasks and paperwork can be tackled easily with our high-tech hotel management technology.
                </p>

                <div className="bg-gradient-to-r from-[#38857a]/10 to-[#FF914C]/10 rounded-xl p-6 mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Scriza offers a one-click operation for managing tasks like
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    {managementTasks.map((task, index) => (
                      <div key={index} className="flex items-center space-x-3 bg-white rounded-lg p-3">
                        <div className="w-8 h-8 rounded-full bg-[#38857a] flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 text-white" />
                        </div>
                        <span className="font-medium text-gray-800">{task}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  So far, the Scriza advantage has been obtained by 500+ hoteliers. What are you waiting for? Connect with us and get the one-stop online hotel management system for all your hotel management needs!
                </p>
              </div>

              {/* PMS Uses */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  What are the uses of the hotel property management system?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-8">
                  The power PMS software can simplify complex operations. Leverage our robust technology and attain efficiency in the following tasks:
                </p>
                
                <div className="space-y-4 mb-8">
                  {pmsUses.map((use, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-[#38857a] flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="h-4 w-4 text-white" />
                      </div>
                      <p className="text-gray-700">{use}</p>
                    </div>
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">
                  With our hotel property management technology solutions, you can not only manage your property efficiently but also improve your staff's productivity levels. Isn't it a win-win situation? Connect now to learn more about the business benefits of going digital.
                </p>

                <div className="bg-gradient-to-r from-[#FF914C]/10 to-[#38857a]/10 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Shield className="h-5 w-5 mr-2 text-[#38857a]" />
                    Fraud protection
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Scriza API solution lets you enhance the security of transactions. Quickly verify the Aadhaar credibility of customers and prevent fraudulent activities.
                  </p>
                </div>
              </div>

              {/* Software Features */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  What are the features of the best hotel management software in India?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Our offered software solutions are available with a host of powerful features. Here is how you can elevate your resort's performance levels.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {softwareFeatures.map((feature, index) => (
                    <div key={index} className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white">
                          {feature.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Key features of our Hotel Software Systems!
                </h2>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Instrumental for over a decade now, our specialty is to meet the unique needs of the hotel industry. With a host of powerful and scalable features, we ensure an enhanced guest experience
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {keyFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-[#FF914C] flex items-center justify-center flex-shrink-0 mt-1">
                        <Star className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Why choose our highly advanced resort management system?
                </h2>
                <p className="text-xl text-[#38857a] font-semibold mb-8">
                  Why settle for outdated methods when you can embrace the future of hospitality management?
                </p>
                
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {whyChooseUs.map((reason, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-[#38857a] flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-gray-700">{reason}</span>
                    </div>
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed">
                  We have technology solutions that can take your business to new heights of success. In simple words, we can simply revolutionize the way you run your resort. So, choose Scriza and allow our highly experienced team to bring forth a competitive advantage for your brand.
                </p>
              </div>

              {/* Mobile App Features */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Manage your business from anywhere! Try our hotel management app
                </h2>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Our hotel management mobile app is available on various platforms and streamlines complex operations with ease.
                </p>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {mobileAppFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-gradient-to-r from-[#38857a]/10 to-[#FF914C]/5 rounded-lg">
                      <div className="w-10 h-10 rounded-full bg-[#38857a] flex items-center justify-center text-white">
                        {feature.icon}
                      </div>
                      <span className="font-medium text-gray-800 text-sm">{feature.title}</span>
                    </div>
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed">
                  So get in touch with our developers right now to attain the difference.
                </p>
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-[#38857a] to-[#FF914C] rounded-2xl p-8 text-white">
                <h2 className="text-3xl font-bold mb-4">Contact for the 5/5 rated Hotel Management System Software</h2>
                <p className="text-lg text-white/90 mb-6">
                  Supercharge your business operations with our efficient and user-friendly small hotel management software. With streamlined bookings, user-friendly operations and an affordable price range, we enable you to attain efficiency.
                </p>
                <p className="text-white/90 mb-6">
                  So take control of your success and get in touch with us today.
                </p>
                <Button 
                  size="lg" 
                  className="bg-white text-[#38857a] hover:bg-white/90"
                  onClick={() => document.getElementById('demo-section')?.scrollIntoView({behavior: 'smooth'})}
                >
                  Contact Us Now
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
