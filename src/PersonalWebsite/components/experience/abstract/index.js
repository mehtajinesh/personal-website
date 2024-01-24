const AbstractExperienceView = () => {
  return (
    <div class="row d-flex justify-content-evenly">
      <div class="col-sm d-flex flex-column text-center my-4">
        <img
          src="/resources/citations.png"
          class="rounded mx-auto d-block"
          width="64"
          height="64"
          aria-label="Citations"
        ></img>
        <div class="fw-bold fs-2">30+</div>
        <div class="fs-6">Number of Citations</div>
      </div>
      <div class="col-sm d-flex flex-column text-center my-4">
        <img
          src="/resources/experience.png"
          class="rounded mx-auto d-block"
          width="64"
          height="64"
          aria-label="Years of Experience"
        ></img>
        <div class="fw-bold fs-2">2+</div>
        <div class="fs-6">Years of Experience</div>
      </div>
      <div class="col-sm d-flex flex-column text-center my-4">
        <img
          src="/resources/publications.png"
          class="rounded mx-auto d-block"
          width="64"
          height="64"
          aria-label="Number of International Publications"
        ></img>
        <div class="fw-bold fs-2">3</div>
        <div class="fs-6">Number of International Publications</div>
      </div>
    </div>
  );
};

export default AbstractExperienceView;
