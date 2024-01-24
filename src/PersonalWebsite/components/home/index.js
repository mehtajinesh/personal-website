import NavBar from "./navbar";
import Experience from "../experience";
import EducationCertification from "../education";
import Research from "../research";
import Contact from "../contact";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Experience />
      <EducationCertification />
      <Research />
      <Contact />
    </div>
  );
};

export default Home;
