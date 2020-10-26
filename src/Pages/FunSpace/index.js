import * as React from "react";

import * as S from "./style";
import { Divider } from "react-native-paper";
import { ScrollView, Dimensions, View, Image } from "react-native";

export default function FunSpace({ navigation }) {
  return (
    <S.Container>
      <ScrollView showsVerticalScrollIndicator={false}>
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
            {[1, 2].map((el) => (
              <S.HelperBox
                style={{
                  width: (Dimensions.get("window").width - 100) / 2,
                }}
              >
                <Image
                  source={require("./../../assets/music.png")}
                  style={{
                    alignSelf: "center",
                    width: 60,
                  }}
                  resizeMode="contain"
                />
              </S.HelperBox>
            ))}
          </S.Horizontal>

          <S.Text>Vídeos</S.Text>

          <S.Horizontal>
            {[1, 2].map((el) => (
              <S.HelperBox
                style={{ width: (Dimensions.get("window").width - 100) / 2 }}
              >
                <Image
                  source={require("./../../assets/play.png")}
                  style={{
                    alignSelf: "center",
                    width: 60,
                  }}
                  resizeMode="contain"
                />
              </S.HelperBox>
            ))}
          </S.Horizontal>
          <S.Text>Livros</S.Text>

          <S.Horizontal>
            {[1, 2].map((el) => (
              <S.HelperBox
                style={{ width: (Dimensions.get("window").width - 100) / 2 }}
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
          </S.Horizontal>
          <S.Text>Jogos</S.Text>

          <S.Horizontal>
            {[1, 2].map((el) => (
              <S.HelperBox
                style={{ width: (Dimensions.get("window").width - 100) / 2 }}
              >
                <Image
                  source={require("./../../assets/video.png")}
                  style={{
                    alignSelf: "center",
                    width: 60,
                  }}
                  resizeMode="contain"
                />
              </S.HelperBox>
            ))}
          </S.Horizontal>
        </S.ContainerPure>
      </ScrollView>
    </S.Container>
  );
}
