import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 0 20px;
  background-color: ${({ theme }) => "white"};
`;

export const ContainerPure = styled.View`
  flex: 1;
  width: 100%;
  padding: 0 20px;
  align-items: center;
  background-color: ${({ theme }) => "white"};
`;

export const TextBold = styled.Text`
  font-size: 25px;
  color: ${({ theme }) => "black"};
  font-weight: 500;
`;

export const Text = styled.Text`
  font-size: 19px;
  text-align: center;
  margin: 25px 0px;
  color: ${({ theme }) => "black"};
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
  padding: 12px;
  font-size: 19px;
  margin: 10px 0px;
  align-self: center;
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
