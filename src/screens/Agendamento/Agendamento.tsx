import React, { useState } from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import styled from "styled-components/native";
import * as Constants from "../../constants/Constants";
import ButtonPrimaryDefault from "../../components/utils/ButtonPrimaryDefault";
import { red100 } from "react-native-paper/lib/typescript/styles/themes/v2/colors";

const DentistaName = styled.Text`
  color: ${Constants.colors.gray[700]};
  font-size: 18px;
  padding: 20px;
  font-weight: bold;
`;

const SelectHour = styled.View`
  flex-direction: column;
  justify-content: space-between;
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
      : ""};
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

const AgendamentoScreen = () => {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (event: any, selectedDate: Date | undefined) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <DentistaName>Selecione a data da consulta</DentistaName>
      <View>
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={handleDateChange}
        />
      </View>
      <SelectHour>
        <Text>Selecione o horário da consulta</Text>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 15,
          }}
        >
          <ButtonSelectHour onPress={() => {}} selected={true}>
            <ButtonText selected={true}>09:00</ButtonText>
          </ButtonSelectHour>
          <ButtonSelectHour onPress={() => {}} disabled={true}>
            <ButtonText>10:00</ButtonText>
          </ButtonSelectHour>
          <ButtonSelectHour onPress={() => {}}>
            <ButtonText>11:00</ButtonText>
          </ButtonSelectHour>
          <ButtonSelectHour onPress={() => {}} disabled={true}>
            <ButtonText>12:00</ButtonText>
          </ButtonSelectHour>
          <ButtonSelectHour onPress={() => {}}>
            <ButtonText>13:00</ButtonText>
          </ButtonSelectHour>
          <ButtonSelectHour onPress={() => {}}>
            <ButtonText>14:00</ButtonText>
          </ButtonSelectHour>
          <ButtonSelectHour onPress={() => {}}>
            <ButtonText>15:00</ButtonText>
          </ButtonSelectHour>
          <ButtonSelectHour onPress={() => {}} disabled={true}>
            <ButtonText>16:00</ButtonText>
          </ButtonSelectHour>
        </View>
      </SelectHour>
      <View style={{ padding: 20, width: "100%", paddingHorizontal: 50 }}>
        <ButtonPrimaryDefault title="Confirmar agenda" />
      </View>
    </View>
  );
};

export default AgendamentoScreen;
