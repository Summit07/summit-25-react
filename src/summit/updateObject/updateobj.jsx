import React, { useState } from "react";

const MyComponent22 = () => {
  // Define state for your array of objects
  const [myArray, setMyArray] = useState([
    { id: 1, key1: "value1" },
    { id: 2, key1: "value2" },
    { id: 3, key1: "value3" },
  ]);

  // Function to update a specific object's value in the array
  const updateObjectValue = (objectId) => {
    // Create a new array with the updated value
    const updatedArray = myArray.map((obj) =>
      obj.id === objectId ? { ...obj, key1: "newUpdatedValue" } : obj
    );

    // Update the state with the new array
    setMyArray(updatedArray);
  };

  return (
    <div>
      {/* Display the array of objects */}
      {myArray.map((obj) => (
        <p key={obj.id}>
          ID: {obj.id}, Key1: {obj.key1}
        </p>
      ))}

      {/* Button to trigger the update */}
      <button onClick={() => updateObjectValue(2)}>Update Key1 for ID 2</button>
    </div>
  );
};

const MyComponent = () => {
  // Define state for your array of objects
  const [myArray, setMyArray] = useState([
    { id: 1, key1: "value1" },
    { id: 2, key1: "value2" },
    { id: 3, key1: "value3" },
  ]);

  // Function to update a specific object's value in the array
  const updateObjectValue = (objectId) => {
    // Find the index of the object in the array
    const index = myArray.findIndex((obj) => obj.id === objectId);

    // If the object is found, update its value
    if (index !== -1) {
      // Create a new array with the updated value
      const updatedArray = [...myArray];
      updatedArray[index] = { ...updatedArray[index], key1: "newUpdatedValue" };

      // Update the state with the new array
      setMyArray(updatedArray);
    }
  };

  return (
    <div>
      {/* Display the array of objects */}
      {myArray.map((obj) => (
        <p key={obj.id}>
          ID: {obj.id}, Key1: {obj.key1}
        </p>
      ))}

      {/* Button to trigger the update */}
      <button onClick={() => updateObjectValue(2)}>Update Key1 for ID 2</button>
    </div>
  );
};
//! #########################################################################################

const MyComponents = () => {
  // Define state for your array of objects
  const [myArray, setMyArray] = useState([
    { id: 1, key1: "value1" },
    { id: 2, key1: "value2" },
    { id: 3, key1: "value3" },
  ]);

  // Function to update a specific object's value in the array using index
  const updateObjectValue = (index) => {
    // Create a new array with the updated value
    const updatedArray = myArray.map((obj, i) =>
      i === index ? { ...obj, key1: "newUpdatedValue" } : obj
    );

    // Update the state with the new array
    setMyArray(updatedArray);
  };

  return (
    <div>
      {/* Display the array of objects */}
      {myArray.map((obj, index) => (
        <p key={obj.id}>
          ID: {obj.id}, Key1: {obj.key1}
          {/* Button to trigger the update */}
          <button onClick={() => updateObjectValue(index)}>Update Key1</button>
        </p>
      ))}
    </div>
  );
};

export default MyComponent;
