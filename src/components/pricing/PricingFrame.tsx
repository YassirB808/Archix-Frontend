import { useState } from 'react';
import {
  FaUser,
  FaUsers,
  FaSchool,
  FaCheck,
  FaTimes,
  FaQuestionCircle,
  FaCcMastercard,
  FaCcVisa,
  FaCcAmex,
  FaCcPaypal,
  FaCrown
} from 'react-icons/fa';

interface Feature {
  name: string;
  included: boolean;
  tooltip?: string;
}

interface PlanFeatures {
  collaborators: string;
  projects: string;
  compileTimeout?: string;
  compileServers?: string;
  editing: Feature[];
  integrations?: Feature[];
  support?: Feature[];
}

interface Plan {
  name: string;
  price: number;
  period: string;
  description: string;
  features: PlanFeatures;
  originalPrice?: number;
  popular?: boolean;
  cta?: string;
}

export const PricingFrame = () => {
  const [billingPeriod, setBillingPeriod] = useState<'Monthly' | 'Yearly'>('Yearly');
  const [activeTab, setActiveTab] = useState<'Individuals' | 'Groups' | 'Students'>('Individuals');
  const [expandedFeature, setExpandedFeature] = useState<string | null>(null);

  const plans: Record<'Individuals' | 'Groups' | 'Students', Plan[]> = {
    Individuals: [
      {
        name: 'Free',
        price: 0,
        period: 'forever',
        description: 'Perfect for getting started with basic documentation',
        features: {
          collaborators: '1 per project',
          projects: 'Unlimited',
          compileTimeout: 'Basic',
          compileServers: 'Standard',
          editing: [
            { name: 'Ready-to-use templates', included: true },
            { name: 'Real-time track changes', included: false },
            { name: 'Full document history', included: false, tooltip: 'Access to complete version history' },
            { name: 'Advanced reference search', included: false },
            { name: 'Symbol palette', included: false }
          ],
          integrations: [
            { name: 'Git', included: false },
            { name: 'GitHub', included: false },
            { name: 'Dropbox', included: false }
          ],
          support: [
            { name: 'Email support', included: true },
            { name: 'Priority support', included: false }
          ]
        },
        cta: 'Get Started'
      },
      {
        name: 'Standard',
        originalPrice: 252,
        price: billingPeriod === 'Yearly' ? 199 : 20,
        period: billingPeriod === 'Yearly' ? 'per year' : 'per month',
        popular: true,
        description: 'Ideal for professionals and small teams',
        features: {
          collaborators: '10 per project',
          projects: 'Unlimited',
          compileTimeout: 'Extended',
          compileServers: 'Fast',
          editing: [
            { name: 'Ready-to-use templates', included: true },
            { name: 'Real-time track changes', included: true },
            { name: 'Full document history', included: true },
            { name: 'Advanced reference search', included: true },
            { name: 'Symbol palette', included: true }
          ],
          integrations: [
            { name: 'Git', included: true },
            { name: 'GitHub', included: true },
            { name: 'Dropbox', included: true }
          ],
          support: [
            { name: 'Email support', included: true },
            { name: 'Priority support', included: true }
          ]
        },
      },
      {
        name: 'Professional',
        originalPrice: 504,
        price: billingPeriod === 'Yearly' ? 399 : 45,
        period: billingPeriod === 'Yearly' ? 'per year' : 'per month',
        description: 'For enterprise-grade documentation needs',
        features: {
          collaborators: 'Unlimited',
          projects: 'Unlimited',
          compileTimeout: 'Unlimited',
          compileServers: 'Fastest',
          editing: [
            { name: 'Ready-to-use templates', included: true },
            { name: 'Real-time track changes', included: true },
            { name: 'Full document history', included: true },
            { name: 'Advanced reference search', included: true },
            { name: 'Symbol palette', included: true }
          ],
          integrations: [
            { name: 'Git', included: true },
            { name: 'GitHub', included: true },
            { name: 'Dropbox', included: true },
            { name: 'Zotero', included: true },
            { name: 'Mendeley', included: true }
          ],
          support: [
            { name: '24/7 priority support', included: true },
            { name: 'Dedicated account manager', included: true }
          ]
        },
        cta: 'Contact Sales'
      }
    ],
    Groups: [
      {
        name: 'Team Starter',
        price: billingPeriod === 'Yearly' ? 299 : 30,
        period: billingPeriod === 'Yearly' ? 'per year' : 'per month',
        description: 'For small teams',
        features: {
          collaborators: 'Up to 5',
          projects: 'Unlimited',
          compileTimeout: 'Extended',
          compileServers: 'Fast',
          editing: [
            { name: 'Team templates', included: true },
            { name: 'Real-time track changes', included: true },
            { name: 'Version history', included: true }
          ],
          integrations: [
            { name: 'Git', included: true },
            { name: 'GitHub', included: true }
          ],
          support: [
            { name: 'Email support', included: true }
          ]
        },
        cta: 'Choose Plan'
      },
      {
        name: 'Team Advanced',
        price: billingPeriod === 'Yearly' ? 499 : 50,
        period: billingPeriod === 'Yearly' ? 'per year' : 'per month',
        popular: true,
        description: 'For growing teams',
        features: {
          collaborators: 'Up to 20',
          projects: 'Unlimited',
          compileTimeout: 'Unlimited',
          compileServers: 'Fastest',
          editing: [
            { name: 'Team templates', included: true },
            { name: 'Real-time track changes', included: true },
            { name: 'Version history', included: true }
          ],
          integrations: [
            { name: 'Git', included: true },
            { name: 'GitHub', included: true },
            { name: 'Dropbox', included: true }
          ],
          support: [
            { name: 'Priority support', included: true }
          ]
        },
        cta: 'Choose Plan'
      }
    ],
    Students: [
      {
        name: 'Student',
        price: billingPeriod === 'Yearly' ? 49 : 5,
        period: billingPeriod === 'Yearly' ? 'per year' : 'per month',
        description: 'Special pricing for students',
        features: {
          collaborators: '1 per project',
          projects: 'Unlimited',
          compileTimeout: 'Basic',
          compileServers: 'Standard',
          editing: [
            { name: 'Student templates', included: true },
            { name: 'Track changes', included: true },
            { name: 'Basic version history', included: true }
          ],
          integrations: [
            { name: 'Git', included: false }
          ],
          support: [
            { name: 'Email support', included: true }
          ]
        },
        cta: 'Get Student Plan'
      }
    ]
  };

  const currentPlans = plans[activeTab] || [];

  const toggleFeature = (featureName: string) => {
    setExpandedFeature(expandedFeature === featureName ? null : featureName);
  };

  const getFeatureIncluded = (plan: Plan, featureName: string) => {
    const editingFeature = plan.features.editing.find(f => f.name === featureName);
    if (editingFeature) return editingFeature.included;
    const integrationFeature = plan.features.integrations?.find(f => f.name === featureName);
    if (integrationFeature) return integrationFeature.included;
    const supportFeature = plan.features.support?.find(f => f.name === featureName);
    if (supportFeature) return supportFeature.included;
    return false;
  };

  const featureCategories = [
    { name: 'Editing & Collaboration', features: currentPlans[0]?.features.editing || [] },
    { name: 'Integrations', features: currentPlans[0]?.features.integrations || [] },
    { name: 'Support', features: currentPlans[0]?.features.support || [] }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 bg-gradient-to-b from-white to-gray-50 font-sans mt-1">
      
      {/* Hero */}
      <div className="text-center mb-20">
        <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-lg">
          <FaCrown className="mr-2" /> Premium Features Available
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 drop-shadow-md">Flexible Plans for Every Need</h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          Whether you're an individual, team, or student, we have the perfect plan to match your documentation needs.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mb-16">
        <div className="inline-flex bg-white rounded-xl p-1 shadow-inner border border-gray-200">
          {(['Individuals', 'Groups', 'Students'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-lg flex items-center gap-2 font-medium transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-corporate-red to-red-600 text-white shadow-md'
                  : 'text-gray-800 hover:text-corporate-red hover:bg-gray-100'
              }`}
            >
              {tab === 'Individuals' && <FaUser />}
              {tab === 'Groups' && <FaUsers />}
              {tab === 'Students' && <FaSchool />}
              {tab}
              {tab === 'Groups' && (
                <span className="text-xs bg-yellow-200 text-gray-800 px-2 py-0.5 rounded-full font-medium">
                  Save 10%+
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Billing Toggle */}
      <div className="flex justify-center mb-20">
        <div className="inline-flex items-center gap-4 bg-white p-2 rounded-xl shadow-md border border-gray-200">
          <span className="text-gray-700 font-medium">Billing:</span>
          <div className="inline-flex bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setBillingPeriod('Yearly')}
              className={`px-6 py-2 rounded-lg transition-all duration-300 font-semibold ${
                billingPeriod === 'Yearly'
                  ? 'bg-gradient-to-r from-corporate-red to-red-600 text-white shadow-md'
                  : 'text-gray-800 hover:bg-gray-200'
              }`}
            >
              Yearly <span className="text-yellow-400 ml-1">(Save 20%)</span>
            </button>
            <button
              onClick={() => setBillingPeriod('Monthly')}
              className={`px-6 py-2 rounded-lg transition-all duration-300 font-semibold ${
                billingPeriod === 'Monthly'
                  ? 'bg-gradient-to-r from-corporate-red to-red-600 text-white shadow-md'
                  : 'text-gray-800 hover:bg-gray-200'
              }`}
            >
              Monthly
            </button>
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24">
        {currentPlans.map((plan, index) => (
          <div
            key={index}
            className={`relative rounded-2xl p-8 transition-transform duration-300 hover:scale-[1.03] ${
              plan.popular
                ? 'bg-gradient-to-b from-white to-gray-50 shadow-2xl border-2 border-corporate-red'
                : 'bg-white shadow-lg border border-gray-200'
            }`}
          >
            {plan.popular && (
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-corporate-red text-white text-xs font-bold px-5 py-2 rounded-full shadow-lg">
                Most Popular
              </div>
            )}
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h2>
              <p className="text-gray-600">{plan.description}</p>
            </div>
            <div className="mb-6">
              <div className="flex items-end gap-2">
                <span className="text-4xl font-extrabold text-gray-900">${plan.price}</span>
                <span className="text-gray-500 mb-1">/{plan.period}</span>
              </div>
              {plan.originalPrice && (
                <div className="text-sm text-green-500 mt-1">
                  <span className="line-through text-gray-400">${plan.originalPrice}</span>
                  <span className="ml-2 font-medium">
                    Save {Math.round(100 - (plan.price / plan.originalPrice) * 100)}%
                  </span>
                </div>
              )}
            </div>
            <button
              className={`w-full py-3 rounded-xl font-semibold mb-8 transition-all duration-300 flex justify-center items-center gap-2 ${
                plan.popular
                  ? 'bg-gradient-to-r from-corporate-red to-red-600 text-white shadow-md hover:brightness-110'
                  : plan.price === 0
                    ? 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                    : 'bg-gray-900 text-white hover:bg-gray-800'
              }`}
            >
              {plan.cta || 'Choose Plan'}
            </button>
            <div className="space-y-3 border-t border-gray-200 pt-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-700 font-medium">Collaborators</span>
                <span className="font-semibold text-gray-900">{plan.features.collaborators}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700 font-medium">Projects</span>
                <span className="font-semibold text-gray-900">{plan.features.projects}</span>
              </div>
              {plan.features.compileTimeout && (
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Compile Timeout</span>
                  <span className="font-semibold text-gray-900">{plan.features.compileTimeout}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Feature Comparison Table */}
      {currentPlans.length > 0 && (
        <div className="mb-20 bg-white rounded-2xl shadow-md border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900">Detailed Feature Comparison</h2>
          </div>
          {featureCategories.map(category => (
            <div key={category.name} className="border-b last:border-b-0">
              <div className="p-4 bg-gray-50">
                <h3 className="font-semibold text-gray-900">{category.name}</h3>
              </div>
              {category.features.map(feature => (
                <div
                  key={feature.name}
                  className="grid grid-cols-4 p-4 hover:bg-gray-100 cursor-pointer transition-colors duration-200"
                  onClick={() => toggleFeature(feature.name)}
                >
                  <div className="col-span-1 flex items-center gap-2">
                    <span className="font-medium text-gray-700">{feature.name}</span>
                    {feature.tooltip && <FaQuestionCircle className="text-gray-400" />}
                  </div>
                  {currentPlans.map(plan => (
                    <div key={`${plan.name}-${feature.name}`} className="flex justify-center">
                      {getFeatureIncluded(plan, feature.name) ? (
                        <FaCheck className="text-green-500 text-xl" />
                      ) : (
                        <FaTimes className="text-gray-300 text-xl" />
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}

      {/* Payment Methods */}
      <div className="mb-20 text-center">
        <p className="text-gray-600 mb-4">We accept all major payment methods</p>
        <div className="flex justify-center gap-8 text-4xl text-gray-400">
          <FaCcMastercard className="hover:text-red-500 transition-colors duration-200" />
          <FaCcVisa className="hover:text-blue-500 transition-colors duration-200" />
          <FaCcAmex className="hover:text-blue-400 transition-colors duration-200" />
          <FaCcPaypal className="hover:text-blue-700 transition-colors duration-200" />
        </div>
        <p className="text-gray-400 text-sm mt-4">
          All prices in USD. VAT may apply depending on your location.
        </p>
      </div>
    </div>
  );
};
