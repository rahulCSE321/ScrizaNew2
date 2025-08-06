'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Certification from '@/components/Certification'

export default function TermsConditionsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <Header currentPage="terms-conditions" />
      
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div className="w-full">
          <img 
            src="/termscondition.png" 
            alt="Terms and Conditions" 
            className="w-full h-auto max-h-[500px] object-contain object-center bg-gray-100" 
          />
        </div>
      </section>
      
      {/* Content */}
      <main className="flex-1 py-16 px-6 md:px-12 lg:px-24 max-w-5xl mx-auto space-y-10">
        <h1 className="text-3xl md:text-4xl font-bold text-center">
          Terms and Conditions
        </h1>

        {/* Intro */}
        <section className="space-y-6">
          <p>
            Your website may use the Terms and Conditions given below.
          </p>
          <p>
            The terms <strong>"We" / "Us" / "Our" / "Company"</strong> individually 
            and collectively refer to <strong>Scriza Private Limited</strong> and the 
            terms <strong>"Visitor" "User"</strong> refer to the users.
          </p>
          <p>
            This page states the Terms and Conditions under which you (Visitor) may 
            visit this website ("Website"). Please read this page carefully. If you 
            do not accept the Terms and Conditions stated here, we would request you 
            to exit this site. The business, any of its business divisions and / or 
            its subsidiaries, associate companies or subsidiaries to subsidiaries or 
            such other investment companies (in India or abroad) reserve their respective 
            rights to revise these Terms and Conditions at any time by updating this 
            posting. You should visit this page periodically to re-appraise yourself 
            of the Terms and Conditions, because they are binding on all users of this Website.
          </p>
        </section>

        {/* Use Of Content */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">1. Use Of Content</h2>
          <p>
            All logos, brands, marks headings, labels, names, signatures, numerals, 
            shapes or any combinations thereof, appearing in this site, except as 
            otherwise noted, are properties either owned, or used under licence, by 
            the business and / or its associate entities who feature on this Website. 
            The use of these properties or any other content on this site, except as 
            provided in these terms and conditions or in the site content, is strictly prohibited.
          </p>
          <p>
            You may not sell or modify the content of this Website or reproduce, display, 
            publicly perform, distribute, or otherwise use the materials in any way for 
            any public or commercial purpose without the respective organisation's or 
            entity's written permission.
          </p>
        </section>

        {/* Acceptable Website Use */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">2. Acceptable Website Use</h2>
          
          <div className="space-y-4">
            <h3 className="text-xl font-medium">(A) Security Rules</h3>
            <p>
              Visitors are prohibited from violating or attempting to violate the 
              security of the Web site, including, without limitation:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                Accessing data not intended for such user or logging into a server 
                or account which the user is not authorised to access
              </li>
              <li>
                Attempting to probe, scan or test the vulnerability of a system or 
                network or to breach security or authentication measures without proper authorisation
              </li>
              <li>
                Attempting to interfere with service to any user, host or network, 
                including, without limitation, via means of submitting a virus or 
                "Trojan horse" to the Website, overloading, "flooding", "mail bombing" or "crashing"
              </li>
              <li>
                Sending unsolicited electronic mail, including promotions and/or 
                advertising of products or services
              </li>
            </ul>
            <p>
              Violations of system or network security may result in civil or criminal 
              liability. The business and / or its associate entities will have the 
              right to investigate occurrences that they suspect as involving such 
              violations and will have the right to involve, and cooperate with, law 
              enforcement authorities in prosecuting users who are involved in such violations.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-medium">(B) General Rules</h3>
            <p>
              Visitors may not use the Web Site in order to transmit, distribute, 
              store or destroy material:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                That could constitute or encourage conduct that would be considered 
                a criminal offence or violate any applicable law or regulation
              </li>
              <li>
                In a manner that will infringe the copyright, trademark, trade secret 
                or other intellectual property rights of others or violate the privacy 
                or publicity of other personal rights of others
              </li>
              <li>
                That is libellous, defamatory, pornographic, profane, obscene, threatening, 
                abusive or hateful
              </li>
            </ul>
          </div>
        </section>

        {/* Indemnity */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">3. Indemnity</h2>
          <p>
            The User unilaterally agree to indemnify and hold harmless, without objection, 
            the Company, its officers, directors, employees and agents from and against 
            any claims, actions and/or demands and/or liabilities and/or losses and/or 
            damages whatsoever arising from or resulting from their use of <em>www.scriza.in</em> 
            or their breach of the terms.
          </p>
        </section>

        {/* Liability */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">4. Liability</h2>
          <p>
            User agrees that neither Company nor its group companies, directors, officers 
            or employee shall be liable for any direct or/and indirect or/and incidental 
            or/and special or/and consequential or/and exemplary damages, resulting from 
            the use or/and the inability to use the service or/and for cost of procurement 
            of substitute goods or/and services or resulting from any goods or/and data 
            or/and information or/and services purchased or/and obtained or/and messages 
            received or/and transactions entered into through or/and from the service or/and 
            resulting from unauthorized access to or/and alteration of user's transmissions 
            or/and data or/and arising from any other matter relating to the service, 
            including but not limited to, damages for loss of profits or/and use or/and 
            data or other intangible, even if Company has been advised of the possibility 
            of such damages.
          </p>
          <p>
            User further agrees that Company shall not be liable for any damages arising 
            from interruption, suspension or termination of service, including but not 
            limited to direct or/and indirect or/and incidental or/and special consequential 
            or/and exemplary damages, whether such interruption or/and suspension or/and 
            termination was justified or not, negligent or intentional, inadvertent or advertent.
          </p>
          <p>
            User agrees that Company shall not be responsible or liable to user, or anyone, 
            for the statements or conduct of any third party of the service. In sum, in 
            no event shall Company's total liability to the User for all damages or/and 
            losses or/and causes of action exceed the amount paid by the User to Company, 
            if any, that is related to the cause of action.
          </p>
        </section>

        {/* Disclaimer Of Consequential Damages */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">5. Disclaimer Of Consequential Damages</h2>
          <p>
            In no event shall Company or any parties, organisations or entities associated 
            with the corporate brand name us or otherwise, mentioned at this Website be 
            liable for any damages whatsoever (including, without limitations, incidental 
            and consequential damages, lost profits, or damage to computer hardware or 
            loss of data information or business interruption) resulting from the use or 
            inability to use the Website and the Website material, whether based on warranty, 
            contract, tort, or any other legal theory, and whether or not, such organisation 
            or entities were advised of the possibility of such damages.
          </p>
        </section>
      </main>
      
      <Certification />
      <Footer />
    </div>
  )
}