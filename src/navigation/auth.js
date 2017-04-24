/**
 * Auth Scenes
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React from 'react';
import { Scene, ActionConst } from 'react-native-router-flux';

// Consts and Libs
import { AppConfig } from '@constants/';

// Scenes
//import Authenticate from '@containers/auth/AuthenticateView';
//import AuthWebView from '@containers/auth/WebView';
//import AuthLogin from '@containers/auth/Login/LoginContainer';


import LandingPage from '@containers/landing/landing';

/* Routes ==================================================================== */
const scenes = (
  <Scene key={'authenticate'}>
    <Scene
      hideNavBar
      key={'authLanding'}
      component={LandingPage}
      type={ActionConst.RESET}
      analyticsDesc={'Authenticate: Authentication'}
    />
   
  </Scene>
);

export default scenes;
