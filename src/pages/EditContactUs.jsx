import { useQuery, useMutation, useQueryClient } from "react-query";
import { useState } from "react";
import { MdModeEditOutline } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import AddButton from "../components/AddButton";

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

const EditContactUs = () => {
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
      icon: "",
      link: "",
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
    <div className="p-2 md:p-4">  
      <AddButton 
      onClick={handleAddNew}
      label="Add New"
      />
      <div className="w-full mb-5 mt-5 rounded-lg p-6 shadow-[inset_0_0_19px_0_rgba(179,244,86,0.5)] relative z-30 overflow-x-auto">
        <table className="min-w-full text-start border-collapse">
          <thead>
            <tr className="text-center text-[14px] bg-black text-white">
              <th className="text-start p-3 font-semibold">Icon</th>
              <th className="text-center p-3 font-semibold">Link</th>
              <th className="text-center p-3 font-semibold">Control</th>
            </tr>
          </thead>
          <tbody>
            {usersData.map((user, index) => (
              <tr key={user.id} className="text-center text-sm text-[#AEB9E1] py-4">
                <td className="p-1 md:p-3 flex flex-col text-start font-medium py-4">
                  {editIndex === index ? (
                    <>
                      <input
                        type="text"
                        value={editedIcon}
                        onChange={(e) => setEditedIcon(e.target.value)}
                        className="text-white px-2 py-1 w-[60px] md:w-[160px] mb-2 outline-none shadow-[inset_0_0_19px_0_rgba(179,244,86,0.5)] rounded"
                      />
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files[0];
                          if (file) {
                            const localUrl = URL.createObjectURL(file);
                            setEditedIcon(localUrl);
                          }
                        }}
                        className="text-white text-xs outline-none"
                      />
                    </>
                  ) : (
                    <img
                      className="w-[40px] md:w-[50px]"
                      src={user.icon}
                      alt="icon-img"
                    />
                  )}
                </td>

                <td className="p-3 text-[15px] md:text-[25px] text-center break-words max-w-[200px]">
                  {editIndex === index ? (
                    <input
                      type="text"
                      value={editedLink}
                      onChange={(e) => setEditedLink(e.target.value)}
                      className="text-white px-2 py-1 w-full outline-none shadow-[inset_0_0_19px_0_rgba(179,244,86,0.5)] rounded"
                    />
                  ) : (
                    user.link
                  )}
                </td>

                <td className="p-1 text-center">
                  <div className="flex items-center justify-center gap-2">
                    {editIndex === index ? (
                      <button
                        onClick={() => handleSave(user.id)}
                        className="bg-green-600 text-white px-2 py-1 rounded text-sm"
                      >
                        حفظ
                      </button>
                    ) : (
                      <MdModeEditOutline
                        onClick={() => handleEdit(index)}
                        className="cursor-pointer text-[#AEB9E1] text-[20px]"
                      />
                    )}

                    <FaTrash
                      onClick={() => handleDelete(user.id)}
                      className="cursor-pointer text-[#EA3943] text-[20px]"
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EditContactUs;
