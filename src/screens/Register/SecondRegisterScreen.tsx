import { useContext, useEffect, useState } from "react";
import { View } from "react-native";
import CurrentScreenWidget from "../../components/register/CurrentScreenWidget";
import ButtonPrimaryDefault from "../../components/utils/ButtonPrimaryDefault";
import InputWithTitleSubtitle from "../../components/utils/InputWithTitleSubtitle";
import NotificationPopup from "../../components/utils/NotificationPopup";
import PaddingContent from "../../components/utils/PaddingContent";
import SafeAreaViewDefault from "../../components/utils/SafeAreaViewLogin";
import * as Store from "../../redux/store/store";
import TextPrivacy from "../../components/register/TextPrivacy";

export default function SecondRegisterScreen({ navigation }: any) {
  const { loginInfo, setLoginInfo }: any = useContext(Store.LoginContext);
  const [showPopup, setShowPopup] = useState(false);
  const [password, setPassword] = useState({
    password: "",
    confirmPassword: "",
  });
  const handleChange = (value: any, type: any) => {
    setPassword((prev) => ({ ...prev, [type]: value }));
  };

  const onSubmit = async () => {
    //   navigation.navigate("ThirdRegisterScreen");
    // const isPasswordValid = () => {
    //   return (
    //     password.password.length > 7 &&
    //     password.password === password.confirmPassword
    //   );
    // };
    // if (password.password && isPasswordValid()) {
    //   loginInfo.password = password.password;
    //   navigation.navigate("ThirdRegisterScreen");
    // } else {
    //   setShowPopup(true);
    // }
  };
  return (
    <SafeAreaViewDefault>
      <PaddingContent>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          <View style={{ alignSelf: "center" }}>
            <CurrentScreenWidget numberOfFilledWidgets={2} />
            <InputWithTitleSubtitle
              TextTitle={"Defina uma senha"}
              TextSubtitle={"Crie uma senha com pelo menos 8 caracteres."}
              InputPlaceHolder={"Senha"}
              onChangeText={(value) => {
                handleChange(value, "password");
              }}
              value={password.password}
              secureTextEntry={true}
            />
            <InputWithTitleSubtitle
              TextTitle={"Confirme sua senha"}
              TextSubtitle={"A senha deve coincidir com a escolhida acima"}
              InputPlaceHolder={"Confirme a senha"}
              onChangeText={(value) => {
                handleChange(value, "confirmPassword");
              }}
              value={password.confirmPassword}
              secureTextEntry={true}
            />
          </View>
          <TextPrivacy />
          <ButtonPrimaryDefault
            title={"Finalizar Cadastro"}
            style={{ marginBottom: 30 }}
            onPress={() => {
              onSubmit();
            }}
          />
        </View>
        {showPopup && (
          <NotificationPopup
            title={"Senha informada inválida."}
            setShowPopup={setShowPopup}
            bottom={"35px"}
          />
        )}
      </PaddingContent>
    </SafeAreaViewDefault>
  );
}
