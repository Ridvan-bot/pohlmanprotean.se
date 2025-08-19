"use client";

import Image from "next/image";
import BlurredShape from "@/public/images/blurred-shape.svg";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";

export default function Terms() {
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
                <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-600/60 dark:before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-600/60 dark:after:to-indigo-200/50">
                  <span className="inline-flex bg-gradient-to-r from-gray-950 to-gray-800 dark:from-blue-500 dark:to-indigo-200 bg-clip-text text-transparent">
                    Legal
                  </span>
                </div>
                <h1 className="dark:animate-[gradient_6s_linear_infinite] dark:bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] dark:bg-[length:200%_auto] dark:bg-clip-text pb-8 font-nacelle text-3xl font-semibold text-gray-950 dark:text-transparent md:text-4xl">
                  Terms of Service
                </h1>
                <p className="text-lg text-gray-600 dark:text-indigo-200/65">
                  Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </div>

              <div className="prose dark:prose-invert max-w-none">
                <div className="space-y-8 text-gray-700 dark:text-indigo-200/80">
                  
                  <section>
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">1. Acceptance of Terms</h2>
                    <p className="mb-4">
                      By accessing and using the services provided by Pohlman Protean ("we," "our," or "us"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">2. Services Provided</h2>
                    <p className="mb-4">
                      Pohlman Protean provides IT consulting, software development, cloud deployment, and automation services. Our services include but are not limited to:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Fullstack development and consulting</li>
                      <li>Website development for businesses of all sizes</li>
                      <li>Cloud deployment and infrastructure management</li>
                      <li>IT automation solutions</li>
                      <li>Project management services</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">3. Use License</h2>
                    <p className="mb-4">
                      Permission is granted to temporarily access the materials on Pohlman Protean's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Modify or copy the materials</li>
                      <li>Use the materials for any commercial purpose or for any public display</li>
                      <li>Attempt to reverse engineer any software contained on the website</li>
                      <li>Remove any copyright or other proprietary notations from the materials</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">4. Client Obligations</h2>
                    <p className="mb-4">
                      When engaging our services, clients agree to:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Provide accurate and complete information</li>
                      <li>Make timely payments as agreed upon in project contracts</li>
                      <li>Respond to requests for information in a timely manner</li>
                      <li>Respect intellectual property rights</li>
                      <li>Comply with all applicable laws and regulations</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">5. Payment Terms</h2>
                    <p className="mb-4">
                      Payment terms will be specified in individual project agreements. Unless otherwise specified:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Invoices are due within 30 days of issuance</li>
                      <li>Late payments may incur additional fees</li>
                      <li>Work may be suspended for overdue accounts</li>
                      <li>Refund policies will be outlined in project-specific agreements</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">6. Intellectual Property</h2>
                    <p className="mb-4">
                      Unless otherwise agreed upon in writing, all custom work developed by Pohlman Protean becomes the property of the client upon full payment. However, Pohlman Protean retains the right to use general knowledge, skills, experience, ideas, concepts, know-how, and techniques acquired or used in the course of providing services.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">7. Confidentiality</h2>
                    <p className="mb-4">
                      We respect the confidentiality of our clients' information and agree not to disclose any confidential information except as required by law or with explicit client consent.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">8. Privacy Policy</h2>
                    <p className="mb-4">
                      Your privacy is important to us. We collect and use personal information only as necessary to provide our services and as outlined in our Privacy Policy.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">9. Modifications to Terms</h2>
                    <p className="mb-4">
                      Pohlman Protean may revise these terms of service at any time without notice. By using this website and our services, you are agreeing to be bound by the then current version of these terms of service.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">10. Governing Law</h2>
                    <p className="mb-4">
                      These terms and conditions are governed by and construed in accordance with the laws of Sweden, and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">11. Contact Information</h2>
                    <p className="mb-4">
                      If you have any questions about these Terms of Service, please contact us through our contact form or via email.
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