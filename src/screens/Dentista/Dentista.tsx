import { View, Text } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type DentistaScreenProps = {
  route: RouteProp<RootStackParamList, "DentistaScreen">;
  navigation: StackNavigationProp<RootStackParamList, "DentistaScreen">;
};

const DentistaScreen = ({ route }: DentistaScreenProps) => {
  const { dentista } = route.params;

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{dentista.nome}</Text>
      <Text>{dentista.id}</Text>
      <Text>{dentista.especialidade}</Text>
      <Text>{dentista.clinica}</Text>
      <Text>{dentista.avaliacao}</Text>
      {Object.entries(dentista.endereco).map(([key, value]) => {
        return (
          <View key={key}>
            <Text>{key}: {value}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default DentistaScreen;
