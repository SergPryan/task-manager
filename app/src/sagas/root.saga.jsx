import {roleSaga} from "./role.saga";
import {fork} from 'redux-saga/effects'


export default function* rootSaga(){
    yield fork(roleSaga)
}