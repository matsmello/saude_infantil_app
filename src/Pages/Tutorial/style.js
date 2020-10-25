import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: space-evenly;
  align-items: center;
  padding: 80px 0px;

  background-color: ${({ theme }) => "white"};
`;

export const TextBold = styled.Text`
  font-size: 30px;
  margin: 20px 20px;
  color: ${({ theme }) => "black"};
  font-weight: bold;
  text-align: center;
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
  top: -60px;
  z-index: -1;
`;

export const BottomImage = styled.Image`
  width: 100%;
  height: 200px;
  position: absolute;
  bottom: -60px;
  z-index: -1;
  transform: rotate(180deg);
`;

export const Input = styled.TextInput`
  background-color: #faf0a2;
  width: 100%;
  height: 60px;
  border-radius: 10px;
  padding-left: 10px;
  font-size: 19px;
  margin: 30px 20px;
`;

export const Logo = styled.Image`
  width: 100%;
  height: 100px;
  margin: 20px 20px;
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
