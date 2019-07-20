const url = 'https://my-json-server.typicode.com/ryanboris/instaclone/db'

const postMaker = post => {
  // Define all DOM related variable
  // Grab/SELECT the 'hook'
  const app = document.querySelector('#app')
  // CREATE elements
  const postContainer = document.createElement('div')
  const username = document.createElement('div')
  const thumbnailUrl = document.createElement('img')
  const imageUrl = document.createElement('img')
  const likes = document.createElement('div')
  const timestamp = document.createElement('div')

  // Appends

  app.appendChild(postContainer)
  postContainer.appendChild(username)
  postContainer.appendChild(thumbnailUrl)
  postContainer.appendChild(imageUrl)
  postContainer.appendChild(likes)
  postContainer.appendChild(timestamp)

  // Classes
  postContainer.className = 'post'
  username.className = 'username'
  thumbnailUrl.className = 'thumbnail'
  imageUrl.className = 'img-url'
  likes.className = 'likes'
  timestamp.className = 'timestamp'

  // TextContent
  username.textContent = post.username
  likes.textContent = post.likes
  timestamp.textContent = post.timestamp

  // Imgs
  thumbnailUrl.setAttribute('src', post.thumbnailUrl)
  imageUrl.setAttribute('src', post.imageUrl)
}

axios
  .get(url)
  .then(response => {
    response.data.posts.map(post => {
      postMaker(post)
    })
  })
  .catch(err => {
    console.error(err)
  })
