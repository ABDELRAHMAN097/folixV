    // import { useState } from "react";
    // import { useTranslation } from "../providers/TranslationProvider";
    // import AddButton from "../components/AddButton";
    // import { useQuery, useMutation, useQueryClient } from "react-query";
    // import { FaImage } from "react-icons/fa";
    // import { useModals } from "../providers/ModalsProviders";

    // const fakeFetch = async () => {
    //   return new Promise((res) =>
    //     setTimeout(() => res(["/images/Task Card.png"]), 300)
    //   );
    // };

    // const Feedback = () => {
    //   const { translate } = useTranslation();
    //   const [ setSelectedFile] = useState(null);
    //   const queryClient = useQueryClient();
    //   const { openModal, closeModal } = useModals();

    //   const { data: feeds = [], isLoading } = useQuery({
    //     queryKey: ["feedback-images"],
    //     queryFn: fakeFetch,
    //   });

    //   const addMutation = useMutation({
    //   mutationFn: async (formData) => {
    //     const res = await fetch("/api/feedback/upload", {
    //       method: "POST",
    //       body: formData,
    //     });
    //     if (!res.ok) throw new Error("Upload failed");
    //     return res.json();
    //   },
    //   onSuccess: ({ newImage }) => {
    //     queryClient.setQueryData(["feedback-images"], (old = []) => [
    //       ...old,
    //       newImage,
    //     ]);
    //     closeModal();
    //   },
    // });

    //   const AddFeedbackModal = () =>{
    //     const [file, setFile] = useState(null); // هنا بنخزن الملف نفسه
    //   const [preview, setPreview] = useState(null); // ده بس للعرض

    //   const handleFile = (e) => {
    //     const selected = e.target.files?.[0];
    //     if (selected) {
    //       setFile(selected); // نخزن الملف الحقيقي
    //       setPreview(URL.createObjectURL(selected)); // بس للعرض
    //     }
    //   };

    //   const handleAdd = () => {
    //     if (!file) return;

    //     const formData = new FormData();
    //     formData.append("image", file);

        
    //     addMutation.mutate(formData);
    //   };
    //     return(
    //       <div className="flex flex-col items-center justify-center gap-8 rounded-[50px] border border-primary p-7 relative z-50 bg-black min-h-[80vh]">
    //       <h2 className="text-xl font-bold text-primary">
    //         {translate("feedback.title")}
    //       </h2>

    //       <div className="flex flex-col justify-center items-center gap-5 text-gray-300 border border-primary bg-[#808596] rounded py-6 px-4 w-[70%]">
    //         <div className="text-white p-3 rounded-full bg-[#fafff3]">
    //           <FaImage className="text-primary text-xl" />
    //         </div>
    //         <label className="text-primary underline cursor-pointer">
    //           Click to upload
    //           <input
    //             type="file"
    //             accept="image/*"
    //             className="hidden"
    //             onChange={handleFile}
    //           />
    //         </label>
    //         {preview && (
    //           <img src={preview} alt="preview" className="w-[200px] rounded" />
    //         )}
    //         <p className="text-[14px] text-center">
    //           PNG, JPG, or GIF (max. 800x400px)
    //         </p>
    //       </div>

    //       <div className="flex gap-3">
    //         <button
    //           onClick={handleAdd}
    //           className="bg-primary text-white px-6 py-2 rounded-full"
    //         >
    //           {translate("feedback.addBtn")}
    //         </button>
    //         <button
    //           onClick={() => {
    //             closeModal();
    //             setSelectedFile(null);
    //           }}
    //           className="bg-white text-black px-6 py-2 rounded-full"
    //         >
    //           {translate("feedback.cancelBtn")}
    //         </button>
    //       </div>
    //     </div>
    //     )
    //   }
        
      
    //   return (
    //     <div className="p-4 w-full min-h-[70vh] text-white relative">
    //       <AddButton
    //         label={translate("feedback.addNew")}
    //         onClick={() => openModal(<AddFeedbackModal />)}
    //       />

    //       <div className="w-full flex items-center justify-center md:justify-start flex-wrap gap-4 mt-4">
    //         {isLoading ? (
    //           <p className="w-full text-center">جاري التحميل...</p>
    //         ) : (
    //           feeds.map((src, i) => (
    //             <img
    //               key={i}
    //               src={src}
    //               alt={`img-${i}`}
    //               className="w-[45%] md:w-1/4 object-cover rounded"
    //             />
    //           ))
    //         )}
    //       </div>
    //     </div>
    //   );
    // };

    // export default Feedback;


import { useState } from "react";
import { useTranslation } from "../providers/TranslationProvider";
import AddButton from "../components/AddButton";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { FaImage } from "react-icons/fa";
import { useModals } from "../providers/ModalsProviders";

