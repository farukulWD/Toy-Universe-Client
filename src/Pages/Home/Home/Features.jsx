import React, { useEffect } from "react";
import { FaGift } from "react-icons/fa";
import {
  GiPublicSpeaker,
  GiDiamondHard,
  GiSwordBrandish,
} from "react-icons/gi";
import { BsCalendarRange, BsCollectionPlay } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";

const Features = () => {
    useEffect(() => {
        AOS.init();
      }, []);
  return (
    <div>
      <div data-aos="zoom-in"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1500" className="dark:bg-gray-900">
        <section className="mx-auto container py-20 ">
          <div className="flex justify-center items-center flex-col">
            <h1 className="lg:text-4xl text-3xl font-bold text-center text-gray-800">
              Why Chose Our Product
            </h1>
            <p className="text-base leading-6 mt-4 text-center text-gray-600 2xl:w-2/5 ">
              Quality, variety, and affordability make our products the perfect
              choice for toy car enthusiasts of all ages.
            </p>

            <hr className="border-y-2 mt-5 w-52 mb-10 mx-auto border-[#ccf7ff]" />
            <div className="pt-24 grid lg:grid-cols-3 md:grid-cols-2 justify-center items-center  gap-y-20 gap-x-16  xl:gap-x-0 ">
              <div className="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
                <div className="mb-6">
                  <FaGift className="text-5xl text-[#80e7f9]"></FaGift>
                </div>
                <div className="text-gray-800 dark:text-white text-2xl font-semibold text-center">
                  <h2>Gift Wrapping</h2>
                </div>
                <div className="text-gray-600 dark:text-gray-300 mt-2 text-lg text-center ">
                  <p>
                    Workflows can help streamline and automate repeatable
                    business tasks.
                  </p>
                </div>
              </div>
              <div className="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
                <div className="mb-6">
                  <GiSwordBrandish className="text-5xl text-[#80e7f9]"></GiSwordBrandish>
                </div>
                <div className="text-gray-800 dark:text-white text-2xl font-semibold text-center">
                  <h2>Brand Variety</h2>
                </div>
                <div className="text-gray-600 dark:text-gray-300 mt-2 text-lg text-center ">
                  <p>
                    A good toy car store will carry products from popular and
                    reputable toy car brands. This ensures customers can find
                    their favorite brands and also discover new ones.
                  </p>
                </div>
              </div>
              <div className="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
                <div className="mb-6">
                  <GiDiamondHard className="text-5xl text-[#80e7f9]"></GiDiamondHard>
                </div>
                <div className="text-gray-800 dark:text-white text-2xl font-semibold text-center">
                  <h2>Extensive Selection</h2>
                </div>
                <div className="text-gray-600 dark:text-gray-300 mt-2 text-lg text-center ">
                  <p>
                    A toy car store will have a wide range of toy cars
                    available, including different brands, models, sizes, and
                    types. They may offer various options such as die-cast cars,
                    remote-controlled cars, scale models, and more.
                  </p>
                </div>
              </div>
              <div className="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
                <div className="mb-6">
                  <BsCollectionPlay className="text-5xl text-[#80e7f9]"></BsCollectionPlay>
                </div>
                <div className="text-gray-800 dark:text-white text-2xl font-semibold text-center">
                  <h2>Collector's Items</h2>
                </div>
                <div className="text-gray-600 dark:text-gray-300 mt-2 text-lg text-center ">
                  <p>
                    Many toy car stores cater to collectors and enthusiasts,
                    offering limited edition and collectible toy cars. These
                    might include vintage models, rare editions, or exclusive
                    releases for avid collectors.
                  </p>
                </div>
              </div>
              <div className="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
                <div className="mb-6">
                  <BsCalendarRange className="text-5xl text-[#80e7f9]"></BsCalendarRange>
                </div>
                <div className="text-gray-800 dark:text-white text-2xl font-semibold text-center">
                  <h2>Age Range</h2>
                </div>
                <div className="text-gray-600 dark:text-gray-300 mt-2 text-lg text-center ">
                  <p>
                    Toy car stores cater to different age groups, so they will
                    typically offer products suitable for various age ranges.
                    This allows customers to find cars for toddlers, young
                    children, teenagers, and even adults.
                  </p>
                </div>
              </div>
              <div className="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
                <div className="mb-6">
                  <GiPublicSpeaker className="text-5xl text-[#80e7f9]"></GiPublicSpeaker>
                </div>
                <div className="text-gray-800 dark:text-white text-2xl font-semibold text-center">
                  <h2>Customer Loyalty Programs</h2>
                </div>
                <div className="text-gray-600 dark:text-gray-300 mt-2 text-lg text-center ">
                  <p>
                    Some toy car stores may have loyalty programs or membership
                    options that offer exclusive benefits to regular customers.
                    These can include discounts, early access to new releases,
                    or special promotions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Features;
