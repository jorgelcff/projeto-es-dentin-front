import { RouteProp, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useState } from "react";
import { Button, View, Text, Modal } from "react-native";
import styled from "styled-components/native";
import * as Constants from "../../constants/Constants";
import ImageWrapper from "../../components/utils/ImageWrapper";
import MedicalClinic from "../../../assets/Dentista/hospital-line.png";
import CardBank from "../../../assets/Dentista/bank-card-2-line.png";
import Ionicons from "@expo/vector-icons/Ionicons";
import ButtonPrimaryDefault from "../../components/utils/ButtonPrimaryDefault";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ConsultaService } from "../../services/ConsultaService";
import { Icon } from "react-native-paper";

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

const Title = styled.Text`
  text-align: center;
  color: ${Constants.colors.gray[700]};
  font-size: 18px;
  padding: 20px;
  font-weight: bold;
`;

const SubTitle = styled.Text`
  color: ${Constants.colors.gray[600]};
  font-size: 14px;
  font-weight: bold;
`;

const Names = styled.Text`
  color: ${Constants.colors.primary[600]};
  font-size: 20px;
  font-weight: bold;
`;

// ...

const ResumoConsulta = ({
  date,
  hour,
  tipoConsulta,
  dentista,
  consultorio,
}) => {
  return (
    // Adicione o código JSX para exibir o resumo das informações
    <View
      style={{
        flex: 1,
      }}
    >
      <Title>Informações da Consulta</Title>
      <Cards>
        <View>
          <SubTitle>Nome do dentista</SubTitle>
          <Names>{dentista.nome}</Names>
        </View>

        <View>
          <SubTitle>Especialidade</SubTitle>
          <Names>{dentista.especialidadeNN}</Names>
        </View>
      </Cards>
      {/* <Text>
        Agendamento: {consultaInfo.agendamento.diaSemana},{" "}
        {consultaInfo.agendamento.dia}, {hour}
      </Text> */}

      <Cards>
        <SubTitle>Endereço</SubTitle>
        <ClinicaCard>
          <ClinicIcon>
            <ImageWrapper width={30} height={30} source={MedicalClinic} />
          </ClinicIcon>
          <View style={{ gap: 3 }}>
            <ClinicaName>{consultaInfo.dentista.clinica}</ClinicaName>
            <ClinicaAddress>
              {consultorio.rua}, {consultorio.endereco} - {consultorio.cidade} -{" "}
              {consultorio.uf}
            </ClinicaAddress>
          </View>
        </ClinicaCard>
        <SubTitle>Agendamento</SubTitle>
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
  const { date, hour, tipoConsulta, dentista, consultorio } = route.params;
  const [isDisable, setIsDisable] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const [infoConsulta, setInfoConsulta] = useState<any>();
  const consultaService = new ConsultaService();

  const closeModal = () => {
    setModalVisible(false);
  };

  const goToHome = () => {
    navigation.navigate("HomeScreen");
  };

  const goToConsultas = () => {
    navigation.navigate("HomeScreen");
  };
  const confirmarConsulta = async () => {
    setIsDisable(true);
    const usuarioSave = await AsyncStorage.getItem("usuario");
    const usuario = JSON.parse(usuarioSave!);
    console.log(usuario, date, hour, tipoConsulta, dentista, consultorio);

    if (usuario && date && hour && tipoConsulta && dentista && consultorio) {
      const consulta = {
        fkPaciente: usuario.pkPaciente,
        dataConsulta: date,
        horaConsulta: hour,
        fkDentista: dentista.pkDentista,
        tipo: tipoConsulta,
        sala: "Sala 1",
        fkConsultorio: consultorio.pkConsultorio,
        preco: null,
        status: "Agendada",
        comentario: null,
        avaliacao: null,
      };

      try {
        console.log("boydConsulta", consulta);
        const response = await consultaService.postConsulta(consulta);

        if (response.status === 201) {
          // Handle success
          console.log("Consulta agendada com sucesso!");
          setInfoConsulta({
            usuario: usuario,
            date: date,
            hour: hour,
            tipoConsulta: tipoConsulta,
            dentista: dentista,
            consultorio: consultorio,
          });
          setModalVisible(true);
        } else {
          // Handle error
          console.log("Erro ao agendar consulta");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      {/* Adicione o componente ResumoConsulta para exibir o resumo das informações */}
      <ResumoConsulta
        date={date}
        hour={hour}
        tipoConsulta={tipoConsulta}
        dentista={dentista}
        consultorio={consultorio}
      />

      {/* Adicione o botão para confirmar a consulta */}
      <View
        style={{ padding: 20, width: "100%", paddingHorizontal: 20, bottom: 0 }}
      >
        <ButtonPrimaryDefault
          disabled={isDisable}
          title={isDisable ? "Carregando..." : "Confirmar agenda"}
          onPress={() => confirmarConsulta()}
        />
      </View>
      <ConfirmationModal
        isVisible={modalVisible}
        onClose={closeModal}
        onHomePress={goToHome}
        onConsultasPress={goToConsultas}
        infoConsulta={infoConsulta}
      />
    </View>
  );
};

const ConfirmationModal = ({
  isVisible,
  onClose,
  onHomePress,
  onConsultasPress,
  infoConsulta,
}) => {
  return (
    <Modal visible={isVisible} animationType="slide" transparent>
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            padding: 20,
            borderTopRightRadius: 15,
            borderTopLeftRadius: 15,
          }}
        >
          <Ionicons
            style={{
              alignSelf: "center",
              color: Constants.colors.primary[600],
            }}
            name="checkmark-circle"
            size={50}
          />
          <Title style={{ color: "black" }}>
            Consulta agendada com sucesso!
          </Title>
          {infoConsulta && (
            <SubTitle style={{ textAlign: "center", marginBottom: 30 }}>
              Agora você tem uma agenda marcada com {infoConsulta.dentista.nome}{" "}
              no dia {infoConsulta.date}, esteja lá em {infoConsulta.hour}
            </SubTitle>
          )}
          <View style={{ flexDirection: "column", height: 150, gap: 10 }}>
            <ButtonPrimaryDefault
              title="Ir para a Home"
              onPress={onHomePress}
              style={{ flex: 1 }}
            />
            <ButtonPrimaryDefault
              title="Ver Consultas"
              onPress={() => onConsultasPress()}
              style={{ flex: 1 }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ConfirmarConsultaScreen;
