
import React, { Component } from 'react';
import {
   StyleSheet,
   Text,
   View
} from 'react-native';

// import {} from "../actions"
import Login from "./login"
var App = React.createClass({
   render() {
      return (
         <Login />
   );
}
});

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   },

});

module.exports = App
