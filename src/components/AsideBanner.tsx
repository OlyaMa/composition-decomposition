import { ReactNode } from "react";

interface AsideBannerChildren {
  children: ReactNode;
}

/**
 * Компонент бокового рекламного блока.
 *
 * @param {AsideBannerChildren} children Передаем дочерние компоненты.
 * @returns {JSX.Element} Компонент бокового рекламного блока.
 **/
export const AsideBanner = ({ children }: AsideBannerChildren) => {
  return <div>{children}</div>;
};
