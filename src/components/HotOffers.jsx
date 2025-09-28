"use client";
import React, { useEffect, useState } from "react";
import Heading from "./ui/Heading";
import Icons from "./ui/Icons";
import Image from "next/image";
import car from "../../public/assets/images/nissan.png";
import SaleAndPurchaseButton from "./ui/SaleAndPurchaseButton";
import { HotOffersData } from "@/mockdata/HotOffersData";
import axios from "axios";
import { baseUrl } from "@/baseurl";

const HotOffers = () => {
  const [cars, setCars] = useState([]);
  const getAllCars = async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await axios.get(`${baseUrl}/car/getAll`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCars(res?.data?.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getAllCars();
  }, []);
  return (
    <div className="px-[5%] py-[4rem]">
      <Heading label={"Come with"} name={"Hot offers"} />
      <div className="block md:flex gap-2">
        {HotOffersData?.tabs?.map((item) => {
          return (
            <div className="bg-slate-100 px-5 py-1.5 my-2 cursor-pointer">
              {item}
            </div>
          );
        })}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cars?.map((item) => {
          return (
            <div className="shadow p-5 mt-[2rem] ">
              <Image src={item?.image} width={200} height={200} alt="sidf" />
              <p className="text-2xl text-center md:text-left font-bold mb-[0.5rem] mt-[2rem]">
                {item?.name}
              </p>
              <p className="text-lg text-center md:text-left font-bold ">
                ${item?.rent}.00 <span className="text-[#EC3323]">/ Day</span>
              </p>
              <div className="flex justify-center md:justify-start gap-2 my-[1rem]">
                <div className="text-sm flex">
                  <div className="flex">
                    <Icons
                      size={16}
                      name={"car"}
                      color="#EC3323"
                      className="my-auto mx-1"
                    />
                    <p className="whitespace-nowrap">Make: {item.make}</p>
                  </div>
                  <div className="flex">
                    <Icons
                      size={16}
                      name={"setting"}
                      color="#EC3323"
                      className="my-auto mx-1"
                    />
                    <p className="whitespace-nowrap">Model: {item.model}</p>
                  </div>
                  {/* <div className="flex ">
                    <Icons
                      size={16}
                      name={"meter"}
                      color="#EC3323"
                      className="my-auto mx-1"
                    />
                    <p className="whitespace-nowrap">{item.gear}</p>
                  </div> */}
                  <div className="flex ">
                    <Icons
                      size={16}
                      name={"meter"}
                      color="#EC3323"
                      className="my-auto mx-1"
                    />
                    <p className="whitespace-nowrap">{item.drive}kl/h</p>
                  </div>
                </div>
                {/* {item?.details?.map((detail, i) => (
                  <div key={i} className="text-sm flex">
                    <Icons
                      size={16}
                      name={detail?.icon}
                      color="#EC3323"
                      className="my-auto mx-1"
                    />
                    {detail.model && (
                      <p className="whitespace-nowrap">
                        {" "}
                        Model: {detail.model}
                      </p>
                    )}
                    {detail.automatic && (
                      <p className="whitespace-nowrap"> {detail.automatic}</p>
                    )}
                    {detail.mpl && (
                      <p className="whitespace-nowrap"> {detail.mpl}</p>
                    )}
                  </div>
                ))} */}
              </div>
              <SaleAndPurchaseButton />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HotOffers;
