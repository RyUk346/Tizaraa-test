export default function Offer() {
  return (
    <>
      <div className=" p-4 md:p-8 bg-[#F6F5FD] flex flex-col items-center justify-center">
        <div className="bg-[#EEECFB] md:max-w-[1380px] lg:max-w-[1580px] md:h-[450px] md:flex md:justify-between md:p-12 overflow-hidden">
          <div>
            <div className="flex flex-col items-center justify-center space-y-2 md:items-start">
              <h1 className="font-pacifico text-h5 text-[#7E53D4]">Big Deal</h1>
              <h1 className="text-h4 font-semibold md:text-h1">
                <span className="text-[#7E53D4]">30% </span>Off for New
                Customers
              </h1>
            </div>
            <div className="md:flex md:items-center">
              {" "}
              <div className="flex items-center justify-center py-6 ">
                <button className="btn rounded-3xl w-[149px] text-title h-[48px] text-white bg-[#7E53D4] ">
                  Shop Now
                </button>
                <button className="btn rounded-full bg-[#7E53D4] size-12 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    color="#ffffff"
                    fill="none"
                    className="absolute"
                  >
                    <path
                      d="M17 7L6 18"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M11 6.13151C11 6.13151 16.6335 5.65662 17.4885 6.51153C18.3434 7.36645 17.8684 13 17.8684 13"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 ">
            <img
              src="/peoples.png"
              className="md:w-[427px] md:h-[495px] mt-[80px]"
            ></img>
          </div>
        </div>
      </div>
      <div className=" p-4 bg-[#F6F5FD] flex flex-col items-center ">
        <div className="md:max-w-[1380px] lg:max-w-[1580px] md:flex md:justify-start items-center overflow-hidden md:gap-[40px] py-6 md:py-[80px]">
          <div className="w-[326px] lg:w-[621px] h-[295px] lg:h-[465px] bg-[#EEECFB] relative overflow-visible">
            <div className="flex flex-col items-center justify-center h-full">
              <img
                src="/portrait.png"
                className="w-[278px] md:w-[468px] absolute top-[-40px] md:top-[-100px]"
                alt="Portrait"
              />
            </div>
          </div>

          <div>
            <div className="flex flex-col items-center justify-center space-y-2 md:items-start">
              <h1 className="text-h4 font-semibold md:text-h1">
                MEN COLLECTION
              </h1>
            </div>
            <div className="md:flex md:items-center">
              {" "}
              <div className="flex items-center justify-center py-6 ">
                <button className="btn rounded-3xl w-[149px] text-title h-[48px] text-white bg-[#7E53D4] ">
                  Shop Now
                </button>
                <button className="btn rounded-full bg-[#7E53D4] size-12 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    color="#ffffff"
                    fill="none"
                    className="absolute"
                  >
                    <path
                      d="M17 7L6 18"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M11 6.13151C11 6.13151 16.6335 5.65662 17.4885 6.51153C18.3434 7.36645 17.8684 13 17.8684 13"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
