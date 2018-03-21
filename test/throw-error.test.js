/* eslint-disable newline-per-chained-call */

'use strict'

var tap = require( 'tap' )
var validate = require( '../src/index' )

tap.test( 'test',
  function ( t ) {
    t.throws(
      function () {
        validate( null ).required().isString()
      }
    )
    t.end()
  }
)
