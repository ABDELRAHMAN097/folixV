import { useQuery, useMutation, useQueryClient } from "react-query";
import { MdModeEditOutline } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslation } from "../providers/TranslationProvider";
import Table from "../components/Table";

// Fake backend simulation
let fakeData = [
  {
    id: 1,
    text: "From they fine john he",
    img2: "/images/Frame 59.png",
    img3: "/images/Frame 61.png",
    img4: "/images/Frame 59.png",
    img5:"/images/Frame 59.png",
    img6: "/images/Frame 59.png",
    Description: "From they fine john he",
    alt: "Video",
    type: "video",
  },
];

const getContacts = async () => {
  return new Promise((res) => setTimeout(() => res([...fakeData]), 500));
};

const deleteContact = async (id) => {
  fakeData = fakeData.filter((item) => item.id !== id);
  return { success: true };
};

const FeedBack = () => {
  const { translate } = useTranslation();
  const queryClient = useQueryClient();

  const { data: usersData = [], isLoading } = useQuery({
    queryKey: ["contacts"],
    queryFn: getContacts,
  });

  const deleteMutation = useMutation({
    mutationFn: deleteContact,
    onSuccess: () => queryClient.invalidateQueries(["contacts"]),
  });

  const handleDelete = (id) => {
    deleteMutation.mutate(id);
  };

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
      img2: "/images/Task Card.png",
      img3: "/images/Task Card.png",
      img4: "/images/Task Card.png",
      img5:"/images/Task Card.png",
      img6: "/images/Task Card.png",
      Description: "From they fine john he",
      alt: "Video",
      type: "video",
    },
  ];

  if (isLoading) return <p className="text-white">جاري التحميل...</p>;

  return (
    <div className="p-2 md:p-4 relative z-50">
      <div className="overflow-x-auto w-full">

      
     <Table 
     columns={headers.length}
     headers={headers}
     data={usersData} renderCell={(row, rowIndex, colIndex) => {
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
              src={row.img2} alt={row.alt} />
            </div>
          );
        case 2:
          return (
            <div className="flex justify-center items-center w-full h-full">
              <img 
              className="w-[60px] object-cover mx-auto rounded"
              src={row.img3} alt={row.alt} />
            </div>
          );
        case 3:
          return (
            <div className="flex justify-center items-center w-full h-full">
              <img 
              className="w-[60px] object-cover mx-auto rounded"
              src={row.img4} alt={row.alt} />
            </div>
          );
        case 4:
          return (
            <div className="flex justify-center items-center w-full h-full">
              <img 
              className="w-[60px] object-cover mx-auto rounded"
              src={row.img5} alt={row.alt} />
            </div>
          );
        case 5:
          return (
            <div className="flex justify-center items-center w-full h-full">
              <img 
              className="w-[60px] object-cover mx-auto rounded"
              src={row.img6} alt={row.alt} />
            </div>
          );
        case 6:
          return (
            <div className="flex justify-center items-center h-full w-full gap-2">
              <Link to={`/EditAboutUs/${row.id}`}>
                <MdModeEditOutline className="text-[#AEB9E1] text-[20px] cursor-pointer" />
              </Link>
              <FaTrash
                onClick={() => handleDelete(row.id)}
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

export default FeedBack;
