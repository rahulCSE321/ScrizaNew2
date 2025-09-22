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
  Clock,
  Users,
  TrendingUp,
  Star,
  Building,
  Send,
  UserPlus,
  FileCheck,
  GraduationCap,
  Calculator,
  DollarSign,
  AlertCircle,
  Search,
  Settings,
  Code,
  Rocket,
  Headphones,
  BarChart,
  Monitor,
  ShieldCheck
} from 'lucide-react'




export default function SchoolManagementSoftwarePage() {
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
          message: `School Management Software Demo Request - Selected Option: ${formData.option}`
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

  const administrativeTasks = [
    "Fee collection",
    "Student enrolment",
    "Attendance tracking", 
    "Academic record management"
  ]

  const schoolManagementFeatures = [
    {
      icon: <Calculator className="h-6 w-6" />,
      title: "Accounts management system",
      description: "Our offered technology solutions simplify financial management at schools. With the functionality of fee collection, tracking payment records, generating invoices, and automating financial reports, the offered software ensures ease of operation.",
      additional: "We offer a customizable accounts management system with a choice of payment gateway for online fee collection."
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Attendance management system",
      description: "Making attendance reports was never so easy! A comprehensive set of features makes administration easy. The software can be equipped with biometric integration, smart ID cards, and automated notifications for real-time tracking of student attendance."
    },
    {
      icon: <UserPlus className="h-6 w-6" />,
      title: "Admission management system",
      description: "The entire admission process can be paperless with next-gen software solutions. With centralized data storage, complicated tasks like document verification and seat allocation become easy."
    },
    {
      icon: <FileCheck className="h-6 w-6" />,
      title: "Examination management system",
      description: "Result analysis, grading system, report card generation and various other exam related tasks that were time consuming can now be simplified. With this hi-tech software technology, you can simplify the entire examination process."
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Student/alumni management system",
      description: "We bring forth a secure and easy to use cloud based database management system for student records. With all the data privacy controls, it becomes a trusted solution for academic records management."
    },
    {
      icon: <Building className="h-6 w-6" />,
      title: "ERP school software",
      description: "Foster the environment for efficiency and growth with our comprehensive ERP school management technology. The offered software features customizable functionalities related to documentation, work allocation, enquiry management, transfer certificate, e-learning and more."
    }
  ]

  const benefits = [
    {
      icon: <Star className="h-6 w-6" />,
      title: "Feature-rich",
      description: "With endless features and customization, the management of academic records becomes hassle-free."
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Enhanced productivity",
      description: "Technology allows automation of manual tasks, hence you can save valuable time and resources of our competent staff."
    },
    {
      icon: <Monitor className="h-6 w-6" />,
      title: "Ease of Use",
      description: "We bring forth a user-friendly interface and easy navigation so that your staff can quickly learn to use the system effectively."
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Cost-Effectiveness",
      description: "Compared to traditional paper-based record-keeping systems, our offered ERP software is affordable. No need for physical storage space, reduces printing costs and minimizes errors of manual data entry."
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "Data Privacy",
      description: "We prioritize student data security, therefore, we use robust data encryption and regular backups."
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: "Scalability",
      description: "No need to compromise on performance or functionality. Start with a little investment and seamlessly scale as your institution grows."
    }
  ]

  const feeManagementFeatures = [
    "Error-free fee collection",
    "Automated payment tracking",
    "Hassle-free receipt generation"
  ]

  const developmentSteps = [
    {
      icon: <Search className="h-6 w-6" />,
      title: "We understand your requirements",
      description: "We document your specific requirements, like the required features, functionality, and integration technology."
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "We begin the system design",
      description: "The comprehensive system design is then developed which includes the software architecture, modules, and database structure."
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Software development and testing",
      description: "In the next step, the actual coding starts. We use high performing programming languages and compatible frameworks. Then we conduct testing to identify and fix any bugs or errors within the software."
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Deployment and user training",
      description: "Once the software is error-free, we deploy it on the desired platform or server. We also provide user training for efficient use of the software."
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: "Maintenance and support",
      description: "We provide maintenance and support services to address all of your issues. We are available 24/7 for software update requests."
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header currentPage="school-management" />

      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div className="w-full">
          <img 
            src="/schoolManagement.png" 
            alt="School Management Software" 
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
                  School Management Software
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  A future-focused management solution for finance and administration tasks
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Managing a school's administrative tasks can be challenging and time-consuming
                </p>
                <p className="text-2xl font-bold text-gray-900 mb-6">
                  But not anymore!
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Scriza presents the ultimate feature-rich management solution for all those hectic tasks like:
                </p>
                
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {administrativeTasks.map((task, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-[#38857a]" />
                      <span className="text-gray-700">{task}</span>
                    </div>
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">
                  We are here to simplify and streamline your school management operations.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  We present future-ready management technology. Automate routine tasks, improve departmental communication, and focus on student growth and academic success.
                </p>
                <p className="text-lg font-semibold text-gray-900 mb-6">
                  No more paperwork and erroneous overload;
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Embrace the hassle-free school management solution by getting in touch with us. Schedule a discovery call and unlock the growth possibilities.
                </p>
              </div>

              {/* Secure Cloud Based System */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  A secure cloud based school management system
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  After 10 successful years and 50+ successful implementations, we take pride in our offered school management technology solutions. Thousands of schools and educational institutes across the country have faith in our software system. We are the preferred choice for the automation of daily administrative tasks because of the following features:
                </p>
                
                <div className="space-y-8">
                  {schoolManagementFeatures.map((feature, index) => (
                    <div key={index} className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white">
                          {feature.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed ml-12">{feature.description}</p>
                      {feature.additional && (
                        <p className="text-gray-600 leading-relaxed ml-12 italic">{feature.additional}</p>
                      )}
                    </div>
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed mt-8">
                  Our software developers have decades of experience in catering to your unique needs. Connect with us to embrace the power of technology.
                </p>
              </div>

              {/* Benefits */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Benefits of using our student database management system
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  We leverage our industry expertise in software development. So, here comes a customizable, easy to use and affordable software system for student database management.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="space-y-4">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white flex-shrink-0">
                          {benefit.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                          <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Fee Management System */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Easy to use fee management system
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  You don't have to hire a tech-savvy staff to use our software. Anyone can quickly navigate through various fee-related tasks
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {feeManagementFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3 bg-gradient-to-r from-[#38857a]/10 to-[#FF914C]/10 rounded-lg p-4">
                      <CheckCircle className="h-5 w-5 text-[#38857a]" />
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Moreover, features like automated calculations and real-time updates make fee management a breeze
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Gone are the days of complex manual fee management. Leverage technology, save time, reduce errors, and try our hassle-free experience.
                </p>
              </div>

              {/* Development Process */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  How do we develop educational institute management software?
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  We follow several key steps to meet your unique business needs. Below are some essential steps include in the successful implementation of school management software:
                </p>
                
                <div className="space-y-8">
                  {developmentSteps.map((step, index) => (
                    <div key={index} className="space-y-4">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center text-white font-bold text-lg">
                          {index + 1}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                          <p className="text-gray-600 leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cost Information */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  What is the cost of our institute management software?
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  The specific features you need determine the cost of the management software. Generally, our pricing starts at <span className="font-bold text-[#38857a]">INR 20,000</span> for small institutions and can go up to <span className="font-bold text-[#38857a]">INR 50,000 or more</span> for larger institutions.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Rest assured, our customizable packages, transparent pricing and affordable rates, make us the preferred choice. Connect now to get a detailed estimate for your software package.
                </p>
              </div>

              {/* Connect Now CTA */}
              <div className="bg-gradient-to-r from-[#38857a] to-[#FF914C] rounded-2xl p-8 text-white">
                <h2 className="text-3xl font-bold mb-4">Connect now</h2>
                <p className="text-lg text-white/90 mb-6">
                  Manual errors and time consuming administrative tasks can be a thing of the past. Streamline school management operations with our future-ready software technology.
                </p>
                <p className="text-white/90 mb-6">
                  Contact us today for a personalized demo.
                </p>
                <Button 
                  size="lg" 
                  className="bg-white text-[#38857a] hover:bg-white/90"
                  onClick={() => document.getElementById('demo-section')?.scrollIntoView({behavior: 'smooth'})}
                >
                  Schedule Personalized Demo
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
            question: "What is School Management Software?",
            answer: "School Management Software is a digital platform that helps schools, colleges, and educational institutions manage daily operations such as student admissions, attendance, exams, fees, staff management, and communication between teachers, parents, and students."
          },
          {
            question: "What are the key features of School Management Software?",
            answer: "Most systems include: Student information management Attendance and timetable management Online fee collection & finance management Examination & grade management Parent-teacher communication portal Library, transport, and hostel management Mobile app access for parents and teachers"
          },
          {
            question: "How does School Management Software benefit schools?",
            answer: "It improves efficiency by: Reducing paperwork and manual errors Automating administrative tasks Enhancing parent-teacher communication Ensuring transparency in fee collection & academics Providing real-time reports for better decision-making"
          },
          {
            question: "Is School Management Software suitable for small schools?",
            answer: "Yes. School Management Software is scalable and can be customized for small schools, coaching centers, or large universities. Small schools can start with basic features like attendance, fees, and exams, and expand later as needed."
          },
          {
            question: "How secure is the data in School Management Software?",
            answer: "Most modern systems use cloud-based solutions with encryption, secure login, role-based access, and regular backups to ensure student and staff data is safe from unauthorized access."
          }
        ]}
      />
          
      
      <Certification />
      <Footer />
      <ChatWidget />
    </div>
  )
}
