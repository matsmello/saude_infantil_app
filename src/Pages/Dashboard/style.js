import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 20px;
  background-color: ${({ theme }) => "white"};
`;

export const Horizontal = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;
  margin-top: 30px;
`;

export const ListHorizontal = styled.ScrollView`
  flex: 1;
  border-width: 10px;
  width: 100%;
`;

export const Clickable = styled.TouchableOpacity``;

export const Emote = styled.Image`
  width: 80px;
  height: 80px;
`;

export const TextBold = styled.Text`
  font-size: 25px;
  color: ${({ theme }) => "black"};
  font-weight: 500;
`;

export const Text = styled.Text`
  font-size: 19px;
  text-align: center;
  color: ${({ theme }) => "black"};
`;

export const TopImage = styled.Image`
  width: 100%;
  height: 200px;
  position: absolute;
  top: -40px;
  z-index: 1;
`;

export const BottomImage = styled.Image`
  width: 100%;
  height: 200px;
  position: absolute;
  bottom: -40px;
  z-index: 1;
  transform: rotate(180deg);
`;

export const Input = styled.TextInput`
  background-color: #faf0a2;
  width: 100%;
  border-radius: 10px;
  padding: 30px;
  font-size: 19px;
  margin: 30px 20px;
`;

export const ButtonImage = styled.Image``;
export const Logo = styled.Image`
  width: 100%;
  height: 100px;
`;

export const Button = styled.TouchableOpacity`
  width: 150px;
  background-color: #37b6f6;
  border-radius: 30px;
  margin-top: 30px;
  height: 60px;
  justify-content: center;
  text-align: center;
  justify-content: center;
`;

export const Helper = styled.Text`
  color: #37b6f6;
  font-size: 20px;
  margin-top: 40px;
`;

export const HelperBox = styled.TouchableOpacity`
  margin-top: 30px;
  width: 100%;
  background-color: #37b6f6;

  border-radius: 10px;
  padding: 20px;
`;
