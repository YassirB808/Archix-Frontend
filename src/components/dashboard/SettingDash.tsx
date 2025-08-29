import { useState } from "react";
import { 
  FaCog, 
  FaUser, 
  FaBell, 
  FaShieldAlt, 
  FaPalette, 
  FaLanguage, 
  FaMoon, 
  FaSun,
  FaSave,
  FaEye,
  FaEyeSlash,
  FaCheckCircle,
  FaCreditCard,
  FaCrown,
  FaSync
} from "react-icons/fa";

export const SettingDash = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [settings, setSettings] = useState({
    profile: {
      username: "alexjohnson",
      email: "alex.johnson@example.com",
      firstName: "Alex",
      lastName: "Johnson",
      bio: "Product designer with 5+ years of experience",
    },
    notifications: {
      emailNotifications: true,
      pushNotifications: false,
      marketingEmails: false,
      securityAlerts: true,
      newsletter: true,
    },
    privacy: {
      profileVisibility: "public",
      twoFactorAuth: false,
      dataSharing: false,
      searchVisibility: true,
    },
    appearance: {
      theme: "light",
      fontSize: "medium",
      density: "comfortable",
      reduceAnimations: false,
    },
    language: {
      language: "english",
      dateFormat: "MM/DD/YYYY",
      timeFormat: "12h",
    },
    subscription: {
      plan: "Premium",
      status: "active",
      renewalDate: "2024-12-15",
      storage: "50 GB",
      members: "10 members",
      price: "$19.99/month"
    }
  });

  const [showPassword, setShowPassword] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleInputChange = (category: string, field: string, value: any) => {
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category as keyof typeof prev],
        [field]: value
      }
    }));
  };

  const handleSave = () => {
    setSaved(true);
    // Simulate saving settings
    setTimeout(() => setSaved(false), 3000);
  };

  const tabs = [
    { id: "profile", label: "Profile", icon: <FaUser /> },
    { id: "notifications", label: "Notifications", icon: <FaBell /> },
    { id: "privacy", label: "Privacy & Security", icon: <FaShieldAlt /> },
    { id: "appearance", label: "Appearance", icon: <FaPalette /> },
    { id: "language", label: "Language", icon: <FaLanguage /> },
    { id: "subscription", label: "Subscription", icon: <FaCrown /> },
  ];

  const ToggleSwitch = ({ 
    enabled, 
    setEnabled 
  }: { 
    enabled: boolean; 
    setEnabled: (enabled: boolean) => void; 
  }) => (
    <button
      type="button"
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${enabled ? 'bg-corporate-red' : 'bg-gray-300'}`}
      onClick={() => setEnabled(!enabled)}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${enabled ? 'translate-x-6' : 'translate-x-1'}`}
      />
    </button>
  );

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between pb-6 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-red-100 rounded-lg">
            <FaCog className="text-corporate-red text-xl" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Settings</h2>
            <p className="text-gray-500 text-sm">Manage your account preferences</p>
          </div>
        </div>
        <button 
          onClick={handleSave}
          className="flex items-center gap-2 px-4 py-2 bg-corporate-red text-white font-medium rounded-xl hover:bg-red-700 transition-colors"
        >
          {saved ? <FaCheckCircle /> : <FaSave />}
          {saved ? "Saved!" : "Save Changes"}
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 mt-6 flex-grow">
        {/* Sidebar Navigation */}
        <div className="lg:w-1/4">
          <div className="flex lg:flex-col gap-1 overflow-x-auto pb-2 lg:pb-0">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left whitespace-nowrap transition-colors ${activeTab === tab.id ? 'bg-red-100 text-corporate-red' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                {tab.icon}
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Settings Content */}
        <div className="lg:w-3/4 bg-gray-50 rounded-2xl p-6 flex-grow">
          {/* Profile Settings */}
          {activeTab === "profile" && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900">Profile Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input
                    type="text"
                    value={settings.profile.firstName}
                    onChange={(e) => handleInputChange("profile", "firstName", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-corporate-red focus:border-corporate-red outline-none transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input
                    type="text"
                    value={settings.profile.lastName}
                    onChange={(e) => handleInputChange("profile", "lastName", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-corporate-red focus:border-corporate-red outline-none transition-colors"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
                <input
                  type="text"
                  value={settings.profile.username}
                  onChange={(e) => handleInputChange("profile", "username", e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-corporate-red focus:border-corporate-red outline-none transition-colors"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  value={settings.profile.email}
                  onChange={(e) => handleInputChange("profile", "email", e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-corporate-red focus:border-corporate-red outline-none transition-colors"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                <textarea
                  rows={4}
                  value={settings.profile.bio}
                  onChange={(e) => handleInputChange("profile", "bio", e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-corporate-red focus:border-corporate-red outline-none transition-colors"
                />
              </div>
              
              <div className="pt-4 border-t border-gray-200">
                <h4 className="text-lg font-medium text-gray-900 mb-4">Change Password</h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-corporate-red focus:border-corporate-red outline-none transition-colors pr-12"
                      />
                      <button 
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                      >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </button>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                    <input
                      type="password"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-corporate-red focus:border-corporate-red outline-none transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
                    <input
                      type="password"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-corporate-red focus:border-corporate-red outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Notification Settings */}
          {activeTab === "notifications" && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900">Notification Preferences</h3>
              
              <div className="space-y-4">
                {Object.entries(settings.notifications).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between p-4 rounded-xl border border-gray-200 bg-white">
                    <div>
                      <h4 className="font-medium text-gray-900 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                      </h4>
                      <p className="text-sm text-gray-500 mt-1">
                        {key === 'emailNotifications' && 'Receive notifications via email'}
                        {key === 'pushNotifications' && 'Get push notifications on your device'}
                        {key === 'marketingEmails' && 'Receive emails about new features and promotions'}
                        {key === 'securityAlerts' && 'Get notified about important security events'}
                        {key === 'newsletter' && 'Receive our monthly newsletter'}
                      </p>
                    </div>
                    <ToggleSwitch 
                      enabled={value as boolean} 
                      setEnabled={(enabled) => handleInputChange("notifications", key, enabled)} 
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Privacy & Security Settings */}
          {activeTab === "privacy" && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900">Privacy & Security</h3>
              
              <div className="space-y-4">
                <div className="p-4 rounded-xl border border-gray-200 bg-white">
                  <h4 className="font-medium text-gray-900 mb-2">Profile Visibility</h4>
                  <p className="text-sm text-gray-500 mb-4">Who can see your profile information</p>
                  <div className="flex gap-4">
                    {['public', 'private', 'contacts'].map(option => (
                      <button
                        key={option}
                        onClick={() => handleInputChange("privacy", "profileVisibility", option)}
                        className={`px-4 py-2 rounded-lg capitalize ${settings.privacy.profileVisibility === option ? 'bg-red-100 text-corporate-red' : 'bg-gray-100 text-gray-600'}`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
                
                {Object.entries(settings.privacy)
                  .filter(([key]) => key !== 'profileVisibility')
                  .map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between p-4 rounded-xl border border-gray-200 bg-white">
                    <div>
                      <h4 className="font-medium text-gray-900 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                      </h4>
                      <p className="text-sm text-gray-500 mt-1">
                        {key === 'twoFactorAuth' && 'Add an extra layer of security to your account'}
                        {key === 'dataSharing' && 'Allow us to use your data to improve our services'}
                        {key === 'searchVisibility' && 'Allow your profile to appear in search results'}
                      </p>
                    </div>
                    <ToggleSwitch 
                      enabled={value as boolean} 
                      setEnabled={(enabled) => handleInputChange("privacy", key, enabled)} 
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Appearance Settings */}
          {activeTab === "appearance" && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900">Appearance</h3>
              
              <div className="space-y-4">
                <div className="p-4 rounded-xl border border-gray-200 bg-white">
                  <h4 className="font-medium text-gray-900 mb-2">Theme</h4>
                  <div className="flex gap-4 mt-3">
                    <button
                      onClick={() => handleInputChange("appearance", "theme", "light")}
                      className={`flex items-center gap-2 px-4 py-3 rounded-lg border ${settings.appearance.theme === "light" ? 'border-corporate-red bg-red-50 text-corporate-red' : 'border-gray-200 text-gray-600'}`}
                    >
                      <FaSun />
                      Light
                    </button>
                    <button
                      onClick={() => handleInputChange("appearance", "theme", "dark")}
                      className={`flex items-center gap-2 px-4 py-3 rounded-lg border ${settings.appearance.theme === "dark" ? 'border-corporate-red bg-red-50 text-corporate-red' : 'border-gray-200 text-gray-600'}`}
                    >
                      <FaMoon />
                      Dark
                    </button>
                  </div>
                </div>
                
                <div className="p-4 rounded-xl border border-gray-200 bg-white">
                  <h4 className="font-medium text-gray-900 mb-2">Font Size</h4>
                  <div className="flex gap-4 mt-3">
                    {['small', 'medium', 'large'].map(size => (
                      <button
                        key={size}
                        onClick={() => handleInputChange("appearance", "fontSize", size)}
                        className={`px-4 py-2 rounded-lg capitalize ${settings.appearance.fontSize === size ? 'bg-red-100 text-corporate-red' : 'bg-gray-100 text-gray-600'}`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="p-4 rounded-xl border border-gray-200 bg-white">
                  <h4 className="font-medium text-gray-900 mb-2">Density</h4>
                  <div className="flex gap-4 mt-3">
                    {['compact', 'comfortable', 'spacious'].map(density => (
                      <button
                        key={density}
                        onClick={() => handleInputChange("appearance", "density", density)}
                        className={`px-4 py-2 rounded-lg capitalize ${settings.appearance.density === density ? 'bg-red-100 text-corporate-red' : 'bg-gray-100 text-gray-600'}`}
                      >
                        {density}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 rounded-xl border border-gray-200 bg-white">
                  <div>
                    <h4 className="font-medium text-gray-900">Reduce Animations</h4>
                    <p className="text-sm text-gray-500 mt-1">Minimize motion and animations throughout the application</p>
                  </div>
                  <ToggleSwitch 
                    enabled={settings.appearance.reduceAnimations} 
                    setEnabled={(enabled) => handleInputChange("appearance", "reduceAnimations", enabled)} 
                  />
                </div>
              </div>
            </div>
          )}

          {/* Language Settings */}
          {activeTab === "language" && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900">Language & Region</h3>
              
              <div className="space-y-4">
                <div className="p-4 rounded-xl border border-gray-200 bg-white">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
                  <select
                    value={settings.language.language}
                    onChange={(e) => handleInputChange("language", "language", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-corporate-red focus:border-corporate-red outline-none transition-colors"
                  >
                    <option value="english">English</option>
                    <option value="spanish">Spanish</option>
                    <option value="french">French</option>
                    <option value="german">German</option>
                    <option value="japanese">Japanese</option>
                  </select>
                </div>
                
                <div className="p-4 rounded-xl border border-gray-200 bg-white">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date Format</label>
                  <select
                    value={settings.language.dateFormat}
                    onChange={(e) => handleInputChange("language", "dateFormat", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-corporate-red focus:border-corporate-red outline-none transition-colors"
                  >
                    <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                    <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                    <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                  </select>
                </div>
                
                <div className="p-4 rounded-xl border border-gray-200 bg-white">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Time Format</label>
                  <div className="flex gap-4 mt-3">
                    <button
                      onClick={() => handleInputChange("language", "timeFormat", "12h")}
                      className={`px-4 py-2 rounded-lg ${settings.language.timeFormat === "12h" ? 'bg-red-100 text-corporate-red' : 'bg-gray-100 text-gray-600'}`}
                    >
                      12-hour
                    </button>
                    <button
                      onClick={() => handleInputChange("language", "timeFormat", "24h")}
                      className={`px-4 py-2 rounded-lg ${settings.language.timeFormat === "24h" ? 'bg-red-100 text-corporate-red' : 'bg-gray-100 text-gray-600'}`}
                    >
                      24-hour
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Subscription Settings */}
          {activeTab === "subscription" && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900">Subscription Management</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Current Plan Card */}
                <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <FaCrown className="text-yellow-300 text-xl" />
                      <h4 className="font-bold text-lg">{settings.subscription.plan}</h4>
                    </div>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                      {settings.subscription.status}
                    </span>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Storage</span>
                      <span className="font-semibold">{settings.subscription.storage}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Team Members</span>
                      <span className="font-semibold">{settings.subscription.members}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Price</span>
                      <span className="font-semibold">{settings.subscription.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Renewal Date</span>
                      <span className="font-semibold">
                        {new Date(settings.subscription.renewalDate).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Payment Methods */}
                <div className="bg-white rounded-2xl border border-gray-200 p-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Payment Methods</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <FaCreditCard className="text-gray-600" />
                        <div>
                          <p className="font-medium text-sm">Visa ending in 4242</p>
                          <p className="text-xs text-gray-500">Expires 12/2024</p>
                        </div>
                      </div>
                      <button className="text-corporate-red hover:text-red-700 text-sm font-medium">
                        Edit
                      </button>
                    </div>
                    
                    <button className="w-full flex items-center justify-center gap-2 py-3 border border-dashed border-gray-300 rounded-lg text-gray-500 hover:text-corporate-red hover:border-corporate-red transition-colors">
                      <FaCreditCard />
                      Add Payment Method
                    </button>
                  </div>
                </div>
              </div>

              {/* Subscription Actions */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <button className="flex items-center justify-center gap-2 px-4 py-3 bg-corporate-red text-white rounded-xl hover:bg-red-700 transition-colors font-medium">
                  <FaSync />
                  Change Plan
                </button>
                <button className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-medium">
                  <FaCreditCard />
                  Update Payment
                </button>
                <button className="flex items-center justify-center gap-2 px-4 py-3 border border-red-300 text-corporate-red rounded-xl hover:bg-red-50 transition-colors font-medium">
                  Cancel Subscription
                </button>
              </div>

              {/* Billing History */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-4">Billing History</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div>
                      <p className="font-medium text-sm">Premium Plan - December 2023</p>
                      <p className="text-xs text-gray-500">December 15, 2023</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-sm">$19.99</p>
                      <p className="text-xs text-green-600">Paid</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div>
                      <p className="font-medium text-sm">Premium Plan - November 2023</p>
                      <p className="text-xs text-gray-500">November 15, 2023</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-sm">$19.99</p>
                      <p className="text-xs text-green-600">Paid</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};