import {Navigation} from 'react-native-navigation';
import {Provider} from 'react-redux';


import AuthScreen from './src/screens/Auth/Auth';
import SharePlacescreen from './src/screens/SharePlace/sharePlace';
import findPlacescreen from './src/screens/FindPlace/findPlace';
import PlaceDetailScreen from './src/screens/PlaceDetail/PlaceDetail';
import SideDrawerScreen from './src/screens/SideDrawer/SideDrawer';

import configureStore from './src/store/configureStore';
 
const store = configureStore();
// register scrren 

Navigation.registerComponent("awesome-places.AuthScreen",
()=> AuthScreen , 
store , 
Provider );
Navigation.registerComponent("awesome-places.SharePlacescreen",
()=> SharePlacescreen, 
store ,
 Provider);
Navigation.registerComponent("awesome-places.findPlacescreen",
()=> findPlacescreen,
 store , 
 Provider);
Navigation.registerComponent("awesome-places.PlaceDetailScreen",
()=> PlaceDetailScreen,
store , 
Provider);
Navigation.registerComponent("awesome-places.SideDrawerScreen",
()=>SideDrawerScreen ,
store , 
Provider);



// start app 

Navigation.startSingleScreenApp({
    screen:{
        screen:"awesome-places.AuthScreen",
        title:"login"
    }
});