import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FormLogin from './src/components/FormLogin';

export default class App extends React.Component {
  render() {
    return (
      <FormLogin/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
