"use client";
import React, { useEffect, useState } from "react";
import Heading from "./ui/Heading";
import Image from "next/image";
import Icons from "./ui/Icons";
import axios from "axios";
import { baseUrl } from "@/baseurl";

const OurBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const getAllBlogs = async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await axios.get(`${baseUrl}/blog/getAll`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setBlogs(res?.data?.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getAllBlogs();
  }, []);

  const transformDate = (str) => {
    const date = new Date(str);
    return date.toLocaleDateString();
  };
  return (
    <div className="px-[5%] py-[4rem] bg-slate-50">
      <Heading label={"Latest"} name={"Our blog"} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-[2rem]">
        {blogs?.map((item) => {
          return (
            <div className="shadow">
              <Image src={item?.image} width={400} height={400} />
              <div className="p-[1rem] divide-y-1 space-y-4">
                <p className="text-lg font-bold pb-2">{item?.title}</p>
                <section className="flex justify-between ">
                  <p>{transformDate(item?.createdAt)}</p>
                  <div className="flex justify-between gap-4">
                    <p className="flex gap-1 my-auto">
                      <Icons
                        color="#EC3323"
                        size={18}
                        className="my-auto"
                        name={"view"}
                      />
                      {item?.views ?? 0}
                    </p>
                    <p className="flex gap-1 my-auto">
                      <Icons
                        color="#EC3323"
                        size={18}
                        className="my-auto"
                        name={"chat"}
                      />{" "}
                      {item?.comment ?? 0}
                    </p>
                  </div>
                </section>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurBlog;
