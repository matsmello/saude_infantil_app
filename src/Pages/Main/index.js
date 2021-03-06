import * as React from "react";
import { View } from "react-native";

import * as S from "./style";

export default function Home({ navigation }) {
  return (
    <S.Container>
      <S.ContainerPure>
        <S.TopImage
          source={require("./../../assets/rain_colors.png")}
          resizeMode="contain"
        />
        <S.Logo
          source={require("./../../assets/logo.png")}
          resizeMode="contain"
        />
        <S.TextBold>Olá</S.TextBold>
        <S.Text>
          Para entrar, é só digitar o número do SUS do paciente no campo abaixo
        </S.Text>

        <S.Input placeholder="Insira o seu SUS" placeholderTextColor="black" />

        <S.Button onPress={() => navigation.navigate("Tutorial")}>
          <S.Text
            style={{
              color: "white",
              textAlign: "center",
              fontSize: 20,
              fontWeight: "500",
            }}
          >
            Entrar
          </S.Text>
        </S.Button>
        <S.Helper>Precisa de ajuda?</S.Helper>
        <S.BottomImage
          source={require("./../../assets/rain_colors.png")}
          resizeMode="contain"
        />
      </S.ContainerPure>
    </S.Container>
  );
}
