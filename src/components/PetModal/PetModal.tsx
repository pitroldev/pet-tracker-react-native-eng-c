import React, {useEffect} from 'react';

import {PetInfo} from '@root/types/pet';
import {
  Container,
  OuterCircle,
  Image,
  Title,
  SubTitle,
  Bold,
  Row,
  Text,
} from './PetModal.styles';

type Props = {
  pet: PetInfo;
};

const PetModal = ({pet}: Props) => {
  useEffect(() => {}, [pet]);

  if (!pet) {
    return null;
  }

  const images = {
    dog: require('../../assets/dog.webp'),
    cat: require('../../assets/cat.jpg'),
  };

  const dictionary = {
    dog: 'Cachorro',
    cat: 'Gato',
  };

  const petType = dictionary[pet.type];
  return (
    <Container>
      <OuterCircle>
        <Image resizeMode="cover" source={images[pet.type]} />
      </OuterCircle>
      <Title>{pet.name}</Title>
      <SubTitle>
        {petType} - {pet.breed}
      </SubTitle>
      <Row>
        <Bold>Nascido em:</Bold>
        <Text>
          {pet.birthDate.toLocaleDateString('pt-br', {
            month: '2-digit',
            day: '2-digit',
            year: 'numeric',
          })}
        </Text>
      </Row>
      <Row>
        <Bold>Temperatura:</Bold>
        <Text>{pet.temperature.toFixed(2)}ºC</Text>
      </Row>
      <Row>
        <Bold>Batimentos:</Bold>
        <Text>{pet.heartRate} BPM</Text>
      </Row>
      <Row>
        <Bold>Latitude:</Bold>
        <Text>{pet.coordinates.latitude}</Text>
      </Row>
      <Row>
        <Bold>Longitude:</Bold>
        <Text>{pet.coordinates.longitude}</Text>
      </Row>
    </Container>
  );
};

export default PetModal;
