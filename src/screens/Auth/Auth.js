import React,{ Component } from 'react';
import {View , Text ,Button , TextInput , StyleSheet} from 'react-native';
import startMainTabs from '../MainTabs/startMainTabs';
import DefaultInput from '../../components/UI/DeafultInput/DefaultInput';
import HeadingText from '../../components/UI/HeadingText/HeadingText'
class AuthScreen extends Component{
    loginHandeler = ()=>{
        startMainTabs();
    }
    render(){
        return(
            <View style={styles.container} >
                <HeadingText >please login</HeadingText>

                <Button title="switch to login"/>
                <View style={styles.inputContainer} >
                    <DefaultInput  placeholder="your email address" style={styles.input} />
                    <DefaultInput  placeholder="your password" style={[styles.input,{borderColor:"red"}]} />
                    <DefaultInput  placeholder="confirm password" style={styles.input} />
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
            backgroundColor:"#eee",
            borderColor:"#bbb"
            
        }
});


export default AuthScreen;