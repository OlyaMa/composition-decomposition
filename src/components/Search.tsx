import { ReactNode } from "react";

interface SearchChildren {
  children: ReactNode;
}

/**
 * Компонент раздела с формой поиска.
 *
 * @param {SearchChildren} children Передаем дочерние компоненты.
 * @returns {JSX.Element} Компонент раздела с формой поиска.
 **/
export const Search = ({ children }: SearchChildren) => {
  return <div>{children}</div>;
};
