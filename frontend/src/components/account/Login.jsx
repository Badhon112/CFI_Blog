import React, { useState } from "react";
import { Box, Button, TextField, styled } from "@mui/material";

export default function Login() {
  const [account, setAccount] = useState("login");
  return (
    <Box className="w-[400px] m-auto ">
      <Box>
        <h1 className="text-4xl w-28 m-auto py-14 px-0">BLOG</h1>
        {account === "login" ? (
          <Box className="px-6 py-9 flex flex-1 flex-col space-y-5">
            <TextField
              id="outlined-basic"
              label="UserName"
              variant="outlined"
            />
            <TextField id="filled-basic" label="Password" variant="outlined" />
            <Button variant="contained">Login</Button>
            <p className="text-center">OR</p>
            <Button className="shadow-xl shadow-gray-300" variant="contained" onClick={()=>setAccount("signup")}> 
              Create an Account
            </Button>
          </Box>
        ) : (
          <Box className="px-6 py-9 flex flex-1 flex-col space-y-5">
            <TextField
              id="outlined-basic"
              label="FullName"
              variant="outlined"
            />
            <TextField id="outlined-basic" label="Email" variant="outlined" />
            <TextField id="filled-basic" label="Password" variant="outlined" />
            <Button className="shadow-xl shadow-gray-500" variant="contained">
              Sign up
            </Button>
            <p className="text-center">OR</p>
            <Button variant="contained"  onClick={()=>setAccount("login")}>Already have an Account</Button>
          </Box>
        )}
      </Box>
    </Box>
  );
}
