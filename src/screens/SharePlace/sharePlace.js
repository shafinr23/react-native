import React, { Component } from 'react';
import { View, Text , TextInput, Button, StyleSheet, ScrollView, Image} from 'react-native';
import { connect } from 'react-redux';
import PlaceInput from '../../components/PlaceInput/PlaceInput'
// import PlaceInput from '../../components/PlaceInput/PlaceInput';
import { addPlace } from '../../store/actions/index';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';
import PickImage from '../../components/PickImage/PickImage';
import PickLocation from '../../components/PickLocation/PickLocation'


class SharePlaceScreen extends Component {
    state={
        placeName:""
    };
    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }

    onNavigatorEvent = event => {
        if (event.type === "NavBarButtonPress") {
            if (event.id === "sideDrawerToggle") {
                this.props.navigator.toggleDrawer({
                    side: "left"
                });
            } 
        }  
    }
   
    placeNameChangedHandeler = val =>{
        this.setState({
            placeName:val
        });
    }
    placeAddedHandler = () => {
        if(this.state.placeName.trim()!==""){
            this.props.onAddPlace(this.state.placeName);
        }
        
    }
    render () {
        return (
            <ScrollView>
            <View style={styles.container}  >
                <MainText><HeadingText>share us </HeadingText></MainText>
                <PickImage  />
                <PickLocation/>
                <PlaceInput placeName={this.state.placeName} onChangeText={this.placeNameChangedHandeler} />
                <View style={styles.button} >
                <Button title="share the place" onPress={this.placeAddedHandler} />
                </View>
                {/* <PlaceInput onPlaceAdded={this.placeAddedHandler}/> */}
                </View>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    placeholder:{
        borderWidth:1,
        borderColor:"#000",
        backgroundColor:"#eee",
        width:"80%",
        height:150
        },
        container:{
            flex:1,
            alignItems:"center"
        },
        button:{
            margin : 8
        },
        
});
const mapDispatchToProps = dispatch => {
    return {
        onAddPlace: (placeName) => dispatch(addPlace(placeName))
    };
};

export default connect(null, mapDispatchToProps)(SharePlaceScreen);