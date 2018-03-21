'use strict'

var tap = require( 'tap' )
var validate = require( '../src/index' )

tap.test( 'test',
  function ( t ) {
    var my_variable = 'test string'
    var expected = true
    var actual = validate( my_variable, 'my_variable' ).isString()

    t.same( actual, expected )
    t.end()
  }
)

tap.test( 'test 2',
  function ( t ) {
    var my_variable = {
      key: 'test string'
    }

    var expected = true
    var actual = validate( my_variable, 'key' ).isString()

    t.same( actual, expected )
    t.end()
  }
)
