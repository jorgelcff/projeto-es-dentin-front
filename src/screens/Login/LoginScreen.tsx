import Input from "../../components/utils/Input";
import ButtonPrimaryDefault from "../../components/utils/ButtonPrimaryDefault";
import TextForgotPassword from "../../components/login/TextForgotPassword";
import { useContext, useEffect, useState } from "react";
import * as Store from "../../redux/store/store";
import PaddingContent from "../../components/utils/PaddingContent";
import SafeAreaViewDefault from "../../components/utils/SafeAreaViewLogin";
import NotificationPopup from "../../components/utils/NotificationPopup";
import { CommonActions } from "@react-navigation/native";
import * as Constants from "../../constants/Constants";

export default function LoginScreen({ navigation }: any) {
  const [showPopup, setShowPopup] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const { loginInfo, setLoginInfo, setIsLogin }: any = useContext(
    Store.LoginContext
  );
  const handleChange = async (value: any, type: any) => {
    setLoginInfo((prev: any) => ({ ...prev, [type]: value }));
  };

  return (
    <SafeAreaViewDefault>
      <PaddingContent style={{ marginTop: 40, alignItems: "center" }}>
        <Input
          placeholder="Login"
          marginBottom={12}
          onChangeText={(value: string) => {
            handleChange(value, "login");
          }}
          value={loginInfo.login}
        />
        <Input
          placeholder="Senha"
          secureTextEntry={true}
          marginBottom={38}
          onChangeText={(value: string) => {
            handleChange(value, "password");
          }}
          value={loginInfo.password}
        />
        <ButtonPrimaryDefault
          title="Entrar"
          testID="test"
          onPress={() => navigation.navigate("HomeScreen")}
          disabled={isDisabled}
          style={{
            backgroundColor: isDisabled
              ? Constants.colors.gray[700]
              : Constants.buttonConfig.Default.Primary.Small.BackgroundColor,
          }}
        />
        <TextForgotPassword
          suppressHighlighting={true}
          onPress={() => navigation.navigate("ForgotPassword")}
        >
          Esqueci minha senha
        </TextForgotPassword>
        {showPopup && (
          <NotificationPopup
            title={"Login ou senha incorreto."}
            setShowPopup={setShowPopup}
            bottom={"60px"}
          />
        )}
      </PaddingContent>
    </SafeAreaViewDefault>
  );
}
