"use client";

import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";
import { useEffect, useRef, useState } from "react";

export default function Features() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.2 } // Adjust the threshold as needed
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
      observer.disconnect();
    };
  }, []);

  return (
    <section className="relative">
      <div
        className="pointer-events-none absolute right-1/2 top-0 -z-10 -mt-20 -translate-x-1/2"
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
        className="pointer-events-none absolute bottom-10 right-1/2 -z-10 -mb-80 -translate-x-[120%] opacity-50"
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
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.400/.25),transparent)1] md:py-20">
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-blue-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-blue-200/50">
              <span className="inline-flex bg-gradient-to-r from-blue-500 to-blue-200 bg-clip-text text-transparent">
                Our Services
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Building tailored solutions
            </h2>
            <p className="text-lg text-indigo-200/65">
              We offer a range of IT solutions, programming, and automation services tailored to your needs.
            </p>
          </div>
          <div ref={containerRef} className="mx-auto grid max-w-sm gap-12 sm:max-w-none sm:grid-cols-2 md:gap-x-14 md:gap-y-16 lg:grid-cols-3">
            {[
              {
                title: "Consulting Services",
                description:
                  "Our consulting service focuses on software engineering, specifically in Fullstack development. We collaborate with clients to build robust and scalable solutions that meet their business needs.",
                icon: (
                  <svg className="mb-3 fill-blue-500" xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
                    <path d="M0 0h14v17H0V0Zm2 2v13h10V2H2Z" />
                    <path fillOpacity=".48" d="m16.295 5.393 7.528 2.034-4.436 16.412L5.87 20.185l.522-1.93 11.585 3.132 3.392-12.55-5.597-1.514.522-1.93Z" />
                  </svg>
                ),
              },
              {
                title: "Simple and Complex Websites for Small, Medium, and Large Businesses",
                description:
                  "We create simple, user-friendly websites tailored for small, medium, and large businesses, ensuring you have a strong online presence without complexity. Our designs focus on clarity and functionality, helping you connect with your customers effectively.",
                icon: (
                  <svg className="mb-3 fill-blue-500" xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
                    <path fillOpacity=".48" d="M7 8V0H5v8h2Zm12 16v-4h-2v4h2Z" />
                    <path d="M19 6H0v2h17v8H7v-6H5v8h19v-2h-5V6Z" />
                  </svg>
                ),
              },
              {
                title: "Google Run Deployment",
                description:
                  "We specialize in deploying applications on Google Run, allowing for efficient scaling and management of your applications without the hassle of managing infrastructure. Our services ensure a smooth deployment process tailored to your needs.",
                icon: (
                  <svg className="mb-3 fill-blue-500" xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
                    <path d="M23.414 6 18 .586 16.586 2l3 3H7a6 6 0 0 0-6 6h2a4 4 0 0 1 4-4h12.586l-3 3L18 11.414 23.414 6Z" />
                    <path fillOpacity=".48" d="M13.01 12.508a2.5 2.5 0 0 0-3.502.482L1.797 23.16.203 21.952l7.71-10.17a4.5 4.5 0 1 1 7.172 5.437l-4.84 6.386-1.594-1.209 4.841-6.385a2.5 2.5 0 0 0-.482-3.503Z" />
                  </svg>
                ),
              },
            ].map((article, index) => (
              <article
                key={index}
                className={`transition-transform duration-700 transform ${
                  isVisible ? "translate-x-0" : "-translate-x-full"
                }`}
              >
                {article.icon}
                <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">{article.title}</h3>
                <p className="text-indigo-200/65">{article.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
