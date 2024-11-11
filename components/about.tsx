'use client';
import { useEffect, useState } from "react";
import Image from "next/image";
import WorflowImg01 from "@/public/images/workflow-01.png";
import WorflowImg02 from "@/public/images/workflow-02.png";
import WorflowImg03 from "@/public/images/workflow-03.png";
import Spotlight from "@/components/spotlight";

export default function Workflows() {
  const [isVisible, setIsVisible] = useState(true);
  const [isDelayedVisible, setIsDelayedVisible] = useState(false); // State to manage delayed visibility

  const handleScroll = () => {
      const section = document.getElementById("workflows-section");

      if (section) {
          const { top: sectionTop, bottom: sectionBottom } = section.getBoundingClientRect();
          const threshold = 200; // Control when the cards slide out

          // Check if the section is out of view
          if (sectionBottom < threshold || sectionTop > window.innerHeight) {
              setIsVisible(false);
              setIsDelayedVisible(false); // Immediately hide
          } else {
              // Delay the slide-in effect
              setIsVisible(true);
              setTimeout(() => {
                  setIsDelayedVisible(true); // Set delayed visibility after timeout
              }, 1000); // Adjust this delay as needed
          }
      }
  };
  

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <section id="workflows-section">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <div className="pb-12 md:pb-20">
                    {/* Section header */}
                    <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
                        <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-blue-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-blue-200/50">
                            <span className="inline-flex bg-gradient-to-r from-blue-500 to-blue-200 bg-clip-text text-transparent">
                                About us
                            </span>
                        </div>
                        <h2
                            className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl"
                            data-aos="fade-up"
                            data-aos-delay={400}
                        >
                            At Pohlman Protean
                        </h2>
                        <div data-aos="fade-up" data-aos-delay={400}>
                            <p className="text-lg text-indigo-200/65">
                                We are dedicated to providing top-notch IT solutions, programming expertise, and automation services.
                            </p>
                            <p className="text-lg text-indigo-200/65">
                                Our mission is to drive innovation by delivering advanced IT solutions that empower businesses to achieve efficiency, scalability, and success.
                                We specialize in providing cutting-edge programming, automation, and DevOps services to help clients navigate the complexities of modern technology.
                            </p>
                            <p className="text-lg text-indigo-200/65">
                                With years of experience in IT, programming, and automation, Pohlman Protean is your trusted partner for solving complex technical challenges. Whether you're looking to improve efficiency through automation or scale your infrastructure to meet growing demands, we have the skills and expertise to help you succeed.
                            </p>
                            <p className="text-lg text-indigo-200/65">
                                Our work is guided by core values that help us deliver the best solutions to our clients:
                            </p>
                        </div>
                    </div>
                    {/* Spotlight items */}
                    <Spotlight className="group mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-3">
                        {/* Card 1 */}
                        <a
                            className={`group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px ${!isVisible ? "slide-out" : "slide-in"}`}
                            href="#0"
                        >
                            <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-gradient-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                                {/* Image */}
                                <Image
                                    className="inline-flex"
                                    src={WorflowImg01}
                                    width={350}
                                    height={288}
                                    alt="Workflow 01"
                                />
                                {/* Content */}
                                <div className="p-6">
                                    <div className="mb-3">
                                        <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.gray.700/.15),theme(colors.gray.700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
                                            <span className="bg-gradient-to-r from-blue-500 to-indigo-200 bg-clip-text text-transparent">
                                                Collaboration
                                            </span>
                                        </span>
                                    </div>
                                    <p className="text-indigo-200/65">
                                        We work closely with our clients to ensure their success is at the forefront of everything we do.
                                    </p>
                                </div>
                            </div>
                        </a>
                        {/* Card 2 */}
                        <a
                            className={`group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px ${!isVisible ? "slide-out" : "slide-in"}`}
                            href="#0"
                        >
                            <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-gradient-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                                {/* Image */}
                                <Image
                                    className="inline-flex"
                                    src={WorflowImg02}
                                    width={350}
                                    height={288}
                                    alt="Workflow 02"
                                />
                                {/* Content */}
                                <div className="p-6">
                                    <div className="mb-3">
                                        <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.gray.700/.15),theme(colors.gray.700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
                                            <span className="bg-gradient-to-r from-blue-500 to-indigo-200 bg-clip-text text-transparent">
                                                Excellence
                                            </span>
                                        </span>
                                    </div>
                                    <p className="text-indigo-200/65">
                                        Striving for the highest standards of quality in every service we provide..
                                    </p>
                                </div>
                            </div>
                        </a>
                        {/* Card 3 */}
                        <a
                            className={`group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px ${!isVisible ? "slide-out" : "slide-in"}`}
                            href="#0"
                        >
                            <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-gradient-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                                {/* Image */}
                                <Image
                                    className="inline-flex"
                                    src={WorflowImg03}
                                    width={350}
                                    height={288}
                                    alt="Workflow 03"
                                />
                                {/* Content */}
                                <div className="p-6">
                                    <div className="mb-3">
                                        <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.gray.700/.15),theme(colors.gray.700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
                                            <span className="bg-gradient-to-r from-blue-500 to-indigo-200 bg-clip-text text-transparent">
                                                Innovation
                                            </span>
                                        </span>
                                    </div>
                                    <p className="text-indigo-200/65">
                                        Continuously seeking new and improved ways to solve problems.
                                    </p>
                                </div>
                            </div>
                        </a>
                    </Spotlight>
                </div>
            </div>
        </section>
    );
}
