'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ChatWidget from '@/components/ChatWidget'
import DemoBookingForm from '@/components/DemoBookingForm'
import Certification from '@/components/Certification'
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
  Wrench
} from 'lucide-react'



export default function HrmsSoftwarePage() {
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
          message: `HRMS Software Demo Request - Selected Option: ${formData.option}`
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
    "Outdated systems",
    "Document inefficiencies", 
    "Disorganized processes"
  ]

  const benefits = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Increase your team efficiency",
      description: "Automate attendance tracking and payroll processing. No need to do manual computation, simply choose Scriza to get error free calculations."
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Save money",
      description: "Reduce 30% administrative costs with automated processes. Our software eliminates the need for tiring paperwork and manual work."
    },
    {
      icon: <BadgeCheck className="h-6 w-6" />,
      title: "Be more compliant",
      description: "You can easily adhere to the laws and guidelines of labor. Our software is regularly updated to reflect changes in legal requirements."
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Go big with us",
      description: "Our HR management software scales with you. The features can upgrade when your business scales up."
    }
  ]

  const whyChooseUs = [
    "Manual data entry is prone to errors. It can lead to payroll mistakes and compliance issues. Our software automates processes to minimize errors and ensure accuracy.",
    "Traditional HR management involves lengthy paperwork and manual tracking. Our software streamlines these processes to save you valuable time.",
    "Keeping up with changing regulations is tough. Our software stays updated with the latest laws, so there is no risk of non-compliance.",
    "HR and payroll management become more complex when your brand grows. Our software scales with your business. We offer solutions for every stage of growth."
  ]

  const winningAttributes = [
    {
      title: "HRMS Software for Small Business",
      description: "It is tailored to reduce the complexities of operating a small. Enjoy tools for managing employee records, performance reviews and benefits with ease."
    },
    {
      title: "Advanced HRMS Payroll",
      description: "Our software integrates HR and payroll functionalities together. We give a unified solution for all your needs. Calculate payroll and handle team attendance all in one place."
    },
    {
      title: "Best Software for HR Management",
      description: "Our HR management software covers every aspect of employee management. Hiring processes and team training becomes easy."
    }
  ]

  const bespokeFeatures = [
    {
      icon: <Calculator className="h-6 w-6" />,
      title: "Automated Payroll Processing",
      description: "Automated calculations makes your payroll operations timely. There will be no errors in calculating tax deductions and direct deposits. Our system supports multiple pay schedules and complex compensation structures."
    },
    {
      icon: <UserCog className="h-6 w-6" />,
      title: "Employee Self-Service Portal",
      description: "Employees can access payslips, update personal information and request time off on this portal. The administrative burden gets reduced, and your team feels satisfied."
    },
    {
      icon: <Layers className="h-6 w-6" />,
      title: "Integrated HRMS Payroll Management",
      description: "Our integrated system combines HRMS and payroll functionalities. No need for multiple systems for data entry."
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Advanced Reporting and Analytics",
      description: "Gain insights into your workforce with customizable reports. Track employee turnover, payroll expenses and compliance status."
    },
    {
      icon: <MonitorCheck className="h-6 w-6" />,
      title: "User-Friendly Interface",
      description: "The intuitive interface makes it easy for every team member. Our software is designed for users of all skill stages."
    }
  ]

  const clientResults = [
    {
      icon: <TrendingDown className="h-6 w-6" />,
      title: "30% Reduction in administrative costs",
      description: "Businesses have reported a reduction in administrative costs because their processes are automated."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "50% Faster Payroll Processing",
      description: "The processing time gets shorter and the clients can now focus on strategic tasks rather than manual calculations."
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "95% Employee Satisfaction",
      description: "Self-service portals and correct salary calculations increased the satisfaction rate among employees."
    }
  ]

  const whyNumber1 = [
    "We have successfully implemented our software for over 5000 businesses worldwide. Our solutions serve small startups and large corporations.",
    "We offer competitive pricing plans to fit your budget. Enjoy top-notch yet affordable management features.",
    "Our dedicated support team is available to assist you with issues. We provide comprehensive training to ensure stress-free implementation.",
    "We develop HRM technology as per the needs of your business. We have got you covered for basic features to advanced functionalities."
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header currentPage="hrms" />

      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div className="w-full">
          <img 
            src="/HRM.png" 
            alt="HRMS Software" 
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
                  Experience 200X Business Growth with the Best HR and Payroll Software
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  Scriza is your one-stop solution for HR and payroll management.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Choose us if you are still struggling with:
                </p>
                
                <div className="space-y-3 mb-8">
                  {businessChallenges.map((challenge, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <AlertCircle className="h-5 w-5 text-red-500" />
                      <span className="text-gray-700">{challenge}</span>
                    </div>
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Scriza brings forth comprehensive HR and payroll software designed to meet your needs. Our solutions are best suited for small businesses as well as large enterprise. Schedule a discovery call to learn how our solutions can change your HR management and payroll processes.
                </p>
                <p className="text-gray-700 leading-relaxed font-semibold">
                  Your business deserves only the best HR software!! Choose Scriza.
                </p>
              </div>

              {/* Why Best HR Software */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Every organization should be able to effectively manage human resources. Earlier, the methods were time-consuming and error-prone. Are you still relying on those costly techniques?
                </p>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Well, here our modern HR software comes into action. This platform stands out as the best HR and payroll software. It is designed to effortlessly deal with the complexities of HR management.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white">
                          {benefit.icon}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">{benefit.title}</h3>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Choose Scriza */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Why choose Scriza Software Solutions
                </h2>
                
                <div className="space-y-6">
                  {whyChooseUs.map((reason, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-[#38857a] mt-0.5" />
                      <p className="text-gray-700 leading-relaxed">{reason}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Winning Attributes */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Winning attributes of the best HR and Payroll Software
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Scriza HR software solution is recognized as the best in the market due to its comprehensive specs.
                </p>
                
                <div className="space-y-8">
                  {winningAttributes.map((attribute, index) => (
                    <div key={index} className="space-y-3">
                      <h3 className="text-xl font-semibold text-gray-900" style={{color: '#38857a'}}>{attribute.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{attribute.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Fast ROI */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Fast ROI with HR Management Software: See Results in Just 6-12 Months
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  When you invest in our HR and payroll software, you are investing in a strategic move toward cost savings. On average, businesses experience a significant return on investment within just 6 months of implementation. This rapid ROI is driven by the increased efficiency that our software provides.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Your team reduces manual errors when you automate administrative tasks. In simple words, our software cuts down on labor costs and minimizes the risk of costly mistakes. Companies can reduce time spent on routine tasks by up to 60%. Enjoy around 30% decrease in administrative expenses. You get improved productivity with accelerated return on your investment.
                </p>
                <p className="text-gray-700 leading-relaxed font-semibold">
                  Invest in our software and experience the difference in just a few months.
                </p>
              </div>

              {/* Bespoke Features */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Bespoke features of our HR and Payroll Software
                </h2>
                
                <div className="space-y-8">
                  {bespokeFeatures.map((feature, index) => (
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
              </div>

              {/* Real Results */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Real Results from Our Clients
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Our clients have experienced impressive results after implementing our HR and payroll software:
                </p>
                
                <div className="grid md:grid-cols-3 gap-8">
                  {clientResults.map((result, index) => (
                    <div key={index} className="space-y-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white">
                        {result.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">{result.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{result.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why #1 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Scriza, the #1 HR payroll management software
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  We are the apt technology partners for your business because we have
                </p>
                
                <div className="space-y-6">
                  {whyNumber1.map((reason, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Award className="h-5 w-5 text-[#38857a] mt-0.5" />
                      <p className="text-gray-700 leading-relaxed">{reason}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Get Started CTA */}
              <div className="bg-gradient-to-r from-[#38857a] to-[#FF914C] rounded-2xl p-8 text-white">
                <h2 className="text-3xl font-bold mb-4">Get Started Today!</h2>
                <p className="text-lg text-white/90 mb-6">
                  Outdated systems can hold your organization back. Beat the competition with the software designed to make your life easier.
                </p>
                <p className="text-white/90 mb-6">
                  Contact Scriza today to schedule a free demo or request more information. Let us show you how our HR and payroll software can streamline your business operations.
                </p>
                <Button 
                  size="lg" 
                  className="bg-white text-[#38857a] hover:bg-white/90"
                  onClick={() => document.getElementById('demo-section')?.scrollIntoView({behavior: 'smooth'})}
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

      <Certification />
      <Footer />
      <ChatWidget />
    </div>
  )
}
