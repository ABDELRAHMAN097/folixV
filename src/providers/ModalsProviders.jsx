  import { createContext, useContext, useState } from "react";

  const ModalsContext = createContext();

  export const ModalsProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    const openModal = (content) => {
      setModalContent(content);
      setIsOpen(true);
      document.body.style.overflow = "hidden";
    };

    const closeModal = () => {
      setIsOpen(false);
      document.body.style.overflow = "auto";
    };

    return (
      <ModalsContext.Provider
        value={{ isOpen, openModal, closeModal, modalContent, setModalContent }}
      >
        {children}

        {isOpen && (
          <div 
          onClick={() => closeModal()}
          className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen  z-50  flex items-center justify-center backdrop-blur-2xl bg-black/10">
            <div
              className="relative md:w-1/2 w-[90%] min-h-[40vh] md:min-h-[80vh] rounded-[50px] bg-white z-50"
              onClick={(e) => e.stopPropagation()}
            >

              
              {modalContent}
            </div>
          </div>
        )}
      </ModalsContext.Provider>
    );
  };

  export const useModals = () => {
    const context = useContext(ModalsContext);
    if (!context) {
      throw new Error("useModals must be used within a ModalsProvider");
    }
    return context;
  };
