import AbstractResearchView from "./abstract";
import PublicationsList from "./publication_list/PublicationList";

const Research = () => {
  return (
    <div class="container p-4 ">
      <div class="row">
        <div class="col-md">
          <div class="display-6 fw-bold text-center mb-4">
            Research & Publications
          </div>
          <AbstractResearchView />
          <PublicationsList />
        </div>
      </div>
    </div>
  );
};

export default Research;
