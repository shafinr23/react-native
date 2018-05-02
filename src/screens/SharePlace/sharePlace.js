import React , { Component } from 'react'; 
import {View , Text } from 'react-native';
import {connect} from 'react-redux';

import PlaceInput from '../../components/PlaceInput/PlaceInput';
import {addPlace} from '../../store/actions/index';
class SharePlaceScreen extends Component{
    placeAddedHandeler = placeName =>{
        this.props.onAddPlace(placeName);
    }
    render(){
        return(
            <View>
                <PlaceInput onPlaceAdded={this.placeAddedHandeler} />
            </View>
        );
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        onAddPlace : (palceName)=>dispatch(addPlace(palceName))
    };
}

export default connect(null,mapDispatchToProps)(SharePlaceScreen);