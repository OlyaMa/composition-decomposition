import { ReactNode } from "react";

interface NewsSelectorChildren {
  children: ReactNode;
}

/**
 * Компонент ссылок на группы новостей
 * ("Сейчас в СМИ", "В Германии" и т.д.).
 *
 * @param {NewsSelectorChildren} children Передаем дочерние компоненты.
 * @returns {JSX.Element} Компонент NewsSelector.
 **/
export const NewsSelector = ({ children }: NewsSelectorChildren) => {
  return <div>{children}</div>;
};
