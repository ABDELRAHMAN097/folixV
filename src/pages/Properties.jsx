// import { MdModeEditOutline } from "react-icons/md";
// import { FaTrash } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import Services from "./Services";
// import Blog from "./Blog";
// import AboutUs from "./AboutUs";
// import Feedback from "./Feedback";
// import ContactUs from "./ContactUs";
// import FeaturedPartener from "./FeaturedPartener";
// import HomeTable from "./HomeTable";
// import { useTranslation } from "../providers/TranslationProvider";

// const Properties = () => {
//     const { translate } = useTranslation();
  

//   return (
//     <div className="w-full flex flex-col gap-1 overflow-auto relative z-30">
      
     
      
//       <div className="flex flex-col gap-1 p-0">
//         <div className="p-2 md:p-4">
//           <HomeTable />
//         </div>
//       <h2 
//       dir=""
//       className="text-[24px] font-[500] text-white ms-2 md:ms-4">
//         {translate("sidebar.services")}
//       </h2>
//       <Services />
//       <h2 
//       dir=""
//       className="text-[24px] font-[500] text-white ms-2 md:ms-4">
//         {translate("sidebar.blog")}
//       </h2>
//       <Blog />
//       <h2 
//       dir=""
//       className="text-[24px] font-[500] text-white ms-2 md:ms-4">
//         {translate("sidebar.aboutUs")}
//       </h2>
//       <AboutUs />
//       <h2 
//       dir=""
//       className="text-[24px] font-[500] text-white ms-2 md:ms-4">
//         {translate("sidebar.feedback")}
//       </h2>
//       <Feedback />
//       <h2 
//       dir=""
//       className="text-[24px] font-[500] text-white ms-2 md:ms-4">
//         {translate("sidebar.featuredPartener")}
//         </h2>
//       <FeaturedPartener />
//       <h2 
//       dir=""
//       className="text-[24px] font-[500] text-white ms-2 md:ms-4">
//         {translate("sidebar.contactUs")}
//         </h2>
//       <ContactUs />
      
//       </div>
//     </div>
//   );
// };

// export default Properties;


import React from 'react'
import HomeTable from './HomeTable'
import { useTranslation } from '../providers/TranslationProvider'
import Services from './Services';
import Blog from './Blog';
import AboutUs from './AboutUs';
import FeedBack from './Feedback';
import FeaturedPartener from './FeaturedPartener';
import ContactUs from './ContactUs';

const Properties = () => {
  const { translate } = useTranslation();
  return (
    <div className='w-full grid grid-cols-1 gap-2 sm:gap-4 md:gap-6 lg:gap-8 col-span-2'>
      
      <div className='min-h-[40px] md:p-4 col-span-full'>
        <HomeTable />
      </div>

      <div className='min-h-[100px] col-span-2'>
      <h2 
      className="text-xl md:text-2xl lg:text-3xl font-[500] text-white ms-2 md:ms-4">
        {translate("sidebar.services")}
      </h2>
      <Services />
      </div>

      <div className='min-h-[100px] col-span-2'>
      <h2 
      className="text-xl md:text-2xl lg:text-3xl font-[500] text-white ms-2 md:ms-4">
        {translate("sidebar.blog")}
      </h2>
      <Blog />
      </div>

      <div className='min-h-[100px] col-span-2'>
      <h2 
      className="text-xl md:text-2xl lg:text-3xl font-[500] text-white ms-2 md:ms-4">
        {translate("sidebar.aboutUs")}
      </h2>
      <AboutUs />
      </div>

      <div className='min-h-[100px] col-span-2'>
      <h2 
      className="text-xl md:text-2xl lg:text-3xl font-[500] text-white ms-2 md:ms-4">
        {translate("sidebar.feedback")}
      </h2>
      <FeedBack />
      </div>
      
      <div className='min-h-[100px] col-span-2'>
      <h2 
      className="text-xl md:text-2xl lg:text-3xl font-[500] text-white ms-2 md:ms-4">
        {translate("sidebar.featuredPartener")}
        </h2>
      <FeaturedPartener />
      </div>

      <div className='min-h-[100px] col-span-2'>
      <h2 
      className="text-xl md:text-2xl lg:text-3xl font-[500] text-white ms-2 md:ms-4">
        {translate("sidebar.contactUs")}
        </h2>
      <ContactUs />
      </div>

    </div>
  )
}

export default Properties

