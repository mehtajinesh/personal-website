import NavBar from "./navbar";
import EducationCertification from "../education";
import Research from "../research";
import Contact from "../contact";

const Home = () => {
  return (
    <div>
      <NavBar />
      <EducationCertification />
      <Research />
      <Contact />
    </div>
  );
};

export default Home;
