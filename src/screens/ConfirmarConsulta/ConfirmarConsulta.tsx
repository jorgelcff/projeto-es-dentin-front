import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { Button, View, Text } from "react-native";

type DentistaScreenProps = {
  route: RouteProp<any, "ConfirmarConsultaScreen">;
  navigation: StackNavigationProp<any, "ConfirmarConsultaScreen">;
};

const consultaInfo = {
  nomeDentista: "Dr. Daniel Zamboni",
  especialidade: "Odontopediatria",
  endereco: {
    rua: "R. do Giriquiti",
    numero: "140",
    bairro: "Boa Vista",
    cidade: "Recife",
    estado: "PE",
  },
  agendamento: {
    diaSemana: "Quarta",
    dia: "6 de outubro de 2024",
    hora: "11:00 AM",
  },
};

// ...

const ResumoConsulta = () => {
  // Aqui você pode adicionar o código para exibir o resumo das informações da consulta
  return (
    // Adicione o código JSX para exibir o resumo das informações
    <View>
      <Text>Resumo da Consulta:</Text>
      <Text>Nome do dentista: {consultaInfo.nomeDentista}</Text>
      <Text>Especialidade: {consultaInfo.especialidade}</Text>
      <Text>
        Endereço: {consultaInfo.endereco.rua}, {consultaInfo.endereco.numero} -{" "}
        {consultaInfo.endereco.bairro}, {consultaInfo.endereco.cidade} -{" "}
        {consultaInfo.endereco.estado}
      </Text>
      <Text>
        Agendamento: {consultaInfo.agendamento.diaSemana},{" "}
        {consultaInfo.agendamento.dia}, {consultaInfo.agendamento.hora}
      </Text>
    </View>
  );
};

// ...
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
