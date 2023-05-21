import React from "react";
import Menubar from "../../Component/Menubar/Menubar";
import { Outlet } from "react-router";
import { useNavigation } from "react-router-dom";
import Footer from "../../Component/Footer/Footer";
import { MagnifyingGlass } from "react-loader-spinner";
const style = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

const Main = () => {
  const navigation = useNavigation();
  return (
    <div className="max-w-[1300px] px-2 mx-auto">
      <Menubar></Menubar>
      <div style={style}>
        {navigation.state === "loading" && (
          <MagnifyingGlass
            visible={true}
            height="80"
            width="80"
            ariaLabel="MagnifyingGlass-loading"
            wrapperStyle={{}}
            wrapperClass="MagnifyingGlass-wrapper"
            glassColor="#c0efff"
            color="#e15b64"
          />
        )}
      </div>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
