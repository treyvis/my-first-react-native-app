import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Hello extends React.Component {
  render() {
    return (
      <Text>Hello {this.props.name}</Text>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Hello name='Trey' />
        <Hello name='Aubrey' />
      </View>
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
