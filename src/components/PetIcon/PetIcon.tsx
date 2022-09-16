import React from 'react';
import {Marker} from 'react-native-maps';

import {PetInfo} from '@root/types/pet';
import {OuterCircle, Image} from './PetIcon.styles';

type Props = {
  pet: PetInfo;
  onPress?: () => void;
};
const PetIcon = ({pet, onPress}: Props) => {
  const images = {
    dog: require('../../assets/dog.webp'),
    cat: require('../../assets/cat.jpg'),
  };

  const imageUri = images[pet.type];

  return (
    <Marker
      coordinate={pet.coordinates}
      title={pet.name}
      onPress={() => console.log('kkk')}>
      <OuterCircle onPress={onPress}>
        <Image resizeMode="cover" source={imageUri} />
      </OuterCircle>
    </Marker>
  );
};

PetIcon.defaultProps = {
  onPress: () => {},
};

export default PetIcon;
