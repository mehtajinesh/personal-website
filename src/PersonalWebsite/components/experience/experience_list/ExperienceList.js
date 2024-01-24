import ExperienceItem from "./ExperienceItem";
import experiences from "./experiences.json";

const Experience = () => {
  return (
    <ul className="m-4">
      {experiences.map((experience) => {
        return <ExperienceItem experience={experience} />;
      })}
    </ul>
  );
};

export default Experience;
