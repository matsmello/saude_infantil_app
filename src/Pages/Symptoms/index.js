import * as React from "react";

import * as S from "./style";

import { Divider } from "react-native-paper";
import { ScrollView, View, Text, Dimensions } from "react-native";
import Constants from "expo-constants";
import { CheckBox } from "react-native-elements";

export default function Home({ navigation }) {
  return (
    <S.Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <S.ContainerPure
          style={{
            width: Dimensions.get("window").width,
          }}
        >
          <S.TextBold>Olá, João!</S.TextBold>

          <View style={{ width: "100%", marginVertical: 25 }}>
            <Divider style={{ height: 10, backgroundColor: "#F99D07" }} />
          </View>

          <S.Text style={{ fontWeight: "bold" }}>
            Você tem alguns destes sintomas?
          </S.Text>
          <View>
            {[
              "Palidez inexplicada",

              "Manchas roxas",

              "Sangramento pelo corpo sem machucado",

              "Perda de peso",

              "Febre prolongada sem causa específica",

              "Dores nos ossos e nas juntas",

              "Caroço em qualquer parte do corpo, principalmente na barriga",

              "Vômitos acompanhos de dor de cabeça",

              "Diminuição da visão",

              "Crescimento de olho, podendo estar acompanhado de mancha roxa no local",
            ].map((el) => (
              <CheckBox
                containerStyle={{
                  backgroundColor: "white",
                  borderWidth: 0,
                  paddingVertical: 15,
                }}
                uncheckedColor="#37B6F6"
                title={el}
                checked={false}
              />
            ))}
          </View>
        </S.ContainerPure>
      </ScrollView>
    </S.Container>
  );
}
