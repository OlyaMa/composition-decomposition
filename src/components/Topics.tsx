import { ReactNode } from "react";

interface TopicsChildren {
  children: ReactNode;
}

/**
 * Компонент раздела с основными темами поиска (над формой поиска).
 *
 * @param {TopicsChildren} children Передаем дочерние компоненты.
 * @returns {JSX.Element} Компонент раздела с основными темами поиска.
 **/
export const Topics = ({ children }: TopicsChildren) => {
  return <div>{children}</div>;
};
