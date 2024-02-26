import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import * as Constants from "../../constants/Constants";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const dentistas = [
  {
    id: 1,
    nome: "Dr. Daniel Zmboni",
    especialidade: "Odontologia Geral",
    avaliacao: 4.5,
    clinica: "Clínica Odontológica ABC",
    endereco: {
      rua: "Rua A",
      numero: 123,
      cidade: "São Paulo",
      estado: "SP",
    },
  },
  {
    id: 2,
    nome: "Dr. Allyson Ryan",
    especialidade: "Ortodontia",
    avaliacao: 4.2,
    clinica: "Clínica Odontológica XYZ",
    endereco: {
      rua: "Rua B",
      numero: 456,
      cidade: "Rio de Janeiro",
      estado: "RJ",
    },
  },
  {
    id: 3,
    nome: "Dra. Camila Silva",
    especialidade: "Implantodontia",
    avaliacao: 4.8,
    clinica: "Clínica Odontológica DEF",
    endereco: {
      rua: "Rua C",
      numero: 789,
      cidade: "Belo Horizonte",
      estado: "MG",
    },
  },
  {
    id: 4,
    nome: "Dr. Lucas Oliveira",
    especialidade: "Endodontia",
    avaliacao: 4.6,
    clinica: "Clínica Odontológica GHI",
    endereco: {
      rua: "Rua D",
      numero: 1011,
      cidade: "Curitiba",
      estado: "PR",
    },
  },
  {
    id: 5,
    nome: "Dra. Isabela Santos",
    especialidade: "Periodontia",
    avaliacao: 4.4,
    clinica: "Clínica Odontológica JKL",
    endereco: {
      rua: "Rua E",
      numero: 1213,
      cidade: "Porto Alegre",
      estado: "RS",
    },
  },
  {
    id: 6,
    nome: "Dr. Rafael Costa",
    especialidade: "Ortodontia",
    avaliacao: 4.7,
    clinica: "Clínica Odontológica MNO",
    endereco: {
      rua: "Rua F",
      numero: 1415,
      cidade: "Salvador",
      estado: "BA",
    },
  },
  {
    id: 7,
    nome: "Dra. Juliana Almeida",
    especialidade: "Odontopediatria",
    avaliacao: 4.3,
    clinica: "Clínica Odontológica PQR",
    endereco: {
      rua: "Rua G",
      numero: 1617,
      cidade: "Fortaleza",
      estado: "CE",
    },
  },
  {
    id: 8,
    nome: "Dr. Gustavo Lima",
    especialidade: "Cirurgia Bucomaxilofacial",
    avaliacao: 4.9,
    clinica: "Clínica Odontológica STU",
    endereco: {
      rua: "Rua H",
      numero: 1819,
      cidade: "Recife",
      estado: "PE",
    },
  },
];

const Doctors = styled.View`
  width: 100%;
  flex: 1;
`;

const DoctorCard = styled.View`
  padding: 16px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  border-bottom-width: 1px solid;
  border-color: ${Constants.colors.gray[400]};
`;

const DoctorInfo = styled.View`
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
  margin: 16px 0;
  width: 100%;
  text-align: center;
`;

const DoctorsList = () => {
  const navigation = useNavigation();

  const gotoDentista = (dentista: any) => {
    navigation.navigate("DentistaScreen", { dentista: dentista });
  };

  const renderItem = ({ item }: any) => (
    <TouchableOpacity onPress={() => gotoDentista(item)}>
      <DoctorCard>
        <DoctorInfo>
          <DoctorName>{item.nome}</DoctorName>
          <DoctorSpecialty>{item.especialidade}</DoctorSpecialty>
        </DoctorInfo>
        <DoctorInfo style={{ alignItems: "center" }}>
          <Ionicons
            name="star"
            size={16}
            color={Constants.colors.support.Yellow[500]}
          />
          <DoctorName>{item.avaliacao}</DoctorName>
        </DoctorInfo>
      </DoctorCard>
    </TouchableOpacity>
  );

  return (
    <Doctors>
      <TextHeader>Dentistas disponíveis</TextHeader>
      <FlatList
        data={dentistas}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </Doctors>
  );
};

export default DoctorsList;
