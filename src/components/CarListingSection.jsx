"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import BrandTab from "./ui/BrandTab";
import FindCar from "./ui/form/FindCar";
import axios from "axios";
import { baseUrl } from "@/baseurl";
import Icons from "./ui/Icons";
import SaleAndPurchaseButton from "./ui/SaleAndPurchaseButton";

const data = [
  {
    label: "All Brands",
    count: 1123,
  },
  {
    label: "Toyota",
    count: 754,
  },
  {
    label: "Nissan",
    count: 4,
  },
  {
    label: "Mercedes",
    count: 374,
  },
  {
    label: "Hyundai",
    count: 375,
  },
  {
    label: "Audi",
    count: 798,
  },
];
const CarListingSection = () => {
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
    <section className="block md:flex gap-5 justify-between px-[5%] py-[4rem]">
      <div className="w-[100%] md:w-[30%] space-y-6">
        <FindCar />
        <BrandTab data={data} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
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
              </div>
              <SaleAndPurchaseButton />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CarListingSection;
