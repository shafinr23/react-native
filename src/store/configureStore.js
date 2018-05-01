import { createStore , combineReducers, compose} from 'redux';


import placesReducer from './reducers/places';


const rootReducer = combineReducers({
    places : placesReducer
});

const composeEnhencers = compose;
if(__DEV__){
    composeEnhencers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}


const configureStore = () =>{
    return createStore(rootReducer , composeEnhencers());
};


export default configureStore;