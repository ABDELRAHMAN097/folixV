import { FaSearch } from "react-icons/fa";
import { IoNotificationsCircle } from "react-icons/io5";
import { useTranslation } from "../../providers/TranslationProvider";
import { useActivPage } from "../../providers/ActivPageContext";
import { useState } from "react";

const Navbar = ({ toggleSidebar }) => {
  const { language, setLanguage, translate } = useTranslation();
  const { activePage } = useActivPage();
  const [showSearch, setShowSearch] = useState(false);

  return (
    // <div
    //   className={`fixed top-0 right-0 z-50 bg-black px-4 sm:px-6 py-4 shadow-lg transition-all duration-300
    //     ${sidebarOpen ? (language === "ar" ? "lg:pr-64" : "lg:pl-64") : ""}`}
    // >

    <div
      className="w-full z-50 bg-black nav px-4 md:px-6 py-6 shadow-lg">
      <div className="flex items-center justify-between flex-wrap gap-4">
        {/* Start Section */}
        <div className="flex items-center gap-1">
          {/* Burger Menu on Mobile */}
          <button
            className="md:hidden text-white text-xl md:text-2xl"
            onClick={toggleSidebar}
          >
            ☰
          </button>

          {/* Title */}
          <h2 className="text-sm lg:text-xl font-semibold text-white whitespace-nowrap">
            {translate(`${activePage}`)}
          </h2>
        </div>

        {/* End Section */}
        <div className="flex items-center gap-1 md:gap-4 flex-wrap">
          {/* Search Input */}
          <div className="relative hidden sm:block">
            <FaSearch className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-black" />
            <input
              type="text"
              placeholder={translate("navbar.search")}
              className="md:px-8 w-[20px] md:w-[170px] py-1 border text-black bg-[#F5F7FACC] border-gray-300 rounded-full text-sm focus:outline-none"
            />
          </div>

          {/* Search Icon for Mobile */}
          <button
            className="sm:hidden text-white"
            onClick={() => setShowSearch(!showSearch)}
          >
            <FaSearch className="w-5 h-5" />
          </button>

          {/* Toggle Search Input on Mobile */}
          {showSearch && (
            <input
              type="text"
              placeholder={translate("navbar.search")}
              className="block sm:hidden pl-2 w-[100px] md:w-[170px] pr-4 py-1 border text-black bg-[#F5F7FACC] border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:border-transparent transition-all"
            />
          )}

          {/* Notifications */}
          <IoNotificationsCircle className="w-8 h-8 text-primary cursor-pointer hover:text-[#628334] transition-colors" />

          {/* Language Toggle */}
          <button
            className="bg-primary px-3 py-1 rounded-lg hover:bg-[#628334] text-sm text-white transition-colors"
            onClick={() => {
              setLanguage(language === "ar" ? "en" : "ar");
            }}
          >
            {language === "ar" ? "English" : "العربية"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
