'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { 
  ArrowRight,
  Send
} from 'lucide-react'

export default function DemoBookingForm({ 
  onSubmit, 
  title = "Book For Demo",
  showApiServices = true 
}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    option: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSelectChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (onSubmit) {
      onSubmit(formData)
    }
  }

  const apiServices = [
    "Bank Account Verification API",
    "UPI Verification API", 
    "Company Verification API",
    "DIN Verification API",
    "Udyog Aadhaar Verification API",
    "Aadhaar Verification API",
    "Voter ID Verification API",
    "PAN Card Validation API",
    "Driving Licence Verification API",
    "Advanced API for Vehicle RC Verification",
    "Aadhaar Validation API"
  ]

  return (
    <div className="lg:col-span-1">
      <div className="sticky top-24 space-y-6">
        {/* Demo Form */}
        <Card id="demo-section" className="bg-white shadow-xl border-0">
          <CardHeader className="text-center pb-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#38857a] to-[#FF914C] flex items-center justify-center mx-auto mb-4">
              <Send className="h-8 w-8 text-white" />
            </div>
            <CardTitle className="text-2xl font-bold text-gray-900">{title}</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
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
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mobile Number*
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                    +91
                  </span>
                  <Input
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    required
                    className="rounded-l-none border-gray-300 focus:border-[#38857a] focus:ring-[#38857a]"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Option
                </label>
                <Select value={formData.option} onValueChange={(value) => handleSelectChange('option', value)}>
                  <SelectTrigger className="border-gray-300 focus:border-[#38857a] focus:ring-[#38857a]">
                    <SelectValue placeholder="---- Select Option ----" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mobile-recharge">Mobile Recharge</SelectItem>
                    <SelectItem value="dth-recharge">DTH Recharge</SelectItem>
                    <SelectItem value="data-card">Data Card Recharge</SelectItem>
                    <SelectItem value="multi-service">Multi-Service Platform</SelectItem>
                    <SelectItem value="custom-solution">Custom Solution</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="text-center text-sm text-gray-600 py-2">
                100% Privacy. We Don't Share Your Data.
              </div>
              
              <Button 
                type="submit"
                className="w-full"
                style={{backgroundColor: '#38857a'}}
              >
                <Send className="mr-2 h-4 w-4" />
                Book Demo
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* API Services */}
        {showApiServices && (
          <Card className="bg-white shadow-lg border border-gray-100">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-900">API Verification Services</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="space-y-2">
                {apiServices.map((service, index) => (
                  <div key={index} className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <span className="text-sm text-gray-700">{service}</span>
                    <ArrowRight className="h-4 w-4 text-gray-400" />
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-gradient-to-r from-[#38857a]/10 to-[#FF914C]/10 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Try it now</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Confirm your compliance with the UIDAI norms of Aadhaar Validation with our API technology. Talk to our sales team right now to access the hassle-free validation solution.
                </p>
                <div className="flex space-x-2">
                  <Button size="sm" style={{backgroundColor: '#38857a'}} className="text-white">
                    Contact Us
                  </Button>
                  <Button size="sm" variant="outline" className="border-[#FF914C] text-[#FF914C]">
                    About Us
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}