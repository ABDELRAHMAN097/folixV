import { FaHome } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { MdInfoOutline } from "react-icons/md";
import { BsInboxes } from "react-icons/bs";
import { MdOutlineFeedback } from "react-icons/md";
import { TiStarOutline } from "react-icons/ti";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { TbCurrencyDollar } from "react-icons/tb";
import { FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "../../providers/TranslationProvider";
import { useActivPage } from "../../providers/ActivPageContext";

const SideBAr = ({ sidebarOpen }) => {
  const { language, translate } = useTranslation();
  const { setActivePage } = useActivPage();
  const location = useLocation();
  const navigate = useNavigate();
  const sidebarItems = [
    {
      label: translate("sidebar.overview"),
      icon: TbLayoutDashboardFilled,
      active: true,
      path: "/",
    },
    {
      label: translate("sidebar.properties"),
      icon: FaHome,
      active: false,
      path: "/properties",
    },
    {
      label: translate("sidebar.Users"),
      icon: FaUser,
      active: false,
      path: "/Users",
    },
    {
      label: translate("sidebar.requests"),
      icon: TbCurrencyDollar,
      active: false,
      path: "/requests",
    },
    {
      label: translate("sidebar.Messages"),
      icon: MdMessage,
      active: false,
      path: "/Messages",
    },
    {
      label: translate("sidebar.OurCourses"),
      icon: MdMessage,
      active: false,
      path: "/OurCourses",
    },
    {
      label: translate("sidebar.services"),
      icon: TiStarOutline,
      active: false,
      path: "/services",
    },
    {
      label: translate("sidebar.ourProduct"),
      icon: BsInboxes,
      active: false,
      path: "/ourProduct",
    },
    {
      label: translate("sidebar.blog"),
      icon: BsInboxes,
      active: false,
      path: "/blog",
    },
    {
      label: translate("sidebar.aboutUs"),
      icon: MdInfoOutline,
      active: false,
      path: "/aboutUs",
    },
    {
      label: translate("sidebar.feedback"),
      icon: MdOutlineFeedback,
      active: false,
      path: "/feedback",
    },
    {
      label: translate("sidebar.contactUs"),
      icon: MdCall,
      active: false,
      path: "/contactUs",
    },
  ];
  const direction = document?.documentElement?.dir || "ltr";

  return (
    <div
      className={`transition-all duration-300 bg-black shadow-lg z-40 min-h-[calc(100vh+250px)]
    w-64 ${language === "ar" ? "right-0" : "left-0"}
    ${sidebarOpen ? "block" : "hidden"} 
    fixed md:relative md:block`}
    >
      {/* Logo placeholder */}
      <div className="w-full mt-[45px] md:mt-[0px]">
        <div className="flex items-center justify-center space-x-3 mb-8 pb-4 border-b border-primary w-full">
          <img
            className="w-38"
            src="/images/logofollix.png"
            alt="follix-logo"
          />
        </div>
      </div>
      <div className="flex-1 overflow-y-auto pr-0 pt-0">
        {/* Navigation */}
        <nav className="space-y-2 ">
          {sidebarItems.map((item, index) => (
            <div
              key={index}
              className={`flex items-center space-x-2 px-4 py-3 cursor-pointer transition-colors ${
                direction === "rtl" ? "rounded-tr-full rounded-br-full" : "rounded-tl-full rounded-bl-full"
              } ${
                location.pathname === item.path
                  ? "bg-primary text-white"
                  : "text-white hover:text-black hover:bg-gray-100"
              }`}
              onClick={() => {
                navigate(item.path);
                setActivePage(item.label);
              }}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};
export default SideBAr;
