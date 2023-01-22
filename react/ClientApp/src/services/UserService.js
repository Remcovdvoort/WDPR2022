import axios from "axios";
import jwt from "jwt-decode";


const API_URL = "https://localhost:7293/api/User/";

class UserService {
    
    register(email, password) {
        axios.post(API_URL + "registreer", {
            email: email,
            password : password
        }).then((res) => {
            if(res.status !== 201)
            {
                console.log(res)
            }
            else{
                console.log('Error has been returned')
            }
        }
        )
    }
    
    login (email, password) {
        axios.post(API_URL + "login", {
            email: email,
            password: password
        }).then (res => {
            if(res.data.token)
            {
                sessionStorage.setItem("user", res.data.token)   
            }
            else
            {
                alert("Ingevoerde gegevens zijn onjuist")
            }
        })
};


    logout() {
        sessionStorage.removeItem("user")
    }

    getUser() {
        return jwt(sessionStorage.getItem("user"))
    }

    isLoggedIn() {
        return sessionStorage.getItem("user") !== null
    }

}

export default new UserService();