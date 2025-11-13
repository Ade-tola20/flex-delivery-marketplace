import React from "react";

import CalendarIcon from "../icons/calendar-icon.svg";

function AdvanceFilter() {
  return (
    <div className="flex flex-col justify-between w-[1000px] bg-[#FBFCFE] border border-[#EAECF2] rounded-[6px] my-4">
      <h2 className="text-sm font-bold text-[#3D464D] pl-4 mt-6">
        Advanced Filter
      </h2>
      <div className="flex justify-between items-center pl-4 my-2">
        <div className="flex flex-col gap-2">
          <p className="text-[12px] font-medium text-[#3D464D]">Item Title</p>
          <select className="w-[200px] h-[30px] bg-[#ffffff] border border-[#EAECF2] rounded-[6px] px-2 text-[12px] font-medium text-[#757F8C]">
            <option>Any</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-[12px] font-medium text-[#3D464D]">Location</p>
          <select className="w-[200px] h-[30px] bg-[#ffffff] border border-[#EAECF2] rounded-[6px] px-2 text-[12px] font-medium text-[#757F8C]">
            <option>Any</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-[12px] font-medium text-[#3D464D]">
            Ad Selling Mode
          </p>
          <select className="w-[200px] h-[30px] bg-[#ffffff] border border-[#EAECF2] rounded-[6px] px-2 text-[12px] font-medium text-[#757F8C]">
            <option>Any</option>
          </select>
        </div>
        <div className="flex flex-col gap-2 mr-2">
          <p className="text-[12px] font-medium text-[#3D464D]">Status</p>
          <select className="w-[200px] h-[30px] bg-[#ffffff] border border-[#EAECF2] rounded-[6px] px-2 text-[12px] font-medium text-[#757F8C]">
            <option>Any</option>
          </select>
        </div>
      </div>
      <div className="flex justify-between items-center pl-4 my-3 mr-2">
        <div className="flex flex-col gap-2">
          <p className="text-[12px] font-medium text-[#3D464D]">Price Range</p>
          <div className="flex gap-2">
            <span className="flex justify-between w-[225px] h-[30px] bg-[#ffffff] border border-[#EAECF2] rounded-[6px]">
              <p className="text-[10px] font-medium text-[#999999] px-2 mt-1.5">
                From: Minimum Amount
              </p>
            </span>
            <span className="flex justify-between w-[225px] h-[30px] bg-[#ffffff] border border-[#EAECF2] rounded-[6px]">
              <p className="text-[10px] font-medium text-[#999999] px-2 mt-1.5">
                To: Maximum Amount
              </p>
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-[12px] font-medium text-[#3D464D]">
            Creation Date Range
          </p>
          <div className="flex gap-2">
            <span className="flex justify-between w-[225px] h-[30px] bg-[#ffffff] border border-[#EAECF2] rounded-[6px]">
              <p className="text-[10px] font-medium text-[#999999] px-2 mt-1.5">
                From: dd/mm/yyyy
              </p>
              <img
                src={CalendarIcon}
                alt="calendar"
                className="w-[18px] h-[18px] mt-1.5 mr-2"
              />
            </span>

            <span className="flex justify-between w-[225px] h-[30px] bg-[#ffffff] border border-[#EAECF2] rounded-[6px]">
              <p className="text-[10px] font-medium text-[#999999] px-2 mt-1.5">
                To: dd/mm/yyyy
              </p>
              <img
                src={CalendarIcon}
                alt="calendar"
                className="w-[18px] h-[18px] mt-1.5 mr-2"
              />
            </span>
          </div>
        </div>
      </div>
      <div className="flex pl-4 my-2 gap-1">
        <button className="w-[50px] h-[30px] rounded-[8px] border border-[#EAECF2] text-center text-[12px] font-medium text-[#3D464D]">
          Reset
        </button>
        <button className="w-[80px] h-[30px] bg-[#F97316] rounded-[8px] border border-[#EAECF2] text-center text-[12px] font-medium text-[#ffffff]">
          Apply Filter
        </button>
      </div>
    </div>
  );
}

export default AdvanceFilter;
