import PublicationItem from "./PublicationItem";
import publications from "./publications.json";

const PublicationsList = () => {
  return (
    <ul className="m-2">
      {publications.map((publication) => {
        return <PublicationItem publication={publication} />;
      })}
    </ul>
  );
};

export default PublicationsList;
