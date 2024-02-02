import { ValueProps } from "@/app/page";

/**
 * Компонент обычной ссылки с возоможностям добавления картинки и т.п. в зависимости от пропсов.
 *
 * @param {ValueProps} props Передаем нужную информацию в блок.
 * @returns {JSX.Element} Компонент обычной ссылки.
 **/
export const RegularLink = (props: ValueProps) => {
  return (
    <a href="#">
      {Boolean(props.many) && <img />}
      <p>Линк</p>
    </a>
  );
};
