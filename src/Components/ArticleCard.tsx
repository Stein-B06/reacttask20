import Article from "./articles/articles";

type Article = {
  title: string;
  description: string;
};

const articleCard = (articles: Article) => {
  return (
    <div className="section">
      <h2>{articles.title}</h2>
      <p>{articles.description}</p>
    </div>
  );
};
export default articleCard;
