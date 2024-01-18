import * as Constants from "../../constants/Constants";
import SafeAreaViewStart from "../../components/start/SafeAreaViewStart";
// import MainImage from "../../../assets/Start/main-image.png";
// import PeopleImage from "../../../assets/Start/people-image.png";
import TextMainStart from "../../components/start/TextMainStart";
import TextSubtitleStart from "../../components/start/TextSubtitleStart";
import ButtonPrimaryDefault from "../../components/utils/ButtonPrimaryDefault";
import CenteredView from "../../components/utils/CenteredView";
// import ImageWrapper from '../../components/utils/ImageWrapper';
import { ButtonSecundaryDefault } from "../../components/utils/ButtonSecondaryDefault";
import PaddingContent from "../../components/utils/PaddingContent";
import api from "../../helper/api";
import { useContext, useEffect } from "react";
import * as Store from "../../redux/store/store";
import { CommonActions } from "@react-navigation/native";

export default function StartScreen({ navigation }: any) {
  const { isLogin }: any = useContext(Store.LoginContext);
  useEffect(() => {
    if (isLogin) {
      navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [
            {
              name: "HomeRoutes",
              params: { isRegister: false },
            },
          ],
        })
      );
    }
  }, [isLogin]);
  return (
    <SafeAreaViewStart>
      <PaddingContent
        style={{ justifyContent: "space-evenly", alignItems: "center" }}
      >
        {/*
        <ImageWrapper source={MainImage} width={'100%'} height={'40%'} resizeMode={'contain'}/>
        <ImageWrapper source={PeopleImage} width={'101px'} height={'26px'}/>
        */}
        <CenteredView>
          <TextMainStart>Seu sorriso saudável começa aqui!</TextMainStart>
          <TextSubtitleStart>
            Agende consultas e mapeie seus cuidados com a saúde bucal
          </TextSubtitleStart>
        </CenteredView>
        <CenteredView>
          <ButtonPrimaryDefault
            title="Criar uma conta"
            underlayColor={
              Constants.buttonConfig.Ontouch.Primary.Default.BackgroundColor
            }
            onPress={() => {
              navigation.navigate("Register");
            }}
            marginBottom={10}
          />
          <ButtonSecundaryDefault
            title="Entrar"
            underlayColor={
              Constants.buttonConfig.Ontouch.Secondary.Default.BackgroundColor
            }
            onPress={() => navigation.navigate("Login")}
          />
        </CenteredView>
      </PaddingContent>
    </SafeAreaViewStart>
  );
}
