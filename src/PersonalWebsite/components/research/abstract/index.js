const AbstractResearchView = () => {
  return (
    <div class="d-flex justify-content-evenly">
      <div class="d-flex flex-column">
        <img
          src="/resources/citations.png"
          class="rounded mx-auto d-block"
          width="64"
          height="64"
          aria-label="Citations"
        ></img>
        <div class="text-center fw-bold fs-2">30+</div>
        <div class="fs-6">Number of Citations</div>
      </div>
      <div class="d-flex flex-column">
        <img
          src="/resources/experience.png"
          class="rounded mx-auto d-block"
          width="64"
          height="64"
          aria-label="Years of Experience"
        ></img>
        <div class="text-center fw-bold fs-2">2+</div>
        <div class="fs-6">Years of Experience</div>
      </div>

      <div class="d-flex flex-column">
        <img
          src="/resources/publications.png"
          class="rounded mx-auto d-block"
          width="64"
          height="64"
          aria-label="Number of International Publications"
        ></img>
        <div class="text-center fw-bold fs-2">3</div>
        <div class="fs-6">Number of International Publications</div>
      </div>
    </div>
  );
};

export default AbstractResearchView;
