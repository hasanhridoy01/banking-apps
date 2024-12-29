const Home = () => {
  return (
    <div>
      <div className="bg-white p-6">
        {/* Header */}
        <div className="flex justify-start items-center mb-6 gap-3">
          <svg
            width="67"
            height="65"
            viewBox="0 0 67 65"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.40625"
              y="0.495117"
              width="66"
              height="64"
              rx="32"
              fill="#97E866"
            />
            <path
              d="M39.6562 43.1201H27.1562C23.4062 43.1201 20.9062 41.2451 20.9062 36.8701V28.1201C20.9062 23.7451 23.4062 21.8701 27.1562 21.8701H39.6562C43.4062 21.8701 45.9062 23.7451 45.9062 28.1201V36.8701C45.9062 41.2451 43.4062 43.1201 39.6562 43.1201Z"
              stroke="#222222"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M33.4062 36.2451C35.4773 36.2451 37.1562 34.5662 37.1562 32.4951C37.1562 30.424 35.4773 28.7451 33.4062 28.7451C31.3352 28.7451 29.6562 30.424 29.6562 32.4951C29.6562 34.5662 31.3352 36.2451 33.4062 36.2451Z"
              stroke="#222222"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M25.2812 29.3701V35.6201"
              stroke="#222222"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M41.5312 29.3701V35.6201"
              stroke="#222222"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <div className="">
            <div className="font-inter text-[16px] leading-[24px] font-bold">Main Group</div>
            <div className="font-inter text-[32px] leading-[22px] text-[#555555] font-[700] flex items-center gap-2">
              7.86 GBP{" "}
              <svg
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="border border-regular rounded-full"
              >
                <rect
                  x="0.40625"
                  y="0.495117"
                  width="32"
                  height="32"
                  rx="16"
                  fill="#FAFAFA"
                />
                <path
                  d="M21.685 14.4619L17.3383 18.8086C16.825 19.3219 15.985 19.3219 15.4717 18.8086L11.125 14.4619"
                  stroke="#222222"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex space-x-4 mb-6">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
            Send
          </button>
          <button className="px-4 py-2 bg-gray-100 rounded-md">
            Add Money
          </button>
          <button className="px-4 py-2 bg-gray-100 rounded-md">Request</button>
        </div>

        {/* Currency Cards */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          {["USD", "CAD", "GBP", "WON"].map((currency, index) => (
            <div key={index} className="p-4 bg-gray-100 rounded-md shadow-sm">
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-xl font-semibold">{currency}</span>
              </div>
              <div className="text-gray-500">..56434</div>
              <div className="text-lg font-bold">0.00</div>
            </div>
          ))}
        </div>

        {/* Transactions */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <div className="text-lg font-semibold">Transactions</div>
            <button className="text-blue-600">See All</button>
          </div>
          <ul>
            {Array.from({ length: 3 }).map((_, index) => (
              <li
                key={index}
                className="flex justify-between items-center py-2 border-b last:border-none"
              >
                <div>
                  <div className="font-medium">Old Bank Business Ltd</div>
                  <div className="text-sm text-gray-500">N/A</div>
                </div>
                <div className="font-semibold">10.00 USD</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
