import React from "react";
import logo from "../../assets/images/logo.png";
import avatar from "../../assets/images/avatar/Avatar.png";

const AccountType = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="py-4 px-32 mx-auto w-full border-b border-regular flex items-center justify-between">
        <img src={logo} alt="logo" />
        <div className="flex gap-3">
          <button>
            <img src={avatar} alt="" />
          </button>
          <button className="">
            <svg
              width="49"
              height="49"
              viewBox="0 0 49 49"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.4062 31.7476L31.4062 17.7476"
                stroke="#555555"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M31.4062 31.7476L17.4062 17.7476"
                stroke="#555555"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto h-auto w-[600px] py-10">
        <h2 className="text-center text-[24px] font-poppins leading-[36px] text-regular font-bold">
          Which account would you like to use?
        </h2>
        <div className="pt-7 pb-2 border-b border-regular">
          <h4 className="text-[16px] font-poppins leading-[24px] font-semiBold text-regular">
            Recent
          </h4>
        </div>

        <div className="py-3 flex items-center justify-between mt-3 px-3 hover:bg-primary-dark">
          <div className="flex items-center flex-row gap-2 justify-center">
            <img src={avatar} alt="" />
            <div className="">
              <h4 className="text-[16px] font-inter leading-[24px] text-regular font-bold">
                Phillip Mango
              </h4>
              <h5 className="text-[14px] font-inter leading-[22px] text-[#555555] font-semiBold">
                Your personal account
              </h5>
            </div>
          </div>
          <div className="cursor-pointer">
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.34766 14.0275L10.6943 9.68086C11.2077 9.16753 11.2077 8.32753 10.6943 7.8142L6.34766 3.46753"
                stroke="#555555"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <div className="py-3 flex items-center justify-between mt-3 px-3 hover:bg-primary-dark">
          <div className="flex items-center flex-row gap-2 justify-center">
            <img src={avatar} alt="" />
            <div className="">
              <h4 className="text-[16px] font-inter leading-[24px] text-regular font-bold">
                Phillip Mango
              </h4>
              <h5 className="text-[14px] font-inter leading-[22px] text-[#555555] font-semiBold">
                Your personal account
              </h5>
            </div>
          </div>
          <div className="cursor-pointer">
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.34766 14.0275L10.6943 9.68086C11.2077 9.16753 11.2077 8.32753 10.6943 7.8142L6.34766 3.46753"
                stroke="#555555"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <div className="py-3 flex items-center justify-between mt-3 px-3 hover:bg-primary-dark">
          <div className="flex items-center flex-row gap-2 justify-center">
            <img src={avatar} alt="" />
            <div className="">
              <h4 className="text-[16px] font-inter leading-[24px] text-regular font-bold">
                Phillip Mango
              </h4>
              <h5 className="text-[14px] font-inter leading-[22px] text-[#555555] font-semiBold">
                Your personal account
              </h5>
            </div>
          </div>
          <div className="cursor-pointer">
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.34766 14.0275L10.6943 9.68086C11.2077 9.16753 11.2077 8.32753 10.6943 7.8142L6.34766 3.46753"
                stroke="#555555"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <div className="py-3 flex items-center justify-between mt-3 px-3 hover:bg-primary-dark">
          <div className="flex items-center flex-row gap-2 justify-center">
            <img src={avatar} alt="" />
            <div className="">
              <h4 className="text-[16px] font-inter leading-[24px] text-regular font-bold">
                Phillip Mango
              </h4>
              <h5 className="text-[14px] font-inter leading-[22px] text-[#555555] font-semiBold">
                Your personal account
              </h5>
            </div>
          </div>
          <div className="cursor-pointer">
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.34766 14.0275L10.6943 9.68086C11.2077 9.16753 11.2077 8.32753 10.6943 7.8142L6.34766 3.46753"
                stroke="#555555"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <div className="py-4">
          <a href="" className="text-primary-regular font-semiBold underline font-inter text-[16px] leading-[26px]">Get a new Banking account</a>
        </div>
      </div>
    </div>
  );
};

export default AccountType;
