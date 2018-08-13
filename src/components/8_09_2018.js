import React from 'react'
import { View, Text, StyleSheet,Image, TextInput,ScollView, } from 'react-native'
import { utils, RuuiProvider, Button, Tooltip } from 'react-universal-ui'

import StudentMatch from './MatchStudent'
import Box from './Box'


export default class FindScreen extends React.Component {
  constructor(props) {
    super(props)

    console.log("FindScreen props: " + JSON.stringify(props))

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

  console.log(this.state.bank)

    this.findMatches = this.findMatches.bind(this)

  }


      findMatches(){
        console.log('findMatches')
      }

  render() {
    return(

      <AlignItemsBasics />
    )
  }
}



 class AlignItemsBasics extends React.Component {
   render(){

     return(
       <View style={styles.container}>
            <View style={styles.headcontainer}>
            <View style={styles.slicemanu}>

            <Text style={styles.sliceicon}> slice </Text>

        </View>
        <View style={styles.accountItem}>
                <Text style={styles.textbank}> bank: {this.bank} </Text>
                <Image
                style={styles.imgcoin}
                source={require('./assets/coin.png')}
                />
              </View>
              </View>
              <View style={styles.imageswiper}>
              <Text style={styles.swiper}> placeholder </Text>

              </View>
              <View style={styles.headFilterplayer}>
              <View style={styles.filterhead}>
              <Text style={styles.textName}> Name: </Text>
            </View>
            <View style={styles.filterhead}>
            <Text style={styles.textprice}> price: </Text>
            </View>
            <View style={styles.filterhead}>
            <Text style={styles.textAge}> age: </Text>

            </View>
            </View>
            <View style={styles.headplayersSelect}>
            <Text style={styles.swiper}> placeholder </Text>

            </View>
        <View style={styles.headPurches}>
         <View style={styles.headTotalamount}>
         <Text style={styles.totalamount}> marketCar: </Text>
         <Text style={styles.totalamount}> total </Text>
         <Text style={styles.totalamount}> amount </Text>
        </View>
        </View>
        </View>

      )
    }
  }
/*



     )

   }
 }
*/

const styles = StyleSheet.create({
  container:  {
    flex: 1,
    paddingTop: 58,
    padding: 12,


  },
  headcontainer: {
    alignItems: 'center',
    flex:1,
    flexDirection: 'row',
    justifyContent:'flex-end',
    paddingTop: 7,
    height:37,
    justifyContent: 'space-between'
  },
  slicemanu:{
    flexDirection: 'row',

  },
  sliceicon:{
    fontSize: 21,

  },
  accountItem:{
    flexDirection: 'row',
    borderRadius: 12,
    justifyContent: 'center'
  },
  textbank:{
    fontSize: 21,

  },
  imgcoin:{
    height: 30,
    width: 30,
  },
  imageswiper:{
    backgroundColor: '#427af4',
    flex:4,

  },
  swiper:{
    backgroundColor:'grey',
    color:'white',
    flex:1,
    alignSelf:'stretch',
  },
  headFilterplayer:{
    justifyContent:'center',
    justifyContent:'space-around',

    flex:2,
  },
  filterhead:{

  },
  textName:{

  },
  textprice:{

  },
  textAge:{

  },
  headplayersSelect:{
    backgroundColor:'grey',
    flex:4,
  },
  headPurches:{
    backgroundColor:'white',
    flex:1,
    borderRadius:10
  },
  headTotalamount:{

  },
  totalamount:{

},
})
