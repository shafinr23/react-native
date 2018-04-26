import React from 'react';
import {View , Text , StyleSheet, TouchableOpacity , Image} from 'react-native';

const listItem =(props) => (
    <TouchableOpacity onPress={props.onItemPressed} >
    <View style={styles.listItem}>
            <Image 
                resizeMode="contain"
                source={props.PlaceImag}
                style={styles.PlaceImag}
            />
        <Text>
            {props.placeName}
        </Text>
    </View>
    </TouchableOpacity>
);

const styles  = StyleSheet.create({
    listItem:{
        width: "100%",
        padding: 8,
        backgroundColor: "#eee",
        margin:5 ,
        flexDirection : "row",
        alignItems:"center"
    },
    PlaceImag:{
        margin:8,
        height:30 ,
        width:30
    }
});

export default listItem;