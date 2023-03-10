import React, { useState, useEffect } from "react";
import {
  TextField,
  Typography,
  Button,
  Box,
  FormControl,
  MenuItem,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router";

export default function CadastroRestaurante() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [addressComplement, setAddressComplement] = useState("");
  const [addressNumber, setAddressNumber] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [cep, setCep] = useState("");
  const [website, setWebsite] = useState("");
  const [states, setStates] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (state.length > 0) {
      fetch(`http://localhost:8080/api/v1/brazil-cities/${state}/all-cities`)
        .then((response) => response.json())
        .then((data) => setSuggestions(data))
        .catch((error) => console.log(error));
    } else {
      setSuggestions([]);
    }
  }, [state, city]);

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleStateChange = (event) => {
    setState(event.target.value);
    setCity("");
  };
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/brazil-states/all")
      .then((response) => {
        setStates(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function newRestaurant(restaurantData) {
    axios
      .post("http://localhost:8080/api/v1/restaurants/register", restaurantData)
      .then((response) => {
        const restaurant = response.data;
        console.log(restaurant);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const navigate = useNavigate();

  return (
    <div>
      <Box
        sx={{
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: "xx-large",
            fontWeight: "bold",
            mt: 3,
          }}
        >
          Cadastre um restaurante:
        </Typography>
      </Box>

      <FormControl
        component="form"
        onSubmit={(event) => {
          event.preventDefault();
          newRestaurant({
            name,
            description,
            address,
            addressComplement,
            addressNumber,
            state,
            website,
            district,
            city,
            cep,
          });
        }}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TextField
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
          required
          id="name"
          type="text"
          label="Nome do restaurante"
          variant="outlined"
          color="primary"
          margin="normal"
          sx={{
            width: 450,
          }}
        />

        <TextField
          value={description}
          onChange={(event) => {
            setDescription(event.target.value);
          }}
          required
          id="description"
          type="text"
          label="Descri????o"
          variant="outlined"
          multiline
          rows={3}
          color="primary"
          margin="normal"
          sx={{
            width: 450,
          }}
        />

        <TextField
          value={website}
          onChange={(event) => {
            setWebsite(event.target.value);
          }}
          id="website"
          type="text"
          label="Site ou endere??o para card??pio"
          variant="outlined"
          color="primary"
          margin="normal"
          helperText="Esse restaurante possui uma p??gina na internet?"
          sx={{
            width: 450,
          }}
        />

        <Typography
          sx={{
            fontSize: "x-large",
            mt: 4,
          }}
        >
          Endere??o:
        </Typography>

        <Box>
          <TextField
            value={state}
            onChange={handleStateChange}
            required
            id="state"
            select
            label="Estado"
            variant="outlined"
            color="primary"
            margin="normal"
            autoComplete="on"
            sx={{
              mr: 2,
              width: 150,
            }}
          >
            {states.map((item) => (
              <MenuItem key={item.state} value={item.state}>
                {item.state}
              </MenuItem>
            ))}
          </TextField>

          {state && (
            <TextField
              value={city}
              onChange={handleCityChange}
              id="city"
              required
              select
              type="text"
              label="Cidade"
              variant="outlined"
              color="primary"
              margin="normal"
              autoComplete="on"
              sx={{ width: 450 }}
            >
              {suggestions.map((suggestion) => (
                <MenuItem
                  key={suggestion.cityName}
                  value={suggestion.cityName}
                  onClick={() => setCity(suggestion.cityName)}
                >
                  {suggestion.cityName}
                </MenuItem>
              ))}
            </TextField>
          )}
        </Box>

        <Box>
          {state && city && (
            <TextField
              value={address}
              onChange={(event) => {
                setAddress(event.target.value);
              }}
              required
              id="address"
              type="text"
              label="Endere??o"
              variant="outlined"
              color="primary"
              margin="normal"
              sx={{
                mr: 2,
                width: 450,
              }}
              helperText="Rua, avenida, etc."
            ></TextField>
          )}

          {state && city && address && (
            <TextField
              value={addressNumber}
              onChange={(event) => {
                setAddressNumber(event.target.value);
              }}
              required
              id="addressNumber"
              type="text"
              label="N??mero"
              variant="outlined"
              color="primary"
              margin="normal"
              sx={{
                width: 100,
                mr: 2,
              }}
            />
          )}

          {state && city && address && (
            <TextField
              value={district}
              onChange={(event) => {
                setDistrict(event.target.value);
              }}
              required
              id="district"
              type="text"
              label="Bairro"
              variant="outlined"
              color="primary"
              margin="normal"
            />
          )}
        </Box>

        <Box>
          {state && city && address && (
            <TextField
              value={addressComplement}
              onChange={(event) => {
                setAddressComplement(event.target.value);
              }}
              id="addressComplement"
              type="text"
              label="Complemento"
              variant="outlined"
              color="primary"
              margin="normal"
              sx={{
                mr: 2,
                width: 450,
              }}
              helperText="Opcional"
            />
          )}

          <TextField
            value={cep}
            onChange={(event) => {
              setCep(event.target.value);
            }}
            required
            id="cep"
            type="text"
            label="CEP"
            variant="outlined"
            color="primary"
            margin="normal"
            sx={{
              width: 200,
            }}
          />
        </Box>

        <Box
          sx={{
            mb: 5,
            mt: 2,
          }}
        >
          <Button
            type="submit"
            variant="contained"
            onClick={() => newRestaurant()}
          >
            Cadastrar
          </Button>

          <Button
            type="button"
            variant="contained"
            onClick={() => navigate("/home")}
            sx={{
              backgroundColor: "red",
              ml: 10,
            }}
          >
            Cancelar
          </Button>
        </Box>
      </FormControl>
    </div>
  );
}
