"use client";

import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface CategoryProps {
  categorySelected: number;
  setCategorySelected: Dispatch<SetStateAction<number>>;
}

const Category = createContext<CategoryProps>({
  categorySelected: 0,
  setCategorySelected: () => {},
});

export function useCategory() {
  const context = useContext(Category);
  if (context === undefined) {
    throw new Error("useCategory must be used within a CategoryProvider");
  }
  return context;
}

export function CategoryProvider({ children }) {
  const [categorySelected, setCategorySelected] = useState(0);

  return (
    <Category.Provider
      value={{
        categorySelected,
        setCategorySelected,
      }}
    >
      {children}
    </Category.Provider>
  );
}
