// Dependencies
import React from 'react';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

// Store
import configureStore from './store';
const {store, persistor} = configureStore();

// Navigator
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './navigator/navigatorActions';
import RootNavigator from './navigator';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer ref={navigationRef} independent={true}>
          <SafeAreaView style={{flex: 1}}>
            <RootNavigator />
          </SafeAreaView>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
