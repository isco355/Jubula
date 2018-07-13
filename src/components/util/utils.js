const Promise = require('bluebird')

///////////////////
// network
//
const heroku = 'http://alsi-parliament.herokuapp.com'
const local = 'http://localhost:9292'
//const cubaHost = heroku
const cubaHost = local

const studentListUrl = `${cubaHost}/studentList`
const checkInUrl = `${cubaHost}/checkIn`


///////////////////
// day of week
//
let dayOfWeek = 'day not set'

function setDayOfWeek(day) {
  console.log("day of week set to: " + day)
  dayOfWeek = day
}

export function getDayOfWeek() {
  return dayOfWeek
}


///////////////////
// student data
//
let studentDataStore = []

export function setStudentDataStore(newData) {
  console.log("setStudentDataStore setting data: " + newData)
  studentDataStore = newData
}

export function getStudentDataStore() {
  return studentDataStore
}

export function loadStudentList() {
  console.log("LSL() retrieving students from: " + studentListUrl);
  return fetch(studentListUrl, {
    method: 'GET',
  })
  .then((response) => response.json())
  .then((json) => {
    setDayOfWeek(json.dayOfWeek)
    const studentData = json.studentData
    console.log("LSL() retrieved students: " + JSON.stringify(studentData))
    setStudentDataStore(studentData)
    return studentData
  })
}

export function getStudentRecord(studentId) {
  return getStudentDataStore()[studentId]
}


///////////////////
// dropoff utilities
//
function updateStudentDropoffUrl(studentId) {
  return `${cubaHost}/student/updateDropoff/${studentId}/`
}

/*
function npost() {
  fetch(updateStudentDrop, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      firstParam: 'yourValue',
      secondParam: 'yourOtherValue',
    }),
  });
}
*/


export function markStudentAsCheckedIn(studentId) {
    console.log("MSACI() checking in student: " + studentId + " to url: " + checkInUrl)
    const url = `${checkInUrl}/${studentId}`

    return new Promise((resolve) => {
      fetch(url, {
        method: 'GET',
      })
        .then((response) => {
          console.log("MSACI() response");
          resolve()
        })
      })
}

export function sendDropoffUpdate(studentId, updatedDropoffData) {
    console.log(`updating dropoff info for student: ${studentId} info: ${JSON.stringify(updatedDropoffData)}`)
    const url = updateStudentDropoffUrl(studentId)
    const payload = `[${JSON.stringify(updatedDropoffData)}]`
    console.log("USDI url: " + url + " payload: " + payload);

    return new Promise((resolve) => {
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Request-Method': 'POST',
        },
        body: payload
      })
      .then((response) => {
        console.log("USDI response: " + JSON.stringify(response));
        resolve()
      })
    })
}
