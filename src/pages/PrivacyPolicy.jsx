import React from 'react'

const PrivacyPolicy = () => {
  return (
    <div className='min-h-screen font-inter py-16 px-6 md:px-12'>
      <div className='max-w-4xl mx-auto'>
        
        {/* Header */}
        <div className='text-left mb-12'>
          <h1 className='text-4xl md:text-5xl font-regular text-white mb-4'>Privacy Policy</h1>
          <p className='text-gray-200 text-lg font-light'>Last updated: August 5, 2025</p>
        </div>

        {/* Content */}
        <div className='prose prose-lg max-w-none text-white space-y-8'>
          
          {/* Introduction */}
          <section>
            <p className='text-lg leading-relaxed mb-6 font-light'>
              At Arogyam, we are committed to protecting your privacy and ensuring the security of your personal information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our 
              ingredient scanning and analysis service.
            </p>
            <p className='mb-6 font-light'>
              Important Note: Arogyam is an educational project and ingredient identification tool. 
              We are not a medical service and do not provide medical advice. Always consult healthcare professionals 
              for medical decisions.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className='text-2xl font-light text-white mb-4'>1. Information We Collect</h2>
            
            <h3 className='text-xl font-light text-gray-200 mb-3'>Personal Information</h3>
            <ul className='list-disc pl-6 mb-6 space-y-2 font-light'>
              <li>Email address and account credentials</li>
              <li>Name</li>
            </ul>

            <h3 className='text-xl font-light text-gray-200 mb-3'>Health-Related Information</h3>
            <ul className='list-disc pl-6 mb-6 space-y-2 font-light'>
              <li>Ingredients and substances you choose to avoid</li>
              <li>Product scanning history</li>
              <li>Safety check results and preferences</li>
            </ul>

            <h3 className='text-xl font-light text-gray-200 mb-3'>Technical Information</h3>
            <ul className='list-disc pl-6 mb-6 space-y-2 font-light'>
              <li>Device information (type, operating system)</li>
              <li>Camera access (only when scanning barcodes)</li>
            </ul>
          </section>

          {/* How We Use Information */}
          <section>
            <h2 className='text-2xl font-light text-white mb-4'>2. How We Use Your Information</h2>
            <ul className='list-disc pl-6 mb-6 space-y-2 font-light'>
              <li>Provide ingredient analysis and safety checking services</li>
              <li>Maintain and improve our AI matching algorithms</li>
              <li>Store your avoidance preferences and scan history</li>
              <li>Ensure the security and integrity of our platform</li>
            </ul>
          </section>

          {/* Information Sharing */}
          <section>
            <h2 className='text-2xl font-light text-white mb-4'>3. Information Sharing and Disclosure</h2>
            
            <h3 className='text-xl font-light text-gray-200 mb-3'>We DO NOT:</h3>
            <ul className='list-disc pl-6 mb-6 space-y-2 font-light'>
              <li>Sell, rent, or trade your personal information</li>
              <li>Share your health-related avoidance lists with third parties</li>
              <li>Use your data for advertising or marketing purposes</li>
            </ul>

            <h3 className='text-xl font-light text-gray-200 mb-3'>We MAY share information:</h3>
            <ul className='list-disc pl-6 mb-6 space-y-2 font-light'>
              <li>With third-party product database APIs (only barcode information, not personal data)</li>
              <li>With AI service providers for ingredient analysis (anonymized data only)</li>
              <li>When required by law or to protect our legal rights</li>
            </ul>
          </section>

          {/* Data Security */}
          <section>
            <h2 className='text-2xl font-light text-white mb-4'>4. Data Security</h2>
            <p className='mb-4 font-light'>
              We implement appropriate technical and organizational measures to protect your information:
            </p>
            <ul className='list-disc pl-6 mb-6 space-y-2 font-light'>
              <li>Encryption of data in transit and at rest</li>
              <li>Secure authentication and access controls</li>
            </ul>
            <p className='mb-6 font-light'>
              However, no method of transmission over the Internet is 100% secure. While we strive to protect 
              your information, we cannot guarantee absolute security.
            </p>
          </section>

          {/* Data Retention */}
          <section>
            <h2 className='text-2xl font-light text-white mb-4'>5. Data Retention</h2>
            <ul className='list-disc pl-6 mb-6 space-y-2 font-light'>
              <li>Account information: Retained while your account is active</li>
              <li>Scan history: Retained for service improvement, can be deleted upon request</li>
              <li>Avoidance lists: Retained until account deletion</li>
            </ul>
          </section>

          {/* Third-Party Services */}
          <section>
            <h2 className='text-2xl font-light text-white mb-4'>6. Third-Party Services</h2>
            <p className='mb-4 font-light'>
              Arogyam integrates with third-party services to provide our functionality:
            </p>
            <ul className='list-disc pl-6 mb-6 space-y-2 font-light'>
              <li>Product Database APIs: For retrieving ingredient information</li>
              <li>AI Analysis Services: For ingredient matching and analysis</li>
            </ul>
            <p className='mb-6 font-light'>
              These services have their own privacy policies, and we encourage you to review them.
            </p>
          </section>

          {/* Medical Disclaimer */}
          <section>
            <h2 className='text-2xl font-light text-white mb-4'>7. Medical Disclaimer</h2>
            <div className='bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6'>
              <p className='font-light text-black mb-2'>Important Health Notice:</p>
              <p className='text-black font-light'>
                Arogyam is not a medical device or service. Our ingredient identification and analysis 
                is for informational purposes only and should not replace professional medical advice, 
                diagnosis, or treatment. Always consult qualified healthcare professionals for medical 
                decisions. For life-threatening allergies, always read product labels manually and 
                carry appropriate emergency medications.
              </p>
            </div>
          </section>


          {/* Changes to Policy */}
          <section>
            <h2 className='text-2xl font-light text-white mb-4'>8. Changes to This Privacy Policy</h2>
            <p className='mb-6 font-light'>
              We may update this Privacy Policy periodically. We will notify you of any material changes 
              by posting the new Privacy Policy on this page and updating the "Last updated" date. 
              Your continued use of Arogyam after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className='text-2xl font-light text-white mb-4'>9. Contact Us</h2>
            <div className='bg-gray-50 p-6 rounded-lg text-black font-light'>
              <p className='mb-4'>
                If you have any questions about this Privacy Policy or our data practices, please contact us: alfredscyriac@gmail.com
              </p>
              <ul className='space-y-2 '>
                <li>Email: Need to add business email once domain is purchased </li>
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

export default PrivacyPolicy