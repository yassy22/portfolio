import React from "react";
import HeroAbout from "@/app/components/sections/about/HeroAbout";
import Nav from "@/app/components/sections/Nav";
import WhatIDo from "@/app/components/sections/about/WhatIDo";
import QAndA from "@/app/components/sections/about/Q&A"; 

function About() {
  return (
    <div>
      <Nav />
      <HeroAbout />
      <WhatIDo />
      <QAndA />

    </div>
  );
}

export default About;
