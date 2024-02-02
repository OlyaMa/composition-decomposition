import { ValueProps } from "@/app/page";

/**
 * Компонент формы поиска.
 *
 * @param {ValueProps} props Передаем дочерние компоненты.
 * @returns {JSX.Element} Компонент формы поиска.
 **/
export const SearchForm = (props: ValueProps) => {
  return (
    <form>
      <input type="text" />
      <button type="submit">Найти</button>
    </form>
  );
};
