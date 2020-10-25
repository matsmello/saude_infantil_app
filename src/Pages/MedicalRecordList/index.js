import * as React from "react";

import * as S from "./style";
import { Divider } from "react-native-paper";
import { ScrollView, Dimensions, View } from "react-native";

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

          <S.Text>Fichas de Tratamento</S.Text>

          <S.ListHorizontal horizontal showsHorizontalScrollIndicator={false}>
            {[1, 2, 3, 4].map((el) => (
              <S.HelperBox
                style={{
                  width: (Dimensions.get("window").width - 100) / 2,
                }}
                onPress={() => navigation.navigate("MedicalRecord")}
              >
                <S.Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "500",
                  }}
                >
                  Link
                </S.Text>
              </S.HelperBox>
            ))}
          </S.ListHorizontal>

          <S.Text>Redes de Apoio</S.Text>

          <S.ListHorizontal horizontal showsHorizontalScrollIndicator={false}>
            {[1, 2, 3, 4].map((el) => (
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
                  Link
                </S.Text>
              </S.HelperBox>
            ))}
          </S.ListHorizontal>

          <S.Text>Locais de Tratamento</S.Text>

          <S.ListHorizontal horizontal showsHorizontalScrollIndicator={false}>
            {[1, 2, 3, 4].map((el) => (
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
                  Link
                </S.Text>
              </S.HelperBox>
            ))}
          </S.ListHorizontal>
        </S.ContainerPure>
      </ScrollView>
    </S.Container>
  );
}
