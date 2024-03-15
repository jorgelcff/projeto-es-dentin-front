import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { Button, View, Text } from "react-native";
import styled from "styled-components/native";
import * as Constants from "../../constants/Constants";
import ImageWrapper from "../../components/utils/ImageWrapper";
import MedicalClinic from "../../../assets/Dentista/hospital-line.png";
import CardBank from "../../../assets/Dentista/bank-card-2-line.png";

type DentistaScreenProps = {
  route: RouteProp<any, "ConfirmarConsultaScreen">;
  navigation: StackNavigationProp<any, "ConfirmarConsultaScreen">;
};

const consultaInfo = {
  dentista: {
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
  agendamento: {
    diaSemana: "Quarta",
    dia: "6 de outubro de 2024",
    hora: "11:00 AM",
  },
};

const Cards = styled.View`
  padding: 20px;
  gap: 20px;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

const ClinicaCard = styled.View`
  padding: 20px;
  border-radius: 5px;
  gap: 10px;
  background-color: ${Constants.colors.gray[100]};
  border: 1px solid ${Constants.colors.gray[400]};
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ClinicaName = styled.Text`
  font-size: 14px;
  font-family: ${Constants.fontConfig.Xsm.Regular.FontFamily};
  color: ${Constants.colors.gray[700]};
`;

const ClinicaAddress = styled.Text`
  font-size: 12px;
  font-family: ${Constants.fontConfig.Xsm.Regular.FontFamily};
  color: ${Constants.colors.gray[700]};
`;

const ConvenioCard = styled.View`
  padding: 20px;
  border-radius: 5px;
  gap: 10px;
  background-color: ${Constants.colors.gray[100]};
  border: 1px solid ${Constants.colors.gray[400]};
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ConveniosTitle = styled.Text`
  font-family: ${Constants.fontConfig.Xsm.Regular.FontFamily};
  color: ${Constants.colors.gray[700]};
  font-size: 14px;
  font-weight: bold;
`;

const Convenios = styled.Text`
  font-size: 12px;
  font-family: ${Constants.fontConfig.Xsm.Regular.FontFamily};
  color: ${Constants.colors.gray[700]};
`;

const ClinicIcon = styled.View`
  width: 30px;
  height: 30px;
`;
// ...

const ResumoConsulta = ({ route }: DentistaScreenProps) => {
  // const { dentista } = route.params!;
  return (
    // Adicione o código JSX para exibir o resumo das informações
    <View>
      <Text>Resumo da Consulta:</Text>
      <Text>Nome do dentista: {consultaInfo.nomeDentista}</Text>
      <Text>Especialidade: {consultaInfo.especialidade}</Text>
      <Text>
        Agendamento: {consultaInfo.agendamento.diaSemana},{" "}
        {consultaInfo.agendamento.dia}, {consultaInfo.agendamento.hora}
      </Text>

      <Cards>
        <ClinicaCard>
          <ClinicIcon>
            <ImageWrapper width={30} height={30} source={MedicalClinic} />
          </ClinicIcon>
          <View style={{ gap: 3 }}>
            <ClinicaName>{consultaInfo.dentista.clinica}</ClinicaName>
            <ClinicaAddress>
              {consultaInfo.dentista.endereco.rua},
              {consultaInfo.dentista.endereco.numero} -{" "}
              {consultaInfo.dentista.endereco.cidade} -{" "}
              {consultaInfo.dentista.endereco.estado}
            </ClinicaAddress>
          </View>
        </ClinicaCard>

        <ConvenioCard>
          <ClinicIcon>
            <ImageWrapper width={30} height={30} source={CardBank} />
          </ClinicIcon>
          <View style={{ gap: 3 }}>
            <ConveniosTitle>Convênios Aceitos </ConveniosTitle>
            <Convenios>Unimed - Amil - Bradesco</Convenios>
          </View>
        </ConvenioCard>
      </Cards>
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
