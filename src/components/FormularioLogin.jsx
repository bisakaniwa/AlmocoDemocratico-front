import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import { withStyles } from "@material-ui/core/styles";
import logo from "../assets/logo.png";

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
  const { classes } = props;
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <div>
      <Box className={classes.logo}>
        <img src={logo} alt="Logo" width={180} height={250} />
        <h1>Faça seu login:</h1>
      </Box>
      <FormControl
        component="form"
        onSubmit={(event) => {
          event.preventDefault();
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
          type="text"
          label="E-mail"
          variant="outlined"
          color="primary"
          margin="normal"
        />

        <TextField
          value={senha}
          onChange={(event) => {
            setSenha(event.target.value);
          }}
          required
          id="senha"
          type="text"
          label="Senha"
          variant="outlined"
          color="primary"
          margin="normal"
        />

        <Button
          type="submit"
          variant="contained"
          className={classes.buttonEnter}
        >
          Entrar
        </Button>

        <Box mt={2} mb={5}>
          <Divider variant="middle" className={classes.divider} />
        </Box>

        <Button
          variant="contained"
          className={classes.buttonRegister}
        >
          Cadastrar
        </Button>
        
      </FormControl>
    </div>
  );
}

export default withStyles(styles)(FormularioLogin);
