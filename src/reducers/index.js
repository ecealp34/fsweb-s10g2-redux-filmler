import { combineReducers } from 'redux';
import favoriteReducer  from "./favoritesReducer"
import movieReducer from './movieReducer';


const rootReducer = combineReducers({
    movieReducer: movieReducer,
    favoriteReducer: favoriteReducer,
})
export default rootReducer;