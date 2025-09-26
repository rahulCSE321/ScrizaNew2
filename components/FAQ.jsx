'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function FAQ({ title = "Frequently Asked Questions", faqs = [] }) {
  const [openItems, setOpenItems] = useState(new Set())
  const router = useRouter()

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index)
    } else {
      newOpenItems.add(index)
    }
    setOpenItems(newOpenItems)
  }

  if (!faqs || faqs.length === 0) {
    return null
  }

  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <HelpCircle className="h-8 w-8 text-[#38857a] mr-3" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                {title}
              </h2>
            </div>
            <div className="h-1 w-24 bg-gradient-to-r from-[#38857a] to-[#FF914C] mx-auto rounded-full"></div>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm border border-gray-200/50 overflow-hidden hover:shadow-md transition-all duration-300"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50/50 transition-colors duration-200"
                  aria-expanded={openItems.has(index)}
                >
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 pr-4 leading-tight">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openItems.has(index) ? (
                      <ChevronUp className="h-5 w-5 text-[#38857a] transition-transform duration-200" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-[#38857a] transition-transform duration-200" />
                    )}
                  </div>
                </button>
                
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    openItems.has(index) 
                      ? 'max-h-96 pb-6 opacity-100' 
                      : 'max-h-0 pb-0 opacity-0'
                  }`}
                >
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12 p-6 bg-gradient-to-r from-[#38857a]/10 to-[#FF914C]/10 rounded-xl border border-gray-200/50">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-4">
              Can't find the answer you're looking for? Please chat with our friendly team.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => {
                  const phoneNumber = "919116011899"
                  const message = "Hello! I have a question about your services."
                  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
                  window.open(whatsappURL, '_blank')
                }}
                className="px-6 py-3 bg-[#25D366] hover:bg-[#20B955] text-white font-medium rounded-lg transition-colors duration-200"
              >
                Chat on WhatsApp
              </button>
              <button
                onClick={() => router.push('/contact')}
                className="px-6 py-3 bg-[#38857a] hover:bg-[#38857a]/90 text-white font-medium rounded-lg transition-colors duration-200"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}