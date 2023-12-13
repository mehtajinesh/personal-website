import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div class="px-3 py-2 bg-dark text-white">
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <Link
            to="home"
            class="fs-1 d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none"
          >
            <img
              src="/resources/logo.png"
              class="rounded-circle"
              width="44"
              height="44"
              aria-label="website logo"
            ></img>
            <span class="display-6 fw-bold ms-3">JINESH MEHTA</span>
          </Link>

          <ul class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small nav-pills">
            <li>
              <Link to="home" class="nav-link text-white">
                <span class="fs-5">Home</span>
              </Link>
            </li>
            <li>
              <Link to="skills" class="nav-link text-white">
                <span class="fs-5">Skills</span>
              </Link>
            </li>
            <li>
              <Link to="experience" class="nav-link text-white">
                <span class="fs-5">Experience</span>
              </Link>
            </li>
            <li>
              <Link to="education" class="nav-link text-white">
                <span class="fs-5">Education</span>
              </Link>
            </li>
            <li>
              <Link to="projects" class="nav-link text-white">
                <span class="fs-5">Projects</span>
              </Link>
            </li>
            <li>
              <Link to="research" class="nav-link text-white">
                <span class="fs-5">Research</span>
              </Link>
            </li>
            <li>
              <Link to="contact" class="nav-link text-white">
                <span class="fs-5">Contact</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
