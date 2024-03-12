import React, { useState } from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { GoProjectRoadmap } from "react-icons/go";
import { TiContacts } from "react-icons/ti";
import { FaRegUser } from "react-icons/fa";


const Sections = ({setsection,section}) => {

    const sectionsData = [
        {
          "icon": <FaRegUser/>,
          "label": "About",
          "onClick": () => setsection('About')
        },
        {
          "icon": <FaRegFileAlt/>,
          "label": "Skills",
          "onClick": () => setsection('Skills')
        },
        {
          "icon": <HiOutlineOfficeBuilding/>,
          "label": "Work",
          "onClick": () => setsection('Work')
        },
        {
          "icon": <GoProjectRoadmap/>,
          "label": "Project",
          "onClick": () => setsection('Project')
        },
        {
          "icon": <TiContacts/>,
          "label": "Contact",
          "onClick": () => setsection('Contact')
        }
      ];
      
    
  return (
    <div className='text-black flex flex-col gap-5 py-5 px-5 rounded-lg items-center'>
       {
        sectionsData.map( (element,index) => (
            <div key={index} onClick={element.onClick} className={`p-3 cursor-pointer flex flex-col items-center gap-1 ${section === element.label ?"bg-blue-700 text-white":"bg-[#d0cdcd]"}  rounded-lg w-full`}>
                {element.icon}
                <p className='text-xs font-semibold'>{element.label}</p>
            </div>
        ))
       }
    </div>
  )
}

export default Sections
