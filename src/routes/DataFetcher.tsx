// src/components/DataFetcher.tsx
import React, { useState, useEffect } from "react";
import styles from "../beerhistory.module.css";

// This is the Beerhistory-page

interface BeerHistoryItem {
  id: number;
  year: number;
  yearFacts: string;
}

const fakeApiData: BeerHistoryItem[] = [
  // ... (the fakeApiData array)

  {
    id: 1,
    year: 1890,
    yearFacts:
      "In 1890, the Pilsner style of beer became popular, named after the Czech city of Pilsen.",
  },
  {
    id: 2,
    year: 1920,
    yearFacts:
      "During the Prohibition era (1920-1933) in the United States, many breweries turned to producing non-alcoholic products to survive.",
  },
  {
    id: 3,
    year: 1978,
    yearFacts:
      "In 1978, the American homebrewing community successfully lobbied to legalize homebrewing, leading to the growth of the craft beer movement.",
  },
  {
    id: 4,
    year: 1759,
    yearFacts:
      "In 1759, Arthur Guinness signed a 9,000-year lease for the St. James’s Gate Brewery in Dublin, Ireland, where Guinness beer is brewed to this day.",
  },
  {
    id: 5,
    year: 1516,
    yearFacts:
      "In 1516, the Reinheitsgebot (Beer Purity Law) was enacted in the Duchy of Bavaria, allowing only barley, water, and hops to be used in brewing beer.",
  },
  {
    id: 6,
    year: 1842,
    yearFacts:
      "In 1842, the first pilsner lager was brewed in Plzeň, Czech Republic, leading to the creation of the popular Pilsner style.",
  },
  {
    id: 7,
    year: 1982,
    yearFacts:
      "In 1982, the Great American Beer Festival (GABF) was held for the first time, becoming a significant event in the American craft beer scene.",
  },
  {
    id: 8,
    year: 1903,
    yearFacts:
      "In 1903, Heineken introduced its distinctive green bottle, which has since become an iconic symbol of the brand.",
  },
  {
    id: 9,
    year: 1965,
    yearFacts:
      "In 1965, the first successful attempt at brewing mead in the United States was documented, sparking interest in this ancient beverage.",
  },
  {
    id: 10,
    year: 2008,
    yearFacts:
      "In 2008, the global financial crisis led to a decline in beer consumption, impacting the beer industry worldwide.",
  },
  {
    id: 11,
    year: 1602,
    yearFacts:
      "In 1602, the Dutch East India Company was established, influencing the global trade of spices, including those used in brewing.",
  },
  {
    id: 12,
    year: 1933,
    yearFacts:
      "In 1933, Prohibition in the United States was repealed, leading to the resurgence of the brewing industry.",
  },
  {
    id: 13,
    year: 1862,
    yearFacts:
      "In 1862, Louis Pasteur published research on the role of yeast in fermentation, contributing to advancements in brewing science.",
  },
  {
    id: 14,
    year: 1990,
    yearFacts:
      "In 1990, the craft beer movement gained momentum in the United States, with the number of microbreweries increasing significantly.",
  },
  {
    id: 15,
    year: 1553,
    yearFacts:
      'In 1553, the first known book on brewing, "The Grete Herball," was published, providing insights into brewing practices of the time.',
  },
  {
    id: 16,
    year: 1785,
    yearFacts:
      "In 1785, the first lager beer was brewed in Bavaria, Germany, marking a significant development in beer styles.",
  },
  {
    id: 17,
    year: 2004,
    yearFacts:
      "In 2004, the hop shortage affected the brewing industry, leading to increased prices and a focus on hop cultivation.",
  },
  {
    id: 18,
    year: 1666,
    yearFacts:
      "In 1666, the Great Fire of London destroyed many breweries, influencing the rebuilding of the city and its brewing infrastructure.",
  },
  {
    id: 19,
    year: 1945,
    yearFacts:
      "In 1945, after World War II, breweries in Europe faced challenges in rebuilding and resuming beer production.",
  },
  {
    id: 20,
    year: 1820,
    yearFacts:
      "In 1820, the development of the Drummonds roasting drum revolutionized the roasting process for malting barley.",
  },
  {
    id: 21,
    year: 1995,
    yearFacts:
      "In 1995, the World Beer Cup was held for the first time, recognizing excellence in brewing on an international level.",
  },
  {
    id: 22,
    year: 1935,
    yearFacts:
      "In 1935, canned beer was first sold, providing a more convenient packaging option for consumers.",
  },
  {
    id: 23,
    year: 2010,
    yearFacts:
      "In 2010, the craft beer movement continued to grow, with a focus on innovative flavors and brewing techniques.",
  },
  {
    id: 24,
    year: 1968,
    yearFacts:
      "In 1968, the American Homebrewers Association was founded, promoting the hobby of homebrewing across the country.",
  },
  {
    id: 25,
    year: 1806,
    yearFacts:
      'In 1806, the term "pale ale" was coined in England, describing a style of beer with pale malt and a distinctive hop flavor.',
  },
  {
    id: 26,
    year: 2000,
    yearFacts:
      'In 2000, the Brewers Association introduced the term "craft brewer" to distinguish small, independent breweries.',
  },
  {
    id: 27,
    year: 1883,
    yearFacts:
      "In 1883, the Ball Corporation began manufacturing glass jars, contributing to the packaging of beer and other beverages.",
  },
  {
    id: 28,
    year: 1940,
    yearFacts:
      "In 1940, with the onset of World War II, breweries faced challenges in sourcing ingredients and adapting to wartime conditions.",
  },
  {
    id: 29,
    year: 1757,
    yearFacts:
      "In 1757, the first recorded shipment of porter, a dark beer style, was made from London to Ireland.",
  },
  {
    id: 30,
    year: 1860,
    yearFacts:
      "In 1860, Louis Pasteur published research on the role of yeast in fermentation, contributing to advancements in brewing science.",
  },
];

const DataFetcher: React.FC = () => {
  const [data, setData] = useState<BeerHistoryItem[]>([]);
  const [loading, setLoading] = useState(true);

  const [visibleItems, setVisibleItems] = useState(5); // Number of items initially visible on page

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate an async delay for 3 seconds
        await new Promise((resolve) => setTimeout(resolve, 3000));

        // Simulate fetching data/ sorts from earliest to latest from array
        const sortedData = fakeApiData.slice().sort((a, b) => a.year - b.year);
        setData(sortedData);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleLoadMore = () => {
    // Load 5 more items or set to total number if already reached
    setVisibleItems((prevVisibleItems) =>
      prevVisibleItems + 5 <= fakeApiData.length
        ? prevVisibleItems + 5
        : fakeApiData.length
    );
  };

  return (
    <div id={styles.beerhistory}>
      {loading && <p className={styles.loading}>Loading...</p>}

      {data.length > 0 && (
        <div className={styles.beerlist}>
          <h1>Beerhistory</h1>
          <ul className={styles.historylist}>
            {data.slice(0, visibleItems).map((item: BeerHistoryItem) => (
              <li key={item.id} className={styles.listItem}>
                {/* Text can be added to the array here */}
                {item.yearFacts}
              </li>
            ))}
          </ul>
          {visibleItems < fakeApiData.length && (
            <button className={styles.loadMore} onClick={handleLoadMore}>
              Load More
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default DataFetcher;
