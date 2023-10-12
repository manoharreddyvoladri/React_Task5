import "./App.css";
import React, { useState } from "react";

function App() {
  const [birthdate, setBirthdate] = useState("");
  const [age, setAge] = useState(0);

  function calculateAge() {
    const today = new Date();
    const birthdateDate = new Date(birthdate);

    let age = today.getFullYear() - birthdateDate.getFullYear();
    const monthDiff = today.getMonth() - birthdateDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdateDate.getDate())) {
        age--;
    }
    setAge(age);
};
  

  return (
    <div className="box">
      <h1 id="heading">Age Calculator</h1>
      <div className="input">
        <p>Enter your date of birth</p>
        <input
          type="date"
          className="inp"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
        />
      </div>

      <div className="button">
        <button className="btn" onClick={calculateAge}>
          Calculate Age
        </button>
      </div>

      <div className="output">
        <div className="Container_middle_para">
        </div>
        <h1 className="age_heading"> {age > 0 ? `Your Age is ${age}  years old` : ""}</h1>
      </div>
    </div>
  );
}

export default App;
