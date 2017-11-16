import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

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
        <Image 
          source={{uri: 'https://s3-media4.fl.yelpcdn.com/bphoto/6lYNesrYPiU2Y4_HuFpysA/348s.jpg'}}
          style={{width: '100%', height: 200}}
        />
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
