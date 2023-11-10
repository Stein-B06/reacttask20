import "../App.css";
import Button from "../Components/button";
import Search from "../Components/search";
import ArticleCard from "../Components/ArticleCard";
import articles from "../Components/articles/articles";

function MainPage() {
  return (
    <div className="app">
      <main>
        <h1>Homemade Happiness: Your Guide to DIY Beer Brewing</h1>

        {/* Component search */}
        <div className="search">
          <Search></Search>
        </div>

        {/* component ArticleCard added to sections. the array with title and description is imported
      from articles.ts. articles from ArticleCard added individual, used title and description as props */}
        <section className="section">
          <ArticleCard
            title={articles[0].title}
            description={articles[0].description}
          />
          {/* component med en property */}
          <Button text={"Read more"} />
        </section>
        <section className="section">
          <ArticleCard
            title={articles[1].title}
            description={articles[1].description}
          />

          {/* component med en property */}
          <Button text={"Read more"} />
        </section>
        <section className="section">
          <ArticleCard
            title={articles[2].title}
            description={articles[2].description}
          />

          {/* component med en property */}
          <Button text={"Read more"} />
        </section>
      </main>
    </div>
  );
}

export default MainPage;
