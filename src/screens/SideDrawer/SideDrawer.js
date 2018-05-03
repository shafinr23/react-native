import React, {Component} from 'react';
import { View , Text ,Dimensions } from 'react-native'; 
class SideDrawer extends Component{
    constructor(props) {

        super(props);
        
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
        }
    render(){
        return(
            <View style={{width:Dimensions.get("window").width *0.6}} >
                <Text>side drawer</Text>
            </View>
        );
    }
}


export default SideDrawer ;