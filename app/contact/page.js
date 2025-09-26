'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ChatWidget from '@/components/ChatWidget'
import Certification from '@/components/Certification'
import { BreadcrumbLight } from '@/components/Breadcrumb' // Import the breadcrumb component
import { 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight, 
  Building,
  Star,
  Globe,
  Menu,
  X,
  Shield,
  Award,
  Send,
  Home
} from 'lucide-react'




export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: '',
    type: 'contact'
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          phone: formData.mobile // Map mobile to phone for backend compatibility
        }),
      })
      
      if (response.ok) {
        alert('Thank you! We will get back to you soon.')
        setFormData({
          name: '',
          email: '',
          mobile: '',
          message: '',
          type: 'contact'
        })
      } else {
        alert('Something went wrong. Please try again.')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Something went wrong. Please try again.')
    }
  }

  const breadcrumbItems = [
    {
      label: "Home",
      href: "/",
      icon: <Home className="h-4 w-4" />
    },
    {
      label: "Contact Us"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header currentPage="contact" />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1600880292203-757bb62b4baf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjB0ZWFtfGVufDB8fHxibHVlfDE3NTM5NDYxNDR8MA&ixlib=rb-4.1.0&q=85)'
          }}
        >
          <div className="absolute inset-0 bg-[#38857a]/80"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="text-white border-white text-lg px-6 py-2">
                Contact
              </Badge>
              <div className="flex justify-center">
                <BreadcrumbLight items={breadcrumbItems} />
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Have questions - 
                <span className="block" style={{color: '#FF914C'}}>Contact Us</span>
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Let us help your business to move
                  <span className="block" style={{color: '#38857a'}}>forward.</span>
                </h2>
              </div>

              <Card className="bg-white shadow-xl border-0">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Name*
                        </label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="border-gray-300 focus:border-[#38857a] focus:ring-[#38857a]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email*
                        </label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="border-gray-300 focus:border-[#38857a] focus:ring-[#38857a]"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Mobile Number*
                      </label>
                      <Input
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleInputChange}
                        required
                        className="border-gray-300 focus:border-[#38857a] focus:ring-[#38857a]"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your message Here
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="border-gray-300 focus:border-[#38857a] focus:ring-[#38857a]"
                        placeholder="Tell us about your requirements..."
                      />
                    </div>

                    <div className="flex justify-start">
                      <Button 
                        type="submit"
                        size="lg"
                        style={{backgroundColor: '#38857a'}}
                        className="text-white hover:opacity-90 px-12"
                      >
                        <Send className="mr-2 h-5 w-5" />
                        Submit
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map/Image Placeholder */}
            <div className="relative">
              <div className="bg-gradient-to-br from-[#38857a]/10 to-[#FF914C]/10 rounded-lg p-8 h-full min-h-[600px] flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 rounded-full bg-[#38857a] flex items-center justify-center mx-auto">
                    <MapPin className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Visit Our Office</h3>
                  <p className="text-gray-600 max-w-md">
                    Ground Floor, Logix Park (Supreme Work), A-4-5, A Block, Sector 16, Noida, Uttar Pradesh 201301
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Head Office */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 rounded-full bg-[#38857a]/10 flex items-center justify-center mx-auto mb-4">
                  <Building className="h-8 w-8" style={{color: '#38857a'}} />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">Head office</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 leading-relaxed">
                  Ground Floor, Logix Park (Supreme Work), A-4-5, A Block, Sector 16, Noida, Uttar Pradesh 201301
                </CardDescription>
              </CardContent>
            </Card>

            {/* Email Us */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 rounded-full bg-[#FF914C]/10 flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8" style={{color: '#FF914C'}} />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">Email us</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 text-lg">
                  <a href="mailto:sales@scriza.in" className="hover:text-[#FF914C] transition-colors">
                    sales@scriza.in
                  </a>
                </CardDescription>
              </CardContent>
            </Card>

            {/* Call Us */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 rounded-full bg-[#38857a]/10 flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8" style={{color: '#38857a'}} />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">Call us</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 text-lg">
                  <a href="tel:+919116011899" className="hover:text-[#38857a] transition-colors">
                    Sales :- +91-9116011899
                  </a>
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      {/* <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center space-x-12">
            <div className="text-center">
              <div className="bg-white p-6 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-12 w-12 text-[#38857a]" />
              </div>
              <div className="text-white">
                <div className="text-lg font-semibold mb-2">Certification Number</div>
                <div className="text-[#FF914C] font-bold text-xl">QMS220756</div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white p-6 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                <Award className="h-12 w-12 text-[#FF914C]" />
              </div>
              <div className="text-white">
                <div className="text-lg font-semibold mb-2">Certification Number</div>
                <div className="text-[#38857a] font-bold text-xl">ISMS220754</div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <Certification />
      <Footer />
      <ChatWidget />
    </div>
  )
}