'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { 
  Menu, 
  X, 
  Mail, 
  Phone, 
  ChevronDown,
  Sparkles,
  Zap,
  ArrowRight
} from 'lucide-react'

export default function ModernHeader({ currentPage = "home" }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const getNavLinkClass = (page) => {
    const baseClass = "relative text-gray-700 hover:text-[#38857a] transition-all duration-300 font-medium group"
    const activeClass = "text-[#38857a]"
    
    return currentPage === page ? `${baseClass} ${activeClass}` : baseClass
  }

  const handleDropdownHover = (dropdown) => {
    setActiveDropdown(dropdown)
  }

  const handleDropdownLeave = () => {
    setActiveDropdown(null)
  }

  const handleDemoSubmit = async (formData) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          type: 'demo'
        }),
      })

      if (response.ok) {
        alert('Thank you! We will get back to you soon.')
        setIsDemoModalOpen(false)
      } else {
        alert('Something went wrong. Please try again.')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Something went wrong. Please try again.')
    }
  }

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#38857a] text-white py-2 text-xs sm:text-sm hidden sm:block">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3 sm:space-x-6">
              <div className="flex items-center space-x-1 sm:space-x-2">
                <Mail className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="truncate">sales@scriza.in</span>
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2">
                <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="truncate">+91 911 6011 899</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-200/50' 
          : 'bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <div className="flex items-center space-x-4 group">
              <div className="relative">
                <img 
                  src="/Scriza (1).svg" 
                  alt="Scriza Logo" 
                  className="relative h-10 sm:h-14 w-auto transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-lg"
                />
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <NavLink href="/" page="home" currentPage={currentPage}>
                Home
              </NavLink>
              
              <NavLink href="/about" page="about" currentPage={currentPage}>
                About Us
              </NavLink>
              
              {/* Products Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => handleDropdownHover('products')}
                onMouseLeave={handleDropdownLeave}
              >
                <button className="flex items-center space-x-1 text-gray-700 hover:text-[#38857a] transition-all duration-300 font-medium group">
                  <span>Our Products</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                    activeDropdown === 'products' ? 'rotate-180' : ''
                  }`} />
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#38857a] to-[#FF914C] transition-all duration-300 group-hover:w-full"></div>
                </button>
                
                {/* Enhanced Dropdown Menu */}
                <div className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-[900px] transition-all duration-500 ${
                  activeDropdown === 'products' 
                    ? 'opacity-100 visible translate-y-0' 
                    : 'opacity-0 invisible translate-y-4'
                }`}>
                  <div className="bg-white/95 backdrop-blur-xl border border-gray-200/50 rounded-2xl shadow-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#38857a]/5 to-[#FF914C]/5"></div>
                    <div className="relative grid grid-cols-5 gap-8 p-8">
                      {/* Products */}
                      <DropdownSection title="Products">
                        <DropdownLink href="/recharge-software-application">Recharge Software</DropdownLink>
                        <DropdownLink href="/money-transfer-software">Money Transfer Software</DropdownLink>
                        <DropdownLink href="/hotel-management-software">Hotel Management Software</DropdownLink>
                        <DropdownLink href="/crm">CRM Software</DropdownLink>
                        <DropdownLink href="/hrms-software">HRMS Software</DropdownLink>
                        <DropdownLink href="/custom-software-development">Custom Software Development</DropdownLink>
                        <DropdownLink href="/school-management-software">School Management Software</DropdownLink>
                      </DropdownSection>

                      {/* Banking Services */}
                      <DropdownSection title="Banking Services">
                        <DropdownLink href="/aeps-api">AEPS Api</DropdownLink>
                        <DropdownLink href="/micro-atm-machine-providers">MATM-POSM Api</DropdownLink>
                        <DropdownLink href="/pancard-api">Pan Card Api</DropdownLink>
                        <DropdownLink href="/payout-api-service">Payout Api</DropdownLink>
                        <DropdownLink href="/pay-in-service">Pay In Service</DropdownLink>
                        <DropdownLink href="/upi-collection-api">UPI Collection API</DropdownLink>
                        <DropdownLink href="/credit-card-billpay-api">Credit Card BillPay Api</DropdownLink>
                      </DropdownSection>

                      {/* Other Services */}
                      <DropdownSection title="Other Services">
                        <DropdownLink href="/recharge-api-provider">Recharge Api</DropdownLink>
                        <DropdownLink href="/bbps-api">BBPS Api</DropdownLink>
                        <DropdownLink href="/lic-premium-api">LIC Premium Pay Api</DropdownLink>
                        <DropdownLink href="/verification-api">Validation API</DropdownLink>
                        <DropdownLink href="/sms-api">SMS API</DropdownLink>
                        <DropdownLink href="/whatsapp-api">WhatsApp API</DropdownLink>
                      </DropdownSection>

                      {/* Travel Api */}
                      <DropdownSection title="Travel Api">
                        <DropdownLink href="/bus-booking-api">Bus Booking API</DropdownLink>
                        <DropdownLink href="/hotel-booking-api">Hotel Booking API</DropdownLink>
                        <DropdownLink href="/air-booking-api">Air Booking API</DropdownLink>
                      </DropdownSection>

                      {/* Verification Api */}
                      <DropdownSection title="Verification Api">
                        <DropdownLink href="/bank-account-verification-api">Bank Ac Verification API</DropdownLink>
                        <DropdownLink href="/upi-verification-api">UPI ID Verification API</DropdownLink>
                        <DropdownLink href="/aadhaar-validation-api">Aadhaar Verification API</DropdownLink>
                        <DropdownLink href="/voter-ID-verification-api">Voter Id Verification API</DropdownLink>
                        <DropdownLink href="/driving-licence-verification-api">Driving License Verification</DropdownLink>
                        <DropdownLink href="/vehicle-rc-verification">Vehicle RC Verification API</DropdownLink>
                      </DropdownSection>
                    </div>
                    
                    {/* Bottom CTA */}
                    <div className="bg-gradient-to-r from-[#38857a]/10 to-[#FF914C]/10 p-6 border-t border-gray-200/50">
                      <div className="flex items-center justify-between">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              
              {/* ---------- CORE SERVICES DROPDOWN ---------- */}
<div
  className="relative group"
  onMouseEnter={() => handleDropdownHover('services')}
  onMouseLeave={handleDropdownLeave}
>
  <button className="flex items-center space-x-1 text-gray-700 hover:text-[#38857a] transition-all duration-300 font-medium group">
    <span>Core Services</span>
    <ChevronDown
      className={`w-4 h-4 transition-transform duration-300 ${
        activeDropdown === 'services' ? 'rotate-180' : ''
      }`}
    />
    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#38857a] to-[#FF914C] transition-all duration-300 group-hover:w-full"></div>
  </button>

  {/* Core-Services Menu */}
  <div
    className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-[400px] transition-all duration-500 ${
      activeDropdown === 'services'
        ? 'opacity-100 visible translate-y-0'
        : 'opacity-0 invisible translate-y-4'
    }`}
  >
    <div className="bg-white/95 backdrop-blur-xl border border-gray-200/50 rounded-2xl shadow-2xl overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#38857a]/5 to-[#FF914C]/5"></div>
      <ul className="relative grid grid-cols-1 gap-4 p-6 list-none">
        {/* Core service links */}
        <DropdownLink href="/custom-software-development">
          Custom Software Development
        </DropdownLink>
        <DropdownLink href="/website-design-service">
          Website Design
        </DropdownLink>
        <DropdownLink href="/software-development-service">
          Software Development
        </DropdownLink>
        <DropdownLink href="/application-development-service">
          Application Development
        </DropdownLink>
        <DropdownLink href="/digital-marketing-service">
          Digital Marketing
        </DropdownLink>
      </ul>
    </div>
  </div>
