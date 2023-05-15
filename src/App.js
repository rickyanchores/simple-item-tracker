import { useState } from "react";
import Form from "./Components/Form";
import List from "./Components/List";
import "./styles.css";

export default function App() {
  const [input, setIinput] = useState("");
  const [list, setList] = useState([]);

  return (
    <div className="App">
      <p>Simple Item List</p>
      <Form input={input} setInput={setIinput} list={list} setList={setList} />
      <List list={list} setList={setList} />
    </div>
  );
}
