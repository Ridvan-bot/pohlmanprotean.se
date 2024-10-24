import React from 'react';
import '../../styles/tailwind.css'; // Ensure this line is included if your CSS is global
import Header from '../components/Header';
import Footer from '../components/Footer';

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#111] text-white flex flex-col">
      <Header />

      <div className="flex-grow py-10 px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">Terms of Service</h1>

        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4 text-yellow-500">Acceptance of Terms</h2>
          <p className="text-lg text-gray-400 mb-4">
            By accessing and using our website, you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, you should not use our website.
          </p>

          <h2 className="text-3xl font-semibold mb-4 text-yellow-500">Modifications</h2>
          <p className="text-lg text-gray-400 mb-4">
            We reserve the right to modify or update these Terms at any time. We will notify you of any changes by posting the new terms on this page. Your continued use of the website after such changes constitutes your acceptance of the new terms.
          </p>

          <h2 className="text-3xl font-semibold mb-4 text-yellow-500">User Responsibilities</h2>
          <p className="text-lg text-gray-400 mb-4">
            You agree to use the website only for lawful purposes and in a manner that does not infringe on the rights of, restrict, or inhibit anyone else&apos;s use of the website.
          </p>

          <h2 className="text-3xl font-semibold mb-4 text-yellow-500">Disclaimer of Warranties</h2>
          <p className="text-lg text-gray-400 mb-4">
            The website is provided on an &quot;as is&quot; and &quot;as available&quot; basis. We make no warranties, express or implied, regarding the accuracy, reliability, or availability of the website.
          </p>

          <h2 className="text-3xl font-semibold mb-4 text-yellow-500">Limitation of Liability</h2>
          <p className="text-lg text-gray-400 mb-4">
            In no event shall Pohlman Protean be liable for any direct, indirect, incidental, special, or consequential damages arising from your use of the website.
          </p>

          <h2 className="text-3xl font-semibold mb-4 text-yellow-500">Governing Law</h2>
          <p className="text-lg text-gray-400 mb-4">
            These Terms shall be governed by and construed in accordance with the laws of Your State/Country.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TermsOfService;
