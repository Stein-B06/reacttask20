import React, { useState } from "react";
import beerTypes from "../Components/beertypes";
import style from "../beertypes.module.css";

// This is the Beertypes-page

const BeerTypes: React.FC = () => {
  const [query, setQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState(beerTypes);
  const [selectedResult, setSelectedResult] = useState<{
    name: string;
    description: string;
  } | null>(null);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    // Reset selectedResult when search input is changed
    setSelectedResult(null);

    const filtered = beerTypes.filter((type) => {
      const lowerCaseQuery = value.toLowerCase();
      return (
        type.name.toLowerCase().includes(lowerCaseQuery) ||
        type.description.toLowerCase().includes(lowerCaseQuery)
      );
    });

    setFilteredResults(filtered);
  };

  const handleResultClick = (result: { name: string; description: string }) => {
    setSelectedResult(result);
  };

  const handleClearClick = () => {
    setQuery(""); // Clear the search input
    setSelectedResult(null); // Clear the selected result
    setFilteredResults(beerTypes); // Reset filtered results to the initial state
  };

  return (
    <div className={style.beertypepage}>
      <h1>Beertypes</h1>
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={handleSearch}
        />
        <button className={style.clearBtn} onClick={handleClearClick}>
          Clear
        </button>{" "}
      </div>
      <p>
        {selectedResult && (
          <div className={style.resultoutput}>
            <h3>{selectedResult.name}</h3>
            <p>{selectedResult.description}</p>
          </div>
        )}
      </p>
      <ul className={style.beerlist}>
        {filteredResults.map((type, index) => (
          <li
            key={index}
            onClick={() => handleResultClick(type)}
            className="searched-title"
          >
            {type.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BeerTypes;
