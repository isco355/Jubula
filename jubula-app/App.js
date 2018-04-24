/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';


type Props = {};
export default class App extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      students: [
        'Wolfe',
        'Avila',
        'Esterre',
        'Troubridge',
        'Westcott',
        'Saumarez',
        'Hardy',
      ]
    };

    this.click = this.click.bind(this);
  }

  click() {
    console.log("click()");
  }

  render() {
    /*
    const stu = this.state.students.map((name) => {
      <ul>{name}</ul>
    });
    */

    const stu = "foo";

    return (
      <View style={styles.container}>
        <Text>{stu}</Text>
        <Button title="Click" onClick={this.click} />
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
