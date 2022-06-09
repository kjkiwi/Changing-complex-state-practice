import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function inputEntered(event) {
    const inputField = event.target.name;
    console.log(inputField);
    const inputValue = event.target.value;
    console.log(inputValue);

    setContact((prevValue) => {
      if (inputField === "fName") {
        return {
          fName: inputValue,
          lName: prevValue.lName,
          email: prevValue.email
        };
      } else if (inputField === "lName") {
        return {
          fName: prevValue.fName,
          lName: inputValue,
          email: prevValue.email
        };
      } else if (inputField === "email") {
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: inputValue
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          onChange={inputEntered}
          name="fName"
          placeholder="First Name"
          value={contact.fName}
        />
        <input
          onChange={inputEntered}
          name="lName"
          placeholder="Last Name"
          value={contact.lName}
        />
        <input
          onChange={inputEntered}
          name="email"
          placeholder="Email"
          value={contact.email}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
