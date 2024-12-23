import React, { useState } from "react";
import logo from "../../assets/images/logo.png";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      {/* Header Section */}
      <div className="py-4 px-20 mx-auto w-full border-b border-regular">
        <img src={logo} alt="logo" />
      </div>

      {/* Login Form Section */}
      <div className="container mx-auto h-auto w-[521px] py-10">
        <h1 className="text-center text-[32px] font-poppins leading-[48px]">
          Welcome Back
        </h1>
        <h4 className="text-center text-[16px] font-poppins leading-[24px] py-3">
          New to banking?{" "}
          <a href="#" className="text-primary-regular underline font-semiBold">
            Sign up
          </a>
        </h4>

        <div className="flex flex-col gap-2 py-4">
          <label
            htmlFor="email"
            className="text-[16px] font-inter text-regular leading-[24px]"
          >
            Your email address
          </label>
          <input
            id="email"
            type="email"
            required
            placeholder="Enter email"
            className="border border-regular rounded-lg px-4 py-2 text-[16px] font-inter leading-[26px] outline-none"
          />
        </div>

        <div className="flex flex-col gap-2 py-4 relative">
          <label
            htmlFor="password"
            className="text-[16px] font-inter text-regular leading-[24px]"
          >
            Your password
          </label>
          <div className="relative">
            <input
              id="password"
              required
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              className="border border-regular rounded-lg px-4 py-2 w-full text-[16px] font-inter leading-[26px] outline-none"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-2.5"
            >
              {showPassword ? (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.8198 5.76998C16.0698 4.44998 14.0698 3.72998 11.9998 3.72998C8.46984 3.72998 5.17984 5.80998 2.88984 9.40998C1.98984 10.82 1.98984 13.19 2.88984 14.6C3.67984 15.84 4.59984 16.91 5.59984 17.77"
                    stroke="#969696"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.42188 19.5299C9.56187 20.0099 10.7719 20.2699 12.0019 20.2699C15.5319 20.2699 18.8219 18.1899 21.1119 14.5899C22.0119 13.1799 22.0119 10.8099 21.1119 9.39993C20.7819 8.87993 20.4219 8.38993 20.0519 7.92993"
                    stroke="#969696"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M14.5319 9.46992L9.47188 14.5299C8.82188 13.8799 8.42188 12.9899 8.42188 11.9999C8.42188 10.0199 10.0219 8.41992 12.0019 8.41992C12.9919 8.41992 13.8819 8.81992 14.5319 9.46992Z"
                    stroke="#969696"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15.5114 12.7C15.2514 14.11 14.1014 15.26 12.6914 15.52"
                    stroke="#969696"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.47 14.53L2 22"
                    stroke="#969696"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M22.0013 2L14.5312 9.47"
                    stroke="#969696"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.9061 21.0175C16.4361 21.0175 19.7261 18.9375 22.0161 15.3375C22.9161 13.9275 22.9161 11.5575 22.0161 10.1475C19.7261 6.54753 16.4361 4.46753 12.9061 4.46753C9.37609 4.46753 6.08609 6.54753 3.79609 10.1475C2.89609 11.5575 2.89609 13.9275 3.79609 15.3375C6.08609 18.9375 9.37609 21.0175 12.9061 21.0175Z"
                    stroke="#969696"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.4881 12.7475C16.4881 14.7275 14.8881 16.3275 12.9081 16.3275C10.9281 16.3275 9.32812 14.7275 9.32812 12.7475C9.32812 10.7675 10.9281 9.16748 12.9081 9.16748C14.8881 9.16748 16.4881 10.7675 16.4881 12.7475Z"
                    stroke="#969696"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div className="py-4">
          <button
            className="bg-primary-regular w-full text-white text-[16px] font-inter rounded-lg py-3 hover:bg-primaryHover transition duration-300 ease-in-out"
            type="submit"
          >
            Login
          </button>
        </div>

        <div className="py-3">
          <a
            href=""
            className="text-primary-regular text-[16px] font-inter leading-[26px] underline text-[500]"
          >
            Trouble logging in?
          </a>
        </div>

        <div className="py-3">
          <h5 className="text-[16px] font-inter leading-[26px] text-[#969696]">
            Or login with
          </h5>
          <div className="flex gap-3 py-3 w-full">
            <div className="border border-regular py-3 px-14 rounded-lg cursor-pointer">
              <svg
                width="22"
                height="23"
                viewBox="0 0 22 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.3853 5.00089C13.4508 5.00089 14.8441 5.89311 15.6386 6.63867L18.743 3.60756C16.8364 1.83534 14.3553 0.747559 11.3853 0.747559C7.08303 0.747559 3.36748 3.21645 1.55859 6.80978L5.11526 9.572C6.00748 6.91978 8.47637 5.00089 11.3853 5.00089Z"
                  fill="#EA4335"
                />
                <path
                  d="M21.9467 11.9921C21.9467 11.0876 21.8734 10.4276 21.7145 9.74316H11.3867V13.8254H17.4489C17.3267 14.8398 16.6667 16.3676 15.2 17.3943L18.6712 20.0832C20.7489 18.1643 21.9467 15.3409 21.9467 11.9921Z"
                  fill="#4285F4"
                />
                <path
                  d="M5.12894 13.9231C4.89671 13.2387 4.76227 12.5054 4.76227 11.7476C4.76227 10.9898 4.89671 10.2565 5.11671 9.57203L1.56005 6.80981C0.814496 8.30092 0.386719 9.97537 0.386719 11.7476C0.386719 13.5198 0.814496 15.1943 1.56005 16.6854L5.12894 13.9231Z"
                  fill="#FBBC05"
                />
                <path
                  d="M11.3847 22.7475C14.3547 22.7475 16.8481 21.7698 18.6692 20.0831L15.1981 17.3942C14.2692 18.042 13.0225 18.4942 11.3847 18.4942C8.47586 18.4942 6.00698 16.5753 5.12698 13.9231L1.57031 16.6853C3.3792 20.2786 7.08253 22.7475 11.3847 22.7475Z"
                  fill="#34A853"
                />
              </svg>
            </div>
            <div className="border border-regular py-3 px-14 rounded-lg cursor-pointer">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.4063 1.74756C6.33121 1.74756 1.40625 6.69311 1.40625 12.7936C1.40625 18.2651 5.37199 22.7963 10.5717 23.6738V15.0981H7.91819V12.0121H10.5717V9.73657C10.5717 7.09632 12.1776 5.65754 14.5234 5.65754C15.6469 5.65754 16.6125 5.74161 16.8927 5.77863V8.5384L15.2657 8.53919C13.9903 8.53919 13.7444 9.1477 13.7444 10.041V12.0105H16.7878L16.3908 15.0965H13.7444V23.7476C19.1869 23.0824 23.4062 18.4357 23.4062 12.7905C23.4062 6.69311 18.4813 1.74756 12.4063 1.74756Z"
                  fill="#1A78F4"
                />
              </svg>
            </div>
            <div className="border border-regular py-3 px-14 rounded-lg cursor-pointer">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.4292 22.6125C17.2615 23.7445 15.9865 23.5658 14.7591 23.0296C13.4603 22.4814 12.2687 22.4576 10.8984 23.0296C9.18253 23.7683 8.27693 23.5539 7.25217 22.6125C1.43725 16.6189 2.29519 7.49133 8.89655 7.15769C10.5052 7.2411 11.6253 8.03946 12.5666 8.11096C13.9727 7.82498 15.3192 7.00278 16.8206 7.11003C18.6199 7.25302 19.9783 7.96797 20.872 9.25487C17.1542 11.4831 18.036 16.3805 21.4439 17.7509C20.7647 19.5382 19.8829 21.3137 18.4173 22.6244L18.4292 22.6125ZM12.4475 7.0862C12.2687 4.42897 14.4255 2.23646 16.904 2.02197C17.2495 5.09625 14.1157 7.38409 12.4475 7.0862Z"
                  fill="#222222"
                />
              </svg>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;
