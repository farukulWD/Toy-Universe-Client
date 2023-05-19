import React, { useEffect, useState } from "react";
import banner1 from "../../../../src/assets/mainbanner1-1920x900.png";
import banner2 from "../../../../src/assets/mainbanner2-1920x900.png";
import Gallery from "./Gallery";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import TabCard from "./TabCard";


const Home = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [tabValue, setTabValue] = useState("all");
  const [products,setProduct] = useState([]);


  const handleSelect = (index) => {
    setTabIndex(index)
    if (index === 0) {
      setTabValue("all")
    }
    else if (index === 1) {
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


  useEffect(()=>{
    fetch(`https://the-toy-universe-server.vercel.app/getJobByCategory/${tabValue}`)
    .then(res=> res.json())
    .then(data=> {
      setProduct(data)
    })
  },[tabValue])
  

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
        <h2 className="text-4xl my-10 font-bold text-center">
          Shop by category
        </h2>
        <hr className="border-y-2 w-52 mb-10 mx-auto border-[#fdc600]" />
        <div className="text-center">
          <Tabs
            selectedIndex={tabIndex}
            onSelect={(index) => handleSelect(index)}
          >
            <TabList>
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
          <div className="grid  lg:grid-cols-4 my-10 gap-6 mx-auto">
            {
                products.map(product =><TabCard key={product._id} product={product}></TabCard>)
            }
          </div>
        </div>
      </div>
      {/* Shop by category end */}
      
    </div>
  );
};

export default Home;
