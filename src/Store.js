import {createStore } from "redux";
import reducer from "./reducer.js";
export default () => {return createStore(reducer)}