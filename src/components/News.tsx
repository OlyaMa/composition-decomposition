import { ReactNode } from "react";

interface NewsChildren {
  children: ReactNode;
}

/**
 * Компонент раздела новостей, который находится над
 * блоком с поисковой строкой.
 *
 * @param {NewsChildren} children Передаем дочерние компоненты.
 * @returns {JSX.Element} Компонент News.
 **/
export const News = ({ children }: NewsChildren) => {
  return <div>{children}</div>;
};
