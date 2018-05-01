import React from 'react';
import {Modal , View, Image , Text ,Button , StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const placeDetail = props => {
    let modalContent = null ;
    if(props.selectPlace){
        modalContent =(
            <View>
            <Image source={props.selectPlace.image} style={styles.palceImage}/>
            <Text style={styles.palceName} >{props.selectPlace.name}</Text>
            </View>
        );
    }
    return (
        <Modal onRequestClose={props.onModalClose}  visible={props.selectPlace!== null} animationType="slide">
        <View style={styles.modalContener} >
            {modalContent}
            <View>
                <TouchableOpacity onPress={props.onItemDeleted}  >
                    <View style={styles.deleteButton} >
                    <Icon size={30} name="ios-color-wand" color="red" />
                    </View>
                 </TouchableOpacity>
                <Button title="delete" color="red" />
                <Button title="close" onPress={props.onModalClose} />
            </View>
        </View>
    </Modal>
    );
    
};

const styles = StyleSheet.create({
    modalContener:{
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