import { useContext, useState } from "react";
import ButtonPrimaryDefault from "../../components/utils/ButtonPrimaryDefault";
import InputWithTitleSubtitle from "../../components/utils/InputWithTitleSubtitle";
import PaddingContent from "../../components/utils/PaddingContent";
import SafeAreaViewDefault from "../../components/utils/SafeAreaViewLogin";
import * as Store from "../../redux/store/store";

export default function ForgotPasswordScreen({ navigation }: any) {
  return (
    <SafeAreaViewDefault>
      <PaddingContent style={{ marginTop: 8 }}>
        <InputWithTitleSubtitle
          TextTitle={"Insira seu email cadastrado"}
          TextSubtitle={
            "Vamos enviar um email com o link para redefinição de senha."
          }
          InputPlaceHolder={"Email"}
          //onChangeText={(value) => {handleChange(value, 'login')}}
          //value={loginInfo.login}
        />
        <ButtonPrimaryDefault
          title={"Enviar email de redefinição"}
          style={{ marginTop: 8 }}
          onPress={() => {
            alert("Em desenvolvimento");
          }}
        />
      </PaddingContent>
    </SafeAreaViewDefault>
  );
}
