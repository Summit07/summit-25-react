import React from "react";
import data from "./data";

const Accordian = () => {
  const [selected, setSeledted] = React.useState(null);
  const [enhableMultiple, setEnhableMultiple] = React.useState(false);
  const [multiple, setMultiple] = React.useState([]);

  function handleSelected(id) {
    setSeledted(selected === id ? null : id);
  }

  function handleMultiSelection(getCurrentId) {
    let cpyMultipe = [...multiple];
    const findIndexOfCurrentId = cpyMultipe.indexOf(getCurrentId);

    if (findIndexOfCurrentId === -1) cpyMultipe.push(getCurrentId);
    else cpyMultipe.splice(findIndexOfCurrentId, 1);

    setMultiple(cpyMultipe);
  }

  console.log(selected, enhableMultiple);

  return (
    <div>
      <button onClick={() => setEnhableMultiple(!enhableMultiple)}>
        {`Enable Multiple`}{" "}
      </button>
      {data && data.length > 0
        ? data.map((dataItem) => (
            <div
              key={dataItem.id}
              onClick={() =>
                enhableMultiple
                  ? handleMultiSelection(dataItem.id)
                  : handleSelected(dataItem.id)
              }
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "10px",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>

              {enhableMultiple
                ? multiple.indexOf(dataItem.id) !== -1 && (
                    <p>{dataItem.answer}</p>
                  )
                : selected === dataItem.id && <p>{dataItem.answer}</p>}
            </div>
          ))
        : null}
    </div>
  );
};

export default Accordian;
