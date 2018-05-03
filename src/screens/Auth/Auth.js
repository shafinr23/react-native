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
                <View style={styles.inputContainer} >
                    <TextInput style={styles.input} placeholder="your email address" underlineColorAndroid="transparent" />
                    <TextInput style={styles.input} placeholder="your password" underlineColorAndroid="transparent"/>
                    <TextInput style={styles.input} placeholder="confirm password" underlineColorAndroid="transparent" />
                </View>
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
        },
        inputContainer:{
            width:"80%"
        },
        input:{
            width:"100%",
            borderWidth:1,
            borderColor:"#000",
            padding:5,
            margin:8
        }
});


export default AuthScreen;