import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";

const Home = () => {
  return (
    <div>
      <div className="bg-white py-10">
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
              x="0.5"
              y="0.5"
              width="66"
              height="64"
              rx="32"
              fill="#D3DFFA"
            />
            <path
              d="M39.75 43.125H27.25C23.5 43.125 21 41.25 21 36.875V28.125C21 23.75 23.5 21.875 27.25 21.875H39.75C43.5 21.875 46 23.75 46 28.125V36.875C46 41.25 43.5 43.125 39.75 43.125Z"
              stroke="#1C3B7D"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M33.5 36.25C35.5711 36.25 37.25 34.5711 37.25 32.5C37.25 30.4289 35.5711 28.75 33.5 28.75C31.4289 28.75 29.75 30.4289 29.75 32.5C29.75 34.5711 31.4289 36.25 33.5 36.25Z"
              stroke="#1C3B7D"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M25.375 29.375V35.625"
              stroke="#1C3B7D"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M41.625 29.375V35.625"
              stroke="#1C3B7D"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <div className="">
            <div className="font-inter text-[16px] leading-[24px] font-bold mb-1">
              Main Group
            </div>
            <div className="font-inter text-[32px] leading-[22px] text-[#555555] font-[700] flex items-center gap-3">
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

        <Tabs defaultValue="send" className="mb-5">
          <TabsList className="grid grid-cols-3 items-center w-[400px] mb-3">
            <TabsTrigger value="send">Send</TabsTrigger>
            <TabsTrigger value="add-money">Add Money</TabsTrigger>
            <TabsTrigger value="request">Request</TabsTrigger>
          </TabsList>
          <TabsContent value="send">
            <div className="grid grid-cols-5 gap-4">
              <div className="bg-surface-body rounded-lg p-5">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  at et alias aliquam exercitationem similique vero inventore
                  saepe ipsam officiis.
                </p>
              </div>
              <div className="bg-surface-body rounded-lg p-5">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  at et alias aliquam exercitationem similique vero inventore
                  saepe ipsam officiis.
                </p>
              </div>
              <div className="bg-surface-body rounded-lg p-5">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  at et alias aliquam exercitationem similique vero inventore
                  saepe ipsam officiis.
                </p>
              </div>
              <div className="bg-surface-body rounded-lg p-5">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  at et alias aliquam exercitationem similique vero inventore
                  saepe ipsam officiis.
                </p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="add-money">
            <div className="grid grid-cols-5 gap-4">
              <div className="bg-surface-body rounded-lg p-5">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  at et alias aliquam exercitationem similique vero inventore
                  saepe ipsam officiis.
                </p>
              </div>
              <div className="bg-surface-body rounded-lg p-5">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  at et alias aliquam exercitationem similique vero inventore
                  saepe ipsam officiis.
                </p>
              </div>
              <div className="bg-surface-body rounded-lg p-5">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  at et alias aliquam exercitationem similique vero inventore
                  saepe ipsam officiis.
                </p>
              </div>
              <div className="bg-surface-body rounded-lg p-5">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  at et alias aliquam exercitationem similique vero inventore
                  saepe ipsam officiis.
                </p>
              </div>
              <div className="bg-surface-body rounded-lg p-5">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  at et alias aliquam exercitationem similique vero inventore
                  saepe ipsam officiis.
                </p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="request">
            <div className="grid grid-cols-5 gap-4">
              <div className="bg-surface-body rounded-lg p-5">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  at et alias aliquam exercitationem similique vero inventore
                  saepe ipsam officiis.
                </p>
              </div>
              <div className="bg-surface-body rounded-lg p-5">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  at et alias aliquam exercitationem similique vero inventore
                  saepe ipsam officiis.
                </p>
              </div>
              <div className="bg-surface-body rounded-lg p-5">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  at et alias aliquam exercitationem similique vero inventore
                  saepe ipsam officiis.
                </p>
              </div>
              <div className="bg-surface-body rounded-lg p-5">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  at et alias aliquam exercitationem similique vero inventore
                  saepe ipsam officiis.
                </p>
              </div>
              <div className="bg-surface-body rounded-lg p-5">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  at et alias aliquam exercitationem similique vero inventore
                  saepe ipsam officiis.
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>

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
