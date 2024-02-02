import { ReactNode } from "react";

interface CurrencyChildren {
  children: ReactNode;
}

/**
 * Компонент блока валют.
 *
 * @param {CurrencyChildren} children Передаем информацию в блок в виде других компонентов.
 * @returns {JSX.Element} Компонент блока валют.
 **/
export const Currency = ({ children }: CurrencyChildren) => {
  return <div>{children}</div>;
};
