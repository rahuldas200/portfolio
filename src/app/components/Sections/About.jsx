import React from 'react'
import { FaRegBuilding } from "react-icons/fa";

const About = () => {


  return (
    <div className='text-black flex flex-col gap-7'>
      <div className='flex flex-col gap-2'>
        <div className='flex gap-5 items-center '>
          <h1 className='text-3xl font-semibold'>About</h1>
          <div className='h-1 w-[30%] bg-blue-600 rounded-md mt-1'></div>
        </div>
        <p className='text-sm font-medium opacity-70'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem rem temporibus voluptate suscipit iure unde dolor porro! Doloremque omnis 
          quisquam, quam, placeat praesentium odio quis obcaecati, deserunt nostrum quos vitae quod vel aliquid natus!
           Cumque veritatis pariatur deserunt, nostrum soluta vero nemo, vel, tempora aliquam blanditiis voluptatem odit quis ex.
        </p>
      </div>

      <div>

        <div>
          <div className='flex items-center gap-5'>
            <h1 className='text-3xl font-semibold'>Education</h1>
            <div className='h-1 w-[30%] bg-blue-600 rounded-md mt-1'></div>
          </div>
          <div className=' mt-3 p-5 bg-[#d0cdcd] rounded-lg'>
            <div className='flex items-center gap-3'>
              <div className='w-16 h-16 rounded-md flex justify-center items-center bg-white'>
                <FaRegBuilding className='text-3xl'/>
              </div>
              <div className='flex gap-2 justify-between w-full '>
                <div>
                  <h1 className='text-lg font-medium'>B.Tech</h1>
                  <h3 className='text-sm opacity-70 font-medium'>Netaji Subhas Engineering College (MAKAUT)</h3>
                  <p className='text-sm opacity-70 font-medium'>Computer science and Engineering</p>
                </div>
                <div>
                  <p className='text-xs '>CGPA - 8.32 </p>
                </div>
              </div>
            </div>
          </div>

          <div className=' mt-3 p-5 bg-[#d0cdcd] rounded-lg'>
            <div className='flex items-center gap-3'>
              <div className='w-16 h-16 rounded-md flex justify-center items-center bg-white'>
                <FaRegBuilding className='text-3xl'/>
              </div>
              <div className='flex gap-2 justify-between w-full '>
                <div>
                  <h1 className='text-lg font-medium'>Diploma</h1>
                  <h3 className='text-sm opacity-70 font-medium'>Siliguri Government polytechnic</h3>
                  <p className='text-sm opacity-70 font-medium'>Computer science and Technolodgy</p>
                </div>
                <div>
                  <p className='text-xs '>CGPA - 7.7 </p>
                </div>
              </div>
            </div>
          </div>

        </div>


      </div>
    </div>
  )
}

export default About
