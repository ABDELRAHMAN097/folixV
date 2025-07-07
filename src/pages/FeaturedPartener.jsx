import { MdModeEditOutline } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslation } from "../providers/TranslationProvider";
import Table from "../components/Table";

// const deleteContact = async (id) => {
//   fakeData = fakeData.filter((item) => item.id !== id);
//   return { success: true };
// };

const FeaturedPartener = () => {
  const { translate } = useTranslation();

  

  

  // const handleDelete = (id) => {
  //   deleteMutation.mutate(id);
  // };

  // if (isLoading) return <p className="text-white">جاري التحميل...</p>;

  const headers = [
    translate("table.text"),
    translate("table.image"),
    translate("table.image"),
    translate("table.image"),
    translate("table.image"),
    translate("table.image"),
    translate("table.control"),
  ];
  const data = [
    {
      text: "From they fine john he",
      img1: "/images/B.png",
      img2: "/images/B.png",
      img3: "/images/B.png",
      img4: "/images/B.png",
      img5: "/images/B.png",
      id: 1,
    }
  ] 

  return (
    <div className="p-2 md:p-4 relative z-50">
      <div className="overflow-x-auto w-full">
        <Table
          columns={headers.length}
          headers={headers}
          data={data}
          renderCell={(row, rowIndex, colIndex) => {
            switch (colIndex) {
              case 0:
                return (
                  <div className="flex justify-center items-center w-full h-full">
                    <p className="text-[12px] break-words max-w-[200px] mx-auto">{row.text}</p>
                  </div>
                );
              case 1:
                return (
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      className="w-[60px] object-cover mx-auto rounded"
                      src={row.img2}
                      alt={row.text}
                    />
                  </div>
                );
              case 2:
                return (
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      className="w-[60px] object-cover mx-auto rounded"
                      src={row.img2}
                        alt={row.text}
                      />
                    </div>
                  );
              case 3:
                return (
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      className="w-[60px] object-cover mx-auto rounded"
                      src={row.img2}
                          alt={row.text}
                        />
                      </div>
                    );
              case 4:
                return (
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      className="w-[60px] object-cover mx-auto rounded"
                      src={row.img2}
                            alt={row.text}
                          />
                        </div>
                      );
              case 5:
                return (
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      className="w-[60px] object-cover mx-auto rounded"
                      src={row.img2}
                              alt={row.text}
                            />
                          </div>
                        );
              case 6:
                return (
                  <div className="flex justify-center items-center h-full w-full gap-2">
                    <Link to={`/EditPartner/${row.id}`}>
                      <MdModeEditOutline className="text-[#AEB9E1] text-[20px] cursor-pointer" />
                    </Link>
                    <FaTrash
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

export default FeaturedPartener;
