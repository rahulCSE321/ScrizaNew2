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
  Cpu,
  BookOpen,
  Award,
  Target,
  Sparkles
} from 'lucide-react'





export default function CustomSoftwareDevelopmentPage() {
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
          message: `Custom Software Development Demo Request - Selected Option: ${formData.option}`
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

  const developmentServices = [
    "Web Application Development",
    "Mobile App Development",
    "Enterprise Software Solutions",
    "E-commerce Platforms",
    "API Development & Integration",
    "Database Design & Management",
    "Cloud-based Applications",
    "Software Maintenance & Support"
  ]

  const technologies = [
    "React.js & Next.js",
    "Node.js & Express",
    "Python & Django",
    "PHP & Laravel",
    "React Native & Flutter",
    "AWS & Azure Cloud",
    "MongoDB & PostgreSQL",
    "Docker & Kubernetes"
  ]

  const features = [
    {
      icon: <Code className="h-8 w-8 text-blue-600" />,
      title: "Custom Development",
      description: "Tailored software solutions built specifically for your business requirements"
    },
    {
      icon: <Cpu className="h-8 w-8 text-green-600" />,
      title: "Modern Technologies",
      description: "Using latest frameworks and technologies for scalable, maintainable code"
    },
    {
      icon: <Shield className="h-8 w-8 text-purple-600" />,
      title: "Security First",
      description: "Built-in security measures and best practices for data protection"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-orange-600" />,
      title: "Scalable Architecture",
      description: "Designed to grow with your business and handle increasing demands"
    }
  ]

  const developmentProcess = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "Understanding your requirements and creating detailed project roadmap"
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "Creating user-friendly designs and interactive prototypes"
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Agile development with continuous testing and quality assurance"
    },
    {
      step: "04",
      title: "Deployment & Support",
      description: "Seamless deployment with ongoing maintenance and support"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Custom Software Development
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Transform Your Business with Tailored Software Solutions
            </p>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              We create powerful, scalable custom software applications that perfectly align with your business
              objectives. From web applications to mobile apps and enterprise solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 text-lg">
                Start Your Project
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg">
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Development Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive software development solutions for every need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {developmentServices.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="mb-3">
                  <Code className="h-8 w-8 text-blue-500 mx-auto" />
                </div>
                <h3 className="font-semibold text-gray-900">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Development Services
            </h2>
            <p className="text-xl text-gray-600">
              Professional approach to custom software development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-600">
              Modern tech stack for robust and scalable solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <Cpu className="h-6 w-6 text-blue-500 mx-auto mb-2" />
                <span className="text-sm font-medium text-gray-900">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600">
              Structured approach ensuring quality and timely delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {developmentProcess.map((process, index) => (
              <div key={index} className="text-center">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                    {process.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Booking Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's Discuss Your Project
            </h2>
            <p className="text-xl text-gray-100">
              Ready to transform your business with custom software? Let's talk!
            </p>
          </div>

          <DemoBookingForm onSubmit={handleDemoSubmit} />
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ
        title="Custom Software Development FAQ"
        faqs={[
          {
            question: "What is custom software development?",
            answer: "Custom software development is the process of creating software applications specifically designed to meet the unique requirements of your business. Unlike off-the-shelf software, custom solutions are built from scratch to address your specific challenges and workflows."
          },
          {
            question: "How long does it take to develop custom software?",
            answer: "The development timeline varies depending on the complexity and scope of your project. Simple applications can take 3-6 months, while complex enterprise solutions may take 8-18 months. We provide detailed project timelines during the planning phase."
          },
          {
            question: "What technologies do you use?",
            answer: "We use modern, industry-standard technologies including React, Node.js, Python, Java, .NET, cloud platforms (AWS, Azure), and various databases. Our technology stack is chosen based on your specific requirements and business goals."
          },
          {
            question: "Do you provide ongoing support and maintenance?",
            answer: "Yes, we offer comprehensive post-launch support including bug fixes, security updates, feature enhancements, and technical support. We provide different maintenance packages to suit your needs and budget."
          },
          {
            question: "How much does custom software development cost?",
            answer: "The cost varies based on project complexity, features, technology stack, and timeline. We provide detailed quotes after understanding your requirements. Our pricing is competitive and transparent with no hidden costs."
          }
        ]}
      />
      <FAQ
        title="Frequently Asked Questions"
        faqs={[
          {
            question: "What is Custom Software Development?",
            answer: "Custom Software Development refers to the process of designing, developing, and deploying software applications tailored specifically to meet the unique requirements of a business or organization. Unlike off-the-shelf software, custom solutions are built to solve specific business challenges, optimize workflows, and integrate seamlessly into your operations."
          },
          {
            question: "Who should opt for Custom Software Development?",
            answer: "Custom Software Development is ideal for: Businesses with unique processes not addressed by standard software, Startups with innovative ideas, Enterprises needing system integrations, Companies requiring automation of manual tasks, Organizations aiming to improve internal productivity and customer experience, Any business looking for scalable and secure digital solutions."
          },
          {
            question: "What types of custom software do you develop?",
            answer: "We develop a wide range of custom solutions, including: Web applications (CRM, ERP, e-commerce platforms), Mobile applications (iOS, Android), Enterprise software solutions, SaaS (Software as a Service) products, APIs and system integrations, Business automation software, Data analytics and reporting tools, Cloud-based software solutions."
          },
          {
            question: "How long does custom software development take?",
            answer: "The timeline depends on the project’s complexity, scope, and features. Typically: Small projects: 4–8 weeks, Medium projects: 2–4 months, Large-scale solutions: 6–12+ months. We provide a detailed timeline after understanding your specific requirements."
          },
          {
            question: "How do you ensure the software meets my business needs?",
            answer: "Our process includes: Detailed requirement gathering and analysis, Collaborative discussions to finalize project scope, Prototyping and wireframing for early feedback, Agile development with iterative delivery, Regular client reviews during development, Comprehensive testing (unit, integration, performance, security), Final delivery with documentation and training."
          },
          {
            question: "Will my software be scalable in the future?",
            answer: "Yes, we build custom software with scalability in mind: Modular architecture, Cloud compatibility, Microservices (where applicable), Database optimization for growing data needs. This ensures your solution grows with your business."
          },
          {
            question: "What technologies do you use for custom software development?",
            answer: "We work with a wide range of technologies, including but not limited to: Backend: Node.js, Python, Java, .NET, PHP, Frontend: React, Angular, Vue.js, Mobile: Flutter, React Native, Swift, Kotlin, Database: MySQL, PostgreSQL, MongoDB, Firebase, Cloud: AWS, Google Cloud, Microsoft Azure."
          },
        ]}
      />






      <Certification />
      <Footer />
      <ChatWidget />
    </div>
  )
}
