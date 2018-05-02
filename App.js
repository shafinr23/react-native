import {Navigation} from 'react-native-navigation';

import AuthScreen from './src/screens/Auth/Auth'

// register scrren 

Navigation.registerComponent("awesome-places.AuthScreen",()=> AuthScreen);


// start app 

Navigation.startSingleScreenApp({
    screen:{
        screen:"awesome-places.AuthScreen",
        title:"login"
    }
});