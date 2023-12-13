import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import PersonalWebsite from "./PersonalWebsite";
import Home from "./PersonalWebsite/components/home";
import Skills from "./PersonalWebsite/components/skills";
import Experience from "./PersonalWebsite/components/experience";
import Education from "./PersonalWebsite/components/education";
import Research from "./PersonalWebsite/components/research";
import Projects from "./PersonalWebsite/components/projects";
import Contact from "./PersonalWebsite/components/contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PersonalWebsite />}>
          <Route index element={<Home />} />
          <Route path="home" exact={true} element={<Home />} />
          <Route path="skills" exact={true} element={<Skills />} />
          <Route path="experience" exact={true} element={<Experience />} />
          <Route path="education" exact={true} element={<Education />} />
          <Route
            path="research"
            exact={true}
            element={<Research />}
          />
          <Route
            path="projects"
            exact={true}
            element={<Projects />}
          />
          <Route path="contact" exact={true} element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
