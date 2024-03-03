import { useState } from "react";
import MenuList from "./menu-list";
import { FaMinus, FaPlus } from "react-icons/fa";

// export default function MenuItem({ item }) {
//   console.log(item.label);

//   const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

//   function handleToggleChildren(getCurrentlabel) {
//     setDisplayCurrentChildren({
//       ...displayCurrentChildren,
//       [getCurrentlabel]: !displayCurrentChildren[getCurrentlabel],
//     });
//   }

//   console.log(displayCurrentChildren);

//   return (
//     <li>
//       <div>
//         <p>{item.label}</p>

//         {item && item.children?.length ? (
//           <span onClick={() => handleToggleChildren(item.label)}>
//             {displayCurrentChildren[item.label] ? (
//               <FaMinus color="#ff0000" size={25} />
//             ) : (
//               <FaPlus color="#ff0000" size={25} />
//             )}
//           </span>
//         ) : null}
//       </div>

//       {item &&
//       item.children?.length > 0 &&
//       displayCurrentChildren[item.label] ? (
//         <MenuList list={item.children} />
//       ) : null}
//     </li>
//   );
// }

export default function MenuItem({ item }) {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  function handleToggleChildren(getCurrentlabel) {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrentlabel]: !displayCurrentChildren[getCurrentlabel],
    });
  }

  console.log(displayCurrentChildren);

  return (
    <div>
      <p>{item.label}</p>
      {item && item.children?.length > 0 && (
        <>
          <span
            onClick={() => {
              handleToggleChildren(item.label);
            }}
          >
            {displayCurrentChildren[item.label] ? `-` : "+"}
          </span>
        </>
      )}
      {item &&
        item.children?.length > 0 &&
        displayCurrentChildren[item.label] && <MenuList list={item.children} />}
    </div>
  );
}
