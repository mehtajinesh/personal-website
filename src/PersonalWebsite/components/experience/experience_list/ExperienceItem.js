import "./ExperienceItem.css";
const ExperienceItem = ({ experience = {} }) => {
  return (
    <div className="card m-4 p-4">
      <div className="row">
        <div className="col-md-2 flex-column">
          <img
            className="img-fluid rounded"
            src={experience.company_logo}
            width="512"
            height="512"
            alt="university logo"
          />
        </div>
        <div className="col-md-10 flex-column">
          <div className="fs-4 fw-bold my-auto">{experience.company_name}</div>
          <div className="fs-5 mb-1">{experience.job_title}</div>
          <div className="fs-6 mb-1">{experience.duration}</div>
          <div className="d-flex">
            <div class=" col-sm" id="skills">
              {experience.relevant_skills.map((skill) => {
                return (
                  <button type="button" class="btn btn-warning m-1" id="skill">
                    {skill}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ExperienceItem;
