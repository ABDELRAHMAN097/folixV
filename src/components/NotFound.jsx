import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "../providers/TranslationProvider";
const NotFound = () => {
  const navigate = useNavigate();
  const { translate } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-Primary to-PrimaryDark text-center relative z-30 p-4"
    >
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 space-y-6">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <h1 className="text-9xl font-bold text-Primary">404</h1>
        </motion.div>

        <h2 className="text-2xl font-semibold text-Primary">
          {translate ? translate("notFound.title") : "الصفحة غير موجودة"}
        </h2>

        <p className="text-Primary">
          {translate
            ? translate("notFound.message")
            : "عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها."}
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/")}
          className="px-6 py-3 bg-Primary text-primary rounded-lg font-medium hover:bg-Primary/80 transition-colors"
        >
          {translate
            ? translate("notFound.backHome")
            : "العودة للصفحة الرئيسية"}
        </motion.button>

        <div className="pt-6 border-t border-Primary">
          <p className="text-sm text-Primary">
            {translate
              ? translate("notFound.helpText")
              : "إذا كنت تعتقد أن هذا خطأ، يرجى الاتصال بفريق الدعم"}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default NotFound;
