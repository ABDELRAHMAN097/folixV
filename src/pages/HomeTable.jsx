import { Link } from "react-router-dom";
import { MdModeEditOutline } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { useTranslation } from "../providers/TranslationProvider";
import Table from "../components/Table"; 

const HomeTable = () => {
  const { translate } = useTranslation();

  const tableData = [
    {
      id: 1,
      logo: "/images/logofollix.png",
      Description: "Unlock your financial potential with our platform.",
      WebLink: "https://example.com",
      TelegramLink: "https://t.me/example",
      Video: "/images/video.mp4",
      CourseVideo: "/images/video.mp4",
    },
  ];

  const headers = [
    translate("table.image"),        // لوجو الموقع
    translate("table.description"),  // الوصف
    translate("table.webLink"),      // رابط الموقع
    translate("table.telegramLink"), // رابط التليجرام
    translate("table.video"),        // فيديو
    translate("table.videoCourse"),  // فيديو الدورة
    translate("table.control"),      // التحكم
  ];

  return (
    <div className="relative z-50">
      <div className="overflow-x-auto w-full">
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
                      src={row.logo}
                      alt="Logo"
                      className="w-[50px] h-[50px] object-contain"
                    />
                  </div>
                );
              case 1:
                return (
                  <p className="text-sm text-gray-300 break-words max-w-[200px] mx-auto">
                    {row.Description}
                  </p>
                );
              case 2:
                return (
                  <a
                    href={row.WebLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 underline text-sm"
                  >
                    {translate("button.visit")}
                  </a>
                );
              case 3:
                return (
                  <a
                    href={row.TelegramLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 underline text-sm"
                  >
                    Telegram
                  </a>
                );
              case 4:
                return (
                  <video
                    src={row.Video}
                    controls
                    className="w-[100px] h-[60px] rounded"
                  />
                );
              case 5:
                return (
                  <video
                    src={row.CourseVideo}
                    controls
                    className="w-[100px] h-[60px] rounded"
                  />
                );
              case 6:
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
  );
};

export default HomeTable;
