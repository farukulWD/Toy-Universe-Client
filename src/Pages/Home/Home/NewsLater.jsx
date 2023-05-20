import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const NewsLater = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <div data-aos="zoom-in"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1500" className="xl:flex xl:justify-end pt-16">
        <div className="container sm:mx-auto">
          <div className="block xl:flex justify-between xl:items-center lg:items-center md:flex">
            <div className="w-11/12 xl:w-4/12 mx-auto xl:mx-0 md:w-5/12">
              <h1 className="text-gray-800 text-3xl font-extrabold mb-3 pt-12 xl:pt-0">
                Sign Up for Product Updates
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                Sign Up for our weekly newsletter to get the latest news updates
                and amazing offers delivered directly in your inbox.
              </p>
              <div className="flex w-full flex-wrap">
                <div className="w-full">
                  <div className="flex flex-col mb-3">
                    <label
                      className="text-base font-bold text-gray-800 mb-2"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="example@gmail.com"
                      className="focus:outline-none focus:border-indigo-700 border-gray-300 border rounded-sm py-2 outline-none pl-2 pr-2"
                    />
                  </div>
                  <button
                    type="submit"
                    className="focus:outline-none bg-[#ccf7ff]   hover:bg-[#aeedf8] text-black text-base w-full py-3 px-6 rounded"
                  >
                    Subscribe to Newsletter
                  </button>
                </div>
              </div>
            </div>
            <div className="w-11/12 xl:w-5/12 mx-auto xl:mx-0 mt-8 xl:mt-0 flex justify-end md:w-5/12  relative py-20">
              <div className="h-4/5 w-4/5">
                <img
                  src="https://i.ibb.co/8bzcZ4Q/txc90f18560dfc915.jpg"
                  alt
                  className="h-full w-full overflow-hidden object-cover relative z-10 xl:-ml-56 lg:-ml-32 sm:-ml-20 -ml-12 md:-ml-20 rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLater;
