import React from "react";

const Form = ({ input, setInput, list, setList }) => {
  const inputChange = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };

  const submitHandle = (e) => {
    e.preventDefault();
    setList([...list, { text: input, id: Math.random() * 1000 }]);
    console.log("submit");
    setInput("");
  };

  return (
    <form action="">
      <input
        value={input}
        type="text"
        className="inputField"
        placeholder="insert item here"
        onChange={inputChange}
      />
      <button className="submit" onClick={submitHandle}>
        Submit
      </button>
    </form>
  );
};

export default Form;
