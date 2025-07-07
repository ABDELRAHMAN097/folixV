import { Helmet } from "react-helmet-async";
import { Suspense, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import AppRoutes from "./AppRoutes";
import Loader from "./components/general/Loader";
import Footer from "./components/footer/Footer";
import SideBAr from "./components/sidebar/SideBAr";
import { ActivPageProvider } from "./providers/ActivPageContext";

function App() {
  // useEffect(() => {
  //   const lenis = new Lenis();

  //   function raf(time) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }

  //   requestAnimationFrame(raf);

  //   return () => {
  //     lenis.destroy();
  //   };
  // }, []);
  return (
    <>
      <Helmet>
        <title>Follix || Dashboard</title>
        <meta
          name="description"
          content="A React app with all required libraries"
        />
      </Helmet>

      <div className="bg-black relative">
        <Layout className="bg-black relative">
          <AppRoutes />
        </Layout>
      </div>
    </>
  );
}

export default App;

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <ActivPageProvider>
      <div className="md:grid min-h-screen md:grid-cols-[auto_1fr] bg-black relative flex">
        {/* Sidebar */}
        <SideBAr sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* Main Content with Navbar */}
        <div className="flex flex-col flex-1 min-h-screen">
          <Navbar
            toggleSidebar={() => setSidebarOpen((prev) => !prev)}
            sidebarOpen={sidebarOpen}
          />

          <div className="flex-1 overflow-auto w-full relative z-30 transition-all duration-300">
            {/* Blur background */}
            <div
              style={{
                background:
                  "radial-gradient(circle, #B3F456CC 0%, rgba(0, 0, 0, 0) 70%)",
                filter: "blur(40px)",
              }}
              className="h-[800px] w-[1600px] rounded-full fixed top-[200px] -left-[50px] z-0 pointer-events-none"
            ></div>

            <Suspense fallback={<Loader />}>{children}</Suspense>
          </div>
        </div>
      </div>
    </ActivPageProvider>
  );
};
