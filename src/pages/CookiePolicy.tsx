// src/pages/CookiePolicyPage.tsx
import { AppHeader } from '../components/app/AppHeader';
import { AppFooter } from '../components/app/AppFooter';
import { useState, useEffect } from 'react';

export const CookiePolicy = () => {
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
                <path fillRule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z" clipRule="evenodd" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Cookie Policy</h1>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
            <p className="text-gray-600 max-w-3xl mx-auto">
              This Cookie Policy explains how Archix uses cookies and similar technologies to recognize you when you visit our platform.
            </p>
          </section>

          {/* Table of Contents */}
          <section className="bg-white rounded-xl p-6 shadow-md border border-gray-100 mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Table of Contents</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {[
                'what-are-cookies',
                'how-we-use-cookies',
                'types-of-cookies',
                'managing-cookies',
                'third-party-cookies',
                'updates-to-policy',
                'contact-us'
              ].map((sectionId, index) => {
                const titles = [
                  'What Are Cookies?',
                  'How We Use Cookies',
                  'Types of Cookies We Use',
                  'Managing Cookies',
                  'Third-Party Cookies',
                  'Updates to This Policy',
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
            {/* What Are Cookies */}
            <section id="what-are-cookies" className="bg-white rounded-xl p-6 md:p-8 shadow-md border border-gray-100">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
                What Are Cookies?
              </h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  Cookies are small text files that are placed on your computer or mobile device when you visit certain websites. 
                  Cookies are widely used to make websites work efficiently and provide information to the website owners.
                </p>
                <p>
                  Cookies typically contain the name of the website they come from, how long they will remain on your device, 
                  and a value which is usually a randomly generated unique number.
                </p>
                <div className="bg-cream-50 border border-cream-200 rounded-lg p-4 mt-4">
                  <h4 className="font-medium text-gray-900 flex items-center">
                    <svg className="w-5 h-5 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    Did You Know?
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Cookies cannot be used to run programs or deliver viruses to your computer. They are uniquely assigned to you 
                    and can only be read by the web server that issued the cookie.
                  </p>
                </div>
              </div>
            </section>

            {/* How We Use Cookies */}
            <section id="how-we-use-cookies" className="bg-white rounded-xl p-6 md:p-8 shadow-md border border-gray-100">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
                How We Use Cookies
              </h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  Archix uses cookies for several purposes to enhance your experience on our platform:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  {[
                    { title: 'Authentication', description: 'To identify you when you visit our platform and as you navigate through it' },
                    { title: 'Preferences', description: 'To store information about your preferences and to personalize the platform' },
                    { title: 'Security', description: 'To protect user accounts and our platform from fraudulent activity' },
                    { title: 'Analytics', description: 'To analyze the use and performance of our platform and services' },
                    { title: 'Functionality', description: 'To enable specific functions of our document management services' },
                    { title: 'Consent', description: 'To store your consent preferences for cookie usage' },
                  ].map((item, index) => (
                    <div key={index} className="bg-cream-50 p-4 rounded-lg border border-cream-200">
                      <h4 className="font-medium text-gray-900">{item.title}</h4>
                      <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Types of Cookies We Use */}
            <section id="types-of-cookies" className="bg-white rounded-xl p-6 md:p-8 shadow-md border border-gray-100">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
                Types of Cookies We Use
              </h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  We use both session cookies (which expire once you close your web browser) and persistent cookies 
                  (which stay on your device until you delete them or they expire).
                </p>
                
                <h3 className="text-lg font-medium text-gray-900 mt-6">3.1 Essential Cookies</h3>
                <p>
                  These cookies are necessary for the website to function and cannot be switched off in our systems. 
                  They are usually only set in response to actions made by you.
                </p>
                
                <h3 className="text-lg font-medium text-gray-900 mt-6">3.2 Performance and Analytics Cookies</h3>
                <p>
                  These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site.
                </p>
                
                <h3 className="text-lg font-medium text-gray-900 mt-6">3.3 Functionality Cookies</h3>
                <p>
                  These cookies enable the website to provide enhanced functionality and personalization.
                </p>
                
                <h3 className="text-lg font-medium text-gray-900 mt-6">3.4 Targeting Cookies</h3>
                <p>
                  These cookies may be set through our site by our advertising partners to build a profile of your interests.
                </p>

                <div className="overflow-x-auto mt-6">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cookie Name</th>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purpose</th>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-4 text-sm font-medium text-gray-900">auth_token</td>
                        <td className="px-4 py-4 text-sm text-gray-700">Authentication and security</td>
                        <td className="px-4 py-4 text-sm text-gray-700">Session</td>
                        <td className="px-4 py-4 text-sm text-gray-700">Essential</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4 text-sm font-medium text-gray-900">user_prefs</td>
                        <td className="px-4 py-4 text-sm text-gray-700">Stores user preferences</td>
                        <td className="px-4 py-4 text-sm text-gray-700">1 year</td>
                        <td className="px-4 py-4 text-sm text-gray-700">Functional</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4 text-sm font-medium text-gray-900">_ga</td>
                        <td className="px-4 py-4 text-sm text-gray-700">Google Analytics</td>
                        <td className="px-4 py-4 text-sm text-gray-700">2 years</td>
                        <td className="px-4 py-4 text-sm text-gray-700">Analytics</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4 text-sm font-medium text-gray-900">_gid</td>
                        <td className="px-4 py-4 text-sm text-gray-700">Google Analytics</td>
                        <td className="px-4 py-4 text-sm text-gray-700">24 hours</td>
                        <td className="px-4 py-4 text-sm text-gray-700">Analytics</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4 text-sm font-medium text-gray-900">cookie_consent</td>
                        <td className="px-4 py-4 text-sm text-gray-700">Stores cookie consent preferences</td>
                        <td className="px-4 py-4 text-sm text-gray-700">1 year</td>
                        <td className="px-4 py-4 text-sm text-gray-700">Essential</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Managing Cookies */}
            <section id="managing-cookies" className="bg-white rounded-xl p-6 md:p-8 shadow-md border border-gray-100">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-bold mr-3">4</span>
                Managing Cookies
              </h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  Most web browsers allow you to control cookies through their settings preferences. However, 
                  if you limit the ability of websites to set cookies, you may worsen your overall user experience.
                </p>
                
                <h3 className="text-lg font-medium text-gray-900">Browser Controls</h3>
                <p>
                  You can set or amend your web browser controls to accept or refuse cookies. The methods for doing so vary 
                  from browser to browser, and from version to version.
                </p>
                
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mt-4">
                  <h4 className="font-medium text-red-800 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    Important Note
                  </h4>
                  <p className="text-red-700 text-sm mt-2">
                    If you choose to block cookies, you may not be able to access all or parts of our platform, 
                    and some features may not function properly.
                  </p>
                </div>

                <h3 className="text-lg font-medium text-gray-900 mt-6">Cookie Consent Tool</h3>
                <p>
                  When you first visit our platform, we present you with a cookie consent banner that allows you to choose 
                  which categories of cookies you accept, except for essential cookies which are necessary for the platform to function.
                </p>
                
                <h3 className="text-lg font-medium text-gray-900 mt-6">How to Manage Cookies in Popular Browsers</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><a href="https://support.google.com/chrome/answer/95647" className="text-red-600 hover:underline" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
                  <li><a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" className="text-red-600 hover:underline" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
                  <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" className="text-red-600 hover:underline" target="_blank" rel="noopener noreferrer">Safari</a></li>
                  <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" className="text-red-600 hover:underline" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
                </ul>
              </div>
            </section>

            {/* Third-Party Cookies */}
            <section id="third-party-cookies" className="bg-white rounded-xl p-6 md:p-8 shadow-md border border-gray-100">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-bold mr-3">5</span>
                Third-Party Cookies
              </h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  In addition to our own cookies, we may also use various third-party cookies to report usage statistics 
                  of the platform and deliver advertisements on and through the platform.
                </p>
                
                <h3 className="text-lg font-medium text-gray-900">Analytics Services</h3>
                <p>
                  We use Google Analytics to help us understand how our customers use the platform. You can read more about 
                  how Google uses your Personal Information here: 
                  <a href="https://policies.google.com/privacy" className="text-red-600 hover:underline ml-1" target="_blank" rel="noopener noreferrer">
                    https://policies.google.com/privacy
                  </a>.
                </p>
                
                <h3 className="text-lg font-medium text-gray-900 mt-6">Advertising Partners</h3>
                <p>
                  We may work with third-party advertising partners who use cookies and similar technologies to serve ads 
                  that may be relevant to you based on your browsing activities.
                </p>
                
                <h3 className="text-lg font-medium text-gray-900 mt-6">Social Media Cookies</h3>
                <p>
                  Our platform may include social media features, such as the Facebook Like button, that may set cookies 
                  to enable the feature to function properly.
                </p>
              </div>
            </section>

            {/* Updates to Policy */}
            <section id="updates-to-policy" className="bg-white rounded-xl p-6 md:p-8 shadow-md border border-gray-100">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-bold mr-3">6</span>
                Updates to This Policy
              </h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  We may update this Cookie Policy from time to time to reflect changes in technology, legislation, 
                  or our data practices. We will notify you of any material changes by posting the new policy on this page 
                  and updating the "Last updated" date.
                </p>
                <p>
                  We encourage you to review this Cookie Policy periodically to stay informed about our use of cookies 
                  and related technologies.
                </p>
                <p>
                  Changes to this Cookie Policy are effective when they are posted on this page.
                </p>
              </div>
            </section>

            {/* Contact Us */}
            <section id="contact-us" className="bg-white rounded-xl p-6 md:p-8 shadow-md border border-gray-100">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-bold mr-3">7</span>
                Contact Us
              </h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  If you have any questions about our use of cookies or this Cookie Policy, please contact us:
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
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span>By mail: XXXXXXXXXXXX, MA</span>
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