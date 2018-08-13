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
      students: ['joe','maria','pablo'],
      studentMatch: null,
      searchFieldText: '',
    }


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
                <Text style={styles.textbank}> bank: </Text>
                <Text style={styles.textbank}> amount </Text>
                <View style={styles.circlelogo}>
                <Text style={styles.imgcoin}> log </Text>
                <Image
                style={styles.imgcoin}
                source={require('./assets/coin.png')}
                />
                </View>
              </View>
              </View>
              <View style={styles.imageswiper}>
              <Text style={styles.swiper}> placeholder </Text>
              <Image
              style={styles.imgcoin}
              source={require('./assets/coin.png')}
              />
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
              <Box/>
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
    flex:1,
    backgroundColor: '#c9c9c9',
    flexDirection: 'row',
    justifyContent:'flex-end',
    justifyContent:'space-between',
    paddingTop: 7,
    height:37,

  },
  accountItem:{
    flexDirection: 'row',
    backgroundColor: '#41a0f4',
    borderRadius: 12,
    justifyContent: 'center'
  },
  circlelogo:{
    flex:1,
    justifyContent:'center'
  },
  textbank:{
    fontSize: 21,


  },
  slicemanu:{
    flexDirection: 'row',
    backgroundColor: '#41a0f4',
    borderRadius: 12,
  },
    sliceicon:{
      fontSize: 21,

  },
  imageswiper:{
    backgroundColor: '#427af4',
    flex:5,

  },
  swiper:{
    backgroundColor:'grey',
    color:'white',
    flex:1,
    alignSelf:'stretch',




  },
  imgcoin:{
    flex: 1,
  },
  headFilterplayer:{
    justifyContent:'center',
    alignItems:'center',
    flex:3,
    flexDirection: 'row'
  },
  headplayersSelect:{
    backgroundColor:'black',
    flex:5,

  },
  headPurches:{
    backgroundColor:'#f44100',
    flex:1,
    borderRadius:10
  },

})
