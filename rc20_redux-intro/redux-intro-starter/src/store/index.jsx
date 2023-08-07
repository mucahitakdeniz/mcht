import {legacy_createStore as createStore } from "redux";
import { counterReducer } from "./counterRecucer";
export const store = createStore(counterReducer)
