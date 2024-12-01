import { createContext, useContext, useState } from "react";

// Context oluşturma
const PageContext = createContext();

// Provider bileşeni
export const PageProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <PageContext.Provider value={[currentPage, setCurrentPage]}>
      {children}
    </PageContext.Provider>
  );
};

// Context'e erişim sağlayan custom hook
export const usePageContext = () => {
  const context = useContext(PageContext);
  if (!context) {
    throw new Error("usePageContext must be used within a PageProvider");
  }
  return context;
};
