import "../App.css";
import Button from "../Components/button";
import ArticleCard from "../Components/ArticleCard";
import articles from "../Components/arrays/articles";
import { Link } from "react-router-dom";

// This is the Homepage

function MainPage() {
  return (
    <div className="app">
      <main>
        <h1>Homemade Happiness: Your Guide to DIY Beer Brewing</h1>

        {/* component ArticleCard added to sections. the array with title and description is imported
      from articles.ts. articles from ArticleCard added individual, used title and description as props */}
        <section className="section">
          <ArticleCard
            title={articles[0].title}
            description={articles[0].description}
          />
          {/* component med en property */}

          <Link to="Homebrewing">See More</Link>
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
