const { test, describe } = require('node:test')
const assert = require('node:assert')
const listHelper = require('../utils/list_helper')
const Blog = require('../models/blog')

describe('mostBlogs', () => {
  test('of empty list is null', () => {
    const blogs = []

    const result = listHelper.mostBlogs(blogs)
    assert.deepStrictEqual(result, null)
  })

  test('of single blog', () => {
    const blogs = [new Blog({ likes: 10, author: 'Kai' })]

    const result = listHelper.mostBlogs(blogs)
    const expected = {
      author: 'Kai',
      blogs: 1,
    }
    assert.deepStrictEqual(result, expected)
  })

  test('of multiple blogs', () => {
    const blogs = [
      new Blog({ likes: 10, author: 'Kai' }),
      new Blog({ likes: 10, author: 'Kai' }),
      new Blog({ likes: 10, author: 'Boon' }),
    ]

    const result = listHelper.mostBlogs(blogs)
    const expected = {
      author: 'Kai',
      blogs: 2,
    }
    assert.deepStrictEqual(result, expected)
  })
})