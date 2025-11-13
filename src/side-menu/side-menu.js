import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardIcon from "../icons/sidebar-dashboard-icon.svg";
import UserIcon from "../icons/sidebar-user-icon.svg";
import Counter from "../icons/Counter.svg";
import ListingIcon from "../icons/sidebar-listing-icon.svg";
import RewardIcon from "../icons/sidebar-reward-icon.svg";
import DisputeIcon from "../icons/sidebar-dispute-icon.svg";
import TransactionIcon from "../icons/sidebar-transaction-icon.svg";
import SupportIcon from "../icons/sidebar-support-icon.svg";
import SettingsIcon from "../icons/sidebar-settings-icon.svg";
import TimerIcon from "../icons/sidebar-timer-icon.svg";
import DevTag from "../icons/dev-tag.svg";

function Sidemenu() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);
  const navigate = useNavigate();

  const goToMarketplace = () => {
    setIsOpen(false); // close dropdown
    navigate("/marketplace");
  };


  return (
    <div className="flex flex-col justify-between items-center w-[220px] h-screen bg-[#1E3A8A] border border-[#EAECF2] py-[20px] ml-[-3px] overflow-y-auto scrollbar-hide">
      <div className="flex flex-col justify-between items-center bg-[#142F7C] w-[190px] py-2 rounded-[10px] gap-4">
        <div className="flex items-center bg-[#1E3A8A] w-[170px] h-[40px] rounded-[10px] gap-4 cursor-pointer">
          <img
            src={DashboardIcon}
            alt="back-arrow"
            className="w-[20px] h-[20px] ml-2"
          />
          <p className="text-sm font-normal text-[#BDBDBD]">Dashboard</p>
        </div>
        <div className="flex items-center bg-[#1E3A8A] w-[170px] h-[40px] rounded-[10px] gap-4 cursor-pointer">
          <button class="w-full flex justify-between items-center px-4 py-2 bg-[#1E3A8A] rounded-lg">
            <span class="flex items-center gap-4">
              <img
                src={UserIcon}
                alt="back-arrow"
                className="w-[20px] h-[20px] -ml-2"
              />
              <p className="text-sm font-normal text-[#BDBDBD]">User</p>
            </span>
            <div class="flex items-center gap-1">
              <img
                src={Counter}
                alt="back-arrow"
                className="w-[20px] h-[20px]"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#BDBDBD"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </button>
        </div>
        <div className="relative">
          <div
            onClick={toggleDropdown}
            className={`flex items-center w-[170px] h-[40px] rounded-[10px] gap-4 cursor-pointer transition-all duration-200 ${
              isOpen ? "bg-[#2E4AAE]" : "bg-[#1E3A8A]"
            }`}
          >
            <button className="w-full flex justify-between items-center px-4 py-2 rounded-lg">
              <span className="flex items-center gap-4">
                <img
                  src={ListingIcon}
                  alt="listings"
                  className="w-[20px] h-[20px] -ml-2"
                />
                <p className="text-sm font-normal text-[#BDBDBD]">
                  All Listings
                </p>
              </span>
              <div className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 transform transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#BDBDBD"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </button>
          </div>

          {isOpen && (
            <ul className="absolute w-[160px] mt-2 bg-[#1E3A8A] rounded-[10px] shadow-lg overflow-hidden">
              <li className="flex justify-between items-center px-4 py-2 text-[#BDBDBD] hover:bg-[#2E4AAE] cursor-pointer text-sm">
                Delivery Jobs
                <img
                  src={Counter}
                  alt="back-arrow"
                  className="w-[20px] h-[20px]"
                />
              </li>
              <li className="flex justify-between items-center px-4 py-2 text-[#BDBDBD] hover:bg-[#2E4AAE] cursor-pointer text-sm text-center">
                Delivery Offers
              </li>
              <li
                className="flex justify-between items-center px-4 py-2 text-[#BDBDBD] hover:bg-[#2E4AAE] cursor-pointer text-sm"
                onClick={goToMarketplace}
              >
                Marketplace
                <img
                  src={Counter}
                  alt="back-arrow"
                  className="w-[20px] h-[20px]"
                />
              </li>
            </ul>
          )}
        </div>
        <div className="flex items-center bg-[#1E3A8A] w-[170px] h-[40px] rounded-[10px] gap-4 cursor-pointer">
          <img
            src={RewardIcon}
            alt="back-arrow"
            className="w-[20px] h-[20px] ml-2"
          />
          <p className="text-sm font-normal text-[#BDBDBD]">Flex Reward</p>
        </div>
        <div className="flex items-center bg-[#1E3A8A] w-[170px] h-[40px] rounded-[10px] gap-4 cursor-pointer">
          <img
            src={DisputeIcon}
            alt="back-arrow"
            className="w-[20px] h-[20px] ml-2"
          />
          <p className="text-sm font-normal text-[#BDBDBD]">Disputes</p>
        </div>
        <div className="flex items-center bg-[#1E3A8A] w-[170px] h-[40px] rounded-[10px] gap-4 cursor-pointer">
          <button class="w-full flex justify-between items-center px-4 py-2 bg-[#1E3A8A] rounded-lg">
            <span class="flex items-center gap-4">
              <img
                src={TransactionIcon}
                alt="back-arrow"
                className="w-[20px] h-[20px] -ml-2"
              />
              <p className="text-sm font-normal text-[#BDBDBD]">Transactions</p>
            </span>
            <div class="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#BDBDBD"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </button>
        </div>
        <div className="flex items-center bg-[#1E3A8A] w-[170px] h-[40px] rounded-[10px] gap-4 cursor-pointer">
          <img
            src={SupportIcon}
            alt="back-arrow"
            className="w-[20px] h-[20px] ml-2"
          />
          <p className="text-sm font-normal text-[#BDBDBD]">
            User Support Ticket
          </p>
        </div>
        <div className="flex items-center bg-[#1E3A8A] w-[170px] h-[40px] rounded-[10px] gap-4 cursor-pointer">
          <button class="w-full flex justify-between items-center px-4 py-2 bg-[#1E3A8A] rounded-lg">
            <span class="flex items-center gap-4">
              <img
                src={SettingsIcon}
                alt="back-arrow"
                className="w-[20px] h-[20px] -ml-2"
              />
              <p className="text-sm font-normal text-[#BDBDBD]">Settings</p>
            </span>
            <div class="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#BDBDBD"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </button>
        </div>
        <div className="flex items-center bg-[#1E3A8A] w-[170px] h-[40px] rounded-[10px] gap-4 cursor-pointer">
          <img
            src={TimerIcon}
            alt="back-arrow"
            className="w-[20px] h-[20px] ml-2"
          />
          <p className="text-sm font-normal text-[#BDBDBD]">Blog & Broadcast</p>
        </div>
        <div className="flex items-center bg-[#1E3A8A] w-[170px] h-[40px] rounded-[10px] gap-4 cursor-pointer">
          <img
            src={TimerIcon}
            alt="back-arrow"
            className="w-[20px] h-[20px] ml-2"
          />
          <p className="text-sm font-normal text-[#BDBDBD]">Templates</p>
        </div>
        <div className="flex items-center bg-[#1E3A8A] w-[170px] h-[40px] rounded-[10px] gap-4 cursor-pointer">
          <img
            src={TimerIcon}
            alt="back-arrow"
            className="w-[20px] h-[20px] ml-2"
          />
          <p className="text-sm font-normal text-[#BDBDBD]">Audit Logs</p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-2 my-[100px]" >
        <img src={DevTag} alt="back-arrow" className="w-[35px] h-[20px] mx-auto" />
        <p className="text-xs font-semibold text-[#ffffff] text-center">v2.0</p>
      </div>
    </div>
  );
}

export default Sidemenu;
