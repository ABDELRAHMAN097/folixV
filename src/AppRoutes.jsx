import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import NotFound from "./components/NotFound";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import OTPVerification from "./pages/OTPVerification";
import ResetPassword from "./pages/ResetPassword";
import Properties from "./pages/Properties";
import Users from "./pages/Users";
import Requests from "./pages/Requests";
import Messages from "./pages/Messages";
import OurProduct from "./pages/OurProduct";
import Blog from "./pages/Blog";
import AboutUs from "./pages/AboutUs";
import Feedback from "./pages/Feedback";
import ContactUs from "./pages/ContactUs";
import EditAboutUs from "./pages/EditAboutUs";
import OurCourses from "./pages/OurCourses";
import EditCourseContent from "./pages/EditCourseContent";
import EditCourseBooking from "./pages/EditCourseBooking";
import EditCategorys from "./pages/EditCategorys";
import EditHome from "./pages/EditHome";
import EditServices from "./pages/EditServices";
import Services from "./pages/Services";
import EditBlog from "./pages/EditBlog";
import EditFeed from "./pages/EditFeed";
import EditContactUs from "./pages/EditContactUs";
import FeaturedPartener from "./pages/FeaturedPartener";
import HomeTable from "./pages/HomeTable";

// OurCourses

const AppRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location]);
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/EditAboutUs/:id" element={<EditAboutUs />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/otp-verification" element={<OTPVerification />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/properties" element={<Properties />} />
      <Route path="/EditHome" element={<EditHome />} />
      <Route path="/HomeTable" element={<HomeTable />} />
      <Route path="/Users" element={<Users />} />
      <Route path="/EditServices" element={<EditServices />} />
      <Route path="/Services" element={<Services />} />
      <Route path="/requests" element={<Requests />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/OurCourses" element={<OurCourses />} />
      <Route path="/EditCategorys" element={<EditCategorys />} />
      <Route path="/EditCourseContent" element={<EditCourseContent />} />
      <Route path="/EditCourseBooking" element={<EditCourseBooking />} />
      <Route path="/ourProduct" element={<OurProduct />} />
      <Route path="/Blog" element={<Blog />} />
      <Route path="/EditBlog" element={<EditBlog />} />
      <Route path="/AboutUs" element={<AboutUs />} />
      <Route path="/feedback" element={<Feedback />} />
      <Route path="/EditFeed" element={<EditFeed />} />
      <Route path="/FeaturedPartener" element={<FeaturedPartener />} />
      <Route path="/contactUs" element={<ContactUs />} />
      <Route path="/EditContactUs" element={<EditContactUs />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;