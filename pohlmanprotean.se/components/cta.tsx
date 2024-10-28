import Image from "next/image";
import BlurredShape from "@/public/images/blurred-shape.svg";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";


export default function Cta() {
  return (
    <section className="relative">
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2"
        aria-hidden="true"
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
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-80 -translate-x-[120%] opacity-50"
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
      <div id="contact" className="w-full px-4 sm:px-0 border-t py-12 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.400/.25),transparent)1] md:py-20">
          <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-gradient-to-r from-blue-500 to-indigo-200 bg-clip-text text-transparent">
              Contact
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-8 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Contact us for more info
            </h2>
            <p className="text-lg text-indigo-200/65 mb-10">
            Please complete the form below and submit your details. Our team will reach out to you promptly.
            </p>
            {/* Spotlight items */}
            <div className="group mx-auto flex justify-center items-center max-w-sm flex-wrap gap-6 lg:max-w-none lg:flex-nowrap">
              {/* Card 1 */}
              <div className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-blue-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-blue-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 after:hover:opacity-20 before:group-hover:opacity-100">
                <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-gradient-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                  <div className="p-6">
                    <div className="mb-3 flex gap-4">
                      <input
                        type="text"
                        placeholder="First Name"
                        className="btn-sm w-full rounded-full bg-gray-800/40 px-4 py-4 text-sm font-normal text-indigo-200 placeholder-indigo-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500 z-50"
                      />
                      <input
                        type="text"
                        placeholder="Last Name"
                        className="btn-sm w-full rounded-full bg-gray-800/40 px-4 py-4 text-sm font-normal text-indigo-200 placeholder-indigo-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500 z-50"
                      />
                    </div>
                    <div className="mb-3 flex gap-4">
                    <input
                        type="text"
                        placeholder="Company"
                        className="btn-sm w-full rounded-full bg-gray-800/40 px-4 py-4 text-sm font-normal text-indigo-200 placeholder-indigo-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500 z-50"
                      />
                    </div>
                    <div className="mb-3 flex gap-4">
                    <input
                        type="text"
                        placeholder="Job Title"
                        className="btn-sm w-full rounded-full bg-gray-800/40 px-4 py-4 text-sm font-normal text-indigo-200 placeholder-indigo-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500 z-50"
                      />
                    </div>
                    <div className="mb-3 flex gap-4">
                    <input
                        type="text"
                        placeholder="Email"
                        className="btn-sm w-full rounded-full bg-gray-800/40 px-4 py-4 text-sm font-normal text-indigo-200 placeholder-indigo-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500 z-50"
                      />
                    </div>
                    <div className="mb-3 flex gap-4">
                    <input
                        type="text"
                        placeholder="Phone Number"
                        className="btn-sm w-full rounded-full bg-gray-800/40 px-4 py-4 text-sm font-normal text-indigo-200 placeholder-indigo-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500 z-50"
                      />
                    </div>
                    <div className="mb-3 flex gap-4">
                    <input
                        type="text"
                        placeholder="Message"
                        className="btn-sm w-full rounded-full bg-gray-800/40 px-4 py-4 text-sm font-normal text-indigo-200 placeholder-indigo-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500 z-50"
                      />
                    </div>
{/* Submit Button Container */}
<div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center bg-gray-950 after:inset-0 after:absolute after:bg-gradient-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50 pb-4"> {/* Add pb-4 here */}
  <div data-aos="fade-up" data-aos-delay={400}>
    <a
      className="btn group mb-4 w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto relative z-10"
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
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}
