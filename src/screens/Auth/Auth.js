// import React,{ Component } from 'react';
// import {View , Text ,Button , TextInput , StyleSheet,Dimensions, ImageBackground} from 'react-native';
// import startMainTabs from '../MainTabs/startMainTabs';
// import DefaultInput from '../../components/UI/DeafultInput/DefaultInput';
// import HeadingText from '../../components/UI/HeadingText/HeadingText';
// import MainText from '../../components/UI/MainText/MainText';
// import backgroundImage from '../../assets/one.jpeg';
// import ButtonWithBackground from '../../components/UI/ButtonWithBackGround/ButtonWithBackGround'
// class AuthScreen extends Component{
//     state = {
//         respStyles: {
//           pwContainerDirection: "column",
//           pwContainerJustifyContent: "flex-start",
//           pwWrapperWidth: "100%"
//         }
//       };
    
//       constructor(props) {
//         super(props);
//         Dimensions.addEventListener("change", dims => {
//           this.setState({
//             respStyles: {
//               pwContainerDirection:
//                 Dimensions.get("window").height > 500 ? "column" : "row",
//               pwContainerJustifyContent:
//                 Dimensions.get("window").height > 500
//                   ? "flex-start"
//                   : "space-between",
//               pwWrapperWidth: Dimensions.get("window").height > 500 ? "100%" : "45%"
//             }
//           });
//         });
//       }

//     loginHandeler = ()=>{
//         startMainTabs();
//     }
//     render(){
//         let headingText = null;
//         if(Dimensions.get('window').height>500){
//             headingText = (
//             <MainText>
//                 <HeadingText >please login</HeadingText>
//             </MainText>);
//         }
//         return(
//             <ImageBackground source={backgroundImage} style={styles.backgroundImage} >
//             <View style={styles.container} >
//                 {headingText}
//             <ButtonWithBackground color="#29aaf4" onPress={()=>alert("hi")} >sing in</ButtonWithBackground>
//                 <View style={styles.inputContainer} >
//                     <DefaultInput  placeholder="your email address" style={styles.input} />
//                     <View style={{ flexDirection:this.state.respStyles.pwContainerDirection,
//                     justifyContent:this.state.respStyles.pwContainerJustifyContent
//                     }} >
//                     <View style={{
//                         width:this.state.respStyles.pwWrapperWidth
//                     }} >
//                     <DefaultInput  placeholder="your password" style={[styles.input,{borderColor:"red"}]} />
//                     </View>
//                     <View style={{
//                         width:this.state.respStyles.pwWrapperWidth
//                     }}  >
//                     <DefaultInput  placeholder="confirm password" style={styles.input} />
//                     </View>
//                     </View>
//                 </View>
                
//                 <ButtonWithBackground color="#29aaf4" onPress={this.loginHandeler} >sing in</ButtonWithBackground>
               
//             </View>
//             </ImageBackground>
//         );
//     }
// }

// const styles =StyleSheet.create({
//         container:{
//             flex:1,
//             justifyContent:"center",
//             alignItems:"center"
//         },
//         inputContainer:{
//             width:"80%"
//         },
//         backgroundImage:{
//             width:"100%",
//             flex:1
//         },
//         input:{
//             backgroundColor:"#eee",
//             borderColor:"#bbb"
            
//         },
//         landscapePassworContainer:{
//             flexDirection:"row",
//             justifyContent:"space-between"
//         },
//         potPassworContainer:{
//             flexDirection:"column",
//             justifyContent:"space-between"
//         },
//         landpassWrapper:{
//             width:"45%"
//         },
//         potPassWrapper:{
//             width:"100%"
//         }
// });


// export default AuthScreen;


import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  ImageBackground,
  Dimensions
} from "react-native";

import startMainTabs from "../MainTabs/startMainTabs";
import DefaultInput from "../../components/UI/DefaultInput/DefaultInput";
import HeadingText from "../../components/UI/HeadingText/HeadingText";
import MainText from "../../components/UI/MainText/MainText";
import ButtonWithBackground from "../../components/UI/ButtonWithBackground/ButtonWithBackground";
import backgroundImage from  '../../assets/one.jpeg';

class AuthScreen extends Component {
  state = {
    viewMode: Dimensions.get("window").height > 500 ? "portrait" : "landscape"
  };

  constructor(props) {
    super(props);
    Dimensions.addEventListener("change", this.updateStyles);
  }

  componentWillUnmount() {
    Dimensions.removeEventListener("change", this.updateStyles);
  }

  updateStyles = (dims) => {
    this.setState({
      viewMode:
        dims.window.height > 500 ? "portrait" : "landscape"
    });
  }

  loginHandler = () => {
    startMainTabs();
  };

  render() {
    let headingText = null;

    if (this.state.viewMode === "portrait") {
      headingText = (
        <MainText>
          <HeadingText>Please Log In</HeadingText>
        </MainText>
      );
    }
    return (
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.container}>
          {headingText}
          <ButtonWithBackground color="#29aaf4" onPress={() => alert("Hello")}>
            Switch to Login
          </ButtonWithBackground>
          <View style={styles.inputContainer}>
            <DefaultInput
              placeholder="Your E-Mail Address"
              style={styles.input}
            />
            <View
              style={
                this.state.viewMode === "portrait"
                  ? styles.portraitPasswordContainer
                  : styles.landscapePasswordContainer
              }
            >
              <View
                style={
                  this.state.viewMode === "portrait"
                    ? styles.portraitPasswordWrapper
                    : styles.landscapePasswordWrapper
                }
              >
                <DefaultInput placeholder="Password" style={styles.input} />
              </View>
              <View
                style={
                  this.state.viewMode === "portrait"
                    ? styles.portraitPasswordWrapper
                    : styles.landscapePasswordWrapper
                }
              >
                <DefaultInput
                  placeholder="Confirm Password"
                  style={styles.input}
                />
              </View>
            </View>
          </View>
          <ButtonWithBackground color="#29aaf4" onPress={this.loginHandler}>
            Submit
          </ButtonWithBackground>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  backgroundImage: {
    width: "100%",
    flex: 1
  },
  inputContainer: {
    width: "80%"
  },
  input: {
    backgroundColor: "#eee",
    borderColor: "#bbb"
  },
  landscapePasswordContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  portraitPasswordContainer: {
    flexDirection: "column",
    justifyContent: "flex-start"
  },
  landscapePasswordWrapper: {
    width: "45%"
  },
  portraitPasswordWrapper: {
    width: "100%"
  }
});

export default AuthScreen;