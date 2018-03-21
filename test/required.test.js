/* eslint-disable newline-per-chained-call */

'use strict'

var tap = require( 'tap' )
var validate = require( '../src/index' )

tap.test( 'test',
  function ( t ) {
    var expected = true
    var actual = validate( 'test string' ).required().isString()

    t.same( actual, expected )
    t.end()
  }
)
