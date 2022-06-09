import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function inputEntered(event) {
    console.log(event.target.name);
    console.log(event.target.value);
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
