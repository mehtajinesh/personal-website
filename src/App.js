import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import PersonalWebsite from "./PersonalWebsite";
import Home from "./PersonalWebsite/components/home";
import AboutMe from "./PersonalWebsite/components/about-me";
import Skills from "./PersonalWebsite/components/skills";
import Experience from "./PersonalWebsite/components/experience";
import Education from "./PersonalWebsite/components/education";
import ResearchProjects from "./PersonalWebsite/components/research-projects";
import Recommendations from "./PersonalWebsite/components/recommendations";
import ContactMe from "./PersonalWebsite/components/contact-me";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PersonalWebsite />}>
          <Route index element={<Home />} />
          <Route path="/home" exact={true} element={<Home />} />
          <Route path="about-me" exact={true} element={<AboutMe />} />
          <Route path="skills" exact={true} element={<Skills />} />
          <Route path="experience" exact={true} element={<Experience />} />
          <Route path="education" exact={true} element={<Education />} />
          <Route
            path="research-projects"
            exact={true}
            element={<ResearchProjects />}
          />
          <Route
            path="recommendations"
            exact={true}
            element={<Recommendations />}
          />
          <Route path="contact-me" exact={true} element={<ContactMe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
