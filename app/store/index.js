import {applyMiddleware, createStore, compose} from "redux";
import {persistStore, autoRehydrate} from "redux-persist";
import {AsyncStorage} from "react-native";
import reducer from "../reducer";
import logger from "redux-logger";


var defaultState ={
   todos:[]
}

exports.configureStore = (initialState = defaultState) =>{
   var store = createStore(
      reducer,
      initialState,
      compose(
         autoRehydrate(),
         applyMiddleware(logger)
      ));
      persistStore(store, {storage: AsyncStorage});
   return store;
};
