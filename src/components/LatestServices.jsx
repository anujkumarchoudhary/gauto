"use client";
import React, { useEffect, useState } from "react";
import Heading from "./ui/Heading";
import Card from "./ui/Card";
import axios from "axios";
import { baseUrl } from "@/baseurl";
const LatestServices = () => {
  const [services, setServices] = useState([]);
  const getAllServices = async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await axios.get(`${baseUrl}/service/getAll`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setServices(res?.data?.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getAllServices();
  }, []);
  return (
    <div className="bg-[#FBFBFD] px-[5%] py-[3rem]">
      <Heading label={"See Our"} name={"Latest Services"} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {services?.map((item, idx) => {
          return (
            <div className="bg-white shadow p-6">
              <Card
                image={item?.image}
                label={`0${idx + 1}`}
                name={item?.name}
                description={item?.description}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LatestServices;
