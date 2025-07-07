// components/Modal.jsx
import { useModal } from "../../providers/ModalContext";
import { FaUser } from "react-icons/fa"; // تأكد من استيراد الأيقونات الصحيحة

const ModalContent = () => {

  return (
    <div className="fixed top-8 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex items-center justify-center">
              <div
                style={{
                  background:
                    "radial-gradient(circle, #B3F456CC 0%, rgba(0, 0, 0, 0) 70%)",
                  filter: "blur(40px)",
                }}
                className="h-[800px] w-[1600px] rounded-full fixed top-[200px] -left-[50px] z-0 pointer-events-none"
              ></div>
              <div
                
                className="bg-gray/50 border border-primary rounded-lg p-6 w-[400px] max-w-full shadow-lg"
              >
                <form className="flex flex-col justify-start gap-1 bg-transparent relative z-50">
                  <div className="flex flex-col gap-0">
                    <div className="w-full flex items-start justify-between gap-4">
                      <label className="flex items-center gap-1 text-sm text-white">
                        {" "}
                        <FaUser /> Full name
                      </label>
                      <input
                        type="text"
                        placeholder="John Carter"
                        className="border border-primary p-2 rounded-full bg-[#808596] text-white outline-none w-[70%]"
                      />
                    </div>
    
                    <div className="w-full flex items-start justify-between gap-2 mt-2">
                      <label className="flex items-center gap-1 text-sm text-white">
                        <AiFillMail /> Email address
                      </label>
                      <input
                        type="email"
                        placeholder="John @gmail.com"
                        className="border border-primary p-2 rounded-full bg-[#808596] text-white outline-none w-[70%]"
                      />
                    </div>
    
                    <div className="w-full flex items-start justify-between gap-4 mt-2">
                      <label className="flex items-center gap-1 text-sm text-white">
                        <MdCall /> Phone
                      </label>
                      <input
                        type="tel"
                        placeholder="0123456789"
                        className="border border-primary p-2 rounded-full bg-[#808596] text-white outline-none w-[70%]"
                      />
                    </div>
    
                    <div className="w-full flex items-start justify-between gap-4 mt-2">
                      <label className="flex items-center gap-1 text-sm text-white">
                        <FaImage /> Photo
                      </label>
                      <div className="flex flex-col justify-center items-center text-gray-300 border border-primary bg-[#808596] rounded p-4 w-[70%]">
                        <div className="text-white p-3 rounded-full bg-[#fafff3]">
                          <FaImage className="text-primary" />{" "}
                        </div>
    
                        <div className="rounded">
                          <input className="text-primary underline border-none outline-none w-[100px]"
                          placeholder="Click to update" 
                          type="text" />
                          or copy and drop
                        </div>
    
                        <div className=" text-sm">
                          Shop, info, phone updates, etc. Save in.
                        </div>
                      </div>
                    </div>
                  </div>
    
                  <div className="w-full flex justify-end items-center">
                    <button
                      type="submit"
                      className="bg-primary text-black py-2 px-10 rounded-full mt-4"
                    >
                      Add
                    </button>
                  </div>
                </form>
              </div>
            </div>
  );
};

const Modal = () => {
  const { isModalOpen } = useModal();

  if (!isModalOpen) return null;

  return (
    <div className="fixed top-8 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div
        style={{
          background: "radial-gradient(circle, #B3F456CC 0%, rgba(0, 0, 0, 0) 70%)",
          filter: "blur(40px)",
        }}
        className="h-[800px] w-[1600px] rounded-full fixed top-[200px] -left-[50px] z-0 pointer-events-none"
      ></div>
      <ModalContent />
    </div>
  );
};

export default Modal;