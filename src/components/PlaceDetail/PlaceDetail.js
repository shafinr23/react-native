import React from 'react';
import {Modal , View, Image , Text ,Button } from 'react-native';

const placeDetail = props => {
    <Modal>
        <View>
            <Image source={props.selectedPlace.placeImag} />
            <Text>{props.selectedPlace.placeName}</Text>
            <View>
                <Button title="delete" />
                <Button title="close"/>
            </View>
        </View>
    </Modal>
};

export default placeDetail;