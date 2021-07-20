import changeTheNum from './incdecCounter';
import multdivideCounter from './multdivideCounter';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  changeTheNum,
  multdivideCounter,
});

export default rootReducer;
