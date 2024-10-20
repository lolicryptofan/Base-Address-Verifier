import React from "react";

const AddressInput = ({ setAddress }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Base address"
        onChange={(e) => setAddress(e.target.value)}
      />
    </div>
  );
};

export default AddressInput;
