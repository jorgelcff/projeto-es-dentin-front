import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { Button, View, Text } from "react-native";

type DentistaScreenProps = {
  route: RouteProp<any, "ConfirmarConsultaScreen">;
  navigation: StackNavigationProp<any, "ConfirmarConsultaScreen">;
};

const ResumoConsulta = () => {
  // Aqui você pode adicionar o código para exibir o resumo das informações da consulta
  return (
    // Adicione o código JSX para exibir o resumo das informações
    <View>
      <Text>Resumo da Consulta:</Text>
      {/* Adicione aqui os componentes para exibir as informações da consulta */}
    </View>
  );
};

const ConfirmarConsultaScreen = ({ route }: DentistaScreenProps) => {
  //const { dentista } = route.params;

  const confirmarConsulta = () => {
    // Aqui você pode adicionar o código para confirmar a consulta
  };

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      {/* Adicione o componente ResumoConsulta para exibir o resumo das informações */}
      <ResumoConsulta />

      {/* Adicione o botão para confirmar a consulta */}
      <Button title="Confirmar Consulta" onPress={confirmarConsulta} />
    </View>
  );
};

export default ConfirmarConsultaScreen;
