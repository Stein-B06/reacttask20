import articlesContent from "../Components/arrays/articlesContent";
import ArticlesCont from "../Components/ArticlesCont";
import style from "../beertypes.module.css";

function Homebrewing() {
  return (
    <div className={style.beertypepage}>
      <ArticlesCont
        title={articlesContent[0].title}
        description={articlesContent[0].description}
      />
    </div>
  );
}
export default Homebrewing;
