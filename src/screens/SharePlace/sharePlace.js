import React, { Component } from 'react';
import { View, Text , TextInput, Button, StyleSheet, ScrollView, Image} from 'react-native';
import { connect } from 'react-redux';
import DefaultInput from '../../components/UI/DeafultInput/DefaultInput';
// import PlaceInput from '../../components/PlaceInput/PlaceInput';
import { addPlace } from '../../store/actions/index';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';
import imagePlaceHolder from '../../assets/one.jpeg';



class SharePlaceScreen extends Component {
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
    placeAddedHandler = placeName => {
        this.props.onAddPlace(placeName);
    }

    render () {
        return (
            <ScrollView>
            <View style={styles.container}  >
                <MainText><HeadingText>share us </HeadingText></MainText>
               <View style={styles.placeholder} >
               <Image source={imagePlaceHolder} style={styles.imagePlaceHolder}  />
               </View>
               <View style={styles.button} >
                <Button title="pick image" />
                </View>
                <View style={styles.placeholder} ><Text>maps! </Text></View>
                <View style={styles.button} >
                <Button title="Locate me " />
                </View>
                <DefaultInput placeholder="place name" />
                <View style={styles.button} >
                <Button title="share the place" />
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
        imagePlaceHolder:{
            width:"100%",
            height:150
        }
});
const mapDispatchToProps = dispatch => {
    return {
        onAddPlace: (placeName) => dispatch(addPlace(placeName))
    };
};

export default connect(null, mapDispatchToProps)(SharePlaceScreen);