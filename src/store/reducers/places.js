import {ADD_PLACE , DELETE_PALCE , DESELECT_PALCE , SELECT_PALCE} from '../actions/actionTypes';

const initialState ={
    places: [],
    selectPlace: null
};

const reducer = (state = initialState, action)=>{
    switch(action.type){
        case ADD_PLACE:
            return{
                ...state,
                places: state.places.concat({
                    key:Math.random(),
                    name : action.placeName,
                    image : {
                      uri: "https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    }
                  })
            };
        case DELETE_PALCE:
            return{
                ...state,
                places: state.places.filter(place => {
                    return place.key !== state.selectPlace.key;
                  }),
                  selectPlace:null
            };
        case SELECT_PALCE:
            return{
                ...state,
                selectPlace:state.places.find(place=>{
                    return place.key === action.placeKey;
                  })
            };
        case DESELECT_PALCE:
            return{
                ...state,
                    selectPlace:null           
                 };
        default:
            return state;
    }
};

export default reducer;