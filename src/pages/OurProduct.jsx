import React, { useState } from 'react';
import { useTranslation } from "../providers/TranslationProvider";
const CopyTrade = () => {
  const { translate } = useTranslation();
  return (
    <div className='flex flex-col gap-4 md:gap-8 items-start justify-start w-full'>
      <div className='flex flex-wrap items-center justify-start gap-2 md:gap-4 w-full'>
        <img 
          className='w-[45%] sm:w-[30%] md:w-[25%]'
          src="/images/our1.png" 
          alt="Copy Trade" 
          loading="lazy"
        />
        <img 
          className='w-[45%] sm:w-[30%] md:w-[25%]'
          src="/images/our2.png" 
          alt="Copy Trade" 
          loading="lazy"
        />
        <img 
          className='w-[45%] sm:w-[30%] md:w-[25%]'
          src="/images/our3.png" 
          alt="Copy Trade" 
          loading="lazy"
        />
      </div>

      <div className='w-full'>
        <textarea
          className='w-full md:w-[53%] h-40 bg-[#D9D9D980] border-4 border-primary rounded-[25px] outline-none p-4'
          placeholder={translate("OurProduct.placeholder")}
        ></textarea>
      </div>
    </div>
  );
};



const LiveTrade = () => 
  {
    const { translate } = useTranslation();
    return (
  <div className='flex flex-col gap-4 md:gap-8 items-start justify-start w-full'>
    <div className='flex flex-wrap items-center justify-start gap-2 md:gap-4 w-full'>
      <img 
        className='w-[45%] sm:w-[30%] md:w-[25%]'
        src="/images/our2.png" 
        alt="Live Trade" 
        loading="lazy"
      />
      <img 
        className='w-[45%] sm:w-[30%] md:w-[25%]'
        src="/images/our2.png" 
        alt="Live Trade" 
        loading="lazy"
      />
      <img 
        className='w-[45%] sm:w-[30%] md:w-[25%]'
        src="/images/our3.png" 
        alt="Live Trade" 
        loading="lazy"
      />
    </div>

    <div className='w-full'>
      <textarea
        className='w-full md:w-[53%] h-40 bg-[#D9D9D980] border-4 border-primary rounded-[25px] outline-none p-4'
        placeholder={translate("OurProduct.placeholder")}
      ></textarea>
    </div>
  </div>
);}

const Recommendations = () => 
  {
    const { translate } = useTranslation();
    return (
  <div className='flex flex-col gap-4 md:gap-8 items-start justify-start w-full'>
    <div className='flex flex-wrap items-center justify-start gap-2 md:gap-4 w-full'>
      <img 
        className='w-[45%] sm:w-[30%] md:w-[25%]'
        src="/images/our2.png" 
        alt="Recommendations" 
        loading="lazy"
      />
      <img 
        className='w-[45%] sm:w-[30%] md:w-[25%]'
        src="/images/our2.png" 
        alt="Recommendations" 
        loading="lazy"
      />
      <img 
        className='w-[45%] sm:w-[30%] md:w-[25%]'
        src="/images/our3.png" 
        alt="Recommendations" 
        loading="lazy"
      />
    </div>

    <div className='w-full'>
      <textarea
        className='w-full md:w-[53%] h-40 bg-[#D9D9D980] border-4 border-primary rounded-[25px] outline-none p-4'
        placeholder={translate("OurProduct.placeholder")}
      ></textarea>
    </div>
  </div>
);
}

const OurProduct = () => {
  const { translate } = useTranslation();
  const [activeTab, setActiveTab] = useState('copy');

  const renderContent = () => {
    switch (activeTab) {
      case 'copy':
        return <CopyTrade />;
      case 'live':
        return <LiveTrade />;
      case 'recommend':
        return <Recommendations />;
      default:
        return null;
    }
  };

  return (
    <div className="p-2 md-p-4 min-h-[70vh] text-white relative z-10">
      {/* Tabs - Responsive with scroll for small devices */}
      <div className="flex overflow-x-auto pb-2 mb-4 md:mb-6 scrollbar-hide">
        <div className="flex space-x-4 md:space-x-8 min-w-max">
          <button
            onClick={() => setActiveTab('copy')}
            className={`pb-2 px-1 md:px-0 transition duration-300 whitespace-nowrap ${
              activeTab === 'copy' 
                ? 'border-b-2 border-primary text-white font-medium' 
                : 'text-gray-400'
            }`}
          >
            {translate("OurProduct.CopyTrade")}
          </button>
          <button
            onClick={() => setActiveTab('live')}
            className={`pb-2 px-1 md:px-0 transition duration-300 whitespace-nowrap ${
              activeTab === 'live' 
                ? 'border-b-2 border-primary text-white font-medium' 
                : 'text-gray-400'
            }`}
          >
            {translate("OurProduct.LiveTrade")}
          </button>
          <button
            onClick={() => setActiveTab('recommend')}
            className={`pb-2 px-1 md:px-0 transition duration-300 whitespace-nowrap ${
              activeTab === 'recommend' 
                ? 'border-b-2 border-primary text-white font-medium' 
                : 'text-gray-400'
            }`}
          >
            {translate("OurProduct.Recommendations")}
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="mt-2 md:mt-4 w-full">{renderContent()}</div>
    </div>
  );
};

export default OurProduct;