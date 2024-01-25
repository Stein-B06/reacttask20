import artCont from "./arrays/articlesContent";

type artCont = {
  title: string;
  description: string;
};

const artContCard = (articlesContent: artCont) => {
  return (
    <div className="section">
      <h2>{articlesContent.title}</h2>
      <p>{articlesContent.description}</p>
    </div>
  );
};
export default artContCard;
