import React from 'react'
import { StyleSheet, Text, Button } from 'react-native';


const styles = StyleSheet.create({
  srow: {
      fontSize: 30,
      textAlign: 'center',
  },
})

/*
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
    buttonWrapper: {
        backgroundColor: '#00bcd4',
        marginTop: 20,
    },
    buttonIcon: {
        fontSize: 28,
        color: '#ffffff',
    },
  });
  */





export default class Output extends React.Component {

  checkIn(sname) {
    const nn = Object.values(sname)
    //const nn = sname
    console.log("checkIn for " + nn)
  }


  MatchButton(props) {
    const name = props.name
    console.log("matchbutton " + name);
    return (
      <div>
        <Text 
        stype={styles.srow}> { name } </Text>
        <Button title="Check in" onPress={checkIn({ name })} />
      </div>
    )
  }

  render() {
    console.log("StudentMatch render(), matches prop: " + this.props.matches)
    console.log("matches type: " + typeof this.props.matches);
    console.log("matches length: " + this.props.matches.length);
    let matches = []

    if (this.props.matches.length > 0) {
       matches = this.props.matches.map((stu) => {
        return <ul> {stu} </ul>
      })
    }
    //console.log("matches: " + JSON.stringify(matches))
    console.log("matches: " + matches)

    return (
      <div>
        {
          matches.map((sname) => {
            return <MatchButton name={sname} style={styles.srow}/>
          })
        }
      </div>
    );
  }
}
