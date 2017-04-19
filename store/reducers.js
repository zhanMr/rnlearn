import {combineReducers} from 'redux';

function calculation(state = {}, action){
    switch(action.type){
        case 'Calculation':
            return action.data;
        default:
            return 0;
    }
}


function getFaceBook(state = {}, action) {
    switch(action.type){
        case 'FaceBook':
            return action.data;
        default:
            return null;
    }
}


const app = combineReducers({
    calculation, getFaceBook
});
export default app;