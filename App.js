import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { connect } from 'react-redux';


import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';
import {addPlace ,deletePlace , deselectPlace , selectPlace} from './src/store/actions/index'



 class App extends Component {
 
  placeAddedHandler = placeName => {
    this.props.onAddPlace(placeName);
  };

  placeDeletedHandeler = ()=>{
  this.props.onDeletePlace();
  };

  modalCloseHandeler = ()=>{
    this.props.onDeselectPlace();
  };

  placeSelectedHandeler = key => {
    this.props.onSelectPlace(key);
  
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail selectPlace={this.props.selectPlace} 
        onItemDeleted={this.placeDeletedHandeler} 
        onModalClose={this.modalCloseHandeler}/>
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList places={this.props.places} 
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

const mapStateToProps = state =>{
  return {
    places: state.places.places,
    selectPlace: state.places,selectPlace
  };
};
const mapDispatchToProps = dispatch =>{
  return {
    onAddPlace:(name) => dispatch(addPlace(name)),
    onDeletePlace:() => dispatch(deletePlace()),
    onSelectPlace:(key) => dispatch(selectPlace(key)),
    onDeselectPlace:()=> dispatch(deselectPlace())
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(App);