const Home = () => {
  return (
    <div>
      <div className="bg-white p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <div className="text-lg font-semibold">Main Group</div>
          <div className="text-2xl font-bold text-gray-800">7.86 GBP</div>
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
