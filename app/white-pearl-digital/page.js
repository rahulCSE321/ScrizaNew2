import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Certification from '@/components/Certification'




export default function PortfolioPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <Header currentPage="portfolio" />

      {/* Hero Section with White Pearl Digital */}
      <section className="relative w-full overflow-hidden">
        <div className="w-full">
          <img 
            src="/whiteePEArl.png" 
            alt="White Pearl Digital" 
            className="w-full h-auto max-h-[500px] object-contain object-center bg-gray-100" 
          />
        </div>
      </section>


      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-gray-600">
            <a href="/" className="text-blue-600 hover:underline">Home</a>
            <span className="mx-2">/</span>
            <a href="/portfolio" className="text-blue-600 hover:underline">Portfolio Scriza</a>
            <span className="mx-2">/</span>
            <span>White Pearl Digital</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="max-w-4xl mb-12">
          <p className="text-gray-700 leading-relaxed mb-6">
            Being a leader in web development services, Scriza Pvt Ltd. gets the privilege of creating innovative solutions for esteemed entities. In this client portfolio, we are highlighting our successful collaboration with White Pearl Digital. It is a dynamic technology company engaged in diverse computer related activities. We were tasked to develop a website that precisely showcases their technical prowess. With a quest for excellence, our team worked hard and provided top-notch technology solutions. As a result of meticulous planning and creative execution, we were able to develop a user-centric website for White Pearl Digital.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Our esteemed client, White Pearl Digital, is the fastest growing technology company. The forward-thinking agency specializes in technology related services such as third-party website management and crafting multimedia presentations. The company was founded with a mission to empower businesses and individuals with efficient technology solutions. Recognized as a brand for its technical expertise, the agency has a customer-centric approach which was the key highlight of our web development project.
          </p>
          <a href="#" className="text-blue-600 hover:underline font-medium">Read More</a>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Project Objectives */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-12 h-1 bg-teal-500 mr-4"></div>
              <h2 className="text-2xl font-bold text-gray-900">Project objectives</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              White Pearl Digital offers a diverse range of services and our prime objective was to design and develop a website that emphasizes their domain expertise. Our aim was to create a compelling website that can entire their potential clients. Our client wanted an engaging website for businesses and individuals seeking exceptional technology solutions. We developed a client persona, conducted market research and put our technology experts on the job to deliver a stunning outcome. We developed an intuitive website that would encourage visitors and generate leads.
            </p>
          </div>

          {/* Project Technology */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-12 h-1 bg-teal-500 mr-4"></div>
              <h2 className="text-2xl font-bold text-gray-900">Project Technology</h2>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Skills</h3>
              <p className="text-gray-700">Java, JavaScript, NodeJs, PHP, MySQL</p>
            </div>
          </div>
        </div>

        {/* Web Development Outcome */}
        <div className="mb-16">
          <div className="flex items-center mb-6">
            <div className="w-12 h-1 bg-teal-500 mr-4"></div>
            <h2 className="text-2xl font-bold text-gray-900">Web development outcome</h2>
          </div>
          <p className="text-gray-700 leading-relaxed max-w-4xl">
            We analysed the level of competition for our esteemed client and recognized the significance of a compelling website. Therefore, we conceptualized a modern and dynamic website. The homepage feature strategically placed call-to-actions, prominently highlighted services and crisp messaging for visitors. To develop a user-friendly website, we focused on effortless navigation features. Further, we included an engaging portfolio section that showcases tangible evidence of our client's capabilities.
          </p>
        </div>

        {/* Project Overview with Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="flex items-center mb-6">
              <div className="w-12 h-1 bg-teal-500 mr-4"></div>
              <h2 className="text-2xl font-bold text-gray-900">Project Overview</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              The key features of this website were a service showcase, a dynamic portfolio, and strategically placed testimonials and call-to-actions. We provided end-to-end services for website development and launch after which our client witnessed significant improvement in lead generation. Since we developed an optimized website, our client recorded increased online visibility and enhanced organic traffic. The compelling portfolio section we created helped our client to convert visitors into clients.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Intuitive navigation, responsive design, and strategical placement of testimonials and portfolio enabled our client to build trust and confidence in potential customers.
            </p>
          </div>
          <div className="relative">
            <img 
              src="/pro-final.jpg" 
              alt="Team working on project"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <div className="absolute top-4 right-4 w-16 h-16 bg-red-500 transform rotate-45"></div>
            <div className="absolute bottom-4 left-4 w-12 h-12 bg-blue-500 transform rotate-45"></div>
          </div>
        </div>

        {/* Results Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="relative">
            <img 
              src="/api/placeholder/400/300" 
              alt="Creative Intelligence workspace"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg flex items-center justify-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center mb-6">
              <div className="w-12 h-1 bg-teal-500 mr-4"></div>
              <h2 className="text-2xl font-bold text-gray-900">Results</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Our partnership with White Pearl Digital demonstrates our capabilities of delivering top-tier web development solutions. Owing to our skilled team of web development experts, White Pearl Digital receives an impressive online platform to showcase its diverse technology services. By developing this user-oriented interface, we created a cohesive online identity for White Pearl Digital. Moreover, the integration of brand elements in this high-performing website enabled us to cultivate profound connections with our valued clients.
            </p>
          </div>
        </div>
      </div>

      {/* Certification Section */}
      <Certification />
      
      <Footer />
    </div>
  )
}