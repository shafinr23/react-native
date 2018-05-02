import React from 'react';
import {View, Image , Text ,Button , StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const placeDetail = props => {

    return (
        <View style={styles.container} >
            <View>
            <Image source={props.selectPlace.image} style={styles.palceImage}/>
            <Text style={styles.palceName} >{props.selectPlace.name}</Text>
            </View>
            <View>
                <TouchableOpacity onPress={props.onItemDeleted}  >
                    <View style={styles.deleteButton} >
                    <Icon size={30} name="ios-color-wand" color="red" />
                    </View>
                 </TouchableOpacity>
            </View>
        </View>
    
    );

    
};

const styles = StyleSheet.create({
    container:{
        margin: 22
    },
    palceImage:{
        width: "100%",
        height:200
    }, 
    palceName:{
        fontWeight:"bold",
        textAlign:"center",
        fontSize:28
    },
    deleteButton:{
        alignItems:"center"
    }
});

export default placeDetail;