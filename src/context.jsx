import React, { createContext, useContext, useState } from "react";

// Context oluşturuluyor
const PageContext = createContext({
  currentPage: "home",
  setCurrentPage: () => {},
  pizza: {},
  setPizza: () => {},
});


export function usePageContext() {
  return useContext(PageContext);
}

// Provider bileşeni
export function PageProvider({ children }) {
  const [currentPage, setCurrentPage] = useState("home");
  const [pizza, setPizza] = useState({}); 

  return (
    <PageContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        pizza,
        setPizza,
      }}
    >
      {children}
    </PageContext.Provider>
  );
}
