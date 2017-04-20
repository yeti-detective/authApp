
import React, { Component } from 'react';
import {
   StyleSheet,
   Text,
   View
} from 'react-native';
import Nav from "./navbar";
// import {} from "../actions"
import Login from "./login";
import { StyleProvider } from '@shoutem/theme';
var App = React.createClass({
   render() {
      return (
         <View>
            <Login />
         <Nav />
   </View>
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
