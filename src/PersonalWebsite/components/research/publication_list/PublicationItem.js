const PublicationItem = ({ publication = {} }) => {
  return (
    <div className="card m-4 p-4">
      <div className="row">
        <div className="col-md-2 flex-column">
          <img
            className="img-fluid rounded"
            src={publication.conference_logo}
            width="256"
            height="256"
            alt="conference logo"
          />
        </div>
        <div className="col-md-10 flex-column">
          <div className="fs-4 fw-bold my-auto">
            {publication.conference_name}
          </div>
          <div className="fs-5 mb-1">{publication.title}</div>
          <div className="d-flex">
            <button
              className="btn btn-dark me-2"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={"#" + publication.id}
              aria-expanded="false"
              aria-controls="Abstract Text"
            >
              View Abstract
            </button>

            <a
              className="btn btn-dark"
              href={publication.paper_link}
              target="_blank"
            >
              Paper Link
            </a>
          </div>
          <div className="collapse mt-2" id={publication.id}>
            <div className="card card-body">{publication.abstract}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PublicationItem;
