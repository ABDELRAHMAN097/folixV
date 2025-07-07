import React from 'react'
  import { useTranslation } from "../providers/TranslationProvider";
const EditCourseContent = () => {
  const { translate } = useTranslation();
  return (
   <div className="w-full flex justify-center items-center p-2 md:p-4 relative z-30">
  <form className="flex flex-col gap-4 justify-center items-center w-full max-w-lg">
    <img className="w-32" src="/images/Frame co.png" alt="Course Logo" />

    {/* Title */}
    <div className="flex flex-col gap-1 justify-start items-start w-full">
      <label className="text-white">{translate("EditCourseContent.ContentTitle")}</label>
      <input
        className="text-white bg-[#D9D9D980] p-2 rounded-full hover:border-primary outline-none w-full"
        type="text"
        placeholder={translate("EditCourseContent.StockTrading")}
      />
    </div>

    {/* Session Number */}
    <div className="flex flex-col gap-1 justify-start items-start w-full">
      <label className="text-white">{translate("EditCourseContent.SessionNum")}</label>
      <input
        className="text-white bg-[#D9D9D980] p-2 rounded-full hover:border-primary outline-none w-full"
        type="text"
        placeholder={translate("EditCourseContent.Session")}
      />
    </div>

    {/* Session Title */}
    <div className="flex flex-col gap-1 justify-start items-start w-full">
      <label className="text-white">{translate("OurCourses.SessionTitle")}</label>
      <input
        className="text-white bg-[#D9D9D980] p-2 rounded-full hover:border-primary outline-none w-full"
        type="text"
        placeholder={translate("EditCourseContent.Foundations of Stock Trading")}
      />
    </div>

    {/* Telegram Link */}
    <div className="flex flex-col gap-1 justify-start items-start w-full">
      <label className="text-white">{translate("table.telegram")}</label>
      <input
        className="text-white bg-[#D9D9D980] p-2 rounded-full hover:border-primary outline-none w-full"
        type="text"
        placeholder="http://t.me/link"
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

export default EditCourseContent