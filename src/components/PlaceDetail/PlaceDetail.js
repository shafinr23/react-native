import React from 'react';
import {Modal , View, Image , Text ,Button , StyleSheet} from 'react-native';

const placeDetail = props => {
    let modalContent = null ;
    if(props.selectPlace){
        modalContent =(
            <View>
            <Image source={props.selectPlace.placeImag} />
            <Text>{props.selectPlace.placeName}</Text>
            </View>
        );
    }
    return (
        <Modal>
        <View>
            
            <View>
                <Button title="delete" color="red" />
                <Button title="close"/>
            </View>
        </View>
    </Modal>
    );
    
};

const styles = StyleSheet.create({

});

export default placeDetail;