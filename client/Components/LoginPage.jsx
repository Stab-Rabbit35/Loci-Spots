import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import LoginForm from "./LoginForm";
import axios from 'axios';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const LoginPage = () => {

    const [user, setUser] = useState({username:'', password:''});
    const [error, setError] = useState('');

    const login = async (details) => {
        console.log('details in LoginPage', details);
        //see if username and password combo are in the database
        //if(axios.get('/username') ?)
        const {username, password } = details;

        console.log('USERNAME', username);
        console.log('PASSWORD', password);

        console.log('USER before setUser', user) //user is empty strings here

        setUser({
            username: username,
            password: password
        })
        
        axios.get('/api/login',{
            username:username,
            password:password
        })
            .then((res) => console.log(res))

        
    //COME BACK TO VERSION LATER
        // const [data, setData] = useState({
        //     email:"",
        //     password: "",

        // })

        // const handleChange =({currentTarget:input}) => {   //{currentTarget:input} is default in the input field. When input field gets changed, it will give you information of what was triggered, whats new value, etc.
        //     console.log("I am current target!!!:", input)
        //         setData({...data,[input.name]:input.value}); //updating data from the state. In this case, as user types in every keystroke, it will change data set in useState
        // };

        // const login = async (e) => {
        //     e.preventDefault();
        //     try{
        //         const url = "http://localhost:3000/login" 
        //         const{details:res} = await axios.post(url, details)
        //         localStorage.setItem("email, details.email")
        //         console.log("I am LOCAL STORAGE!", localStorage)
        //         window.location = "/"
        //         console.log(res.message)
        //     }catch(error){
        //         console.log(error)
        //     }

        
            /*
        console.log('details in LoginPage', details);
        //see if username and password combo are in the database
        //if(axios.get('/username') ?)
        const {username, password } = details;

        console.log('USERNAME', username);
        console.log('PASSWORD', password);

        console.log('USER before setUser', user) //user is empty strings here

        setUser({
            username: username,
            password: password
        })




        */
    

        console.log('USER after setUser', user);
        // await axios.get('/api/login', {
        //     username:username,
        //     password:password
        // })
        // .then((res) => console.log(res));

        
        // console.log('username data', currentUser.data)
        // await fetch('/api/:user', {
        //     method: 'GET',
        //     body: JSON.stringify(user),
        //     headers: {
        //       'Content-Type': 'application/json',
        //     }
        // })
        console.log('after the fetch request');
        

    }

    return (
        <div>
            <Link to ='/'>
                <button className = "back">Back</button>
            </Link>
            <LoginForm login = {login} error = {error} />
        </div>
    );
}

export default LoginPage;