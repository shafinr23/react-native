import React,{Component} from 'react';
import { View, Image , Button, StyleSheet,Text } from 'react-native';
import imagePlaceHolder from '../../assets/one.jpeg';



class PickLocation extends Component {
    render(){
        return( 
            <View style={styles.container} >
        <View style={styles.placeholder} ><Text>maps! </Text></View>
                <View style={styles.button} >
                <Button title="Locate me "  onPress={()=>alert('pick image')} />
                </View>
            </View>
            );
    }
}
const styles = StyleSheet.create({
    container:{
        width:"100%",
        alignItems:"center"
    },
    placeholder:{
        borderWidth:1,
        borderColor:"#000",
        backgroundColor:"#eee",
        width:"80%",
        height:150
        },
       
        button:{
            margin : 8
        },
});

export default PickLocation;