import React from 'react';
import {Modal , View, Image , Text ,Button , StyleSheet} from 'react-native';

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
                <Button title="delete" color="red" onPress={props.onItemDeleted} />
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
    }
});

export default placeDetail;