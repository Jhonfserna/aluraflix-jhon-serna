import React, { createContext, useState, useContext, useEffect } from "react";
import data from '../data/db.json';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [dataCards, setdataCards] = useState(data);

  useEffect(() => {
    console.log("data", data);
    console.log("DataCards", dataCards);
  })

  const addDataCard = (newCard) => {
    // setdataCards(newCard);
    console.log("nuevo card", newCard);

    setdataCards ({cards :[...dataCards.cards, newCard]})

  }
  
  return (
    <SearchContext.Provider
      value={{
        dataCards,
        addDataCard
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};
