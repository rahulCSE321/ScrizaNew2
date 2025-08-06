import Image from 'next/image'

export default function Certification() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Certifications
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted and certified to deliver quality software solutions with industry-standard compliance
          </p>
        </div>
        
        <div className="flex justify-center">
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 max-w-4xl w-full">
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
        
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500 italic">
            Certified for quality management and information security standards
          </p>
        </div>
      </div>
    </section>
  )
}