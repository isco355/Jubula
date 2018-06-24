import React from 'react'
import { View, Text, StyleSheet, TextInput, ImageBackground } from 'react-native'
import { utils, RuuiProvider, Button, Tooltip } from 'react-universal-ui'


export default class Output extends React.Component {
  constructor(props) {
    super(props)

    this.cubaHost = 'http://alsi-parliament.herokuapp.com'
    this.studentListUrl = `${this.cubaHost}/studentList`
    //this.studentListUrl = 'http://localhost:9292/studentList'

      this.resolutions = {
        iphonex: [ 2436, 1125 ],
        iphone6: [ 1334, 750 ],
      }

      this.scale = 3
      this.selectedPhone = 'iphonex'
      this.baseHeight = this.resolutions[this.selectedPhone][0]
      this.baseWidth = this.resolutions[this.selectedPhone][1]
      this.width = this.baseWidth / this.scale
      this.height = this.baseHeight / this.scale

    this.state = {
      students: null,
      studentMatch: null,
      searchFieldText: '',
    }

    this.loadStudentList = this.loadStudentList.bind(this)
    this.findMatches = this.findMatches.bind(this)
  }


  componentDidMount() {
    this.loadStudentList()
  }

  loadStudentList() {
    console.log("LSL() retrieving students from: " + this.studentListUrl);
    return fetch(this.studentListUrl, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((json) => {
        console.log("LSL() retrieved students: " + JSON.stringify(json))
        this.setState({ students: json })
      })
  }


  findMatches(input) {
    const query = input.text
    if (query === '') {
      this.setState({ studentMatch: null })
    } else {
      let matches = []
      console.log("this.state.students typeof: " + typeof this.state.students);
      console.log("this.state.students: " + JSON.stringify(this.state.students))
      Object.entries(this.state.students).map((pair) => {
        const key = pair[0]
        const data = pair[1]
        const firstName = data.firstName
        const lastName = data.lastName
        console.log("key: " + key);
        console.log("data:" + JSON.stringify(data));
        const lc = query.toLowerCase()
        if (
          firstName.toLowerCase().startsWith(lc) ||
          lastName.toLowerCase().startsWith(lc)
        ) {
          matches.push(pair)
        }
      })
      console.log("findMatches: " + matches);
      if (matches.length > 0) {
        this.setState({ studentMatch: matches })
      }
    }
  }


  render() {

    /*
    <Text style={styles.welcome}> Scratchpad </Text>
    <Image source={require('../assets/iphonex.png')} onLoad={this.onBackgroundLoad} />
    <Image onLoad={this.onBgLoad} />
          source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
             <Image
          style={{
            position: 'absolute',
            left: '0px',
            top: '0px',
            width: 250, height: 500
          source={require('../assets/sonic.png')}
          onLoad={this.onBgLoad} />
          }}

*
          style={styles.matchBox}


        <View style={{
            flex: 15,
            justifyContent:'flex-start',
            borderWidth: '3px',
          }}>

        </View>

        <View style={{
            flex:1,
            alignItems:'center',
            justifyContent:'center',
          }}>

          <TextInput
            onChangeText={(text) => this.findMatches({ text })}
            style={{ textAlign: 'center', borderWidth: '2px', padding: '1em', margin: '2em' }}
            placeholder="Search for student"
          />

      </View>




          */
      //return <View style={styles.alphaContainer}>
    return <View style={{
          flex: 1,
          flexDirection:'column',
          alignItems:'center',
          justifyContent:'center',
         }}
        >

        <ImageBackground style={{width: this.width, height: this.height}}
          source={require('./assets/iphonex.png')}
        >

          <View style={{
            flex: 1,
            alignItems:'center',
          }}
          >

            <View style={{
              flex: 10,
              minWidth: this.width,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            >

              {
                this.state.studentMatch
                  ? <StudentMatch matches={this.state.studentMatch}/>
                  : null
              }

            </View>


            <View style={{
              flex: 2,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              minWidth: this.width,
            }}
            >

              <TextInput
                style={{ textAlign: 'center', borderWidth: '1px', padding: '1em', margin: '2em' }}
                placeholder="Search for student"

                onChangeText={(text) => this.findMatches({ text })}
              />

            </View>


            <View style={{
              flex: 3,
              justifyContent: 'center',
              alignItems: 'center',
              minWidth: this.width,
            }}
            >

            <Button
              title="Load Student List"
              onPress={this.loadStudentList}
              style={{
                marginTop: '1em',
              }}
            />

            {
              this.state.students
                ? <Text style={{ marginTop: '1em' }}>Students loaded: {Object.keys(this.state.students).length}</Text>
                : <Text style={{ marginTop: '1em' }}>Students loaded: 0</Text>
            }

          </View>
        </View>



      </ImageBackground>


  </View>
}
}
