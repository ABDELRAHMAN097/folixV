import { MdModeEditOutline } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslation } from "../providers/TranslationProvider";
import Table from "../components/Table"; // تأكد أن المسار صح

const Blog = () => {
  const { translate } = useTranslation();

  const blogData = [
    {
      id: 1,
      image: "/images/Instractor-video.png",
      title: "Unraveling the Mysteries of the Ocean",
      description: "From the mesmerizing depths of the sea to its diverse marine life...",
    },
    {
      id: 2,
      image: "/images/Instractor-video.png",
      title: "The Beauty of Coral Reefs",
      description: "Coral reefs are the rainforests of the ocean...",
    },
  ];

  const headers = [
    translate("table.image"),      // صورة المقال
    translate("table.title"),      // العنوان
    translate("table.description"),// الوصف
    translate("table.control"),    // التحكم (إجراء التعديل أو الحذف)
  ];

  return (
    <div className="p-2 md:p-4 relative z-50">
      <div className="overflow-x-auto w-full">
        <Table
          columns={headers.length}
          headers={headers}
          data={blogData}
          renderCell={(row, rowIndex, colIndex) => {
            switch (colIndex) {
              case 0:
                return (
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={row.image}
                      alt={row.title}
                      className="w-[80px] h-[50px] object-cover rounded"
                    />
                  </div>
                );
              case 1:
                return (
                  <p className="text-sm font-semibold break-words max-w-[200px] mx-auto">
                    {row.title}
                  </p>
                );
              case 2:
                return (
                  <p className="text-sm text-gray-300 break-words max-w-[250px] mx-auto">
                    {row.description}
                  </p>
                );
              case 3:
                return (
                  <div className="flex justify-center items-center gap-2">
                    <Link to={`/EditBlog/${row.id}`}>
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

export default Blog;
