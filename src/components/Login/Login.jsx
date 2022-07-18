import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Alert,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { authContext } from "../../contexts/authContext";

const Login = () => {
  const navigate = useNavigate();
  const { handleLogin, error, setError } = useContext(authContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSave() {
    let formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    handleLogin(formData, email, navigate);
  }
  // console.log(error);
  useEffect(() => {
    setError(false);
  }, []);

  return (
    <Container maxWidth="sm">
      <div>asd</div>
      <div>asd</div>
      <div>asd</div>
      <Box display={"flex"} flexDirection={"column"} marginTop={"50px"}>
        <Typography variant="h5">login</Typography>
        {error ? <Alert severity="error">{error}</Alert> : null}
        <TextField
          value={email}
          onChange={e => setEmail(e.target.value)}
          variant="outlined"
          label="Email"
        />
        <TextField
          value={password}
          onChange={e => setPassword(e.target.value)}
          variant="outlined"
          label="Password"
        />
        <Button onClick={handleSave} variant="outlined">
          Login
        </Button>
      </Box>
    </Container>
  );
};

export default Login;
