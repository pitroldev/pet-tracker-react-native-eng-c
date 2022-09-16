import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #fff;
  padding: 16px;
  border-radius: 12px;
  elevation: 10;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 24px;
`;

export const SubTitle = styled.Text`
  font-weight: lighter;
  font-size: 16px;
  margin-bottom: 16px;
`;

export const Row = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const Bold = styled.Text`
  font-weight: bold;
  margin-right: 4px;
  margin-bottom: 8px;
`;

export const Text = styled.Text``;

export const OuterCircle = styled.View`
  height: 100px;
  width: 100px;
  border-radius: 100px;
  background-color: #fff;
  margin-bottom: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
  elevation: 10;
`;

export const Image = styled.Image`
  height: 100px;
  width: 100px;
  border-radius: 44px;
  aspect-ratio: 1;
  background-color: #333;
`;
