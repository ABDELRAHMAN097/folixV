import { HiUsers } from "react-icons/hi2";
import { FaUser, FaHeart, FaTrash } from "react-icons/fa";
import { SlOptions } from "react-icons/sl";
import { FaImage } from "react-icons/fa6";
import { AiFillMail } from "react-icons/ai";
import { MdCall, MdModeEditOutline } from "react-icons/md";

import AddButton from "../components/AddButton";
import { useModals } from "../providers/ModalsProviders";
import { useTranslation } from "../providers/TranslationProvider";
import Table from "../components/Table";

const Users = () => {
  const { translate } = useTranslation();
  const { openModal } = useModals();

  const headers = [
    translate("table.name"),
    translate("table.phone"),
    translate("table.email"),
    translate("table.walletLink"),
    translate("table.course"),
    translate("table.status"),
    translate("table.action"),
  ];

  const data = [
    {
      info: {
        name: "Ahmed Ali",
        img: "/images/Avatar Circle.png",
        gmail: "ahmed74@gmail.com",
      },
      email: "ahmed@e.com",
      phone: "01012345678",
      walletLink: "http://wallet.ahmed",
      course: "React",
      status: "Active",
    },
    {
      info: {
        name: "Sara Mostafa",
        img: "/images/Avatar Circle.png",
        gmail: "sara@gmail.com",
      },
      email: "sara@e.com",
      phone: "01122334455",
      walletLink: "http://wallet.sara",
      course: "Vue.js",
      status: "Pending",
    },
  ];

  const renderActions = () => (
    
    <div className="flex flex-col gap-2 items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-1">
                    <button className="w-[100px] text-[#14CA74] bg-[#05C16833] hover:bg-[#05C16880] rounded-[10px] px-3 p-2">
                      {translate("button.approved")}
                    </button>
                    <button className="w-[100px] text-[#14AFCA] bg-[#14AFCA33] hover:bg-[#14AFCA80] rounded-[10px] px-3 p-2">
                      {translate("button.decline")}
                    </button>
                    <button className="w-[100px] text-[#EA3943] bg-[#EA394333] hover:bg-[#EA394380] rounded-[10px] px-3 p-2">
                      {translate("button.delete")}
                    </button>
                  </div>
    </div>
  );
  

  const handleClick = () => {
    openModal(
      <div className="flex flex-col items-center justify-center gap-8 rounded-[50px] border border-primary p-7 relative z-50 bg-black min-h-[80vh]">
        <form className="w-full flex-col justify-start gap-8 bg-transparent relative z-50">
          {/* اسم */}
          <div className="flex flex-col gap-2">
            <div className="w-full flex items-start justify-between gap-4">
              <label className="flex items-center gap-1 text-sm text-white">
                <FaUser /> Full name
              </label>
              <input
                type="text"
                placeholder="John Carter"
                className="border border-primary p-2 rounded-full bg-[#808596] text-white outline-none w-[70%]"
              />
            </div>

            {/* إيميل */}
            <div className="w-full flex items-start justify-between gap-2 mt-2">
              <label className="flex items-center gap-1 text-sm text-white">
                <AiFillMail /> Email address
              </label>
              <input
                type="email"
                placeholder="John@gmail.com"
                className="border border-primary p-2 rounded-full bg-[#808596] text-white outline-none w-[70%]"
              />
            </div>

            {/* تليفون */}
            <div className="w-full flex items-start justify-between gap-4 mt-2">
              <label className="flex items-center gap-1 text-sm text-white">
                <MdCall /> Phone
              </label>
              <input
                type="tel"
                placeholder="0123456789"
                className="border border-primary p-2 rounded-full bg-[#808596] text-white outline-none w-[70%]"
              />
            </div>

            {/* صورة */}
            <div className="w-full flex items-start justify-between gap-4 mt-2">
              <label className="flex items-center gap-1 text-sm text-white">
                <FaImage /> Photo
              </label>
              <div className="flex flex-col justify-center items-center text-gray-300 border border-primary bg-[#808596] rounded p-4 w-[70%]">
                <div className="text-white p-3 rounded-full bg-[#fafff3]">
                  <FaImage className="text-primary" />
                </div>
                <div className="rounded">
                  <input
                    className="text-primary underline border-none outline-none w-[100px]"
                    placeholder="Click to update"
                    type="text"
                  />
                  or copy and drop
                </div>
                <div className=" text-sm">
                  Shop, info, phone updates, etc. Save in.
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex justify-end items-center">
            <button
              type="submit"
              className="bg-primary text-black py-2 px-10 rounded-full mt-4"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    );
  };

  return (
    <div className="grid grid-cols-1 gap-6 p-4 md:p-6 min-h-[70vh]">
      <AddButton label={translate("button.addUser")} onClick={handleClick} />

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {[
          {
            id: 1,
            title: translate("users.TotalUsers"),
            value: 250,
            icon: <HiUsers className="text-[#CB3CFF]" />,
            bgColor: "bg-[#cb3cff56]",
          },
          {
            id: 2,
            title: translate("users.NewUsers"),
            value: 15,
            icon: <FaUser className="text-[#FDB52A]" />,
            bgColor: "bg-[#fdb72a50]",
          },
          {
            id: 3,
            title: translate("users.TopUsers"),
            value: 200,
            icon: <FaHeart className="text-[#05C168]" />,
            bgColor: "bg-[#05c16969]",
          },
          {
            id: 4,
            title: translate("users.OtherUsers"),
            value: 35,
            icon: <SlOptions className="text-[#086CD9]" />,
            bgColor: "bg-[#4d9ef53f]",
          },
        ].map((stat) => (
          <div
            key={stat.id}
            className="flex flex-col justify-center items-center gap-2 p-4 rounded-[8px] shadow-[inset_0_0_19px_0_rgba(179,244,86,0.5)] relative z-30"
          >
            <div
              className={` flex items-center justify-center p-2 ${stat.bgColor} rounded-full`}
            >
              {stat.icon}
            </div>
            <div className="flex flex-col items-center justify-end text-center w-full h-[60px] md:min-h-[40px]">
              <p className="text-white text-sm lg:text-xl">{stat.title}</p>
              <span className="text-[#AEB9E1] text-[15px]">{stat.value}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Table Section */}
      <Table
        columns={headers.length}
        headers={headers}
        data={data}
        renderCell={(row, rowIndex, colIndex) => {
          switch (colIndex) {
            case 0:
              return (
                <div className="flex items-center gap-0 justify-between w-full">
                  <img
                    src={row.info.img}
                    alt={row.info.name}
                    className="w-6 rounded-full object-cover"
                  />
                  <div className="flex flex-col text-end">
                    <span className="text-[14px] font-semibold">{row.info.name}</span>
                    <span className="text-[12px] text-gray-400">{row.info.gmail}</span>
                  </div>
                </div>
              );
            case 1:
              return row.phone;
            case 2:
              return row.email;
            case 3:
              return (
                <a href={row.walletLink} className="text-blue-500 underline" target="_blank">
                  Wallet
                </a>
              );
            case 4:
              return row.course;
            case 5:
              return (
                <span
                    className={`px-2 py-1 rounded-full ${
                      row.status === "Approved"
                        ? "bg-[#05C16833] text-[#14CA74]"
                        : row.status === "Rejected"
                        ? "bg-[#EA394333] text-[#EA3943]"
                        : "bg-[#14AFCA33] text-[#14AFCA]"
                    }`}
                  >
                    {row.status}
                  </span>
              );
            case 6:
              return renderActions();
            default:
              return null;
          }
        }}
      />
    </div>
  );
};

export default Users;
