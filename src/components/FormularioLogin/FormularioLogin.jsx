import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import { withStyles } from "@material-ui/core/styles";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router";
import { Typography } from "@mui/material";
import axios from "axios";

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "0.5em",
  },
  logo: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "0.5em",
    color: "##070D0D",
  },
  buttonEnter: {
    margin: "0.5em",
    backgroundColor: "#1877f2",
    color: "white",
  },
  buttonRegister: {
    backgroundColor: "#42b72a",
    color: "white",
  },
  divider: {
    background: "#dadde1",
    width: "190px",
    height: "2px",
    margin: "0.5em",
  },
};

function FormularioLogin(props) {
  async function login() {
    axios
      .post("http://localhost:8080/api/v1/user/login", { email, password })
      .then((response) => {
        const hungryUser = response.data;
        if (hungryUser === true) {
          return navigate("/home");
        } else {
          return navigate("/");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const { classes } = props;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const paginaCadastro = () => navigate("/cadastro");

  return (
    <div>
      <Box className={classes.logo}>
        <img src={logo} alt="Logo" width={180} height={250} />
        <Typography
          sx={{
            fontSize: "xx-large",
            fontWeight: "bold",
          }}
          mt={3}
        >
          Faça seu login:
        </Typography>
      </Box>

      <FormControl
        component="form"
        onSubmit={(event) => {
          event.preventDefault();
          login({ email, password });
        }}
        className={classes.form}
      >
        <TextField
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          required
          id="email"
          type="email"
          label="E-mail"
          variant="outlined"
          color="primary"
          margin="normal"
          autoComplete="on"
        />

        <TextField
          label="Senha"
          type="password"
          required
          margin="normal"
          variant="outlined"
          autoComplete="on"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          onClick={() => login()}
          disabled={password.length < 8 || password.length > 12}
        >
          Entrar
        </Button>

        <Box mt={2} mb={5}>
          <Divider variant="middle" className={classes.divider} />
        </Box>

        <Button
          variant="contained"
          className={classes.buttonRegister}
          onClick={paginaCadastro}
        >
          Cadastrar
        </Button>
      </FormControl>
    </div>
  );
}

export default withStyles(styles)(FormularioLogin);
