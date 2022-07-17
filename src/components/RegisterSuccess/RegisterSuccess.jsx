import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const RegisterSuccess = () => {
  return (
    <Container>
      <Box>
        <div>a</div>
        <div>d</div>
        <div>s</div>
        <div>s</div>
        <div>s</div>
        <Typography>
          Вы успешно зарегистрировались! Можете <Link to="/login">Войти</Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default RegisterSuccess;
