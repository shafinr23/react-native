import React,{ Component } from 'react';
import {View , Text ,Button , TextInput , StyleSheet,Dimensions, ImageBackground} from 'react-native';
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
        let headingText = null;
        if(Dimensions.get('window').height>500){
            headingText = (
            <MainText>
                <HeadingText >please login</HeadingText>
            </MainText>);
        }
        return(
            <ImageBackground source={backgroundImage} style={styles.backgroundImage} >
            <View style={styles.container} >
                {headingText}
            <ButtonWithBackground color="#29aaf4" onPress={()=>alert("hi")} >sing in</ButtonWithBackground>
                <View style={styles.inputContainer} >
                    <DefaultInput  placeholder="your email address" style={styles.input} />
                    <View style={styles.passworContainer} >
                    <View style={styles.passWrapper} >
                    <DefaultInput  placeholder="your password" style={[styles.input,{borderColor:"red"}]} />
                    </View>
                    <View style={styles.passWrapper} >
                    <DefaultInput  placeholder="confirm password" style={styles.input} />
                    </View>
                    </View>
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
            
        },
        passworContainer:{
            flexDirection:Dimensions.get('window').height>500 ? "column":"row",
            justifyContent:"space-between"
        },
        passWrapper:{
            width:Dimensions.get('window').height>500 ?"100%":"45%"
        }
});


export default AuthScreen;