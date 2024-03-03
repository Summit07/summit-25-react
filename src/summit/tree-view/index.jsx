import MenuList from "./menu-list";

export default function TreeView({ menus = [] }) {
  //   console.log(menus);
  return (
    <div className="">
      <MenuList list={menus} />
    </div>
  );
}
