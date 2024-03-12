import Image from 'next/image';
import React from 'react'
import GitSVG  from '../../../../public/assets/icon/Tailwind.svg'
import cpp from '../../../../public/assets/icon/Cpp.svg';
import javaScrit from "../../../../public/assets/icon/icons-javascript.svg"
import Html from "../../../../public/assets/icon/icons-html-5.svg"
import Css from "../../../../public/assets/icon/Css.svg"
import rc from "../../../../public/assets/icon/react.svg"
import tailwind from "../../../../public/assets/icon/Tailwind.svg"
import express from "../../../../public/assets/icon/Express.svg"
import mongoDb from "../../../../public/assets/icon/icons-mongodb.svg"
import MySql from "../../../../public/assets/icon/MySql.svg"
import git from "../../../../public/assets/icon/icons-github.svg"
import vs from "../../../../public/assets/icon/icons-visual-studio-code-2019.svg"
import postMan from "../../../../public/assets/icon/PostMan.svg"


const Resume = () => {

  const programmingLanguages = [
    {
      name:"C",
      image:cpp,
    },
    {
      name:"C++",
      image:cpp,
    },
    {
      name:"Java",
      image:cpp,
    },
    {
      name:"JavaScript",
      image:javaScrit,
    },
  ];

  const clientTech = [
    {
      name:"HTML5",
      image:Html,
    },
    {
      name:"Css",
      image:Css,
    },
    {
      name:"Tailwind Css",
      image:tailwind,
    },
    {
      name:"React.js",
      image:rc,
    },   
    {
      name:"Next",
      image:javaScrit,
    },
  ];

  const serverSite = [
    {
      name:"Node js",
      image:Html,
    },
    {
      name:"Express js",
      image:express,
    },
    {
      name:"MongoDb",
      image:mongoDb,
    },
    {
      name:"MySql",
      image:MySql,
    },   
  ];

  const tools = [
    {
      name:"GitHub",
      image:git,
    },
    {
      name:"Post man",
      image:vs,
    },
    {
      name:"Vs code",
      image:postMan,
    },
  ]

  return (
    <div className='text-black flex flex-col gap-3'>
      <div className='flex gap-5 items-center '>
          <h1 className='text-3xl font-semibold'>Skills</h1>
          <div className='h-1 w-[30%] bg-blue-600 rounded-md mt-1'></div>
      </div>
      <div className='flex flex-col gap-2'>
        <h1 className='text-lg font-medium opacity-85'>Programming languages</h1>

        <div className='flex gap-5'>
            {
              programmingLanguages.map( (element, index) => (
                <div className='flex flex-col items-center  p-2 bg-[#d0cdcd] rounded-md w-28 hover:scale-50'>
                  <div>
                    <Image src={element.image} className='w-10'></Image>
                  </div>
                  <p className='text-sm font-medium'>{element.name}</p>
                </div>
              ))
            }
        </div>             
      </div>

      <div className='flex flex-col gap-2'>
        <h1 className='text-lg font-medium opacity-85'>Client side Tech</h1>

        <div className='flex gap-5'>
            {
              clientTech.map( (element, index) => (
                <div className='flex flex-col items-center  p-2 bg-[#d0cdcd] rounded-md w-28 hover:scale-50'>
                  <div>
                    <Image src={element.image} className={`${element.name === "Tailwind Css" ? "mb-4": ""} w-10`}></Image>
                  </div>
                  <p className='text-sm font-medium'>{element.name}</p>
                </div>
              ))
            }
        </div>             
      </div>

      <div className='flex flex-col gap-2'>
        <h1 className='text-lg font-medium opacity-85'>Server side Tech</h1>

        <div className='flex gap-5'>
            {
              serverSite.map( (element, index) => (
                <div className='flex flex-col items-center  p-2 bg-[#d0cdcd] rounded-md w-28 hover:scale-50'>
                  <div>
                    <Image src={element.image} className='w-10'></Image>
                  </div>
                  <p className='text-sm font-medium'>{element.name}</p>
                </div>
              ))
            }
        </div>             
      </div>

      <div className='flex flex-col gap-2'>
        <h1 className='text-lg font-medium opacity-85'>Tools</h1>

        <div className='flex gap-5'>
            {
              tools.map( (element, index) => (
                <div className='flex flex-col items-center  p-2 bg-[#d0cdcd] rounded-md w-28 hover:scale-50'>
                  <div>
                    <Image src={element.image} className='w-10'></Image>
                  </div>
                  <p className='text-sm font-medium'>{element.name}</p>
                </div>
              ))
            }
        </div>             
      </div>



    </div>
  )
}

export default Resume
