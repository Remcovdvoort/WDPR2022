import axios from "axios";
import { useEffect, useState } from "react";
import UserService from '../../../services/UserService';



const Page_AccountGegevens = () => {

  const [email, SetEmail] = useEffect();
  const [firstname, SetFirstname] = useEffect();
  const [lastname, SetLastname] = useEffect();
  const [_2FA, set_2FA] = useEffect();



  useEffect(() => {
    console.log(firstname)

  }, [firstname])

  const handleSubmit = () => {

    axios.post("https://localhost:7293/updateAccount",
      {
        id: UserService.getUser().id,
        email: email,
        firstname: firstname,
        lastname: lastname,
        _2FA: _2FA
      }).then(res => console.log(res.data));

  }

  return (
    <>


      <form className="updateAccountForm" onSubmit={handleSubmit}>

        <h>Gegevens wijzigen</h>

        <p>Email</p>
        <input
          type="email"
          onChange={(event) => SetEmail(event.target.value)}
        ></input>

        <p>Naam</p>
        <input
          type={"name"}
          onChange={(event) => SetFirstname(event.target.value)}
        ></input>


        <p>Achternaam</p>
        <input
          type={"name"}
          onChange={(event) => SetLastname(event.target.value)}
        ></input>

        <p>2FA</p>
        <input
            type="checkbox"
            onChange={(event) => set_2FA(event.target.value)}
        ></input>

        <button
          type="onSubmit"
          className="btn-submit"
        >
          Gegevens wijzigen
        </button>


      </form>
    </>
  )
}

export default Page_AccountGegevens;