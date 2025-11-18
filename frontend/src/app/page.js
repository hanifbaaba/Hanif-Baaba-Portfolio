import About from "./Components/About/page";
import Footer from "./Components/Footer/page";
import Navbar from "./Components/Navbar/page";
import ContactPage from "./Pages/ContactPage/page";
import ProjectPage from "./Pages/ProjectPage/page";
import SkillsPage from "./Pages/SkillsPage/page";
export default function Home() {
  return (
    <>
      <Navbar />
      <About />
      <ProjectPage />
      <SkillsPage />
      <ContactPage />
      <Footer />
    </>
  );
}
