import React, { useState } from "react";
import Web3 from "web3";
import AddressInput from "./components/AddressInput";

const App = () => {
  const [address, setAddress] = useState("");
  const [isValid, setIsValid] = useState(null);

  const validateAddress = () => {
    const web3 = new Web3();
    if (web3.utils.isAddress(address)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  return (
    <div>
      <h1>Base Address Verifier</h1>
      <AddressInput setAddress={setAddress} />
      <button onClick={validateAddress}>Validate Address</button>
      {isValid !== null && (
        <p>{isValid ? "Valid Address" : "Invalid Address"}</p>
      )}
    </div>
  );
};

export default App;
