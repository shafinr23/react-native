import React,{ Component } from 'react';
import {View , Text ,Button , TextInput , StyleSheet, ImageBackground} from 'react-native';
import startMainTabs from '../MainTabs/startMainTabs';
import DefaultInput from '../../components/UI/DeafultInput/DefaultInput';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';
import backgroundImage from '../../assets/one.jpeg';
import ButtonWithBackground from '../../components/UI/ButtonWithBackGround/ButtonWithBackGround'
class AuthScreen extends Component{
    loginHandeler = ()=>{
        startMainTabs();
    }
    render(){
        return(
            <ImageBackground source={backgroundImage} style={styles.backgroundImage} >
            <View style={styles.container} >

            <MainText>
                <HeadingText >please login</HeadingText>
            </MainText>
            <ButtonWithBackground color="#29aaf4" onPress={()=>alert("hi")} >sing in</ButtonWithBackground>
                <View style={styles.inputContainer} >
                    <DefaultInput  placeholder="your email address" style={styles.input} />
                    <DefaultInput  placeholder="your password" style={[styles.input,{borderColor:"red"}]} />
                    <DefaultInput  placeholder="confirm password" style={styles.input} />
                </View>
                
                <ButtonWithBackground color="#29aaf4" onPress={this.loginHandeler} >sing in</ButtonWithBackground>
               
            </View>
            </ImageBackground>
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
        backgroundImage:{
            width:"100%",
            flex:1
        },
        input:{
            backgroundColor:"#eee",
            borderColor:"#bbb"
            
        }
});


export default AuthScreen;