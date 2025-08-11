import Logo from "./logo";
import Image from "next/image";
import FooterIllustration from "@/public/images/footer-illustration.svg";

export default function Footer() {
  return (
    <footer>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Footer illustration */}
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-1/2"
          aria-hidden="true"
        >
          <Image
            className="max-w-none"
            src={FooterIllustration}
            width={1076}
            height={378}
            alt="Footer illustration"
          />
        </div>
        <div className="grid grid-cols-2 justify-between gap-12 py-8 sm:grid-rows-[auto_auto] md:grid-cols-4 md:grid-rows-[auto_auto] md:py-12 lg:grid-cols-[repeat(4,minmax(0,140px))_1fr] lg:grid-rows-1 xl:gap-20">
          {/* 1st block */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-800 dark:text-gray-200">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  className="text-gray-600 dark:text-indigo-200/65 transition hover:text-blue-500"
                  href="#services"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a
                  className="text-gray-600 dark:text-indigo-200/65 transition hover:text-blue-500"
                  href="https://pohlmanprotean-manager.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Project Manager
                </a>
              </li>
            </ul>
          </div>
          {/* 2nd block */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-800 dark:text-gray-200">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  className="text-gray-600 dark:text-indigo-200/65 transition hover:text-blue-500"
                  href="#about"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  className="text-gray-600 dark:text-indigo-200/65 transition hover:text-blue-500"
                  href="/careers"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>
          {/* 3rd block */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-800 dark:text-gray-200">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  className="text-gray-600 dark:text-indigo-200/65 transition hover:text-blue-500"
                  href="/terms"
                >
                  Terms of service
                </a>
              </li>
            </ul>
          </div>
          {/* 4th block */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-800 dark:text-gray-200">Content Library</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  className="text-gray-600 dark:text-indigo-200/65 transition hover:text-blue-500"
                  href="/cookies"
                >
                  Cookie manager
                </a>
              </li>
            </ul>
          </div>
          {/* Logo and Social Links */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 lg:text-right">
            <div className="mb-3">
              <Logo />
            </div>
            <div className="text-sm">
              <p className="mb-3 text-indigo-200/65">
                <span className="text-gray-700"> · </span>
                <a
                  className="text-gray-600 dark:text-indigo-200/65 transition hover:text-blue-500"
                  href="/privacy"
                >
                  Privacy Policy
                </a>
              </p>
              <ul className="inline-flex gap-1">
                <li>
                  <a
                    className="flex items-center justify-center text-blue-500 transition hover:text-blue-300"
                    href="https://www.linkedin.com/company/pohlman-protean/"
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="h-8 w-8 fill-current"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7.25 8.5a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0ZM5 10h4v14H5V10Zm6.5 0H15v1.5h.5c1.5-2 4-2.5 6-1.5 3 1.5 3.5 4.5 3.5 7v6h-4v-5.5c0-1.5-.5-3-2.5-3s-3 1.5-3 3V24h-4V10Z"/>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center justify-center text-blue-500 transition hover:text-blue-300"
                    href="https://github.com/Ridvan-bot"
                    aria-label="Github"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="h-8 w-8 fill-current"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
