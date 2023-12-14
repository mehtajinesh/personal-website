import EducationCertificationItem from "./EducationCertificationListItem";
import education_certifications from "./education_certifications.json";

const EducationCertificationList = () => {
  return (
    <ul className="m-4">
      {education_certifications.map((education_certificate) => {
        return (
          <EducationCertificationItem
            education_certificate={education_certificate}
          />
        );
      })}
    </ul>
  );
};

export default EducationCertificationList;
