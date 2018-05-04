import React,{Component} from 'react';
import { View, Image , Button, StyleSheet, } from 'react-native';
import imagePlaceHolder from '../../assets/one.jpeg';



class PickImage extends Component {
    render(){
        return( 
            <View style={styles.container} >
        <View style={styles.placeholder} >
            <Image source={imagePlaceHolder} style={styles.imagePlaceHolder}  />
            </View>
            <View style={styles.button} >
             <Button title="pick image" onPress={()=>alert('pick image')}/>
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
        imagePlaceHolder:{
            width:"100%",
            height:150
        }
});

export default PickImage;