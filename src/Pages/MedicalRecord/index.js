import * as React from "react";

import * as S from "./style";
import { View } from "react-native";
import { Divider } from "react-native-paper";
import { ScrollView } from "react-native";
import Constants from "expo-constants";
import { Dimensions } from "react-native";

export default function Home({ navigation }) {
  return (
    <S.Container>
      <ScrollView>
        <S.ContainerPure
          style={{
            width: Dimensions.get("window").width,
          }}
        >
          <S.TextBold>Olá, pais!</S.TextBold>

          <View style={{ width: "100%", marginVertical: 25 }}>
            <Divider style={{ height: 10, backgroundColor: "#35D461" }} />
          </View>

          <S.Text>Ficha 1</S.Text>

          <S.ContainerPure>
            {[
              "Estágio",
              "Período",
              "Remédios",
              "Precauções",
              "Observações",
            ].map((el) => (
              <S.Input
                placeholder={el}
                placeholderTextColor="black"
                multiline
              />
            ))}
          </S.ContainerPure>

          <S.Text>Médico responsável</S.Text>

          <S.ContainerPure>
            {["Nome", "CRM", "Email"].map((el) => (
              <S.Input
                placeholder={el}
                placeholderTextColor="black"
                multiline
              />
            ))}
          </S.ContainerPure>
        </S.ContainerPure>
      </ScrollView>
    </S.Container>
  );
}
