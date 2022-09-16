import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: blanchedalmond;
  justify-content: space-around;
`;

export const styles = StyleSheet.create({
  map: {
    height: '100%',
    width: '100%',
    marginVertical: 50,
  },
});
