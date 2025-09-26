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
      <section className="relative w-full overflow-hidden">
        <div className="w-full">
          <img 
            src="/CustomSoftwareDevelopment8.png" 
            alt="Micro ATM Machine API Providers" 
            className="w-full h-auto max-h-[500px] object-contain object-center bg-gray-100" 
          />
          <div className="absolute inset-0 flex items-center justify-start pl-8">
            <h1 className="text-5xl font-bold text-black">
              Custom Software Development
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Introduction */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="mb-6">
                  <div className="w-full h-64 bg-gray-200 rounded-lg mb-6 flex items-center justify-center text-gray-500">
                    Images
                  </div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-4">
                    Custom Software Development for 50% higher revenue growth
                  </h1>
                  <h2 className="text-xl text-gray-700 mb-6">
                    Workflow efficiency, productivity, customer satisfaction and whatnot!
                  </h2>
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  The custom software development services by Scriza can boost your business to the next level of efficiency.
                </p>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Invest in our bespoke software and tailor-made technology solutions. These are designed to fulfil the unique requirements of your business.
                </p>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Scriza is a bespoke solution provider that drives results. So get in touch with our technology experts and enjoy 50% higher revenue from now onwards.
                </p>
                
                <div className="flex space-x-4">
                  <Button className="bg-blue-600 text-white hover:bg-blue-700">
                    Contact Us
                  </Button>
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                    About
                  </Button>
                </div>
              </div>

              {/* Business Efficiency */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  How do custom application development services make your business 50% more efficient?
            </h2>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Every business has unique software needs. Off-the-shelf solutions often fall short in completing such specific requirements. Our custom software development ensures that every feature is designed to fit your business processes.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900">100% Customization:</h3>
                        <p className="text-gray-600">Get software that works exactly the way you want.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <TrendingUp className="h-6 w-6 text-blue-500 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900">Scalability:</h3>
                        <p className="text-gray-600">Software solutions that can expand to match your business growth.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Settings className="h-6 w-6 text-purple-500 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900">Flexibility:</h3>
                        <p className="text-gray-600">Ready to roll software features with changing business needs.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Zap className="h-6 w-6 text-yellow-500 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900">Automate Processes:</h3>
                        <p className="text-gray-600">Reduce manual work by automating routine tasks.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <BarChart3 className="h-6 w-6 text-green-500 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900">Improve Workflow:</h3>
                        <p className="text-gray-600">Enhanced coordination and workflow management.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Database className="h-6 w-6 text-red-500 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900">Real-time Info Access:</h3>
                        <p className="text-gray-600">Get real-time data analysis for your business operations.</p>
                      </div>
                    </div>
                  </div>
          </div>

                <div className="w-full h-48 bg-gray-200 rounded-lg mt-8 flex items-center justify-center text-gray-500">
                  Images
                </div>
              </div>

              {/* Cost-Effective Section */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Cost-Effective Custom business software
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Investing in custom software seem costly upfront to small sized business. Though your investment pays off in the long run. Our custom software development services are designed to provide maximum return on investment.
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <DollarSign className="h-6 w-6 text-green-500 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Reduce Operational Costs:</h3>
                      <p className="text-gray-600">Streamline processes to save money.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <TrendingUp className="h-6 w-6 text-blue-500 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Increase Revenue:</h3>
                      <p className="text-gray-600">Improved efficiency leads to better business performance.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Clock className="h-6 w-6 text-purple-500 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Long-Term Savings:</h3>
                      <p className="text-gray-600">Fewer issues and updates compared to off-the-shelf software.</p>
                    </div>
          </div>
        </div>
                
                <Button variant="outline" className="mb-6">
                  About
                </Button>
                
                <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
                  Images
                </div>
              </div>

              {/* Enhanced Security */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  #1 Custom Software Company offering Enhanced Security
            </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Protect your business data with custom software solutions that offer enhanced security features. Our custom software company ensures your data is secure from breaches and unauthorized access.
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <Lock className="h-6 w-6 text-red-500 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Data Encryption:</h3>
                      <p className="text-gray-600">Keep sensitive information secure.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Shield className="h-6 w-6 text-blue-500 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Access Control:</h3>
                      <p className="text-gray-600">Restrict access to critical data.</p>
                    </div>
          </div>

                  <div className="flex items-start space-x-3">
                    <ShieldCheck className="h-6 w-6 text-green-500 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Regular Updates:</h3>
                      <p className="text-gray-600">Keep customer data safe with security features.</p>
                    </div>
                  </div>
                </div>
                
                <Button variant="outline" className="mb-6">
                  About
                </Button>
              </div>

              {/* Specialization */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Our specialization: Custom Software Development Services
                </h2>
                <p className="text-gray-700 leading-relaxed mb-8">
                  We create custom software for businesses that aligns with your specific goals. Our solutions are crafted to improve your business processes and bring in growth.
                </p>
                
                <div className="space-y-8">
                  <div className="border-l-4 border-blue-500 pl-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">ERP Solutions</h3>
                    <p className="text-gray-700">We have successfully implemented ERP systems in the retail, manufacturing, healthcare and finance sector. We provided bespoke software with features for handling sales, production, inventory and supply chain.</p>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">CRM Systems</h3>
                    <p className="text-gray-700">Our custom CRM systems are packed with features that make them way better than the off-the-shelf options. For instance, advanced customer segmentation can easily target specific client needs. The features of automated follow-ups ensure you never miss a lead. We specialize in customizable dashboards that make customer interactions a hit. Plus, our systems seamlessly integrate with your existing business tools, offer personalized communication templates, and have top-notch data security.</p>
                  </div>
                  
                  <div className="border-l-4 border-purple-500 pl-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Supply Chain Management</h3>
                    <p className="text-gray-700">Our custom software for supply chain management has been a game-changer for various industries. In retail, we have enhanced inventory management and supplier coordination. In the automotive sector, we have simplified parts procurement and distribution. For the pharmaceutical industry, we have ensured compliance and efficient drug distribution. In manufacturing, our solutions have improved production planning and raw material tracking.</p>
          </div>
        </div>
                
                <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Custom Development Services</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-3">
                      <Smartphone className="h-5 w-5 text-blue-500" />
                      <span className="text-gray-700">Mobile Apps: iOS, Android, and cross-platform solutions.</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Globe className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">Web Applications: Custom web apps for various business functions.</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Monitor className="h-5 w-5 text-purple-500" />
                      <span className="text-gray-700">Desktop Applications: Reliable and high performing desktop software.</span>
                    </li>
                  </ul>
                </div>
                
                <p className="text-gray-700 leading-relaxed mt-6">
                  We sit down with to chat about your needs. We then whip up custom software that perfectly suits your business. Our team handles everything from the initial brainstorming to the final rollout. And the best part? We are always here for software support. Have a quick question or a new feature, our support team has got your back. Let us create some amazing software solutions together.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="w-full h-32 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
                    Images
                  </div>
                  <div className="flex flex-col justify-center">
                    <Button variant="outline">
                      About
                    </Button>
                  </div>
          </div>

                <div className="w-full h-48 bg-gray-200 rounded-lg mt-6 flex items-center justify-center text-gray-500">
                  Images
                </div>
              </div>

              {/* Best Development Company */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  What makes us the best custom development company?
                </h2>
                
                <div className="space-y-8">
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Expertise and Experience</h3>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <Award className="h-5 w-5 text-blue-500" />
                        <span className="text-gray-700">Proven Track Record: Over 100 positive customisation projects.</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Users className="h-5 w-5 text-blue-500" />
                        <span className="text-gray-700">Industry Experts: Skilled developers with domain expertise.</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Heart className="h-5 w-5 text-blue-500" />
                        <span className="text-gray-700">Customer Satisfaction: High customer satisfaction rate.</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Next-gen Solutions</h3>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <Cpu className="h-5 w-5 text-green-500" />
                        <span className="text-gray-700">Modern Technologies: AI, Machine Learning, Blockchain and more.</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Sparkles className="h-5 w-5 text-green-500" />
                        <span className="text-gray-700">Creative Approaches: Unique solutions to complex problems.</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <TrendingUp className="h-5 w-5 text-green-500" />
                        <span className="text-gray-700">Future-Ready Solutions: Scalable and adaptable software.</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Customer-Centric Approach</h3>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <Target className="h-5 w-5 text-purple-500" />
                        <span className="text-gray-700">Custom Solutions: We create services specifically designed for your business.</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <MessageSquare className="h-5 w-5 text-purple-500" />
                        <span className="text-gray-700">Clear Communication: Enjoy weekly project updates throughout the process.</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Headphones className="h-5 w-5 text-purple-500" />
                        <span className="text-gray-700">Post-Deployment Support: Ongoing support to ensure smooth operations.</span>
                      </div>
                    </div>
          </div>
        </div>
                
                <Button variant="outline" className="mt-6">
                  About
                </Button>
              </div>

              {/* Result Driven */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Result driven custom software for your business
            </h2>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Custom software development can reduce manual errors, and you can increase profitability with automation features. Here are some key benefits:
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600 mb-2">50%</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Increase in Productivity</h3>
                    <p className="text-gray-600 text-sm">Custom software streamlines operations, leading to significant productivity gains.</p>
                  </div>
                  
                  <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
                    <div className="text-3xl font-bold text-green-600 mb-2">30%</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Reduction in Costs</h3>
                    <p className="text-gray-600 text-sm">Automating tasks can help you cut down business process costs.</p>
                  </div>
                  
                  <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
                    <div className="text-3xl font-bold text-purple-600 mb-2">40%</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Improvement in Customer Satisfaction</h3>
                    <p className="text-gray-600 text-sm">Better customer service with personalized solutions.</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-[#38857a] to-[#FF914C] rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Begin with the best custom software developer today!</h3>
                  <p className="text-lg text-white/90 mb-4">
                    Thousands of businesses in your industry are getting help from the best custom software development companies to the next level? What is ceasing you from growing your productivity levels by 50%?
                  </p>
                  <p className="text-white/80 mb-6">
                    Contact us today to get into your custom software development needs. Our team is here to create software that drives success. Partner with the leading custom development company and experience the difference custom solutions can make.
                  </p>
                  <Button 
                    size="lg" 
                    className="bg-white text-[#38857a] hover:bg-white/90"
                  >
                    Get Started Today
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
          </div>

                <div className="grid md:grid-cols-2 gap-4 mt-8">
                  <div className="w-full h-32 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
                    Images
                  </div>
                  <div className="flex flex-col justify-center">
                    <Button variant="outline">
                      About
                    </Button>
                  </div>
                </div>
              </div>

              {/* What We Offer */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  What do we offer?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-8">
                  So far, we have successfully delivered over 750 software development projects and helped big and small enterprises achieve their business targets.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Settings className="h-8 w-8 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Bespoke solutions</h3>
                        <p className="text-gray-600">We deliver tailor-made solutions best suited to your business requirements.</p>
                        <span className="text-sm text-blue-600">Services</span>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center">
                        <Users className="h-8 w-8 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Experienced Developers</h3>
                        <p className="text-gray-600">Our skilled team has worked for 500+ from various industries.</p>
                        <span className="text-sm text-green-600">Services</span>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Code className="h-8 w-8 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">High-end tools</h3>
                        <p className="text-gray-600">We use a broad range of high-end software development</p>
                        <span className="text-sm text-purple-600">Services</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center">
                        <Clock className="h-8 w-8 text-yellow-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Well-timed delivery</h3>
                        <p className="text-gray-600">Our motivated team gives their best to launch the product within the agreed timeline.</p>
                        <span className="text-sm text-yellow-600">Services</span>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center">
                        <DollarSign className="h-8 w-8 text-red-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Affordable packages</h3>
                        <p className="text-gray-600">We can adapt to what you expect and keep the price range budget and friendly.</p>
                        <span className="text-sm text-red-600">Services</span>
          </div>
        </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center">
                        <Headphones className="h-8 w-8 text-indigo-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Constant tech support</h3>
                        <p className="text-gray-600">We never stop working; constant maintenance and post-release support are assured.</p>
                        <span className="text-sm text-indigo-600">Services</span>
                      </div>
                    </div>
                  </div>
                </div>
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
