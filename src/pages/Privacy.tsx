// src/pages/PrivacyPolicyPage.tsx
import { AppHeader } from '../components/app/AppHeader';
import { AppFooter } from '../components/app/AppFooter';
import { useState, useEffect } from 'react';

export const PrivacyPolicy = () => {
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
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Privacy Policy</h1>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
            <p className="text-gray-600 max-w-3xl mx-auto">
              At Archix, we take your privacy seriously. This policy explains how we collect, use, and protect your information.
            </p>
          </section>

          {/* Table of Contents */}
          <section className="bg-white rounded-xl p-6 shadow-md border border-gray-100 mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Table of Contents</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {[
                'introduction',
                'information-we-collect',
                'how-we-use-your-information',
                'data-storage-security',
                'your-rights',
                'cookies-tracking',
                'third-party-services',
                'policy-updates',
                'contact-us'
              ].map((sectionId, index) => {
                const titles = [
                  'Introduction',
                  'Information We Collect',
                  'How We Use Your Information',
                  'Data Storage & Security',
                  'Your Rights',
                  'Cookies & Tracking',
                  'Third-Party Services',
                  'Policy Updates',
                  'Contact Us'
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

          {/* Policy Content */}
          <div className="space-y-8">
            {/* Introduction */}
            <section id="introduction" className="bg-white rounded-xl p-6 md:p-8 shadow-md border border-gray-100">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
                Introduction
              </h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  Welcome to Archix's Privacy Policy. This policy describes how Archix ("we," "us," or "our") collects, uses, 
                  and shares your personal information when you use our document management platform and related services.
                </p>
                <p>
                  By accessing or using Archix, you agree to the collection and use of information in accordance with this policy. 
                  If you do not agree with any part of this policy, you may not use our services.
                </p>
              </div>
            </section>

            {/* Information We Collect */}
            <section id="information-we-collect" className="bg-white rounded-xl p-6 md:p-8 shadow-md border border-gray-100">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
                Information We Collect
              </h2>
              <div className="text-gray-700 space-y-4">
                <h3 className="text-lg font-medium text-gray-900">2.1 Information You Provide to Us</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><span className="font-medium">Account Information:</span> When you create an account, we collect your name, email address, and organization details.</li>
                  <li><span className="font-medium">Document Content:</span> We store and process the documents you upload to our platform.</li>
                  <li><span className="font-medium">Payment Information:</span> If you purchase a subscription, we collect payment details through our secure payment processors.</li>
                  <li><span className="font-medium">Communications:</span> Information you provide when contacting our support team or participating in surveys.</li>
                </ul>

                <h3 className="text-lg font-medium text-gray-900 mt-6">2.2 Information We Collect Automatically</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><span className="font-medium">Usage Data:</span> Information about how you interact with our services, including IP address, browser type, and device information.</li>
                  <li><span className="font-medium">Log Data:</span> Server logs that include information about your use of our platform.</li>
                  <li><span className="font-medium">Cookies and Similar Technologies:</span> We use cookies to enhance your experience and analyze service usage.</li>
                </ul>
              </div>
            </section>

            {/* How We Use Your Information */}
            <section id="how-we-use-your-information" className="bg-white rounded-xl p-6 md:p-8 shadow-md border border-gray-100">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
                How We Use Your Information
              </h2>
              <div className="text-gray-700 space-y-4">
                <p>We use the information we collect for the following purposes:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  {[
                    { title: 'Service Delivery', description: 'To provide, maintain, and improve our services' },
                    { title: 'Authentication', description: 'To verify your identity and secure your account' },
                    { title: 'Communication', description: 'To send important notices and updates about our services' },
                    { title: 'Support', description: 'To respond to your comments and support requests' },
                    { title: 'Analytics', description: 'To understand how our services are used and improve them' },
                    { title: 'Security', description: 'To protect against fraudulent or unauthorized use' },
                  ].map((item, index) => (
                    <div key={index} className="bg-cream-50 p-4 rounded-lg border border-cream-200">
                      <h4 className="font-medium text-gray-900">{item.title}</h4>
                      <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Data Storage & Security */}
            <section id="data-storage-security" className="bg-white rounded-xl p-6 md:p-8 shadow-md border border-gray-100">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-bold mr-3">4</span>
                Data Storage & Security
              </h2>
              <div className="text-gray-700 space-y-4">
                <h3 className="text-lg font-medium text-gray-900">4.1 Data Storage</h3>
                <p>
                  Your data is stored on secure servers located in [specify geographic region, e.g., the European Union]. 
                  We implement measures to ensure that your data is protected in accordance with applicable data protection laws.
                </p>

                <h3 className="text-lg font-medium text-gray-900 mt-6">4.2 Security Measures</h3>
                <p>We implement appropriate technical and organizational measures to protect your personal information, including:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Encryption of data in transit and at rest using industry-standard protocols</li>
                  <li>Regular security assessments and vulnerability testing</li>
                  <li>Access controls and authentication mechanisms</li>
                  <li>Employee training on data protection and security practices</li>
                </ul>

                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mt-6">
                  <h4 className="font-medium text-red-800 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    Important Security Note
                  </h4>
                  <p className="text-red-700 text-sm mt-2">
                    While we implement robust security measures, no method of transmission over the Internet or electronic storage is 100% secure. 
                    We cannot guarantee absolute security but we continuously work to protect your information to the best of our ability.
                  </p>
                </div>
              </div>
            </section>

            {/* Your Rights */}
            <section id="your-rights" className="bg-white rounded-xl p-6 md:p-8 shadow-md border border-gray-100">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-bold mr-3">5</span>
                Your Rights
              </h2>
              <div className="text-gray-700 space-y-4">
                <p>Depending on your location, you may have the following rights regarding your personal information:</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  {[
                    { title: 'Access', description: 'Right to access and receive copies of your personal information' },
                    { title: 'Correction', description: 'Right to correct inaccurate or incomplete information' },
                    { title: 'Deletion', description: 'Right to request deletion of your personal information' },
                    { title: 'Portability', description: 'Right to receive your data in a structured, machine-readable format' },
                    { title: 'Objection', description: 'Right to object to certain processing activities' },
                    { title: 'Restriction', description: 'Right to request restriction of processing in certain circumstances' },
                  ].map((item, index) => (
                    <div key={index} className="bg-cream-50 p-4 rounded-lg border border-cream-200">
                      <h4 className="font-medium text-gray-900">{item.title}</h4>
                      <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                    </div>
                  ))}
                </div>

                <p className="mt-6">
                  To exercise any of these rights, please contact us at{' '}
                  <a href="mailto:privacy@archix.com" className="text-red-600 hover:underline">privacy@archix.com</a>. 
                  We will respond to your request within the timeframe required by applicable law.
                </p>
              </div>
            </section>

            {/* Cookies & Tracking */}
            <section id="cookies-tracking" className="bg-white rounded-xl p-6 md:p-8 shadow-md border border-gray-100">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-bold mr-3">6</span>
                Cookies & Tracking Technologies
              </h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  We use cookies and similar tracking technologies to track activity on our service and hold certain information. 
                  Cookies are files with a small amount of data that may include an anonymous unique identifier.
                </p>

                <h3 className="text-lg font-medium text-gray-900">Types of Cookies We Use</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200 mt-4">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purpose</th>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-4 text-sm font-medium text-gray-900">Essential Cookies</td>
                        <td className="px-4 py-4 text-sm text-gray-700">Necessary for the operation of our service</td>
                        <td className="px-4 py-4 text-sm text-gray-700">Session</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4 text-sm font-medium text-gray-900">Functionality Cookies</td>
                        <td className="px-4 py-4 text-sm text-gray-700">Remember your preferences and settings</td>
                        <td className="px-4 py-4 text-sm text-gray-700">Persistent</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4 text-sm font-medium text-gray-900">Analytics Cookies</td>
                        <td className="px-4 py-4 text-sm text-gray-700">Help us understand how visitors interact with our website</td>
                        <td className="px-4 py-4 text-sm text-gray-700">Persistent</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-4">
                  You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. 
                  However, if you do not accept cookies, you may not be able to use some portions of our service.
                </p>
              </div>
            </section>

            {/* Third-Party Services */}
            <section id="third-party-services" className="bg-white rounded-xl p-6 md:p-8 shadow-md border border-gray-100">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-bold mr-3">7</span>
                Third-Party Services
              </h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  We may employ third-party companies and individuals to facilitate our service, provide the service on our behalf, 
                  perform service-related services, or assist us in analyzing how our service is used.
                </p>
                <p>
                  These third parties have access to your personal information only to perform these tasks on our behalf and are 
                  obligated not to disclose or use it for any other purpose.
                </p>

                <h3 className="text-lg font-medium text-gray-900">Third-Party Services We Use</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Cloud storage providers (e.g., AWS, Google Cloud)</li>
                  <li>Payment processors (e.g., Stripe, PayPal)</li>
                  <li>Analytics services (e.g., Google Analytics)</li>
                  <li>Customer support platforms</li>
                  <li>Email service providers</li>
                </ul>
              </div>
            </section>

            {/* Policy Updates */}
            <section id="policy-updates" className="bg-white rounded-xl p-6 md:p-8 shadow-md border border-gray-100">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-bold mr-3">8</span>
                Policy Updates
              </h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new 
                  Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy.
                </p>
                <p>
                  We will also notify you via email and/or a prominent notice on our service prior to the change becoming 
                  effective if the changes are significant. You are advised to review this Privacy Policy periodically for any changes.
                </p>
                <p>
                  Changes to this Privacy Policy are effective when they are posted on this page.
                </p>
              </div>
            </section>

            {/* Contact Us */}
            <section id="contact-us" className="bg-white rounded-xl p-6 md:p-8 shadow-md border border-gray-100">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-bold mr-3">9</span>
                Contact Us
              </h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="w-5 h-5 text-red-600 mr-2 mt-1">
                      <svg fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </span>
                    <span>By email: <a href="mailto:privacy@archix.com" className="text-red-600 hover:underline">privacy@archix.com</a></span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 text-red-600 mr-2 mt-1">
                      <svg fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span>Through our website: <a href="https://www.archix.com/contact" className="text-red-600 hover:underline">www.archix.com/contact</a></span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 text-red-600 mr-2 mt-1">
                      <svg fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span>By mail: XXXXXXX, MA</span>
                  </li>
                </ul>

                <div className="bg-cream-50 border border-cream-200 rounded-lg p-4 mt-6">
                  <h4 className="font-medium text-gray-900">Data Protection Officer</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    For privacy-specific concerns, you may contact our Data Protection Officer at{' '}
                    <a href="mailto:dpo@archix.com" className="text-red-600 hover:underline">dpo@archix.com</a>.
                  </p>
                </div>
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