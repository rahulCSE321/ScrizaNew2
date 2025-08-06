'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ChatWidget from '@/components/ChatWidget'
import Certification from '@/components/Certification'
import { useRouter } from 'next/navigation'
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Code,
  Smartphone,
  Users,
  Star,
  CheckCircle,
  Award,
  Globe,
  Zap,
  Shield,
  TrendingUp,
  Building,
  GraduationCap,
  CreditCard,
  Plane,
  Hotel,
  Menu,
  X
} from 'lucide-react'

export default function App() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    type: 'demo' // demo or contact
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        alert('Thank you! We will get back to you soon.')
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: '',
          type: 'demo'
        })
      } else {
        alert('Something went wrong. Please try again.')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Something went wrong. Please try again.')
    }
  }
   
  

  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Software Development",
      description: "We leverage tried and tested methodologies to offer bespoke software development solutions. The competitively priced technology products are created for both large and small enterprises across various industry verticals.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwyfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50fGVufDB8fHxibHVlfDE3NTM5NDYxNDR8MA&ixlib=rb-4.1.0&q=85"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile Application Development",
      description: "With 12+ years of industry experience, we have become specialists in sophisticated iOS and Android mobile application development. Partner with us and accelerate the growth of your enterprises beyond your imagination.",
      image: "https://images.unsplash.com/photo-1648737966636-2fc3a5fffc8a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MXwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5fGVufDB8fHxibHVlfDE3NTM5NDYxNDl8MA&ixlib=rb-4.1.0&q=85"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Virtual Developer",
      description: "Need a developer who focuses on your key business outcomes? We'd love to help you streamline your business. Talk to one of our specialists and get a trusted and highly experienced virtual developer for your projects.",
      image: "https://images.unsplash.com/photo-1591439657848-9f4b9ce436b9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHw0fHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50fGVufDB8fHxibHVlfDE3NTM5NDYxNDR8MA&ixlib=rb-4.1.0&q=85"
    }
  ]

  const specializedServices = [
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Fintech Software Development",
      description: "Our expertise in fintech software development can help you build an app that will make your business run more efficiently and effectively.",
      color: "bg-gradient-to-br from-green-500 to-emerald-600",
      route: "/fintech-software"
    },
    {
      icon: <Plane className="h-6 w-6" />,
      title: "Travel Software Development",
      description: "We develop, implement and maintain travel software applications for online booking, inventory management, and reservation functionality for the travel industry.",
      color: "bg-gradient-to-br from-blue-500 to-cyan-600",
      route: "/travel-software"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Recharge Portal Development",
      description: "We develop recharge portals that allow you to boost your business and take it to new heights!",
      color: "bg-gradient-to-br from-orange-500 to-red-600",
      route: "/recharge-software-application"
    },
    {
      icon: <Hotel className="h-6 w-6" />,
      title: "Hotel Management Software",
      description: "We have the expertise to develop an online hotel booking software that's easy to use and integrated with your existing back-end systems.",
      color: "bg-gradient-to-br from-purple-500 to-indigo-600",
      route: "/hotel-management-software"
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "School Management Software",
      description: "We're the best in the business at developing school software. We can create a custom management system for your school.",
      color: "bg-gradient-to-br from-teal-500 to-green-600",
      route: "/school-management-software"
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "Banking API Integration",
      description: "We're the banking API integrator that can help you connect your system with other banks' systems seamlessly.",
      color: "bg-gradient-to-br from-pink-500 to-rose-600",
      route: "/api-intregation"
    }
  ]

  const partners = [
    { name: "MalaniPay", logo: "/malanipay.svg" },
    { name: "DainikPay", logo: "/danikpay.png" },
    { name: "Brightwood", logo: "/brighthood.png" },
    { name: "Blueray Fintech", logo: "/Blueray.png" },
    { name: "White Pearl Digital", logo: "/whitepearl.jpeg" }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header currentPage="home" />

      {/* Hero Section */}
      <section id="home" className="relative py-16 lg:py-20 overflow-hidden min-h-screen flex items-start">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed opacity-50"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1639008941804-a5d716bd5187?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwb2ZmaWNlfGVufDB8fHxibHVlfDE3NTQwMzA2MDF8MA&ixlib=rb-4.1.0&q=85)'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#38857a]/20 to-[#FF914C]/20"></div>
        <div className="container mx-auto px-4 relative z-10 pt-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-4">
              <div className="space-y-3">
                <Badge variant="outline" className="text-[#38857a] border-[#38857a] shadow-sm text-sm md:text-base px-3 py-1 md:px-4 md:py-1">
                  Scriza Private Limited
                </Badge>
                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                  Innovative Software
                  <span className="block" style={{ color: '#38857a' }}>Solutions</span>
                </h1>
                <div className="space-y-2">
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold" style={{ color: '#FF914C' }}>
                    Collaborate. Innovate. Build.
                  </h2>
                  <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto font-medium">
                    We provide cutting-edge software development services to help businesses stay ahead in today's fast-paced digital world.
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center pt-2">
                <Button
                  size="default"
                  style={{ backgroundColor: '#38857a' }}
                  className="text-white hover:opacity-90 shadow-lg hover:shadow-xl transition-all text-base md:text-lg px-4 py-2 md:px-6 md:py-3"
                  onClick={() => router.push('/contact')}
                >
                  Discover More
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </Button>
                <Button
                  size="default"
                  variant="outline"
                  style={{ borderColor: '#FF914C', color: '#FF914C' }}
                  className="hover:bg-[#FF914C] hover:text-white shadow-lg hover:shadow-xl transition-all text-base md:text-lg px-4 py-2 md:px-6 md:py-3 border-2"
                  onClick={() => document.getElementById('demo-section').scrollIntoView({ behavior: 'smooth' })}
                >
                  Get a Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/* Decorative elements */}
        {/* <div className="absolute bottom-10 left-10 w-24 md:w-32 h-24 md:h-32 bg-[#FF914C] rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-16 right-10 w-16 md:w-24 h-16 md:h-24 bg-[#38857a] rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-1/3 left-20 w-32 md:w-40 h-32 md:h-40 bg-gradient-to-r from-[#38857a] to-[#FF914C] rounded-full opacity-10 blur-xl animate-pulse"></div> */}
      </section>

      {/* What We Offer Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              "30+ Years of Global Expertise in Business & Technology Consulting. Trusted Partner to 5k+ Clients Worldwide. Let's Create Your Digital Transformation Timeline with Experience & Innovation."
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
                <CardHeader className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 p-3 rounded-full bg-white shadow-lg" style={{ color: '#38857a' }}>
                    {service.icon}
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <Badge className="mb-3" style={{ backgroundColor: '#FF914C' }}>Services</Badge>
                  <CardTitle className="text-xl mb-3" style={{ color: '#38857a' }}>{service.title}</CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Who We Are</h2>
                <h3 className="text-2xl font-semibold" style={{ color: '#FF914C' }}>
                  Powering Software Passionate about Technology.
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  If you're looking for a top software development company that can be trusted to deliver high-quality, innovative solutions at a reasonable price, you've come to the right place. Scriza is the best software development company in the industry. We've been helping our clients solve their biggest problems with Tech.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full bg-[#38857a]/10 flex items-center justify-center">
                    <Code className="h-8 w-8" style={{ color: '#38857a' }} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">Custom Software Development</h4>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div className="bg-[#38857a] h-2 rounded-full" style={{ width: '92%' }}></div>
                    </div>
                    <span className="text-sm text-gray-600 mt-1">92%</span>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full bg-[#FF914C]/10 flex items-center justify-center">
                    <Smartphone className="h-8 w-8" style={{ color: '#FF914C' }} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">Application Development</h4>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div className="bg-[#FF914C] h-2 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                    <span className="text-sm text-gray-600 mt-1">90%</span>
                  </div>
                </div>
              </div>

              <Button
                size="lg"
                style={{ backgroundColor: '#38857a' }}
                className="text-white hover:opacity-90"
                onClick={() => document.getElementById('specialized-services').scrollIntoView({ behavior: 'smooth' })}
              >
                Discover More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwzfHx0ZWNobm9sb2d5fGVufDB8fHxibHVlfDE3NTM5NDYxNDl8MA&ixlib=rb-4.1.0&q=85"
                alt="Technology Innovation"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold" style={{ color: '#38857a' }}>2+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Services Section */}
      <section id="specialized-services" className="relative py-24 bg-white">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-20 max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-Poppins, sans-serif text-slate-900 mb-5">
              Expert Software Development Services
              <br />
              Tailored to Your Business Needs
              <br />
            </h2>
            {/* <p className="text-lg text-slate-600">
              We deliver enterprise-grade, tailored solutions across the full software development lifecycle to drive efficiency and growth.
            </p> */}
            <div className="mt-6 h-1 w-24 bg-gradient-to-r from-[#38857a] to-[#FF914C] mx-auto rounded-full"></div>
          </div>

          {/* Unified Timeline Layout */}
          <div className="relative">
            {/* Central Connecting Line - visible on medium screens and up */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 hidden md:block" aria-hidden="true"></div>

            <div className="space-y-16">
              {specializedServices.map((service, index) => (
                <div
                  key={index}
                  className="relative flex flex-col md:flex-row justify-between items-center w-full"
                >
                  {/* Left Side Content/Spacer */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:order-1' : 'hidden md:block md:order-1'}`}>
                    {index % 2 === 0 && (
                      <div className="p-8 bg-white border border-slate-200/80 rounded-xl shadow-sm">
                        <h3 className="text-2xl font-bold text-slate-800 mb-4">{service.title}</h3>
                        <p className="text-slate-600 leading-relaxed mb-6">{service.description}</p>
                        <Button
                          variant="link"
                          className="p-0 h-auto text-[#38857a] font-semibold text-sm"
                          onClick={() => router.push(service.route)}
                        >
                          Explore Service
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    )}
                  </div>

                  {/* Timeline Icon - Center */}
                  <div className="w-20 h-20 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg border-4 border-white md:order-2 bg-gradient-to-r from-[#38857a] to-[#FF914C]">
                    <div className="text-white">
                      {service.icon}
                    </div>
                  </div>


                  {/* Right Side Content/Spacer */}
                  <div className={`w-full md:w-5/12 ${index % 2 !== 0 ? 'md:order-3' : 'hidden md:block md:order-3'}`}>
                    {index % 2 !== 0 && (
                      <div className="p-8 bg-white border border-slate-200/80 rounded-xl shadow-sm">
                        <h3 className="text-2xl font-bold text-slate-800 mb-4">{service.title}</h3>
                        <p className="text-slate-600 leading-relaxed mb-6">{service.description}</p>
                        <Button
                          variant="link"
                          className="p-0 h-auto text-[#38857a] font-semibold text-sm"
                          onClick={() => router.push(service.route)}
                        >
                          Explore Service
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>




      {/* Partners Section */}
      <section className="py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1597733336794-12d05021d510?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHw0fHx0ZWNobm9sb2d5fGVufDB8fHxibHVlfDE3NTM5NDYxNDl8MA&ixlib=rb-4.1.0&q=85)'
          }}
        >
          <div className="absolute inset-0 bg-[#38857a]/90"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Achievement</h2>
            <p className="text-xl text-white/90">See our success in our numbers.</p>
            <p className="text-lg text-white/80 mt-2">We have come a long way in the last few years...</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
            {partners.map((partner, index) => (
              <div key={index} className="flex justify-center items-center">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full h-32 flex items-center justify-center">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="max-w-full max-h-full object-contain filter brightness-90 hover:brightness-100 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo-section" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Don't wait another minute!
              </h2>
              <p className="text-xl text-gray-600">
                Call us today to schedule a free consultation with one of our experts.
              </p>
            </div>

            <Card className="bg-white shadow-xl border-0">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="border-gray-300 focus:border-[#38857a] focus:ring-[#38857a]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="border-gray-300 focus:border-[#38857a] focus:ring-[#38857a]"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="border-gray-300 focus:border-[#38857a] focus:ring-[#38857a]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                      </label>
                      <Input
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="border-gray-300 focus:border-[#38857a] focus:ring-[#38857a]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="border-gray-300 focus:border-[#38857a] focus:ring-[#38857a]"
                      placeholder="Tell us about your project requirements..."
                    />
                  </div>

                  <div className="flex justify-center">
                    <Button
                      type="submit"
                      size="lg"
                      style={{ backgroundColor: '#FF914C' }}
                      className="text-white hover:opacity-90 px-12"
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Certification />
      <Footer />
      <ChatWidget />
    </div>
  )
}