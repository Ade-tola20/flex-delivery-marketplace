import React from 'react';

import FlexLogo from "../images/flex-delivery-logo.svg";
import BackArrow from "../icons/arrow-left-to-line.svg";
import SearchIcon from "../icons/search-icon.svg";
import ArrowIcon from "../icons/arrow-down.svg";
import Line from "../icons/Line.svg";
import NotificiationIcon from "../icons/notification-bing.svg";
import Avatars from '../icons/Avatars.svg';
import UserIcon from '../icons/user-icon.svg';

function Navbar() {
  return (
    <div className="flex justify-between w-full h-[50px] bg-[#ffffff] border border-[#EAECF2] py-[10px]">
      <div className="flex items-center">
        <img src={FlexLogo} alt="Logo" className="w-[160px] h-[20px]" />
        <img src={BackArrow} alt="back-arrow" className="w-[20px] h-[20px] cursor-pointer" />
      </div>
      <div className="flex w-[250px] h-[30px] rounded-[8px] bg-[#F9F9FA] px-[8px]">
        <img src={SearchIcon} alt="back-arrow" className="w-[15px] h-[15px] mt-[8px] " />
        <input
          className="w-full bg-[#F9F9FA] rounded-[8px] placeholder:text-gray-500 placeholder:text-sm placeholder:pl-[8px]"
          placeholder="search for anything"
          type="text"
          name="search"
        />
      </div>
      <div className="flex gap-1">
        <img src={ArrowIcon} alt="back-arrow" className="w-[20px] h-[20px]" />
        <p className="text-sm font-medium text-[#1D1E20] cursor-pointer">Quick Actions</p>
        <img src={Line} alt="back-arrow" className="w-[20px] h-[20px]" />
        <img src={NotificiationIcon} alt="back-arrow" className="w-[20px] h-[20px] cursor-pointer" />
        <img src={Line} alt="back-arrow" className="w-[20px] h-[20px]" />
        <img src={Avatars} alt="back-arrow" className="w-[140px] h-[30px] cursor-pointer" />
        <img src={Line} alt="back-arrow" className="w-[20px] h-[20px]" />
        <img src={UserIcon} alt="back-arrow" className="w-[230px] h-[30px] cursor-pointer" />
      </div>
    </div>
  );
}

export default Navbar;
