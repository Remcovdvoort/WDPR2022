import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [lastName, setlastName] = useState("");
  const [password, setPassword] = useState("");

  const processRegistration = (e) => {
    e.preventDefault();
    fetch('https://localhost:7293/api/User/registreer',
    {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-type' : 'application/json'

        },
        body: JSON.stringify({email: email, password: password, name: name, lastName: lastName, donatedAmount : 0})
    }).then(response => response.json())
    .then(response => console.log(response))
}

  return (
    <div>
      <form className="loginForm" onSubmit={processRegistration}>
        <h1 className="Title">Registreren</h1>
        <p>Email</p>
        <input
          required
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <p>Voornaam</p>
        <input
          required
          type="name"
          className="input-name"
          onChange={(event) => setName(event.target.value)}
        ></input>
        <p>Achternaam</p>
        <input
          required
          type="lastName"
          className="input-name"
          onChange={(event) => setlastName(event.target.value)}
        ></input>
        <p>Wachtwoord</p>
        <input
          required
          type="password"
          className="input-password"
          onChange={(event) => setPassword(event.target.value)}
        ></input>
        <button
          type="onSubmit"
          disabled={email == "" || password == ""}
          className="login-btn-submit"
        >
          Registreren
        </button>
        <p>
          {" "}
          <Link to="/inloggen" className="register-link">
            Heeft u al een account?
          </Link>
        </p>
      </form>
    </div>
  );
  };
export default Register;