import { useEffect, lazy, Suspense } from "react";
import "./App.css";
import MyHeader from "./Component/Header/MyHeader";
import MyNavbar from "./Component/Navbar/MyNavbar";
import MyAbout from "./Component/About/MyAbout";
import CustomCursor from "./Component/CustomCursor/CustomCursor";
import SocialBar from "./Component/SocialBar/SocialBar";
import MyFooter from "./Component/Footer/MyFooter";
import ScrollToTopButton from "./Component/ScrollToTop/ScrollToTopButton";

// Code-split below-the-fold sections for instant FCP and LCP speed performance
const MyExperience = lazy(() => import("./Component/Experience/MyExperience"));
const MySkills = lazy(() => import("./Component/Skills/MySkills"));
const MyProjrct = lazy(() => import("./Component/Project/MyProject"));
const MyResume = lazy(() => import("./Component/Resume/MyResume"));
const ContactForm = lazy(() => import("./Component/ContactForm/ContactForm"));

function SectionLoader() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "200px",
      opacity: 0.6
    }}>
      <div style={{
        width: "36px",
        height: "36px",
        border: "3px solid rgba(255,255,255,0.1)",
        borderTopColor: "#38bdf8",
        borderRadius: "50%",
        animation: "spin 0.8s linear infinite"
      }}></div>
    </div>
  );
}

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <CustomCursor />
      <SocialBar />
      <MyHeader />
      <MyNavbar />
      <main>
        <MyAbout />
        <Suspense fallback={<SectionLoader />}>
          <MyExperience />
          <MySkills />
          <MyProjrct />
          <MyResume />
          <ContactForm />
        </Suspense>
      </main>
      <MyFooter />
      <ScrollToTopButton />
    </>
  );
}

export default App;
