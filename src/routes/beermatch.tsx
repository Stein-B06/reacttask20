import articlesContent from "../Components/arrays/articlesContent";
import ArticlesCont from "../Components/ArticlesCont";
import style from "../routes/beermatch.module.css";

function beermatch() {
  return (
    <div className={style.beermatch}>
      <ArticlesCont
        title={articlesContent[2].title}
        description={articlesContent[2].description}
      />
    </div>
  );
}
export default beermatch;
