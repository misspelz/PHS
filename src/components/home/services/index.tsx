"use client";

import H6Heading from "@/components/headings/H6Heading";
import React, { useState } from "react";
import Servicecard from "./servicecard";
import prev from "@/assets/prevarrow.svg";
import next from "@/assets/nextarrow.svg";
import WebServicecard from "./webservicecard";
import Image from "next/image";
import Link from "next/link";
import { servicesdata } from "@/components/data";

const Services = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === Math.ceil(servicesdata.length / 3) - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? Math.ceil(servicesdata.length / 3) - 1 : prevSlide - 1
    );
  };

  return (
    <div
      id="services"
      className="services px-6 lg:px-[123px] mt-[48px] mb-0 lg:mb-[28px] "
    >
      <H6Heading className="text-center font-[600]">Our Services</H6Heading>
      <p className={`text-[16px] text-center lg:text-[18px]`}>
        From Fixes to Renovations, We&apos;ve Got You Covered
      </p>

      {/* Mobile Screen */}
      <div className="w-full overflow-scroll lg:hidden">
        <div className="mt-[28px] flex w-[1200px] overflow-scroll gap-[14px]">
          {servicesdata.map((service, index) => (
            <div key={index} className="flex-1 flex-shrink-0 px-2">
              <Servicecard
                imageSrc={service.imageSrc}
                title={service.title.slice(0, 17)}
                description={service.description.slice(0, 40)}
                learn={
                  <Link
                    href={{
                      pathname: `/services`,
                      query: service,
                    }}
                  >
                    {" "}
                    {service.btn}
                  </Link>
                }
                arrow={{
                  href: {
                    pathname: `/services`,
                    query: service,
                  },
                  passHref: true,
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Big Screen - slider */}
      <div className="hidden lg:flex lg:justify-center lg:items-center w-full mt-[28px] ">
        <div className="flex items-center w-full justify-center">
          {currentSlide !== 0 && (
            <button onClick={prevSlide} className="mr-[24px]">
              <Image src={prev} alt="prev-arrow" />
            </button>
          )}

          <div className="flex ">
            {servicesdata
              .slice(currentSlide * 3, (currentSlide + 1) * 3)
              .map((service, index) => (
                <div key={index} className="flex-1 flex-shrink-0 px-2 ">
                  <WebServicecard
                    imageSrc={service.webimage}
                    title={service.title}
                    description={service.description.slice(0, 80)}
                    learn={
                      <Link
                        href={{
                          pathname: `/services`,
                          query: service,
                        }}
                      >
                        {service.btn}
                      </Link>
                    }
                    arrow={{
                      href: {
                        pathname: `/services`,
                        query: service,
                      },
                      passHref: true,
                    }}
                  />
                </div>
              ))}
          </div>

          {currentSlide !== Math.ceil(servicesdata.length / 3) - 1 && (
            <button onClick={nextSlide} className="ml-[24px]">
              <Image src={next} alt="next-arrow" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Services;
