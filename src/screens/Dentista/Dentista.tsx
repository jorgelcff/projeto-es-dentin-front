import { View, Text } from "react-native";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import styled from "styled-components/native";
import * as Constants from "../../constants/Constants";
import MedicalClinic from "../../../assets/Dentista/hospital-line.png";
import CardBank from "../../../assets/Dentista/bank-card-2-line.png";
import ImageWrapper from "../../components/utils/ImageWrapper";
import ButtonPrimaryDefault from "../../components/utils/ButtonPrimaryDefault";
import { ConsultorioService } from "../../services/ConsultorioService";
import { useEffect, useState } from "react";
import { Consultorio } from "../../models/Consultorio";
type DentistaScreenProps = {
  route: RouteProp<any, "DentistaScreen">;
  navigation: StackNavigationProp<any, "DentistaScreen">;
};

const DentistaInfo = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 20px;
`;

const DentistaImage = styled.Image`
  width: 110px;
  height: 110px;
  border-radius: 20px;
  background-color: #252525;
  border: 2px solid ${Constants.colors.primary[600]};
`;

const DentistaInfoTexts = styled.View`
  margin-left: 20px;
  gap: 5px;
`;

const DentistaName = styled.Text`
  color: ${Constants.colors.gray[700]};
  font-size: 24px;
  font-weight: bold;
`;

const DentistaSpeciality = styled.Text`
  color: ${Constants.colors.primary[600]};
  font-size: 18px;
  font-weight: regular;
`;

const DentistaLocation = styled.Text`
  font-size: 16px;
`;

const DentistaRate = styled.Text`
  font-size: 16px;
`;

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

const Procediments = styled.View`
  width: 100%;
  padding: 20px;
  gap: 10px;
`;

const ProcedimentTitle = styled.Text`
  font-family: ${Constants.fontConfig.Xsm.Regular.FontFamily};
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  color: ${Constants.colors.gray[700]};
`;

const ProcedimentList = styled.Text`
  font-family: ${Constants.fontConfig.Xsm.Regular.FontFamily};
  font-size: 12px;
  text-align: center;
  color: ${Constants.colors.gray[700]};
`;

const DentistaScreen = ({ route }: DentistaScreenProps) => {
  const { dentista } = route.params;
  const navigation = useNavigation();
  const consultorioService = new ConsultorioService();
  const [consultorio, setConsultorio] = useState<Consultorio>();

  const getConsultorioInfo = async () => {
    console.log(dentista);
    const response = await consultorioService.getConsultorio(
      dentista.pkDentista
    );
    setConsultorio(response.data);
  };

  const onSubmit = async () => {
    navigation.navigate("AgendamentoScreen", {
      dentista: dentista,
      consultorio: consultorio,
    });
  };
  useEffect(() => {
    getConsultorioInfo();
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <DentistaInfo>
        <DentistaImage source={{ uri: dentista.imagem }} />
        <DentistaInfoTexts>
          <DentistaName>{dentista.nome}</DentistaName>
          <DentistaSpeciality>{dentista.especialidadeNN}</DentistaSpeciality>
          <DentistaLocation>
            {dentista.cidade}, {dentista.uf}
          </DentistaLocation>
          {/* <DentistaRate>{dentista.avaliacao}</DentistaRate> */}
        </DentistaInfoTexts>
      </DentistaInfo>
      <Cards>
        {consultorio && (
          <ClinicaCard>
            <ClinicIcon>
              <ImageWrapper width={30} height={30} source={MedicalClinic} />
            </ClinicIcon>
            <View style={{ gap: 3 }}>
              <ClinicaName>{consultorio.nome}</ClinicaName>
              <ClinicaAddress>
                {consultorio.rua},{consultorio.endereco} - {consultorio.cidade}{" "}
                - {consultorio.uf}
              </ClinicaAddress>
            </View>
          </ClinicaCard>
        )}

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
      <Procediments>
        <ProcedimentTitle>Especialidades</ProcedimentTitle>
        <ProcedimentList>
          {dentista.especialidadeNN} - {dentista.especialidade2}
        </ProcedimentList>
      </Procediments>
      <View style={{ padding: 20, width: "100%", paddingHorizontal: 20 }}>
        <ButtonPrimaryDefault
          title="Agendar consulta"
          onPress={() => onSubmit()}
        />
      </View>
    </View>
  );
};

export default DentistaScreen;
