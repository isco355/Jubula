const cubaHost = `http://alsi-parliament.herokuapp.com`
const studentListUrl = `${cubaHost}/studentList`
const checkInUrl = `${cubaHost}/checkIn`

export function loadStudentList() {
    console.log("LSL() retrieving students from: " + studentListUrl);
    return fetch(studentListUrl, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((json) => {
        console.log("LSL() retrieved students: " + JSON.stringify(json))
        return json
      })
}

export function markStudentAsCheckedIn(studentId) {
    console.log("MSACI() checking in student: " + studentId + " to url: " + checkInUrl)
    const url = `${checkInUrl}/${studentId}`
    return fetch(url, {
      method: 'GET',
    })
      /*
      .then((response) => response.json())
      .then((json) => {
        console.log("MSACI() response: " + json)
      })
      */
}
