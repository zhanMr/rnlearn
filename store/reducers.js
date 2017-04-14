import {combineReducers} from 'redux';

function calculation(state = {}, action){
    switch(action.type){
        case 'Calculation':
            return action.data;
        default:
            return 0;
    }
}
const app = combineReducers({
    calculation
});
export default app;