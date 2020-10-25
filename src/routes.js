import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { ThemeContext } from "styled-components";

import Icon from "@expo/vector-icons/Entypo";

import Main from "@pages/Main";
import Tutorial from "@pages/Tutorial";
import Dashboard from "@pages/Dashboard";
import FunSpace from "@pages/FunSpace";

import TabBar from "@components/TabBar";
const { Screen, Navigator } = createMaterialTopTabNavigator();
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function Routes() {
  const themeContext = useContext(ThemeContext).colors;

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={"FunSpace"}
      >
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Tutorial" component={Tutorial} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="FunSpace" component={FunSpace} />
      </Stack.Navigator>
      {/* <Navigator
        tabBarPosition="bottom"
        keyboardDismissMode="on-drag"
        initialRouteName="Main"
        tabBarOptions={{
          activeTintColor: themeContext.primary,
          showIcon: true,
          showLabel: false,
          indicatorStyle: {
            position: "absolute",
            backgroundColor: themeContext.primary,
            top: "0%",
          },
        }}
        // tabBar={() => <TabBar />}
      >
        <Screen
          name="Main"
          component={Main}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" color={color} size={25} />
            ),
          }}
        />

        <Screen
          name="Next"
          component={Main}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="controller-next" color={color} size={25} />
            ),
          }}
        />
      </Navigator> */}
    </NavigationContainer>
  );
}

export default Routes;
