"use client";
import React, { useEffect, useState } from "react";
import Heading from "./ui/Heading";
import Image from "next/image";
import { baseUrl } from "@/baseurl";
import axios from "axios";

const OurMembers = () => {
  const [members, setMembers] = useState([]);
  const getAllMembers = async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await axios.get(`${baseUrl}/member/getAll`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setMembers(res?.data?.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getAllMembers();
  }, []);
  return (
    <div className="px-[5%] my-[4rem]">
      <Heading label={"Expert"} name={"Our Members"} />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-[2rem]">
        {members?.map((item) => {
          return (
            <div className="shadow">
              <Image
                src={item?.image}
                width={400}
                height={400}
                alt="nwq"
              />
              <div className="p-4">
                <p className="text-lg font-bold">{item?.name}</p>
                <p>{item?.experience}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurMembers;
