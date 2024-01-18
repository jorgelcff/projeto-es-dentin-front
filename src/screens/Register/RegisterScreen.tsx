import { View } from "react-native";
import ButtonPrimaryDefault from "../../components/utils/ButtonPrimaryDefault";
import * as Constants from "../../constants/Constants";
import { useContext, useState } from "react";
import * as Store from "../../redux/store/store";
import PaddingContent from "../../components/utils/PaddingContent";
import SafeAreaViewDefault from "../../components/utils/SafeAreaViewLogin";
import CurrentScreenWidget from "../../components/register/CurrentScreenWidget";
import InputWithTitleSubtitle from "../../components/utils/InputWithTitleSubtitle";
import NotificationPopup from "../../components/utils/NotificationPopup";
import { getIsEmailAvailable } from "../../helper/register/utils";
import { LoginInfo } from "../../types/LoginInfo";

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
  return (
    <SafeAreaViewDefault>
      <PaddingContent>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
            alignItems: "center",
          }}
        >
          <View>
            <CurrentScreenWidget numberOfFilledWidgets={1} />
            <InputWithTitleSubtitle
              TextTitle={"Insira seu nome preferido"}
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
          </View>
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
        </View>
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
