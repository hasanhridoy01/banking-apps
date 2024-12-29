import { Outlet, useLocation } from "react-router";
import "./App.css";
import logo from "./assets/images/logo.png";

function App() {
  const location = useLocation();

  const menuItems = [
    {
      label: "home",
      icon: (
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.5693 3.32376L3.63929 8.87376C2.85929 9.49376 2.35929 10.8038 2.52929 11.7838L3.85929 19.7438C4.09929 21.1638 5.45929 22.3138 6.89929 22.3138H18.0993C19.5293 22.3138 20.8993 21.1538 21.1393 19.7438L22.4693 11.7838C22.6293 10.8038 22.1293 9.49376 21.3593 8.87376L14.4293 3.33376C13.3593 2.47376 11.6293 2.47376 10.5693 3.32376Z"
            fill="#1C3B7D"
            stroke="#1C3B7D"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12.5 18.5V15.5"
            stroke="#E9ECF2"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      path: "/",
    },
    {
      label: "cards",
      icon: (
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.94 4.00781H18.05C21.61 4.00781 22.5 4.88781 22.5 8.39781V16.6078C22.5 20.1178 21.61 20.9978 18.06 20.9978H6.94C3.39 21.0078 2.5 20.1278 2.5 16.6178V8.39781C2.5 4.88781 3.39 4.00781 6.94 4.00781Z"
            stroke="#555555"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M2.5 9.00781H22.5"
            stroke="#555555"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6.5 17.0078H8.5"
            stroke="#555555"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11 17.0078H15"
            stroke="#555555"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      path: "/cards",
    },
    {
      label: "bills",
      icon: (
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.5 7.5V21.5C2.5 22.33 3.43998 22.8 4.09998 22.3L5.81 21.02C6.21 20.72 6.77 20.76 7.13 21.12L8.78998 22.79C9.17998 23.18 9.82002 23.18 10.21 22.79L11.89 21.11C12.24 20.76 12.8 20.72 13.19 21.02L14.9 22.3C15.56 22.79 16.5 22.32 16.5 21.5V4.5C16.5 3.4 17.4 2.5 18.5 2.5H7.5H6.5C3.5 2.5 2.5 4.29 2.5 6.5V7.5Z"
            stroke="#555555"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M22.5 6.5V8.92C22.5 10.5 21.5 11.5 19.92 11.5H16.5V4.51C16.5 3.4 17.41 2.5 18.52 2.5C19.61 2.51 20.61 2.95 21.33 3.67C22.05 4.4 22.5 5.4 22.5 6.5Z"
            stroke="#555555"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6.5 9.5H12.5"
            stroke="#555555"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.25 13.5H11.75"
            stroke="#555555"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      path: "/bills",
    },
    {
      label: "recipients",
      icon: (
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.4981 7.66C18.4381 7.65 18.3681 7.65 18.3081 7.66C16.9281 7.61 15.8281 6.48 15.8281 5.08C15.8281 3.65 16.9781 2.5 18.4081 2.5C19.8381 2.5 20.9881 3.66 20.9881 5.08C20.9781 6.48 19.8781 7.61 18.4981 7.66Z"
            stroke="#555555"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17.4675 14.9402C18.8375 15.1702 20.3475 14.9302 21.4075 14.2202C22.8175 13.2802 22.8175 11.7402 21.4075 10.8002C20.3375 10.0902 18.8075 9.85016 17.4375 10.0902"
            stroke="#555555"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6.47047 7.66C6.53047 7.65 6.60047 7.65 6.66047 7.66C8.04047 7.61 9.14047 6.48 9.14047 5.08C9.14047 3.65 7.99047 2.5 6.56047 2.5C5.13047 2.5 3.98047 3.66 3.98047 5.08C3.99047 6.48 5.09047 7.61 6.47047 7.66Z"
            stroke="#555555"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.5014 14.9402C6.1314 15.1702 4.62141 14.9302 3.56141 14.2202C2.15141 13.2802 2.15141 11.7402 3.56141 10.8002C4.63141 10.0902 6.1614 9.85016 7.5314 10.0902"
            stroke="#555555"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12.4981 15.1288C12.4381 15.1188 12.3681 15.1188 12.3081 15.1288C10.9281 15.0788 9.82812 13.9488 9.82812 12.5488C9.82812 11.1188 10.9781 9.96875 12.4081 9.96875C13.8381 9.96875 14.9881 11.1288 14.9881 12.5488C14.9781 13.9488 13.8781 15.0888 12.4981 15.1288Z"
            stroke="#555555"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.58875 18.2794C8.17875 19.2194 8.17875 20.7594 9.58875 21.6994C11.1888 22.7694 13.8087 22.7694 15.4087 21.6994C16.8187 20.7594 16.8187 19.2194 15.4087 18.2794C13.8187 17.2194 11.1888 17.2194 9.58875 18.2794Z"
            stroke="#555555"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      path: "/recipients",
    },
    {
      label: "payments",
      icon: (
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.10127 10.7375L10.7413 4.09754C12.8613 1.97754 13.9213 1.96754 16.0213 4.06754L20.9313 8.97754C23.0313 11.0775 23.0213 12.1375 20.9013 14.2575L14.2613 20.8975C12.1413 23.0175 11.0813 23.0275 8.98127 20.9275L4.07127 16.0175C1.97127 13.9175 1.97127 12.8675 4.10127 10.7375Z"
            stroke="#555555"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4.42969 16.3797L16.3797 4.42969"
            stroke="#555555"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11.6016 18.7781L12.8016 17.5781"
            stroke="#555555"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14.293 16.0853L16.683 13.6953"
            stroke="#555555"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M2.5 22.5H22.5"
            stroke="#555555"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      path: "/payments",
    },
    {
      label: "earn-50",
      icon: (
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.4687 10.5H4.46875V18.5C4.46875 21.5 5.46875 22.5 8.46875 22.5H16.4688C19.4688 22.5 20.4687 21.5 20.4687 18.5V10.5Z"
            stroke="#555555"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M22 7.5V8.5C22 9.6 21.47 10.5 20 10.5H5C3.47 10.5 3 9.6 3 8.5V7.5C3 6.4 3.47 5.5 5 5.5H20C21.47 5.5 22 6.4 22 7.5Z"
            stroke="#555555"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12.1388 5.4975H6.61881C6.27881 5.1275 6.28881 4.5575 6.64881 4.1975L8.06881 2.7775C8.43881 2.4075 9.04881 2.4075 9.41881 2.7775L12.1388 5.4975Z"
            stroke="#555555"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M18.3716 5.4975H12.8516L15.5716 2.7775C15.9416 2.4075 16.5516 2.4075 16.9216 2.7775L18.3416 4.1975C18.7016 4.5575 18.7116 5.1275 18.3716 5.4975Z"
            stroke="#555555"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.44141 10.5V15.64C9.44141 16.44 10.3214 16.91 10.9914 16.48L11.9314 15.86C12.2714 15.64 12.7014 15.64 13.0314 15.86L13.9214 16.46C14.5814 16.9 15.4714 16.43 15.4714 15.63V10.5H9.44141Z"
            stroke="#555555"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      path: "/earn",
    },
  ];

  return (
    <div>
      {/* Header Section */}
      <div className="py-4 px-20 mx-auto w-full border-b border-regular flex items-center justify-between">
        <img src={logo} alt="logo" />
        <div className="flex gap-3 items-center">
          <button>
            <svg
              width="47"
              height="47"
              viewBox="0 0 47 47"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.40625"
                y="0.495117"
                width="46"
                height="46"
                rx="23"
                fill="#E9ECF2"
              />
              <path
                d="M14.4062 33.4951H32.4062"
                stroke="#222222"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.0062 19.875H15.4062C14.8562 19.875 14.4062 20.325 14.4062 20.875V29.495C14.4062 30.045 14.8562 30.495 15.4062 30.495H17.0062C17.5562 30.495 18.0062 30.045 18.0062 29.495V20.875C18.0062 20.325 17.5562 19.875 17.0062 19.875Z"
                stroke="#222222"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M24.2054 16.6851H22.6055C22.0555 16.6851 21.6055 17.1351 21.6055 17.6851V29.4951C21.6055 30.0451 22.0555 30.4951 22.6055 30.4951H24.2054C24.7554 30.4951 25.2054 30.0451 25.2054 29.4951V17.6851C25.2054 17.1351 24.7554 16.6851 24.2054 16.6851Z"
                stroke="#222222"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M31.4047 13.4951H29.8047C29.2547 13.4951 28.8047 13.9451 28.8047 14.4951V29.4951C28.8047 30.0451 29.2547 30.4951 29.8047 30.4951H31.4047C31.9547 30.4951 32.4047 30.0451 32.4047 29.4951V14.4951C32.4047 13.9451 31.9547 13.4951 31.4047 13.4951Z"
                stroke="#222222"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button>
            <svg
              width="47"
              height="47"
              viewBox="0 0 47 47"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.40625"
                y="0.495117"
                width="46"
                height="46"
                rx="23"
                fill="#E9ECF2"
              />
              <path
                d="M24.0142 21.7849H21.8892C21.8286 21.4364 21.7169 21.1277 21.554 20.8588C21.3911 20.586 21.1884 20.355 20.946 20.1656C20.7036 19.9762 20.4271 19.8341 20.1165 19.7394C19.8097 19.641 19.4782 19.5917 19.1222 19.5917C18.4896 19.5917 17.929 19.7508 17.4403 20.069C16.9517 20.3834 16.5691 20.8455 16.2926 21.4553C16.0161 22.0614 15.8778 22.8019 15.8778 23.6769C15.8778 24.5671 16.0161 25.3171 16.2926 25.9269C16.5729 26.533 16.9555 26.9913 17.4403 27.3019C17.929 27.6088 18.4877 27.7622 19.1165 27.7622C19.465 27.7622 19.7907 27.7167 20.0938 27.6258C20.4006 27.5311 20.6752 27.3928 20.9176 27.211C21.1638 27.0292 21.3703 26.8057 21.5369 26.5406C21.7074 26.2754 21.8248 25.9724 21.8892 25.6315L24.0142 25.6428C23.9347 26.1959 23.7623 26.7148 23.4972 27.1997C23.2358 27.6845 22.893 28.1125 22.4688 28.4838C22.0445 28.8512 21.5483 29.1391 20.9801 29.3474C20.4119 29.5519 19.7813 29.6542 19.0881 29.6542C18.0653 29.6542 17.1525 29.4175 16.3494 28.944C15.5464 28.4705 14.9138 27.7868 14.4517 26.8928C13.9896 25.9989 13.7585 24.9269 13.7585 23.6769C13.7585 22.4231 13.9915 21.3512 14.4574 20.461C14.9233 19.5671 15.5578 18.8834 16.3608 18.4099C17.1638 17.9364 18.0729 17.6997 19.0881 17.6997C19.7358 17.6997 20.3381 17.7906 20.8949 17.9724C21.4517 18.1542 21.9479 18.4213 22.3835 18.7735C22.8191 19.122 23.1771 19.55 23.4574 20.0576C23.7415 20.5614 23.9271 21.1372 24.0142 21.7849ZM25.9446 29.4951V17.8588H28.0526V27.7281H33.1776V29.4951H25.9446Z"
                fill="#222222"
              />
            </svg>
          </button>
          <div className="">
            <h6 className="text-[16px] font-inter leading-[24px] text-regular font-bold">
              Carbon LTD
            </h6>
          </div>
          <button>
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.31641 20.4152L15.8364 13.8952C16.6064 13.1252 16.6064 11.8652 15.8364 11.0952L9.31641 4.5752"
                stroke="#555555"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <div className="bg-white px-20 border-b border-regular mb-4">
        <div className="bg-white py-4">
          <ul className="flex items-center">
            {menuItems.map((item, index) => {
              const isActive = location.pathname === item.path;
              return (
                <li
                  key={index}
                  className={`flex items-center ${
                    index !== 0 ? "ml-4" : "ml-0"
                  } text-regular cursor-pointer transition-colors gap-2 ${
                    isActive
                      ? "text-primary-regular font-bold text-[16px] font-inter leading-[24px] bg-primary-lightest rounded-full py-2 px-4"
                      : "hover:bg-primary-lightest hover:text-primary-regular rounded-full py-2 px-4 font-bold text-[16px] font-inter leading-[24px] text-[#555555]"
                  }`}
                >
                  <span className="text-xl hover:color-primary-regular">
                    {item.icon}
                  </span>
                  <span className="text-[16px] font-inter leading-[24px]">
                    {item.label.charAt(0).toUpperCase() + item.label.slice(1)}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="px-20 mx-auto w-full">
        {/* Main Content */}
        <div className="">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
