import { ReactNode } from "react";

interface FooterChildren {
  children: ReactNode;
}

/**
 * Компонент раздела с популярными тематиками под формой поиска.
 *
 * @param {FooterChildren} children Передаем дочерние компоненты.
 * @returns {JSX.Element} Компонент раздела с популярными тематиками под формой поиска.
 **/
export const Footer = ({ children }: FooterChildren) => {
  return <div>{children}</div>;
};
