'use strict'

var tap = require( 'tap' )
var validate = require( '../src/index' )

tap.test( 'test',
  function ( t ) {
    var tests = [
      { expected: true, param: '' },
      { expected: false, param: -24 },
      { expected: false, param: -0.134 },
      { expected: false, param: 0 },
      { expected: false, param: 0.134 },
      { expected: false, param: 24 },
      { expected: false, param: true },
      { expected: false, param: { 'literal-object': true } },
      { expected: false, param: [ 'Array' ] },
      { expected: false, param: null },
      { expected: false, param: NaN },
      { expected: false, param: Infinity },
      { expected: false, param: -Infinity },
      { expected: false, param: new Date() },
      { expected: false, param: new Date( 'a' ) }
    ]

    tests.forEach(
      function ( test ) {
        var actual = validate( test.param ).isString()

        t.same(
          actual,
          test.expected,
          '[ %param ], is a string [ %expected ]'
            .replace( '%param', test.param )
            .replace( '%expected', test.expected )
        )
      }
    )

    t.end()
  }
)
