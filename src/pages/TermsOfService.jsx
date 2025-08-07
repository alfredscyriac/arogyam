import React from 'react'

const TermsOfService = () => {
  return (
    <div className='min-h-screen font-inter py-16 px-6 md:px-12'>
      <div className='max-w-4xl mx-auto'>
        
        {/* Header */}
        <div className='text-left mb-12'>
          <h1 className='text-4xl md:text-5xl font-semibold text-white mb-4'>Terms of Service</h1>
          <p className='text-gray-200 text-lg font-light'>Last updated: August 7, 2025</p>
        </div>

        {/* Content */}
        <div className='prose prose-lg max-w-none text-white space-y-8'>
          
          {/* Introduction */}
          <section>
            <p className='text-lg leading-relaxed mb-6 font-light'>
              Welcome to Arogyam. These Terms of Service ("Terms") govern your use of our ingredient scanning 
              and analysis service. By accessing or using Arogyam, you agree to be bound by these Terms.
            </p>
            <p className='mb-6 font-light'>
              <strong>Important:</strong> Arogyam is an educational project and ingredient identification tool. 
              We are not a medical service and do not provide medical advice. These terms reflect the educational 
              nature of this project.
            </p>
          </section>

          {/* Acceptance of Terms */}
          <section>
            <h2 className='text-2xl font-medium text-white mb-4'>1. Acceptance of Terms</h2>
            <p className='mb-6 font-light'>
              By creating an account, accessing, or using Arogyam, you acknowledge that you have read, 
              understood, and agree to be bound by these Terms and our Privacy Policy. If you do not 
              agree to these Terms, please do not use our service.
            </p>
          </section>

          {/* Description of Service */}
          <section>
            <h2 className='text-2xl font-medium text-white mb-4'>2. Description of Service</h2>
            <p className='mb-4 font-light'>Arogyam provides:</p>
            <ul className='list-disc pl-6 mb-6 space-y-2 font-light'>
              <li>Barcode scanning functionality for products</li>
              <li>Ingredient identification and analysis</li>
              <li>Personalized avoidance lists based on your health conditions</li>
              <li>AI-powered ingredient matching to identify potentially harmful substances</li>
            </ul>
            <p className='mb-6 font-light'>
              Our service is designed to help users identify potentially problematic ingredients, 
              but should never replace professional medical advice or personal judgment.
            </p>
          </section>

          {/* User Accounts and Responsibilities */}
          <section>
            <h2 className='text-2xl font-medium text-white mb-4'>3. User Accounts and Responsibilities</h2>
            
            <h3 className='text-xl font-light text-white mb-3'>Account Creation</h3>
            <ul className='list-disc pl-6 mb-6 space-y-2 font-light'>
              <li>You must provide accurate and complete information when creating an account</li>
              <li>You are responsible for maintaining the confidentiality of your account credentials</li>
            </ul>

            <h3 className='text-xl font-light text-white mb-3'>User Responsibilities</h3>
            <ul className='list-disc pl-6 mb-6 space-y-2 font-light'>
              <li>Use the service only for its intended purpose</li>
              <li>Provide accurate information about your health conditions and avoidances</li>
              <li>Do not share your account with others</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
            </ul>
          </section>

          {/* Prohibited Uses */}
          <section>
            <h2 className='text-2xl font-medium text-white mb-4'>4. Prohibited Uses</h2>
            <p className='mb-4 font-light'>You may not:</p>
            <ul className='list-disc pl-6 mb-6 space-y-2 font-light'>
              <li>Use the service for any illegal or unauthorized purpose</li>
              <li>Attempt to gain unauthorized access to our systems or other users' accounts</li>
              <li>Upload malicious code or attempt to disrupt our service</li>
              <li>Use our service to harm others or violate their privacy</li>
              <li>Reverse engineer, decompile, or attempt to extract our algorithms</li>
              <li>Use automated tools to access our service without permission</li>
            </ul>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className='text-2xl font-medium text-white mb-4'>5. Intellectual Property</h2>
            

            <h3 className='text-xl font-light text-white mb-3'>Your Rights</h3>
            <p className='mb-6 font-light'>
              You retain ownership of any personal information you provide. By using our service, you grant 
              us a limited license to use this information to provide our services as described in our Privacy Policy.
            </p>
          </section>

          {/* Service Availability */}
          <section>
            <h2 className='text-2xl font-medium text-white mb-4'>6. Service Availability and Modifications</h2>
            <ul className='list-disc pl-6 mb-6 space-y-2 font-light'>
              <li>We strive to maintain service availability but cannot guarantee 100% uptime</li>
              <li>We may modify, suspend, or discontinue any part of our service at any time</li>
              <li>We may impose limits on certain features or restrict access to parts of the service</li>
              <li>As an educational project, service availability may be limited</li>
            </ul>
          </section>

          {/* Medical and Accuracy Disclaimers */}
          <section>
            <h2 className='text-2xl font-medium text-white mb-4'>7. Disclaimers</h2>
            
            <div className='bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6'>
              <p className='font-regular text-black mb-2'>Critical Medical Disclaimer:</p>
              <p className='text-black font-light mb-4'>
                AROGYAM IS NOT A MEDICAL DEVICE, SERVICE, OR PROVIDER. Our ingredient identification 
                and analysis is for informational purposes only and should NEVER replace professional 
                medical advice, diagnosis, or treatment.
              </p>
              <ul className='list-disc pl-6 space-y-1 text-black font-light text-sm'>
                <li>Always consult qualified healthcare professionals for medical decisions</li>
                <li>For life-threatening allergies, always read product labels manually</li>
                <li>Carry appropriate emergency medications as prescribed by your doctor</li>
                <li>Our AI may not catch all harmful ingredients or may produce false results</li>
              </ul>
            </div>

            <h3 className='text-xl font-light text-white mb-3'>Accuracy Disclaimer</h3>
            <p className='mb-6 font-light'>
              While we strive for accuracy, we cannot guarantee that our ingredient analysis is 100% correct. 
              Product formulations change, our database may be incomplete, and our AI may make errors. 
              Always verify ingredient information independently.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className='text-2xl font-medium text-white mb-4'>8. Limitation of Liability</h2>
            <p className='mb-6 font-light'>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, AROGYAM AND ITS CREATOR SHALL NOT BE LIABLE 
              FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING 
              BUT NOT LIMITED TO DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA, OR OTHER INTANGIBLE 
              LOSSES RESULTING FROM YOUR USE OF OUR SERVICE, EVEN IF WE HAVE BEEN ADVISED OF THE 
              POSSIBILITY OF SUCH DAMAGES.
            </p>
            <p className='mb-6 font-light'>
              This limitation applies regardless of whether the alleged liability is based on contract, 
              tort, negligence, strict liability, or any other basis.
            </p>
          </section>

          {/* Indemnification */}
          <section>
            <h2 className='text-2xl font-medium text-white mb-4'>9. Indemnification</h2>
            <p className='mb-6 font-light'>
              You agree to indemnify, defend, and hold harmless Arogyam and its creator from and against 
              any claims, damages, obligations, losses, liabilities, costs, or debt, and expenses (including 
              attorney's fees) arising from your use of our service or violation of these Terms.
            </p>
          </section>

          {/* Termination */}
          <section>
            <h2 className='text-2xl font-medium text-white mb-4'>10. Termination</h2>
            <ul className='list-disc pl-6 mb-6 space-y-2 font-light'>
              <li>You may terminate your account at any time by contacting us</li>
              <li>We may terminate or suspend your account immediately for violations of these Terms</li>
              <li>Upon termination, your right to use our service ceases immediately</li>
              <li>We will delete your personal data as outlined in our Privacy Policy</li>
            </ul>
          </section>

          {/* Changes to Terms */}
          <section>
            <h2 className='text-2xl font-medium text-white mb-4'>11. Changes to These Terms</h2>
            <p className='mb-6 font-light'>
              We reserve the right to modify these Terms at any time. We will notify users of any 
              material changes by posting the new Terms on this page and updating the "Last updated" 
              date. Your continued use of Arogyam after changes constitutes acceptance of the updated Terms.
            </p>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className='text-2xl font-medium text-white mb-4'>12. Governing Law</h2>
            <p className='mb-6 font-light'>
              These Terms shall be interpreted and governed by the laws of the jurisdiction where 
              the service is operated, without regard to conflict of law provisions. Any disputes 
              arising under these Terms shall be subject to the exclusive jurisdiction of the courts 
              in that jurisdiction.
            </p>
          </section>

          {/* Severability */}
          <section>
            <h2 className='text-2xl font-medium text-white mb-4'>13. Severability</h2>
            <p className='mb-6 font-light'>
              If any provision of these Terms is found to be unenforceable or invalid, that provision 
              shall be limited or eliminated to the minimum extent necessary so that these Terms shall 
              otherwise remain in full force and effect.
            </p>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className='text-2xl font-medium text-white mb-4'>14. Contact Us</h2>
            <div className='bg-gray-50 p-6 rounded-lg text-black font-regular'>
              <p className='mb-4'>
                If you have any questions about these Terms of Service, please contact us: alfredscyriac@gmail.com
              </p>
              <ul className='space-y-2'>
                <li>Email: Need to add business email once domain is purchased</li>
                <li>Project: Arogyam - Ingredient Safety Scanner</li>
                <li>Developer: Alfred Siby Cyriac</li>
              </ul>
              <p className='mt-4 text-sm text-gray-600'>
                <em>Note: This is an educational project. For demonstration purposes only.</em>
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  )
}

export default TermsOfService