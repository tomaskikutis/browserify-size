'use strict'

var test = require('tape')
var size = require('./')

test('local', function (t) {
  t.plan(3)
  size('./fixture.js', function (err, bytes) {
    if (err) return t.end(err)
    t.ok(typeof bytes === 'number')
    t.ok(bytes > 100)
    t.ok(bytes < 500)
  })
})

test('remote', function (t) {
  t.plan(3)
  size('xtend', function (err, bytes) {
    if (err) return t.end(err)
    t.ok(typeof bytes === 'number')
    t.ok(bytes > 100)
    t.ok(bytes < 500)
  })
})
