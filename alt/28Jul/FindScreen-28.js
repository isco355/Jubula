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
       <View style={styles.container} >
       <Text style={styles.students}> Bankaccount: </Text>




           <Box/>



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
    height:100,
  },
  students:{
    paddingTop: 60,
    paddingHorizontal:25,
     fontWeight: 'bold',
     fontSize:25,
     color:'red',
  },

  team:{
    flex:1,
    fontSize:20,
    textAlign:'center',
    color:'blue',
    fontWeight: 'bold',
    width:100,
    height:100,


  },
  imgcoin:{
    paddingTop:100,
    alignItems: 'center',
  }

})
