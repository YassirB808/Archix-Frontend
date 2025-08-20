// src/components/app/Welcome.tsx
import { ArrowRightIcon, ShieldCheckIcon, UsersIcon } from '@heroicons/react/24/outline';

const RedLightningIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-red-600 mx-auto" viewBox="0 0 24 24" fill="currentColor">
    <path d="M13 2L3 14h7v8l10-12h-7z" />
  </svg>
);

export const Welcome = () => {
  return (
    <div className="relative flex justify-center bg-gradient-to-br from-white to-gray-50 overflow-hidden px-4 py-12">

      {/* Decorative floating shapes */}
      <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-red-100 opacity-20 blur-3xl pointer-events-none animate-float"></div>
      <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-blue-100 opacity-20 blur-3xl pointer-events-none animate-float animation-delay-500"></div>

      {/* Main content */}
      <div className="text-center max-w-3xl w-full space-y-8">

        {/* Welcome Header */}
        <div className="space-y-6 animate-fadeInDown">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-50 text-red-600 text-sm font-medium mb-4">
            <ShieldCheckIcon className="w-5 h-5 mr-2" />
            Enterprise-grade security
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            Transform Your <span className="text-red-600">Document</span> Workflow
          </h1>
          <p className="text-gray-600 text-lg md:text-xl">
            Archix Docs provides the most secure platform for document management — helping teams work smarter, collaborate effortlessly, and stay organized.
          </p>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 animate-fadeIn">
          {[
            { icon: <RedLightningIcon />, title: "Blazing Fast", description: "Instant search and document retrieval" },
            { icon: <ShieldCheckIcon className="w-8 h-8 text-red-600 mx-auto" />, title: "Secure", description: "End-to-end encryption for all documents" },
            { icon: <UsersIcon className="w-8 h-8 text-red-600 mx-auto" />, title: "Collaborative", description: "Real-time editing and commenting" }
          ].map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-500 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fadeInUp">
          <a
            href="/login"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full text-white bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Log In
            <ArrowRightIcon className="w-5 h-5 ml-2" />
          </a>
          <a
            href="/register"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full text-gray-700 bg-white hover:bg-gray-50 border border-gray-200 transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-1 animate-fadeInUp delay-100"
          >
            Create Account
          </a>
        </div>

      </div>
    </div>
  );
};
