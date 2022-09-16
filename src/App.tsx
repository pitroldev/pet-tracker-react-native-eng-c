import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import Router from '@root/routes';
import {PetProvider} from './hooks/petContext';

const App = () => {
  return (
    <PetProvider>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </PetProvider>
  );
};

export default App;
