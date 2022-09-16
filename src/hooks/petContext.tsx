/* eslint-disable react-hooks/exhaustive-deps */
import React, {createContext, useContext, useEffect} from 'react';

import useMockApi from '@hooks/useMockApi';

const PetContext = createContext<ReturnType<typeof useMockApi>>(
  {} as ReturnType<typeof useMockApi>,
);

export const usePetContext = () => useContext(PetContext);

type Props = {
  children: React.ReactNode;
};

export const PetProvider = ({children}: Props) => {
  const api = useMockApi();

  useEffect(() => {
    const jack = api.generate({
      id: 'jack',
      name: 'Jack',
      type: 'dog',
      breed: 'Shitzu',
      birthDate: new Date(2020, 1, 1),
      coordinates: {
        latitude: 37.78825,
        longitude: -122.4424,
      },
    });
    const scott = api.generate({
      id: 'scott',
      name: 'Scott Mingau',
      type: 'cat',
      breed: 'Siamês',
      birthDate: new Date(2016, 1, 1),
      coordinates: {
        latitude: 37.78804,
        longitude: -122.4414,
      },
    });

    api.setPets([jack, scott]);
  }, []);

  return <PetContext.Provider value={api}>{children}</PetContext.Provider>;
};