const fakeFetch = async () => {
  return new Promise((res) =>
    setTimeout(() => res(["/images/Task Card.png"]), 300)
  );
};

const fakeAdd = async (imgUrl) => {
  return new Promise((res) =>
    setTimeout(() => res({ success: true, newImage: imgUrl }), 300)
  );
};

const EditFeed = () => {
  const { translate } = useTranslation();
  const queryClient = useQueryClient();
  const { openModal, closeModal } = useModals();

  const { data: feeds = [], isLoading } = useQuery({
    queryKey: ["feedback-images"],
    queryFn: fakeFetch,
  });

  const addMutation = useMutation({
    mutationFn: async (imageData) => {
      if (imageData instanceof FormData) {
        console.log("Uploading file..."); 
        const file = imageData.get("image");
        console.log("File to upload:", file); 
        
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve({ 
              success: true, 
              newImage: URL.createObjectURL(file) 
            });
          }, 500);
        });
      } else {
        
        console.log("Using external link:", imageData);
        return fakeAdd(imageData);
      }
    },
    onSuccess: ({ newImage }) => {
      queryClient.setQueryData(["feedback-images"], (old = []) => [
        ...old,
        newImage,
      ]);
      closeModal();
    },
    onError: (error) => {
      console.error("Upload error:", error);
    }
  });

  const AddFeedbackModal = () => {
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const [imageUrl, setImageUrl] = useState("");
    const [useLink, setUseLink] = useState(false);

    const handleFile = (e) => {
      const selected = e.target.files?.[0];
      if (selected) {
        setFile(selected);
        setPreview(URL.createObjectURL(selected));
      }
    };

    const handleAdd = () => {
      if (useLink) {
        if (!imageUrl.trim()) return;
        addMutation.mutate(imageUrl.trim());
      } else {
        if (!file) return;
        const formData = new FormData();
        formData.append("image", file);
        console.log("FormData:", formData); // للتأكد من إنشاء FormData بشكل صحيح
        addMutation.mutate(formData);
      }
    };

    return (
      <div className="flex flex-col items-center justify-center gap-8 rounded-[50px] border border-primary p-7 relative z-50 bg-black min-h-[80vh]">
        <h2 className="text-xl font-bold text-primary">
          {translate("feedback.title")}
        </h2>

        <div className="flex flex-col justify-center items-center gap-5 text-gray-300 border border-primary bg-[#808596] rounded py-6 px-4 w-[70%]">
          {!useLink ? (
            <>
              <div className="text-white p-3 rounded-full bg-[#fafff3]">
                <FaImage className="text-primary text-xl" />
              </div>
              <label className="text-primary underline cursor-pointer">
                {translate("feedback.clickToUpload")}
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleFile}
                />
              </label>
              {preview && (
                <img src={preview} alt="preview" className="w-[200px] rounded" />
              )}
              <p className="text-[14px] text-center">
                PNG, JPG, or GIF (max. 800x400px)
              </p>
            </>
          ) : (
            <>
              <div className="text-white p-3 rounded-full bg-[#fafff3]">
                <FaImage className="text-primary text-xl" />
              </div>
              <input
                type="url"
                placeholder="أدخل رابط الصورة..."
                className="w-full px-4 py-2 rounded text-black"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
              />
              {imageUrl && (
                <img
                  src={imageUrl}
                  alt="preview"
                  className="w-[200px] rounded"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/images/placeholder.png";
                  }}
                />
              )}
            </>
          )}

          <button
            onClick={() => setUseLink(!useLink)}
            className="text-primary text-sm underline"
          >
            {useLink ? "رفع صورة من الجهاز" : "استخدام رابط صورة خارجية"}
          </button>
        </div>

        <div className="flex gap-3">
          <button
            onClick={handleAdd}
            disabled={(!useLink && !file) || (useLink && !imageUrl.trim())}
            className="bg-primary text-white px-6 py-2 rounded-full disabled:opacity-50"
          >
            {translate("feedback.addBtn")}
          </button>
          <button
            onClick={() => {
              closeModal();
            }}
            className="bg-white text-black px-6 py-2 rounded-full"
          >
            {translate("feedback.cancelBtn")}
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="p-4 w-full min-h-[70vh] text-white relative">
      <AddButton
        label={translate("feedback.addNew")}
        onClick={() => openModal(<AddFeedbackModal />)}
      />

      <div className="w-full flex items-center justify-center md:justify-start flex-wrap gap-4 mt-4">
        {isLoading ? (
          <p className="w-full text-center">جاري التحميل...</p>
        ) : (
          feeds.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`img-${i}`}
              className="w-[45%] md:w-1/4 object-cover rounded"
            />
          ))
        )}
      </div>
    </div>
  );
};

export default EditFeed;