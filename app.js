

fetchData('https://ipinfo.io/json')
  .then((data) => {
    console.log('data', data)
  })



function fetchData(url) {
  // console.log('fetch')
  return fetch(url)
    .then((res) => {
      console.log('res', res)
      return res.json()
    })
    // .then((json) => {
    //   console.log('json', json)
    //   let o = json
    //   return o
    // })
    .catch((err) => {
      console.log(err)
    })
}
