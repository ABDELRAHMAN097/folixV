import { useState } from "react";
import { MdModeEditOutline } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { RiPaypalLine } from "react-icons/ri";
import AddButton from "../components/AddButton";
import { Link } from "react-router-dom";
import { useModals } from "../providers/ModalsProviders";
import { useTranslation } from "../providers/TranslationProvider";
import Table from "../components/Table";

const Categories = () => {
  const { translate } = useTranslation();
  const tableData = [
    {
      id: 1,
      Image: "/images/Frame.png",
      Title: "All safe",
      Discraption: "kdjnfkj",
      Rate: "5.5",
    },
    {
      id: 2,
      Image: "/images/Rectangle 40854.png",
      Title: "All safe",
      Discraption: "wfffffffff",
      Rate: "5.5",
    },
    {
      id: 3,
      Image: "/images/Avatar Circle.png",
      Title: "All safe",
      Discraption: "kdjnfkj",
      Rate: "5.5",
    },
    {
      id: 4,
      Image: "/images/hassan.png",
      Title: "All safe",
      Discraption: "kdjnfkj",
      Rate: "5.5",
    },
    {
      id: 5,
      Image: "/images/B.png",
      Title: "All safe",
      Discraption: "kdjnfkj",
      Rate: "5.5",
    },
  ];

  const headers = [
    translate("table.image"),
    translate("table.title"),
    translate("table.description"),
    translate("table.rate"),
    translate("table.control"),
  ];

  const data = [
    {
      id: 1,
      Image: "/images/blog.png",
      Title: "All safe",
      Discraption: "kdjnfkj",
      Rate: "5.5",
    },
  ];

  return (
    <div className="flex flex-col gap-4 items-start justify-start w-full">
      <div className="flex flex-col gap-4 items-start justify-start w-full">
        <h2 className="text-xl sm:2xl md:3xl">{translate("OurCourses.MostPopular")}</h2> 

        <div className="w-full overflow-x-auto">
          <Table
            columns={headers.length}
            headers={headers}
            data={tableData}
            renderCell={(row, rowIndex, colIndex) => {
              switch (colIndex) {
                case 0:
                  return (
                    <div className="flex justify-center items-center">
                      <img
                        src={row.Image}
                        alt="Logo"
                        className="w-[50px] h-[50px] object-contain"
                      />
                    </div>
                  );
                case 1:
                  return (
                    <p className="text-sm text-gray-300 break-words max-w-[200px] mx-auto">
                      {row.Title}
                    </p>
                  );
                case 2:
                  return (
                    <p className="text-sm text-gray-300 break-words max-w-[200px] mx-auto">
                      {row.Discraption}
                    </p>
                  );
                case 3:
                  return (
                    <p className="text-sm text-gray-300 break-words max-w-[200px] mx-auto">
                      {row.Rate}
                    </p>
                  );

                case 4:
                  return (
                    <div className="flex justify-center items-center gap-2">
                      <Link to={`/EditHome/${row.id}`}>
                        <MdModeEditOutline className="text-[#AEB9E1] text-[20px] cursor-pointer" />
                      </Link>
                      <FaTrash
                        onClick={() => console.log("Delete", row.id)}
                        className="text-[#EA3943] text-[20px] cursor-pointer"
                      />
                    </div>
                  );
                default:
                  return null;
              }
            }}
          />
        </div>
      </div>
      {/* new    Courses */}
      <div className="flex flex-col gap-4 items-start justify-start w-full">
        <h2 className="text-xl sm:2xl md:3xl">
          {translate("OurCourses.NewCourses")}
        </h2>
        <div className="w-full overflow-x-auto">
          <Table
            columns={headers.length}
            headers={headers}
            data={data}
            renderCell={(row2, rowIndex, colIndex) => {
              switch (colIndex) {
                case 0:
                  return (
                    <div className="flex justify-center items-center">
                      <img
                        src={row2.Image}
                        alt="Logo"
                        className="w-[50px] h-[50px] object-contain"
                      />
                    </div>
                  );
                case 1:
                  return (
                    <p className="text-sm text-gray-300 break-words max-w-[200px] mx-auto">
                      {row2.Title}
                    </p>
                  );
                case 2:
                  return (
                    <p className="text-sm text-gray-300 break-words max-w-[200px] mx-auto">
                      {row2.Discraption}
                    </p>
                  );
                case 3:
                  return (
                    <p className="text-sm text-gray-300 break-words max-w-[200px] mx-auto">
                      {row2.Rate}
                    </p>
                  );

                case 4:
                  return (
                    <div className="flex justify-center items-center gap-2">
                      <Link to={`/EditHome/${row2.id}`}>
                        <MdModeEditOutline className="text-[#AEB9E1] text-[20px] cursor-pointer" />
                      </Link>
                      <FaTrash
                        onClick={() => console.log("Delete", row2.id)}
                        className="text-[#EA3943] text-[20px] cursor-pointer"
                      />
                    </div>
                  );
                default:
                  return null;
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

const CourseBooking = () => {
  const { translate } = useTranslation();
  const handleClick = () => {
    openModal(
      <div className="flex flex-col items-center justify-start rounded-[50px] border border-primary p-7 relative z-50 bg-black min-h-[80vh]">
        <form className="w-full grid gap-8 bg-transparent relative z-50">
          <div className="flex flex-col items-center justify-center gap-8">
            <h2 className="text-primary font-[500] text-3xl">
              {translate("OurCourses.Payment")}
            </h2>
            <img
              className="min-w-[50px] max-w-[100px] bg-cover"
              src="/images/coin.png"
              alt="payment-image"
            />

            {/* Payment methods grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
              {/* Apple */}
              <div className="flex flex-col justify-center items-center gap-2 bg-[#D9D9D980] p-4 md:p-8 border border-primary rounded-[25px]">
                <h2 className="text-2xl">Method3</h2>
                <div className="flex justify-center items-center gap-1">
                  <FaApple className="text-xl" />
                  <p className="text-xl">pay</p>
                </div>
              </div>

              {/* Google */}
              <div className="flex flex-col justify-center items-center gap-2 bg-[#D9D9D980] p-4 md:p-8 border border-primary rounded-[25px]">
                <h2 className="text-2xl">Method3</h2>
                <div className="flex justify-center items-center gap-1">
                  <FcGoogle className="text-xl" />
                  <p className="text-xl">pay</p>
                </div>
              </div>

              {/* PayPal */}
              <div className="flex flex-col justify-center items-center gap-2 bg-[#D9D9D980] p-4 md:p-8 border border-primary rounded-[25px]">
                <h2 className="text-2xl">Method3</h2>
                <div className="flex justify-center items-center gap-1">
                  <RiPaypalLine className="text-xl" />
                  <p className="text-xl">pay</p>
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="w-full flex justify-center items-center">
            <button
              type="submit"
              className="bg-primary text-black py-2 px-10 rounded-full mt-4"
            >
              {translate("button.saveChange")}
            </button>
          </div>
        </form>
      </div>
    );
  };
  const headers = [
    translate("table.image"),
    translate("table.name"),
    translate("table.description"),
    translate("table.button"),
    translate("table.control"),
  ];

  const data = [
    {
      id: 1,
      Image: "/images/Instractor.png",
      Name: "Mohamed Hassan",
      Discraption: "Meet your trading mentor",
      Button: "Buy Now for ₹499 ₹1199.5",
    },
    {
      id: 2,
      Image: "/images/Instractor.png",
      Name: "Mohamed Hassan",
      Discraption: "Meet your trading mentor",
      Button: "Buy Now for ₹499 ₹1199.5",
    },
    {
      id: 3,
      Image: "/images/Instractor.png",
      Name: "Mohamed Hassan",
      Discraption: "Meet your trading mentor",
      Button: "Buy Now for ₹499 ₹1199.5",
    },
    {
      id: 4,
      Image: "/images/Instractor.png",
      Name: "Mohamed Hassan",
      Discraption: "Meet your trading mentor",
      Button: "Buy Now for ₹499 ₹1199.5",
    },
    {
      id: 5,
      Image: "/images/Instractor.png",
      Name: "Mohamed Hassan",
      Discraption: "Meet your trading mentor",
      Button: "Buy Now for ₹499 ₹1199.5",
    },
  ];
  // 2
  const headersHighlight = [
    translate("table.video"),
    translate("table.title"),
    translate("table.description"),
  ];
  const dataHighlight = [
    {
      id: 1,
      Video: "/images/Instractor-video.png",
      Title: "What is StocK Trading?",
    },
    {
      id: 2,
      Video: "/images/Instractor-video.png",
      Title: "What is StocK Trading?",
    },
    {
      id: 3,
      Video: "/images/Instractor-video.png",
      Title: "What is StocK Trading?",
    },
  ];

  return (
    <div className="grid gap-4 w-full">
      {/* Instructor Section */}
      <div className="grid gap-4">
        <h2 className="text-[24px] text-white">
          {translate("OurCourses.Instructor")}
        </h2>
        <Table
          columns={headers.length}
          headers={headers}
          data={data}
          renderCell={(row2, rowIndex, colIndex) => {
            switch (colIndex) {
              case 0:
                return (
                  <div className="flex justify-center items-center">
                    <img
                      src={row2.Image}
                      alt="Logo"
                      className="w-[50px] h-[50px] object-contain"
                    />
                  </div>
                );
              case 1:
                return (
                  <p className="text-sm text-gray-300 break-words max-w-[200px] mx-auto">
                    {row2.Name}
                  </p>
                );
              case 2:
                return (
                  <p className="text-sm text-gray-300 break-words max-w-[200px] mx-auto">
                    {row2.Discraption}
                  </p>
                );
              case 3:
                return (
                  <p className="text-sm text-gray-300 break-words max-w-[200px] mx-auto">
                    {row2.Button}
                  </p>
                );

              case 4:
                return (
                  <div className="flex justify-center items-center gap-2">
                    {/* <Link to={`/EditHome/${row2.id}`}> */}
                    <MdModeEditOutline
                      onClick={handleClick}
                      className="text-[#AEB9E1] text-[20px] cursor-pointer"
                    />
                    {/* </Link> */}
                    <FaTrash
                      onClick={handleClick}
                      className="text-[#EA3943] text-[20px] cursor-pointer"
                    />
                  </div>
                );
              default:
                return null;
            }
          }}
        />
      </div>

      {/* Course Highlight Section */}
      <div className="grid gap-4">
        <h2 className="text-[24px] text-white">
          {translate("OurCourses.CourseHighlight")}
        </h2>
        <Table
          columns={headersHighlight.length}
          headers={headersHighlight}
          data={dataHighlight}
          renderCell={(row2, rowIndex, colIndex) => {
            switch (colIndex) {
              case 0:
                return (
                  <div className="flex justify-center items-center">
                    <video
                      src={row2.Video}
                      className="w-[70px] object-contain"
                      controls
                    />
                  </div>
                );
              case 1:
                return (
                  <p className="text-sm text-gray-300 break-words max-w-[200px] mx-auto">
                    {row2.Title}
                  </p>
                );

              case 2:
                return (
                  <div className="flex justify-center items-center gap-2">
                    <Link to={`/EditHome/${row2.id}`}>
                      <MdModeEditOutline className="text-[#AEB9E1] text-[20px] cursor-pointer" />
                    </Link>
                    <FaTrash
                      onClick={() => console.log("Delete", row2.id)}
                      className="text-[#EA3943] text-[20px] cursor-pointer"
                    />
                  </div>
                );
              default:
                return null;
            }
          }}
        />
      </div>
    </div>
  );
};

const CourseContent = () => {
  const { translate } = useTranslation();

  const handleClick = () => {
    openModal(
      <div className="flex flex-col items-center justify-start rounded-[50px] border border-primary p-7 relative z-50 bg-black min-h-[80vh]">
        <form className="w-full grid gap-8 bg-transparent relative z-50">
          <div className="flex flex-col items-center justify-center gap-8">
            <h2 className="text-primary font-[500] text-3xl">
              {translate("OurCourses.Payment")}
            </h2>
            <img
              className="min-w-[50px] max-w-[100px] bg-cover"
              src="/images/coin.png"
              alt="payment-image"
            />

            {/* Payment methods grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
              {/* Apple */}
              <div className="flex flex-col justify-center items-center gap-2 bg-[#D9D9D980] p-4 md:p-8 border border-primary rounded-[25px]">
                <h2 className="text-2xl">Method3</h2>
                <div className="flex justify-center items-center gap-1">
                  <FaApple className="text-xl" />
                  <p className="text-xl">pay</p>
                </div>
              </div>

              {/* Google */}
              <div className="flex flex-col justify-center items-center gap-2 bg-[#D9D9D980] p-4 md:p-8 border border-primary rounded-[25px]">
                <h2 className="text-2xl">Method3</h2>
                <div className="flex justify-center items-center gap-1">
                  <FcGoogle className="text-xl" />
                  <p className="text-xl">pay</p>
                </div>
              </div>

              {/* PayPal */}
              <div className="flex flex-col justify-center items-center gap-2 bg-[#D9D9D980] p-4 md:p-8 border border-primary rounded-[25px]">
                <h2 className="text-2xl">Method3</h2>
                <div className="flex justify-center items-center gap-1">
                  <RiPaypalLine className="text-xl" />
                  <p className="text-xl">pay</p>
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="w-full flex justify-center items-center">
            <button
              type="submit"
              className="bg-primary text-black py-2 px-10 rounded-full mt-4"
            >
              {translate("button.saveChange")}
            </button>
          </div>
        </form>
      </div>
    );
  };

  const tableData = [
    {
      id: 1,
      ContentTitle: "Stock Trading",
      SessionNum: "Session 1",
      sessionTitle: "Foundations",
      Video: "/images/Instractor-video.png",
      TelegramLink: "Http/htp.hhhhh",
    },
  ];

  const headers = [
    translate("table.ContentTitle"),
    translate("table.SessionNum"),
    translate("table.SessionTitle"),
    translate("table.video"),
    translate("table.telegram"),
    translate("table.control"),
  ];

  return (
    <div className="grid w-full">
      <div className="grid gap-4 w-full">
        <Table
          columns={headers.length}
          headers={headers}
          data={tableData}
          renderCell={(row, rowIndex, colIndex) => {
            switch (colIndex) {
              case 0:
                return (
                  <p className="text-sm text-gray-300 break-words max-w-[200px] mx-auto">
                    {row.ContentTitle}
                  </p>
                );
              case 1:
                return (
                  <p className="text-sm text-gray-300 break-words max-w-[200px] mx-auto">
                    {row.SessionNum}
                  </p>
                );
              case 2:
                return (
                  <p className="text-sm text-gray-300 break-words max-w-[200px] mx-auto">
                    {row.sessionTitle}
                  </p>
                );
              case 3:
                return (
                  <div className="flex justify-center items-center">
                    <video
                      src={row.Video}
                      className="w-[50px] h-[50px] object-contain"
                      autoPlay
                      loop
                      muted
                      playsInline
                      controls
                    />
                  </div>
                );
              case 4:
                return (
                  <p className="text-sm text-gray-300 break-words max-w-[200px] mx-auto">
                    {row.TelegramLink}
                  </p>
                );
              case 5:
                return (
                  <div className="flex justify-center items-center gap-2">
                    {/* <Link to={`/EditCourseContent/${row.id}`}> */}
                    <MdModeEditOutline
                      onClick={handleClick}
                      className="text-[#AEB9E1] text-[20px] cursor-pointer"
                    />
                    {/* </Link> */}
                    <FaTrash
                      onClick={handleClick}
                      className="text-[#EA3943] text-[20px] cursor-pointer"
                    />
                  </div>
                );
              default:
                return null;
            }
          }}
        />
      </div>
    </div>
  );
};

const Payment = () => {
  const { openModal } = useModals();
  const { translate } = useTranslation();

  const tableData = [
    {
      id: 1,
      Image: "/images/coin.png",
      MethodOne: "pay",
      MethodTow: "pay",
      MethodThree: "PayPal",
    },
    {
      id: 2,
      Image: "/images/coin.png",
      MethodOne: "pay",
      MethodTow: "pay",
      MethodThree: "PayPal",
    },
    {
      id: 3,
      Image: "/images/coin.png",
      MethodOne: "pay",
      MethodTow: "pay",
      MethodThree: "PayPal",
    },
    {
      id: 4,
      Image: "/images/coin.png",
      MethodOne: "pay",
      MethodTow: "pay",
      MethodThree: "PayPal",
    },
  ];

  const handleClick = () => {
    openModal(
      <div className="flex flex-col items-center justify-start rounded-[50px] border border-primary p-7 relative z-50 bg-black min-h-[80vh]">
        <form className="w-full grid gap-8 bg-transparent relative z-50">
          <div className="flex flex-col items-center justify-center gap-8">
            <h2 className="text-primary font-[500] text-3xl">
              {translate("OurCourses.Payment")}
            </h2>
            <img
              className="min-w-[50px] max-w-[100px] bg-cover"
              src="/images/coin.png"
              alt="payment-image"
            />

            {/* Payment methods grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
              {/* Apple */}
              <div className="flex flex-col justify-center items-center gap-2 bg-[#D9D9D980] p-4 md:p-8 border border-primary rounded-[25px]">
                <h2 className="text-2xl">Method3</h2>
                <div className="flex justify-center items-center gap-1">
                  <FaApple className="text-xl" />
                  <p className="text-xl">pay</p>
                </div>
              </div>

              {/* Google */}
              <div className="flex flex-col justify-center items-center gap-2 bg-[#D9D9D980] p-4 md:p-8 border border-primary rounded-[25px]">
                <h2 className="text-2xl">Method3</h2>
                <div className="flex justify-center items-center gap-1">
                  <FcGoogle className="text-xl" />
                  <p className="text-xl">pay</p>
                </div>
              </div>

              {/* PayPal */}
              <div className="flex flex-col justify-center items-center gap-2 bg-[#D9D9D980] p-4 md:p-8 border border-primary rounded-[25px]">
                <h2 className="text-2xl">Method3</h2>
                <div className="flex justify-center items-center gap-1">
                  <RiPaypalLine className="text-xl" />
                  <p className="text-xl">pay</p>
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="w-full flex justify-center items-center">
            <button
              type="submit"
              className="bg-primary text-black py-2 px-10 rounded-full mt-4"
            >
              {translate("button.saveChange")}
            </button>
          </div>
        </form>
      </div>
    );
  };

  const headers = [
    translate("table.image"),
    translate("table.method"),
    translate("table.method"),
    translate("table.method"),
    translate("table.control"),
  ];

  return (
    <div className="grid min-h-[70vh] w-full">
      <div className="grid gap-4 w-full">
        <Table
          columns={headers.length}
          headers={headers}
          data={tableData}
          renderCell={(row, rowIndex, colIndex) => {
            switch (colIndex) {
              case 0:
                return (
                  <div className="flex justify-center items-center max-w-[200px] mx-auto">
                    <img src={row.Image} alt="" />
                  </div>
                );
              case 1:
                return (
                  <p className="text-sm text-gray-300 break-words max-w-[200px] mx-auto">
                    {row.MethodOne}
                  </p>
                );
              case 2:
                return (
                  <p className="text-sm text-gray-300 break-words max-w-[200px] mx-auto">
                    {row.MethodTow}
                  </p>
                );

              case 3:
                return (
                  <p className="text-sm text-gray-300 break-words max-w-[200px] mx-auto">
                    {row.MethodThree}
                  </p>
                );
              case 4:
                return (
                  <div className="flex justify-center items-center gap-2">
                    <MdModeEditOutline
                      onClick={handleClick}
                      className="text-[#AEB9E1] text-[20px] cursor-pointer"
                    />

                    <FaTrash
                      onClick={handleClick}
                      className="text-[#EA3943] text-[20px] cursor-pointer"
                    />
                  </div>
                );
              default:
                return null;
            }
          }}
        />
      </div>
    </div>
  );
};

function OurProduct() {
  const [activeTab, setActiveTab] = useState("copy");
  //
  const renderContent = () => {
    switch (activeTab) {
      case "copy":
        return <Categories />;
      case "live":
        return <CourseBooking />;
      case "recommend":
        return <CourseContent />;
      case "Payment":
        return <Payment />;
      default:
        return null;
    }
  };
  const tabs = [
    { key: "copy", translationKey: "OurCourses.Categories" },
    { key: "live", translationKey: "OurCourses.CourseBooking" },
    { key: "recommend", translationKey: "OurCourses.CourseContent" },
    { key: "Payment", translationKey: "OurCourses.Payment" },
  ];
  const { translate } = useTranslation();
  return (
    <div className="grid grid-cols-1 p-2 md:p-4 min-h-[70vh] text-white relative z-10 gap-1 md:gap-4">
      {/* Tabs & Add Button */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-center gap-1 md:gap-4">
        {/* Tabs - Scrollable on small screens */}
        <div className="flex overflow-x-auto space-x-1 md:space-x-2 lg:space-x-4 scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`pb-2 px-1 md:px-0 transition duration-300 whitespace-nowrap ${
                activeTab === tab.key
                  ? "border-b-2 border-primary text-white font-medium"
                  : "text-gray-400"
              }`}
            >
              {translate(tab.translationKey)}
            </button>
          ))}
        </div>
        {/*  */}
        <div className="md:w-auto flex justify-end">
          <AddButton label="Add New" />
        </div>
      </div>
      {/* Tab Content */}
      <div className="flex flex-col items-start justify-start w-full">
        {renderContent()}
      </div>
    </div>
  );
}

export default OurProduct;
