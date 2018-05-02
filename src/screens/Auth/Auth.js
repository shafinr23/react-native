import React,{ Component } from 'react';
import {View , Text ,Button } from 'react-native';
import startMainTabs from '../MainTabs/startMainTabs';
class AuthScreen extends Component{
    loginHandeler = ()=>{
        startMainTabs();
    }
    render(){
        return(
            <View>
                <Text>auth screen</Text>
                <Button title="login" onPress={this.loginHandeler}/>
            </View>
        );
    }
}

export default AuthScreen;