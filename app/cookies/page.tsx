"use client";

import React, { useState, useEffect } from 'react';
import Image from "next/image";
import BlurredShape from "@/public/images/blurred-shape.svg";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

export default function CookieManager() {
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true, // Always true, cannot be disabled
    analytics: false,
    marketing: false,
    functional: false
  });

  const [savedMessage, setSavedMessage] = useState('');

  useEffect(() => {
    // Load saved preferences from localStorage
    const saved = localStorage.getItem('cookiePreferences');
    if (saved) {
      try {
        const parsedPreferences = JSON.parse(saved);
        setPreferences({
          ...parsedPreferences,
          essential: true // Essential cookies always enabled
        });
      } catch (error) {
        console.error('Error loading cookie preferences:', error);
      }
    }
  }, []);

  const handlePreferenceChange = (type: keyof CookiePreferences, value: boolean) => {
    if (type === 'essential') return; // Essential cookies cannot be disabled
    
    setPreferences(prev => ({
      ...prev,
      [type]: value
    }));
  };

  const savePreferences = () => {
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
    setSavedMessage('Your cookie preferences have been saved successfully!');
    
    // Clear message after 3 seconds
    setTimeout(() => {
      setSavedMessage('');
    }, 3000);

    // Apply preferences (in a real implementation, you would update your analytics/marketing scripts)
    applyCookiePreferences(preferences);
  };

  const acceptAll = () => {
    const allAccepted = {
      essential: true,
      analytics: true,
      marketing: true,
      functional: true
    };
    setPreferences(allAccepted);
    localStorage.setItem('cookiePreferences', JSON.stringify(allAccepted));
    setSavedMessage('All cookies accepted!');
    setTimeout(() => setSavedMessage(''), 3000);
    applyCookiePreferences(allAccepted);
  };

  const rejectAll = () => {
    const onlyEssential = {
      essential: true,
      analytics: false,
      marketing: false,
      functional: false
    };
    setPreferences(onlyEssential);
    localStorage.setItem('cookiePreferences', JSON.stringify(onlyEssential));
    setSavedMessage('Only essential cookies are enabled.');
    setTimeout(() => setSavedMessage(''), 3000);
    applyCookiePreferences(onlyEssential);
  };

  const applyCookiePreferences = (prefs: CookiePreferences) => {
    // In a real implementation, you would enable/disable analytics and marketing scripts here
    if (typeof window !== 'undefined') {
      // Example: Google Analytics
      if (prefs.analytics) {
        console.log('Analytics cookies enabled');
        // Enable GA4 or other analytics
      } else {
        console.log('Analytics cookies disabled');
        // Disable analytics tracking
      }

      // Example: Marketing cookies
      if (prefs.marketing) {
        console.log('Marketing cookies enabled');
        // Enable marketing pixels, social media widgets
      } else {
        console.log('Marketing cookies disabled');
        // Disable marketing tracking
      }

      // Example: Functional cookies
      if (prefs.functional) {
        console.log('Functional cookies enabled');
        // Enable chat widgets, preferences storage
      } else {
        console.log('Functional cookies disabled');
        // Disable non-essential functional features
      }
    }
  };

  return (
    <main className="relative min-h-screen">
      <section className="relative flex items-center min-h-screen">
        <div
          className="absolute left-1/2 top-0 -translate-x-1/2"
          aria-hidden="true"
          style={{ zIndex: 0 }}
        >
          <Image
            className="max-w-none"
            src={BlurredShapeGray}
            width={760}
            height={668}
            alt="Blurred shape"
          />
        </div>
        <div
          className="absolute top-30 right-1/2 -translate-x-1/2 opacity-50"
          aria-hidden="true"
          style={{ zIndex: -1 }}
        >
          <Image
            className="max-w-none"
            src={BlurredShape}
            width={760}
            height={668}
            alt="Blurred shape"
          />
        </div>

        <div className="mx-auto max-w-4xl flex-1 text-left relative z-10">
        <div className="
  border-t py-12
  [border-image:linear-gradient(to_right,transparent,theme(colors.blue.900/.25),transparent)1]
  dark:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.400/.25),transparent)1]
  md:py-20
