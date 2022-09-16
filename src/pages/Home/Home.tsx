import React from 'react';
import MapView, {Circle} from 'react-native-maps';

import {usePetContext} from '@root/hooks/petContext';

import PetIcon from '@root/components/PetIcon';
import {Container, styles} from './Home.styles';

const INITIAL_REGION = {
  latitude: 37.78825,
  longitude: -122.4324,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

const Home = () => {
  const {pets} = usePetContext();

  return (
    <Container>
      <MapView style={styles.map} initialRegion={INITIAL_REGION}>
        <Circle
          center={{
            latitude: 37.78865,
            longitude: -122.4414,
          }}
          radius={120}
          strokeWidth={2}
          strokeColor={'rgba(150,208,255,1)'}
          fillColor={'rgba(150,208,255,0.5)'}
        />
        {pets.map(pet => (
          <PetIcon key={pet.id} pet={pet} />
        ))}
      </MapView>
    </Container>
  );
};

export default Home;
