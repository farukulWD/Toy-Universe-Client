import React, { useEffect, useState } from "react";
import banner1 from "../../../../src/assets/mainbanner1-1920x900.png";
import banner2 from "../../../../src/assets/mainbanner2-1920x900.png";
import Gallery from "./Gallery";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import TabCard from "./TabCard";
import AOS from "aos";
import "aos/dist/aos.css";
import Testimonial from "./Testimonial";
import useTitle from "../../../Component/Hook/UseTitle";
import NewsLater from "./NewsLater";
import Features from "./Features";

const Home = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [tabValue, setTabValue] = useState("all");
  const [products, setProduct] = useState([]);
  useTitle("Home")

  useEffect(() => {
    AOS.init();
  }, []);

  const handleSelect = (index) => {
    setTabIndex(index);
    if (index === 0) {
      setTabValue("all");
    } else if (index === 1) {
      setTabValue("mini fire truck");
      return;
    } else if (index === 2) {
      setTabValue("truck");
      return;
    } else if (index === 3) {
      setTabValue("mini police car");
      return;
    }
  };

  useEffect(() => {
    fetch(
      `https://the-toy-universe-server.vercel.app/getJobByCategory/${tabValue}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, [tabValue]);

  return (
    <div>
      {/* banner section start*/}
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={banner1} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="font-bold text-2xl text-[#fdc600]">
              ❮
            </a>
            <a href="#slide2" className="font-bold text-2xl text-[#fdc600] ">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={banner2} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="font-bold text-2xl text-[#fdc600] ">
              ❮
            </a>
            <a href="#slide1" className="font-bold text-2xl text-[#fdc600] ">
              ❯
            </a>
          </div>
        </div>
      </div>

      {/* banner section end */}

      {/*gallery start*/}
      <Gallery></Gallery>
      {/*gallery end*/}

      {/* Shop by category start */}
      <div className="my-10">
        
        <div className="flex flex-col items-center justify-center">
          <h1 className="lg:text-4xl text-3xl font-bold text-center text-gray-800">
          Shop by category
          </h1>
          <p className="text-base leading-6 mt-4 text-center text-gray-600 2xl:w-2/5 ">
            Here is why you should trust us with your work achievements
          </p>
        </div>
        <hr className="border-y-2 mt-5 w-52 mb-10 mx-auto border-[#ccf7ff]" />
        <div className="text-center">
          <Tabs
            selectedIndex={tabIndex}
            onSelect={(index) => handleSelect(index)}
          >
            <TabList className="font-semibold">
              <Tab>All</Tab>
              <Tab>mini fire truck</Tab>
              <Tab>truck</Tab>
              <Tab>mini police car</Tab>
            </TabList>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
          </Tabs>
          <div
            data-aos="zoom-in"
            className="grid  lg:grid-cols-4 my-10 gap-6 mx-auto"
          >
            {products.map((product) => (
              <TabCard key={product._id} product={product}></TabCard>
            ))}
          </div>
        </div>
      </div>
      {/* Shop by category end */}

      {/* Testimonial section  */}
      <div data-aos="zoom-in">
        <Testimonial></Testimonial>
      </div>
      {/* Features */}
      <Features></Features>

      {/* News Later section */}
      <NewsLater></NewsLater>
    </div>
  );
};

export default Home;
