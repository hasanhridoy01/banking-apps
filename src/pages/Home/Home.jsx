import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import country1 from "../../assets/images/home/Country1.png";
import country2 from "../../assets/images/home/Country2.png";
import country3 from "../../assets/images/home/Country3.png";
import country4 from "../../assets/images/home/Country4.png";

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
            <div className="grid grid-cols-4 gap-4">
              <div className="bg-surface-body rounded-lg p-5 relative cursor-pointer">
                <img className="absolute left-0 top-0" src={country1} alt="" />
                <h4 className="float-right font-inter text-[24px] leading-[24px] font-semiBold">
                  USD
                </h4>
                <div className="mt-14 ml-0">
                  <h4 className="font-inter text-[32px] leading-[38px] mb-1 font-bold">
                    4268.96
                  </h4>

                  <h4 className="flex gap-1 font-inter text-[16px] leading-[24px] font-bold text-[#555555]">
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.8057 2.29219L18.3057 5.29217C18.5974 5.40883 18.8307 5.75883 18.8307 6.06716V8.83383C18.8307 9.29217 18.4557 9.66717 17.9974 9.66717H2.9974C2.53906 9.66717 2.16406 9.29217 2.16406 8.83383V6.06716C2.16406 5.75883 2.3974 5.40883 2.68907 5.29217L10.1891 2.29219C10.3557 2.22552 10.6391 2.22552 10.8057 2.29219Z"
                        stroke="#555555"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M18.8307 18.8333H2.16406V16.3333C2.16406 15.875 2.53906 15.5 2.9974 15.5H17.9974C18.4557 15.5 18.8307 15.875 18.8307 16.3333V18.8333Z"
                        stroke="#555555"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M3.83594 15.4974V9.66406"
                        stroke="#555555"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7.16406 15.4974V9.66406"
                        stroke="#555555"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.5 15.4974V9.66406"
                        stroke="#555555"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M13.8359 15.4974V9.66406"
                        stroke="#555555"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M17.1641 15.4974V9.66406"
                        stroke="#555555"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M1.33594 18.8359H19.6693"
                        stroke="#555555"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.5 7.58594C11.1904 7.58594 11.75 7.02629 11.75 6.33594C11.75 5.64558 11.1904 5.08594 10.5 5.08594C9.80964 5.08594 9.25 5.64558 9.25 6.33594C9.25 7.02629 9.80964 7.58594 10.5 7.58594Z"
                        stroke="#555555"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>{" "}
                    ..5634
                  </h4>
                </div>
              </div>

              <div className="bg-surface-body rounded-lg p-5 relative cursor-pointer">
                <img className="absolute left-0 top-0" src={country2} alt="" />
                <h4 className="float-right font-inter text-[24px] leading-[24px] font-semiBold">
                  CAD
                </h4>
                <div className="mt-14 ml-0">
                  <h4 className="font-inter text-[32px] leading-[38px] mb-1 font-bold">
                    4268.96
                  </h4>

                  <h4 className="flex gap-1 font-inter text-[16px] leading-[24px] font-bold text-[#555555]">
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.8057 2.29219L18.3057 5.29217C18.5974 5.40883 18.8307 5.75883 18.8307 6.06716V8.83383C18.8307 9.29217 18.4557 9.66717 17.9974 9.66717H2.9974C2.53906 9.66717 2.16406 9.29217 2.16406 8.83383V6.06716C2.16406 5.75883 2.3974 5.40883 2.68907 5.29217L10.1891 2.29219C10.3557 2.22552 10.6391 2.22552 10.8057 2.29219Z"
                        stroke="#555555"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M18.8307 18.8333H2.16406V16.3333C2.16406 15.875 2.53906 15.5 2.9974 15.5H17.9974C18.4557 15.5 18.8307 15.875 18.8307 16.3333V18.8333Z"
                        stroke="#555555"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M3.83594 15.4974V9.66406"
                        stroke="#555555"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7.16406 15.4974V9.66406"
                        stroke="#555555"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.5 15.4974V9.66406"
                        stroke="#555555"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M13.8359 15.4974V9.66406"
                        stroke="#555555"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M17.1641 15.4974V9.66406"
                        stroke="#555555"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M1.33594 18.8359H19.6693"
                        stroke="#555555"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.5 7.58594C11.1904 7.58594 11.75 7.02629 11.75 6.33594C11.75 5.64558 11.1904 5.08594 10.5 5.08594C9.80964 5.08594 9.25 5.64558 9.25 6.33594C9.25 7.02629 9.80964 7.58594 10.5 7.58594Z"
                        stroke="#555555"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>{" "}
                    ..5634
                  </h4>
                </div>
              </div>

              <div className="bg-surface-body rounded-lg p-5 relative cursor-pointer">
                <img className="absolute left-0 top-0" src={country3} alt="" />
                <h4 className="float-right font-inter text-[24px] leading-[24px] font-semiBold">
                  GBP
                </h4>
                <div className="mt-14 ml-0">
                  <h4 className="font-inter text-[32px] leading-[38px] mb-1 font-bold">
                    4268.96
                  </h4>

                  <h4 className="flex gap-1 font-inter text-[16px] leading-[24px] font-bold text-[#555555]">
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.8057 2.29219L18.3057 5.29217C18.5974 5.40883 18.8307 5.75883 18.8307 6.06716V8.83383C18.8307 9.29217 18.4557 9.66717 17.9974 9.66717H2.9974C2.53906 9.66717 2.16406 9.29217 2.16406 8.83383V6.06716C2.16406 5.75883 2.3974 5.40883 2.68907 5.29217L10.1891 2.29219C10.3557 2.22552 10.6391 2.22552 10.8057 2.29219Z"
                        stroke="#555555"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M18.8307 18.8333H2.16406V16.3333C2.16406 15.875 2.53906 15.5 2.9974 15.5H17.9974C18.4557 15.5 18.8307 15.875 18.8307 16.3333V18.8333Z"
                        stroke="#555555"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M3.83594 15.4974V9.66406"
                        stroke="#555555"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7.16406 15.4974V9.66406"
                        stroke="#555555"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.5 15.4974V9.66406"
                        stroke="#555555"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M13.8359 15.4974V9.66406"
                        stroke="#555555"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M17.1641 15.4974V9.66406"
                        stroke="#555555"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M1.33594 18.8359H19.6693"
                        stroke="#555555"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.5 7.58594C11.1904 7.58594 11.75 7.02629 11.75 6.33594C11.75 5.64558 11.1904 5.08594 10.5 5.08594C9.80964 5.08594 9.25 5.64558 9.25 6.33594C9.25 7.02629 9.80964 7.58594 10.5 7.58594Z"
                        stroke="#555555"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>{" "}
                    ..5634
                  </h4>
                </div>
              </div>

              <div className="bg-surface-body rounded-lg p-5 relative cursor-pointer">
                <img className="absolute left-0 top-0" src={country4} alt="" />
                <h4 className="float-right font-inter text-[24px] leading-[24px] font-semiBold">
                  WON
                </h4>
                <div className="mt-14 ml-0">
                  <h4 className="font-inter text-[32px] leading-[38px] mb-1 font-bold">
                    4268.96
                  </h4>

                  <h4 className="flex gap-1 font-inter text-[16px] leading-[24px] font-bold text-[#555555]">
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.8057 2.29219L18.3057 5.29217C18.5974 5.40883 18.8307 5.75883 18.8307 6.06716V8.83383C18.8307 9.29217 18.4557 9.66717 17.9974 9.66717H2.9974C2.53906 9.66717 2.16406 9.29217 2.16406 8.83383V6.06716C2.16406 5.75883 2.3974 5.40883 2.68907 5.29217L10.1891 2.29219C10.3557 2.22552 10.6391 2.22552 10.8057 2.29219Z"
                        stroke="#555555"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M18.8307 18.8333H2.16406V16.3333C2.16406 15.875 2.53906 15.5 2.9974 15.5H17.9974C18.4557 15.5 18.8307 15.875 18.8307 16.3333V18.8333Z"
                        stroke="#555555"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M3.83594 15.4974V9.66406"
                        stroke="#555555"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7.16406 15.4974V9.66406"
                        stroke="#555555"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.5 15.4974V9.66406"
                        stroke="#555555"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M13.8359 15.4974V9.66406"
                        stroke="#555555"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M17.1641 15.4974V9.66406"
                        stroke="#555555"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M1.33594 18.8359H19.6693"
                        stroke="#555555"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.5 7.58594C11.1904 7.58594 11.75 7.02629 11.75 6.33594C11.75 5.64558 11.1904 5.08594 10.5 5.08594C9.80964 5.08594 9.25 5.64558 9.25 6.33594C9.25 7.02629 9.80964 7.58594 10.5 7.58594Z"
                        stroke="#555555"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>{" "}
                    ..5634
                  </h4>
                </div>
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
            <div className="text-[24px] leading-[36px] font-bold font-poppins text-regular">Transactions</div>
            <button className="text-primary-regular font-inter underline font-semiBold text-[16px]">See All</button>
          </div>
          <ul className="grid items-center gap-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <li
                key={index}
                className="flex justify-between items-center py-2 bg-surface-body px-4"
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
