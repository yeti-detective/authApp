
import React, { Component } from 'react';
import {
   StyleSheet,
   Text,
   View
} from 'react-native';

var Login = React.createClass({
   render() {
      return (
         <View style={styles.container}>
            <View style ={styles.header}>
               <Text>
                  This Is An App
               </Text>
            </View>

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

module.exports = Login;
