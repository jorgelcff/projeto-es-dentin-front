import React, { useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import * as Constants from "../../constants/Constants";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { DenTinService } from "../../services/DenTinService";
import { DentistaService } from "../../services/DentistaService";
import { Dentista } from "../../models/Dentista";


const Doctors = styled.View`
  width: 100%;
  flex: 1;
`;

const DoctorCard = styled.View`
  padding: 16px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid;
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
  const [dentistas, setDentistas] = useState<Dentista[]> ();

  useEffect(() => {
    const fetchDentistas = async () => {
      try {
        const dentistaService = new DentistaService();
        const response = await dentistaService.getDentistas();
        const fetchedDentistas = response.data;
        setDentistas(fetchedDentistas);
        console.log(fetchedDentistas)
        console.log(dentistas)

      } catch (error) {
        console.error("Erro ao buscar os dentistas:", error);
      }
    };

    fetchDentistas();
  }, []);
  const gotoDentista = (dentista: Dentista) => {
    navigation.navigate("DentistaScreen", { dentista: dentista } );
    console.log(dentista)
  };

  const renderItem = ({ item }: any) => (
    <TouchableOpacity onPress={() => gotoDentista(item)}>
      <DoctorCard>
        <DoctorInfo>
          <DoctorName>{item.nome}</DoctorName>
          <DoctorSpecialty>{item.especialidadeNN}</DoctorSpecialty>
        </DoctorInfo>
        <DoctorInfo style={{ alignItems: "center" }}>
          <Ionicons
            name="star"
            size={16}
            color={Constants.colors.support.Yellow[500]}
          />
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
        keyExtractor={(item) => item.pkDentista}
      />
    </Doctors>
  );
};

export default DoctorsList;
