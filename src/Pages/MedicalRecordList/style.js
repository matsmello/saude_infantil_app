import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => "white"};
`;

export const ContainerPure = styled.View`
  flex: 1;
  padding: 0 20px;
  align-items: center;
  margin: 40px 0px;
  background-color: ${({ theme }) => "white"};
`;

export const Horizontal = styled.View`
  flex: 1;
  flex-direction: row;
  width: 100%;
  margin: 20px;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const ListHorizontal = styled.ScrollView`
  flex: 1;
  width: 100%;
`;

export const Clickable = styled.TouchableOpacity``;

export const Emotions = styled.Image`
  width: 100px;
  height: 100px;
`;

export const TextBold = styled.Text`
  font-size: 25px;
  color: ${({ theme }) => "black"};
  font-weight: 500;
`;

export const Text = styled.Text`
  font-size: 19px;
  text-align: center;
  margin: 30px 0px;
  color: ${({ theme }) => "black"};
`;

export const Logo = styled.Image`
  width: 100%;
  height: 100px;
`;

export const Helper = styled.Text`
  color: #37b6f6;
  font-size: 20px;
  margin-top: 40px;
`;

export const HelperBox = styled.TouchableOpacity`
  background-color: #37b6f6;
  height: 100px;
  border-radius: 10px;
  justify-content: center;
  margin-right: 20px;
`;
