import { ReactNode } from "react";

interface AnvertisingBannerChildren {
  children: ReactNode;
}

/**
 * Компонент раздела с банерной рекламой под формой поиска.
 *
 * @param {AnvertisingBannerChildren} children Передаем дочерние компоненты.
 * @returns {JSX.Element} Компонент раздела с банерной рекламой под формой поиска.
 **/
export const AdvertisingBanner = ({ children }: AnvertisingBannerChildren) => {
  return <div>{children}</div>;
};
