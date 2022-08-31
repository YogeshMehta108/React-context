import * as React from "react";
import { createContext, useContext } from "react";

const PlaceContext = createContext();

const PlaceProvider = ({ children }) => {
  const places = [
    { id: 1, name: "place1" },
    { id: 2, name: "place2" },
    { id: 3, name: "place3" },
  ];

  return (
    <PlaceContext.Provider value={{ places }}>{children}</PlaceContext.Provider>
  );
};

const usePlaceContext = () => {
  const context = useContext(PlaceContext);
  return context;
};

export { PlaceProvider, usePlaceContext };
