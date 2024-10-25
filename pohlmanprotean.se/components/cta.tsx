import Image from "next/image";
import BlurredShape from "@/public/images/blurred-shape.svg";
import Spotlight from "./spotlight";

export default function Cta() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute bottom-0 left-1/2 -z-10 -mb-24 ml-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>

      <div id="contact" className="w-full px-4 sm:px-0">
        <div className="bg-gradient-to-r from-transparent via-gray-800/50 py-12 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-8 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Contact us for more info
            </h2>
            {/* Spotlight items */}
            <Spotlight className="group mx-auto flex justify-center items-center max-w-sm flex-wrap gap-6 lg:max-w-none lg:flex-nowrap">
              {/* Card 1 */}
              <div className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px">
              <div className="relative z-20 h-full overflow-hidden rounded-tl-xl rounded-tr-xl rounded-b-none bg-gray-950 after:absolute after:inset-0 after:bg-gradient-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
               {/* Content */}
                  <div className="p-6">
                    {/* Form Fields */}
                    <div className="mb-3 flex gap-4">
                      <input type="text" placeholder="First Name" className="btn-sm w-full rounded-full bg-gray-800/40 px-4 py-4 text-sm font-normal text-indigo-200 placeholder-indigo-200/60 focus:outline-none focus:ring-2 focus:ring-indigo-500 z-50" />
                      <input type="text" placeholder="Last Name" className="btn-sm w-full rounded-full bg-gray-800/40 px-4 py-4 text-sm font-normal text-indigo-200 placeholder-indigo-200/60 focus:outline-none focus:ring-2 focus:ring-indigo-500 z-50" />
                    </div>
                    {/* Other Fields */}
                    <div className="mb-3 flex gap-4">
                      <input type="text" placeholder="Company" className="btn-sm w-full rounded-full bg-gray-800/40 px-4 py-4 text-sm font-normal text-indigo-200 placeholder-indigo-200/60 focus:outline-none focus:ring-2 focus:ring-indigo-500 z-50" />
                    </div>
                    <div className="mb-3 flex gap-4">
                      <input type="text" placeholder="Job Title" className="btn-sm w-full rounded-full bg-gray-800/40 px-4 py-4 text-xs font-normal text-indigo-200 placeholder-indigo-200/60 focus:outline-none focus:ring-2 focus:ring-indigo-500 z-50" />
                    </div>
                    <div className="mb-3 flex gap-4">
                      <input type="text" placeholder="Email" className="btn-sm w-full rounded-full bg-gray-800/40 px-4 py-4 text-xs font-normal text-indigo-200 placeholder-indigo-200/60 focus:outline-none focus:ring-2 focus:ring-indigo-500 z-50" />
                    </div>
                    <div className="mb-3 flex gap-4">
                      <input type="text" placeholder="Phone Number" className="btn-sm w-full rounded-full bg-gray-800/40 px-4 py-4 text-xs font-normal text-indigo-200 placeholder-indigo-200/60 focus:outline-none focus:ring-2 focus:ring-indigo-500 z-50" />
                    </div>
                    <div className="mb-3 flex gap-4">
                      <input type="text" placeholder="Message" className="btn-sm w-full rounded-full bg-gray-800/40 px-4 py-4 text-xs font-normal text-indigo-200 placeholder-indigo-200/60 focus:outline-none focus:ring-2 focus:ring-indigo-500 z-50" />
                    </div>
                  </div>
                </div>
                {/* Submit Button Container */}
                <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center bg-gray-950 after:inset-0 after:absolute after:bg-gradient-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50 pb-4"> {/* Add pb-4 here */}
  <div data-aos="fade-up" data-aos-delay={400}>
    <a
      className="btn group mb-4 w-full bg-gradient-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto relative z-10"
      href="https://pohlmanprotean.se/contact"
    >
      <span className="relative inline-flex items-center">
        Contact Us
        <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
          -&gt;
        </span>
      </span>
    </a>
  </div>
</div>
              </div>
            </Spotlight>
            <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
              <div data-aos="fade-up" data-aos-delay={400}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
