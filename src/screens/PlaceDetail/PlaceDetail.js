import React, {Component} from 'react';
import {View, Image , Text ,Button , StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import {deletePlace} from '../../store/actions/index'

class  PlaceDetail extends Component{
    placeDeleteHandler=()=>{
        this.props.onDeletePlace(this.props.selectedPlace.key);
        this.props.navigator.pop();
    }
    render(){
        return(
            <View style={styles.container} >
             <View>
            <Image source={this.props.selectedPlace.image} style={styles.palceImage}/>
            <Text style={styles.palceName} >{this.props.selectedPlace.name}</Text>
            </View> 
            <View>
                <TouchableOpacity onPress={this.placeDeleteHandler}  >
                    <View style={styles.deleteButton} >
                    <Icon size={30} name="ios-trash" color="red" />
                    </View>
                 </TouchableOpacity>
            </View>
        </View>
        );
    }
}


const styles = StyleSheet.create({
    container:{
        margin: 22
    },
    palceImage:{
        width: "100%",
        height:200
    }, 
    palceName:{
        fontWeight:"bold",
        textAlign:"center",
        fontSize:28
    },
    deleteButton:{
        alignItems:"center"
    }
});


const mapDispatchToPorps = dispatch =>{
    return{
        onDeletePlace : (key) =>  dispatch(deletePlace(key))
    };
};

export default connect(null,mapDispatchToPorps)(PlaceDetail);