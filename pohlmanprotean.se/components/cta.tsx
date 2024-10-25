import Image from "next/image";
import BlurredShape from "@/public/images/blurred-shape.svg";
import Spotlight from "@/components/spotlight";

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
      <div id="contact" className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-transparent via-gray-800/50 py-12 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-8 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Contact us for more info
            </h2>
            {/* Spotlight items */}
            <Spotlight className="group mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-3 flex justify-center lg:grid-cols-1" data-aos="fade-up">
              {/* Card 1 */}
              <div className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px">
                <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-gradient-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                  {/* Content */}
                  <div className="p-6">
                    <div className="mb-3 flex gap-4">
                      {/* First Name */}
                      <input
                        type="text"
                        placeholder="First Name"
                        className="btn-sm w-full rounded-full bg-gray-800/40 px-4 py-4 text-sm font-normal text-indigo-200 placeholder-indigo-200/60 focus:outline-none focus:ring-2 focus:ring-indigo-500 z-50"
                      />
                      {/* Last Name */}
                      <input
                        type="text"
                        placeholder="Last Name"
                        className="btn-sm w-full rounded-full bg-gray-800/40 px-4 py-4 text-sm font-normal text-indigo-200 placeholder-indigo-200/60 focus:outline-none focus:ring-2 focus:ring-indigo-500 z-50"
                      />
                    </div>
                    {/* Other Fields */}
                    <div className="mb-3 flex gap-4">
                      <input
                        type="text"
                        placeholder="Company"
                        className="btn-sm w-full rounded-full bg-gray-800/40 px-4 py-4 text-sm font-normal text-indigo-200 placeholder-indigo-200/60 focus:outline-none focus:ring-2 focus:ring-indigo-500 z-50"
                      />

                    </div>
  
                    <div className="mb-3 flex gap-4">
                      <input
                        type="text"
                        placeholder="Job Title"
                        className="btn-sm w-full rounded-full bg-gray-800/40 px-4 py-4 text-xs font-normal text-indigo-200 placeholder-indigo-200/60 focus:outline-none focus:ring-2 focus:ring-indigo-500 z-50"
                      />
  
                    </div>
                    <div className="mb-3 flex gap-4">
                      <input
                        type="text"
                        placeholder="Email"
                        className="btn-sm w-full rounded-full bg-gray-800/40 px-4 py-4 text-xs font-normal text-indigo-200 placeholder-indigo-200/60 focus:outline-none focus:ring-2 focus:ring-indigo-500 z-50"
                      />
                    </div>
                    <div className="mb-3 flex gap-4">
                      <input
                        type="text"
                        placeholder="Phone Number"
                        className="btn-sm w-full rounded-full bg-gray-800/40 px-4 py-4 text-xs font-normal text-indigo-200 placeholder-indigo-200/60 focus:outline-none focus:ring-2 focus:ring-indigo-500 z-50"
                      />
                    </div>
                    <div className="mb-3 flex gap-4">
                      <input
                        type="text"
                        placeholder="Message"
                        className="btn-sm w-full rounded-full bg-gray-800/40 px-4 py-4 text-xs font-normal text-indigo-200 placeholder-indigo-200/60 focus:outline-none focus:ring-2 focus:ring-indigo-500 z-50"
                      />
                    </div>
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
