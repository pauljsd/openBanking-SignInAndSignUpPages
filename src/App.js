import React, { useState } from "react";
import "./App.css";

import Login from "./components/signin/Login";
import SignUp from "./components/signout/SignUp";

function App() {
  // const { currentForm, setCurrentForm } = useState();
  // const toggleForm = (formName) => {
  //   setCurrentForm(formName);
  // };
  return (
    <div>
      <Login />
      {/* <SignUp /> */}
    </div>
  );
}

export default App;
