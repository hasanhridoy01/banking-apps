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
      <div className="py-4 px-32 mx-auto w-full border-b border-regular flex items-center justify-between">
        <img src={logo} alt="logo" />
        <div className="flex gap-3 items-center">
          <button>
            <svg
              width="51"
              height="51"
              viewBox="0 0 51 51"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="50"
                height="50"
                rx="25"
                fill="#E9ECF2"
              />
              <path
                d="M25 34.5C30.2467 34.5 34.5 30.2467 34.5 25C34.5 19.7533 30.2467 15.5 25 15.5C19.7533 15.5 15.5 19.7533 15.5 25C15.5 30.2467 19.7533 34.5 25 34.5Z"
                stroke="#222222"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M35.5 35.5L33.5 33.5"
                stroke="#222222"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
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
          <div className="flex items-center gap-3 bg-primary-lightest rounded-full p-1">
            <button>
              <svg
                width="43"
                height="43"
                viewBox="0 0 43 43"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="42"
                  height="42"
                  rx="21"
                  fill="white"
                />
                <path
                  d="M21.7195 19.7536H19.8601C19.8071 19.4486 19.7093 19.1785 19.5668 18.9432C19.4242 18.7045 19.2469 18.5024 19.0348 18.3366C18.8227 18.1709 18.5807 18.0466 18.3089 17.9638C18.0405 17.8776 17.7505 17.8345 17.4389 17.8345C16.8854 17.8345 16.3949 17.9737 15.9673 18.2521C15.5398 18.5272 15.205 18.9316 14.9631 19.4652C14.7211 19.9955 14.6001 20.6435 14.6001 21.4091C14.6001 22.188 14.7211 22.8442 14.9631 23.3778C15.2083 23.9081 15.5431 24.3092 15.9673 24.581C16.3949 24.8494 16.8838 24.9837 17.4339 24.9837C17.7389 24.9837 18.0239 24.9439 18.2891 24.8643C18.5575 24.7815 18.7978 24.6605 19.0099 24.5014C19.2254 24.3423 19.406 24.1468 19.5518 23.9148C19.701 23.6828 19.8037 23.4176 19.8601 23.1193L21.7195 23.1293C21.6499 23.6132 21.4991 24.0672 21.267 24.4915C21.0384 24.9157 20.7384 25.2902 20.3672 25.6151C19.996 25.9366 19.5618 26.1884 19.0646 26.3707C18.5675 26.5497 18.0156 26.6392 17.4091 26.6392C16.5142 26.6392 15.7154 26.4321 15.0128 26.0178C14.3101 25.6035 13.7566 25.0052 13.3523 24.223C12.9479 23.4408 12.7457 22.5028 12.7457 21.4091C12.7457 20.312 12.9496 19.3741 13.3572 18.5952C13.7649 17.813 14.3201 17.2147 15.0227 16.8004C15.7254 16.3861 16.5208 16.179 17.4091 16.179C17.9759 16.179 18.5028 16.2585 18.9901 16.4176C19.4773 16.5767 19.9115 16.8104 20.2926 17.1186C20.6738 17.4235 20.987 17.7981 21.2322 18.2422C21.4808 18.683 21.6432 19.1868 21.7195 19.7536ZM23.4086 26.5V16.3182H25.253V24.9538H29.7374V26.5H23.4086Z"
                  fill="#555555"
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
      </div>

      {/* Sidebar */}
      <div className="bg-white px-32 border-b border-regular mb-4">
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

      <div className="px-32 mx-auto w-full">
        {/* Main Content */}
        <div className="">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
