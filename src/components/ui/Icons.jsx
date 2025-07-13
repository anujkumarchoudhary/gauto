// components/Icons.js
import React from 'react';
import { MdPhone, MdOutlineShoppingCart,MdSettings,MdHome,MdKeyboardArrowRight      } from "react-icons/md";
import { FaUser, FaGlobe, FaSignInAlt,FaCar } from "react-icons/fa";
import { IoSearch,IoSpeedometerSharp,IoEyeSharp   } from "react-icons/io5";
import { IoIosChatboxes } from "react-icons/io";

const iconMap = {
  phone: MdPhone,
  user: FaUser,
  login: FaSignInAlt,
  globe: FaGlobe,
  search:IoSearch ,
  cart:MdOutlineShoppingCart ,
  car:FaCar,
  setting:MdSettings ,
  meter:IoSpeedometerSharp ,
  view:IoEyeSharp ,
  chat:IoIosChatboxes,
  home:MdHome ,
  arrowRight:MdKeyboardArrowRight 

};

const Icons = ({ name, size = 18, color = "inherit", className = "" }) => {
  const IconComponent = iconMap[name];
  if (!IconComponent) return null;

  return <IconComponent size={size} color={color} className={className} />;
};

export default Icons;
