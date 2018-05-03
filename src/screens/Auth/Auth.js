import React,{ Component } from 'react';
import {View , Text ,Button , TextInput , StyleSheet} from 'react-native';
import startMainTabs from '../MainTabs/startMainTabs';
class AuthScreen extends Component{
    loginHandeler = ()=>{
        startMainTabs();
    }
    render(){
        return(
            <View style={styles.container} >
                <Text>please login </Text>

                <Button title="switch to login"/>
                    <TextInput placeholder="your email address" />
                    <TextInput placeholder="your password" />
                    <TextInput placeholder="confirm password" />
                <Button title="login" onPress={this.loginHandeler}/>
            </View>
        );
    }
}

const styles =StyleSheet.create({
        container:{
            flex:1,
            justifyContent:"center",
            alignItems:"center"
        }
});


export default AuthScreen;