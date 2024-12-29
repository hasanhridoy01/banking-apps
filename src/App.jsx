import { Outlet, useLocation } from "react-router";
import "./App.css";
import logo from "./assets/images/logo.png";

function App() {
  const location = useLocation();

  const menuItems = [
    { label: "home", icon: "🏠", path: "/" },
    { label: "cards", icon: "💳", path: "/cards" },
    { label: "bills", icon: "📄", path: "/bills" },
    { label: "recipients", icon: "🔗", path: "/recipients" },
    { label: "payments", icon: "💰", path: "/payments" },
    { label: "earn-50", icon: "🎁", path: "/earn" },
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

      <div className="py-10 px-20 mx-auto w-full flex gap-3">
        {/* Sidebar */}
        <div className="w-64 bg-white border-r shadow-sm border border-regular">
          <div className="bg-white p-4">
            <ul className="space-y-4">
              {menuItems.map((item, index) => {
                const isActive = location.pathname === item.path;
                return (
                  <li
                    key={index}
                    className={`flex items-center space-x-2 text-regular cursor-pointer transition-colors ${
                      isActive
                        ? "text-blue-600 font-bold"
                        : "hover:text-blue-600"
                    }`}
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-[16px] font-inter leading-[24px]">
                      {item.label.charAt(0).toUpperCase() + item.label.slice(1)}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        {/* Main Content */}
        <div className="flex-1 border border-regular">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
