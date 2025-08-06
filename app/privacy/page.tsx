"use client";

import Image from "next/image";
import BlurredShape from "@/public/images/blurred-shape.svg";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";

export default function Privacy() {
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
          <div className="w-full px-4 sm:px-6 border-t py-12 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.400/.25),transparent)1] md:py-20">
            <div className="mx-auto max-w-4xl">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
                  <span className="inline-flex bg-gradient-to-r from-blue-500 to-indigo-200 bg-clip-text text-transparent">
                    Legal
                  </span>
                </div>
                <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-8 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
                  Privacy Policy
                </h1>
                <p className="text-lg text-indigo-200/65">
                  Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </div>

              <div className="prose prose-invert max-w-none">
                <div className="space-y-8 text-indigo-200/80">
                  
                  <section>
                    <h2 className="text-2xl font-semibold text-gray-200 mb-4">1. Introduction</h2>
                    <p className="mb-4">
                      Pohlman Protean ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. We comply with the General Data Protection Regulation (GDPR) and Swedish data protection laws.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-200 mb-4">2. Information We Collect</h2>
                    <p className="mb-4">We may collect the following types of information:</p>
                    
                    <h3 className="text-xl font-semibold text-gray-300 mb-3 mt-6">Personal Information</h3>
                    <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                      <li>Name and contact information (email, phone number)</li>
                      <li>Company information and job title</li>
                      <li>Professional background and experience</li>
                      <li>Portfolio or LinkedIn URLs</li>
                      <li>Messages and communications with us</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-300 mb-3 mt-6">Technical Information</h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>IP address and location data</li>
                      <li>Browser type and version</li>
                      <li>Device information</li>
                      <li>Website usage data and analytics</li>
                      <li>Cookies and similar tracking technologies</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-200 mb-4">3. How We Collect Information</h2>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li><strong>Direct Collection:</strong> When you fill out contact forms, submit job applications, or communicate with us</li>
                      <li><strong>Automatic Collection:</strong> Through cookies, analytics tools, and website interactions</li>
                      <li><strong>Third-Party Sources:</strong> From publicly available professional networks (with your consent)</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-200 mb-4">4. How We Use Your Information</h2>
                    <p className="mb-4">We use your information for the following purposes:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Responding to your inquiries and providing customer support</li>
                      <li>Processing job applications and recruitment</li>
                      <li>Delivering our IT consulting and development services</li>
                      <li>Improving our website and services</li>
                      <li>Complying with legal obligations</li>
                      <li>Sending relevant business communications (with your consent)</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-200 mb-4">5. Legal Basis for Processing (GDPR)</h2>
                    <p className="mb-4">We process your personal data based on:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li><strong>Consent:</strong> When you voluntarily provide information through forms</li>
                      <li><strong>Contract:</strong> To perform services you've requested</li>
                      <li><strong>Legitimate Interest:</strong> For business operations and service improvement</li>
                      <li><strong>Legal Obligation:</strong> To comply with applicable laws</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-200 mb-4">6. Information Sharing and Disclosure</h2>
                    <p className="mb-4">We do not sell, trade, or otherwise transfer your personal information to third parties, except:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>With your explicit consent</li>
                      <li>To trusted service providers who assist in our operations (under strict confidentiality agreements)</li>
                      <li>When required by law or to protect our rights</li>
                      <li>In connection with a business merger or acquisition (with notice)</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-200 mb-4">7. Data Security</h2>
                    <p className="mb-4">
                      We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These include encryption, secure servers, and access controls.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-200 mb-4">8. Data Retention</h2>
                    <p className="mb-4">
                      We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, or resolve disputes. Contact form submissions are typically retained for 2 years, while job applications may be kept for up to 3 years.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-200 mb-4">9. Your Rights (GDPR)</h2>
                    <p className="mb-4">Under GDPR, you have the right to:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li><strong>Access:</strong> Request a copy of your personal data</li>
                      <li><strong>Rectification:</strong> Correct inaccurate or incomplete data</li>
                      <li><strong>Erasure:</strong> Request deletion of your data ("right to be forgotten")</li>
                      <li><strong>Portability:</strong> Receive your data in a structured format</li>
                      <li><strong>Restriction:</strong> Limit how we process your data</li>
                      <li><strong>Objection:</strong> Object to processing based on legitimate interests</li>
                      <li><strong>Withdraw Consent:</strong> Revoke consent at any time</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-200 mb-4">10. Cookies and Tracking</h2>
                    <p className="mb-4">
                      Our website uses cookies to enhance user experience and analyze website traffic. You can control cookie preferences through your browser settings. Essential cookies are necessary for website functionality and cannot be disabled.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-200 mb-4">11. International Transfers</h2>
                    <p className="mb-4">
                      Your data may be transferred to and processed in countries outside the EU/EEA. We ensure appropriate safeguards are in place, such as Standard Contractual Clauses or adequacy decisions by the European Commission.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-200 mb-4">12. Children's Privacy</h2>
                    <p className="mb-4">
                      Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children under 18.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-200 mb-4">13. Changes to This Policy</h2>
                    <p className="mb-4">
                      We may update this Privacy Policy periodically. We will notify you of any material changes by posting the new policy on our website with an updated "Last updated" date.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-200 mb-4">14. Contact Information</h2>
                    <p className="mb-4">
                      If you have questions about this Privacy Policy or wish to exercise your rights, please contact us through our contact form. For GDPR-related complaints, you also have the right to lodge a complaint with the Swedish Data Protection Authority (Datainspektionen).
                    </p>
                  </section>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}