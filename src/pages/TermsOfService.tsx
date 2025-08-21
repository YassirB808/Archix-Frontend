// src/pages/TermsOfServicePage.tsx
import { AppHeader } from '../components/app/AppHeader';
import { AppFooter } from '../components/app/AppFooter';
import { useState, useEffect } from 'react';

export const TermsOfService = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Set up scroll event listener to show/hide the scroll button
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 20,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-cream-50 to-cream-100">
      {/* Header fixed at top */}
      <AppHeader className="fixed top-0 left-0 right-0 w-full z-50" />

      {/* Back to Top Button */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-red-600 text-white shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-red-700 hover:shadow-xl"
          aria-label="Back to top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}

      {/* Main content */}
      <main className="flex-grow pb-14 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <section className={`text-center space-y-6 py-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-50 mb-4 shadow-lg">
              <svg className="w-10 h-10 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Terms of Service</h1>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Please read these Terms of Service carefully before using the Archix platform.
            </p>
          </section>

          {/* Table of Contents */}
          <section className="bg-white rounded-xl p-6 shadow-md border border-gray-100 mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Table of Contents</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {[
                'agreement',
                'account-registration',
                'access-license',
                'user-content',
                'prohibited-activities',
                'intellectual-property',
                'fees-payment',
                'termination',
                'disclaimer',
                'limitation-liability',
                'governing-law',
                'changes',
                'contact'
              ].map((sectionId, index) => {
                const titles = [
                  'Agreement to Terms',
                  'Account Registration',
                  'Access & License',
                  'User Content',
                  'Prohibited Activities',
                  'Intellectual Property',
                  'Fees & Payment',
                  'Termination',
                  'Disclaimer',
                  'Limitation of Liability',
                  'Governing Law',
                  'Changes to Terms',
                  'Contact Information'
                ];
                
                return (
                  <button
                    key={index}
                    onClick={() => scrollToSection(sectionId)}
                    className="text-left text-red-600 hover:text-red-700 text-sm transition-colors"
                  >
                    {index + 1}. {titles[index]}
                  </button>
                );
              })}
            </div>
          </section>

          {/* Terms Content */}
          <div className="space-y-8">
            {/* Agreement to Terms */}
            <section id="agreement" className="bg-white rounded-xl p-6 md:p-8 shadow-md border border-gray-100">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
                Agreement to Terms
              </h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  By accessing or using Archix ("the Service"), you agree to be bound by these Terms of Service and all applicable laws and regulations. 
                  If you do not agree with any of these terms, you are prohibited from using or accessing this Service.
                </p>
                <p>
                  The materials contained in this Service are protected by applicable copyright and trademark law. 
                  These Terms apply to all visitors, users, and others who access or use the Service.
                </p>
              </div>
            </section>

            {/* Account Registration */}
            <section id="account-registration" className="bg-white rounded-xl p-6 md:p-8 shadow-md border border-gray-100">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
                Account Registration
              </h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  To access certain features of the Service, you must register for an account. When you register, you agree to:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Provide accurate, current, and complete information during the registration process</li>
                  <li>Maintain and promptly update your account information to keep it accurate and complete</li>
                  <li>Maintain the security of your password and accept all risks of unauthorized access</li>
                  <li>Notify us immediately if you discover or suspect any security breaches related to the Service</li>
                  <li>Take responsibility for all activities that occur under your account</li>
                </ul>
                <p>
                  You must be at least 18 years of age or the age of majority in your jurisdiction to use our Service. 
                  By using the Service, you represent and warrant that you meet these eligibility requirements.
                </p>
              </div>
            </section>

            {/* Access & License */}
            <section id="access-license" className="bg-white rounded-xl p-6 md:p-8 shadow-md border border-gray-100">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
                Access & License
              </h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  Subject to your compliance with these Terms, Archix grants you a limited, non-exclusive, non-transferable, 
                  non-sublicensable license to access and use the Service for your personal or internal business purposes.
                </p>
                <p>
                  This license is subject to the following restrictions:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>You may not sell, rent, lease, transfer, assign, distribute, host, or otherwise commercially exploit the Service</li>
                  <li>You may not modify, make derivative works of, disassemble, reverse compile, or reverse engineer any part of the Service</li>
                  <li>You may not access the Service to build a similar or competitive service</li>
                  <li>You may not use the Service in any manner that could damage, disable, overburden, or impair our servers or networks</li>
                </ul>
                <p>
                  We reserve the right to change, suspend, or discontinue the Service (or any part thereof) at any time, with or without notice.
                </p>
              </div>
            </section>

            {/* User Content */}
            <section id="user-content" className="bg-white rounded-xl p-6 md:p-8 shadow-md border border-gray-100">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-bold mr-3">4</span>
                User Content
              </h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  "User Content" means any and all information and content that a user submits to or uses with the Service, 
                  including documents, text, images, and other materials.
                </p>
                <p>
                  You are solely responsible for your User Content. You assume all risks associated with use of your User Content, 
                  including any reliance on its accuracy, completeness, or usefulness by others, or any disclosure of your User Content 
                  that makes you or any third party personally identifiable.
                </p>
                <p>
                  By posting User Content, you represent and warrant that:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>You own or have the necessary licenses, rights, consents, and permissions to use and authorize us to use your User Content</li>
                  <li>Your User Content does not violate any applicable law or regulation</li>
                  <li>Your User Content does not violate any third-party right, including any copyright, trademark, patent, trade secret, or privacy right</li>
                  <li>Your User Content does not contain any viruses, adware, spyware, worms, or other malicious code</li>
                </ul>
                <p>
                  You hereby grant Archix a worldwide, irrevocable, perpetual, non-exclusive, transferable, royalty-free license to use, 
                  reproduce, distribute, prepare derivative works of, display, and perform your User Content in connection with the Service.
                </p>
              </div>
            </section>

            {/* Prohibited Activities */}
            <section id="prohibited-activities" className="bg-white rounded-xl p-6 md:p-8 shadow-md border border-gray-100">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-bold mr-3">5</span>
                Prohibited Activities
              </h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  You agree not to use the Service to engage in any of the following prohibited activities:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  {[
                    { title: 'Illegal Activities', description: 'Violating any applicable law or regulation' },
                    { title: 'Fraud', description: 'Engaging in fraudulent or deceptive practices' },
                    { title: 'Infringement', description: 'Infringing upon others intellectual property rights' },
                    { title: 'Malware', description: 'Distributing viruses or other harmful computer code' },
                    { title: 'Spam', description: 'Sending unsolicited or unauthorized advertising' },
                    { title: 'Data Mining', description: 'Scraping or harvesting information from the Service' },
                    { title: 'Security Breaches', description: 'Interfering with or disrupting the Service' },
                    { title: 'Unauthorized Access', description: 'Attempting to gain unauthorized access to systems' },
                  ].map((item, index) => (
                    <div key={index} className="bg-cream-50 p-4 rounded-lg border border-cream-200">
                      <h4 className="font-medium text-gray-900">{item.title}</h4>
                      <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-6">
                  We reserve the right to investigate and prosecute violations of these Terms to the fullest extent of the law. 
                  We may involve and cooperate with law enforcement authorities in prosecuting users who violate these Terms.
                </p>
              </div>
            </section>

            {/* Intellectual Property */}
            <section id="intellectual-property" className="bg-white rounded-xl p-6 md:p-8 shadow-md border border-gray-100">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-bold mr-3">6</span>
                Intellectual Property
              </h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  The Service and its original content, features, and functionality are owned by Archix and are protected by 
                  international copyright, trademark, patent, trade secret, and other intellectual property laws.
                </p>
                <p>
                  Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Archix.
                </p>
                <p>
                  You acknowledge that the Service contains proprietary content, information, and material that is protected by applicable 
                  intellectual property and other laws, including copyright, and that you will not use such proprietary content, information, 
                  or materials in any way whatsoever except for permitted use of the Service.
                </p>
              </div>
            </section>

            {/* Fees & Payment */}
            <section id="fees-payment" className="bg-white rounded-xl p-6 md:p-8 shadow-md border border-gray-100">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-bold mr-3">7</span>
                Fees & Payment
              </h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  Certain aspects of the Service may be provided for a fee or other charge. If you elect to use paid aspects of the Service, 
                  you agree to the pricing and payment terms as we may update them from time to time.
                </p>
                <p>
                  We may add new services for additional fees and charges, or amend fees and charges for existing services, at any time in our sole discretion.
                </p>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mt-4">
                  <h4 className="font-medium text-red-800 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    Payment Information
                  </h4>
                  <p className="text-red-700 text-sm mt-2">
                    You agree to provide current, complete, and accurate purchase and account information for all purchases made via the Service. 
                    You further agree to promptly update account and payment information, including email address, payment method, and payment card expiration date, 
                    so that we can complete your transactions and contact you as needed.
                  </p>
                </div>
              </div>
            </section>

            {/* Termination */}
            <section id="termination" className="bg-white rounded-xl p-6 md:p-8 shadow-md border border-gray-100">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-bold mr-3">8</span>
                Termination
              </h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, 
                  under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
                </p>
                <p>
                  If you wish to terminate your account, you may simply discontinue using the Service or delete your account through the account settings.
                </p>
                <p>
                  All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, 
                  ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
                </p>
              </div>
            </section>

            {/* Disclaimer */}
            <section id="disclaimer" className="bg-white rounded-xl p-6 md:p-8 shadow-md border border-gray-100">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-bold mr-3">9</span>
                Disclaimer
              </h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, 
                  whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, 
                  non-infringement, or course of performance.
                </p>
                <p>
                  Archix, its subsidiaries, affiliates, and its licensors do not warrant that:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>The Service will function uninterrupted, secure, or available at any particular time or location</li>
                  <li>Any errors or defects will be corrected</li>
                  <li>The Service is free of viruses or other harmful components</li>
                  <li>The results of using the Service will meet your requirements</li>
                </ul>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section id="limitation-liability" className="bg-white rounded-xl p-6 md:p-8 shadow-md border border-gray-100">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-bold mr-3">10</span>
                Limitation of Liability
              </h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  In no event shall Archix, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, 
                  incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, 
                  or other intangible losses, resulting from:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Your access to or use of or inability to access or use the Service</li>
                  <li>Any conduct or content of any third party on the Service</li>
                  <li>Any content obtained from the Service</li>
                  <li>Unauthorized access, use, or alteration of your transmissions or content</li>
                </ul>
                <p>
                  The limitations of this section apply to any theory of liability, whether based on warranty, contract, statute, tort (including negligence), 
                  or otherwise, and whether or not Archix has been informed of the possibility of any such damage.
                </p>
              </div>
            </section>

            {/* Governing Law */}
            <section id="governing-law" className="bg-white rounded-xl p-6 md:p-8 shadow-md border border-gray-100">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-bold mr-3">11</span>
                Governing Law
              </h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  These Terms shall be governed and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions.
                </p>
                <p>
                  Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. 
                  If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
                </p>
                <p>
                  These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have had between us regarding the Service.
                </p>
              </div>
            </section>

            {/* Changes to Terms */}
            <section id="changes" className="bg-white rounded-xl p-6 md:p-8 shadow-md border border-gray-100">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-bold mr-3">12</span>
                Changes to Terms
              </h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
                  If a revision is material we will provide at least 30 days' notice prior to any new terms taking effect. 
                  What constitutes a material change will be determined at our sole discretion.
                </p>
                <p>
                  By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms. 
                  If you do not agree to the new terms, you are no longer authorized to use the Service.
                </p>
              </div>
            </section>

            {/* Contact Information */}
            <section id="contact" className="bg-white rounded-xl p-6 md:p-8 shadow-md border border-gray-100">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-bold mr-3">13</span>
                Contact Information
              </h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  If you have any questions about these Terms, please contact us at:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="w-5 h-5 text-red-600 mr-2 mt-1">
                      <svg fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </span>
                    <span>By email: <a href="mailto:legal@archix.com" className="text-red-600 hover:underline">legal@archix.com</a></span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 text-red-600 mr-2 mt-1">
                      <svg fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span>By mail: XXXXXXXX, MA</span>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <AppFooter className="w-full" />
    </div>
  );
};