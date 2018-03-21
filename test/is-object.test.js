'use strict'

var tap = require( 'tap' )
var validate = require( '../src/index' )

tap.test( 'test',
  function ( t ) {
    var tests = [
      { expected: false, param: '' },
      { expected: false, param: -24 },
      { expected: false, param: -0.134 },
      { expected: false, param: 0 },
      { expected: false, param: 0.134 },
      { expected: false, param: 24 },
      { expected: false, param: true },
      { expected: true, param: { 'literal-object': true } },
      { expected: true, param: [ 'Array' ] },
      { expected: true, param: null },
      { expected: false, param: NaN },
      { expected: false, param: Infinity },
      { expected: false, param: -Infinity },
      { expected: true, param: new Date() },
      { expected: true, param: new Date( 'a' ) }
    ]

    tests.forEach(
      function ( test ) {
        var actual = validate( test.param ).isObject()

        t.same(
          actual,
          test.expected,
          '[ %param ], is an Object [ %expected ]'
            .replace( '%param', test.param )
            .replace( '%expected', test.expected )
        )
      }
    )

    t.end()
  }
)
