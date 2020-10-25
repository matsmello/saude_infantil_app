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
      <S.TopImage
        source={require("./../../assets/rain_colors.png")}
        resizeMode="contain"
      />
      <ScrollView>
        <S.Container
          style={{
            height: Dimensions.get("window").height,
            alignItems: "center",
          }}
        >
          <S.TextBold>Olá, paciente!</S.TextBold>

          <View style={{ width: "100%", marginVertical: 25 }}>
            <Divider style={{ height: 10, backgroundColor: "#F99D07" }} />
          </View>

          <S.Text style={{ fontWeight: "bold" }}>
            Como você está se sentindo hoje?
          </S.Text>

          <S.Text>Clique em um personagem</S.Text>

          <S.Horizontal>
            <S.Clickable>
              <S.Emote source={require("./../../assets/scared.png")}></S.Emote>
            </S.Clickable>
            <S.Clickable>
              <S.Emote source={require("./../../assets/mood.png")}></S.Emote>
            </S.Clickable>
            <S.Clickable>
              <S.Emote source={require("./../../assets/happy.png")}></S.Emote>
            </S.Clickable>
          </S.Horizontal>

          <S.Input
            placeholder="Quer nos contar um pouco mais? Digite aqui..."
            placeholderTextColor="black"
            multiline
          />

          <S.Clickable>
            <S.ButtonImage
              source={require("./../../assets/button.png")}
            ></S.ButtonImage>
          </S.Clickable>

          <S.Clickable onPress={() => navigation.navigate("FunSpace")}>
            <S.Text
              style={{
                textAlign: "center",
                fontSize: 20,
                fontWeight: "500",
                marginTop: 20,
              }}
            >
              Mais dicas no Espaço Diversão!
            </S.Text>
          </S.Clickable>
          <S.HelperBox onPress={() => navigation.navigate("MedicalRecordList")}>
            <S.Text
              style={{
                textAlign: "center",
                fontSize: 20,
                fontWeight: "500",
              }}
            >
              Pais, estão procurando mais informações?
            </S.Text>
            <S.Text
              style={{
                textAlign: "center",
                fontSize: 20,
              }}
            >
              Cliquem aqui
            </S.Text>
          </S.HelperBox>
        </S.Container>
      </ScrollView>
      <S.BottomImage
        source={require("./../../assets/rain_colors.png")}
        resizeMode="contain"
      />
    </S.Container>
  );
}
