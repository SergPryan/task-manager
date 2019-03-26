import update from 'immutability-helper'

export default function reducer(state={},action){
    let newState = state;
    if(action.type === 'CREATE_TASK'){
        newState = update(newState,{$set: {id: 5}})
        console.log(newState)
    }
    return newState;
}