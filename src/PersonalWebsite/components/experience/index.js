import AbstractExperienceView from "./abstract";
import ExperiencesList from "./experience_list/ExperienceList";

const Experience = () => {
  return (
    <div class="container p-4 ">
      <div class="row">
        <div class="col-md">
          <div class="display-6 fw-bold text-center mb-4">
            Professional Experience
          </div>
          <AbstractExperienceView />
          <ExperiencesList />
        </div>
      </div>
    </div>
  );
};

export default Experience;
