import React from 'react';
import {TouchableOpacity, TouchableNativeFeedback , Text ,Platform, StyleSheet,View} from 'react-native';

const backgroundwithBackground = props => {
    const content =(
        <View  style={[styles.button,{backgroundColor:props.color}]} >
        <Text>{props.children}</Text>
    </View>
    )
    if(Platform.OS==='android'){
        return(
            <TouchableNativeFeedback onPress={props.onPress}  >
                {content}
            </TouchableNativeFeedback>
        );
    }

   
return(
    <TouchableOpacity onPress={props.onPress} >
        {content}
    </TouchableOpacity> 
);
}
const styles = StyleSheet.create({
    button:{
        padding: 10,
        margin:5,
        borderRadius:5,
        borderWidth:1,
        borderColor:"#000"
    }
})

export default backgroundwithBackground;