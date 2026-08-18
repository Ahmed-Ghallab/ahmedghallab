import { useEffect } from "react";
import "./App.css";
import MyAbout from "./Component/About/MyAbout";
import MyExperience from "./Component/Experience/MyExperience";
import MyHeader from "./Component/Header/MyHeader";
import MyNavbar from "./Component/Navbar/MyNavbar";
import MySkills from "./Component/Skills/MySkills";
import MyProjrct from "./Component/Project/MyProject";
import MyResume from "./Component/Resume/MyResume";
import MyFooter from "./Component/Footer/MyFooter";
import ScrollToTopButton from "./Component/ScrollToTop/ScrollToTopButton";
import CustomCursor from "./Component/CustomCursor/CustomCursor";
import SocialBar from "./Component/SocialBar/SocialBar";
import ContactForm from "./Component/ContactForm/ContactForm";

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
        <MyExperience />
        <MySkills />
        <MyProjrct />
        <MyResume />
        <ContactForm />
      </main>
      <MyFooter />
      <ScrollToTopButton />
    </>
  );
}

export default App;
