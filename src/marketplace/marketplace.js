import React, { useState } from "react";
import Line from "../icons/Line.svg";
import ExportIcon from "../icons/export-icon.svg";
import SearchIcon from "../icons/search-icon.svg";
import SortIcon from "../icons/sort-icon.svg";
import FilterIcon from "../icons/filter-icon.svg";
import ColumnIcon from "../icons/column-icon.svg";
import CalendarIcon from "../icons/calendar-icon.svg";
import MoreIcon from "../icons/more-btn-icon.svg";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import AdvanceFilter from "../advancedFilter/advancedFilter";

function Marketplace({ listings }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // Fallback data used when no listings prop is provided
  const defaultListings = [
    {
      id: 3,
      seller: "sdvfa vfv ydfigwe",
      price: "₦1,000",
      location: "Egbeda",
      sellingMode: "P. Protection, D. Contact",
      title: "Used iPhone 12",
      date: "12th Oct. 2025",
      status: "Pending",
    },
    {
      id: 556,
      seller: "asdv sf",
      price: "₦1,000",
      location: "Egbeda",
      sellingMode: "P. Protection, D. Contact",
      title: "New Fan Bosch",
      date: "12th Oct. 2025",
      status: "Pending",
    },
    {
      id: 88,
      seller: "Jude ehstnzhd",
      price: "₦1,000",
      location: "Egbeda",
      sellingMode: "Payment Protection",
      title: "Fairly Used Phone",
      date: "12th Oct. 2025",
      status: "Pending",
    },
    {
      id: 89,
      seller: "v svs<v",
      price: "₦1,000",
      location: "Egbeda",
      sellingMode: "P. Protection, D. Contact",
      title: "Car Tyres",
      date: "12th Oct. 2025",
      status: "Pending",
    },
    {
      id: 8,
      seller: "v svs<v",
      price: "₦1,000",
      location: "Egbeda",
      sellingMode: "Direct Contact",
      title: "Children’s Cloth",
      date: "12th Oct. 2025",
      status: "Pending",
    },
    {
      id: 9,
      seller: "reahbrg",
      price: "₦1,000",
      location: "Egbeda",
      sellingMode: "P. Protection, D. Contact",
      title: "Used Curtains",
      date: "12th Oct. 2025",
      status: "Pending",
    },
    {
      id: 97,
      seller: "estdgn h",
      price: "₦1,000",
      location: "Egbeda",
      sellingMode: "Payment Protection",
      title: "Used Fridge",
      date: "12th Oct. 2025",
      status: "Pending",
    },
    {
      id: 4,
      seller: "stghgfj",
      price: "₦1,000",
      location: "Egbeda",
      sellingMode: "Payment Protection",
      title: "New Freezer",
      date: "12th Oct. 2025",
      status: "Pending",
    },
    {
      id: 76,
      seller: "srtgfx",
      price: "₦1,000",
      location: "Egbeda",
      sellingMode: "Payment Protection",
      title: "New iPhone XR",
      date: "12th Oct. 2025",
      status: "Pending",
    },
    {
      id: 78,
      seller: "sdtbrgf",
      price: "₦1,000",
      location: "Egbeda",
      sellingMode: "Direct Contact",
      title: "New Watch",
      date: "12th Oct. 2025",
      status: "Pending",
    },
  ];

  // Use provided listings prop if available, otherwise fallback to defaultListings
  const data = Array.isArray(listings) && listings.length ? listings : defaultListings;

  // Calculate pagination
  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const currentItems = data.slice(startIndex, endIndex);

  // Handlers
  const goToPage = (page) => setCurrentPage(page);
  const goToFirst = () => setCurrentPage(1);
  const goToLast = () => setCurrentPage(totalPages);
  const goToNext = () => setCurrentPage((p) => Math.min(p + 1, totalPages));
  const goToPrev = () => setCurrentPage((p) => Math.max(p - 1, 1));

  return (
    <div className="flex flex-col w-full py-[10px]">
      <div className="flex justify-between px-4">
        <h2 className="text-lg font-semibold text-[#1D1E20]">Marketplace</h2>
        <div className="flex gap-1 cursor-pointer">
          <img
            src={ExportIcon}
            alt="back-arrow"
            className="w-[20px] h-[20px] ml-2"
          />
          <p className="text-xs font-medium text-[#1D1E20] mt-1">Export</p>
        </div>
      </div>
      <div className="flex flex-col justify-center w-[1030px] h-100vh ml-4 mr-4 mt-4 bg-[#FFFFFF] border border-[#EAECF2] rounded-[4px] pl-4">
        <div className="flex flex-col pt-6 pb-4">
          <h2 className="text-lg font-semibold text-[#1D1E20]">Overview</h2>
          <div className="flex justify-between pr-4">
            <div className="flex gap-3 py-4">
              <img src={Line} alt="back-arrow" className=" h-[40px]" />
              <div className="flex flex-col gap-1">
                <p className="text-xs font-medium text-[#757F8C]">
                  Total created
                </p>
                <p className="text-xs font-medium text-[#1D1E20]">107</p>
              </div>
            </div>
            <div className="flex gap-3 py-4">
              <img src={Line} alt="back-arrow" className=" h-[40px]" />
              <div className="flex flex-col gap-1">
                <p className="text-xs font-medium text-[#757F8C]">
                  Total active
                </p>
                <p className="text-xs font-medium text-[#1D1E20]">107</p>
              </div>
            </div>
            <div className="flex gap-3 py-4">
              <img src={Line} alt="back-arrow" className=" h-[40px]" />
              <div className="flex flex-col gap-1">
                <p className="text-xs font-medium text-[#757F8C]">
                  Total sold with Payment Protection
                </p>
                <p className="text-xs font-medium text-[#1D1E20]">107</p>
              </div>
            </div>
            <div className="flex gap-3 py-4">
              <img src={Line} alt="back-arrow" className=" h-[40px]" />
              <div className="flex flex-col gap-1">
                <p className="text-xs font-medium text-[#757F8C]">
                  Total sold w/o Payment Protection
                </p>
                <p className="text-xs font-medium text-[#1D1E20]">107</p>
              </div>
            </div>
          </div>
          <hr className="bg-[#ECEDF2] w-full h-[1px] my-3" />
        </div>
        <div className="flex justify-between py-4">
          <div className="flex w-[250px] h-[30px] rounded-[8px] bg-[#FFFFFF] px-[8px] border border-[#EAECF2]">
            <img
              src={SearchIcon}
              alt="back-arrow"
              className="w-[12px] h-[12px] mt-[12px] "
            />
            <input
              className="w-full bg-[#FFFFFF] rounded-[8px] placeholder:text-gray-500 placeholder:text-xs placeholder:pl-[8px]"
              placeholder="search assets"
              type="text"
              name="search"
            />
          </div>
          <div className="flex gap-2">
            <div className="flex gap-1 cursor-pointe items-center">
              <p className="text-xs font-semibold text-[#1D1E20] items-center">
                Reset
              </p>
            </div>
            <div className="flex gap-1 cursor-pointe items-center">
              <img
                src={SortIcon}
                alt="back-arrow"
                className="w-[15px] h-[15px] ml-2"
              />
              <p className="text-xs font-semibold text-[#1D1E20]">Sort</p>
            </div>
            <div className="flex gap-1 cursor-pointer items-center">
              <img
                src={FilterIcon}
                alt="back-arrow"
                className="w-[15px] h-[15px] ml-2"
              />
              <p className="text-xs font-semibold text-[#1D1E20]">
                Advanced Filter
              </p>
            </div>
            <div className="flex gap-1 cursor-pointer items-center">
              <img
                src={ColumnIcon}
                alt="back-arrow"
                className="w-[15px] h-[15px] ml-2"
              />
              <p className="text-xs font-semibold text-[#1D1E20]">
                Select Columns
              </p>
            </div>
            <span
              onClick={() => setIsCalendarOpen(!isCalendarOpen)}
              className="flex justify-center items-center w-[60px] h-[30px] border border-[#EAECF2] rounded-[8px] gap-2 mr-4 cursor-pointer"
            >
              <img
                src={CalendarIcon}
                alt="calendar"
                className="w-[18px] h-[18px]"
              />
              <p className="text-xs font-semibold text-[#1D1E20]">Date</p>
            </span>

            {isCalendarOpen && (
              <div className="absolute top-[35px] z-50">
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => {
                    setSelectedDate(date);
                    setIsCalendarOpen(false);
                    console.log("Selected date:", date);
                  }}
                  inline
                  onClickOutside={() => setIsCalendarOpen(false)}
                />
              </div>
            )}
          </div>
        </div>

        <AdvanceFilter />

        <div className="w-[1000px] mx-auto bg-white rounded-lg p-4">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-[#757F8C] text-sm font-medium">
                <th className="py-3 px-3">
                  <input type="checkbox" className="accent-[#1E3A8A]" />
                </th>
                <th>Ad ID</th>
                <th>Seller Name</th>
                <th>Asking Price</th>
                <th>Item Location</th>
                <th>Selling Mode</th>
                <th>Ad Title</th>
                <th>Creation Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {currentItems.map((item) => (
                <tr
                  key={item.id}
                  className="text-[#1D1E20] text-xs font-medium hover:bg-gray-50 transition-all duration-200"
                >
                  <td className="py-3 px-2">
                    <input type="checkbox" className="accent-[#1E3A8A]" />
                  </td>
                  <td>{item.id}</td>
                  <td>{item.seller}</td>
                  <td>{item.price}</td>
                  <td>{item.location}</td>
                  <td>{item.sellingMode}</td>
                  <td>{item.title}</td>
                  <td>{item.date}</td>
                  <td>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                      <span className="text-[#111827]">{item.status}</span>
                    </div>
                  </td>
                  <td>
                    <button className="border border-gray-300 text-[10px] font-medium text-[#1D1E20] px-3 py-1 rounded-md flex items-center gap-2">
                      <img
                        src={MoreIcon}
                        alt="more"
                        className="w-[14px] h-[14px]"
                      />
                      MORE
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex justify-end mt-4 px-2 text-sm text-[#757F8C]">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-[#3D464D] mr-2">Items per page</span>
              <select
                value={itemsPerPage}
                onChange={(e) => {
                  setItemsPerPage(Number(e.target.value));
                  setCurrentPage(1);
                }}
                className="border border-gray-300 rounded-md px-2 py-1 text-[#6D747A] focus:outline-none"
              >
                {[1000, 20, 50, 100].map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </div>

            <div className="text-xs font-semibold text-[#757F8C] my-auto mx-10">
              {startIndex + 1} - {endIndex} of {50}
            </div>

            <div className="flex justify-end gap-3 text-[#1E3A8A] font-medium my-auto">
              <button
                onClick={goToFirst}
                // disabled={currentPage === 1}
                className="text-xs font-semibold text-[#757F8C]"
              >
                First
              </button>
              <button
                onClick={goToPrev}
                // disabled={currentPage === 1}
                className="text-xs font-semibold text-[#757F8C]"
              >
                &lt;
              </button>
              <button
                onClick={goToNext}
                // disabled={currentPage === totalPages}
                className="text-xs font-semibold text-[#757F8C] disabled:text-gray-300"
              >
                &gt;
              </button>
              <button
                onClick={goToLast}
                // disabled={currentPage === totalPages}
                className="text-xs font-semibold text-[#757F8C] disabled:text-gray-300"
              >
                Last
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Marketplace;
