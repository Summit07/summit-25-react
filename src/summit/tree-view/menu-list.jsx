import MenuItem from "./menu-item";

export default function MenuList({ list = [] }) {
  return (
    <ul>
      {list && list.length > 0
        ? list.map((listItem) => (
            <MenuItem item={listItem} key={listItem.label} />
          ))
        : null}
    </ul>
  );
}
