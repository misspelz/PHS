import React from "react";
import Layout from "@/components/layout";
import Hero from "@/components/home/hero/servicehero";
import plumbingimg from "@/assets/plumbingmobile.svg";
import plumbingimgweb from "@/assets/plumbing.svg";
import serviceworkmobile from "@/assets/serviceworkmobile.svg";
import serviceworkweb from "@/assets/serviceworkweb.svg";
import img2 from "@/assets/img2.svg";
import img3 from "@/assets/img3.svg";
import img4 from "@/assets/img4.svg";
import img2mobile from "@/assets/img2mobile.svg";
import img3mobile from "@/assets/img3mobile.svg";
import img4mobile from "@/assets/img4mobile.svg";
import H6Heading from "@/components/headings/H6Heading";
import Image from "next/image";
import { servicesdata } from "@/components/data";

interface Background {
  src: string;
}

export default function Services({searchParams}: {
  searchParams: {
    id: string;
    title: string;
    description: string;
    bg: Background;
    btn: string;
  };
}
) {

  const service = servicesdata.find(
    (service) => service.id === parseInt(searchParams.id)
  );

  return (
    <Layout activePage="services">
      <div className="relative">
        {/* Hero section */}
        <Hero
          mobileBackground={service?.bg}
          desktopBackground={service?.bg}
          headingText={searchParams.title}
        />
      </div>

      <div className="px-6 lg:px-[123px] py-[48px]">
        <div className="relative z-20 w-full ">
          <H6Heading className="text-center font-[600] ">
            How it works
          </H6Heading>
          <p className={`text-[16px] text-center lg:text-[18px]`}>
            Get familiar with the process
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] lg:gap-[24px] py-[28px]">
          <div className="flex ">
            <div className="w-full">
              <Image
                src={serviceworkmobile}
                alt="image"
                className="lg:hidden w-full h-full"
              />
              <Image
                src={serviceworkweb}
                alt="image"
                className="hidden lg:block w-full h-full"
              />
            </div>
            <div className="w-full  flex flex-col   bg-primary text-white">
              <div className="w-full flex justify-end">
                <div className="bg-white h-[32px] w-[32px] lg:h-[52px] lg:w-[56px] flex items-center justify-center">
                  <p className="text-black text-[18px]">1</p>
                </div>
              </div>
              <div className="w-full h-full flex justify-center items-center px-[13px]">
                <div>
                  <p className="font-[600] text-[16px] lg:text-[18px]">
                    Request a Handyman service
                  </p>
                  <p className="mt-[4px]">
                    Share your need and information regarding our services with
                    us, tell us what you want fixed and when you want it
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex ">
            <div className="w-full">
              <Image
                src={img2mobile}
                alt="image"
                className="lg:hidden w-full h-full"
              />
              <Image
                src={img2}
                alt="image"
                className="hidden lg:block w-full h-full"
              />
            </div>
            <div className="w-full  flex flex-col bg-white text-black">
              <div className="w-full flex justify-end">
                <div className="bg-primary h-[32px] w-[32px] lg:h-[52px] lg:w-[56px] flex items-center justify-center">
                  <p className="text-white text-[18px]">2</p>
                </div>
              </div>
              <div className="w-full h-full flex justify-center items-center px-[13px]">
                <div>
                  <p className="font-[600] text-[16px] lg:text-[18px]">
                    Service Assessment and Report
                  </p>
                  <p className="mt-[4px]">
                    We carry out a survey assessment check based on your
                    specified service(s) and give you a detailed report
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex ">
            <div className="w-full">
              <Image
                src={img3mobile}
                alt="image"
                className="lg:hidden w-full h-full"
              />
              <Image
                src={img3}
                alt="image"
                className="hidden lg:block w-full h-full"
              />
            </div>
            <div className="w-full  flex flex-col bg-white text-black">
              <div className="w-full flex justify-end">
                <div className="bg-primary h-[32px] w-[32px] lg:h-[52px] lg:w-[56px]  flex items-center justify-center">
                  <p className="text-white text-[18px]">3</p>
                </div>
              </div>
              <div className="w-full h-full flex justify-center items-center px-[13px]">
                <div>
                  <p className="font-[600] text-[16px] lg:text-[18px]">
                    Make Payment
                  </p>
                  <p className="mt-[4px]">
                    Make full payments for the handyman service(s) to be carried
                    out
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex ">
            <div className="w-full">
              <Image
                src={img4mobile}
                alt="image"
                className="lg:hidden w-full h-full"
              />
              <Image
                src={img4}
                alt="image"
                className="hidden lg:block w-full h-full"
              />
            </div>
            <div className="w-full  flex flex-col   bg-primary text-white">
              <div className="w-full flex justify-end">
                <div className="bg-white h-[32px] w-[32px] lg:h-[52px] lg:w-[56px] flex items-center justify-center">
                  <p className="text-black text-[18px]">4</p>
                </div>
              </div>
              <div className="w-full h-full flex justify-center items-center px-[13px]">
                <div>
                  <p className="font-[600] text-[16px] lg:text-[18px]">
                    Service Review
                  </p>
                  <p className="mt-[4px]">
                    You will receive a notification for a service feedback once
                    your task has been completed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
