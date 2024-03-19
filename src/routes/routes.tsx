import { NavigationContainer } from "@react-navigation/native";
import { createContext, useEffect, useState } from "react";
import { LogBox, Platform } from "react-native";
import AppNavigator from "./Navigation";
import * as Store from "../redux/store/store";
import * as SecureStore from "expo-secure-store";
import { LoginInfo } from "../types/LoginInfo";
import { PacienteCreate } from "../models/Paciente";
import { Relatorio } from "../models/Relatorio";

LogBox.ignoreLogs(["Require cycle:"]);

async function getValueFor(key: string) {
  let result;
  if (Platform.OS === "web") {
    result = localStorage.getItem(key);
  } else {
    result = await SecureStore.getItemAsync(key);
  }
  return JSON.parse(result!);
}

export default function Routes() {
  const [isLogin, setIsLogin] = useState(false);

  const [formInfo, setFormInfo] = useState<Relatorio>({
    fkDentin: 0,
    dataEmissao: new Date().toString(),
    dataReferencia: new Date().toString(),
    alimentacao: "",
    dores: "",
    higiene: {
      frequenciaEscovacao: "",
      usoFioDental: "",
    },
    historico: "",
    cuidadoAparelho: "",
    acidente: "",
  });

  const [loginInfo, setLoginInfo] = useState<LoginInfo>({
    login: "",
    password: "",
    authToken: "",
  });
  const [registerInfo, setRegisterInfo] = useState<PacienteCreate>({
    cpf: "",
    nome: "",
    email: "",
    senha: "",
    telefone: "",
    dataNasc: "",
    sexo: "",
    cidade: "",
    uf: "",
    bairro: "",
    rua: "",
    endereco: "",
    fkConvenio: 0,
    cardiaco: false,
    diabetico: false,
    alergico: null,
  });
  const saveAuthTokenLocal = async (value: PacienteCreate) => {
    if (Platform.OS === "web") {
      localStorage.setItem("registerInfo", JSON.stringify(value));
    } else {
      await SecureStore.setItemAsync("registerInfo", JSON.stringify(value));
    }
  };

  useEffect(() => {
    const value = getValueFor("registerInfo")
      .then((response) => {
        const currentDate = new Date();
        const loginDate = new Date(response.loginDate);
        const difDateInHour =
          (new Date().getTime() - new Date(loginDate).getTime()) /
          (1000 * 60 * 60 * 24);
        const jwtDaysExpiration = 1;
        const isTokenExpired = difDateInHour > jwtDaysExpiration;
        // if (response.authToken && !isTokenExpired) {
        //   setRegisterInfo(response);
        //   setIsLogin(true);
        // } else if (response.authToken && isTokenExpired) {
        //   const newToken = (async () =>
        //     await getAuthTokenLogin(
        //       response.login.toLowerCase().trim(),
        //       response.password
        //     )
        //       .then((res) => {
        //         setRegisterInfo({
        //           login: response.login,
        //           password: response.password,
        //           authToken: res.data.token,
        //           loginDate: response.loginDate,
        //           averageConsumption: response.averageConsumption,
        //           fuelPerLiter: response.fuelPerLiter,
        //         });
        //         setIsLogin(true);
        //       })
        //       .catch((error) => {
        //         console.log(error);
        //       }))();
        // }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    saveAuthTokenLocal(registerInfo);
  }, [registerInfo]);

  return (
    <>
      <NavigationContainer>
        <Store.RegisterContext.Provider
          value={{ registerInfo, setRegisterInfo, isLogin, setIsLogin }}
        >
          <Store.LoginContext.Provider
            value={{ loginInfo, setLoginInfo, isLogin, setIsLogin }}
          >
            <Store.FormContext.Provider value={{ formInfo, setFormInfo }}>
              <AppNavigator />
            </Store.FormContext.Provider>
          </Store.LoginContext.Provider>
        </Store.RegisterContext.Provider>
      </NavigationContainer>
    </>
  );
}
