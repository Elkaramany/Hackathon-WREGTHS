import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from "react-redux";

import Auth from './AuthStack'
import App from './AppStack'

const MainNavigator = () => {
  const { user } = useSelector((state) => state.AuthReducer)

  return (
    <NavigationContainer>
      {user ?
        <App />
        :
        <Auth />
      }
    </NavigationContainer>
  );
};

export default MainNavigator;
