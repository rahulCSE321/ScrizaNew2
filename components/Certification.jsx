import Image from 'next/image'

export default function Certification() {
  return (
    <section className="py-8 md:py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Our Certifications
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Trusted and certified to deliver quality software solutions with industry-standard compliance
          </p>
        </div>
        
        <div className="flex justify-center">
          <div className="bg-white rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 md:p-8 w-full">
            <div className="relative w-full h-auto">
              <Image
                src="/certification.png"
                alt="Scriza Certification - ISO Certified Company"
                width={1200}
                height={1200}
                className="w-full h-auto object-contain rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
        
        <div className="text-center mt-6 md:mt-8">
          <p className="text-xs md:text-sm text-gray-500 italic px-4">
            Certified for quality management and information security standards
          </p>
        </div>
      </div>
    </section>
  )
}