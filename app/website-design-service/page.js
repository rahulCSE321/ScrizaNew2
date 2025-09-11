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

export default function WebsiteDesignPage() {
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
          message: `Website Design Demo Request - Selected Option: ${formData.option}`
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

  const designFeatures = [
    "Latest Design Trends",
    "Responsive Layouts",
    "User-Friendly Interfaces",
    "SEO Optimized",
    "Fast Loading Speed",
    "Custom Solutions",
    "Mobile-First Design",
    "Brand Identity"
  ]

  const keyBenefits = [
    "Talented team of designers, developers and strategists",
    "Expertise in leveraging cutting-edge web design technology",
    "Responsive layouts and seamless navigations",
    "Captivating online platforms at an affordable price range"
  ]

  const performanceStats = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "12+ Years of Experience",
      description: "Over 12 years, we have been working as the creators of stunning website visuals with proven expertise.",
      stat: "12+",
      label: "Years Experience"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "400+ Design Projects Delivered",
      description: "Successfully delivered over 400 design projects across various industries with 5-star ratings.",
      stat: "400+",
      label: "Projects Completed"
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "5/5 Star Customer Rating",
      description: "We take pride in our perfect ratings and thousands of positive reviews from satisfied clients.",
      stat: "5/5",
      label: "Star Rating"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Enhanced User Experience",
      description: "Perfect balance of creativity and functionality that drives business growth and user engagement.",
      stat: "100%",
      label: "Client Satisfaction"
    }
  ]

  const pricingFeatures = [
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Fair and Competitive Pricing",
      description: "We provide transparent and competitive pricing that fits different budgets without compromising quality.",
      type: "Competitive"
    },
    {
      icon: <Layers className="h-8 w-8" />,
      title: "Flexible Packages",
      description: "Choose from flexible packages designed to meet the specific needs and budget constraints of your business.",
      type: "Flexible"
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Detailed Quote Provided Upfront",
      description: "Get a comprehensive quote upfront with no hidden fees or surprises throughout the project lifecycle.",
      type: "Transparent"
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Transparent Communication",
      description: "Maintain clear and transparent communication regarding costs and project progress throughout the development.",
      type: "Communication"
    }
  ]

  const designServices = [
    {
      icon: <ShoppingCart className="h-8 w-8" />,
      title: "E-commerce Website Design",
      description: "Design has the power to impact your online sales potential. Get e-commerce website design that seamlessly integrates user-friendly interfaces and conversion-focused design elements.",
      features: ["User-Friendly Interface", "Conversion-Focused", "Sales Optimization", "Payment Integration"]
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Responsive Web Design",
      description: "We are experts in designing websites that look and function flawlessly on all devices. Get the most affordable mobile responsive website design.",
      features: ["Mobile-First", "All Device Compatible", "Flawless Function", "Affordable Pricing"]
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "User Experience (UX) Design",
      description: "Dedicated team of analysts that consider user behavior and latest design trends. Create engaging designs for enhanced user satisfaction and assured profitability.",
      features: ["User Behavior Analysis", "Latest Trends", "Enhanced Satisfaction", "Profitability Focus"]
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Content Management Systems (CMS)",
      description: "Industry leaders in developing CMS. Update and manage your site's pages, blog posts, and multimedia content with ease.",
      features: ["Easy Updates", "Blog Management", "Multimedia Content", "User-Friendly Interface"]
    },
    {
      icon: <Monitor className="h-8 w-8" />,
      title: "Custom Website Design",
      description: "Work closely with you to create a visually captivating website. Our designers ensure the design reflects your brand identity and engages your target audience.",
      features: ["Brand Identity", "Visual Appeal", "Target Engagement", "Custom Solutions"]
    }
  ]

  const designPlatforms = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "WordPress",
      description: "Leverage WordPress for its flexibility advantages and ease of use for content management."
    },
    {
      icon: <ShoppingCart className="h-6 w-6" />,
      title: "Shopify & Magento",
      description: "Utilize Shopify or Magento for robust e-commerce capabilities and online store functionality."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Drupal",
      description: "Implement Drupal for scalable and secure CMS solutions for enterprise-level requirements."
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Custom Solutions",
      description: "Develop custom-built solutions that meet your unique business requirements and specifications."
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Modern Frameworks",
      description: "Work with latest frameworks and technologies for cutting-edge website development."
    },
    {
      icon: <Monitor className="h-6 w-6" />,
      title: "Multi-Platform",
      description: "Create websites that work seamlessly across all platforms and browsers."
    }
  ]

  const industries = [
    { name: "Retail", icon: <Store className="h-6 w-6" /> },
    { name: "Hospitality", icon: <Building className="h-6 w-6" /> },
    { name: "Manufacturing", icon: <Settings className="h-6 w-6" /> },
    { name: "Healthcare", icon: <Stethoscope className="h-6 w-6" /> },
    { name: "Banking & Finance", icon: <Banknote className="h-6 w-6" /> },
    { name: "Professional Services", icon: <Building2 className="h-6 w-6" /> }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header currentPage="website-design" />

      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div className="w-full">
          <img
            src="/website-design-hero.png"
            alt="Website Design Services"
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
                  Website Design Services
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  For over 12 years, we have been working as the creators of stunning website visuals
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Are you searching for storytellers who can weave your visions into captivating visuals? Scriza website design services is the answer.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  At Scriza, we believe that every pixel has the power to build connections and leave lasting impressions! Our passion lies in exceeding the user experience; we do this by presenting an innovative combination of technology and artistry.
                </p>

                <div className="grid md:grid-cols-4 gap-4 mb-8">
                  {designFeatures.map((feature, index) => (
                    <div key={index} className="bg-gradient-to-r from-[#38857a]/10 to-[#FF914C]/10 rounded-lg p-3 text-center">
                      <span className="text-sm font-medium text-gray-800">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-[#38857a]/10 to-[#FF914C]/10 rounded-xl p-6 mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">India's best recharge software provider is empowering</h4>
                  <div className="space-y-3">
                    {keyBenefits.map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-[#38857a]" />
                        <span className="text-gray-700 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed">
                  We don't just design, we make sure that your business gets the attention it deserves. Get a quote right now so that we can create exceptional digital experiences for your target audience.
                </p>
              </div>

              {/* Pricing Section */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  How much is the cost to hire a website design company near me?
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Connect with Scriza for transparent pricing and affordable cost of web design.
                </p>

                <div className="space-y-6">
                  {pricingFeatures.map((feature, index) => (
                    <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white flex-shrink-0">
                          {feature.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                          <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-[#38857a]/10 to-[#FF914C]/10 rounded-xl">
                  <p className="text-gray-700 leading-relaxed">
                    Large or small, all sizes of businesses find our services affordable. We work closely with you to understand your requirements. So get in touch to receive a detailed quote that aligns with your budgetary needs.
                  </p>
                </div>
              </div>

              {/* Performance Stats */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Searching for "Top website design services near me", Contact Scriza!
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  We have a vast team of design experts that provides tailored solutions. Contact us to design a website that reflects the latest industry standards.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  So far, we have delivered 400+ design projects based on the following services:
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
              </div>

              {/* Design Services */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Our Website Design Services
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  We offer comprehensive website design services tailored to meet your business needs and drive growth.
                </p>

                <div className="space-y-8">
                  {designServices.map((service, index) => (
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
                    Enhance your brand's visibility with a captivating website design. Contact us now to discuss the project requirements.
                  </p>
                </div>
              </div>

              {/* Design Platforms */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Custom platforms for "web design services near me"
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  We have decade long expertise in bringing the vision to life. Our team is proficient in working with various platforms, such as:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  {designPlatforms.map((platform, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 border border-gray-200 rounded-lg">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white flex-shrink-0">
                        {platform.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{platform.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{platform.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-[#38857a]/10 to-[#FF914C]/10 rounded-xl">
                  <p className="text-gray-700 leading-relaxed">
                    These are just a few examples of website design platforms available at Scriza. We have the required team of experts to work on your choice of design and development platform.
                  </p>
                </div>
              </div>

              {/* Industries Section */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Web design services for small business
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  We have the experience and knowledge to cater to a diverse range of industries. From small startups and local businesses to established enterprises, we have helped thousands of entities in designing their vision.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Our team is equipped to understand the industry-specific requirements for businesses from the following sectors:
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {industries.map((industry, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white">
                        {industry.icon}
                      </div>
                      <span className="text-lg font-medium text-gray-900">{industry.name}</span>
                    </div>
                  ))}
                </div>

                <p className="text-lg text-gray-700 leading-relaxed">
                  We are backed with the knowledge, expertise and tools to create a compelling website. Book a discovery call and let's discuss how to position your business for success.
                </p>
              </div>

              {/* What Makes Us Best */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  What makes us the best online website design company?
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  We take pride in our 5/5 star ratings and thousands of positive reviews. Our pursuit of excellence sets us apart from the competition. Apart from this, the following are the reasons behind the immense popularity of our web design services.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="border border-gray-200 rounded-lg p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <TrendingUp className="h-8 w-8 text-[#38857a]" />
                        <h3 className="text-xl font-semibold text-gray-900">Latest Design Trends</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        Whether you are developing a new website or revamping an old one, we can save you from making costly mistakes. Our team consists of professionals who are well aware of the latest design trends, emerging technologies, and best practices.
                      </p>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <Settings className="h-8 w-8 text-[#38857a]" />
                        <h3 className="text-xl font-semibold text-gray-900">Customized Design Solutions</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        Every business is unique, and so is their story. Therefore, we believe in in-depth discussions to fully understand your business goals, target audience, and brand identity. Our tailored solutions set us truly apart from other design agencies.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="border border-gray-200 rounded-lg p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <BarChart2 className="h-8 w-8 text-[#38857a]" />
                        <h3 className="text-xl font-semibold text-gray-900">Perfect Balance of Creativity and Functionality</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        Stunning visuals or aesthetics are not the sole focus of our team of experts. Though our team has a keen eye for colour palettes, typography, imagery, and multimedia elements, we know more than just creating visually stunning websites. We strike the perfect balance and make sure that your website performs flawlessly.
                      </p>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <Target className="h-8 w-8 text-[#38857a]" />
                        <h3 className="text-xl font-semibold text-gray-900">Result-Oriented Approach</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        We work with the ultimate goal to help you succeed online. Owing to our conversion-driven strategies, many small scale entities and startups have faith in us. Connect us to gain the deepest insights about the strategic placement of call-to-action buttons, optimized landing pages, and engaging navigation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Final CTA */}
              <div className="bg-gradient-to-r from-[#38857a] to-[#FF914C] rounded-2xl p-8 text-white">
                <h2 className="text-3xl font-bold mb-4">Ready to elevate your online presence?</h2>
                <p className="text-lg text-white/90 mb-6">
                  Contact us today to leverage 12+ years of website design and development experience. Whether you are a growing or an established business, we are here to design a stunning website that captivates your audience and drives your business growth.
                </p>
                <p className="text-white/90 mb-6">
                  Let's get started!
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-white text-[#38857a] hover:bg-white/90"
                    onClick={() => document.getElementById('demo-section')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Get Free Quote
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
              title="Book a Free Demo"
              showApiServices={true}
            />
          </div>
        </div>
      </section>
      <FAQ
        title="Frequently Asked Questions"
        faqs={[
          {
            question: "What is Web Designing Service?",
            answer: "Web Designing Service involves creating visually appealing, user-friendly, and responsive websites tailored to your business needs. It covers everything from designing the layout, selecting color schemes, typography, user interface (UI), user experience (UX) design, to ensuring mobile compatibility and easy navigation."
          },
          {
            question: "Who should use Web Designing Services?",
            answer: "Our Web Designing Services are ideal for: Startups and small businesses looking to establish an online presence, E-commerce stores, Corporate businesses, Educational institutions, Nonprofits and government organizations, Service providers (lawyers, consultants, healthcare professionals), Anyone needing a professional, functional, and responsive website."
          },
          {
            question: "What types of websites do you design?",
            answer: "We design a wide variety of websites, including: Business/Corporate Websites, E-commerce Websites, Portfolio Websites, Personal/Blog Websites, Educational/Online Course Platforms, Nonprofit/Charity Websites, Event/Conference Websites, Landing Pages."
          },
          {
            question: "What is included in your Web Designing Service?",
            answer: "Our Web Designing Service includes: Requirement analysis and design consultation, Custom website layout and design (no templates, unless requested), Responsive design for all devices (mobile, tablet, desktop), User-friendly navigation structure, Integration of images, videos, and interactive elements, Contact forms, inquiry forms, newsletter subscription, Basic SEO-friendly structure, Social media integration, Performance optimization (speed, lightweight design)."
          },
          {
            question: "Do you provide website content as part of the design service?",
            answer: "We offer content creation services as an additional service: Professional copywriting for business, product descriptions, blog posts, etc. You can also provide your own content during the design process."
          },
          {
            question: "Will my website be mobile-friendly?",
            answer: "Yes, every website we design is fully responsive and optimized for mobile devices, tablets, and desktops to provide a seamless user experience across all screen sizes."
          },
          {
            question: "Can I update my website myself after design?",
            answer: "Yes, we offer: User-friendly Content Management Systems (CMS) like WordPress, Wix, or custom CMS solutions, Training or documentation to help you manage content, images, and updates easily. We can also provide ongoing website maintenance and support as needed."
          },
        ]}
      />


      <Certification />
      <Footer />
      <ChatWidget />
    </div>
  )
}
