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
    icon: "/images/video.mp4",
    img2: "/images/Frame 59.png",
    img3: "/images/Frame 61.png",
    img4: "/images/Frame 59.png",
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

const AboutUs = () => {
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
    translate("table.video"),
    translate("table.image1"),
    translate("table.image2"),
    translate("table.image3"),
    translate("table.description"),
    translate("table.control"),
  ];

  const renderCell = (row, rowIndex, colIndex) => {
    switch (colIndex) {
      case 0:
        return (
          <video controls className="w-[60px] h-[40px] mx-auto rounded">
            <source src={row.icon} type="video/mp4" />
          </video>
        );
      case 1:
        return (
          <img
            src={row.img2}
            alt={row.alt}
            className="w-[50px] object-cover rounded mx-auto hover:scale-105 transition-transform"
          />
        );
      case 2:
        return (
          <img
            src={row.img3}
            alt={row.alt}
            className="w-[50px] object-cover rounded mx-auto hover:scale-105 transition-transform"
          />
        );
      case 3:
        return (
          <img
            src={row.img4}
            alt={row.alt}
            className="w-[50px] object-cover rounded mx-auto hover:scale-105 transition-transform"
          />
        );
      case 4:
        return <p className="text-[12px] break-words max-w-[200px] mx-auto">{row.Description}</p>;
      case 5:
        return (
          <div className="flex justify-center items-center gap-2 w-full h-full ">
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
  };

  if (isLoading) return <p className="text-white">جاري التحميل...</p>;

  return (
    <div className="p-2 md:p-4 relative z-50">
      <Table
        columns={headers.length}
        headers={headers}
        data={usersData}
        renderCell={renderCell}
      />
    </div>
  );
};

export default AboutUs;
