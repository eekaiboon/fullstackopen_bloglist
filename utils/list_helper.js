const _ = require('lodash')

const dummy = () => {
  return 1
}

const totalLikes = (blogs) => {
  const reducer = (sum, blog) => {
    return sum + blog.likes
  }
  return blogs.reduce(reducer, 0)
}

const favoriteBlog = (blogs) => {
  if (blogs.length === 0) {
    return null
  }

  let favoriteBlog = blogs[0]

  for (let i = 1; i < blogs.length; i++) {
    if (blogs[i].likes > favoriteBlog.likes) {
      favoriteBlog = blogs[i]
    }
  }

  return favoriteBlog
}

const mostBlogs = (blogs) => {
  if (blogs.length === 0) {
    return null
  }

  const authorBlogs = _.countBy(blogs, 'author')
  const topAuthor = _.maxBy(Object.keys(authorBlogs), (author) => authorBlogs[author])

  return {
    author: topAuthor,
    blogs: authorBlogs[topAuthor],
  }
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs
}