import React, { useState } from "react";
import { Box, Button, TextField, styled } from "@mui/material";
import axios, { Axios } from "axios";
// import { api_Call } from "../../service/api";

const signupInitialValues = {
  name: "",
  email: "",
  password: "",
};
const loginInitialValue = {
  email: "",
  password: "",
};

export default function Login() {
  const [account, setAccount] = useState("login");
  const [signup, setSignup] = useState(signupInitialValues);
  const [login, setLogin] = useState(loginInitialValue);
  const [Errors, setErrors] = useState(false);
  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };
  const signupUser = async () => {
    if (signup.name != "" && signup.email != "" && signup.password != "") {
      let response = await axios.post("http://localhost:8000/signup", signup);
      // console.log(response);
      if (response.status === 200) {
        setAccount("login");
      } else {
        setErrors(true);
      }
    }
  };
  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };
  const loginUser = async () => {
    let response = await axios.post("http://localhost:8000/login", login);
    if(response===200){
      console.log("Success");
    }
    else{
      console.log("Something went wrong");
    }
  };
  return (
    <Box className="w-[400px] m-auto ">
      <Box>
        <h1 className="text-4xl w-28 m-auto py-14 px-0">BLOG</h1>
        {account === "login" ? (
          <Box className="px-6 py-9 flex flex-1 flex-col space-y-5">
            <TextField
              id="outlined-basic"
              label="email"
              variant="outlined"
              type="email"
              name="email"
              value={login.email}
              onChange={(e) => onValueChange(e)}
            />
            <TextField
              id="filled-basic"
              label="Password"
              variant="outlined"
              type="password"
              name="password"
              value={login.password}
              onChange={(e) => onValueChange(e)}
            />
            <Button variant="contained" onClick={() => loginUser()}>
              Login
            </Button>
            <p className="text-center">OR</p>
            <Button
              className="shadow-xl shadow-gray-300"
              variant="contained"
              onClick={() => setAccount("signup")}
            >
              Create an Account
            </Button>
          </Box>
        ) : (
          <Box className="px-6 py-9 flex flex-1 flex-col space-y-5">
            <TextField
              id="outlined-basic"
              label="Full Name"
              variant="outlined"
              type="text"
              name="name"
              onChange={(e) => onInputChange(e)}
            />
            <TextField
              id="outlined-basic"
              label="email"
              variant="outlined"
              name="email"
              type="name"
              onChange={(e) => onInputChange(e)}
            />
            <TextField
              id="filled-basic"
              type="password"
              label="Password"
              variant="outlined"
              name="password"
              onChange={(e) => onInputChange(e)}
            />
            <Button
              onClick={() => signupUser()}
              className="shadow-xl shadow-gray-500"
              variant="contained"
            >
              Sign up
            </Button>
            {Errors ? <p className="text-red-400 text-center">Errors</p> : ""}
            <p className="text-center">OR</p>
            <Button variant="contained" onClick={() => setAccount("login")}>
              Already have an Account
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
}
