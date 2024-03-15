import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import * as Constants from "../../constants/Constants";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const consultas = [
  {
    id: 1,
    nome: "Dr. Daniel Zamboni",
    data: "Qua, 6 de outubro 2024",
    status: "Ativo"
  },

  {
    id: 1,
    nome: "Dr. Lucas Gabriel",
    data: "Qui, 7 de outubro 2024",
    status: "Encerrada"
  },
  // Adicione mais consultas conforme necessário
];

const Consults = styled.View`
  width: 100%;
  flex: 1;
`;

const ConsultCard = styled.View`
  padding: 16px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid;
  border-color: ${Constants.colors.gray[400]};
`;

const ConsultInfo = styled.View`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const DoctorName = styled.Text`
  font-family: ${Constants.fontConfig.Body.Medium.FontFamily};
  font-size: 16px;
  color: #393a3e;
`;
const DoctorSpecialty = styled.Text`
  font-family: ${Constants.fontConfig.Body.Medium.FontFamily};
  font-size: 12px;
  color: #8e8f95;
`;

const TextHeader = styled.Text`
  font-family: ${Constants.fontConfig.Body.Regular.FontFamily};
  font-weight: 600;
  font-size: 20px;
  color: ${Constants.colors.gray[700]};
  margin: 16px 0 0; /* Removida a margem inferior */
  width: 100%;
  text-align: center;
`;

const ConsultasAgendadas = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }: any) => (
    <TouchableOpacity onPress={() => {/*Ação ao clicar na consulta*/}}>
      <ConsultCard>
        <ConsultInfo>
          <DoctorName>{item.nome}</DoctorName>
          <DoctorSpecialty>{item.data}</DoctorSpecialty>
        </ConsultInfo>
        <ConsultInfo style={{ alignItems: "center" }}>
          <Ionicons
            name={item.status === "Ativo" ? "checkmark-done" : "close"}
            size={16}
            color={item.status === "Ativo" ? "#1DBEAB" : "red"}
          />
          <DoctorName>{item.status}</DoctorName>
        </ConsultInfo>
      </ConsultCard>
    </TouchableOpacity>
  );

  const consultasAtivas = consultas.filter((consulta) => consulta.status === "Ativo");
  const consultasEncerradas = consultas.filter((consulta) => consulta.status !== "Ativo");

  return (
    <Consults>
      <TextHeader>Consultas Ativas</TextHeader>
      <FlatList
        data={consultasAtivas}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <TextHeader>Consultas Encerradas</TextHeader>
      <FlatList
        data={consultasEncerradas}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </Consults>
  );
};

export default ConsultasAgendadas;
