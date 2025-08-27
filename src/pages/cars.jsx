import CarListingSection from "@/components/CarListingSection";
import CommonBanner from "@/components/CommonBanner";
import OurBlog from "@/components/OurBlog";
import OurMembers from "@/components/OurMembers";
import Testimonial from "@/components/Testimonial";
import React from "react";



const CarListing = () => {
  return (
    <div>
      <CommonBanner title={"Car"} name={"cars"} />
      <CarListingSection />
      <Testimonial />
      <OurMembers />
      <OurBlog />
    </div>
  );
};

export default CarListing;
