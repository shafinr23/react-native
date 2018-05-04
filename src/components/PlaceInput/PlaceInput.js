import React, { Component } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import DefaultInput from '../UI/DeafultInput/DefaultInput';
  const placeInput =props => 
 (
      
       <DefaultInput placeholder="place name" 
       value={props.placeName}
        onChangeText={props.onChangeText} />      
    );
  




export default placeInput;
