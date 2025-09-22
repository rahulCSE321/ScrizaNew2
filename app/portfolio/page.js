import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Certification from '@/components/Certification'




export default function PortfolioPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <Header currentPage="portfolio" />

      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div className="w-full">
          <img 
            src="/portfolio.png" 
            alt="Portfolio" 
            className="w-full h-auto max-h-[500px] object-contain object-center bg-gray-100" 
          />
        </div>
      </section>

      {/* Portfolio Projects Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Portfolio
            </h2>
            <p className="text-gray-600">
              Showcasing our latest projects and digital solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Project 1 - White Pearl Digital */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <div className=" p-6 flex items-center justify-center min-h-[280px]">
                <div className="bg-white rounded-lg shadow-lg p-4">
                  <img 
                    src="/whitePearl.jpg" 
                    alt="White Pearl Digital Website"
                    className="w-full h-auto rounded"
                  />
                </div>
              </div>
              <div className="p-6">
                <div className="text-black font-semibold text-sm mb-2">WHITE PEARL DIGITAL</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">IT Solutions Website</h3>
                <p className="text-gray-600 text-sm">Modern responsive website for IT solutions company</p>
              </div>
            </div>

            {/* Project 2 - Mobile Banking App */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <div className=" p-6 flex items-center justify-center min-h-[280px]">
                <div className="bg-white rounded-lg shadow-lg p-2">
                  <img 
                    src="/blurayfintech.jpg" 
                    alt="Mobile Banking App"
                    className="w-auto h-48 rounded"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-black mb-3">Mobile Banking App</h3>
                <p className="text-gray-600 text-sm">Secure mobile banking application with intuitive design</p>
              </div>
            </div>

            {/* Project 3 - Payment Solution */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <div className=" p-6 flex items-center justify-center min-h-[280px]">
                <div className="bg-white rounded-lg shadow-lg p-2">
                  <img 
                    src="/malanipay.jpg" 
                    alt="Payment Solution App"
                    className="w-auto h-48 rounded"
                  />
                </div>
              </div>
              <div className="p-6">
                <div className="text-black font-semibold text-sm mb-2">MALANIPAY</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Payment Solution</h3>
                <p className="text-gray-600 text-sm">Fast and secure payment solution with advanced features</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}