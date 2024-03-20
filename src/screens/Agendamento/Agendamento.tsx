import React, { useState } from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import styled from "styled-components/native";
import * as Constants from "../../constants/Constants";
import RNPickerSelect from "react-native-picker-select";
import ButtonPrimaryDefault from "../../components/utils/ButtonPrimaryDefault";
import { red100 } from "react-native-paper/lib/typescript/styles/themes/v2/colors";
import PaddingContent from "../../components/utils/PaddingContent";
import { colors } from "../../constants/Constants";
import NotificationPopup from "../../components/utils/NotificationPopup";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { Consultorio } from "../../models/Consultorio";

const DentistaName = styled.Text`
  color: ${Constants.colors.gray[700]};
  font-size: 18px;
  padding: 20px;
  font-weight: bold;
`;

const SelectHour = styled.View`
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const ButtonSelectHour = styled.TouchableOpacity<{
  selected?: boolean;
  disabled?: boolean;
}>`
  border: 2px solid
    ${Constants.buttonConfig.Default.Primary.Default.BackgroundColor};
  border-radius: ${Constants.buttonConfig.Default.Primary.Default.Radius};
  padding: 10px 25px;
  border-radius: 30px;
  background-color: ${(props) =>
    props.selected
      ? Constants.buttonConfig.Default.Primary.Default.BackgroundColor
      : "transparent"};
  ${(props) =>
    props.disabled &&
    `
    opacity: 0.2;
    pointer-events: none;
  `}
`;

const ButtonText = styled.Text<{ selected?: boolean }>`
  font-size: ${Constants.fontConfig.Body.Bold.FontSize};
  font-family: ${Constants.fontConfig.Body.Bold.FontFamily};
  color: ${(props) =>
    props.selected
      ? Constants.colors.gray[0]
      : Constants.buttonConfig.Default.Primary.Default.BackgroundColor};
`;
interface AgendamentoScreenProps {
  route: RouteProp<any, "AgendamentoScreen">;
}

const AgendamentoScreen = ({ route }: AgendamentoScreenProps) => {
  const { dentista, consultorio } = route.params;
  const navigation = useNavigation();
  const [date, setDate] = useState(new Date());
  const [hour, setHour] = useState("");
  const [tipoConsulta, setTipoConsulta] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  const handleDateChange = (event: any, selectedDate: Date | undefined) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  // handleHourChange = (selectedHour: string) => {};

  const onSubmit = () => {
    if (date && hour && tipoConsulta) {
      const formattedDate = `${date.getDate()}/${
        date.getMonth() + 1
      }/${date.getFullYear()}`;
      navigation.navigate("ConfirmarConsultaScreen", {
        date: formattedDate,
        hour: hour,
        tipoConsulta: tipoConsulta,
        dentista: dentista,
        consultorio: consultorio,
      });
    } else {
      setShowPopup(true);
    }
  };

  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <DentistaName>Selecione o Procedimento</DentistaName>
      <View
        style={{
          paddingHorizontal: 20,
        }}
      >
        <RNPickerSelect
          onValueChange={(value) => setTipoConsulta(value)}
          placeholder={{ label: "Clique aqui para selecionar", value: "" }}
          doneText={"Feito"}
          style={{
            inputIOS: {
              fontSize: 16,
              paddingVertical: 12,
              paddingHorizontal: 10,
              borderWidth: 1,
              borderColor: "gray",
              borderRadius: 4,
              color: "black",
              paddingRight: 30, // to ensure the text is never behind the icon
            },
            inputAndroid: {
              fontSize: 16,
              paddingHorizontal: 10,
              paddingVertical: 8,
              borderWidth: 0.5,
              borderColor: "purple",
              borderRadius: 8,
              color: "black",
              paddingRight: 30, // to ensure the text is never behind the icon
            },

            placeholder: {
              color: Constants.colors.gray[600],
              fontWeight: "600",
            },
            iconContainer: {
              backgroundColor: Constants.colors.gray[700],
            },
          }}
          items={[
            { label: "Check-up", value: "Check-up" },
            { label: "Exame", value: "Exame" },
            {
              label: "Procedimento estético ",
              value: "Procedimento estético ",
            },
            { label: "Cirurgia", value: "Cirurgia" },
            { label: "Tratamento patológico", value: "Tratamento patológico" },
            { label: "Aparelho ortodôntico", value: "Aparelho ortodôntico" },
            { label: "Não especificado", value: "Não especificado" },
          ]}
        />
      </View>

      <DentistaName>Selecione a data da consulta</DentistaName>
      <View>
        <TouchableOpacity onPress={() => setShowDatePicker(true)}>
          <Text>{date.toLocaleString().split(" ")[0]}</Text>
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode="date"
            is24Hour={true}
            display="calendar"
            onChange={handleDateChange}
          />
        )}
      </View>
      <SelectHour>
        <DentistaName>Selecione o horário da consulta</DentistaName>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 15,
          }}
        >
          <ButtonSelectHour
            selected={hour === "09:00-10:00"}
            onPress={() => {
              setHour("09:00-10:00");
            }}
          >
            <ButtonText selected={hour === "09:00-10:00"}>09:00</ButtonText>
          </ButtonSelectHour>
          <ButtonSelectHour
            selected={hour === "10:00-11:00"}
            onPress={() => {
              setHour("10:00-11:00");
            }}
          >
            <ButtonText selected={hour === "10:00-11:00"}>10:00</ButtonText>
          </ButtonSelectHour>
          <ButtonSelectHour
            selected={hour === "11:00-12:00"}
            onPress={() => {
              setHour("11:00-12:00");
            }}
          >
            <ButtonText selected={hour === "11:00-12:00"}>11:00</ButtonText>
          </ButtonSelectHour>
          <ButtonSelectHour
            selected={hour === "12:00-13:00"}
            onPress={() => {
              setHour("12:00-13:00");
            }}
          >
            <ButtonText selected={hour === "12:00-13:00"}>12:00</ButtonText>
          </ButtonSelectHour>
          <ButtonSelectHour
            selected={hour === "13:00-14:00"}
            onPress={() => {
              setHour("13:00-14:00");
            }}
          >
            <ButtonText selected={hour === "13:00-14:00"}>13:00</ButtonText>
          </ButtonSelectHour>
          <ButtonSelectHour
            selected={hour === "14:00-15:00"}
            onPress={() => {
              setHour("14:00-15:00");
            }}
          >
            <ButtonText selected={hour === "14:00-15:00"}>14:00</ButtonText>
          </ButtonSelectHour>
          <ButtonSelectHour
            selected={hour === "15:00-16:00"}
            onPress={() => {
              setHour("15:00-16:00");
            }}
          >
            <ButtonText selected={hour === "15:00-16:00"}>15:00</ButtonText>
          </ButtonSelectHour>
          <ButtonSelectHour
            selected={hour === "16:00-17:00"}
            onPress={() => {
              setHour("16:00-17:00");
            }}
          >
            <ButtonText selected={hour === "16:00-17:00"}>16:00</ButtonText>
          </ButtonSelectHour>
        </View>
      </SelectHour>
      <View
        style={{ padding: 20, width: "100%", paddingHorizontal: 20, bottom: 0 }}
      >
        <ButtonPrimaryDefault
          title="Confirmar agenda"
          onPress={() => onSubmit()}
        />
      </View>
      {showPopup && (
        <NotificationPopup
          title={"Selecione todos os itens"}
          setShowPopup={setShowPopup}
          bottom={"60px"}
        />
      )}
    </View>
  );
};

export default AgendamentoScreen;
