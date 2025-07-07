// import { MdModeEditOutline } from "react-icons/md";
// import { FaTrash } from "react-icons/fa";
// import { Link } from "react-router-dom";
  import { useTranslation } from "../providers/TranslationProvider";
import Table from "../components/Table";
import { MdModeEditOutline } from "react-icons/md";
import { FaTrash } from "react-icons/fa";

const Services = () => {
  const { translate } = useTranslation();

  const headers = [
    translate("table.video"),
    translate("table.video"),
    translate("table.video"),
    translate("table.video"),
    translate("table.video"),
    translate("table.video"),
    translate("table.control"),
  ];

  const data = [
    {
      videos: [
        "/images/video.mp4",
        "/images/video.mp4",
        "/images/video.mp4",
        "/images/video.mp4",
        "/images/video.mp4",
        "/images/video.mp4",
      ],
    },
    {
      videos: [
        "/images/video.mp4",
        "/images/video.mp4",
        "/images/video.mp4",
        "/images/video.mp4",
        "/images/video.mp4",
        "/images/video.mp4",
      ],
    },
  ];

  const renderActions = () => (
    <div className="flex items-center justify-center gap-3 w-full h-full ">
      <button
        className="text-[#14CA74] hover:text-green-400 text-xl"
        title={translate("button.edit")}
        onClick={() => console.log("Edit action")}
      >
        <MdModeEditOutline />
      </button>
      <button
        className="text-[#EA3943] hover:text-red-500 text-xl"
        title={translate("button.delete")}
        onClick={() => console.log("Delete action")}
      >
        <FaTrash />
      </button>
    </div>
  );
  return (
    <div className="w-full grid grid-cols-1 px-4 relative z-50">
    <div className="overflow-x-auto">
      <Table
        columns={headers.length}
        headers={headers}
        data={data}
        renderCell={(row, rowIndex, colIndex) => {
          if (colIndex < 6) {
            const videoSrc = row.videos[colIndex];
            return (
              <video
                controls
                className="w-full max-w-[100px] sm:max-w-[128px] h-20 object-cover rounded-md"
              >
                <source src={videoSrc} type="video/mp4" />
                {translate("table.noVideoSupport")}
              </video>
            );
          } else if (colIndex === 6) {
            return renderActions();
          } else {
            return null;
          }
        }}
      />
    </div>
  </div>
  
  );
};

export default Services;
