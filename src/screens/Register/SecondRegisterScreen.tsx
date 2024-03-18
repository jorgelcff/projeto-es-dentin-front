import { useContext, useEffect, useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
} from "react-native";
import CurrentScreenWidget from "../../components/register/CurrentScreenWidget";
import ButtonPrimaryDefault from "../../components/utils/ButtonPrimaryDefault";
import InputWithTitleSubtitle from "../../components/utils/InputWithTitleSubtitle";
import NotificationPopup from "../../components/utils/NotificationPopup";
import PaddingContent from "../../components/utils/PaddingContent";
import SafeAreaViewDefault from "../../components/utils/SafeAreaViewLogin";
import * as Store from "../../redux/store/store";

import * as Constants from "../../constants/Constants";
import TextPrivacy from "../../components/register/TextPrivacy";
import { RegisterService } from "../../services/RegisterService";
import { PacienteService } from "../../services/PacienteService";

export default function SecondRegisterScreen({ navigation }: any) {
  const { registerInfo, setRegisterInfo }: any = useContext(
    Store.RegisterContext
  );

  const [isDisabled, setIsDisabled] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [password, setPassword] = useState({
    password: "",
    confirmPassword: "",
  });

  const [keyboardVisible, setKeyboardVisible] = useState(false);
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const handleChange = (value: any, type: any) => {
    setRegisterInfo((prev) => ({ ...prev, [type]: value }));
  };
  const pacienteService = new PacienteService();
  const onSubmit = async () => {
    console.log(registerInfo);
    const isPasswordValid = () => {
      return (
        password.password.length > 7 &&
        password.password === password.confirmPassword
      );
    };
    if (password.password && isPasswordValid()) {
      registerInfo.senha = password.password;
      await pacienteService.postPaciente(registerInfo);
      console.log(registerInfo);
    } else {
      setShowPopup(true);
    }
  };
  return (
    <SafeAreaViewDefault>
      <PaddingContent>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
            paddingBottom: keyboardVisible ? 350 : 20,
          }}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
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
              disabled={isDisabled}
              style={{
                backgroundColor: isDisabled
                  ? Constants.colors.gray[700]
                  : Constants.buttonConfig.Default.Primary.Small
                      .BackgroundColor,
                marginBottom: 30,
              }}
              onPress={() => {
                onSubmit();
              }}
            />
          </KeyboardAvoidingView>
        </ScrollView>
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
