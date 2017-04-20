
import React, { Component } from 'react';
import {
   StyleSheet,
   Text,
   View
} from 'react-native';
import { NavigationBar } from '@shoutem/ui';
import {Icon,Title} from "@shoutem/ui";
import { StyleProvider } from '@shoutem/theme';

var Nav = React.createClass({
   render() {
      return (
         <StyleProvider>
            <NavigationBar
               leftComponent={<Icon name="sidebar" />}
               centerComponent={<Text>Title</Text>}
            />

         </StyleProvider>
      )
   }
});

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   },

});

module.exports = Nav;
