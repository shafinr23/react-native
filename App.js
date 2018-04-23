import React from 'react';
import { StyleSheet, Text, View , TextInput} from 'react-native';

export default class App extends React.Component {
  state = {
    placeName: ""
  };

  placeNameChangeHandler = val => {
    this.setState({
      placeName:val
    });
  };
 
  
  render() {
    return (
      <View style={styles.container}>
        
        <TextInput 
        style={{width: 300 }}
        placeholder="an awsome app"
        value={this.state.placeName}
        onChangeText={this.placeNameChangeHandler}
        />
        
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
});
