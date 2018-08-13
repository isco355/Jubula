import React from 'react'
import { AppRegistry,Dimension,View, Text, StyleSheet, TextInput,ScrollView,ImageBackground } from 'react-native'
import { utils, RuuiProvider, Button, Tooltip } from 'react-universal-ui'


export default class Box extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      bank:10,
      available:[
      { name: 'messi', age: 1, price: 10},
      { name: 'Susana', age: 2, price: 2},
      { name: 'Hector' , age: 3, price: 50},
      { name: 'Dybala', age: 4, price: 1},
      { name: 'pugba', age: 5, price: 3},
      { name: 'Lozano', age: 6, price: 3},
      { name: 'Ochoa' , age: 7, price: 35},
      { name: 'Cristiano', age: 8, price: 5},
      { name: 'Kun Aguero' , age: 9,price:12},
      { name: 'vic', age: 10, price: 8},
                      ],
      myPlayers:[],




  }

    this.transferIn = this.transferIn.bind(this)
    this.transferOut = this.transferOut.bind(this)


  }

  transferIn(pl){
   let myTeam = this.state.myPlayers.slice(0)
   pl.price -= 2

   myTeam.push(pl)



   const upd = this.state.available.filter((avail) => {
     return avail != pl
   })


   this.setState({
     myPlayers: myTeam,
     available: upd,
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
     myPlayers:myteamUpd,

  })
}






  render(){
    console.log(this.state.available)
    console.log(this.state.myPlayers)


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

        <ScrollView
        contentContainerStyle={styles.contentContainer} >

      {
      this.state.available.map((pl,index) =>{
        return <Text key={index}

          style={styles.textAge}

          onPress={() => this.transferIn(pl)}

          >price: {pl.price}  </Text>

      })
    }

      </ScrollView>


      <View style={styles.second}>

      <ScrollView contentContainerStyle={styles.secondlist} >


    {
    this.state.myPlayers.map((playerOut,index) =>{
      return <Text key={index}

        style={styles.textrpice}

        onPress={() => this.transferOut(playerOut)}

        > price: {playerOut.price}  </Text>

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
    flex:2,
  height: 20,
  paddingHorizontal:10,
  paddingTop: 10

},
contentContainer:{
  flex:1,
  height:10
},
  secondlist:{
    backgroundColor:'black',
    height: 200
  },
  textAge:{
    fontSize: 30,
    color: 'white',
    backgroundColor:'blue',
    alignItems:'center',

  }

})
