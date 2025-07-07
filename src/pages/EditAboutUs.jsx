import { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { useParams, useNavigate } from "react-router-dom";

// fake backend data
let fakeData = [
  {
    id: 1,
    icon: "/images/video.mp4",
    img2: "/images/Frame 59.png",
    img3: "/images/Frame 61.png",
    img4: "/images/Frame 59.png",
    Description: "batman Easly",
    alt: "Video",
    type: "video",
  },
  {
    id: 2,
    icon: "/images/Frame 59.png",
    img2: "/images/Frame 59.png",
    img3: "/images/Frame 61.png",
    img4: "/images/Frame 59.png",
    Description: "Boody Bazoka Easly",
    alt: "Second image",
    type: "image",
  },
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

const isVideo = (url) => {
  return typeof url === "string" && url.match(/\.(mp4|webm|ogg)$/);
};

const EditAboutUs = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [editData, setEditData] = useState({
    icon: "",
    img2: "",
    img3: "",
    img4: "",
    Description: "",
    type: "image",
  });

  const { data: usersData = [], isLoading } = useQuery({
    queryKey: ["contacts"],
    queryFn: getContacts,
  });

  const updateMutation = useMutation({
    mutationFn: updateContact,
    onSuccess: () => {
      queryClient.invalidateQueries(["contacts"]);
      navigate("/AboutUs"); // يرجعك للجدول
    },
  });

  useEffect(() => {
    if (usersData.length > 0 && id) {
      const item = usersData.find((el) => el.id === parseInt(id));
      if (item) {
        setEditData(item);
      }
    }
  }, [usersData, id]);

  const handleMediaChange = (e, key) => {
    const file = e.target.files[0];
    if (file) {
      const newURL = URL.createObjectURL(file);
      const type = file.type.startsWith("video") ? "video" : "image";
      setEditData((prev) => ({
        ...prev,
        [key]: newURL,
        ...(key === "icon" && { type }),
      }));
    }
  };

  const handleSave = () => {
    if (id) {
      updateMutation.mutate({
        id: parseInt(id),
        updated: editData,
      });
    }
  };

  return (
    <div className="p-4 text-white flex flex-col gap-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {["icon", "img2", "img3", "img4"].map((key, i) => (
          <label key={i} className="relative group cursor-pointer">
            {isVideo(editData[key]) ? (
              <video
                src={editData[key]}
                className="w-full h-[150px] object-cover rounded"
                controls
              />
            ) : (
              <img
                src={editData[key]}
                alt={`Media ${i}`}
                className="w-full h-[150px] object-cover rounded"
              />
            )}
            <input
              type="file"
              accept={key === "icon" ? "image/*,video/*" : "image/*"}
              className="hidden"
              onChange={(e) => handleMediaChange(e, key)}
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-sm">
              اضغط للتغيير
            </div>
          </label>
        ))}
      </div>

      <textarea
        value={editData.Description}
        onChange={(e) =>
          setEditData((prev) => ({ ...prev, Description: e.target.value }))
        }
        className="w-full min-h-[150px] p-4 bg-[#D9D9D980] text-white border rounded-xl focus:outline-none"
        placeholder="أدخل الوصف..."
      />

      <button
        onClick={handleSave}
        className="px-6 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700"
      >
        {updateMutation.isLoading ? "جاري الحفظ..." : "حفظ التغييرات"}
      </button>
    </div>
  );
};

export default EditAboutUs;
