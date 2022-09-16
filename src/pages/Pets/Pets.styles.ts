import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #fafafa;
  padding: 16px;
`;

export const Header = styled.Text`
  font-weight: bold;
  font-size: 28px;
  margin-bottom: 16px;
  text-align: center;
  color: #333;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 20px;
  margin-left: 12px;
`;

export const Row = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 8px 8px;
  background-color: #fff;
  align-items: center;
  margin-bottom: 10px;
  border-radius: 10px;
  elevation: 10;
`;

export const OuterCircle = styled.View`
  height: 50px;
  width: 50px;
  border-radius: 50px;
  background-color: #fff;

  display: flex;
  align-items: center;
  justify-content: center;
  elevation: 5;
`;

export const Image = styled.Image`
  height: 50px;
  width: 50px;
  border-radius: 44px;
  aspect-ratio: 1;
  background-color: #333;
`;
