import { useTranslation } from "../../providers/TranslationProvider"

const Loader = () => {
  const { language } = useTranslation()
  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4 flex-col gap-8">

      <div className="flex items-center gap-4 size-24 md:size-32 lg:size-48 relative ">
        <img src="/images/logo.png" alt="logo" />
      </div>
      <p className="text-primary text-xl md:text-2xl lg:text-3xl font-bold">{language === "ar" ? "جاري التحميل..." : "Loading..."}</p>
    </div>
  )
}

export default Loader