import React , { Component } from 'react'; 
import {View , Text } from 'react-native';
import {connect} from  'react-redux';


import PlaceList from '../../components/PlaceList/PlaceList';

class findPlaceScreen extends Component{
    itemSelectedHandeler = key => {
        
        this.props.navigator.push({
            screen: "awesome-places.PlaceDetailScreen",
            title:this.props.places.find(place =>{
                return place.key === key;
            }).name,
            passProps:{
                selectedPlace: this.props.places.find(place =>{
                    return place.key === key;
                }),
            }
        });
    };
    render(){
        return(
            <View>
                <PlaceList places={this.props.places} onItemSelected={this.itemSelectedHandeler} />
            </View>
        );
    }
}

const mapStateToProps = state =>{
    return{
        places:state.places.places
    };
};

export default connect(mapStateToProps)(findPlaceScreen);