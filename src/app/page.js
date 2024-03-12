"use client";
import Image from "next/image";
import Information from "./components/Information";
import Sections from "./components/Sections";
import About from "./components/Sections/About";
import Resume from "./components/Sections/Resume";
import Work from "./components/Sections/Work";
import Project from "./components/Sections/Project";
import { useState } from "react";



export default function Home() {

  const [section, setsection] = useState("Skills");

  return (
    <main className=" w-screen h-screen box-border ">
      <div className="w-11/12 mx-auto flex mt-10 gap-5 mb-10">
        <div className="w-[20%]  bg-white rounded-lg">
           <Information/>
        </div>
        <div className="w-[70%]  bg-white rounded-lg p-5">
          {
            section === "About" && (
              <About/>
            )
          }
          {
            section === "Skills" && (
              <Resume/>
            )
          }
           {
            section === "About" && (
              <Work/>
            )
          }
          {
            section === "Resume" && (
              <Project/>
            )
          }
        </div>
        <div className="w-[8%]  bg-white rounded-lg">
          <Sections setsection = {setsection} section={section}/>
        </div>
      </div>    
    </main>
  );
}
