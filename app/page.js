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
import { Monitor, Settings } from 'lucide-react'

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
  X,
  ChevronLeft,
  ChevronRight
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

  // Blog slider state
  const [currentBlogSlide, setCurrentBlogSlide] = useState(0) 
  const [blogSlidesPerView, setBlogSlidesPerView] = useState(3)

  // Blog slider functions
  const nextBlogSlide = () => {
    const maxSlide = Math.max(0, blogPosts.length - blogSlidesPerView)
    setCurrentBlogSlide(prev => prev >= maxSlide ? 0 : prev + 1)
  }

  const prevBlogSlide = () => {
    const maxSlide = Math.max(0, blogPosts.length - blogSlidesPerView)
    setCurrentBlogSlide(prev => prev <= 0 ? maxSlide : prev - 1)
  }

  const goToBlogSlide = (index) => {
    setCurrentBlogSlide(index)
  }

  // Responsive blog slides per view
  useEffect(() => {
    const updateBlogSlidesPerView = () => {
      if (window.innerWidth < 768) {
        setBlogSlidesPerView(1)
      } else if (window.innerWidth < 1024) {
        setBlogSlidesPerView(2)
      } else {
        setBlogSlidesPerView(3)
      }
    }

    updateBlogSlidesPerView()
    window.addEventListener('resize', updateBlogSlidesPerView)
    return () => window.removeEventListener('resize', updateBlogSlidesPerView)
  }, [])

  // Auto-play functionality for blog slider
  useEffect(() => {
    const interval = setInterval(() => {
      nextBlogSlide()
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [currentBlogSlide, blogSlidesPerView])

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

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Fintech: Digital Transformation in Banking",
      excerpt: "Explore how digital transformation is revolutionizing the banking sector and what it means for financial technology companies.",
      date: "December 15, 2024",
      author: "Scriza Team",
      category: "Fintech",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwxfHxmaW50ZWNofGVufDB8fHxibHVlfDE3NTM5NDYxNDl8MA&ixlib=rb-4.0.3&q=85"
    },
    {
      id: 2,
      title: "Building Scalable School Management Systems",
      excerpt: "Learn about the key considerations and best practices for developing robust school management software that can scale with your institution.",
      date: "December 10, 2024",
      author: "Tech Team",
      category: "Education",
      image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjB0ZWNobm9sb2d5fGVufDB8fHxibHVlfDE3NTM5NDYxNDl8MA&ixlib=rb-4.0.3&q=85"
    },
    {
      id: 3,
      title: "API Integration Best Practices for Modern Applications",
      excerpt: "Discover the essential strategies for seamless API integration that can boost your application's performance and user experience.",
      date: "December 5, 2024",
      author: "Development Team",
      category: "Development",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwxfHxBUEklMjBpbnRlZ3JhdGlvbnxlbnwwfHx8Ymx1ZXwxNzUzOTQ2MTQ5fDA&ixlib=rb-4.0.3&q=85"
    },
    {
      id: 4,
      title: "Mobile App Development Trends in 2024",
      excerpt: "Stay ahead of the curve with the latest mobile app development trends that are shaping the industry in 2024.",
      date: "November 28, 2024",
      author: "Mobile Team",
      category: "Mobile",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHB8ZW58MHx8fGJsdWV8MTc1Mzk0NjE0OXww&ixlib=rb-4.0.3&q=85"
    },
    {
      id: 5,
      title: "Hotel Management Software: Streamlining Operations",
      excerpt: "Discover how modern hotel management software can revolutionize your hospitality business operations and guest experience.",
      date: "November 20, 2024",
      author: "Hospitality Team",
      category: "Hospitality",
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwxfHxob3RlbCUyMG1hbmFnZW1lbnR8ZW58MHx8fGJsdWV8MTc1Mzk0NjE0OXww&ixlib=rb-4.0.3&q=85"
    },
    {
      id: 6,
      title: "The Rise of Digital Payment Solutions",
      excerpt: "Explore the evolution of digital payment systems and how they're transforming the way businesses handle transactions.",
      date: "November 15, 2024",
      author: "Payment Solutions Team",
      category: "Payments",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwcGF5bWVudHxlbnwwfHx8Ymx1ZXwxNzUzOTQ2MTQ5fDA&ixlib=rb-4.0.3&q=85"
    }
    
  ]

  const testimonials = [
    {
      id: 1,
      text: "The iOS mobile app built by Scriza really met my expectations. Their methodology is truly inspiring, they value clear and honest communications and never cease to amaze, even if there are last-minute change requirements from the client's end. Would highly recommend their services, especially for time-bound projects.",
      name: "Prasannan Janeya Reddy",
      position: "Client",
      rating: 5
    },
    {
      id: 2,
      text: "I can confidently say that this is the beginning of a long-term association. Their project management skills are highly appreciable. They efficiently meet the set milestones and never compromise on quality. Small scale enterprises must get in touch with them to get huge growth insights.",
      name: "Chetan Prakash Tailor",
      position: "Business Owner",
      rating: 5
    },
    {
      id: 3,
      text: "Scriza has a brilliant team of designers and developers. Their managers are extremely professional and I must say, very patient. They exceeded my expectations and delivered a code as per my business requirements. I have found my technology partner and will recommend their development services to everyone.",
      name: "Daware Janardan Sandu",
      position: "Technology Consultant",
      rating: 5
    },
    {
      id: 4,
      text: "Scriza has done very well at serving us a high performing mobile app. Consistent customer support and the ability to keep the project on track is the reason I am writing this review. We hired them for a hedge fund management app and we are glad that we selected this development agency. Their professionalism, affordability and timeliness standards truly deserve 5-star ratings.",
      name: "Dinesh Kumar",
      position: "Financial Services",
      rating: 5
    },
    {
      id: 5,
      text: "We hired Scriza for hotel management software. I would say, their project managers really impressed me. The entire team is so motivated to reach their fullest potential. They delivered a high-end looking project at a reasonable rate. Highly recommend it!",
      name: "Arvind Singh Chundawat",
      position: "Hospitality Industry",
      rating: 5
    },
    {
      id: 6,
      text: "Scriza people understand what they are doing! They helped me to increase customer engagement levels on our website. Their top-notch development standards result in increased lead volumes. Further, their post-release support is remarkable, I don't think such a proficient team of technology experts is available elsewhere at this price. Will definitely get back to Scriza for my future projects.",
      name: "Shubham Debnath",
      position: "Digital Marketing",
      rating: 5
    }
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
      <section id="services" className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">What We Offer</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              "30+ Years of Global Expertise in Business & Technology Consulting. Trusted Partner to 5k+ Clients Worldwide. Let's Create Your Digital Transformation Timeline with Experience & Innovation."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
                <CardHeader className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 p-2 sm:p-3 rounded-full bg-white shadow-lg" style={{ color: '#38857a' }}>
                    {service.icon}
                  </div>
                </CardHeader>
                <CardContent className="p-4 sm:p-6">
                  <Badge className="mb-3 text-xs sm:text-sm" style={{ backgroundColor: '#FF914C' }}>Services</Badge>
                  <CardTitle className="text-lg sm:text-xl mb-3 leading-tight" style={{ color: '#38857a' }}>{service.title}</CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section id="about" className="py-12 md:py-20">
  <div className="container mx-auto px-4">
    <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
      <div className="space-y-6 md:space-y-8">
        <div className="space-y-3 md:space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">Who We Are</h2>
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold leading-tight" style={{ color: '#FF914C' }}>
            Powering Software Passionate about Technology.
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
            If you're looking for a top software development company that can be trusted to deliver high-quality, innovative solutions at a reasonable price, you've come to the right place. Scriza is the best software development company in the industry. We've been helping our clients solve their biggest problems with Tech.
          </p>
        </div>

        <div className="space-y-4 md:space-y-6">
          <div className="flex items-center space-x-3 md:space-x-4">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#38857a]/10 flex items-center justify-center flex-shrink-0">
              <Code className="h-6 w-6 md:h-8 md:w-8" style={{ color: '#38857a' }} />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-lg md:text-xl font-semibold text-gray-900 leading-tight">Custom Software Development</h4>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div className="bg-[#38857a] h-2 rounded-full" style={{ width: '92%' }}></div>
              </div>
              <span className="text-xs md:text-sm text-gray-600 mt-1">92%</span>
            </div>
          </div>

          <div className="flex items-center space-x-3 md:space-x-4">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#FF914C]/10 flex items-center justify-center flex-shrink-0">
              <Smartphone className="h-6 w-6 md:h-8 md:w-8" style={{ color: '#FF914C' }} />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-lg md:text-xl font-semibold text-gray-900 leading-tight">Application Development</h4>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div className="bg-[#FF914C] h-2 rounded-full" style={{ width: '90%' }}></div>
              </div>
              <span className="text-xs md:text-sm text-gray-600 mt-1">90%</span>
            </div>
          </div>

          {/* New Services Added Below */}
          <div className="flex items-center space-x-3 md:space-x-4">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0">
              <Monitor className="h-6 w-6 md:h-8 md:w-8 text-blue-500" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-lg md:text-xl font-semibold text-gray-900 leading-tight">Software Development</h4>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '88%' }}></div>
              </div>
              <span className="text-xs md:text-sm text-gray-600 mt-1">88%</span>
            </div>
          </div>

          <div className="flex items-center space-x-3 md:space-x-4">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-purple-500/10 flex items-center justify-center flex-shrink-0">
              <Settings className="h-6 w-6 md:h-8 md:w-8 text-purple-500" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-lg md:text-xl font-semibold text-gray-900 leading-tight">ERP Development</h4>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div className="bg-purple-500 h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
              <span className="text-xs md:text-sm text-gray-600 mt-1">85%</span>
            </div>
          </div>

          <div className="flex items-center space-x-3 md:space-x-4">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
              <CreditCard className="h-6 w-6 md:h-8 md:w-8 text-green-500" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-lg md:text-xl font-semibold text-gray-900 leading-tight">Fintech Software Development</h4>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '87%' }}></div>
              </div>
              <span className="text-xs md:text-sm text-gray-600 mt-1">87%</span>
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

      <div className="relative mt-8 lg:mt-0">
        <img
          src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwzfHx0ZWNobm9sb2d5fGVufDB8fHxibHVlfDE3NTM5NDYxNDl8MA&ixlib=rb-4.1.0&q=85"
          alt="Technology Innovation"
          className="rounded-lg shadow-2xl w-full h-auto"
        />
        <div className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 bg-white p-4 md:p-6 rounded-lg shadow-lg">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold" style={{ color: '#38857a' }}>2+</div>
            <div className="text-xs md:text-sm text-gray-600">Years Experience</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Specialized Services Section */}
      <section id="specialized-services" className="relative py-12 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-20 max-w-4xl mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-Poppins, sans-serif text-slate-900 mb-5 leading-tight">
              Expert Software Development Services
              <br className="hidden sm:block" />
              Tailored to Your Business Needs
            </h2>
            {/* <p className="text-lg text-slate-600">
              We deliver enterprise-grade, tailored solutions across the full software development lifecycle to drive efficiency and growth.
            </p> */}
            <div className="mt-6 h-1 w-24 bg-gradient-to-r from-[#38857a] to-[#FF914C] mx-auto rounded-full"></div>
          </div>

          {/* Side-by-Side Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {specializedServices.map((service, index) => (
                <div
                  key={index}
                className="group hover:shadow-xl transition-all duration-300 bg-white border border-slate-200/80 rounded-xl shadow-sm overflow-hidden"
              >
                {/* Icon Header */}
                <div className="p-6 pb-4">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg border-4 border-white bg-gradient-to-r from-[#38857a] to-[#FF914C] mb-4">
                    <div className="text-white">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-3 leading-tight">{service.title}</h3>
                  </div>

                {/* Content */}
                <div className="px-6 pb-6">
                  <p className="text-slate-600 leading-relaxed mb-6 text-sm md:text-base">{service.description}</p>
                        <Button
                          variant="link"
                    className="p-0 h-auto text-[#38857a] font-semibold text-sm hover:text-[#FF914C] transition-colors"
                    onClick={() => router.push(service.route)}
                        >
                          Explore Service
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                </div>
                </div>
              ))}
          </div>
        </div>
      </section>




      {/* Partners Section */}
      <section className="py-12 md:py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1597733336794-12d05021d510?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHw0fHx0ZWNobm9sb2d5fGVufDB8fHxibHVlfDE3NTM5NDYxNDl8MA&ixlib=rb-4.1.0&q=85)'
          }}
        >
          <div className="absolute inset-0 bg-[#38857a]/90"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">Achievement</h2>
            <p className="text-lg sm:text-xl text-white/90">See our success in our numbers.</p>
            <p className="text-sm sm:text-base md:text-lg text-white/80 mt-2">We have come a long way in the last few years...</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8 items-center">
            {partners.map((partner, index) => (
              <div key={index} className="flex justify-center items-center">
                <div className="bg-white/95 backdrop-blur-sm rounded-lg md:rounded-xl p-3 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full h-24 md:h-32 flex items-center justify-center">
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

      {/* Blog Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Latest Insights & Articles
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest trends, insights, and best practices in software development and technology.
            </p>
            <div className="mt-6 h-1 w-24 bg-gradient-to-r from-[#38857a] to-[#FF914C] mx-auto rounded-full"></div>
          </div>

          {/* Blog Slider Container */}
          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={prevBlogSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-50 rounded-full p-3 shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-xl group"
              style={{ left: '-20px' }}
            >
              <ChevronLeft className="h-6 w-6 text-gray-600 group-hover:text-[#38857a] transition-colors" />
            </button>
            
            <button
              onClick={nextBlogSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-50 rounded-full p-3 shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-xl group"
              style={{ right: '-20px' }}
            >
              <ChevronRight className="h-6 w-6 text-gray-600 group-hover:text-[#38857a] transition-colors" />
            </button>

            {/* Slider Container */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentBlogSlide * (100 / blogSlidesPerView)}%)`,
                  width: `${(blogPosts.length / blogSlidesPerView) * 100}%`
                }}
              >
                {blogPosts.map((post, index) => (
                  <div
                    key={post.id}
                    className="px-3"
                    style={{ width: `${100 / blogPosts.length}%` }}
                  >
                    <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden h-full">
                      <div className="relative overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                          <Badge 
                            className="text-xs sm:text-sm font-medium text-white border-0" 
                            style={{ backgroundColor: '#38857a' }}
                          >
                            {post.category}
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="p-4 sm:p-6">
                        <div className="space-y-3">
                          <div className="flex items-center space-x-4 text-xs sm:text-sm text-gray-500">
                            <span>{post.date}</span>
                            <span>•</span>
                            <span>{post.author}</span>
                          </div>
                          <CardTitle className="text-lg sm:text-xl leading-tight text-gray-900 group-hover:text-[#38857a] transition-colors">
                            {post.title}
                          </CardTitle>
                          <CardDescription className="text-gray-600 leading-relaxed text-sm sm:text-base">
                            {post.excerpt}
                          </CardDescription>
                          <Button
                            variant="link"
                            className="p-0 h-auto text-[#FF914C] font-semibold text-sm hover:text-[#38857a] transition-colors"
                          >
                            Read More
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center space-x-2 mt-8">
              {Array.from({ length: Math.max(1, blogPosts.length - blogSlidesPerView + 1) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToBlogSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentBlogSlide === index
                      ? 'bg-[#38857a] scale-110'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-[#38857a] text-[#38857a] hover:bg-[#38857a] hover:text-white transition-all duration-300 px-8"
            >
              View All Articles
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              What Our Clients Say
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about working with Scriza.
            </p>
            <div className="mt-6 h-1 w-24 bg-gradient-to-r from-[#38857a] to-[#FF914C] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={testimonial.id} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex-1 space-y-4">
                    {/* Star Rating */}
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
                    {/* Quote Icon */}
                    <div className="text-4xl text-[#38857a]/20 font-serif leading-none">"</div>
                    
                    {/* Testimonial Text */}
                    <blockquote className="text-gray-700 leading-relaxed text-sm md:text-base italic flex-1">
                      {testimonial.text}
                    </blockquote>
                  </div>
                  
                  {/* Author Info */}
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#38857a] to-[#FF914C] flex items-center justify-center">
                        <span className="text-white font-semibold text-lg">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm md:text-base">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-600 text-xs md:text-sm">
                          {testimonial.position}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Trust Indicators */}
          {/* <div className="mt-12 md:mt-16 text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-[#38857a] mb-2">50+</div>
                <div className="text-sm md:text-base text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-[#38857a] mb-2">100+</div>
                <div className="text-sm md:text-base text-gray-600">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-[#38857a] mb-2">99%</div>
                <div className="text-sm md:text-base text-gray-600">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-[#38857a] mb-2">24/7</div>
                <div className="text-sm md:text-base text-gray-600">Support Available</div>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo-section" className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                Don't wait another minute!
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 px-4">
                Call us today to schedule a free consultation with one of our experts.
              </p>
            </div>

            <Card className="bg-white shadow-xl border-0">
              <CardContent className="p-4 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
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