const { test, describe } = require('node:test')
const assert = require('node:assert')
const listHelper = require('../utils/list_helper')
const Blog = require('../models/blog')

describe('totalLikes', () => {
  test('of empty list is zero', () => {
    const blogs = []

    const result = listHelper.totalLikes(blogs)
    assert.strictEqual(result, 0)
  })

  test('when list has only one blog equals the likes of that', () => {
    const blogs = [new Blog({ likes: 10 })]

    const result = listHelper.totalLikes(blogs)
    assert.strictEqual(result, 10)
  })

  test('of bigger list is calculated right', () => {
    const blogs = [new Blog({ likes: 10 }), new Blog({ likes: 11 })]

    const result = listHelper.totalLikes(blogs)
    assert.strictEqual(result, 21)
  })
})