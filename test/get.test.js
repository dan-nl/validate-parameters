/* eslint-disable newline-per-chained-call */

'use strict'

var tap = require( 'tap' )
var validate = require( '../src/index' )

tap.test( 'test',
  function ( t ) {
    var expected = 'test string'
    var actual = validate( expected ).get().isString()

    t.same( actual, expected )
    t.end()
  }
)

tap.test( 'test fallback',
  function ( t ) {
    var expected = 'fallback string'
    var actual = validate( {} ).get().isString() || expected

    t.same( actual, expected )
    t.end()
  }
)
