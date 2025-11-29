import About from "./Components/About/page";

import Footer from "./Components/Footer/page";
import Navbar from "./Components/Navbar/page";
import Contact from "./Components/Contact/page";
import ProjectPage from "./Pages/ProjectPage/page";
import SkillsPage from "./Pages/SkillsPage/page";
export default function Home() {
  return (
    <>
      <Navbar />
      <About />
      <ProjectPage />
      <SkillsPage />
      <Contact />
      <Footer />
    </>
  );
}
