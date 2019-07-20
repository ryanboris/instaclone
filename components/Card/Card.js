const url = 'https://my-json-server.typicode.com/ryanboris/instaclone/data'

axios
  .get(url)
  .then(response => {
    console.log(response.data)
  })
  .catch(err => {
    console.error(err)
  })
