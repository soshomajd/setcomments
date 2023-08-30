import {  legacy_createStore as createStore ,combineReducers,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { changenumber,posts} from "./reducer";

const reducers=combineReducers({ number: changenumber,posts});
 const middelware=[thunk];
 const data=JSON.parse(localStorage.getItem("posts")) ? JSON.parse(localStorage.getItem("posts")):[];
 const initialstate={posts:{data:[...data],error:"",loading:false}}
const store=createStore(reducers,initialstate,applyMiddleware(...middelware));


export default store
