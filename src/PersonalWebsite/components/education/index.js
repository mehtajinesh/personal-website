import EducationCertificationList from "./education_certification_list/EducationCertificationList";

const EducationCertification = () => {
  return (
    <div class="container p-4 ">
      <div class="row">
        <div class="col-md">
          <div class="display-6 fw-bold text-center mb-4">
            Education & Certifications
          </div>
          <EducationCertificationList />
        </div>
      </div>
    </div>
  );
};

export default EducationCertification;
