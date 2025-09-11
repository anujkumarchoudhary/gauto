import React from "react";
import CarCard from "./ui/CarCard";
import { HotOffersData } from "@/mockdata/HotOffersData";
import BrandTab from "./ui/BrandTab";
import FindCar from "./ui/form/FindCar";

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
  return (
    <section className="block md:flex gap-5 justify-between px-[5%] py-[4rem]">
      <div className="w-[100%] md:w-[30%] space-y-6">
        <FindCar />
        <BrandTab data={data} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {HotOffersData?.offers?.map((item) => {
          return (
            <div>
              <CarCard
                name={item?.name}
                price={item?.price}
                item={item?.details}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CarListingSection;
