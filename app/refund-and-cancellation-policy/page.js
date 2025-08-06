'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Certification from '@/components/Certification'

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <Header currentPage="refund-policy" />
      
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div className="w-full">
          <img 
            src="/refundAndPolicy.png" 
            alt="Refund & Cancellation Policy" 
            className="w-full h-auto max-h-[500px] object-contain object-center bg-gray-100" 
          />
        </div>
      </section>
      
      {/* Content */}
      <main className="flex-1 py-16 px-6 md:px-12 lg:px-24 max-w-5xl mx-auto space-y-10">
        <h1 className="text-3xl md:text-4xl font-bold text-center">
          Refund & Cancellation Policy
        </h1>

        {/* Intro */}
        <section className="space-y-6">
          <p>
            At <strong>Scriza Private Limited</strong>, we strive to provide the best possible 
            experience for our valued customers. We understand that there may be instances where 
            you need to request a refund for a product or service you have purchased from us. 
            Please take a moment to review our refund policy outlined below:
          </p>
        </section>

        {/* Eligibility for Refund */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">1. Eligibility for Refund</h2>
          <p>
            We offer refunds for eligible purchases within <strong>7 to 10 days</strong> from 
            the date of purchase. After this period, we may not be able to process your refund.
          </p>
          <p>
            To be eligible for a refund, the following conditions must be met:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>You must have a valid proof of purchase (receipt or order number)</li>
            <li>The product or service in question must be in its original condition</li>
            <li>The product or service must not have been used, altered, or damaged in any way</li>
            <li>Digital products, software licenses, and downloadable items are generally non-refundable unless stated otherwise</li>
          </ul>
        </section>

        {/* How to Request a Refund */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">2. How to Request a Refund</h2>
          <p>
            If you believe you meet the eligibility criteria for a refund, please follow these 
            steps to initiate the refund process:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Contact our customer support team at <strong>sales@scriza.in</strong> or call us <strong>9599287096</strong></li>
            <li>Provide your proof of purchase (receipt or order number) and a detailed explanation of why you are requesting a refund</li>
            <li>Our customer support team will review your request and may request additional information if needed</li>
          </ul>
        </section>

        {/* Refund Approval */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">3. Refund Approval</h2>
          <p>
            Once your refund request is received and reviewed, we will notify you of the 
            approval or rejection of your refund.
          </p>
          <p>
            If your refund is approved, we will process the refund within <strong>7–10 business days</strong> 
            using the same payment method you used for the original purchase. It may take additional 
            time for the refund to appear in your account, depending on your financial institution.
          </p>
          <p>
            If your refund is rejected, we will provide you with a clear explanation of the 
            reasons for the rejection.
          </p>
        </section>

        {/* Exceptions */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">4. Exceptions</h2>
          <p>
            Certain products or services may have specific refund policies or conditions stated 
            at the time of purchase. Please review these terms carefully before completing your purchase.
          </p>
          <p>
            Subscription-based services may have different refund policies. Please refer to the 
            terms and conditions associated with your subscription for more information.
          </p>
        </section>

        {/* Contact Us */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">5. Contact Us</h2>
          <p>
            If you have any questions or concerns about our refund policy, please feel free to 
            contact our customer support team at <strong>sales@scriza.in</strong> or Phone <strong>9599287096</strong>.
          </p>
          <p>
            We value your business and strive to ensure your satisfaction with our products and 
            services. Thank you for choosing <strong>Scriza Private Limited</strong>.
          </p>
        </section>
      </main>
      
      <Certification />
      <Footer />
    </div>
  )
}