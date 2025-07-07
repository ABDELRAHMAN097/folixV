import { useQuery, useMutation, useQueryClient } from "react-query";
import { useState } from "react";
import { MdModeEditOutline } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import AddButton from "../components/AddButton";
import { useTranslation } from "../providers/TranslationProvider";
import Table from "../components/Table";

// fake backend simulation
let fakeData = [
  { id: 1, icon: "/images/Frame 61.png", link: "http://hjrhbfikuhfkjhnvj" },
  { id: 2, icon: "/images/Frame 59.png", link: "FOLLIX@gmail.com" },
];

const getContacts = async () => {
  return new Promise((res) => setTimeout(() => res([...fakeData]), 500));
};

const updateContact = async ({ id, updated }) => {
  fakeData = fakeData.map((item) =>
    item.id === id ? { ...item, ...updated } : item
  );
  return { success: true };
};

const deleteContact = async (id) => {
  fakeData = fakeData.filter((item) => item.id !== id);
  return { success: true };
};

const addContact = async (newContact) => {
  fakeData.push(newContact);
  return { success: true };
};

const ContactUs = () => {
  const { translate } = useTranslation();
  const queryClient = useQueryClient();
  const [editIndex, setEditIndex] = useState(null);
  const [editedLink, setEditedLink] = useState("");
  const [editedIcon, setEditedIcon] = useState("");
  const [newId, setNewId] = useState(3);

  const { data: usersData = [], isLoading } = useQuery({
    queryKey: ["contacts"],
    queryFn: getContacts,
  });

  const updateMutation = useMutation({
    mutationFn: updateContact,
    onSuccess: () => {
      queryClient.invalidateQueries(["contacts"]);
      setEditIndex(null);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteContact,
    onSuccess: () => queryClient.invalidateQueries(["contacts"]),
  });

  const addMutation = useMutation({
    mutationFn: addContact,
    onSuccess: () => {
      queryClient.invalidateQueries(["contacts"]);
    },
  });

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditedLink(usersData[index].link);
    setEditedIcon(usersData[index].icon);
  };

  const handleSave = (id) => {
    updateMutation.mutate({
      id,
      updated: { link: editedLink, icon: editedIcon },
    });
  };

  const handleDelete = (id) => {
    deleteMutation.mutate(id);
  };

  const handleAddNew = () => {
    const newContact = {
      id: newId,
      icon: "/images/Frame.png",
      link: "dfgfdfs",
    };
    addMutation.mutate(newContact);
    setNewId((prev) => prev + 1);
    setTimeout(() => {
      setEditIndex(usersData.length);
      setEditedIcon("");
      setEditedLink("");
    }, 100);
  };

  if (isLoading) return <p className="text-white">جاري التحميل...</p>;

  return (
    <div className="p-2 md:p-4 relative z-50">
      <AddButton label={translate("button.addNew")} onClick={handleAddNew} />

      <div className="overflow-x-auto w-full mt-4">
        <Table
          columns={3}
          headers={[
            translate("table.icon"),
            translate("table.link"),
            translate("table.control"),
          ]}
          data={usersData}
          renderCell={(row, rowIndex, colIndex) => {
            const isEditing = editIndex === rowIndex;

            switch (colIndex) {
              case 0:
                return isEditing ? (
                  <input
                    type="text"
                    value={editedIcon}
                    onChange={(e) => setEditedIcon(e.target.value)}
                    className="p-1 text-black w-[80%] rounded"
                  />
                ) : (
                  <img
                    src={row.icon}
                    alt="icon"
                    className="w-[40px] h-[40px] object-contain mx-auto"
                  />
                );

              case 1:
                return isEditing ? (
                  <input
                    type="text"
                    value={editedLink}
                    onChange={(e) => setEditedLink(e.target.value)}
                    className="p-1 text-black w-[80%] rounded"
                  />
                ) : (
                  <p className="break-all text-[13px]">{row.link}</p>
                );

              case 2:
                return isEditing ? (
                  <button
                    onClick={() => handleSave(row.id)}
                    className="bg-primary text-black px-3 py-1 rounded text-sm"
                  >
                    {translate("button.save")}
                  </button>
                ) : (
                  <div className="flex justify-center items-center gap-2">
                    <button onClick={() => handleEdit(rowIndex)}>
                      <MdModeEditOutline className="text-[#AEB9E1] text-[20px]" />
                    </button>
                    <button onClick={() => handleDelete(row.id)}>
                      <FaTrash className="text-[#EA3943] text-[20px]" />
                    </button>
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

export default ContactUs;
