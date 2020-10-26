import * as React from "react";

import * as S from "./style";
import { Divider } from "react-native-paper";
import { ScrollView, Dimensions, View, Image } from "react-native";

export default function Home({ navigation }) {
  return (
    <S.Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <S.ContainerPure
          style={{
            width: Dimensions.get("window").width,
          }}
        >
          <S.TextBold>Olá, pais!</S.TextBold>

          <View style={{ width: "100%", marginVertical: 25 }}>
            <Divider style={{ height: 10, backgroundColor: "#35D461" }} />
          </View>

          <S.Text>Fichas de Tratamento</S.Text>

          <S.ListHorizontal horizontal showsHorizontalScrollIndicator={false}>
            {[1, 2, 3, 4].map((el, index) => (
              <S.HelperBox
                style={{
                  width: (Dimensions.get("window").width - 100) / 2,
                }}
                onPress={() => navigation.navigate("MedicalRecord")}
              >
                <Image
                  source={require("./../../assets/book.png")}
                  style={{
                    alignSelf: "center",
                    width: 60,
                  }}
                  resizeMode="contain"
                />
              </S.HelperBox>
            ))}
          </S.ListHorizontal>

          <S.Text>Redes de Apoio</S.Text>

          <S.ListHorizontal horizontal showsHorizontalScrollIndicator={false}>
            {["Acolher, Amparar e Apoiar", "ACCCOM"].map((el) => (
              <S.HelperBox
                style={{
                  width: (Dimensions.get("window").width - 100) / 2,
                  alignSelf: "center",
                  alignContent: "center",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <S.Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "500",
                  }}
                >
                  {el}
                </S.Text>
              </S.HelperBox>
            ))}
          </S.ListHorizontal>

          <S.Text>Locais de Tratamento</S.Text>

          <S.ListHorizontal horizontal showsHorizontalScrollIndicator={false}>
            {["Hospital SP", "Hospital Santa Casa"].map((el) => (
              <S.HelperBox
                style={{
                  width: (Dimensions.get("window").width - 100) / 2,
                }}
              >
                <S.Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "500",
                  }}
                >
                  {el}
                </S.Text>
              </S.HelperBox>
            ))}
          </S.ListHorizontal>
        </S.ContainerPure>
      </ScrollView>
    </S.Container>
  );
}
