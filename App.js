import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Dashboard from './app/components/Dashboard'
import Test from './app/components/Test'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Dashboard />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop: 24,
  },
})