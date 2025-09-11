import React from "react";
import ImageRenderer from "./ui/ImageRenderer";
import image22 from "../../public/assets/images/about.1044506a3d3cb06c91b2.png";
import Image from "next/image";
import Button from "./ui/Button";
const WantToEarn = () => {
  return (
    <div className="bg-yellow-50 block md:flex justify-between px-[5%] py-[4rem]">
      <div className="w-[100%] md:w-[40%]">
        <Image src={image22} width={"100%"} height={"100%"} alt="" />
      </div>
      <div className="w-[100%] md:w-[50%] my-auto">
        <p className="text-3xl md:text-4xl font-bold leading-11 text-center ">
          Do You Want To Earn With Us? So Don't be Late.
        </p>
        <div className="flex md:block justify-center">
          <Button
            name={"BECOME A DRIVER"}
            isBorder={true}
            className={"w-fit mt-4"}
          />
        </div>
      </div>
    </div>
  );
};

export default WantToEarn;
