import React from 'react'
import { AppRegistry,View, Text, StyleSheet, TextInput, ImageBackground } from 'react-native'
import { utils, RuuiProvider, Button, Tooltip } from 'react-universal-ui'

export default class Tic_tac extends React.Component {
  constructor(props) {
    super(props)

    console.log("FindScreen props: " + JSON.stringify(props))




    this.findMatches = this.findMatches.bind(this)

  }


      findMatches(){
        console.log('findMatches')
      }

  render() {
    return(

      <shoppingList />
    )
  }
}



 class shoppingList extends React.Component {
   render(){
     return(
       <div className="shopping-list">
       <h1>shopping List for
       {this.props.name}</h1>
       <ul>
          <li>Instagram</li>
          <li>whatsapp</li>
          <li>Oculus</li>
          </ul>
          </div>
     )
   }
 }
