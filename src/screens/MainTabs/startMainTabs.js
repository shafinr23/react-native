import {Navigation} from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';



// const startTabs = ()=>{
//     Promise.all([
//         icon.getImageSource("md-map",30),
//         icon.getImageSource("ios-share-alt",30)
//     ]).then(sources =>{
//         Navigation.startTabBasedApp({

//             tabs:[
//                 {
//                     screen:"awesome-places.findPlacescreen",
//                     label:"find place",
//                     title:"find place",
//                     icon: sources[0]
//                 },
//                 {
//                     screen:"awesome-places.SharePlacescreen",
//                     label:"share place",
//                     title:"share place",
//                     icon:sources[1] 
//                 }
//             ]
//         });
//     });

// };



const startTabs = async () => {
    const mapIcon = await Icon.getImageSource("md-map", 30);
    const shareIcon = await Icon.getImageSource("ios-share-alt", 30);
 
     Navigation.startTabBasedApp({
         tabs: [
             {
                 label: "Find Place",
                 title: "Find Place ",
                 icon: mapIcon,
             screen:"awesome-places.findPlacescreen",
},
             {
                 label: "Share Place",
                 title: "Share Place ",
                 icon: shareIcon,
                 screen:"awesome-places.SharePlacescreen",
             }
         ]
    });
};

export default startTabs;
