import { ReactNode } from "react";

interface ValueChildren {
  children: ReactNode;
}

/**
 * Компонент блока конкретной валюты, например USD.
 *
 * @param {ValueChildren} children Передаем нужную информацию в блок.
 * @returns {JSX.Element} Компонент блока конкретной валюты.
 **/
export const Value = ({ children }: ValueChildren) => {
  return <div>{children}</div>;
};
