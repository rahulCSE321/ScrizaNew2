'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ChatWidget from '@/components/ChatWidget'
import DemoBookingForm from '@/components/DemoBookingForm'
import Certification from '@/components/Certification'
import FAQ from '@/components/FAQ'
  
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
  Lock,
  Layers,
  ClipboardList,
  MonitorCheck,
  BadgeCheck,
  Scale,
  TrendingUpIcon,
  FileCheck,
  UserCog,
  Banknote,
  ChevronRight,
  Award,
  Building2,
  HeadphonesIcon,
  Wrench,
  Wallet,
  ShieldCheck,
  Code,
  Server,
  RefreshCw,
  BarChart,
  Link,
  Building3,
  Landmark,
  PiggyBank,
  Receipt,
  Car,
  Home
} from 'lucide-react'

export default function FintechSoftwarePage() {
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
          message: `Fintech Software Demo Request - Selected Option: ${formData.option}`
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

  const fintechChallenges = [
    "Basic Auth, Auth 1, Auth 2",
    "Cybersecurity Threats",
    "Compliance requirements",
    "Ever evolving landscape",
    "Staying ahead of the competition"
  ]

  const customDevelopmentReasons = [
    {
      icon: <Award className="h-6 w-6" />,
      title: "Decade long expertise in creating customized applications",
      description: "Proven track record with extensive experience in fintech software development"
    },
    {
      icon: <Handshake className="h-6 w-6" />,
      title: "End-to-end collaboration with clients",
      description: "Complete partnership approach from concept to deployment and beyond"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Development of scalable and flexible solutions",
      description: "Future-ready software that grows with your business requirements"
    },
    {
      icon: <MonitorCheck className="h-6 w-6" />,
      title: "Focus on user-friendly interfaces and seamless integrations",
      description: "Intuitive design with smooth connectivity to existing systems"
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "Emphasis on data security and reliability",
      description: "Robust security measures to protect sensitive financial data"
    },
    {
      icon: <HeadphonesIcon className="h-6 w-6" />,
      title: "Ongoing support and maintenance services",
      description: "Continuous assistance to ensure optimal performance"
    },
    {
      icon: <Building className="h-6 w-6" />,
      title: "Deep fintech industry knowledge",
      description: "Specialized understanding of financial technology requirements"
    }
  ]

  const softwareServices = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Custom Applications",
      description: "Tailored software solutions based on your business requirements and budget preferences."
    },
    {
      icon: <Calculator className="h-6 w-6" />,
      title: "Accounting Software",
      description: "Feature rich software technology for accounting processes, improved accuracy, and compliance with regulatory standards."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "CRM (Customer Relationship Management)",
      description: "Powerful CRM systems for client management, lead conversion, sales management, and work automation."
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Automation Software",
      description: "Automate manual and repetitive tasks for improved efficiency, reduction and better utilization of resources."
    },
    {
      icon: <Wallet className="h-6 w-6" />,
      title: "Payments Wallet",
      description: "Secure and user-friendly digital wallet platforms for faster and safer online transactions."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Risk Management",
      description: "Tools and frameworks to handle financial risks with regulatory compliance and data security."
    }
  ]

  const fintechApplications = [
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "Payments",
      description: "Seamless account management and fund transfers."
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Investment",
      description: "Risk assessment and wealth management for informed investments."
    },
    {
      icon: <Landmark className="h-6 w-6" />,
      title: "Banking",
      description: "Secure and convenient access to banking services."
    },
    {
      icon: <PiggyBank className="h-6 w-6" />,
      title: "Budgeting",
      description: "Track expenses, create budgets and manage personal finance."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Insurance",
      description: "Digital platform for hassle-free insurance policy management."
    }
  ]

  const unmatchedFeatures = [
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Affordable and Scalable Solutions",
      description: "We enable you to embrace cutting-edge technologies at a competitive price."
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Analytics and Reporting",
      description: "Advanced monitoring and reporting solutions to make informed financial decisions."
    },
    {
      icon: <Link className="h-6 w-6" />,
      title: "API Integrations",
      description: "Custom integration for connection with external platforms and systems. Hassle-free data exchange and process synchronization."
    },
    {
      icon: <HeadphonesIcon className="h-6 w-6" />,
      title: "Ongoing Support and Maintenance",
      description: "Reliable and round the clock support for continuous operation and enhancement of the fintech software solutions."
    }
  ]

  const softwareTypes = [
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "Payment Processing",
      description: "Handle online payments through various payment methods and gateways."
    },
    {
      icon: <Banknote className="h-6 w-6" />,
      title: "Lending Platforms",
      description: "Customized solutions for lending and borrowing activities between individuals or businesses."
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Digital Banking Apps",
      description: "User-friendly mobile and web applications to manage finances, make transactions, and access banking services."
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Wealth Management Software",
      description: "Advanced tools and platforms for the management of investments, assets, and portfolios."
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: "Financial Analysis Solution",
      description: "Data-driven analysis software applications for risk assessment and decision making in the fintech industry."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Insurance Technology Solution",
      description: "Robust solutions with features like policy management, claims processing, and underwriting."
    },
    {
      icon: <LineChart className="h-6 w-6" />,
      title: "Trading and Investment Platforms",
      description: "User-friendly technology for online trading, investment management, and portfolio tracking."
    }
  ]

  const whyChooseUs = [
    {
      icon: <RefreshCw className="h-6 w-6" />,
      title: "End-to-End Service",
      description: "From initial consultation and requirements gathering to design, development, testing, and deployment, we focus on all aspects of the project development."
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Competitive Pricing",
      description: "We are preferred for our transparent and competitive pricing models. Our price range suit different budgets and sizes of businesses."
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Timeliness",
      description: "Our dedicated team follows agile development methodologies. This is why we are able to guarantee timely delivery without compromising on quality."
    },
    {
      icon: <BadgeCheck className="h-6 w-6" />,
      title: "Compliance",
      description: "We prioritize data protection and security requirements. We develop software with robust security measures and adherence to relevant compliance guidelines."
    },
    {
      icon: <UserCheck className="h-6 w-6" />,
      title: "Professionalism",
      description: "Our team comprises experienced software developers who believe in clear communication and effective collaboration."
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header currentPage="fintech" />

      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div className="w-full">
          <img
            src="/fintech.png"
            alt="Fintech Software"
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
                <h1 className="text-3xl font-bold text-gray-900 mb-6">
                  Fintech Software
                </h1>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  Navigating fintech challenges becomes easy with our offered software development services.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  At Scriza, we have helped over 500 clients from the fintech industry. We are confident enough in our technology advancements that we can develop a custom solution to empower your fintech business.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our software development expertise enables you to tackle the following challenges head-on:
                </p>

                <div className="space-y-3 mb-8">
                  {fintechChallenges.map((challenge, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <AlertCircle className="h-5 w-5 text-red-500" />
                      <span className="text-gray-700">{challenge}</span>
                    </div>
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">
                  So what are you waiting for? Harness the power of technology and overcome the hurdles of the fintech industry with ease. Reach out to us and get better at what you are doing!
                </p>
              </div>

              {/* Customized Software Development */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Customized software development for Fintech Industry
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  With a track record of creating dozens of fintech software applications, Scriza becomes the top-rated choice for custom development services. Below are the top 7 reasons to consider our custom software development services.
                </p>

                <div className="space-y-6">
                  {customDevelopmentReasons.map((reason, index) => (
                    <div key={index} className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white">
                          {reason.icon}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">{index + 1}. {reason.title}</h3>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed ml-12">{reason.description}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-[#38857a]/10 to-[#FF914C]/10 rounded-xl">
                  <p className="text-gray-700 leading-relaxed">
                    We incorporate cutting edge technology to deliver uniquely developed software solutions suitable to your business requirements. Get in touch with us and thrive in the competitive fintech industry.
                  </p>
                </div>
              </div>

              {/* What's Included */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  What is included in fintech software development services?
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Our software development services include myriads of solutions to outperform in the fintech industry.
                </p>

                <div className="space-y-8">
                  {softwareServices.map((service, index) => (
                    <div key={index} className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white">
                          {service.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed ml-12">{service.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applications */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  What are the applications of fintech software services?
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Our offered software features diverse applications across the fintech software, such as:
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  {fintechApplications.map((application, index) => (
                    <div key={index} className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white">
                          {application.icon}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">{application.title}</h3>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{application.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Unmatched Features */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Unmatched features of our fintech application development services
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                  {unmatchedFeatures.map((feature, index) => (
                    <div key={index} className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white">
                          {feature.icon}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Types of Software Development */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  What are the types of fintech software development provided by us?
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  A wide range of solutions are available to serve the financial technology industry. Some of the types of fintech software development provided by us include:
                </p>

                <div className="space-y-8">
                  {softwareTypes.map((type, index) => (
                    <div key={index} className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white">
                          {type.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">{type.title}</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed ml-12">{type.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Why choose us for fintech software development?
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  We stand out in the industry due to the following compelling reasons:
                </p>

                <div className="space-y-8">
                  {whyChooseUs.map((reason, index) => (
                    <div key={index} className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white">
                          {reason.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">{reason.title}</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed ml-12">{reason.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Us CTA */}
              <div className="bg-gradient-to-r from-[#38857a] to-[#FF914C] rounded-2xl p-8 text-white">
                <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
                <p className="text-lg text-white/90 mb-6">
                  Ready to revolutionize your fintech business? Discuss your software needs with us.
                </p>
                <p className="text-white/90 mb-6">
                  Get in touch right now to embark on the journey toward growth and profitability with our cutting-edge fintech software solutions.
                </p>
                <Button
                  size="lg"
                  className="bg-white text-[#38857a] hover:bg-white/90"
                  onClick={() => document.getElementById('demo-section')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Schedule Free Demo
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
      <FAQ
        title="Frequently Asked Questions"
        faqs={[
          {
            question: "What is Fintech Software Development?",
            answer: "Fintech Software Development involves creating technology-driven solutions for the financial industry. This includes banking apps, payment platforms, digital wallets, investment platforms, lending software, and other solutions that automate financial operations, improve customer experience, and ensure regulatory compliance."
          },
          {
            question: "Who should use Fintech Software Development services?",
            answer: "Our services are ideal for: Banks and financial institutions, Fintech startups, Payment gateway providers, Lending and investment platforms, Insurance companies, Accounting and bookkeeping solution providers, and Any business looking to digitize financial operations or create innovative financial products."
          },
          {
            question: "What types of Fintech software do you develop?",
            answer: "We develop a wide range of Fintech solutions, including: Mobile banking and payment apps, Digital wallets and UPI apps, Online lending and loan management platforms, Investment and trading platforms, Accounting, bookkeeping, and invoicing software, Peer-to-peer (P2P) payment systems, Cryptocurrency wallets and blockchain-based financial apps, and Financial analytics and reporting tools."
          },
          {
            question: "How does your Fintech software development process work?",
            answer: "Our process includes: Requirement Analysis, Planning & Design (wireframes, UI/UX, roadmap), Development with secure and scalable coding, Rigorous testing (functional, performance, security), Deployment in production with secure hosting, and Maintenance with updates and compliance checks."
          },
          {
            question: "How do you ensure security in Fintech software?",
            answer: "Security is our top priority. We implement: End-to-end encryption (SSL/TLS, AES), Multi-factor authentication (MFA), Role-based access control, Regular security audits and penetration testing, and Compliance with PCI DSS, GDPR, RBI guidelines, and other regulations."
          },
          {
            question: "Can Fintech software integrate with other financial services?",
            answer: "Yes, we provide seamless integration with: Banks and payment gateways, Credit bureaus and KYC/AML services, Accounting and ERP systems, Third-party APIs for investments, trading, or insurance, and Blockchain/cryptocurrency platforms."
          },
          {
            question: "How long does it take to develop Fintech software?",
            answer: "Timelines vary depending on complexity: Simple apps (digital wallets, payment apps): 2–4 months, Medium solutions (loan management, investment platforms): 4–8 months, Large-scale enterprise systems (core banking, multi-bank integrations): 6–12+ months. Final timelines are provided after requirement analysis."
          },
          {
            question: "Can the software be scalable for future growth?",
            answer: "Yes, our solutions are built with scalability in mind: Cloud-ready architecture, Microservices for modular expansion, Database optimization for large data volumes, and Integration-ready design for adding new features or services."
          },
          {
            question: "Do you provide regulatory compliance support?",
            answer: "Yes, we ensure compliance with financial regulations including: RBI and SEBI guidelines, PCI DSS for payments, GDPR for data privacy, and KYC/AML requirements. We collaborate with your compliance team to meet all necessary standards."
          }
        ]}
      />


      <Certification />
      <Footer />
      <ChatWidget />
    </div>
  )
}