</div>

              <NavLink href="/contact" page="contact" currentPage={currentPage}>
                Contact Us
              </NavLink>
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center">
              <Button
                className="bg-gradient-to-r from-[#38857a] to-[#FF914C] text-white hover:shadow-xl hover:scale-105 transition-all duration-300 relative overflow-hidden group"
                onClick={() => setIsDemoModalOpen(true)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF914C] to-[#38857a] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <span className="relative flex items-center space-x-2">
                  <span>Get Free Demo</span>
                  <Sparkles className="h-4 w-4" />
                </span>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-r from-[#38857a]/10 to-[#FF914C]/10 hover:from-[#38857a]/20 hover:to-[#FF914C]/20 transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="relative">
                {isMenuOpen ? (
                  <X className="h-6 w-6 text-[#38857a] rotate-90 transition-transform duration-300" />
                ) : (
                  <Menu className="h-6 w-6 text-[#38857a] transition-transform duration-300" />
                )}
              </div>
            </button>
          </div>

          {/* Enhanced Mobile Menu */}
          <div className={`lg:hidden transition-all duration-500 ${
            isMenuOpen 
              ? 'max-h-screen opacity-100 visible' 
              : 'max-h-0 opacity-0 invisible'
          }`}>
            <div className="py-6 border-t border-gray-200/50 bg-gradient-to-b from-transparent to-gray-50/50">
              <nav className="flex flex-col space-y-4">
                <MobileNavLink href="/" page="home" currentPage={currentPage}>
                  Home
                </MobileNavLink>
                <MobileNavLink href="/about" page="about" currentPage={currentPage}>
                  About Us
                </MobileNavLink>
                <MobileNavLink href="/#products">
                  Our Products
                </MobileNavLink>
                <MobileNavLink href="/#services">
                  Core Services
                </MobileNavLink>
                <MobileNavLink href="/contact" page="contact" currentPage={currentPage}>
                  Contact Us
                </MobileNavLink>
                
                <div className="pt-6 border-t border-gray-200/50">
                  <Button 
                    className="w-full bg-gradient-to-r from-[#38857a] to-[#FF914C] text-white hover:shadow-lg transition-all duration-300"
                    onClick={() => {
                      setIsMenuOpen(false)
                      setIsDemoModalOpen(true)
                    }}
                  >
                    <span className="flex items-center justify-center space-x-2">
                      <span>Get Free Demo</span>
                      <Sparkles className="h-4 w-4" />
                    </span>
                  </Button>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Demo Modal */}
      <Dialog open={isDemoModalOpen} onOpenChange={setIsDemoModalOpen}>
        <DialogContent className="max-w-md mx-auto max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl font-bold text-gray-900">
              Book Free Demo
            </DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            <div className="space-y-4">
              <form onSubmit={(e) => {
                e.preventDefault()
                const formData = new FormData(e.target)
                handleDemoSubmit({
                  name: formData.get('name'),
                  email: formData.get('email'),
                  mobile: formData.get('mobile'),
                  option: formData.get('option')
                })
              }} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name*
                  </label>
                  <input
                    name="name"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#38857a] focus:border-[#38857a]"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email*
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#38857a] focus:border-[#38857a]"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mobile Number*
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                      +91
                    </span>
                    <input
                      name="mobile"
                      required
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-[#38857a] focus:border-[#38857a]"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Option
                  </label>
                  <select
                    name="option"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#38857a] focus:border-[#38857a]"
                  >
                    <option value="">---- Select Option ----</option>
                    <option value="mobile-recharge">Mobile Recharge</option>
                    <option value="dth-recharge">DTH Recharge</option>
                    <option value="data-card">Data Card Recharge</option>
                    <option value="multi-service">Multi-Service Platform</option>
                    <option value="custom-solution">Custom Solution</option>
                  </select>
                </div>
                
                <div className="text-center text-sm text-gray-600 py-2">
                  100% Privacy. We Don't Share Your Data.
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-[#38857a] hover:bg-[#38857a]/90 text-white"
                >
                  Book Demo
                </Button>
              </form>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

// Enhanced Nav Link Component
function NavLink({ href, page, currentPage, children }) {
  const isActive = currentPage === page
  
  return (
    <a 
      href={href} 
      className={`relative text-gray-700 hover:text-[#38857a] transition-all duration-300 font-medium group ${
        isActive ? 'text-[#38857a]' : ''
      }`}
    >
      <span className="relative z-10">{children}</span>
      <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#38857a] to-[#FF914C] transition-all duration-300 ${
        isActive ? 'w-full' : 'w-0 group-hover:w-full'
      }`}></div>
      {isActive && (
        <div className="absolute inset-0 bg-gradient-to-r from-[#38857a]/10 to-[#FF914C]/10 rounded-lg -z-10"></div>
      )}
    </a>
  )
}

// Mobile Nav Link Component
function MobileNavLink({ href, page, currentPage, children }) {
  const isActive = currentPage === page
  
  return (
    <a 
      href={href} 
      className={`relative py-3 px-4 rounded-lg transition-all duration-300 font-medium ${
        isActive 
          ? 'text-[#38857a] bg-gradient-to-r from-[#38857a]/10 to-[#FF914C]/10' 
          : 'text-gray-700 hover:text-[#38857a] hover:bg-gray-50'
      }`}
    >
      {children}
      {isActive && (
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-[#38857a] to-[#FF914C] rounded-r"></div>
      )}
    </a>
  )
}

// Dropdown Section Component
function DropdownSection({ title, children }) {
  return (
    <div>
      <h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider bg-gradient-to-r from-[#38857a] to-[#FF914C] bg-clip-text text-transparent">
        {title}
      </h3>
      <ul className="space-y-3 list-none">
        {children}
      </ul>
    </div>
  )
}

// Dropdown Link Component
function DropdownLink({ href, children }) {
  return (
    <li>
      <a 
        href={href} 
        className="text-gray-600 hover:text-[#38857a] text-sm transition-all duration-300 flex items-center space-x-2 group hover:translate-x-1"
      >
        <div className="w-1.5 h-1.5 bg-gradient-to-r from-[#38857a] to-[#FF914C] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <span>{children}</span>
      </a>
    </li>
  )
}



// 'use client'

// import { useState } from 'react'
// import { Button } from '@/components/ui/button'
// import { 
//   Phone, 
//   Mail, 
//   Menu,
//   X
// } from 'lucide-react'

// export default function Header({ currentPage = "home" }) {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)

//   const getNavLinkClass = (page) => {
//     return currentPage === page 
//       ? "text-[#38857a] font-semibold" 
//       : "text-gray-700 hover:text-[#38857a] transition-colors"
//   }

//   return (
//     <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-sm">
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-20">
//           {/* Logo */}
//           <div className="flex items-center space-x-4 group">
//             <img 
//               src="/Scriza (1).svg" 
//               alt="Scriza Logo" 
//               className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
//             />
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center space-x-8">
//             <a href="/" className={getNavLinkClass("home")}>Home</a>
//             <a href="/about" className={getNavLinkClass("about")}>About Us</a>
            
//             {/* Products Dropdown */}
//             <div className="relative group">
//               <a href="/#products" className="text-gray-700 hover:text-[#38857a] transition-colors flex items-center">
//                 Our Products
//                 <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                 </svg>
//               </a>
              
//               {/* Dropdown Menu */}
//               <div className="absolute top-full left-0 mt-2 w-[800px] bg-white border border-gray-200 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
//                 <div className="grid grid-cols-5 gap-6 p-6">
//                   {/* Products */}
//                   <div>
//                     <h3 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide" style={{color: '#38857a'}}>Products</h3>
//                     <ul className="space-y-2">
//                       <li><a href="/recharge-software-application" className="text-gray-600 hover:text-[#38857a] text-sm transition-colors">Recharge Software</a></li>
//                       <li><a href="/money-transfer-software" className="text-gray-600 hover:text-[#38857a] text-sm transition-colors">Money Transfer Software</a></li>
//                       <li><a href="/hotel-management-software" className="text-gray-600 hover:text-[#38857a] text-sm transition-colors">Hotel Management Software</a></li>
//                       <li><a href="/crm" className="text-gray-600 hover:text-[#38857a] text-sm transition-colors">CRM Software</a></li>
//                       <li><a href="/hrms-software" className="text-gray-600 hover:text-[#38857a] text-sm transition-colors">HRMS Software</a></li>
//                       <li><a href="/custom-software-development" className="text-gray-600 hover:text-[#38857a] text-sm transition-colors">Custom Software Development</a></li>
//                       <li><a href="/school-management-software" className="text-gray-600 hover:text-[#38857a] text-sm transition-colors">School Management Software</a></li>
//                     </ul>
//                   </div>

//                   {/* Banking Services */}
//                   <div>
//                     <h3 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide" style={{color: '#38857a'}}>Banking Services</h3>
//                     <ul className="space-y-2">
//                       <li><a href="/aeps-api" className="text-gray-600 hover:text-[#38857a] text-sm transition-colors">AEPS Api</a></li>
//                       <li><a href="/micro-atm-machine-providers" className="text-gray-600 hover:text-[#38857a] text-sm transition-colors">MATM-POSM Api</a></li>
//                       <li><a href="/pancard-api" className="text-gray-600 hover:text-[#38857a] text-sm transition-colors">Pan Card Api</a></li>
//                       <li><a href="/payout-api-service" className="text-gray-600 hover:text-[#38857a] text-sm transition-colors">Payout Api</a></li>
//                       <li><a href="/pay-in-service" className="text-gray-600 hover:text-[#38857a] text-sm transition-colors">Pay In Service</a></li>
//                       <li><a href="#" className="text-gray-600 hover:text-[#38857a] text-sm transition-colors">UPI Collection API</a></li>
//                       <li><a href="#" className="text-gray-600 hover:text-[#38857a] text-sm transition-colors">Credit Card BillPay Api</a></li>
//                     </ul>
//                   </div>

//                   {/* Other Services */}
//                   <div>
//                     <h3 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide" style={{color: '#38857a'}}>Other Services</h3>
//                     <ul className="space-y-2">
//                       <li><a href="#" className="text-gray-600 hover:text-[#38857a] text-sm transition-colors">Recharge Api</a></li>
//                       <li><a href="#" className="text-gray-600 hover:text-[#38857a] text-sm transition-colors">BBPS Api</a></li>
//                       <li><a href="#" className="text-gray-600 hover:text-[#38857a] text-sm transition-colors">LIC Premium Pay Api</a></li>
//                       <li><a href="#" className="text-gray-600 hover:text-[#38857a] text-sm transition-colors">Validation API</a></li>
//                       <li><a href="#" className="text-gray-600 hover:text-[#38857a] text-sm transition-colors">SMS API</a></li>
//                       <li><a href="#" className="text-gray-600 hover:text-[#38857a] text-sm transition-colors">WhatsApp API</a></li>
//                     </ul>
//                   </div>

//                   {/* Travel Api */}
//                   <div>
//                     <h3 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide" style={{color: '#38857a'}}>Travel Api</h3>
//                     <ul className="space-y-2">
//                       <li><a href="#" className="text-gray-600 hover:text-[#38857a] text-sm transition-colors">Bus Booking API</a></li>
//                       <li><a href="#" className="text-gray-600 hover:text-[#38857a] text-sm transition-colors">Hotel Booking API</a></li>
//                       <li><a href="#" className="text-gray-600 hover:text-[#38857a] text-sm transition-colors">Air Booking API</a></li>
//                     </ul>
//                   </div>

//                   {/* Verification Api */}
//                   <div>
//                     <h3 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide" style={{color: '#38857a'}}>Verification Api</h3>
//                     <ul className="space-y-2">
//                       <li><a href="#" className="text-gray-600 hover:text-[#38857a] text-sm transition-colors">Bank Ac Verification API</a></li>
//                       <li><a href="#" className="text-gray-600 hover:text-[#38857a] text-sm transition-colors">UPI ID Verification API</a></li>
//                       <li><a href="#" className="text-gray-600 hover:text-[#38857a] text-sm transition-colors">Aadhaar Verification API</a></li>
//                       <li><a href="#" className="text-gray-600 hover:text-[#38857a] text-sm transition-colors">Voter Id Verification API</a></li>
//                       <li><a href="#" className="text-gray-600 hover:text-[#38857a] text-sm transition-colors">Driving License Verification</a></li>
//                       <li><a href="#" className="text-gray-600 hover:text-[#38857a] text-sm transition-colors">Vehicle RC Verification API</a></li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//             <a href="/#services" className="text-gray-700 hover:text-[#38857a] transition-colors">Core Services</a>
//             <a href="/contact" className={getNavLinkClass("contact")}>Contact Us</a>
//           </nav>

//           {/* Contact Info & CTA */}
//           <div className="hidden lg:flex items-center space-x-6">
//             <div className="text-sm text-gray-600">
//               <div className="flex items-center space-x-2">
//                 <Mail className="h-4 w-4" />
//                 <span>sales@scriza.in</span>
//               </div>
//               <div className="flex items-center space-x-2 mt-1">
//                 <Phone className="h-4 w-4" />
//                 <span>+91 911 6011 899</span>
//               </div>
//             </div>
//             <Button 
//               style={{backgroundColor: '#FF914C'}} 
//               className="text-white hover:opacity-90"
//               onClick={() => {
//                 if (currentPage === "home") {
//                   document.getElementById('demo-section')?.scrollIntoView({behavior: 'smooth'})
//                 } else {
//                   window.location.href = '/#demo-section'
//                 }
//               }}
//             >
//               Get a Demo
//             </Button>
//           </div>

//           {/* Mobile Menu Button */}
//           <button 
//             className="md:hidden"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="md:hidden py-4 border-t border-border">
//             <nav className="flex flex-col space-y-4">
//               <a href="/" className={getNavLinkClass("home")}>Home</a>
//               <a href="/about" className={getNavLinkClass("about")}>About Us</a>
//               <a href="/#products" className="text-gray-700 hover:text-[#38857a] transition-colors">Our Products</a>
//               <a href="/#services" className="text-gray-700 hover:text-[#38857a] transition-colors">Core Services</a>
//               <a href="/contact" className={getNavLinkClass("contact")}>Contact Us</a>
//               <div className="pt-4 border-t border-border">
//                 <div className="text-sm text-gray-600 mb-4">
//                   <div className="flex items-center space-x-2 mb-2">
//                     <Mail className="h-4 w-4" />
//                     <span>sales@scriza.in</span>
//                   </div>
//                   <div className="flex items-center space-x-2">
//                     <Phone className="h-4 w-4" />
//                     <span>+91 911 6011 899</span>
//                   </div>
//                 </div>
//                 <Button 
//                   style={{backgroundColor: '#FF914C'}} 
//                   className="text-white hover:opacity-90 w-full"
//                   onClick={() => {
//                     if (currentPage === "home") {
//                       document.getElementById('demo-section')?.scrollIntoView({behavior: 'smooth'})
//                     } else {
//                       window.location.href = '/#demo-section'
//                     }
//                   }}
//                 >
//                   Get a Demo
//                 </Button>
//               </div>
//             </nav>
//           </div>
//         )}
//       </div>
//     </header>
//   )
// }