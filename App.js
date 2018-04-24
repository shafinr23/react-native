import React from 'react';
import { StyleSheet, Text, View , TextInput , Button} from 'react-native';

export default class App extends React.Component {
  state = {
    placeName: "",
    places: []
  };

  placeNameChangeHandler = val => {
    this.setState({
      placeName:val
    });
  };

  placeSubmiHandler = ()=>{
    if(this.state.placeName.trim() === ""){
      return;
    }
    this.setState(prevState =>{
      return{
        places:prevState.places.concat(prevState.placeName)
      };
    });
  };
 
  
  render() {
    const placesOutput = this.state.places.map((place, i) => (
      <Text key={i} >
        {place}
      </Text>
    ));
    return (
      <View style={styles.container}>

        <View style={styles.inputContainer} >
        <TextInput 
        style={styles.placeInput}
        placeholder="search place"
        value={this.state.placeName}
        onChangeText={this.placeNameChangeHandler}
        />

        <Button 
       style={styles.placeButton}
        title="awesome"
        onPress={this.placeSubmiHandler}
        />
        </View>
        <View>
          {placesOutput}
        </View>
        
            
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  padding:10,
  backgroundColor: 'transparent',
  alignItems: 'center',
  justifyContent: 'flex-start',
  },
  inputContainer:{
   // flex:1,
    width:"100%",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
  },
  placeInput:{
    width:"70%"
  },
  placeButton:{
    width:"30%",
    
  }
});
