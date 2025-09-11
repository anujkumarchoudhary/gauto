import React from "react";
import Heading from "../ui/Heading";
import Image from "next/image";
import image from "../../../public/assets/images/about.1044506a3d3cb06c91b2.png";
import Icons from "../ui/Icons";
const AboutUs = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-[5%] py-[4rem]">
      <div>
        <Heading
          label={"About Us"}
          name={"We are committed to provide safe Ride solutions"}
          description={
            "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudi- um lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima."
          }
        />
        <section className="flex gap-4 mt-4">
          <Icons size={45} name={"phone"} className="my-auto" color="#EC3323" />
          <div className="">
            <h2 className="text-lg font-semi-bold text-[#EC3323]">
              Need any help?
            </h2>
            <h2 className="text-xl font-bold">(431) 529 2093</h2>
          </div>
        </section>
      </div>
      <div>
        <Image src={image} width={"100%"} height={"100%"} alt="uf" />
      </div>
    </div>
  );
};

export default AboutUs;
