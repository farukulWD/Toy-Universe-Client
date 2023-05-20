import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Gallery = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="my-10">
      <div className="flex flex-col items-center justify-center">
        <h1 className="lg:text-4xl text-3xl font-bold text-center text-gray-800">
          Toys That Will Make Your Kids Smile
        </h1>
        <p className="text-base leading-6 mt-4 text-center text-gray-600 2xl:w-2/5 ">
          Here is why you should trust us with your work achievements
        </p>
      </div>
      <hr className="border-y-2 mt-5 w-52 mb-10 mx-auto border-[#fdc600]" />

      <div className="container mt-10 mx-auto">
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="flex w-1/3 flex-wrap"
          >
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://i.ibb.co/WKvXWJ4/1-2019-06-12-122601-2019-07-10-130211.jpg"
              />
            </div>
          </div>
          <div
            data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="flex w-1/3 flex-wrap"
          >
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://i.ibb.co/ZxWPsPG/4006333074639-imageoutofpack.png"
              />
            </div>
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="flex w-1/3 flex-wrap"
          >
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://i.ibb.co/kmH9xwM/truck.png"
              />
            </div>
          </div>
          <div
            data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="flex w-1/3 flex-wrap"
          >
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://i.ibb.co/nMXpnRy/truck.webp"
              />
            </div>
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="flex w-1/3 flex-wrap"
          >
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://i.ibb.co/gMw5hmr/ambulance.png"
              />
            </div>
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="flex w-1/3 flex-wrap"
          >
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://i.ibb.co/ZL0PG7n/62451a4a11b5728e6c7f9e09-E511-toy-rc-excavator.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
