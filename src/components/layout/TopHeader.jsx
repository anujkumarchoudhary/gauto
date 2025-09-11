// components/Header.js
import React, { useState } from "react";
import Icons from "../ui/Icons";
import { HeaderData } from "@/mockdata/HeaderData";
import ImageRenderer from "../ui/ImageRenderer";
import Register from "../ui/form/Register";
import { useDispatch } from "react-redux";
const TopHeader = () => {
  const dispatch = useDispatch();
  const [openRegister, setOpenRegister] = useState(null);
  console.log(openRegister, "openRegister");

  return (
    <div>
      <div className="flex justify-center md:justify-between px-[5%] py-2 bg-[#FFFFFF] md:bg-[#020202] text-black md:text-white text-sm">
        <div className="hidden md:flex gap-6">
          {HeaderData.leftSide.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              {item.icon && <Icons name={item.icon} />}
              <span>{item.label}</span>
            </div>
          ))}
        </div>
        <div className="flex gap-6">
          {HeaderData.rightSide.map((item, i) => (
            <div
              key={i}
              onClick={() => {
                if (item?.label === "Register" || item?.label === "Login") {
                  setOpenRegister(
                    item?.label === "Register" ? "register" : "login"
                  );
                }
              }}
              className="flex items-center gap-2 cursor-pointer"
            >
              {item.icon && <Icons name={item.icon} />}
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white px-[5%] py-[1rem] flex justify-center md:justify-between">
        {HeaderData?.midHeader?.map((item, i) => (
          <div
            key={i}
            className={`flex items-center gap-4 ${
              item.icon === "phone" && "hidden md:flex bg-[#EC3323] text-white px-5"
            }`}
          >
            {item.icon ? (
              <div className="hidden md:block">
                <Icons name={item.icon} />
              </div>
            ) : item.image === "logo" ? (
              <div className="block">
                <ImageRenderer
                  name={item.image}
                  width={item.image === "logo" ? 180 : 40}
                  height={item.image === "logo" ? 180 : 40}
                />
              </div>
            ) : (
              <div className="hidden md:block">
                <ImageRenderer
                  name={item.image}
                  width={item.image === "logo" ? 180 : 40}
                  height={item.image === "logo" ? 180 : 40}
                />
              </div>
            )}

            <div className="hidden md:block">
              <h4
                className={
                  item.icon === "phone"
                    ? " text-md text-capitalize font-bold"
                    : "text-xl font-bold"
                }
              >
                {item.name}
              </h4>
              <span className="text-sm text"> {item.label}</span>
            </div>
          </div>
        ))}
      </div>
      {openRegister && (
        <Register
          isRegister={openRegister}
          handleClose={() => setOpenRegister(false)}
        />
      )}
    </div>
  );
};

export default TopHeader;
