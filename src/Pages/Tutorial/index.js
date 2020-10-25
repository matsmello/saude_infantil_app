import React, { useState } from "react";
import { Text, View, SafeAreaView, ImageBackground } from "react-native";
import Carousel from "react-native-snap-carousel";

import * as S from "./style";

export default function Tutorial({ navigation }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselItems, setCarouselItems] = useState([
    {
      title: "Item 1",
      text: "Text 1",
    },
    {
      title: "Item 2",
      text: "Text 2",
    },
    {
      title: "Item 3",
      text: "Text 3",
    },
    {
      title: "Item 4",
      text: "Text 4",
    },
    {
      title: "Item 5",
      text: "Text 5",
    },
  ]);

  function _renderItem({ item, index }) {
    return (
      <View
        style={{
          borderRadius: 10,
          height: 200,
          marginLeft: 25,
          marginRight: 25,
        }}
      >
        <ImageBackground
          source={require("./../../assets/card.png")}
          style={{ width: "100%", height: "100%" }}
          resizeMode="contain"
        ></ImageBackground>
      </View>
    );
  }

  return (
    <S.Container>
      <S.TopImage
        source={require("./../../assets/rain_colors.png")}
        resizeMode="contain"
      />
      <View
        style={{
          maxHeight: 600,
          flex: 1,
          justifyContent: "space-evenly",
          alignItems: "center",
          width: "100%",
        }}
      >
        <S.Logo
          source={require("./../../assets/logo.png")}
          resizeMode="contain"
        />
        <S.TextBold>Você conhece o projeto?</S.TextBold>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Carousel
            layout={"default"}
            data={carouselItems}
            sliderWidth={300}
            itemWidth={300}
            renderItem={_renderItem}
            onSnapToItem={(index) => setActiveIndex(index)}
          />
        </View>
        {activeIndex >= carouselItems.length - 2 ? (
          <S.Button onPress={() => navigation.navigate("Dashboard")}>
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
        ) : (
          <S.Text>Temos a missão de ajudar...</S.Text>
        )}
      </View>
      <S.BottomImage
        source={require("./../../assets/rain_colors.png")}
        resizeMode="contain"
      />
    </S.Container>
  );
}
