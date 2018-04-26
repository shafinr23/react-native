import React, { Component } from "react";
import { StyleSheet, View } from "react-native";


import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';



export default class App extends Component {
  state = {
    places: [],
    selectPlace: null
  };

  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key:Math.random(),
          name : placeName,
          image : {
            uri: "https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          }
        })
      };
    });
  };

  placeSelectedHandeler = key => {
    this.setState(prevState =>{
      return {
        selectPlace:prevState.places.find(place=>{
          return place.key === key;
        })
      }
    });
    // this.setState(prevState =>{
    //   return{
    //     places: prevState.places.filter(place => {
    //       return place.key !== key;
    //     })
    //   };
    // });
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail selectPlace={this.state.selectPlace} />
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList places={this.state.places} 
        onItemSelected={this.placeSelectedHandeler} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:10, 
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});