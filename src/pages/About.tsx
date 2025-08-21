// src/pages/AboutUsPage.tsx
import { AppHeader } from '../components/app/AppHeader';
import { AppFooter } from '../components/app/AppFooter';
import { useState, useEffect } from 'react';

export const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-cream-50 to-cream-100">
      {/* Header fixed at top */}
      <AppHeader className="fixed top-0 left-0 right-0 w-full z-50" />

      {/* Main content */}
      <main className="flex-grow pb-14 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Hero Section */}
          <section className={`text-center space-y-6 py-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-red-50 mb-6 shadow-lg transform transition-transform ">
              <svg className="w-12 h-12 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 bg-gradient-to-r from-gray-900 to-red-700 bg-clip-text text-transparent">
              About Archix
            </h1>
            <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Archix is a secure and intelligent document management platform that empowers organizations to handle their documents efficiently and safely. 
              Combining automation, analytics, and enterprise-grade security, we streamline document workflows while enhancing collaboration.
            </p>
            
          </section>

          {/* Mission Section */}
          <section className="space-y-8 bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 inline-block pb-2 border-b-4 border-red-600">
                Our Mission
              </h2>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed text-center max-w-4xl mx-auto">
              Our goal is to eliminate paper-based processes and provide a centralized, secure platform for all document needs. 
              We empower teams with tools that enhance collaboration and productivity while maintaining the highest standards of security.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
              {[
                {
                  title: "Security First",
                  description: "Enterprise-grade security with role-based access control and comprehensive audit trails.",
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ),
                },
                {
                  title: "Efficiency",
                  description: "Automate repetitive tasks and streamline document workflows to save time and reduce errors.",
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                },
                {
                  title: "Collaboration",
                  description: "Enable real-time collaboration with version control and commenting features.",
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  ),
                },
              ].map((item, index) => (
                <div 
                  key={item.title} 
                  className="text-center p-6 bg-cream-50 rounded-xl border border-cream-200 transition-all duration-300 hover:shadow-md hover:border-red-200 hover:translate-y-1"
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-600 mb-4 shadow-inner">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Features Section */}
          <section className="space-y-10 py-12">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 inline-block pb-2 border-b-4 border-red-600">
                Why Choose Archix?
              </h2>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                Discover the features that make Archix the preferred choice for document management
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Intelligent Document Management",
                  description: "Advanced OCR, automatic classification, and metadata extraction make document organization effortless. Powerful search capabilities help you find what you need quickly.",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                    </svg>
                  ),
                },
                {
                  title: "Workflow Automation",
                  description: "Design custom approval workflows with our intuitive editor. Automate repetitive tasks and ensure documents follow the right process every time.",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
                    </svg>
                  ),
                },
                {
                  title: "Enterprise Security",
                  description: "Role-based access control, audit trails, and compliance with GDPR and ISO 27001 standards. Your documents are protected with top-level security.",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                    </svg>
                  ),
                },
                {
                  title: "Advanced Analytics",
                  description: "Gain insights into your document processes with detailed analytics and reporting. Identify bottlenecks and optimize workflows effectively.",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                    </svg>
                  ),
                },
              ].map((item, index) => (
                <div 
                  key={item.title}  
                  className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg hover:border-red-200 group"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start mb-4">
                    <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-100 text-red-600 mr-4 group-hover:bg-red-600 group-hover:text-white transition-colors">
                      {item.icon}
                    </span>
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-red-700 transition-colors">{item.title}</h3>
                  </div>
                  <p className="text-gray-700 ml-16">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Company Story Section */}
          <section className="space-y-8 bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100 overflow-hidden">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 inline-block pb-2 border-b-4 border-red-600">
                Our Story
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Founded in 2025, Archix was created to solve the document management challenges faced by modern organizations. 
                  Our platform combines AI-powered document processing with enterprise-grade security to transform how organizations work with their documents.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  Today, Archix serves businesses across industries, helping them achieve digital transformation goals while maintaining compliance and security.
                </p>
                
                <div className="bg-cream-50 p-6 rounded-xl border border-cream-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="w-3 h-3 bg-red-600 rounded-full mr-3"></span>
                    Our Vision
                  </h3>
                  <p className="text-gray-700">
                    To become the leading platform for intelligent document management, enabling organizations to work smarter, 
                    collaborate seamlessly, and maintain complete control over critical documents.
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-red-600 to-red-800 p-1 rounded-2xl shadow-xl">
                <div className="bg-white p-8 rounded-xl h-full">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Our Values</h3>
                  <ul className="space-y-4">
                    {[
                      { title: "Innovation", description: "Continuously improving our technology to stay ahead" },
                      { title: "Integrity", description: "Building trust through transparency and security" },
                      { title: "Customer Success", description: "Ensuring our clients achieve their goals" },
                      { title: "Excellence", description: "Striving for the highest quality in everything we do" }
                    ].map((value) => (
                      <li key={value.title} className="flex items-start">
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-100 text-red-600 text-sm font-bold mr-3 mt-1">✓</span>
                        <div>
                          <h4 className="font-semibold text-gray-900">{value.title}</h4>
                          <p className="text-gray-600 text-sm">{value.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>

      {/* Footer */}
      <AppFooter className="w-full" />
    </div>
  );
};