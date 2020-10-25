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
            justifyContent: "center",
          }}
        >
          <S.Emotions
            source={require("./../../assets/emotions.png")}
          ></S.Emotions>
          <S.TextBold>Espaço Diversão</S.TextBold>

          <View style={{ width: "100%", marginVertical: 25 }}>
            <Divider style={{ height: 10, backgroundColor: "#F99D07" }} />
          </View>

          <S.Text>Músicas</S.Text>

          <S.Horizontal>
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
          </S.Horizontal>

          <S.Text>Vídeos</S.Text>

          <S.Horizontal>
            {[1, 2, 3, 4].map((el) => (
              <S.HelperBox
                style={{ width: (Dimensions.get("window").width - 100) / 2 }}
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
          </S.Horizontal>
        </S.ContainerPure>
      </ScrollView>
    </S.Container>
  );
}
