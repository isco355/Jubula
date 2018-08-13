import React from 'react'
import { AppRegistry,View, Text, StyleSheet, TextInput,ScrollView,ImageBackground } from 'react-native'
import { utils, RuuiProvider, Button, Tooltip } from 'react-universal-ui'

/*
{ name: 'Susana', age: 19},
{ name: 'Hector' , age: 27},
{ name: 'Dybala', age: 29},
{ name: 'pugba', age: 29},
{ name: 'Lozano', age: 19},
{ name: 'Ochoa' , age: 27},
{ name: 'Cristiano', age: 29},
*/
export default class Box extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      bank:10,
      myPlayers:[
        'Susana':{
          age: 50,
          cost : 10,
        },
        'hector':{
          age: 50,
          cost : 10,
        },
      ],



      available:[
        'messi': {
          age:76,
          cost:5
        }

      ],
  }
    console.log('C ' + JSON.stringify(this.state.myPlayers.c))
    console.log(this.state.myPlayers)
    this.transferIn = this.transferIn.bind(this)
    this.transferOut = this.transferOut.bind(this)
  }


   transferIn(pl){
    let myTeam = this.state.myPlayers.slice(0)
    console.log("TI() early myPlayers: " + JSON.stringify(this.state.myPlayers))
    console.log("TI() early myTeam: " + JSON.stringify(myTeam))
    myTeam.push(pl)


    const upd = this.state.available.filter((avail) => {
      return avail != pl
    })

    this.setState({
      myPlayers: myTeam,
      available: upd
    })
   }

 transferOut(playerOut){
   let rt = this.state.available.slice(0)
   rt.push(playerOut)

   const myteamUpd = this.state.myPlayers.filter((pl) => {
     return pl != playerOut
   })


   this.setState({
      available: rt,
      myPlayers:myteamUpd
   })


 }
  render(){
    /*
        style={{height:40,backgroundColor:'rgba(216,216,216,0.7)'}}>
          <TextInput
          placeholder="Name"
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          />
    */
    return(
      <View style={styles.container}>

        <ScrollView contentContainerStyle={styles.contentContainer} >

        {
        this.state.available.map((pl) =>{
          return <Text key={pl}

            style={styles.listplayer}

            onPress={() => this.transferIn(pl)}

            > {pl}  </Text>
        })
      }
      </ScrollView>


      <View style={styles.second}>

      <ScrollView contentContainerStyle={styles.contentContainer} >

      {
      this.state.myPlayers.map((playerOut) =>{
        return <Text
          style={styles.myplayers}
          key={playerOut}
          onPress={() => this.transferOut(playerOut)}

          > {playerOut}  </Text>
      })
    }
        </ScrollView>
        </View>

      </View>
    )
  }
}


const styles = StyleSheet.create({
  container:{
    flex : 1,
  height: 200,
  paddingHorizontal:50,
  paddingTop: 20

},
  second:{
    flex: 1,
    paddingTop: 180,
    height: 100,
  },


  listplayer:{
  },

  myplayers:{
    height: 1
  },
  casa:{

  }

})



////////////////////
