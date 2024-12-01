import React, { createContext, useContext, useState } from "react";

// Context oluşturuluyor
const PageContext = createContext({
    currentPage: "home", // Varsayılan sayfa
    setCurrentPage: () => {} // Boş fonksiyon
});

// custom hook ile context'e erişim sağlıyoruz
export function usePageContext() {
    return useContext(PageContext);
}

// Provider bileşeni
export function PageProvider({ children }) {
    const [currentPage, setCurrentPage] = useState("home"); // State tanımlanıyor

    return (
        <PageContext.Provider value={{ currentPage, setCurrentPage }}>
            {children}
        </PageContext.Provider>
    );
}
