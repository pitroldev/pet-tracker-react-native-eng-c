import {useState, useEffect} from 'react';

import {PetInfo} from '../types/pet';

import {randomInteger, randomFloat, randomizeNextNumber} from '../utils/random';

const TICKRATE_IN_MS = 2 * 1000;

const TEMPERATURE_BOUNDRIES = {
  range: 0.2,
  min: 38,
  max: 40,
};

const HEARTRATE_BOUNDRIES = {
  range: 2,
  min: 110,
  max: 160,
};

const REGION_BOUNDRIES = {
  latitude: {
    range: 0.0001,
    max: 37.789,
    min: 37.78,
  },
  longitude: {
    range: 0.0001,
    min: -122.449,
    max: -122.44,
  },
};

const useMockApi = () => {
  const [pets, setPets] = useState<PetInfo[]>([]);

  useEffect(() => {
    const socketApiMock = setInterval(() => {
      setPets(p => {
        return p.map(pet => {
          return {
            ...pet,
            temperature: randomizeNextNumber(
              pet.temperature,
              TEMPERATURE_BOUNDRIES,
            ),
            heartRate: Math.round(
              randomizeNextNumber(pet.heartRate, HEARTRATE_BOUNDRIES),
            ),
            coordinates: {
              latitude: randomizeNextNumber(
                pet.coordinates.latitude,
                REGION_BOUNDRIES.latitude,
              ),
              longitude: randomizeNextNumber(
                pet.coordinates.longitude,
                REGION_BOUNDRIES.longitude,
              ),
            },
          };
        });
      });
    }, TICKRATE_IN_MS);

    return () => clearInterval(socketApiMock);
  }, []);

  const remove = (id: string) => {
    setPets(p => p.filter(c => c.id === id));
  };

  const add = (pet: PetInfo) => {
    setPets(p => p.filter(c => c.id === pet.id).concat(pet));
  };

  const create = (info: Partial<PetInfo>) => {
    const randomPet = {
      ...info,
      temperature: randomFloat(
        TEMPERATURE_BOUNDRIES.min,
        TEMPERATURE_BOUNDRIES.max,
      ),
      heartRate: randomInteger(
        HEARTRATE_BOUNDRIES.min,
        HEARTRATE_BOUNDRIES.max,
      ),
    } as PetInfo;

    add(randomPet);

    return randomPet;
  };

  return {pets, remove, add, create, setPets};
};

export default useMockApi;
