// screens/HomeScreen.js
import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Esta é a tela inicial!</Text>
      <Button
        title="Ir para o Styled Component"
        onPress={() => navigation.navigate("StyledComponent" as never)}
      />
    </View>
  );
};

export default HomeScreen;
