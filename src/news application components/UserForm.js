import React, { useRef } from "react";

function UserForm() {
  const nameInputRef = useRef(null);
  function handleSubmit(e) {
    e.preventDefault();
    const InputValue = nameInputRef.current.value;
    console.log(InputValue);
  }
  // submit option form
  const selectInputRef = useRef("");
  function handleChange(e) {
    e.preventDefault();
    const submitInputValue = e.target;
    console.log(submitInputValue);
  }
  const styling = {
    width: "60%",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    padding: "20px",
    margin: "20px",
    boxSizing: "border-box",
  };
  return (
    <form style={styling} onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" ref={nameInputRef} />

      <select ref={selectInputRef} onChange={handleChange}>
        <option value="grapeFruit">GrapeFruit</option>
        <option value="lime">Lime</option>
        <option value="mango">Mango</option>
        <option value="coconut">Coconut</option>
        <option value="orange">Orange</option>
      </select>
      <button style={{ width: "40%" }} onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
}

export default UserForm;
