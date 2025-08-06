import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe,
  Star,
  Shield,
  Award
} from 'lucide-react'

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <img 
                src="/Scriza (1).svg" 
                alt="Scriza Logo" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              We at Scriza are experts in software development, starting from scratch and building it from the ground up. We understand that not all projects are the same, and that's why we take the time to get to know you and your project before we begin.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 rounded-full bg-[#38857a] flex items-center justify-center">
                <Globe className="h-5 w-5" />
              </div>
              <div className="w-10 h-10 rounded-full bg-[#FF914C] flex items-center justify-center">
                <Star className="h-5 w-5" />
              </div>
            </div>
          </div>
          

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6" style={{color: '#FF914C'}}>Quick Links</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-[#38857a] transition-colors">Portfolio</a></li>
              <li><a href="#" className="hover:text-[#38857a] transition-colors">Career</a></li>
              <li><a href="#" className="hover:text-[#38857a] transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-[#38857a] transition-colors">API Documentation</a></li>
            </ul>
            <h4 className="text-lg font-semibold mt-8 mb-4" style={{color: '#FF914C'}}>Our Services</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="/custom-software-development" className="hover:text-[#38857a] transition-colors">Custom Software Development</a></li>
              <li><a href="/website-design-service" className="hover:text-[#38857a] transition-colors">Website Designing</a></li>
              <li><a href="/application-development" className="hover:text-[#38857a] transition-colors">Application Development</a></li>
              <li><a href="/digital-marketing" className="hover:text-[#38857a] transition-colors">Digital Marketing</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6" style={{color: '#FF914C'}}>Contact Info</h3>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-1 text-[#38857a]" />
                <div className="text-sm">
                  Ground Floor, Logix Park (Supreme Work), A-4-5, A Block, Sector 16, Noida, Uttar Pradesh 201301
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#38857a]" />
                <span>+919116011899</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#38857a]" />
                <span>sales@scriza.in</span>
              </div>
            </div>

            {/* Certifications */}
            <div className="mt-8">
              <div className="flex items-center space-x-4">
                {/* <div className="bg-white p-2 rounded">
                  <Shield className="h-6 w-6 text-[#38857a]" />
                </div> */}
                {/* <div className="text-sm">
                  <div className="text-white font-medium">QMS220756</div>
                  <div className="text-gray-400">ISO Certified</div>
                </div> */}
              </div>
              <div className="flex items-center space-x-4 mt-4">
                {/* <div className="bg-white p-2 rounded">
                  <Award className="h-6 w-6 text-[#FF914C]" />
                </div> */}
                {/* <div className="text-sm">
                  <div className="text-white font-medium">ISMS220754</div>
                  <div className="text-gray-400">Security Certified</div>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Scriza Pvt Ltd. All Rights Reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="privacy-policy" className="hover:text-[#38857a] transition-colors">Privacy Policy</a>
              <a href="term-conditions" className="hover:text-[#38857a] transition-colors">Terms and Conditions</a>
              <a href="refund-and-cancellation-policy" className="hover:text-[#38857a] transition-colors">Refund & Cancellation Policy</a>
              <a href="#" className="hover:text-[#38857a] transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}