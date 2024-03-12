
import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { FaPhone } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";



const Information = () => {

    const data = [
        {
            id:1,
            name:"Phone",
            content:7384697146,
            icon:<FaPhone className='text-blue-500'/>
        },
        {
            id:2,
            name:"Email",
            content:"rdas53300@gmail.com",
            icon:<IoIosMail className='text-green-400'/>,
        },
        {
            id:3,
            name:"Location",
            content:"Kolkata, West bengal, India",
            icon:<MdLocationPin className='text-green-500'/>,
        },
        {
            id:4,
            name:"Date of birth",
            content:"Aug 02 , 2001",
            icon:< SlCalender className='text-yellow-500'/>,
        }
    ]

  return (
    <div className='p-5 w-full flex flex-col gap-5 items-center text-black'>
      <div className='mt-16 flex flex-col items-center'>
        <h1 className='text-2xl'>Rahul Das</h1>
        <div className='py-1 px-2 bg-[#d0cdcd] rounded-md'>
            <p className='text-xs'>Full-stack developer</p>
        </div>
        <div className='flex gap-5 mt-3'>
            <div className='w-9 h-9 bg-[#d0cdcd]  rounded-md flex justify-center items-center'>
                <FaLinkedin className='text-xl text-blue-700'/>
            </div>
            <div className='w-9 h-9 bg-[#d0cdcd]  flex rounded-md justify-center items-center'>
                <FaGithub className='text-xl'/>
            </div>
            <div className='w-9 h-9 bg-[#d0cdcd]  flex rounded-md justify-center items-center'>
                <FaLinkedin className='text-xl'/>
            </div>
        </div>
      </div>
      <div  className='flex flex-col gap-2 bg-[#d0cdcd] rounded-md p-1'>
        {
            data.map( (element) => (
                <div key={element.id} className={`flex gap-2 items-center p-1.5 ${element.id === 4 ? " ": "border-b-[2px]"}  h-auto `}>
                    <div className='w-9 h-9 bg-white rounded-md flex justify-center items-center'>
                        { element.icon}
                    </div>
                    <div>
                        <p className='text-sm font-medium'>{element.name}</p>
                        <p className='text-xs opacity-65'>{element.content}</p>
                    </div>
                </div>
            ))
        }
      </div>
      <div>
        <button>
            <div className='flex gap-2 items-baseline p-2 bg-blue-600 rounded-md text-white text-sm'>
                <MdOutlineFileDownload/>
                Download resume
            </div>
        </button>
      </div>
      <div>
        <img src={''} alt="" />
      </div>
    </div>
  )
}

export default Information
