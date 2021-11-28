import thunk from 'redux-thunk';
import {
    createStore,
    applyMiddleware,
    compose,
    combineReducers
} from 'redux';

import { vehicleReducer } from './reducers/vehicleReducer';

const rootReducer = combineReducers({
    vehicleReducer
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
