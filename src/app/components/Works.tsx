import React from "react";
import { NewYork } from "../fonts/newyork";
import ScrollWorks from "./sections/ScrollWorks";
import WorksMobile from "./sections/WorksMobile";

function Works() {
  return (
    <section className=" mx-4 flex flex-col justify-center items-center pt-40 ">
      <h2
        className={`${NewYork.className} font-newYork text-[50px] lg:text-[125px] text-center`}
      >
        Selected Projects
      </h2>
      <p className="sm:mx-[130px] text-[14px] lg:text-[16px] lg:w-[600px] lg:pl-10 text-center">
        Here is a selection of my school and personal projects. Each combines
        creativity and technical skill, showcasing my passion creating.
      </p>
      <div className="hidden lg:block">
        <ScrollWorks />
      </div>
      <div className="block lg:hidden">
        <WorksMobile />
      </div>
    </section>
  );
}

export default Works;
