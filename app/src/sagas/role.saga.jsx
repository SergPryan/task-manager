import {takeEvery} from 'redux-saga/effects'

function* createTask() {
    yield console.log('create task saga')
}


export function* roleSaga() {
    yield takeEvery("CREATE_TASK", createTask);
}