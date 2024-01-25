import articlesContent from "../Components/arrays/articlesContent";
import ArticlesCont from "../Components/ArticlesCont";
import style from "../routes/beercraft.module.css";

function beercraft() {
  return (
    <div className={style.beercraft}>
      <ArticlesCont
        title={articlesContent[1].title}
        description={articlesContent[1].description}
      />
    </div>
  );
}
export default beercraft;
