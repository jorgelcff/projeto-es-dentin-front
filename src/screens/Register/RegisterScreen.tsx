import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
} from "react-native";
import ButtonPrimaryDefault from "../../components/utils/ButtonPrimaryDefault";
import * as Constants from "../../constants/Constants";
import { useContext, useEffect, useState } from "react";
import * as Store from "../../redux/store/store";
import PaddingContent from "../../components/utils/PaddingContent";
import SafeAreaViewDefault from "../../components/utils/SafeAreaViewLogin";
import CurrentScreenWidget from "../../components/register/CurrentScreenWidget";
import InputWithTitleSubtitle from "../../components/utils/InputWithTitleSubtitle";
import NotificationPopup from "../../components/utils/NotificationPopup";
import { getIsEmailAvailable } from "../../helper/register/utils";
import { LoginInfo } from "../../types/LoginInfo";
import InputWithTitle from "../../components/utils/InputWithTitle";
import SelectGender from "../../components/register/SelectGender";
import SelectConvenio from "../../components/register/SelectConvenio";

export default function RegisterScreen({ navigation }: any) {
  const { loginInfo, setLoginInfo }: any = useContext(Store.LoginContext);
  const [showPopup, setShowPopup] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const handleChange = (value: LoginInfo, type: any) => {
    setLoginInfo((prev: LoginInfo) => ({ ...prev, [type]: value }));
  };

  const onSubmit = async () => {
    // const isEmailValid = () => {
    //   return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
    //     loginInfo.login
    //   );
    // };
    navigation.navigate("SecondRegisterScreen");
    // if (loginInfo.login && isEmailValid()) {
    //   setIsDisabled(true);
    //   const response = await getIsEmailAvailable(
    //     loginInfo.login.toLowerCase().trim()
    //   )
    //     .then((response) => {
    //       navigation.navigate("SecondRegisterScreen");
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //       setShowPopup(true);
    //     });
    //   setIsDisabled(false);
    // } else {
    //   setShowPopup(true);
    // }
  };

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
            <CurrentScreenWidget numberOfFilledWidgets={1} />
            <InputWithTitleSubtitle
              TextTitle={"Insira seu nome"}
              TextSubtitle={"Como você deseja ser chamado"}
              InputPlaceHolder={"Nome"}
              onChangeText={(value: any) => handleChange(value, "name")}
              value={loginInfo.name}
            />
            <InputWithTitleSubtitle
              TextTitle={"Insira seu email"}
              TextSubtitle={
                "Não vamos te enviar spam nem nada, é só pra entrar no aplicativo mesmo :)"
              }
              InputPlaceHolder={"Email"}
              onChangeText={(value: any) => {
                handleChange(value, "login");
              }}
              value={loginInfo.login}
            />
            <InputWithTitle
              TextTitle={"Telefone"}
              InputPlaceHolder={"(00) 00000-0000"}
              onChangeText={(value: any) => {
                handleChange(value, "login");
              }}
              value={loginInfo.login}
              TextSubtitle={""}
            />
            <InputWithTitle
              TextTitle={"Data de nascimento"}
              InputPlaceHolder={"xx/xx/xxxx"}
              onChangeText={(value: any) => {
                handleChange(value, "login");
              }}
              value={loginInfo.login}
              TextSubtitle={""}
            />
            <SelectGender
              TextTitle={"Gênero"}
              InputPlaceHolder={"Selecione seu gênero"}
            />
            <SelectConvenio
              TextTitle={"Convenio"}
              InputPlaceHolder={"Selecione seu gênero"}
            />
          </KeyboardAvoidingView>
        </ScrollView>
        <ButtonPrimaryDefault
          title={"Continuar"}
          onPress={() => {
            onSubmit();
          }}
          disabled={isDisabled}
          style={{
            backgroundColor: isDisabled
              ? Constants.colors.gray[700]
              : Constants.buttonConfig.Default.Primary.Small.BackgroundColor,
            marginBottom: 30,
          }}
        />
        {showPopup && (
          <NotificationPopup
            title={"Email inválido ou já existente."}
            setShowPopup={setShowPopup}
            bottom={"30px"}
          />
        )}
      </PaddingContent>
    </SafeAreaViewDefault>
  );
}
