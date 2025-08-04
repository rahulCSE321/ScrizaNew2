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
  ShieldAlert,
  MessageCircle,
  Bot,
  Sparkles,
  BarChart2,
  MousePointer,
  Link,
  Award,
  Square,
  Cpu,
  BookOpen,
  Search,
  Hash,
  Camera
} from 'lucide-react'

export default function DigitalMarketingPage() {
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
          message: `Digital Marketing Demo Request - Selected Option: ${formData.option}`
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

  const marketingFeatures = [
    "SEO Optimization",
    "Social Media Marketing", 
    "Content Creation",
    "PPC Advertising",
    "Analytics & Reporting",
    "Brand Management",
    "Lead Generation",
    "ROI Tracking"
  ]

  const digitalStats = [
    "Over 80% of consumers depend on online research for making a purchase decision",
    "More than 50% of internet users engage with a brand that they follow on social media",
    "SEO techniques generate 3 times more leads but cost 62% less than traditional marketing",
    "Digital marketing is a game-changer for businesses helping reach more customers and track results"
  ]

  const marketingBenefits = [
    "Reach a larger audience",
    "Engage with customers",
    "Drive growth",
    "Craft targeted strategies",
    "Attain measurable results",
    "Save marketing cost"
  ]

  const companyAdvantages = [
    {
      icon: <BadgeCheck className="h-8 w-8" />,
      title: "Expertise",
      description: "Our team comprises seasoned professionals with extensive industry knowledge and proven experience.",
      type: "Knowledge"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Proven Track Record",
      description: "We have a successful history of delivering exceptional results for over 500 clients across various industries.",
      type: "Results"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Customized Solutions",
      description: "We tailor strategies to meet each client's unique goals and target audience with personalized approach.",
      type: "Customization"
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Innovative Approach",
      description: "We stay ahead of the curve and utilize the latest trends and technologies for maximum impact.",
      type: "Innovation"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Client-Centric Focus",
      description: "Our priority is to understand and fulfill your specific needs with dedicated account management.",
      type: "Service"
    },
    {
      icon: <BarChart2 className="h-8 w-8" />,
      title: "Measurable ROI",
      description: "Our strategies are designed to generate tangible returns on investment with transparent reporting.",
      type: "ROI"
    }
  ]

  const seoServices = [
    {
      icon: <Search className="h-8 w-8" />,
      title: "On-Page and Off-Page SEO",
      description: "Optimizing website content and building high-quality backlinks for a strong online presence and better rankings.",
      features: ["Content Optimization", "Meta Tags", "Backlink Building", "Technical SEO"]
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Local SEO",
      description: "Optimizing the business for local searches so that your business ranks on top for location-based queries.",
      features: ["Google My Business", "Local Citations", "Location Targeting", "Reviews Management"]
    },
    {
      icon: <ShoppingCart className="h-8 w-8" />,
      title: "E-commerce SEO",
      description: "Optimizing product pages and user experience for better lead generation and increased sales conversion.",
      features: ["Product Optimization", "Category Pages", "User Experience", "Conversion Rate"]
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "SEO Audits",
      description: "Comprehensive website audits to identify areas of improvement for better SEO performance and rankings.",
      features: ["Technical Analysis", "Content Review", "Competitor Analysis", "Performance Metrics"]
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "SEO Consulting",
      description: "Providing strategic guidance and recommendations for keyword research, SEO analytics, content strategy and more.",
      features: ["Strategy Planning", "Keyword Research", "Analytics Setup", "Content Strategy"]
    }
  ]

  const socialMediaFeatures = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Customized Social Media Strategies",
      description: "Tailored social media strategies designed to match your unique business goals and target audience.",
      features: ["Strategy Development", "Audience Analysis", "Platform Selection", "Goal Setting"]
    },
    {
      icon: <Camera className="h-8 w-8" />,
      title: "Creative Content Creation",
      description: "Creative and engaging content creation for maximum impact and audience engagement across all platforms.",
      features: ["Visual Content", "Copywriting", "Video Production", "Graphics Design"]
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Dedicated Social Media Managers",
      description: "Dedicated social media managers to engage with your audience and maintain consistent brand presence.",
      features: ["Community Management", "Customer Engagement", "Brand Voice", "Response Management"]
    },
    {
      icon: <BarChart2 className="h-8 w-8" />,
      title: "Data-Based Marketing Campaigns",
      description: "Data-driven marketing campaigns for higher return on investments (ROI) and measurable business growth.",
      features: ["Analytics Tracking", "Performance Metrics", "ROI Optimization", "Campaign Analysis"]
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Influencer Collaborations",
      description: "Collaborations with famous influencers to improve brand reach and credibility in your target market.",
      features: ["Influencer Outreach", "Partnership Management", "Campaign Coordination", "Brand Advocacy"]
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Regular Reporting",
      description: "Regular reporting to track performance and refine strategies for continuous improvement and optimization.",
      features: ["Performance Reports", "Insights Analysis", "Strategy Refinement", "Growth Tracking"]
    }
  ]

  const packageFeatures = [
    "Custom digital marketing solutions tailored to your business",
    "SEO and social media marketing packages designed to match your needs",
    "Keyword research, on-page optimization, and link building",
    "Performance tracking and monthly reporting",
    "Competitive and transparent pricing structure"
  ]

  const industries = [
    { name: "E-commerce", icon: <ShoppingCart className="h-6 w-6" /> },
    { name: "Healthcare", icon: <Stethoscope className="h-6 w-6" /> },
    { name: "Real Estate", icon: <Building className="h-6 w-6" /> },
    { name: "Travel", icon: <Plane className="h-6 w-6" /> },
    { name: "Finance", icon: <Banknote className="h-6 w-6" /> },
    { name: "Hospitality", icon: <Building2 className="h-6 w-6" /> },
    { name: "Manufacturing", icon: <Settings className="h-6 w-6" /> },
    { name: "More Industries", icon: <Globe className="h-6 w-6" /> }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header currentPage="digital-marketing" />

      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div className="w-full">
          <img 
            src="/digital-marketing-hero.png" 
            alt="Digital Marketing Services" 
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
                  India's Best Digital Marketing Agency
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  Driving digital success with effective social media marketing and cutting-edge SEO Services
                </p>

                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Did you know?</h3>
                  <div className="space-y-3">
                    {digitalStats.map((stat, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-4 w-4 text-[#38857a] mt-1 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{stat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Impressed already? Searching for the best social media marketing agency near me? Connect with Scriza and discover the power of digital marketing.
                </p>

                <div className="grid md:grid-cols-4 gap-4 mb-8">
                  {marketingFeatures.map((feature, index) => (
                    <div key={index} className="bg-gradient-to-r from-[#38857a]/10 to-[#FF914C]/10 rounded-lg p-3 text-center">
                      <span className="text-sm font-medium text-gray-800">{feature}</span>
                    </div>
                  ))}
                </div>

                <p className="text-lg text-gray-700 leading-relaxed">
                  Utilize our decades of expertise to unlock your business's potential. Get in touch with us today and find out how our digital marketing services can drive your success.
                </p>
              </div>

              {/* What is Digital Marketing */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  What is digital marketing? Why do you need it
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  When online platforms like websites and social media are used to promote products or services, it is called digital marketing.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  With thoughtful digital marketing strategies, you can:
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {marketingBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-[#38857a] flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-[#38857a]/10 to-[#FF914C]/10 rounded-xl p-6">
                  <p className="text-gray-700 leading-relaxed">
                    Whether yours is a small business, an e-commerce store, a non-profit organization, a startup, a personal brand, a local shop or a B2B company; you can aim to grow online and leverage digital marketing to achieve your business goals.
                  </p>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Why is it important to hire the best digital marketing company in India?
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  In a crowded market of digital marketing agencies, Scriza stands out as the best choice. Choose us for unparalleled digital marketing expertise. We are committed to driving your business's success due to the following reasons:
                </p>
                
                <div className="space-y-6">
                  {companyAdvantages.map((advantage, index) => (
                    <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white flex-shrink-0">
                          {advantage.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-gray-900 mb-3">{advantage.title}</h3>
                          <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-[#38857a]/10 to-[#FF914C]/10 rounded-xl">
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Transparent Communication:</strong> We maintain open and honest communication throughout the partnership. <strong>Collaboration:</strong> We work closely with our clients, considering them as valued partners.
                  </p>
                </div>
              </div>

              {/* SEO Services */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  How does the best SEO company in India improve your Google rankings?
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  SEO (Search Engine Optimization) improves your website's visibility online so that more and more potential users can find your business. Scriza can make a world of difference in enhancing your online presence.
                </p>
                
                <div className="space-y-8">
                  {seoServices.map((service, index) => (
                    <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white flex-shrink-0">
                              {service.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                          </div>
                          <p className="text-gray-600 leading-relaxed">{service.description}</p>
                          <div className="grid grid-cols-2 gap-2">
                            {service.features.map((item, idx) => (
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
                              {service.icon}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-[#38857a]/10 to-[#FF914C]/10 rounded-xl">
                  <p className="text-gray-700 leading-relaxed">
                    We provide a tailored approach based on your specific business goals. Get in touch now to learn more about our forte in achieving optimal results.
                  </p>
                </div>
              </div>

              {/* Social Media Marketing */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  The most affordable Social media marketing agency in India
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Our social media marketing services are best in terms of features, benefits and price range. With our team of experienced professionals, you can boost brand visibility, engage audiences, expand the reach and generate leads for business growth.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Below are the features that make our social media marketing services a game-changer for all sizes of businesses:
                </p>
                
                <div className="space-y-8">
                  {socialMediaFeatures.map((feature, index) => (
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

              {/* Packages & Industries */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Improve your online presence: Discover the Best SEO Service Company Near Me
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Custom Digital Marketing Solutions</h3>
                    <div className="space-y-3">
                      {packageFeatures.map((feature, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="h-4 w-4 text-[#38857a] mt-1 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Infinite Possibilities to Grow</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Choose from our range of packages offering keyword research, on-page optimization, link building, performance tracking, and monthly reporting.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      Drive organic traffic and achieve higher search engine rankings with our tailored and affordable SEO solutions.
                    </p>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Industries Served</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Our digital marketing services cater to a wide range of industries, including:
                  </p>
                  <div className="grid md:grid-cols-4 gap-4">
                    {industries.map((industry, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white">
                          {industry.icon}
                        </div>
                        <span className="text-sm font-medium text-gray-900">{industry.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-r from-[#38857a]/10 to-[#FF914C]/10 rounded-xl">
                  <p className="text-gray-700 leading-relaxed">
                    Contact us to explore the package options and find the one that best suits your business goals.
                  </p>
                </div>
              </div>

              {/* Final CTA */}
              <div className="bg-gradient-to-r from-[#38857a] to-[#FF914C] rounded-2xl p-8 text-white">
                <h2 className="text-3xl font-bold mb-4">Transform online success: Get a quote from a digital marketing agency near me</h2>
                <p className="text-lg text-white/90 mb-6">
                  Creative digital marketing solutions can increase conversion rates by 80%! Don't you want to achieve such results? Take the step towards success today and contact us now for a free consultation!
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-white text-[#38857a] hover:bg-white/90"
                    onClick={() => document.getElementById('demo-section')?.scrollIntoView({behavior: 'smooth'})}
                  >
                    Free Consultation
                    <Calendar className="ml-2 h-5 w-5" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-white text-white hover:bg-white/10"
                  >
                    Get Quote Now
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Demo Form Sidebar */}
            <DemoBookingForm 
              onSubmit={handleDemoSubmit} 
              title="Book a Free Demo"
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
