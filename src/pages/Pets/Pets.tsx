import React, {useState} from 'react';
import Modal from 'react-native-modal';

import {usePetContext} from '@root/hooks/petContext';
import {PetInfo} from '@root/types/pet';

import PetModal from '@root/components/PetModal';
import {Container, Row, Title, Image, OuterCircle, Header} from './Pets.styles';

const Pets = () => {
  const [selectedPetId, setSelectedPetId] = useState<string | null>(null);
  const {pets} = usePetContext();

  const images = {
    dog: require('../../assets/dog.webp'),
    cat: require('../../assets/cat.jpg'),
  };

  const selectedPet = pets.find(p => p.id === selectedPetId);
  return (
    <Container>
      <Header>Meus Pets</Header>
      {pets.map(pet => (
        <Row key={pet.id} onPress={() => setSelectedPetId(pet.id)}>
          <OuterCircle>
            <Image resizeMode="cover" source={images[pet.type]} />
          </OuterCircle>
          <Title>{pet.name}</Title>
        </Row>
      ))}
      <Modal
        isVisible={Boolean(selectedPet)}
        onBackdropPress={() => setSelectedPetId(null)}
        onBackButtonPress={() => setSelectedPetId(null)}>
        <PetModal pet={selectedPet as PetInfo} />
      </Modal>
    </Container>
  );
};

export default Pets;
