import React, { useState } from "react";
import { ChevronDown, ChevronUp, Star } from "lucide-react";
import ExportIcon from "../icons/export-icon.svg";
import EyeIcon from "../icons/eye-icon.svg";
import DeliveryBoxOne from "../icons/delivery-box-one.svg";
import DeliveryBoxTwo from "../icons/delivery-box-two.svg";
import DeliveryBoxThree from "../icons/delivery-box-three.svg";
import EditIcon from "../icons/edit.svg";
import UserImage from "../images/user-image.svg";
import CallBadge from "../icons/Call-badge.svg";
import EmailBadge from "../icons/Email-badge.svg";
import UserBadge from "../icons/User-badge.svg";
import HouseBadge from "../icons/House-badge.svg";
import BuildingBadge from "../icons/Building-badge.svg";

function DeliveryDetails() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isViewsExpanded, setIsViewsExpanded] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  const packageImages = [
    DeliveryBoxOne,
    DeliveryBoxTwo,
    DeliveryBoxTwo,
    DeliveryBoxThree,
  ];

  const sellerBadges = [
    CallBadge,
    EmailBadge,
    UserBadge,
    HouseBadge,
    BuildingBadge,
  ];

  const buyerBadges = [
    CallBadge,
    EmailBadge,
    UserBadge,
    HouseBadge,
    BuildingBadge,
  ];

  return (
    <div className="w-full max-w-7xl mx-auto p-6 bg-gray-50">
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-[16px] font-semibold text-[#1D1E20]">
          Delivery Details
        </h1>
        <div className="flex gap-1 cursor-pointer">
          <img
            src={ExportIcon}
            alt="back-arrow"
            className="w-[20px] h-[20px] ml-2"
          />
          <p className="text-xs font-medium text-[#1D1E20] mt-1">Export</p>
        </div>
      </div>

      {/* Main Card */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-4">
        {/* Collapsible Header */}
        <div
          className="flex flex-col"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex justify-between items-center p-6 cursor-pointer">
            <div className="flex items-center gap-3">
              <span className="text-[12px] font-medium text-[#757F8C]">
                Sell Ad:
              </span>
              <span className="text-[12px] font-medium text-[#1D1E20]">
                AD-1258
              </span>
              <span className="flex items-center gap-1 px-2 py-1 text-[12px] font-medium text-[#1D1E20] rounded-full">
                <span className="w-2 h-2 bg-[#F97316] rounded-full"></span>
                Active
              </span>
            </div>
            {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </div>
          <hr className="bg-[#ECEDF2] w-full h-[1px] mb-4" />
        </div>

        {isExpanded && (
          <div className="px-6 pb-6">
            <div className="grid grid-cols-3 gap-6">
              {/* Left Column - Product Images */}
              <div className="border border-[#EAECF2] rounded-xl px-3 pt-2 pb-10 space-y-4">
                <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-lg border border-gray-200">
                  <img
                    src={EyeIcon}
                    alt="back-arrow"
                    className="w-[15px] h-[15px]"
                  />
                  <span className="text-xs font-medium text-[#2D2D2D]">
                    25 Views
                  </span>
                </div>

                <hr className="bg-[#ECEDF2] w-full h-[1px] my-3" />

                <div className="bg-gray-50 rounded-lg p-6 flex items-center justify-center">
                  <img
                    src={packageImages[selectedImage]}
                    alt="Package"
                    className="w-full h-64 object-contain"
                  />
                </div>

                <div className="flex gap-3">
                  {packageImages.map((img, index) => (
                    <div
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`w-20 h-20 rounded-lg border-2 cursor-pointer overflow-hidden ${
                        selectedImage === index
                          ? "border-blue-500"
                          : "border-gray-200"
                      }`}
                    >
                      <img
                        src={img}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Middle Column - Pickup & Delivery Details */}
              <div className="border border-[#EAECF2] rounded-xl px-3 pt-2 pb-10 space-y-4">
                <h3 className="text-[14px] font-semibold text-[#757F8C] mb-4">
                  Pick up & Delivery Details
                </h3>

                <hr className="bg-[#ECEDF2] w-full h-[1px] my-3" />

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-[13px] text-[#757F8C] font-normal">
                      Created at
                    </span>
                    <span className="text-[14px] font-medium text-[#1D1E20]">
                      25th Aug 2025
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[13px] text-[#757F8C] font-normal">
                      Ad Expiry date
                    </span>
                    <span className="text-[14px] font-medium text-[#1D1E20]">
                      25th Aug 2027
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[13px] text-[#757F8C] font-normal">
                      Pickup Type
                    </span>
                    <span className="text-[14px] font-medium text-[#757F8C]">
                      From Sender's location
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[13px] text-[#757F8C] font-normal">
                      Delivery Type
                    </span>
                    <span className="text-[14px] font-medium text-[#757F8C]">
                      PP, Direct Contact
                    </span>
                  </div>
                </div>

                <hr className="bg-[#ECEDF2] w-full h-[1px] my-3" />

                <div className="mt-6 p-4 bg-gray-50 rounded-lg relative">
                  <div className="flex items-center gap-2 mb-3">
                    <input type="radio" readOnly className="w-4 h-4" />
                    <span className="text-[12px] font-semibold text-[#757F8C]">
                      Pick up Details:
                    </span>
                  </div>
                  <div className="space-y-2 text-[12px] font-medium text-[#757F8C]">
                    <div>
                      <span className="font-medium">Name:</span> Adebayo Ojoba
                    </div>
                    <div>
                      <span className="font-medium">Address:</span> 24 AKonwonjo
                      Road, Egbeda, Alimoso
                    </div>
                    <div>
                      <span className="font-medium">Phone Number:</span>{" "}
                      +2348037456808
                    </div>
                  </div>
                </div>

                <hr className="bg-[#ECEDF2] w-full h-[1px] my-3" />
                <div className="flex justify-self-end">
                  <img
                    src={EditIcon}
                    alt="back-arrow"
                    className="w-[20px] h-[20px] ml-2 cursor-pointer"
                  />
                </div>
              </div>

              {/* Right Column - Package Details */}
              <div className="border border-[#EAECF2] rounded-xl px-3 pt-2 pb-10 space-y-4">
                <h3 className="text-[14px] font-semibold text-[#757F8C] mb-4">
                  Package Details
                </h3>

                <hr className="bg-[#ECEDF2] w-full h-[1px] my-3" />

                <div className="space-y-3 relative">
                  <div className="flex justify-between">
                    <span className="text-[13px] text-[#757F8C] font-normal">
                      Title
                    </span>
                    <span className="text-[14px] font-medium text-[#1D1E20]">
                      New Samsung Galaxy S10
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[13px] text-[#757F8C] font-normal">
                      Category
                    </span>
                    <span className="text-[14px] font-medium text-[#1D1E20]">
                      Electronics
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[13px] text-[#757F8C] font-normal">
                      Product category
                    </span>
                    <span className="text-[14px] font-medium text-[#1D1E20] text-right">
                      Multi Category
                      <br />
                      (Petroleum/
                      <br />
                      Liquids/Chemicals/
                      <br />
                      Agricultural Produce)
                    </span>
                  </div>
                  <hr className="bg-[#ECEDF2] w-full h-[1px] my-3" />
                  <div className="flex justify-between">
                    <span className="text-[13px] text-[#757F8C] font-normal">
                      Package Weight
                    </span>
                    <span className="text-[14px] font-medium text-[#1D1E20]">
                      5kg
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[13px] text-[#757F8C] font-normal">
                      Monetary Worth of Package
                    </span>
                    <span className="text-[14px] font-medium text-[#1D1E20]">
                      60,000
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[13px] text-[#757F8C] font-normal">
                      Pickup preference
                    </span>
                    <span className="text-[14px] font-medium text-[#1D1E20]">
                      No Vehicle
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[13px] text-[#757F8C] font-normal">
                      Delivery Fee Invoice Recipient
                    </span>
                    <span className="text-[14px] font-medium text-[#1D1E20]">
                      Sender
                    </span>
                  </div>
                </div>
                <hr className="bg-[#ECEDF2] w-full h-[1px] my-3" />
                <div className="flex justify-self-end">
                  <img
                    src={EditIcon}
                    alt="back-arrow"
                    className="w-[20px] h-[20px] ml-2 cursor-pointer"
                  />
                </div>
              </div>
            </div>

            <hr className="bg-[#ECEDF2] w-full h-[1px] mt-6" />

            <div className="flex justify-between gap-6 mt-6">
              {/* Seller */}
              <div className="p-4 bg-gray-50 border border-[#EAECF2] rounded-xl w-[350px]">
                <h4 className="text-sm font-semibold text-[#757F8C] mb-4">
                  Seller
                </h4>
                <hr className="bg-[#ECEDF2] w-full h-[1px] my-3" />
                <div className="flex items-start gap-4">
                  <img
                    src={UserImage}
                    alt="Seller"
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h5 className="text-sm font-semibold text-gray-900">
                        Bright Azu - Sender
                      </h5>
                    </div>
                    <div className="flex items-center gap-1 mb-3">
                      {[1, 2, 3, 4].map((star) => (
                        <Star
                          key={star}
                          size={14}
                          fill="#FFA500"
                          stroke="#FFA500"
                        />
                      ))}
                      <Star size={14} fill="#D1D5DB" stroke="#D1D5DB" />
                      <span className="text-sm font-normal text-[#1D1E20]">
                        4.6
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      {sellerBadges.map((badge, index) => (
                        <img
                          key={index}
                          src={badge}
                          alt={`Seller badge ${index + 1}`}
                          className="w-[20px] h-[20px] object-contain"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex mt-4 pt-4">
                  <h6 className="text-sm font-semibold text-gray-700 mb-2">
                    Dispatch Details
                  </h6>
                  <hr className="bg-[#ECEDF2] w-[150px] h-[1px] mt-3 ml-2" />
                </div>
              </div>

              {/* Buyer */}
              <div className="p-4 bg-gray-50 border border-[#EAECF2] rounded-xl w-[350px]">
                <h4 className="text-sm font-semibold text-[#757F8C] mb-4">
                  Buyer
                </h4>
                <hr className="bg-[#ECEDF2] w-full h-[1px] my-3" />
                <div className="flex items-start gap-4">
                  <img
                    src={UserImage}
                    alt="Buyer"
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h5 className="text-sm font-semibold text-gray-900">
                        Bright Azu - Receiver
                      </h5>
                    </div>
                    <div className="flex items-center gap-1 mb-3">
                      {[1, 2, 3, 4].map((star) => (
                        <Star
                          key={star}
                          size={14}
                          fill="#FFA500"
                          stroke="#FFA500"
                        />
                      ))}
                      <Star size={14} fill="#D1D5DB" stroke="#D1D5DB" />
                      <span className="text-sm font-normal text-[#1D1E20]">
                        4.6
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      {sellerBadges.map((badge, index) => (
                        <img
                          key={index}
                          src={badge}
                          alt={`Buyer badge ${index + 1}`}
                          className="w-[20px] h-[20px] object-contain"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex mt-4 pt-4">
                  <h6 className="text-sm font-semibold text-gray-700 mb-2">
                    Dispatch Details
                  </h6>
                  <hr className="bg-[#ECEDF2] w-[150px] h-[1px] mt-3 ml-2" />
                </div>
                <div className="flex justify-between">
                  <span className="text-[13px] text-[#757F8C] font-normal">
                    Purchase Date
                  </span>
                  <span className="text-[14px] font-medium text-[#1D1E20]">
                    25th Aug 2025
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[13px] text-[#757F8C] font-normal">
                    Purchase Mode
                  </span>
                  <span className="text-[14px] font-medium text-[#1D1E20]">
                    Purchase Protection
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[13px] text-[#757F8C] font-normal">
                    Linked Delivery Job
                  </span>
                  <span className="text-[14px] font-medium text-[#1D1E20]">
                    PP-5698
                  </span>
                </div>
              </div>

              {/* Third Div */}
              <div className="p-4 bg-gray-50 border border-[#EAECF2] rounded-xl w-[350px]"></div>
            </div>
          </div>
        )}
      </div>

      {/* Views Section */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div
          className="flex justify-between items-center p-6 cursor-pointer"
          onClick={() => setIsViewsExpanded(!isViewsExpanded)}
        >
          <h3 className="text-[12px] font-medium text-[#757F8C]">Views</h3>
          {isViewsExpanded ? (
            <ChevronUp size={20} />
          ) : (
            <ChevronDown size={20} />
          )}
        </div>
        {isViewsExpanded && (
          <div className="px-6 pb-6">
            <p className="text-sm text-gray-600">
              Views content will be displayed here...
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default DeliveryDetails;
