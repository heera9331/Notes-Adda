import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { RegistrationForm } from "./components";
// fetching data using fetch funciton

function App() {
  return (
    <>
      <RegistrationForm />
    </>
  );
}

export default App;
