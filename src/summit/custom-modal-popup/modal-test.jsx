import React, { useState } from "react";
import Model from "./model";

const ModelTest = () => {
  const [showModalPopup, setShowModalPopup] = useState(false);

  function handleToggleModalPopup() {
    setShowModalPopup(!showModalPopup);
  }

  function onClose() {
    setShowModalPopup(false);
  }

  return (
    <div>
      <button onClick={handleToggleModalPopup}>Open Modal Popup</button>
      {showModalPopup && (
        <Model
          onClose={onClose}
          header={<h1>Customized Header</h1>}
          footer={<h1>Customized Footer</h1>}
        />
      )}
    </div>
  );
};

export default ModelTest;
