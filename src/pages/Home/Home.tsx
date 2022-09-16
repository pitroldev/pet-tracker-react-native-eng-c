/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';

import MapView from 'react-native-maps';
import styled from 'styled-components/native';
import useMockApi from '@hooks/useMockApi';
import PetIcon from '@root/components/PetIcon';

const Container = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: blanchedalmond;
  justify-content: space-around;
`;

const styles = StyleSheet.create({
  map: {
    height: '100%',
    width: '100%',
    marginVertical: 50,
  },
});

const INITIAL_REGION = {
  latitude: 37.78825,
  longitude: -122.4324,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

const Home = () => {
  const {pets, create, setPets} = useMockApi();

  useEffect(() => {
    const pudin = create({
      id: 'pudinho',
      name: 'Pudin',
      type: 'dog',
      breed: 'Shitzu',
      birthDate: new Date(2020, 1, 1),
      coordinates: {
        latitude: 37.78825,
        longitude: -122.4424,
      },
    });
    const scott = create({
      id: 'scott',
      name: 'Scott Mingau',
      type: 'cat',
      breed: 'unknown',
      birthDate: new Date(2016, 1, 1),
      coordinates: {
        latitude: 37.78804,
        longitude: -122.4414,
      },
    });
    setPets([pudin, scott]);
  }, []);

  return (
    <Container>
      {/* <Text>{JSON.stringify(pets, null, 4)}</Text> */}
      <MapView style={styles.map} initialRegion={INITIAL_REGION}>
        {pets.map(pet => (
          <PetIcon key={pet.id} pet={pet} />
        ))}
      </MapView>
    </Container>
  );
};

export default Home;
