import React, { useState } from "react";
import AddButton from "../components/AddButton";
import { useModals } from "../providers/ModalsProviders";
import { RiVideoFill } from "react-icons/ri";
import { useMutation, useQuery, useQueryClient } from "react-query";

const EditServices = () => {
  // const imgs = Array(5).fill("../../images/Frame.png");
 
  const { data: imgs = [] } = useQuery(
  ["services"],
  async () => {
    // هترجع الداتا الموجودة في الكاش
    return ["/images/Frame.png"];
  },
  {
    initialData: ["/images/Frame.png"],
  }
);

  const { openModal } = useModals();
  // add-img
  const [File, setFile] = useState(null);
  const [Perview, setPerview] = useState(null);

  const queryClient = useQueryClient();
  const handelChange = (e) => {
    const selected = e.target.files?.[0];
    if (selected) {
      setFile(selected);
      setPerview(URL.createObjectURL(selected));
    }
  };

  const handelUpdate = () => {
    if (!File) return;
    const newData = new FormData();
    newData.append("Image", File); // ✅
    mutation.mutate(newData);
  };
    // الِAPI  الحقيقي
  // const mutation = useMutation({
  //   mutationFn: async (formData) => {
  //     const res = await fetch("/api/services/upload", {
  //       method: "POST",
  //       body: formData,
  //     });
  //     if (!res.ok) throw new Error("update faild");
  //     return res.json();
  //   },
  //   onSuccess: (newImageData) => {
  //     queryClient.setQueryData(["services"], (old = []) => [
  //       ...old,
  //       newImageData.imageUrl, // لو الـ API بيرجع رابط الصورة كده
  //     ]);
  //   },
  // });

  const mutation = useMutation({
  mutationFn: async (formData) => {
    // محاكاة لرفع الصورة
    return new Promise((resolve) => {
      setTimeout(() => {
        const imageUrl = URL.createObjectURL(formData.get("Image"));
        resolve({ imageUrl });
      }, 500); // نص ثانية تأخير للتجربة
    });
  },
  onSuccess: (newImageData) => {
    queryClient.setQueryData(["services"], (old = []) => [
      ...(old || []),
      newImageData.imageUrl,
    ]);
  },
});


  const handleClick = () => {
    openModal(
      <div className="flex flex-col items-center justify-center gap-8 rounded-[50px] border border-primary p-7 relative z-50 bg-black min-h-[80vh]">
        <h2 className="text-xl font-bold mb-2 text-primary">Add New Service</h2>
        <div className="flex flex-col justify-center items-center gap-5 text-gray-300 border border-primary bg-[#808596] rounded py-6 px-4 w-[70%]">
          <div className="text-white p-3 rounded-full bg-[#fafff3]">
            <RiVideoFill className="text-primary text-xl" />
          </div>
          <div className="rounded">
            <label className="text-primary underline cursor-pointer border-none outline-none w-[100px] inline-block">
              Click to update
              <input type="file" onChange={handelChange} className="hidden" />
            </label>
            or copy and drop
          </div>
          {Perview &&(
            <img 
            src={Perview}
            alt={Perview}
            className="w-[110px]"
            />
          )}
          <div className=" text-sm">
            SVG, PNG, JPG or GIF (max. 800 x 400px).
          </div>
        </div>
        <button
          onClick={handelUpdate}
          className="mt-4 bg-primary text-white w-[227px] py-2 rounded-full"
        >
          Add
        </button>
      </div>
    );
  };
  return (
    <div className="w-full p-2 md:p-4 min-h-[70vh] relative z-10 ">
      {/* Add User Button */}
      <AddButton label="Add New" onClick={handleClick} />

      <div className="w-full flex flex-wrap justify-center md:justify-stretch items-center gap-2 md:gap-1">
        {imgs.map((imgSrc, index) => (
          <img
            key={index}
            className="w-[30%] md:min-w-[20%] flex-grow"
            src={imgSrc}
            alt={`service-${index}`}
          />
        ))}
      </div>
    </div>
  );
};

export default EditServices;