">
            <div className="mx-auto max-w-4xl">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
                  <span className="inline-flex bg-gradient-to-r from-blue-500 to-indigo-200 bg-clip-text text-transparent">
                    Privacy
                  </span>
                </div>
                <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-8 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
                  Cookie Manager
                </h1>
                <p className="text-lg text-indigo-200/65">
                  Manage your cookie preferences and control how we use cookies on our website.
                </p>
              </div>

              {savedMessage && (
                <div className="mb-8 p-4 bg-green-600/20 border border-green-500/30 rounded-lg text-center">
                  <p className="text-green-400">{savedMessage}</p>
                </div>
              )}

              <div className="space-y-8 text-indigo-200/80">
                
                <section>
                  <h2 className="text-2xl font-semibold text-gray-200 mb-4">What Are Cookies?</h2>
                  <p className="mb-4">
                    Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and analyzing how you use our site.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-200 mb-6">Cookie Categories</h2>
                  
                  <div className="space-y-6">
                    {/* Essential Cookies */}
                    <div className="bg-gray-800/40 rounded-lg p-6 border border-gray-700/50">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-200">Essential Cookies</h3>
                          <p className="text-sm text-indigo-200/60">Always Active</p>
                        </div>
                        <div className="relative">
                          <input
                            type="checkbox"
                            checked={preferences.essential}
                            disabled
                            className="sr-only"
                          />
                          <div className="w-14 h-8 bg-blue-600 rounded-full flex items-center justify-end px-1 cursor-not-allowed opacity-75">
                            <div className="w-6 h-6 bg-white rounded-full"></div>
                          </div>
                        </div>
                      </div>
                      <p className="text-indigo-200/70">
                        These cookies are necessary for the website to function and cannot be switched off. They are usually set in response to actions made by you which amount to a request for services, such as setting your privacy preferences or filling in forms.
                      </p>
                    </div>

                    {/* Analytics Cookies */}
                    <div className="bg-gray-800/40 rounded-lg p-6 border border-gray-700/50">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-200">Analytics Cookies</h3>
                          <p className="text-sm text-indigo-200/60">Help us improve our website</p>
                        </div>
                        <div className="relative">
                          <input
                            type="checkbox"
                            checked={preferences.analytics}
                            onChange={(e) => handlePreferenceChange('analytics', e.target.checked)}
                            className="sr-only"
                          />
                          <div 
                            className={`w-14 h-8 rounded-full flex items-center px-1 cursor-pointer transition-colors ${
                              preferences.analytics ? 'bg-blue-600 justify-end' : 'bg-gray-600 justify-start'
                            }`}
                            onClick={() => handlePreferenceChange('analytics', !preferences.analytics)}
                          >
                            <div className="w-6 h-6 bg-white rounded-full transition-transform"></div>
                          </div>
                        </div>
                      </div>
                      <p className="text-indigo-200/70">
                        These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us know which pages are most and least popular and see how visitors move around the site.
                      </p>
                    </div>

                    {/* Marketing Cookies */}
                    <div className="bg-gray-800/40 rounded-lg p-6 border border-gray-700/50">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-200">Marketing Cookies</h3>
                          <p className="text-sm text-indigo-200/60">Used for advertising and social media</p>
                        </div>
                        <div className="relative">
                          <input
                            type="checkbox"
                            checked={preferences.marketing}
                            onChange={(e) => handlePreferenceChange('marketing', e.target.checked)}
                            className="sr-only"
                          />
                          <div 
                            className={`w-14 h-8 rounded-full flex items-center px-1 cursor-pointer transition-colors ${
                              preferences.marketing ? 'bg-blue-600 justify-end' : 'bg-gray-600 justify-start'
                            }`}
                            onClick={() => handlePreferenceChange('marketing', !preferences.marketing)}
                          >
                            <div className="w-6 h-6 bg-white rounded-full transition-transform"></div>
                          </div>
                        </div>
                      </div>
                      <p className="text-indigo-200/70">
                        These cookies may be set through our site by our advertising partners. They may be used to build a profile of your interests and show you relevant adverts on other sites.
                      </p>
                    </div>

                    {/* Functional Cookies */}
                    <div className="bg-gray-800/40 rounded-lg p-6 border border-gray-700/50">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-200">Functional Cookies</h3>
                          <p className="text-sm text-indigo-200/60">Enhanced functionality and personalization</p>
                        </div>
                        <div className="relative">
                          <input
                            type="checkbox"
                            checked={preferences.functional}
                            onChange={(e) => handlePreferenceChange('functional', e.target.checked)}
                            className="sr-only"
                          />
                          <div 
                            className={`w-14 h-8 rounded-full flex items-center px-1 cursor-pointer transition-colors ${
                              preferences.functional ? 'bg-blue-600 justify-end' : 'bg-gray-600 justify-start'
                            }`}
                            onClick={() => handlePreferenceChange('functional', !preferences.functional)}
                          >
                            <div className="w-6 h-6 bg-white rounded-full transition-transform"></div>
                          </div>
                        </div>
                      </div>
                      <p className="text-indigo-200/70">
                        These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third party providers whose services we have added to our pages.
                      </p>
                    </div>
                  </div>
                </section>

                <section className="pt-8">
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                      onClick={acceptAll}
                      className="btn bg-gradient-to-t from-blue-600 to-blue-500 text-white px-8 py-3"
                    >
                      Accept All Cookies
                    </button>
                    <button
                      onClick={rejectAll}
                      className="btn bg-gray-700 hover:bg-gray-600 text-white px-8 py-3"
                    >
                      Reject All (Essential Only)
                    </button>
                    <button
                      onClick={savePreferences}
                      className="btn bg-gradient-to-t from-indigo-600 to-indigo-500 text-white px-8 py-3"
                    >
                      Save My Preferences
                    </button>
                  </div>
                </section>

              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}