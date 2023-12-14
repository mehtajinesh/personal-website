import "./EducationCertificationListItem.css";
const EducationCertificationItem = ({ education_certificate = {} }) => {
  return (
    <div className="card m-4 p-4">
      <div className="row">
        <div className="col-md-2 flex-column">
          <img
            className="img-fluid rounded"
            src={education_certificate.university_logo}
            width="256"
            height="256"
            alt="university logo"
          />
        </div>
        <div className="col-md-10 flex-column">
          <div className="fs-4 fw-bold my-auto">
            {education_certificate.university_name}
          </div>
          <div className="fs-5 mb-1">{education_certificate.degree_name}</div>
          <div className="d-flex">
            <label class="fs-6 col-sm-2 col-form-label">
              Relevant Courses:
            </label>
            <div class=" col-sm-10" id="top_areas">
              {education_certificate.top_areas.map((top_area) => {
                return (
                  <button
                    type="button"
                    class="btn btn-warning m-1"
                    id="top_area"
                  >
                    {top_area}
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
export default EducationCertificationItem;
