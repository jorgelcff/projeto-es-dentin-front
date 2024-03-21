import Input from "../../components/utils/Input";
import ButtonPrimaryDefault from "../../components/utils/ButtonPrimaryDefault";
import TextForgotPassword from "../../components/login/TextForgotPassword";
import { useContext, useEffect, useState } from "react";
import * as Store from "../../redux/store/store";
import PaddingContent from "../../components/utils/PaddingContent";
import SafeAreaViewDefault from "../../components/utils/SafeAreaViewLogin";
import NotificationPopup from "../../components/utils/NotificationPopup";
import { AuthService } from "../../services/AuthService";
import * as Constants from "../../constants/Constants";

export default function LoginScreen({ navigation }: any) {
  const authService = new AuthService();
  const [showPopup, setShowPopup] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const { loginInfo, setLoginInfo, setIsLogin }: any = useContext(
    Store.LoginContext
  );

  const handleChange = async (value: any, type: any) => {
    setLoginInfo((prev: any) => ({ ...prev, [type]: value }));
  };

  const handleLogin = async () => {
    try {
      setIsDisabled(true);
      if (loginInfo.login && loginInfo.password) {
        const response = await authService.login(
          loginInfo.login,
          loginInfo.password
        );
        if (response) {
          navigation.navigate("HomeScreen");
        } else {
          setShowPopup(true);
        }
      } else {
        setShowPopup(true);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsDisabled(false);
    }
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
          onPress={() => handleLogin()}
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
