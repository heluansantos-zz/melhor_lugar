import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import inicio from './src/pages/inicio';
import menu from './src/pages/menu';
import submenu from './src/pages/submenu';
import detalhes from './src/pages/detalhes';
import maps from './src/pages/maps';


const App = () => {

  return <Router>

    <Scene key="root" hideNavBar >

      <Scene key="auth">
        <Scene key='maps' title='maps' component={maps} hideNavBar={true} />
        <Scene key='detalhes' title='detalhes' component={detalhes} hideNavBar={true} />
        <Scene key='submenu' title='submenu' component={submenu} hideNavBar={true} />
        <Scene key='menu' title='menu' component={menu} hideNavBar={true} />
        <Scene key='inicio' title='inicio' initial={true} component={inicio} hideNavBar={true} />

      </Scene>

    </Scene>
  </Router>
}

export default App;
