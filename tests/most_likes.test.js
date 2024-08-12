const { test, describe } = require('node:test')
const assert = require('node:assert')
const listHelper = require('../utils/list_helper')
const Blog = require('../models/blog')

describe('mostLikes', () => {
  test('of empty list is null', () => {
    const blogs = []

    const result = listHelper.mostLikes(blogs)
    assert.deepStrictEqual(result, null)
  })

  test('of single blog', () => {
    const blogs = [new Blog({ likes: 10, author: 'Kai' })]

    const result = listHelper.mostLikes(blogs)
    const expected = {
      author: 'Kai',
      likes: 10,
    }
    assert.deepStrictEqual(result, expected)
  })

  test('of multiple blogs', () => {
    const blogs = [
      new Blog({ likes: 10, author: 'Kai' }),
      new Blog({ likes: 10, author: 'Kai' }),
      new Blog({ likes: 10, author: 'Boon' }),
    ]

    const result = listHelper.mostLikes(blogs)
    const expected = {
      author: 'Kai',
      likes: 20,
    }
    assert.deepStrictEqual(result, expected)
  })
})