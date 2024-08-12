const { test, describe } = require('node:test')
const assert = require('node:assert')
const listHelper = require('../utils/list_helper')
const Blog = require('../models/blog')

describe('favoriteBlog', () => {
  test('of empty list is null', () => {
    const blogs = []

    const result = listHelper.favoriteBlog(blogs)
    assert.deepStrictEqual(result, null)
  })

  test('of single item list returns the only item', () => {
    const blogs = [new Blog({ likes: 10 })]

    const result = listHelper.favoriteBlog(blogs)
    assert.deepStrictEqual(result, blogs[0])
  })

  test('of blogs with same likes returns the first one', () => {
    const blogs = [new Blog({ likes: 10 }), new Blog({ likes: 10 })]

    const result = listHelper.favoriteBlog(blogs)
    assert.deepStrictEqual(result, blogs[0])
  })

  test('return blog with most likes', () => {
    const blogs = [new Blog({ likes: 10 }), new Blog({ likes: 15 })]

    const result = listHelper.favoriteBlog(blogs)
    assert.deepStrictEqual(result, blogs[1])
  })
})