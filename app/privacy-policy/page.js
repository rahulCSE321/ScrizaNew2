'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Certification from '@/components/Certification'
export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <Header currentPage="privacy-policy" />
       {/* Hero Section */}
       <section className="relative w-full overflow-hidden">
        <div className="w-full">
          <img 
            src="/privacyPolicy.png" 
            alt="Privacy Policy" 
            className="w-full h-auto max-h-[500px] object-contain object-center bg-gray-100" 
          />
        </div>
      </section>
      {/* Content */}
      <main className="flex-1 py-16 px-6 md:px-12 lg:px-24 max-w-5xl mx-auto space-y-10">
        <h1 className="text-3xl md:text-4xl font-bold text-center">
          Privacy Policy
        </h1>

        {/* Intro */}
        <section className="space-y-6">
          <p>
            The terms <strong>“We” / “Us” / “Our” / “Company”</strong> individually
            and collectively refer to <strong>Scriza Private Limited</strong> and the
            terms <strong>“You” / “Your” / “Yourself”</strong> refer to the users.
          </p>

          <p>
            This Privacy Policy is an electronic record under the Information
            Technology Act 2000 and the applicable rules thereunder. It is an
            electronic contract that does not require any physical, electronic or
            digital signature.
          </p>

          <p>
            By accessing or using <em>www.scriza.in</em> (“Website” / “Site”) you
            accept and agree to the practices described in this Privacy Policy.
            If you do not agree, please do not use the Website.
          </p>
        </section>

        {/* Legal Basis */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">1. Legal Framework</h2>
          <p>
            This document is published in accordance with the Information
            Technology (Reasonable Security Practices and Procedures and
            Sensitive Personal Data or Information) Rules 2011. It governs the
            collection, use, storage and transfer of sensitive personal data or
            information.
          </p>
        </section>

        {/* Consent */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">2. Your Consent</h2>
          <p>
            By providing information or using the Website facilities, you
            consent to our collection, storage, processing and transfer of your
            personal and non-personal information as outlined here. Such use
            will not cause any loss or wrongful gain to you or anyone else.
          </p>
        </section>

        {/* User Information */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">3. User Information</h2>
          <p>
            To access certain services you may be asked to provide details such
            as:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Name, email address, age, sex, PIN code</li>
            <li>Credit / debit card details</li>
            <li>Medical records, sexual orientation, biometric data</li>
            <li>Password, occupation, interests, etc.</li>
          </ul>
          <p>
            We use this information to improve our services, develop new ones
            and ensure a user-friendly experience. Information freely available
            in the public domain is not considered sensitive.
          </p>
        </section>

        {/* Cookies */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">4. Cookies & IP Addresses</h2>
          <p>
            We use cookies or similar tools to enhance responsiveness. Cookies
            assign a unique ID to your device but do not reveal your identity
            unless you choose to provide it. Our servers also log IP addresses
            to deliver pages, measure traffic and understand geographic reach.
          </p>
        </section>

        {/* External Links */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">5. Links to Other Sites</h2>
          <p>
            This policy applies only to our Website. External sites linked from
            here have their own privacy practices; we are not responsible for
            those sites.
          </p>
        </section>

        {/* Indemnity */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">6. Indemnity</h2>
          <p>
            You agree to indemnify Scriza Private Limited and its affiliates
            from any claims arising out of your use of <em>www.scriza.in</em> or
            violation of these terms.
          </p>
        </section>

        {/* Information Sharing */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">7. Information Sharing</h2>
          <p>
            We disclose sensitive personal data only:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              When required by law, court order or government authority for
              identity verification, investigation or prosecution.
            </li>
            <li>
              Within our group companies to process data on our behalf under
              strict confidentiality obligations.
            </li>
          </ul>
        </section>

        {/* Security */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">8. Information Security</h2>
          <p>
            We implement administrative, technical and physical safeguards to
            protect data. Despite robust measures, no system is completely
            secure and we cannot guarantee absolute security.
          </p>
          <p>
            The policy may change as the Internet evolves, but any data will be
            used in accordance with the policy in effect when collected.
          </p>
        </section>

        {/* Grievance */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">9. Grievance Redressal</h2>
          <p>
            For complaints or concerns, contact our designated Grievance
            Officer:
          </p>
          <address className="not-italic space-y-1">
            <p><strong>Grievance Officer</strong></p>
            <p>Scriza Private Limited</p>
            <p>Office A-125, Sector 16A, Noida, Uttar Pradesh, India</p>
            <p>Email: info@scriza.in</p>
          </address>
        </section>
      </main>
      <Certification />
      <Footer />
    </div>
  )
}
