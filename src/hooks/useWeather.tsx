import { useEffect, useRef, useState } from "react";
import { conexionAPI } from "../api/connectionApi";
import { WeatherData } from "../types/Types";

export const useWeather = () => {

  /*
  const [weather, setWeather] = useState<WeatherData[]>([]);

  const getWeather = async () => {
    conexionAPI
      .get("/users")
      .then((res) => {
        console.log("respuesta en then");
        console.log(res);
      })
      .catch((err) => console.log(err));
    
    try {
      const respuesta = await conexionAPI.get<UsersResponse>("/users", {
        params: {
          page: indice.current, //page
        },
      });

      //Forma erronea de asignar un valor al estado
      //const usuarios = respuesta.data.data;

      //Forma correcta de establecer valores al estado
      setUsuarios(respuesta.data.data);
      setPages(respuesta.data.total_pages);
    } catch (err) {
      console.log(err);
    }
  };

  const createUsuario = async (usuario: FormUsuario) => {
    try {
      const respuesta = await conexionAPI.post<CreateUserResponse>(
        "/users",
        usuario
      );
      return respuesta.data.id;
    } catch (err) {
      return "";
      console.log(err);
    }
  };

  const irAtras = () => {
    console.log("Ir Atras");
    if (indice.current > 1) {
      indice.current--;
      getUsuarios();
    } else alert("Ya no se puede ir atrás");
  };

  const irAdelante = () => {
    console.log("Ir Adelante");
    if (indice.current < pages) {
      indice.current++;
      getUsuarios();
    } else alert("Ya no se puede ir adelante");
  };

  //Hook de useEffect se ejecuta al inicio cuando carga el componente
  useEffect(() => {
    console.log("Iniciando hook useUsuarios");
    getUsuarios();
  }, []);

  //es para exponer estas funciones o datos a los componentes
  return {
    usuarios,
    createUsuario,
    irAtras,
    irAdelante,
  };
  */
};
