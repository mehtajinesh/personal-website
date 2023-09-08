import { Outlet } from "react-router-dom";
const PersonalWebsite = () => {
  return (
    <div className="d-flex flex-column">
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};
export default PersonalWebsite;
