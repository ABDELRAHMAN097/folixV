import React from 'react'
import { useTranslation } from "../providers/TranslationProvider";
const EditCategorys = () => {
  const { translate } = useTranslation();
  return (
   <div className="w-full flex justify-center items-center p-2 md:p-4 relative z-30">
  <form className="flex flex-col gap-4 justify-center items-center w-full max-w-lg">
    <img className="w-32" src="/images/EditCategorys.png" alt="Course Logo" />

    {/* Title */}
    <div className="flex flex-col gap-1 justify-start items-start w-full">
      <label className="text-white">{translate("table.title")}</label>
      <input
        className="text-white bg-[#D9D9D980] p-2 rounded-full hover:border-primary outline-none w-full"
        type="text"
        placeholder={translate("EditCategorys.StockTrading")}
      />
    </div>

    {/* Rate */}
    <div className="flex flex-col gap-1 justify-start items-start w-full">
      <label className="text-white">{translate("table.rate")}</label>
      <input
        className="text-white bg-[#D9D9D980] p-2 rounded-full hover:border-primary outline-none w-full"
        type="text"
        placeholder="7.7"
      />
    </div>

    {/* Description */}
    <div className="flex flex-col gap-1 justify-start items-start w-full">
      <label className="text-white">{translate("table.description")}</label>
      <textarea
        className="text-white bg-[#D9D9D980] p-2 rounded-2xl hover:border-primary outline-none w-full"
        type="text"
        placeholder={translate("EditCategorys.DescriptionCategory")}
      />
    </div>

    {/* Submit Button */}
    <button
      type="submit"
      className="text-white w-[70%] py-3 px-5 bg-primary rounded-2xl hover:bg-opacity-90 transition"
    >
      {translate("OurCourses.Save Change")}
    </button>
  </form>
</div>

  )
}

export default EditCategorys

