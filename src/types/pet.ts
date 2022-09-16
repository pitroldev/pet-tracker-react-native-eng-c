import {Coordinates} from './position';

export type PetInfo = {
  id: string;
  name: string;
  type: 'dog' | 'cat';
  breed: string;
  birthDate: Date;
  heartRate: number;
  temperature: number;
  coordinates: Coordinates;
};
