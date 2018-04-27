import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { utils, RuuiProvider, Button, Tooltip, Input } from 'react-universal-ui'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default class Simple extends React.Component {
  constructor(props) {
    super(props)

    this.consoleClicked = this.consoleClicked.bind(this)
  }

  componentDidMount() {
    console.log("CDM()")
  }


  consoleClicked() {
    console.log("CC()");
  }

  render() {
    return <View style={styles.container}>
      <Button
        title="Consoller"
        wrapperStyle={{ marginTop: 10 }}
        onPress={this.consoleClicked}
      />
    </View>
  }
}
