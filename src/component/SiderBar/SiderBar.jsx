import React from "react";

const SiderBar = () => {
  const menuItems = [
    { label: "Home", icon: "🏠" },
    { label: "Card", icon: "💳" },
    { label: "Bills", icon: "📄" },
    { label: "Recipients", icon: "🔗" },
    { label: "Payments", icon: "💰" },
    { label: "Earn $50", icon: "🎁" },
  ];

  return (
    <div className="bg-white p-4">
      <ul className="space-y-4">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
          >
            <span className="text-xl">{item.icon}</span>
            <span className="text-[16px] font-inter leading-[24px] text-[#555555] font-bold hover:text-info-regular">{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SiderBar;
