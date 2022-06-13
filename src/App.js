import "./App.css";
import Delete from "./component/Delete";
import { Footer } from "./component/Footer";
import NavBar from "./component/NavBar";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import Crud from "./component/Crud";
import Edit from "./component/Edit";
import Add from "./component/Add";

function App() {
  return (
    <>
      <Crud />
      <br />
      <br />
      <Edit />
      <br />
      <Delete />
      <br />

      <Add />
    </>
  );
}

export default App;
