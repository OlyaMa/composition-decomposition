import { ReactNode } from "react";

interface FooterTopicChildren {
  children: ReactNode;
}

/**
 * Компонент раздела с тематикой под формой поиска.
 *
 * @param {Footerchildren} children Передаем дочерние компоненты.
 * @returns {JSX.Element} Компонент раздела с тематикой под формой поиска.
 **/
export const FooterTopic = ({ children }: FooterTopicChildren) => {
  return <div>{children}</div>;
};
