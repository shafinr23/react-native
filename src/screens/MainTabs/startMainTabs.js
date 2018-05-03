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



// const startTabs = async () => {
//     const mapIcon = await Icon.getImageSource("md-map", 30);
//     const shareIcon = await Icon.getImageSource("ios-share-alt", 30);
//     const menuIcon = await Icon.getImageSource("md-map", 30);

//      Navigation.startTabBasedApp({
//          tabs: [
//              {
//                  label: "Find Place",
//                  title: "Find Place ",
//                  icon: mapIcon,
//              screen:"awesome-places.findPlacescreen",
//              navigatorButtons:{
//                  leftButtons:{
//                      icon:menuIcon,
//                      title:"menu",
//                      id:"sideDrawerToggle"
//                  }
//              }
//             },
//              {
//                  label: "Share Place",
//                  title: "Share Place ",
//                  icon: shareIcon,
//                  screen:"awesome-places.SharePlacescreen",
//                  navigatorButtons:{
//                     leftButtons:{
//                         icon:menuIcon,
//                         title:"menu left ",
//                         id:"sideDrawerToggle"
//                     }
//                 }
                 
//              }
//          ],
//          drawer:{
//              left:{
//                  screen:"awesome-places.SideDrawerScreen"
//              }
//          }
//     });
// };

// export default startTabs;
const startTabs = () => {
    Promise.all([
        Icon.getImageSource("md-map", 30),
        Icon.getImageSource("ios-share-alt", 30),
        Icon.getImageSource("ios-menu", 30)
    ]).then(sources => {
        Navigation.startTabBasedApp({
            tabs: [
                {
                    screen: "awesome-places.findPlacescreen",
                    label: "Find Place",
                    title: "Find Place",
                    icon: sources[0],
                    navigatorButtons: {
                        leftButtons: [
                            {
                                icon: sources[2],
                                title: "Menu",
                                id: "sideDrawerToggle"
                            }
                        ]
                    }
                },
                {
                    screen: "awesome-places.SharePlacescreen",
                    label: "Share Place",
                    title: "Share Place",
                    icon: sources[1],
                    navigatorButtons: {
                        leftButtons: [
                            {
                                icon: sources[2],
                                title: "Menu",
                                id: "sideDrawerToggle"
                            }
                        ]
                    }
                }
            ],
            drawer: {
                left: {
                    screen: "awesome-places.SideDrawerScreen"
                }
            }
        });
    });
};

export default startTabs;