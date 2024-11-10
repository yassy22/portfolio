"use client";
import React, { useState, useEffect } from "react";

import PreLoading from "../PreLoading";
import Nav from "../sections/Nav";
import InspireMe from "../InspireMe";
import Gallerij from "../gallery/gallery";
import FinalYear from "../FinalYear";
import Hero from "../Hero";
import Works from "../Works";
// import { CustomCursor } from "../cursor/CustomCursor";

export default function Home() {
  const [count, setCount] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev === 0) {
          clearInterval(timer);
          return 0;
        } else return prev - 1;
      });
    }, 500);
  }, []);

  return (
    <>
      {count > 0 ? (
        <PreLoading count={count} />
      ) : (
        <>
          <Nav />
          <main className="overflow-hidden">
            <Hero />
            <FinalYear />
            <InspireMe />
            <Gallerij />
            <Works />
          </main>
        </>
      )}
    </>
  );
}
